import { userFlow, sectionDescriptions } from "../data";
import SectionTitle from "./SectionTitle";

export default function FlowBlock() {
  return (
    <section className="flex h-full flex-col">
      <SectionTitle
        number="03"
        title="사용자 흐름"
        subtitle="USER FLOW"
        description={sectionDescriptions.flow}
      />
      <ol
        className="grid grid-cols-1 flex-1"
        style={{ gap: "3.5mm", marginTop: "6mm" }}
      >
        {userFlow.map((s) => (
          <li
            key={s.num}
            className="relative flex flex-col rounded-[4mm] border border-border bg-white"
            style={{ padding: "4mm 5mm" }}
          >
            <div className="flex items-baseline" style={{ gap: "3.5mm" }}>
              <span
                className="font-display font-black text-accent shrink-0"
                style={{
                  fontSize: "9mm",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {s.num}
              </span>
              <h3
                className="font-display font-bold text-fg"
                style={{
                  fontSize: "4.6mm",
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
            </div>
            <p
              className="text-fg"
              style={{
                fontSize: "3.5mm",
                lineHeight: 1.45,
                marginTop: "2.5mm",
              }}
            >
              {s.desc}
            </p>
            <p
              className="text-muted"
              style={{
                fontSize: "3.05mm",
                lineHeight: 1.5,
                marginTop: "1.5mm",
              }}
            >
              {s.detail}
            </p>
            <span
              className="font-mono font-medium text-accent-deep self-start rounded-[1.5mm] bg-accent-bg/60"
              style={{
                fontSize: "2.7mm",
                marginTop: "2.5mm",
                padding: "1mm 2.2mm",
                letterSpacing: "-0.005em",
              }}
            >
              {s.meta}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
