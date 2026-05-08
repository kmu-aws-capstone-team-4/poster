import { Sparkles, Users } from "lucide-react";
import { target, sectionDescriptions } from "../data";
import SectionTitle from "./SectionTitle";

export default function TargetBlock() {
  return (
    <section className="flex h-full flex-col">
      <SectionTitle
        number="02"
        title="이용 대상 · 문제"
        subtitle="TARGET"
        description={sectionDescriptions.target}
      />
      <div
        className="flex flex-1 flex-col rounded-[5mm] border border-border bg-bg-soft"
        style={{ padding: "6mm 6.5mm", marginTop: "6mm", gap: "4mm" }}
      >
        <div
          className="inline-flex items-center self-start rounded-full bg-fg text-white"
          style={{ padding: "2mm 4.5mm", gap: "2.2mm" }}
        >
          <Users size={14} strokeWidth={2.4} />
          <span
            className="font-display font-bold"
            style={{ fontSize: "3.8mm", letterSpacing: "-0.01em" }}
          >
            {target.primary}
          </span>
        </div>

        <div className="grid grid-cols-1" style={{ gap: "3mm" }}>
          {target.problems.map((p) => (
            <div
              key={p.title}
              className="rounded-[3mm] border border-border bg-white"
              style={{ padding: "3.5mm 4mm" }}
            >
              <div
                className="font-display font-bold text-fg"
                style={{ fontSize: "4.2mm", lineHeight: 1.2 }}
              >
                {p.title}
              </div>
              <div
                className="whitespace-pre-line text-muted"
                style={{
                  fontSize: "3.5mm",
                  lineHeight: 1.45,
                  marginTop: "1.5mm",
                }}
              >
                {p.desc}
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-[3mm] border border-accent/30 bg-accent-bg"
          style={{ padding: "3.5mm 4.5mm" }}
        >
          <div className="flex items-center" style={{ gap: "2mm" }}>
            <Sparkles
              size={13}
              strokeWidth={2.4}
              className="text-accent-deep"
            />
            <span
              className="font-display font-bold uppercase text-accent-deep"
              style={{
                fontSize: "3.3mm",
                letterSpacing: "0.1em",
              }}
            >
              사용자 경험
            </span>
          </div>
          <ul style={{ marginTop: "2.5mm" }}>
            {target.experience.map((e) => (
              <li
                key={e}
                className="flex items-start text-fg"
                style={{
                  fontSize: "3.6mm",
                  lineHeight: 1.5,
                  marginTop: "1.5mm",
                  gap: "2.2mm",
                }}
              >
                <span
                  aria-hidden="true"
                  className="mt-[2.2mm] inline-block shrink-0 rounded-full bg-accent"
                  style={{ width: "1.6mm", height: "1.6mm" }}
                />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
