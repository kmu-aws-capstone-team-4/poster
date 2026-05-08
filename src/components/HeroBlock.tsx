import { meta, heroHashtags } from "../data";

export default function HeroBlock() {
  return (
    <section
      className="relative overflow-hidden rounded-[6mm] border border-border shrink-0"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #112027 60%, #062a36 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at 18% 30%, rgba(9,145,178,0.45), transparent 55%), radial-gradient(circle at 88% 75%, rgba(6,182,212,0.35), transparent 60%)",
        }}
      />

      <div
        className="relative grid"
        style={{
          gridTemplateColumns: "minmax(0, 1.55fr) minmax(0, 1fr)",
          gap: "10mm",
          padding: "11mm 14mm 11mm",
          alignItems: "stretch",
        }}
      >
        <div className="flex flex-col" style={{ minWidth: 0 }}>
          <div
            className="inline-flex items-center self-start rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
            style={{ padding: "2mm 5mm", gap: "2.5mm" }}
          >
            <span
              className="rounded-full bg-em"
              style={{ width: "2.2mm", height: "2.2mm" }}
            />
            <span
              className="font-display font-bold text-white/90"
              style={{ fontSize: "3.8mm", letterSpacing: "-0.01em" }}
            >
              모두가 미핏으로 면접 준비 중
            </span>
          </div>

          <h1
            className="font-display font-black tracking-[-0.04em] text-white whitespace-nowrap"
            style={{ fontSize: "21mm", lineHeight: 1.05, marginTop: "6mm" }}
          >
            아직 핏이 <span className="gradient-text">맞지 않아도</span> 괜찮아.
          </h1>

          <p
            className="whitespace-pre-line font-display text-white/80"
            style={{
              fontSize: "5.8mm",
              lineHeight: 1.55,
              marginTop: "5mm",
              maxWidth: "500mm",
              letterSpacing: "-0.005em",
              fontWeight: 500,
            }}
          >
            {meta.tagline}
          </p>

          <span
            className="font-display font-semibold text-white/55"
            style={{
              fontSize: "3.5mm",
              marginTop: "auto",
              paddingTop: "5mm",
              letterSpacing: "0.05em",
            }}
          >
            未fit · meFit · 미핏
          </span>
        </div>

        <div
          className="relative flex flex-col items-end"
          style={{ minWidth: 0 }}
        >
          <div
            className="flex flex-wrap justify-end"
            style={{ gap: "1.6mm 2mm", maxWidth: "100%" }}
          >
            {heroHashtags.map((tag, i) => (
              <span
                key={tag}
                className={
                  "inline-flex items-center font-display font-semibold rounded-full backdrop-blur-sm " +
                  (i === 0
                    ? "bg-accent text-white border border-accent-mid"
                    : "bg-white/10 text-white/85 border border-white/20")
                }
                style={{
                  fontSize: "3.1mm",
                  padding: "1.4mm 3.2mm",
                  lineHeight: 1.1,
                  letterSpacing: "-0.005em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="font-display font-black select-none hero-number"
            style={{
              fontSize: "65mm",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.06em",
              color: "rgba(9,145,178,0.22)",
              textShadow: "0 0 60px rgba(9,145,178,0.35)",
              marginTop: "auto",
              alignSelf: "center",
              paddingTop: "5mm",
            }}
          >
            54
          </div>

          <span
            className="font-display font-semibold uppercase text-accent-mid"
            style={{
              fontSize: "3mm",
              letterSpacing: "0.18em",
              alignSelf: "center",
              marginTop: "1mm",
            }}
          >
            TEAM No.
          </span>
        </div>
      </div>
    </section>
  );
}
