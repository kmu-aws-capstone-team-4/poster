import { Maximize2, Printer } from "lucide-react";

interface ToolbarProps {
  fitMode: "auto" | "100";
  onFitChange: (m: "auto" | "100") => void;
}

export default function Toolbar({ fitMode, onFitChange }: ToolbarProps) {
  return (
    <div className="toolbar print:hidden">
      <button
        type="button"
        className={fitMode === "auto" ? "active" : ""}
        onClick={() => onFitChange("auto")}
        title="화면에 맞춤"
      >
        Fit
      </button>
      <button
        type="button"
        className={fitMode === "100" ? "active" : ""}
        onClick={() => onFitChange("100")}
        title="실제 크기 (100%)"
      >
        <Maximize2 size={12} />
        100%
      </button>
      <button type="button" onClick={() => window.print()} title="브라우저 인쇄">
        <Printer size={12} />
        Print / PDF
      </button>
    </div>
  );
}
