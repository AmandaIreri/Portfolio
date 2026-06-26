import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";

const HIGHLIGHTS = [
  {
    title: "Modern Design System",
    description:
      "A complete component library built in Figma — colors, typography, spacing, and components that ensure consistency across every screen.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="3"
          y="3"
          width="9"
          height="9"
          rx="2"
          stroke="#0B1D2E"
          strokeWidth="1.8"
        />
        <rect
          x="16"
          y="3"
          width="9"
          height="9"
          rx="2"
          stroke="#0B1D2E"
          strokeWidth="1.8"
          fill="rgba(11,29,46,0.08)"
        />
        <rect
          x="3"
          y="16"
          width="9"
          height="9"
          rx="2"
          stroke="#0B1D2E"
          strokeWidth="1.8"
          fill="rgba(11,29,46,0.08)"
        />
        <rect
          x="16"
          y="16"
          width="9"
          height="9"
          rx="2"
          stroke="#0B1D2E"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    title: "Streamlined Attendance Flow",
    description:
      "Remote clock-in with a live timer, rich daily logs, and monthly statistics — turning a basic records view into a productivity dashboard.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle
          cx="14"
          cy="14"
          r="10"
          stroke="#0B1D2E"
          strokeWidth="1.8"
        />
        <path
          d="M14 8v6l4 2"
          stroke="#0B1D2E"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Intuitive Leave Management",
    description:
      "Clear leave balances upfront, a simplified multi-step application form, and filtered history with color-coded status tracking.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="4"
          y="6"
          width="20"
          height="18"
          rx="3"
          stroke="#0B1D2E"
          strokeWidth="1.8"
        />
        <path d="M4 12h20" stroke="#0B1D2E" strokeWidth="1.8" />
        <path d="M10 18h4" stroke="#0B1D2E" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "County-Branded Experience",
    description:
      "Design aligned with County's visual identity — creating a professional, trustworthy interface that staff feel proud to use.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3l10 5v6c0 6-4.3 9.3-10 11-5.7-1.7-10-5-10-11V8l10-5z"
          stroke="#0B1D2E"
          strokeWidth="1.8"
        />
        <path
          d="M10 14l3 3 5-5"
          stroke="#0B1D2E"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function SolutionHighlights() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#FFFFFF", padding: "80px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionHeader
            eyebrow="The Solution"
            heading="Solution Highlights"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#F5F8FA",
                borderRadius: 14,
                padding: "28px 28px",
                border: "1px solid rgba(11,29,46,0.05)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.55s ease ${0.08 + i * 0.08}s, transform 0.55s ease ${0.08 + i * 0.08}s, box-shadow 0.25s ease, border-color 0.25s ease`,
                boxShadow: "0 2px 14px rgba(11,29,46,0.04)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 10px 34px rgba(11,29,46,0.1)";
                el.style.borderColor = "rgba(126,200,227,0.2)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 2px 14px rgba(11,29,46,0.04)";
                el.style.borderColor = "rgba(11,29,46,0.05)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    display: "flex",
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: "rgba(126,200,227,0.08)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#0B1D2E",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 13.5,
                  color: "#0B1D2E",
                  opacity: 0.6,
                  lineHeight: 1.7,
                  paddingLeft: 62,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}