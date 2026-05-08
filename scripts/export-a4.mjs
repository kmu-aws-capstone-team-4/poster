import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument } from "pdf-lib";
import { findAvailablePort } from "./_port.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "output");
const OUT_FILE = join(OUT_DIR, "mefit-poster-54-a4-tiles.pdf");

const POSTER_W = 930;
const POSTER_H = 1000;
const A4_W = 210;
const A4_H = 297;

mkdirSync(OUT_DIR, { recursive: true });

function startPreview(port) {
  return spawn("bun", ["run", "preview", "--port", String(port), "--strictPort"], {
    cwd: ROOT,
    stdio: ["ignore", "pipe", "pipe"],
  });
}

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(url);
      if (r.ok) return true;
    } catch {
      /* not ready */
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`Server did not start at ${url}`);
}

const cols = Math.ceil(POSTER_W / A4_W);
const rows = Math.ceil(POSTER_H / A4_H);
const totalTiles = cols * rows;

async function applyTileTransform(page, col, row, debugRuler) {
  await page.evaluate(
    ({ col, row, A4_W, A4_H, cols, rows, debugRuler }) => {
      const root = document.documentElement;
      const body = document.body;
      const stage = document.querySelector(".poster-stage");
      const frame = document.querySelector(".poster-frame");
      const toolbar = document.querySelector(".toolbar");
      const info = document.querySelector(".poster-info");
      if (toolbar) toolbar.style.display = "none";
      if (info) info.style.display = "none";

      // styles.css 의 `@page { size: 930mm 1000mm }` 를 A4 로 덮어쓴다.
      // 그대로 두면 Playwright `preferCSSPageSize:false` 기본값에서
      // 930×1000 콘텐츠를 A4 한 장에 통째로 축소해 끼워넣는다.
      // (Cascade: 같은 @page 규칙은 뒤에 선언된 것이 이긴다.)
      let pageOverride = document.querySelector("#tile-page-override");
      if (!pageOverride) {
        pageOverride = document.createElement("style");
        pageOverride.id = "tile-page-override";
        pageOverride.textContent = `@page { size: ${A4_W}mm ${A4_H}mm; margin: 0; }`;
        document.head.appendChild(pageOverride);
      }

       if (debugRuler) {
         let pageBounds = document.querySelector("#tile-page-bounds");
         if (!pageBounds) {
           pageBounds = document.createElement("div");
           pageBounds.id = "tile-page-bounds";
           pageBounds.style.cssText = `
             position: fixed;
             inset: 0;
             pointer-events: none;
             border: 0.01mm solid rgba(0, 0, 0, 0);
             z-index: 1;
           `;
           document.body.appendChild(pageBounds);
         }
       }

      if (debugRuler && !document.querySelector("#tile-debug-ruler")) {
        const ruler = document.createElement("div");
        ruler.id = "tile-debug-ruler";
        ruler.style.cssText = `
          position: fixed;
          left: 6mm;
          bottom: 6mm;
          width: 100mm;
          height: 5mm;
          background: #ff00ff;
          border: 0.2mm solid #000000;
          z-index: 2;
          box-sizing: border-box;
        `;
        const label = document.createElement("div");
        label.textContent = "100mm";
        label.style.cssText = `
          position: absolute;
          top: -4mm;
          left: 0;
          font-family: 'IBM Plex Sans KR', monospace;
          font-size: 2.8mm;
          color: rgba(0,0,0,0.85);
          background: rgba(255,255,255,0.85);
          padding: 0 1mm;
        `;
        ruler.appendChild(label);
        document.body.appendChild(ruler);
      }

      root.style.background = "#ffffff";
      body.style.background = "#ffffff";
      body.style.margin = "0";
      body.style.padding = "0";
      if (stage) {
        stage.style.padding = "0";
        stage.style.background = "#ffffff";
        stage.style.minHeight = "0";
        stage.style.display = "block";
      }
      if (frame) {
        frame.style.boxShadow = "none";
        // styles.css 의 `@media print { .poster-stage[data-fit="auto"]
        //   .poster-frame { transform: none !important } }` 를 이긴다.
        // 인라인 !important 는 author rule !important 보다 우선하므로
        // setProperty 로 명시적으로 important 플래그를 붙여야 한다.
        frame.style.setProperty(
          "transform",
          `translate(${-col * A4_W}mm, ${-row * A4_H}mm)`,
          "important",
        );
        frame.style.transformOrigin = "top left";
      }

       if (debugRuler) {
         const overlay = document.createElement("div");
         overlay.id = "tile-overlay";
         overlay.style.cssText = `
           position: fixed; bottom: 4mm; right: 4mm;
           z-index: 9999;
           font-family: 'IBM Plex Sans KR', monospace;
           font-size: 3mm;
           font-weight: 600;
           color: rgba(10,10,10,0.5);
           padding: 1mm 2mm;
           border: 1px dashed rgba(10,10,10,0.3);
           background: rgba(255,255,255,0.85);
         `;
         const colLetter = String.fromCharCode(65 + col);
         overlay.textContent = `${colLetter}${row + 1}  ·  열 ${col + 1}/${cols} · 행 ${row + 1}/${rows}`;
         document.body.appendChild(overlay);
       }
    },
    { col, row, A4_W, A4_H, cols, rows, debugRuler },
  );
}

async function clearTileTransform(page) {
  await page.evaluate(() => {
    document.querySelector("#tile-overlay")?.remove();
    document.querySelector("#tile-page-bounds")?.remove();
    document.querySelector("#tile-debug-ruler")?.remove();
  });
}

async function main() {
  const port = process.env.POSTER_PORT
    ? Number(process.env.POSTER_PORT)
    : await findAvailablePort();
  const debugRuler = process.env.TILE_DEBUG_RULER === "1";
  const child = startPreview(port);
  const url = `http://localhost:${port}/`;

  try {
    await waitForServer(url);
    console.log(`[poster:a4] preview ready: ${url}`);
    console.log(
      `[poster:a4] grid: ${cols} cols × ${rows} rows = ${totalTiles} tiles`,
    );

    const browser = await chromium.launch();
    const ctx = await browser.newContext({
      deviceScaleFactor: 2,
      viewport: { width: 794, height: 1123 },
    });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() =>
      Promise.all(
        Array.from(document.images).map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.addEventListener("load", resolve, { once: true });
                img.addEventListener("error", resolve, { once: true });
              }),
        ),
      ),
    );
    // no-op: debugRuler is passed to page.evaluate per tile

    const merged = await PDFDocument.create();

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        await applyTileTransform(page, col, row, debugRuler);
        await page.waitForTimeout(120);
        const clip = {
          x: 0,
          y: 0,
          width: (A4_W / 25.4) * 96,
          height: (A4_H / 25.4) * 96,
        };
        const imgBuf = await page.screenshot({
          clip,
          omitBackground: false,
          type: "png",
        });
        await clearTileTransform(page);
        const png = await merged.embedPng(imgBuf);
        const pdfPage = merged.addPage([
          (A4_W / 25.4) * 72,
          (A4_H / 25.4) * 72,
        ]);
        pdfPage.drawImage(png, {
          x: 0,
          y: 0,
          width: pdfPage.getWidth(),
          height: pdfPage.getHeight(),
        });
        const idx = row * cols + col + 1;
        const colLetter = String.fromCharCode(65 + col);
        console.log(
          `[poster:a4]   tile ${idx}/${totalTiles}  ${colLetter}${row + 1}`,
        );
      }
    }

    const finalPdf = await merged.save();
    writeFileSync(OUT_FILE, finalPdf);
    console.log(
      `[poster:a4] PDF saved: ${OUT_FILE} (${cols}×${rows}=${totalTiles} A4 pages)`,
    );
    await browser.close();
  } finally {
    child.kill("SIGTERM");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
