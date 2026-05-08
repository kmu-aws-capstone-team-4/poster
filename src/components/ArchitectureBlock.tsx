import { architectureLayers, sectionDescriptions } from "../data";
import SectionTitle from "./SectionTitle";

const baseUrl = import.meta.env.BASE_URL;

interface ArchitectureBlockProps {
  showLayers?: boolean;
  showImage?: boolean;
  showTitle?: boolean;
  imageMaxHeight?: string;
}

export default function ArchitectureBlock({
  showLayers = true,
  showImage = true,
  showTitle = true,
  imageMaxHeight = "240mm",
}: ArchitectureBlockProps) {
  return (
    <section className="flex h-full flex-col">
      {showTitle && (
        <SectionTitle
          number="08"
          title="시스템 아키텍처"
          subtitle="ARCHITECTURE"
          description={sectionDescriptions.architecture}
        />
      )}

      {showImage && (
        <figure
          className="overflow-hidden rounded-[4mm] border border-border bg-bg-soft flex-1 flex flex-col"
          style={{
            padding: "3mm",
            marginTop: showTitle ? "5mm" : "0",
            minHeight: 0,
          }}
        >
          <div
            className="flex flex-1 items-center justify-center"
            style={{ minHeight: 0, width: "100%" }}
          >
            <img
              src={`${baseUrl}diagrams/full_infrastructure.png`}
              alt="MeFit 통합 인프라 다이어그램"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                maxHeight: imageMaxHeight,
                objectFit: "contain",
              }}
            />
          </div>
          <figcaption
            className="font-display text-center text-muted shrink-0"
            style={{
              fontSize: "2.9mm",
              marginTop: "2mm",
              letterSpacing: "0.02em",
            }}
          >
            full_infrastructure.png · k3s + AWS Lambda 5종 + Celery
          </figcaption>
        </figure>
      )}

      {showLayers && (
        <div
          className="grid grid-cols-2"
          style={{
            gap: "2.5mm",
            marginTop: showImage ? "4mm" : showTitle ? "6mm" : "0",
          }}
        >
          {architectureLayers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-[3mm] border border-border bg-white flex flex-col"
              style={{ padding: "3mm 3.5mm" }}
            >
              <div className="flex items-center" style={{ gap: "2mm" }}>
                <span
                  className="inline-flex items-center justify-center rounded-[1.5mm] bg-accent-bg text-accent-deep"
                  style={{ width: "6.5mm", height: "6.5mm" }}
                >
                  <layer.Icon size={11} strokeWidth={2.4} />
                </span>
                <span
                  className="font-display font-bold text-fg"
                  style={{
                    fontSize: "3.2mm",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                  }}
                >
                  {layer.title}
                </span>
              </div>
              <ul style={{ marginTop: "1.5mm" }}>
                {layer.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start text-secondary"
                    style={{
                      fontSize: "2.65mm",
                      lineHeight: 1.4,
                      marginTop: "0.5mm",
                      gap: "1.3mm",
                    }}
                  >
                    <span className="text-accent shrink-0">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
