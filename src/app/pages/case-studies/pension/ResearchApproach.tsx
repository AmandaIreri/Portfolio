import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { PENSION_GREEN } from "./assets";

const RESEARCH_POINTS = [
  {
    title: "Direct CEO & stakeholder briefing",
    description: "Priority flows and pain points were defined directly by the CEO and translated into a clear set of design requirements.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={PENSION_GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Competitive & market review",
    description: "Reviewed existing processes alongside leading African mobile-money and savings platforms for patterns worth adopting.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={PENSION_GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Mobile-first, brand-aligned design",
    description: "Prioritized a mobile-first experience built around the institution's brand colors to build familiarity and trust.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={PENSION_GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "Inclusive by design",
    description: "Designed for low-literacy users and diaspora members, with plain language and clear security cues throughout.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={PENSION_GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21c0-4 3.5-6.5 7-6.5s7 2.5 7 6.5" />
      </svg>
    ),
  },
];

export function ResearchApproach() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} style={{ backgroundColor: "#FFFFFF", padding: "72px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionHeader
            eyebrow="Approach"
            heading="User-Centered Discovery & Mobile-First Strategy"
            accentColor={PENSION_GREEN}
            style={{ marginBottom: 0, maxWidth: 360 }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            {RESEARCH_POINTS.map((point, i) => (
              <div
                key={point.title}
                style={{
                  display: "flex",
                  gap: 16,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity 0.5s ease ${0.15 + i * 0.1}s, transform 0.5s ease ${0.15 + i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 10px rgba(0,104,56,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {point.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 15.5, color: "#1C1A18", marginBottom: 4 }}>
                    {point.title}
                  </h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, color: "#1C1A18", opacity: 0.62, lineHeight: 1.6 }}>
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}