import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";

const PAIN_POINTS = [
  {
    title: "Cash & middlemen",
    description: "Trades rely on cash deals and intermediaries, with little price transparency for either side.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12h6M9 9.5h4.5a1.75 1.75 0 0 1 0 3.5H9.5a1.75 1.75 0 0 0 0 3.5H15" />
      </svg>
    ),
  },
  {
    title: "No financial inclusion",
    description: "Pastoralists struggle to prove income, locking them out of loans, savings, and insurance products.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 15h3" />
      </svg>
    ),
  },
  {
    title: "Zero traceability",
    description: "Buyers have no way to verify an animal's history, health, or origin — eroding trust on both sides.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export function Problem() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} style={{ backgroundColor: "#FFFFFF", padding: "72px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionHeader
            eyebrow="Challenge"
            heading="The Problem"
            description="Traditional livestock trading in Kenya relies on cash deals, middlemen, and limited visibility. Pastoralists face poor market access and a lack of digital tools, while buyers lack traceability and trust. The fragmented ecosystem creates inefficiencies for every stakeholder in the chain."
          />

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            style={{ marginTop: 8 }}
          >
            {PAIN_POINTS.map((point, i) => (
              <div
                key={point.title}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  padding: "22px 22px",
                  boxShadow: "0 2px 14px rgba(62,39,35,0.06)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${0.15 + i * 0.1}s, transform 0.5s ease ${0.15 + i * 0.1}s, box-shadow 0.25s ease`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(62,39,35,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 14px rgba(62,39,35,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{ flexShrink: 0, display: "flex" }}>{point.icon}</div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 17.5, color: "#1C1A18", letterSpacing: "-0.01em" }}>
                    {point.title}
                  </h3>
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, color: "#1C1A18", opacity: 0.62, lineHeight: 1.6 }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}