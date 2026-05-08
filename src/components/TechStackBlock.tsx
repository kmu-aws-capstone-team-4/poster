import { techStack, sectionDescriptions } from "../data";
import SectionTitle from "./SectionTitle";

export default function TechStackBlock() {
  return (
    <section>
      <SectionTitle
        number="07"
        title="사용 기술"
        subtitle="TECH STACK"
        description={sectionDescriptions.techStack}
      />
      <div
        className="grid grid-cols-2"
        style={{ gap: "2.5mm", marginTop: "5mm" }}
      >
        {techStack.map((g) => (
          <div
            key={g.group}
            className="rounded-[3mm] border border-border bg-white"
            style={{ padding: "2.8mm 3.2mm" }}
          >
            <div className="flex items-center" style={{ gap: "1.8mm" }}>
              <span
                className="inline-flex items-center justify-center rounded-[1.5mm] bg-fg text-white"
                style={{ width: "5.5mm", height: "5.5mm" }}
              >
                <g.Icon size={10} strokeWidth={2.4} />
              </span>
              <span
                className="font-display font-bold uppercase text-accent-deep"
                style={{ fontSize: "2.7mm", letterSpacing: "0.1em" }}
              >
                {g.group}
              </span>
            </div>
            <div
              className="flex flex-wrap"
              style={{ gap: "1.2mm", marginTop: "1.8mm" }}
            >
              {g.items.map((it) => (
                <span
                  key={it}
                  className="inline-flex items-center rounded-full border border-border bg-bg-soft font-display font-medium text-fg"
                  style={{
                    fontSize: "2.55mm",
                    padding: "0.6mm 2mm",
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
