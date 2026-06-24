import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";

const PROCESS = [
  {
    number: "01",
    title: "Research & Product Design",
    description:
      "I start with users — conducting field research, competitive analysis, and stakeholder interviews to ground every design decision in real insight. From there I build product strategy, information architecture, brand systems, and complete Figma design systems with reusable components.",
    tools: ["User Research", "Figma", "Brand Identity", "Design Systems", "User Flows"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="12" cy="12" r="7" stroke="#D4AF37" strokeWidth="1.8" />
        <line x1="17.5" y1="17.5" x2="24" y2="24" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" fill="rgba(212,175,55,0.25)" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "UI/UX & Motion Design",
    description:
      "Meticulous visual design — high-fidelity mockups, interactive Figma prototypes, and motion principles that feel intentional. I obsess over spacing, typographic rhythm, colour ratios, and the micro-interactions that make an interface feel polished rather than assembled.",
    tools: ["High-Fidelity UI", "Figma Prototypes", "Motion Design", "WCAG AA", "Component Libraries"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="#D4AF37" strokeWidth="1.8" />
        <line x1="4" y1="11" x2="24" y2="11" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="8" cy="8.5" r="1.2" fill="#D4AF37" />
        <circle cx="12" cy="8.5" r="1.2" fill="rgba(212,175,55,0.4)" />
        <circle cx="16" cy="8.5" r="1.2" fill="rgba(212,175,55,0.2)" />
        <rect x="8" y="15" width="12" height="4" rx="2" fill="rgba(212,175,55,0.2)" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development Collaboration",
    description:
      "I bridge design and engineering — writing responsive Vue.js and React interfaces, integrating payment APIs (M-Pesa, Stripe), collaborating on Android implementations, and ensuring every shipped pixel matches the prototype. I speak both languages fluently.",
    tools: ["Vue.js", "React", "Android (Kotlin)", "Payment APIs", "Responsive Code"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polyline points="8,10 4,14 8,18" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="20,10 24,14 20,18" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="8" x2="12" y2="20" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function HowIWork() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#F9F7F5",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3) 30%, rgba(212,175,55,0.3) 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginBottom: 64,
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#D4AF37",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            How I Work
          </p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
              color: "#1C1A18",
              letterSpacing: "-0.025em",
              lineHeight: 1.12,
            }}
          >
            One Person,{" "}
            <span style={{ color: "#3E2723" }}>Full Pipeline</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {PROCESS.map((step, i) => (
            <div
              key={step.number}
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                padding: "32px",
                border: "1px solid rgba(62,39,35,0.07)",
                boxShadow: "0 2px 12px rgba(62,39,35,0.05)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s, box-shadow 0.25s ease`,
                position: "relative",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(62,39,35,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(62,39,35,0.05)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              {/* Step number */}
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 800,
                  color: "rgba(62,39,35,0.15)",
                  letterSpacing: "0.1em",
                  position: "absolute",
                  top: 24,
                  right: 24,
                }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  backgroundColor: "rgba(212,175,55,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  border: "1px solid rgba(212,175,55,0.15)",
                }}
              >
                {step.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#1C1A18",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.3,
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 13.5,
                  color: "#1C1A18",
                  opacity: 0.65,
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {step.description}
              </p>

              {/* Tools */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {step.tools.map(tool => (
                  <span
                    key={tool}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#8B4513",
                      backgroundColor: "rgba(139,69,19,0.07)",
                      padding: "3px 9px",
                      borderRadius: 100,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
