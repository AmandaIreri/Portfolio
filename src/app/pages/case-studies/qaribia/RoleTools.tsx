import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { QARIBIA_GOLD } from "./assets";

const SKILLS = [
  "Motion Design & Micro-interactions",
  "HTML/TypeScript Prototyping",
  "AI-Assisted Design Workflows",
  "Immersive Web Experiences",
  "User Flow & Booking UX for Tourism",
];

export function RoleTools() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} style={{ backgroundColor: "#FFFFFF", padding: "72px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: QARIBIA_GOLD, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
              Ownership
            </p>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", color: "#1C1A18", letterSpacing: "-0.025em", lineHeight: 1.12, marginBottom: 20 }}>
              My Role &amp; Tools
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15.5, color: "#1C1A18", opacity: 0.72, lineHeight: 1.75, maxWidth: 460 }}>
              End-to-end ownership of concept, design, motion direction, and
              development of the interactive prototype — from initial AI-
              assisted ideation through to a deployed, production-like build.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignContent: "flex-start" }}>
              {SKILLS.map((skill, i) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: QARIBIA_GOLD,
                    backgroundColor: "rgba(200,150,62,0.08)",
                    border: "1px solid rgba(200,150,62,0.22)",
                    padding: "8px 16px",
                    borderRadius: 100,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(10px)",
                    transition: `opacity 0.4s ease ${0.2 + i * 0.08}s, transform 0.4s ease ${0.2 + i * 0.08}s`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}