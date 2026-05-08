import { features, sectionDescriptions } from "../data";
import SectionTitle from "./SectionTitle";

export default function FeaturesBlock() {
  return (
    <section>
      <SectionTitle
        number="06"
        title="핵심 기능"
        subtitle="6 KEY FEATURES"
        description={sectionDescriptions.features}
      />
      <div
        className="grid grid-cols-1"
        style={{ gap: "3mm", marginTop: "5mm" }}
      >
        {features.map((f) => (
          <article
            key={f.title}
            className="flex flex-col rounded-[4mm] border border-border bg-white"
            style={{ padding: "5mm 5.5mm" }}
          >
            <div className="flex items-center justify-between">
              <span
                className="inline-flex items-center justify-center rounded-[2.5mm] bg-accent-bg text-accent-deep"
                style={{ width: "11mm", height: "11mm" }}
              >
                <f.Icon size={18} strokeWidth={2.2} />
              </span>
              {f.badge && (
                <span
                  className="rounded-full bg-fg font-display font-bold uppercase text-white"
                  style={{
                    fontSize: "2.8mm",
                    padding: "0.9mm 2.8mm",
                    letterSpacing: "0.05em",
                  }}
                >
                  {f.badge}
                </span>
              )}
            </div>
            <h3
              className="font-display font-bold text-fg"
              style={{
                fontSize: "5mm",
                lineHeight: 1.15,
                marginTop: "3.5mm",
                letterSpacing: "-0.02em",
              }}
            >
              {f.title}
            </h3>
            <p
              className="text-secondary"
              style={{
                fontSize: "3.4mm",
                lineHeight: 1.55,
                marginTop: "2mm",
              }}
            >
              {f.desc}
            </p>
            {f.bullets && (
              <ul
                className="border-t border-border"
                style={{ marginTop: "3mm", paddingTop: "2.5mm" }}
              >
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start text-muted"
                    style={{
                      fontSize: "3mm",
                      lineHeight: 1.4,
                      marginTop: "0.8mm",
                      gap: "1.8mm",
                    }}
                  >
                    <span className="text-accent shrink-0 font-bold">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
