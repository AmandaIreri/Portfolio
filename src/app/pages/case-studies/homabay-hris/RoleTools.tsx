import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";

const TOOL_GROUPS = [
  { label: "Design", tools: ["Figma", "Design Systems", "Prototyping"] },
  { label: "Development", tools: ["Android XML", "Android Studio"] },
  { label: "Domain", tools: ["HRIS / Workforce Management", "Civic UX"] },
  { label: "Process", tools: ["UI Audits", "Handoff Collaboration", "Iterative Design"] },
];

export function RoleTools() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} style={{ backgroundColor: "#F5F8FA", padding: "80px 0" }}>
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
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#7EC8E3",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Ownership
            </p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
                color: "#0B1D2E",
                letterSpacing: "-0.025em",
                lineHeight: 1.12,
                marginBottom: 20,
              }}
            >
              My Role &amp; Tools
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 15.5,
                color: "#0B1D2E",
                opacity: 0.65,
                lineHeight: 1.75,
                maxWidth: 480,
              }}
            >
              Collaborated on an existing Android project by leading the UI/UX
              redesign. Audited the current implementation, produced
              high-fidelity designs in Figma, and am actively implementing the
              new interfaces in Android XML.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {TOOL_GROUPS.map((group, i) => (
              <div
                key={group.label}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${0.2 + i * 0.08}s, transform 0.5s ease ${0.2 + i * 0.08}s`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#0B1D2E",
                    opacity: 0.5,
                    marginBottom: 10,
                  }}
                >
                  {group.label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: "#0B1D2E",
                        backgroundColor: "rgba(11,29,46,0.05)",
                        border: "1px solid rgba(11,29,46,0.08)",
                        padding: "6px 14px",
                        borderRadius: 100,
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
      </div>
    </section>
  );
}