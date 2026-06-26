import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";

const MILESTONES = [
  "Complete modern UI design system delivered in Figma",
  "Improved usability for core HR tasks: attendance, leave, profile",
  "Currently implementing updated screens in the Android codebase",
  "Expected: higher staff adoption, reduced errors, professional county image",
];

export function ResultsImpact() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#0B1D2E",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <defs>
          <pattern
            id="dot-homabay-results"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#7EC8E3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-homabay-results)" />
      </svg>

      <div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        style={{ position: "relative" }}
      >
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#7EC8E3",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Outcome
          </p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
              color: "#F5F8FA",
              letterSpacing: "-0.025em",
            }}
          >
            Results &amp; Impact
          </h2>
        </div>

        {/* Status banner */}
        <div
          style={{
            backgroundColor: "rgba(126,200,227,0.08)",
            border: "1px solid rgba(126,200,227,0.15)",
            borderRadius: 14,
            padding: "28px 32px",
            marginBottom: 40,
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s",
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: "#7EC8E3",
              lineHeight: 1.6,
            }}
          >
            Design phase complete — currently implementing updated screens in
            Android XML
          </p>
        </div>

        {/* Milestones */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          style={{ marginBottom: 32 }}
        >
          {MILESTONES.map((milestone, i) => (
            <div
              key={milestone}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${0.2 + i * 0.08}s, transform 0.5s ease ${0.2 + i * 0.08}s`,
              }}
            >
              <span
                style={{
                  color: "#4ADE80",
                  fontSize: 14,
                  marginTop: 2,
                  flexShrink: 0,
                }}
              >
                ✦
              </span>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(245,248,250,0.7)",
                  lineHeight: 1.6,
                }}
              >
                {milestone}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14.5,
            color: "rgba(245,248,250,0.45)",
            lineHeight: 1.75,
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          Expected outcomes include higher staff adoption of the HRIS platform,
          reduced errors in leave and attendance processes, and a more
          professional digital representation of the County.
        </p>
      </div>
    </section>
  );
}