import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { PENSION_GREEN } from "./assets";

const MILESTONES = [
  "High-Fidelity Prototype Completed",
  "Presented & Approved by Executive Board",
  "Advanced to Commercial Negotiations",
  "Informed Web & Admin Portal Development",
];

export function ResultsImpact() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: PENSION_GREEN,
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: "relative" }}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            textAlign: "center",
          }}
        >
          <SectionHeader
            eyebrow="Outcome"
            heading="Results & Impact"
            align="center"
            light
            style={{ marginBottom: 56 }}
          />
        </div>

        {/* Desktop / tablet — horizontal timeline */}
        <div className="hidden md:block" style={{ position: "relative", padding: "0 20px", marginBottom: 48 }}>
          <div style={{ position: "absolute", top: 9, left: "8%", right: "8%", height: 2, backgroundColor: "rgba(249,247,245,0.2)" }} />
          <div
            style={{
              position: "absolute",
              top: 9,
              left: "8%",
              right: "8%",
              height: 2,
              backgroundColor: "#D4AF37",
              transformOrigin: "left",
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1.3s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          />
          <div className="flex justify-between">
            {MILESTONES.map((milestone, i) => (
              <div
                key={milestone}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 160,
                  position: "relative",
                  zIndex: 2,
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.4s ease ${0.5 + i * 0.18}s`,
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    backgroundColor: "#D4AF37",
                    border: "3px solid " + PENSION_GREEN,
                    boxShadow: "0 0 0 2px rgba(212,175,55,0.4)",
                    marginBottom: 14,
                  }}
                />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "#F9F7F5", textAlign: "center", lineHeight: 1.4 }}>
                  {milestone}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical timeline */}
        <div className="md:hidden" style={{ position: "relative", paddingLeft: 28, marginBottom: 40 }}>
          <div style={{ position: "absolute", top: 9, bottom: 9, left: 8, width: 2, backgroundColor: "rgba(249,247,245,0.2)" }} />
          <div
            style={{
              position: "absolute",
              top: 9,
              left: 8,
              width: 2,
              backgroundColor: "#D4AF37",
              transformOrigin: "top",
              height: visible ? "calc(100% - 18px)" : 0,
              transition: "height 1.3s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {MILESTONES.map((milestone, i) => (
              <div
                key={milestone}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  position: "relative",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.4s ease ${0.5 + i * 0.15}s`,
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    backgroundColor: "#D4AF37",
                    border: "3px solid " + PENSION_GREEN,
                    boxShadow: "0 0 0 2px rgba(212,175,55,0.4)",
                    flexShrink: 0,
                    marginLeft: -1,
                  }}
                />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#F9F7F5" }}>
                  {milestone}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14.5,
            color: "rgba(249,247,245,0.6)",
            lineHeight: 1.75,
            textAlign: "center",
            maxWidth: 600,
            margin: "0 auto",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 1.2s",
          }}
        >
          The prototype demonstrated clear potential for improved user
          adoption, operational efficiency, and digital transformation of
          pension services in Kenya — stakeholder feedback validated the
          direction, with negotiations underway.
        </p>
      </div>
    </section>
  );
}