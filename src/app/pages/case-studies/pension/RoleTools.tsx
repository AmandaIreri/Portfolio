import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { PENSION_GREEN } from "./assets";

const SKILLS = [
  "Figma (Advanced Prototyping & Design Systems)",
  "User Flows & Information Architecture",
  "Mobile-First Fintech Interfaces",
  "Stakeholder Presentations & Iteration",
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
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: PENSION_GREEN, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
              Ownership
            </p>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", color: "#1C1A18", letterSpacing: "-0.025em", lineHeight: 1.12, marginBottom: 20 }}>
              My Role &amp; Tools
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15.5, color: "#1C1A18", opacity: 0.7, lineHeight: 1.75, maxWidth: 460 }}>
              Independently owned end-to-end mobile UX/UI design — from the
              CEO's initial briefing and flow definition to a high-fidelity
              interactive prototype in Figma. Collaborated with stakeholders
              through iteration rounds and supported a colleague's extension
              of the work to web and admin.
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
                    color: PENSION_GREEN,
                    backgroundColor: "rgba(0,104,56,0.06)",
                    border: "1px solid rgba(0,104,56,0.16)",
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