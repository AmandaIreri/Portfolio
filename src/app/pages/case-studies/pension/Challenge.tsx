import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { PENSION_GREEN } from "./assets";

const FRICTION_POINTS = [
  "In-person registration and profile management",
  "Opaque contribution tracking (employer + voluntary)",
  "Limited digital payment options",
  "Complex verification and benefit access",
  "Poor support for diaspora users",
];

export function Challenge() {
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
          <SectionHeader
            eyebrow="Challenge"
            heading="Legacy Friction in Essential Pension Services"
            accentColor={PENSION_GREEN}
            description="Citizens faced significant barriers accessing pension services through outdated systems: mandatory in-person visits, complex registration, poor mobile experience, limited diaspora support, and fragmented contribution and withdrawal processes. This resulted in low adoption, especially among informal-sector workers and younger users."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3" style={{ maxWidth: 560, marginTop: 8 }}>
            {FRICTION_POINTS.map((point, i) => (
              <div
                key={point}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-10px)",
                  transition: `opacity 0.45s ease ${0.15 + i * 0.08}s, transform 0.45s ease ${0.15 + i * 0.08}s`,
                }}
              >
                <span style={{ width: 16, height: 1.5, backgroundColor: PENSION_GREEN, flexShrink: 0 }} />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14.5, fontWeight: 600, color: "#1C1A18", opacity: 0.75 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}