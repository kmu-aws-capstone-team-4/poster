import { useEffect, useState } from "react";
import Toolbar from "./components/Toolbar";
import Poster from "./components/Poster";

const PRINT_DPI_BASE = 96;
const POSTER_WIDTH_MM = 930;
const SCALE_PADDING_PX = 80;

function calcAutoScale(): number {
  const widthPx = (POSTER_WIDTH_MM / 25.4) * PRINT_DPI_BASE;
  const target = window.innerWidth - SCALE_PADDING_PX;
  return Math.min(1, target / widthPx);
}

export default function App() {
  const [fitMode, setFitMode] = useState<"auto" | "100">("auto");
  const [scale, setScale] = useState(0.32);

  useEffect(() => {
    const update = () => setScale(calcAutoScale());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <Toolbar fitMode={fitMode} onFitChange={setFitMode} />
      <div
        className="poster-stage"
        data-fit={fitMode}
        style={
          fitMode === "auto"
            ? ({ "--poster-scale": String(scale) } as React.CSSProperties)
            : undefined
        }
      >
        <Poster />
      </div>
      <div className="poster-info">
        930 × 1000 mm · {fitMode === "auto" ? `${Math.round(scale * 100)}%` : "100%"} · meFit · 54팀
      </div>
    </>
  );
}
