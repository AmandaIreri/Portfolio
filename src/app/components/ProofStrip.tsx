import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";

const METRICS = [
  { value: "120+", label: "Registered MVP users on Flockr", sublabel: "Live Android + web product" },
  { value: "312", label: "Animals listed on platform", sublabel: "Real livestock marketplace data" },
  { value: "4", label: "Board-approved prototypes", sublabel: "Pension & fintech sector" },
  { value: "8+", label: "Months of field research", sublabel: "Real users, real impact" },
];

export function ProofStrip() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#3E2723",
        padding: "56px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}
      >
        <defs>
          <pattern id="dot-dark" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#D4AF37" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-dark)" />
      </svg>

      {/* Gold top border */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {METRICS.map(({ value, label, sublabel }, i) => (
            <div
              key={label}
              style={{
                padding: "16px 32px",
                borderRight: i < METRICS.length - 1 ? "1px solid rgba(212,175,55,0.15)" : "none",
                textAlign: "center",
              }}
              className="border-b lg:border-b-0 last:border-b-0"
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  color: "#D4AF37",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: 8,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#F9F7F5",
                  marginBottom: 4,
                  lineHeight: 1.4,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 400,
                  color: "rgba(249,247,245,0.45)",
                  letterSpacing: "0.03em",
                }}
              >
                {sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
