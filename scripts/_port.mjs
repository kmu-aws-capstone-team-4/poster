import { createServer } from "node:net";

export function findAvailablePort(start = 4188, end = 4220) {
  return new Promise((resolve, reject) => {
    let p = start;
    const tryNext = () => {
      if (p > end) {
        reject(new Error(`No available port in range ${start}-${end}`));
        return;
      }
      const srv = createServer();
      srv.unref();
      srv.on("error", () => {
        p++;
        tryNext();
      });
      srv.listen(p, () => {
        srv.close(() => resolve(p));
      });
    };
    tryNext();
  });
}
