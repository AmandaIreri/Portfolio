import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { PENSION_GREEN } from "./assets";

const STEPS = [
  {
    title: "Detailed User Flows",
    description: "Translated CEO requirements into comprehensive mobile user flows covering self-registration, verification, contributions, transactions, profile management, savings goals, and diaspora access.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="6" cy="6" r="3" stroke={PENSION_GREEN} strokeWidth="1.8" />
        <circle cx="22" cy="14" r="3" stroke={PENSION_GREEN} strokeWidth="1.8" />
        <circle cx="6" cy="22" r="3" stroke={PENSION_GREEN} strokeWidth="1.8" />
        <path d="M9 6h6a4 4 0 0 1 4 4v0M9 22h6a4 4 0 0 0 4-4v0" stroke={PENSION_GREEN} strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Cohesive Visual System",
    description: "Established consistent design patterns, components, and brand-aligned visual language in Figma for financial trust and clarity.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke={PENSION_GREEN} strokeWidth="1.8" />
        <rect x="16" y="3" width="9" height="9" rx="2" stroke={PENSION_GREEN} strokeWidth="1.8" fill="rgba(0,104,56,0.1)" />
        <rect x="3" y="16" width="9" height="9" rx="2" stroke={PENSION_GREEN} strokeWidth="1.8" fill="rgba(0,104,56,0.1)" />
        <rect x="16" y="16" width="9" height="9" rx="2" stroke={PENSION_GREEN} strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "High-Fidelity Mobile Prototype",
    description: "Designed and prototyped the full mobile experience from scratch in Figma — onboarding, dashboard, contributions, withdrawals, bill payments, and savings goals, all interactive.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="7" y="2" width="14" height="24" rx="3" stroke={PENSION_GREEN} strokeWidth="1.8" />
        <path d="M12 22h4" stroke={PENSION_GREEN} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Stakeholder-Driven Iteration",
    description: "Presented for board approval on the first pass, then refined through stakeholder feedback rounds — and supported a colleague extending the work to web and admin.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 14a10 10 0 0 1 17-7" stroke={PENSION_GREEN} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M21 4v4h-4" stroke={PENSION_GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 14a10 10 0 0 1-17 7" stroke={PENSION_GREEN} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 24v-4h4" stroke={PENSION_GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function DesignProcess() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} style={{ backgroundColor: "#F9F7F5", padding: "72px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionHeader eyebrow="Workflow" heading="Design Process" accentColor={PENSION_GREEN} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                padding: "26px 26px",
                boxShadow: "0 4px 18px rgba(62,39,35,0.07)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s, box-shadow 0.25s ease`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,104,56,0.14)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(62,39,35,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <div style={{ flexShrink: 0, display: "flex" }}>{step.icon}</div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1C1A18", letterSpacing: "-0.01em" }}>
                  {step.title}
                </h3>
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, color: "#1C1A18", opacity: 0.65, lineHeight: 1.7 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}