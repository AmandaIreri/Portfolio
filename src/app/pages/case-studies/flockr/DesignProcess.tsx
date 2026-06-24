import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { CaseStudyImage } from "../../../components/case-study/CaseStudyImage";
import { flockrAssets } from "./assets";

export function DesignProcess() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  const STEPS = [
    {
      number: "01",
      title: "Brand Identity",
      description: "Built from scratch — name, logo, and a full design system, defined before a single screen was drawn.",
      visual: (
        <div style={{ position: "relative", borderRadius: 8, overflow: "hidden" }}>
          <CaseStudyImage src={flockrAssets.brand.banner} label="Flockr — Brand Banner" aspectRatio="16/10" alt="Flockr brand banner" />
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: 12,
              width: 52,
              height: 52,
              borderRadius: 10,
              backgroundColor: "#FFFFFF",
              padding: 8,
              boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
              overflow: "hidden",
            }}
          >
            <CaseStudyImage src={flockrAssets.brand.logo} label="Logo" aspectRatio="1/1" alt="Flockr logo" style={{ objectFit: "contain" }} />
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "Wireframes & User Flows",
      description: "Mapping every journey — from listing an animal to completing an escrow-protected purchase — before any visual polish.",
      visual: (
        <div style={{ borderRadius: 8, overflow: "hidden" }}>
          <CaseStudyImage src={flockrAssets.brand.flowchart} label="User Flow — Flowchart" aspectRatio="16/10" alt="Flockr user flow diagram" />
        </div>
      ),
    },
    {
      number: "03",
      title: "High-Fidelity Prototypes & Motion",
      description: "Pixel-perfect Figma screens and interactive prototypes, with motion principles applied to every key interaction.",
      visual: (
        <div style={{ position: "relative", borderRadius: 8, overflow: "hidden" }}>
          <CaseStudyImage src={flockrAssets.screens.dashboardOverview} label="Seller Dashboard — Overview" aspectRatio="16/10" alt="Flockr dashboard high-fidelity screen" />
          <span
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 10,
              fontWeight: 700,
              color: "#D4AF37",
              backgroundColor: "rgba(28,26,24,0.65)",
              padding: "4px 9px",
              borderRadius: 100,
              letterSpacing: "0.04em",
            }}
          >
            ✦ Motion-ready
          </span>
        </div>
      ),
    },
  ];

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
          <SectionHeader eyebrow="Workflow" heading="Design Process" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                backgroundColor: "#F9F7F5",
                borderRadius: 12,
                border: "1px solid rgba(62,39,35,0.07)",
                overflow: "hidden",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s, box-shadow 0.25s ease`,
                boxShadow: "0 2px 12px rgba(62,39,35,0.05)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(62,39,35,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(62,39,35,0.05)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ padding: 14 }}>{step.visual}</div>
              <div style={{ padding: "8px 24px 28px", position: "relative" }}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    fontWeight: 800,
                    color: "rgba(62,39,35,0.18)",
                    letterSpacing: "0.1em",
                    position: "absolute",
                    top: 8,
                    right: 24,
                  }}
                >
                  {step.number}
                </span>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.02rem", color: "#1C1A18", marginBottom: 10, paddingRight: 28 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, color: "#1C1A18", opacity: 0.65, lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}