import { Lock } from "lucide-react";
import { screens, sectionDescriptions } from "../data";
import SectionTitle from "./SectionTitle";

const baseUrl = import.meta.env.BASE_URL;

function BrowserChrome({ url }: { url: string }) {
  return (
    <div
      className="flex items-center bg-bg-soft border-b border-border"
      style={{ padding: "1.3mm 2mm", gap: "1.8mm" }}
    >
      <div className="flex shrink-0" style={{ gap: "1mm" }}>
        <span
          aria-hidden="true"
          className="rounded-full"
          style={{ width: "1.8mm", height: "1.8mm", background: "#FF5F57" }}
        />
        <span
          aria-hidden="true"
          className="rounded-full"
          style={{ width: "1.8mm", height: "1.8mm", background: "#FEBC2E" }}
        />
        <span
          aria-hidden="true"
          className="rounded-full"
          style={{ width: "1.8mm", height: "1.8mm", background: "#28C840" }}
        />
      </div>
      <div
        className="flex min-w-0 flex-1 items-center justify-center rounded-full border border-border bg-white"
        style={{ padding: "0.5mm 2.5mm", gap: "1.2mm" }}
      >
        <Lock
          size={7}
          strokeWidth={2.4}
          className="shrink-0 text-em"
          aria-hidden="true"
        />
        <span
          className="font-mono font-medium text-secondary truncate"
          style={{ fontSize: "2.2mm", letterSpacing: "0.01em" }}
        >
          https://{url}
        </span>
      </div>
    </div>
  );
}

export default function ScreensBlock() {
  return (
    <section>
      <SectionTitle
        number="01"
        title="서비스 화면"
        subtitle="LIVE SCREENS"
        description={sectionDescriptions.screens}
      />
      <div
        className="grid grid-cols-1"
        style={{ gap: "4mm", marginTop: "5mm" }}
      >
        {screens.map((s) => (
          <figure
            key={s.title}
            className="flex flex-col overflow-hidden rounded-[3mm] border border-border bg-white screen-card"
            style={{
              boxShadow:
                "0 1mm 3mm rgba(0,0,0,0.06), 0 4mm 16mm rgba(0,0,0,0.08)",
            }}
          >
            <BrowserChrome url={s.url} />

            <div
              className="relative overflow-hidden bg-bg-soft screen-card-media"
              style={{ aspectRatio: "16 / 9" }}
            >
              <img
                src={`${baseUrl}${s.image}`}
                alt={`${s.title} 화면`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            <figcaption
              className="flex flex-col border-t border-border"
              style={{ padding: "2mm 3mm", gap: "0.8mm" }}
            >
              <div className="flex items-center" style={{ gap: "2mm" }}>
                <span
                  className="font-mono font-bold uppercase text-accent-deep bg-accent-bg rounded-[1mm] shrink-0"
                  style={{
                    fontSize: "2.1mm",
                    padding: "0.4mm 1.6mm",
                    letterSpacing: "0.12em",
                  }}
                >
                  {s.badge}
                </span>
                <h3
                  className="font-display font-bold text-fg truncate"
                  style={{
                    fontSize: "3.2mm",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
              </div>
              <p
                className="font-display text-muted"
                style={{
                  fontSize: "2.6mm",
                  lineHeight: 1.4,
                  letterSpacing: "-0.005em",
                }}
              >
                {s.desc}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
