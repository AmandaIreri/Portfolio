import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";

const ACCENT = "#7EC8E3";
const NAVY = "#0B1D2E";

const STEPS = [
  {
    number: "01",
    title: "Codebase Exploration",
    description:
      "Reviewed the handed-off Android project to understand existing architecture, screen flows, and technical constraints before proposing any changes.",
    icon: (
      // Terminal window with code brackets — represents reading existing code
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="4" y="8" width="44" height="36" rx="5" stroke={ACCENT} strokeWidth="1.8" />
        <path d="M4 18h44" stroke={ACCENT} strokeWidth="1.2" opacity="0.3" />
        <circle cx="12" cy="13" r="2.5" fill={ACCENT} opacity="0.35" />
        <circle cx="20" cy="13" r="2.5" fill={ACCENT} opacity="0.2" />
        <circle cx="28" cy="13" r="2.5" fill={ACCENT} opacity="0.1" />
        {/* </> */}
        <path d="M15 30l-5 3 5 3" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M37 30l5 3-5 3" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 24l3 12" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "UI Audit & Redesign in Figma",
    description:
      "Created a modern design system aligned with county branding. Focused on clarity, hierarchy, accessibility, and consistent spacing across all screens.",
    icon: (
      // Design frame + component blocks — represents Figma layout work
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M4 16V6h10" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <path d="M38 6h10v10" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <path d="M48 36v10H38" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <path d="M14 46H4V36" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="14" width="13" height="10" rx="2" fill="rgba(126,200,227,0.18)" stroke={ACCENT} strokeWidth="1.5" />
        <rect x="29" y="14" width="13" height="10" rx="2" fill="rgba(126,200,227,0.08)" stroke={ACCENT} strokeWidth="1.5" opacity="0.55" />
        <rect x="10" y="29" width="32" height="9" rx="2" fill="rgba(126,200,227,0.08)" stroke={ACCENT} strokeWidth="1.5" opacity="0.45" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Implementation in Android XML",
    description:
      "Currently translating Figma designs into Android XML layouts for pixel-perfect replication, ensuring the new UI works seamlessly with existing backend logic.",
    icon: (
      // Phone with nested layout blocks — represents XML structure inside a device
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="15" y="4" width="22" height="44" rx="5" stroke={ACCENT} strokeWidth="1.8" />
        <path d="M23 8h6" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
        <path d="M23 43h6" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
        <rect x="19" y="14" width="14" height="6" rx="1.5" fill="rgba(126,200,227,0.2)" stroke={ACCENT} strokeWidth="1.3" />
        <rect x="19" y="23" width="6" height="9" rx="1.5" fill="rgba(126,200,227,0.1)" stroke={ACCENT} strokeWidth="1.3" opacity="0.7" />
        <rect x="27" y="23" width="6" height="9" rx="1.5" fill="rgba(126,200,227,0.1)" stroke={ACCENT} strokeWidth="1.3" opacity="0.7" />
        <rect x="19" y="35" width="14" height="4" rx="1.5" fill="rgba(126,200,227,0.08)" stroke={ACCENT} strokeWidth="1.3" opacity="0.5" />
      </svg>
    ),
  },
];

const FLOW_IMPROVEMENTS = [
  {
    title: "Onboarding & Authentication",
    detail: "Streamlined welcome flow with stronger branding and improved form fields.",
  },
  {
    title: "Attendance & Remote Clock-In",
    detail: "Redesigned with live timer, statistics, and a clear daily log view.",
  },
  {
    title: "Leave Management",
    detail: "Simplified application form with real-time balance display and filtered history.",
  },
  {
    title: "Dashboard & Profile",
    detail: "Personalized welcome, quick stats, and glanceable attendance overview.",
  },
];

export function ApproachProcess() {
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
            eyebrow="Process"
            heading="Approach & Process"
            description="Starting from an existing Android codebase handed over by a colleague, I audited the current implementation, produced high-fidelity designs in Figma, and am actively implementing the new interfaces in Android XML."
          />
        </div>

        {/* Three-step cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ marginTop: 8 }}>
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                backgroundColor: "#F5F8FA",
                borderRadius: 14,
                border: "1px solid rgba(11,29,46,0.05)",
                overflow: "hidden",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.1}s, transform 0.6s ease ${0.1 + i * 0.1}s, box-shadow 0.25s ease`,
                boxShadow: "0 2px 12px rgba(11,29,46,0.04)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 10px 36px rgba(11,29,46,0.1)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 2px 12px rgba(11,29,46,0.04)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon header — replaces image */}
              <div
                style={{
                  backgroundColor: NAVY,
                  height: 168,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Watermark step number */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: -20,
                    right: 6,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 140,
                    fontWeight: 900,
                    lineHeight: 1,
                    color: ACCENT,
                    opacity: 0.06,
                    userSelect: "none",
                    pointerEvents: "none",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.number}
                </span>

                {/* Corner bracket — top left */}
                <svg
                  aria-hidden="true"
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  style={{ position: "absolute", top: 14, left: 14, opacity: 0.18 }}
                >
                  <path d="M0 8V0h8" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Corner bracket — bottom right */}
                <svg
                  aria-hidden="true"
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  style={{ position: "absolute", bottom: 14, right: 14, opacity: 0.18 }}
                >
                  <path d="M14 6v8H6" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Step icon */}
                {step.icon}
              </div>

              {/* Content */}
              <div style={{ padding: "20px 24px 28px" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 10,
                    fontWeight: 800,
                    color: ACCENT,
                    backgroundColor: "rgba(126,200,227,0.12)",
                    padding: "3px 9px",
                    borderRadius: 4,
                    letterSpacing: "0.08em",
                    marginBottom: 12,
                  }}
                >
                  {step.number}
                </span>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: NAVY,
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13.5,
                    color: NAVY,
                    opacity: 0.6,
                    lineHeight: 1.65,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flow improvements — light cards with accent left border */}
        <div
          style={{
            marginTop: 56,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: NAVY,
              opacity: 0.35,
              marginBottom: 20,
            }}
          >
            Key Flow Improvements
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FLOW_IMPROVEMENTS.map((flow, i) => (
              <div
                key={flow.title}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  borderLeft: `3px solid ${ACCENT}`,
                  padding: "22px 20px",
                  boxShadow: "0 4px 20px rgba(11,29,46,0.08)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.5s ease ${0.5 + i * 0.08}s, transform 0.5s ease ${0.5 + i * 0.08}s, box-shadow 0.25s ease`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(11,29,46,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(11,29,46,0.08)";
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    backgroundColor: NAVY,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 800,
                      color: ACCENT,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: NAVY,
                    marginBottom: 6,
                  }}
                >
                  {flow.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12.5,
                    color: NAVY,
                    opacity: 0.55,
                    lineHeight: 1.55,
                  }}
                >
                  {flow.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}