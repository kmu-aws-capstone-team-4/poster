import { meta, members } from "../data";

const baseUrl = import.meta.env.BASE_URL;

const roleColor: Record<string, string> = {
  PM: "bg-purple-100 text-purple-800",
  Backend: "bg-emerald-100 text-emerald-800",
  Frontend: "bg-accent-bg text-accent-deep",
};

export default function Header() {
  return (
    <header className="border-b-2 border-fg" style={{ paddingBottom: "5mm" }}>
      <div className="flex items-end justify-between" style={{ gap: "10mm" }}>
        <div className="flex items-center" style={{ gap: "9mm" }}>
          <img
            src={`${baseUrl}logo-korean.png`}
            alt="미핏"
            style={{ height: "22mm", width: "auto" }}
          />
          <div className="flex flex-col">
            <span
              className="font-display font-black text-fg"
              style={{ fontSize: "6mm", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              {meta.team}
            </span>
            <span
              className="font-display font-medium text-muted"
              style={{ fontSize: "4mm", lineHeight: 1.4, marginTop: "1.5mm" }}
            >
              {meta.course}
            </span>
          </div>
        </div>

        <div className="flex items-stretch overflow-hidden rounded-[3mm] border border-border bg-bg-soft">
          {members.map((m, i) => (
            <div
              key={m.studentId}
              className="flex flex-col"
              style={{
                padding: "3mm 6mm",
                borderLeft: i > 0 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div className="flex items-center" style={{ gap: "2.2mm" }}>
                <span
                  className="font-display font-bold text-fg"
                  style={{ fontSize: "4.4mm", lineHeight: 1.1 }}
                >
                  {m.name}
                </span>
                <span
                  className={
                    "rounded-full font-display font-bold uppercase " +
                    (roleColor[m.role] ?? "bg-gray-100 text-gray-700")
                  }
                  style={{
                    fontSize: "2.8mm",
                    padding: "0.7mm 2.2mm",
                    letterSpacing: "0.05em",
                  }}
                >
                  {m.role}
                </span>
              </div>
              <span
                className="font-display text-muted"
                style={{
                  fontSize: "3.3mm",
                  marginTop: "1mm",
                  letterSpacing: "0.02em",
                }}
              >
                {m.studentId}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
