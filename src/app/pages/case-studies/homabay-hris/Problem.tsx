import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";

const PAIN_POINTS = [
  {
    title: "Inconsistent Visual Design",
    description:
      "The existing app suffered from mismatched colors, uneven spacing, and no unified design language — making every screen feel disconnected.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7EC8E3"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" opacity="0.4" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" opacity="0.4" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Poor Information Hierarchy",
    description:
      "Critical data like attendance status and leave balances were buried under clutter. Staff struggled to find what they needed at a glance.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7EC8E3"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16M4 12h10M4 18h6" />
      </svg>
    ),
  },
  {
    title: "Confusing Navigation & Forms",
    description:
      "Daily tasks like clocking in or applying for leave required too many taps with unclear feedback — leading to errors and frustration.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7EC8E3"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
  },
  {
    title: "Lack of Modern Mobile Conventions",
    description:
      "The interface felt dated — no bottom navigation, poor touch targets, and missing affordances that users expect from contemporary apps.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7EC8E3"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
];

export function Problem() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#F5F8FA", padding: "80px 0" }}
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
            eyebrow="Challenge"
            heading="Outdated Interface Limiting Staff Productivity"
            description="The existing HRIS mobile app had a functional but visually dated and cluttered interface. Staff struggled with poor information hierarchy, inconsistent styling, and suboptimal flows for daily tasks like clocking in, applying for leave, and viewing records."
          />

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            style={{ marginTop: 10 }}
          >
            {PAIN_POINTS.map((point, i) => (
              <div
                key={point.title}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 14,
                  padding: "26px 26px",
                  border: "1px solid rgba(11,29,46,0.06)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${0.12 + i * 0.08}s, transform 0.5s ease ${0.12 + i * 0.08}s, box-shadow 0.25s ease, border-color 0.25s ease`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 12px 36px rgba(11,29,46,0.08)";
                  el.style.borderColor = "rgba(126,200,227,0.25)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.borderColor = "rgba(11,29,46,0.06)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "rgba(126,200,227,0.08)",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {point.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#0B1D2E",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {point.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13.5,
                    color: "#0B1D2E",
                    opacity: 0.6,
                    lineHeight: 1.65,
                    paddingLeft: 58,
                  }}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}