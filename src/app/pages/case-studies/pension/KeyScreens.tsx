import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { PhoneFrame } from "../../../components/case-study/PhoneFrame";
import { CaseStudyImage } from "../../../components/case-study/CaseStudyImage";
import { CaseStudyVideo } from "../../../components/case-study/CaseStudyVideo";
import { PlayButtonOverlay } from "../../../components/case-study/PlayButtonOverlay";
import { pensionAssets, PENSION_GREEN } from "./assets";
import type { VideoOrientation } from "../../../components/case-study/VideoLightbox";

interface CategoryScreen {
  src: string;
  label: string;
}

const CATEGORIES: { title: string; screens: CategoryScreen[]; points: string[] }[] = [
  {
    title: "Onboarding & Authentication",
    screens: [
      { src: pensionAssets.screens.registration, label: "Local Member Registration" },
      { src: pensionAssets.screens.signIn, label: "Sign In" },
    ],
    points: [
      "Self-registration flow for local members (employee or voluntary) with clear step indicators across a six-step journey.",
      "Secure sign-in via ID/passport number, with OTP verification for account access.",
    ],
  },
  {
    title: "Dashboard & Account Overview",
    screens: [
      { src: pensionAssets.screens.dashboardHome, label: "Member Homepage" },
    ],
    points: [
      "Personalized balance summary, year-to-date contributions, and a clear view of active and available benefits.",
      "Quick actions for adding money, sending money, paying bills, and investing — surfaced right on the home screen.",
      "Itemized, filterable transaction history with monthly export.",
    ],
  },
  {
    title: "Contributions & Transactions",
    screens: [
      { src: pensionAssets.screens.contributionMake, label: "Make Contribution" },
      { src: pensionAssets.screens.contributionWithdraw, label: "Withdraw Funds" },
    ],
    points: [
      "Flexible contribution flow supporting one-time and recurring payments by card or bank account, with real-time currency conversion.",
      "Secure withdrawal flow gated by biometric verification — face capture, liveness check, and identity match — before funds unlock.",
    ],
  },
  {
    title: "Savings, Profile & Diaspora Features",
    screens: [
      { src: pensionAssets.screens.savingsGoals, label: "Savings & Goals" },
    ],
    points: [
      "Savings & Goals dashboard with progress bars, target dates, and monthly contribution suggestions.",
      "Curated suggested goals — emergency, healthcare, travel, gifts — to nudge members toward saving consistently.",
      "Dedicated diaspora access path with currency- and remittance-friendly flows for members living abroad.",
    ],
  },
];

const DETAIL_HIGHLIGHTS = [
  "Consistent visual hierarchy in data-heavy screens",
  "Clear error, success, and loading states",
  "Accessibility — contrast, focus states, screen reader support",
  "Responsive behavior across devices",
];

interface KeyScreensProps {
  onPlayVideo: (src: string, label: string, orientation?: VideoOrientation) => void;
}

export function KeyScreens({ onPlayVideo }: KeyScreensProps) {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

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
          <SectionHeader
            eyebrow="Walkthrough"
            heading="Key Screens & Solution Highlights"
            accentColor={PENSION_GREEN}
            style={{ marginBottom: 48 }}
          />
        </div>

        {/* Alternating category rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 56, marginBottom: 56 }}>
          {CATEGORIES.map((cat, i) => {
            const reversed = i % 2 === 1;
            const isPair = cat.screens.length > 1;
            return (
              <div
                key={cat.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.55s ease ${0.1 + i * 0.1}s, transform 0.55s ease ${0.1 + i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: isPair ? 18 : 0,
                    order: reversed ? 2 : 1,
                  }}
                >
                  {cat.screens.map(screen => (
                    <div
                      key={screen.label}
                      style={{ width: isPair ? "clamp(120px, 38%, 170px)" : "clamp(180px, 60%, 230px)" }}
                    >
                      <PhoneFrame>
                        <CaseStudyImage src={screen.src} label={screen.label} aspectRatio="9/19" alt={screen.label} />
                      </PhoneFrame>
                      {isPair && (
                        <p
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: 11.5,
                            fontWeight: 600,
                            color: "#1C1A18",
                            opacity: 0.45,
                            textAlign: "center",
                            marginTop: 10,
                          }}
                        >
                          {screen.label}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ order: reversed ? 1 : 2 }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: PENSION_GREEN,
                      backgroundColor: "rgba(0,104,56,0.07)",
                      padding: "5px 12px",
                      borderRadius: 100,
                      marginBottom: 14,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#1C1A18", marginBottom: 16, letterSpacing: "-0.015em" }}>
                    {cat.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {cat.points.map(point => (
                      <div key={point} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: PENSION_GREEN, marginTop: 7, flexShrink: 0 }} />
                        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#1C1A18", opacity: 0.68, lineHeight: 1.65 }}>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diaspora flow — screen recording spotlight, placed right after the
            category that introduces diaspora access since this video is a
            walkthrough of that specific flow */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.55s ease 0.45s, transform 0.55s ease 0.45s",
            marginBottom: 56,
          }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            style={{
              backgroundColor: "#F9F7F5",
              borderRadius: 20,
              padding: "40px 36px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="cs-card"
                style={{ cursor: "pointer", width: "clamp(180px, 70%, 230px)" }}
                onClick={() => onPlayVideo(pensionAssets.video.diasporaWalkthrough, "Diaspora Flow Walkthrough", "portrait")}
              >
                <div style={{ position: "relative" }}>
                  <div className="cs-frame-media">
                    {/* No PhoneFrame wrapper — this recording already has its
                        own device chrome baked in from the capture. */}
                    <CaseStudyVideo
                      src={pensionAssets.video.diasporaWalkthrough}
                      label="Diaspora Flow Walkthrough"
                      aspectRatio="211/405"
                      autoPlay
                    />
                  </div>
                  <PlayButtonOverlay size={44} />
                </div>
              </div>
            </div>

            <div>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: PENSION_GREEN,
                  backgroundColor: "rgba(0,104,56,0.07)",
                  padding: "5px 12px",
                  borderRadius: 100,
                  marginBottom: 14,
                }}
              >
                In Motion
              </span>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#1C1A18", marginBottom: 16, letterSpacing: "-0.015em" }}>
                Diaspora Flow, Prototyped in Figma
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#1C1A18", opacity: 0.68, lineHeight: 1.65 }}>
                A screen recording of the diaspora access flow as prototyped
                end-to-end in Figma — capturing the interaction and motion
                design behind the static screens above.
              </p>
            </div>
          </div>
        </div>

        {/* Attention to detail strip */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            padding: "24px 28px",
            border: "1px solid rgba(62,39,35,0.07)",
            boxShadow: "0 4px 18px rgba(62,39,35,0.05)",
            marginBottom: 56,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.55s ease 0.5s, transform 0.55s ease 0.5s",
          }}
        >
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: PENSION_GREEN, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Attention to Detail
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {DETAIL_HIGHLIGHTS.map(item => (
              <div key={item} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={PENSION_GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, color: "#1C1A18", opacity: 0.72, lineHeight: 1.5 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .cs-frame-media { transition: transform 0.45s cubic-bezier(0.16,1,0.3,1); }
        .cs-card:hover .cs-frame-media { transform: scale(1.03); }
      `}</style>
    </section>
  );
}