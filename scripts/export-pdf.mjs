import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { findAvailablePort } from "./_port.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "output");
const OUT_FILE = join(OUT_DIR, "mefit-poster-54.pdf");

const POSTER_WIDTH_MM = 930;
const POSTER_HEIGHT_MM = 1000;

mkdirSync(OUT_DIR, { recursive: true });

function startPreview(port) {
  const child = spawn(
    "bun",
    ["run", "preview", "--port", String(port), "--strictPort"],
    {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  return child;
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
      deviceScaleFactor: 2,
      viewport: { width: 3520, height: 3780 },
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

    await page.pdf({
      path: OUT_FILE,
      width: `${POSTER_WIDTH_MM}mm`,
      height: `${POSTER_HEIGHT_MM}mm`,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    console.log(`[poster] PDF saved: ${OUT_FILE}`);
    await browser.close();
  } finally {
    child.kill("SIGTERM");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
