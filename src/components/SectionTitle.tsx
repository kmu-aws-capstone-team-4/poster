interface SectionTitleProps {
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function SectionTitle({
  number,
  title,
  subtitle,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={className}>
      <div
        aria-hidden="true"
        className="bg-accent"
        style={{ height: "1mm", width: "16mm", marginBottom: "3mm" }}
      />
      <div className="flex items-baseline flex-wrap" style={{ gap: "3.5mm" }}>
        <span
          className="font-display font-black text-accent"
          style={{ fontSize: "8.5mm", lineHeight: 1, letterSpacing: "-0.02em" }}
        >
          {number}
        </span>
        <h2
          className="font-display font-black text-fg"
          style={{
            fontSize: "8.5mm",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <span
            className="self-baseline font-display font-semibold text-muted"
            style={{
              fontSize: "3.6mm",
              letterSpacing: "0.04em",
              marginLeft: "1mm",
            }}
          >
            {subtitle}
          </span>
        )}
      </div>
      {description && (
        <p
          className="font-display text-secondary whitespace-pre-line"
          style={{
            fontSize: "3.4mm",
            lineHeight: 1.5,
            marginTop: "2.5mm",
            letterSpacing: "-0.005em",
            maxWidth: "100%",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
