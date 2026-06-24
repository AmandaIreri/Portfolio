import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { PhoneFrame } from "../../../components/case-study/PhoneFrame";
import { CaseStudyImage } from "../../../components/case-study/CaseStudyImage";
import { Annotation } from "../../../components/case-study/Annotation";
import { homabayAssets } from "./assets";

interface ScreenItem {
  key: string;
  title: string;
  src: string;
  annotation?: {
    label: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

const SCREENS: ScreenItem[] = [
  {
    key: "onboarding",
    title: "Onboarding & Sign In",
    src: homabayAssets.screens.onboarding,
    annotation: { label: "County-branded welcome", top: "10%", left: "8%" },
  },
  {
    key: "dashboard",
    title: "Dashboard — Today's Status",
    src: homabayAssets.screens.dashboard,
    annotation: { label: "Quick stats cards", top: "12%", right: "8%" },
  },
  {
    key: "attendanceClock",
    title: "Attendance — Clock In",
    src: homabayAssets.screens.attendanceClock,
    annotation: { label: "Live timer", bottom: "12%", left: "8%" },
  },
  {
    key: "attendanceRecords",
    title: "Attendance — Records & Stats",
    src: homabayAssets.screens.attendanceRecords,
    annotation: { label: "Monthly overview", top: "10%", right: "8%" },
  },
  {
    key: "leaveApply",
    title: "Leave — Application Form",
    src: homabayAssets.screens.leaveApply,
    annotation: { label: "Smart validation", bottom: "10%", left: "8%" },
  },
  {
    key: "leaveHistory",
    title: "Leave — History & Status",
    src: homabayAssets.screens.leaveHistory,
    annotation: { label: "Status badges", top: "12%", right: "8%" },
  },
];

export function KeyScreens() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#0B1D2E", padding: "80px 0" }}
    >
      {/* Subtle texture */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      >
        <defs>
          <pattern
            id="dot-homabay-screens"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#7EC8E3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-homabay-screens)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: "relative" }}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionHeader
            eyebrow="Walkthrough"
            heading="Key Screens"
            description="The six redesigned screens that carry the most design weight — each one solving a specific pain point for county staff."
            light
          />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ marginTop: 10, alignItems: "start" }}
        >
          {SCREENS.map((screen, i) => (
            <div
              key={screen.key}
              className="cs-card"
              style={{
                position: "relative",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${0.06 + i * 0.06}s, transform 0.5s ease ${0.06 + i * 0.06}s`,
              }}
            >
              <PhoneFrame>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div className="cs-frame-media">
                    <CaseStudyImage
                      src={screen.src}
                      label={screen.title}
                      aspectRatio="9/19"
                      alt={screen.title}
                    />
                  </div>

                  {screen.annotation && (
                    <Annotation
                      label={screen.annotation.label}
                      top={screen.annotation.top}
                      left={screen.annotation.left}
                      right={screen.annotation.right}
                      bottom={screen.annotation.bottom}
                    />
                  )}

                  <div
                    className="cs-caption"
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: "32px 14px 12px",
                      background:
                        "linear-gradient(0deg, rgba(11,29,46,0.9) 0%, transparent 100%)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 12.5,
                        fontWeight: 700,
                        color: "#F5F8FA",
                      }}
                    >
                      {screen.title}
                    </p>
                  </div>
                </div>
              </PhoneFrame>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cs-caption { opacity: 0; transform: translateY(6px); transition: opacity 0.25s ease, transform 0.25s ease; }
        .cs-card:hover .cs-caption { opacity: 1; transform: translateY(0); }
        .cs-frame-media { transition: transform 0.45s cubic-bezier(0.16,1,0.3,1); }
        .cs-card:hover .cs-frame-media { transform: scale(1.03); }
      `}</style>
    </section>
  );
}