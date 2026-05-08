import { Github, Globe } from "lucide-react";
import { meta } from "../data";

const baseUrl = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between border-t-2 border-fg/15"
      style={{ paddingTop: "5mm", gap: "8mm" }}
    >
      <div className="flex items-center" style={{ gap: "5mm" }}>
        <img
          src={`${baseUrl}logo-korean.png`}
          alt="미핏"
          style={{ height: "9mm", width: "auto" }}
        />
        <span
          className="font-display text-muted"
          style={{ fontSize: "3.6mm", letterSpacing: "-0.01em" }}
        >
          © 2026 {meta.team} · 김신건 · 김석준 · 김유진 · 이주현
        </span>
      </div>

      <div className="flex items-center" style={{ gap: "7mm" }}>
        <span
          className="inline-flex items-center font-display font-medium text-secondary"
          style={{ fontSize: "3.6mm", gap: "1.8mm", letterSpacing: "-0.01em" }}
        >
          <Globe size={14} strokeWidth={2.4} className="text-accent" />
          {meta.demoSite}
        </span>
        <span
          className="inline-flex items-center font-display font-medium text-secondary"
          style={{ fontSize: "3.6mm", gap: "1.8mm", letterSpacing: "-0.01em" }}
        >
          <Github size={14} strokeWidth={2.4} className="text-fg" />
          {meta.github}
        </span>
      </div>
    </footer>
  );
}
