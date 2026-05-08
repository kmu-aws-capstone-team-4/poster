import { Check, X } from "lucide-react";
import { comparison, sectionDescriptions, type CompareCell } from "../data";
import SectionTitle from "./SectionTitle";

function CellContent({ value, isMefit }: { value: CompareCell; isMefit: boolean }) {
  if (value === true) {
    return (
      <Check
        size={14}
        strokeWidth={2.6}
        className={isMefit ? "text-accent" : "text-em"}
      />
    );
  }
  if (value === false) {
    return <X size={14} strokeWidth={2.6} className="text-gray-400" />;
  }
  return (
    <span
      className={
        "font-display font-semibold " +
        (isMefit ? "text-accent-deep" : "text-secondary")
      }
      style={{ fontSize: "3.4mm", letterSpacing: "-0.01em" }}
    >
      {value}
    </span>
  );
}

export default function ComparisonBlock() {
  return (
    <section className="flex h-full flex-col">
      <SectionTitle
        number="04"
        title="비교"
        subtitle="VS OTHERS"
        description={sectionDescriptions.comparison}
      />
      <div
        className="rounded-[4mm] border border-border bg-white overflow-hidden"
        style={{ marginTop: "6mm" }}
      >
        <div
          className="grid bg-bg-soft"
          style={{
            gridTemplateColumns: "minmax(0, 1.3fr) repeat(3, minmax(0, 1fr))",
            padding: "3.5mm 0",
          }}
        >
          <div></div>
          {comparison.columns.map((c, i) => (
            <div
              key={c}
              className={
                "text-center font-display font-bold " +
                (i === 2 ? "text-accent-deep" : "text-muted")
              }
              style={{
                fontSize: i === 2 ? "4mm" : "3.6mm",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              {c}
            </div>
          ))}
        </div>
        {comparison.rows.map((row, i) => (
          <div
            key={row.label}
            className="grid items-center"
            style={{
              gridTemplateColumns: "minmax(0, 1.3fr) repeat(3, minmax(0, 1fr))",
              borderTop: i > 0 ? "1px solid var(--color-border)" : "none",
              padding: "3mm 0",
            }}
          >
            <div
              className="font-display font-medium text-fg"
              style={{
                fontSize: "3.6mm",
                paddingLeft: "4.5mm",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              {row.label}
            </div>
            {row.values.map((v, j) => (
              <div
                key={j}
                className={
                  "flex items-center justify-center " +
                  (j === 2 ? "bg-accent-bg/40" : "")
                }
                style={{ alignSelf: "stretch" }}
              >
                <CellContent value={v} isMefit={j === 2} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
