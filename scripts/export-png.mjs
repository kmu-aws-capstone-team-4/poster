import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { findAvailablePort } from "./_port.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "output");
const OUT_FILE = join(OUT_DIR, "mefit-poster-54.png");

const MM_TO_PX_96 = 96 / 25.4;
const POSTER_WIDTH_MM = 930;
const POSTER_HEIGHT_MM = 1000;
const SCALE = Number(process.env.POSTER_SCALE ?? "2");

mkdirSync(OUT_DIR, { recursive: true });

const widthPx = Math.round(POSTER_WIDTH_MM * MM_TO_PX_96);
const heightPx = Math.round(POSTER_HEIGHT_MM * MM_TO_PX_96);

function startPreview(port) {
  return spawn(
    "bun",
    ["run", "preview", "--port", String(port), "--strictPort"],
    {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
}

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      /* not ready */
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`Server did not start at ${url}`);
}

async function main() {
  const port = process.env.POSTER_PORT
    ? Number(process.env.POSTER_PORT)
    : await findAvailablePort();
  const child = startPreview(port);
  const url = `http://localhost:${port}/`;

  try {
    await waitForServer(url);
    console.log(`[poster] preview ready: ${url}`);

    const browser = await chromium.launch();
    const ctx = await browser.newContext({
      deviceScaleFactor: SCALE,
      viewport: { width: widthPx, height: heightPx },
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

    await page.locator(".poster-frame").waitFor({ state: "attached" });
    const box = await page.locator(".poster-frame").boundingBox();
    if (!box) {
      throw new Error("Could not determine poster bounding box");
    }
    await page.screenshot({
      path: OUT_FILE,
      type: "png",
      clip: {
        x: box.x,
        y: box.y,
        width: box.width,
        height: box.height,
      },
    });

    console.log(
      `[poster] PNG saved: ${OUT_FILE} (${widthPx}x${heightPx} @ ${SCALE}x = ${widthPx * SCALE}x${heightPx * SCALE})`,
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
