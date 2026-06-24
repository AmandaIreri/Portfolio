import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { QARIBIA_GOLD } from "./assets";

const STEPS = [
  {
    title: "Rapid Concepting & AI Assistance",
    description: "Used AI tools, post-PLP AI Safari, to ideate copy, image prompts, and interaction ideas — then translated the high-level vision into detailed user flows and component specs.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 3v4M14 21v4M3 14h4M21 14h4M6 6l3 3M19 19l3 3M22 6l-3 3M9 19l-3 3" stroke={QARIBIA_GOLD} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="14" r="4.5" stroke={QARIBIA_GOLD} strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Immersive Design System",
    description: "Built a luxurious, nature-inspired visual language — rich photography, elegant typography, and consistent motion principles for easing, timing, and scroll orchestration.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke={QARIBIA_GOLD} strokeWidth="1.8" />
        <rect x="16" y="3" width="9" height="9" rx="2" stroke={QARIBIA_GOLD} strokeWidth="1.8" fill="rgba(200,150,62,0.1)" />
        <rect x="3" y="16" width="9" height="9" rx="2" stroke={QARIBIA_GOLD} strokeWidth="1.8" fill="rgba(200,150,62,0.1)" />
        <rect x="16" y="16" width="9" height="9" rx="2" stroke={QARIBIA_GOLD} strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Direct Web Prototyping",
    description: "Built the entire experience in HTML and TypeScript for a true-to-production feel — hero parallax, scroll-triggered reveals, smooth booking-flow transitions, and micro-interactions on every card and button.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M9 7L3 14l6 7M19 7l6 7-6 7" stroke={QARIBIA_GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Iterative Refinement",
    description: "Tested flows for delight and usability, prioritizing performance and feel across both mobile and desktop.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 14a10 10 0 0 1 17-7" stroke={QARIBIA_GOLD} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M21 4v4h-4" stroke={QARIBIA_GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 14a10 10 0 0 1-17 7" stroke={QARIBIA_GOLD} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 24v-4h4" stroke={QARIBIA_GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function DesignProcess() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section id="process" ref={ref} style={{ backgroundColor: "#FFFFFF", padding: "72px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionHeader
            eyebrow="Approach & Process"
            heading="Built for Motion, Not Just Mockups"
            accentColor={QARIBIA_GOLD}
            description="This project leaned deliberately into experimentation — self-directed learning, hands-on motion design, and AI-assisted workflows, built directly in code rather than left as static Figma frames."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ marginTop: 16 }}>
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                padding: "26px 26px",
                boxShadow: "0 4px 18px rgba(28,37,54,0.07)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s, box-shadow 0.25s ease`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(200,150,62,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(28,37,54,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
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