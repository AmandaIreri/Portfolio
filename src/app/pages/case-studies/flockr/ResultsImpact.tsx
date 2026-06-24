import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";

const METRICS = [
  { value: "120+", label: "Registered users" },
  { value: "412", label: "Animals listed" },
];

const MILESTONES = [
  "Research partnership secured with a Laikipia ranch",
  "Live MVP with marketplace + management modules",
  "Phase 2 web rebuild underway, driven by user feedback",
];

export function ResultsImpact() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#3E2723",
        padding: "72px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}>
        <defs>
          <pattern id="dot-flockr-results" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#D4AF37" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-flockr-results)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: "relative" }}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#D4AF37", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
            Outcome
          </p>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", color: "#F9F7F5", letterSpacing: "-0.025em" }}>
            Results &amp; Impact
          </h2>
        </div>

        {/* Big metrics */}
        <div
          className="grid grid-cols-2 gap-8 max-w-xl mx-auto"
          style={{
            marginBottom: 40,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(249,247,245,0.1)",
          }}
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              style={{
                textAlign: "center",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${0.15 + i * 0.1}s, transform 0.5s ease ${0.15 + i * 0.1}s`,
              }}
            >
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(2.6rem, 6vw, 4rem)", color: "#D4AF37", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 10 }}>
                {m.value}
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#F9F7F5" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          style={{ marginBottom: 32 }}
        >
          {MILESTONES.map((milestone, i) => (
            <div
              key={milestone}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
              }}
            >
              <span style={{ color: "#D4AF37", fontSize: 14, marginTop: 1, flexShrink: 0 }}>✦</span>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, color: "rgba(249,247,245,0.75)", lineHeight: 1.6 }}>
                {milestone}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14.5,
            color: "rgba(249,247,245,0.5)",
            lineHeight: 1.75,
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          Beyond the numbers, Flockr points toward a broader shift — digitizing trust and
          financial access for one of Kenya's most under-served sectors.
        </p>
      </div>
    </section>
  );
}