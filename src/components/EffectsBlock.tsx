import { expectedEffects, sectionDescriptions } from "../data";
import SectionTitle from "./SectionTitle";

export default function EffectsBlock() {
  return (
    <section className="flex h-full flex-col">
      <SectionTitle
        number="05"
        title="기대 효과"
        subtitle="EFFECTS"
        description={sectionDescriptions.effects}
      />
      <div
        className="grid grid-cols-1"
        style={{ gap: "3mm", marginTop: "5mm" }}
      >
        {expectedEffects.map((e) => (
          <article
            key={e.title}
            className="rounded-[4mm] border border-border bg-white"
            style={{ padding: "4mm 5mm" }}
          >
            <div className="flex items-center" style={{ gap: "2.5mm" }}>
              <span
                className="inline-flex items-center justify-center rounded-[2mm] bg-em-light text-em"
                style={{ width: "9mm", height: "9mm" }}
              >
                <e.Icon size={14} strokeWidth={2.4} />
              </span>
              <span
                className="font-display font-bold text-fg"
                style={{
                  fontSize: "4mm",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                }}
              >
                {e.title}
              </span>
            </div>
            <div
              className="font-display font-black text-accent"
              style={{
                fontSize: "4.8mm",
                lineHeight: 1.1,
                marginTop: "2mm",
                letterSpacing: "-0.02em",
              }}
            >
              {e.metric}
            </div>
            <p
              className="text-secondary"
              style={{
                fontSize: "3.05mm",
                lineHeight: 1.55,
                marginTop: "1.8mm",
                letterSpacing: "-0.005em",
              }}
            >
              {e.desc}
            </p>
            <ul
              className="border-t border-border"
              style={{ marginTop: "2.5mm", paddingTop: "2mm" }}
            >
              {e.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start text-muted"
                  style={{
                    fontSize: "2.95mm",
                    lineHeight: 1.4,
                    marginTop: "0.6mm",
                    gap: "1.5mm",
                  }}
                >
                  <span className="text-accent shrink-0 font-bold">·</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
