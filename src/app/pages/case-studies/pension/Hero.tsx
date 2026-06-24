import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { PhoneFrame } from "../../../components/case-study/PhoneFrame";
import { CaseStudyImage } from "../../../components/case-study/CaseStudyImage";
import { pensionAssets, PENSION_GREEN } from "./assets";

const HERO_SCREENS = [
  { src: pensionAssets.hero.onboarding, label: "Onboarding" },
  { src: pensionAssets.hero.dashboard, label: "Dashboard" },
  { src: pensionAssets.hero.transaction, label: "Transaction" },
];

const META = [
  { label: "Role", value: "Lead UX/UI Designer (Mobile Prototype)" },
  { label: "Timeline", value: "2025" },
  { label: "Tools", value: "Figma" },
  { label: "Impact", value: "Board Approved · Advanced to Negotiations" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen(i => (i + 1) % HERO_SCREENS.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#FFFFFF",
        padding: "120px 0 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows to fill the wide canvas */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,104,56,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 40,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Drifting topographic contour texture, green on white */}
      <svg
        aria-hidden="true"
        className="cs-pension-topo"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "140%", height: "100%", opacity: 0.08, pointerEvents: "none" }}
      >
        <path d="M-50 60 Q 150 0, 350 60 T 750 60 T 1150 60" stroke={PENSION_GREEN} strokeWidth="1.2" fill="none" />
        <path d="M-50 140 Q 150 80, 350 140 T 750 140 T 1150 140" stroke={PENSION_GREEN} strokeWidth="1.2" fill="none" />
        <path d="M-50 530 Q 150 470, 350 530 T 750 530 T 1150 530" stroke={PENSION_GREEN} strokeWidth="1.2" fill="none" />
        <path d="M-50 590 Q 150 530, 350 590 T 750 590 T 1150 590" stroke={PENSION_GREEN} strokeWidth="1.2" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: "relative" }}>
        <Link
          to="/#work"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(28,26,24,0.5)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 40,
            transition: "color 0.2s ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = PENSION_GREEN; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(28,26,24,0.5)"; }}
        >
          ← Back to all work
        </Link>

        {/* Centered text block */}
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div
            className="flex items-center justify-center gap-2 mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#4CAF50",
                display: "inline-block",
                boxShadow: "0 0 0 3px rgba(76,175,80,0.18)",
              }}
            />
            <span style={{ color: "rgba(28,26,24,0.55)", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.03em" }}>
              Board Approved · Advanced to Negotiations
            </span>
          </div>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#D4AF37",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Case Study
          </p>

          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 6vw, 4.1rem)",
              color: "#1C1A18",
              letterSpacing: "-0.025em",
              lineHeight: 1.07,
              marginBottom: 14,
            }}
          >
            Pension Platform Prototype
          </h1>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 17,
              fontWeight: 600,
              color: PENSION_GREEN,
              marginBottom: 18,
            }}
          >
            Mobile-first interactive prototype for a licensed Kenyan pension institution — serving formal, informal, and diaspora members nationwide
          </p>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              color: "#1C1A18",
              opacity: 0.65,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 620,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            An intuitive mobile experience
            addressing legacy system friction — mandatory in-person visits,
            opaque contribution tracking, limited payment options, and no
            meaningful diaspora support. The result: a high-fidelity prototype
            that secured board approval on first presentation and advanced to
            commercial negotiations.
          </p>

          {/* Meta row — inline, separated by dots, not a bordered grid */}
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "8px 0", marginBottom: 16 }}
          >
            {META.map((item, i) => (
              <span key={item.label} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && (
                  <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "rgba(28,26,24,0.25)", margin: "0 14px" }} />
                )}
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "#1C1A18", opacity: 0.55 }}>
                  <span style={{ fontWeight: 700, opacity: 0.8 }}>{item.label}:</span> {item.value}
                </span>
              </span>
            ))}
          </div>

          {/* Confidentiality note */}
          <div className="flex items-center justify-center gap-2">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(28,26,24,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                color: "rgba(28,26,24,0.35)",
                letterSpacing: "0.01em",
              }}
            >
              Work shown under NDA — client identity confidential.
            </span>
          </div>
        </div>

        {/* Centered phone mockup, below the text — distinct from Flockr's side-by-side layout */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            marginTop: 56,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}
        >
          <div style={{ position: "relative", width: "clamp(200px, 22vw, 250px)" }}>
            {/* Pulsing trust rings, centered on the phone itself (not on a mismatched container) */}
            {[0, 1, 2].map(i => (
              <span
                key={i}
                aria-hidden="true"
                className="cs-trust-ring"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 260,
                  height: 260,
                  marginTop: -130,
                  marginLeft: -130,
                  borderRadius: "50%",
                  border: `1px solid rgba(0,104,56,0.18)`,
                  animationDelay: `${i * 1.3}s`,
                  zIndex: 0,
                }}
              />
            ))}

            <div style={{ position: "relative", zIndex: 2 }}>
              <PhoneFrame>
                <div style={{ position: "relative" }}>
                  {HERO_SCREENS.map((screen, i) => (
                    <div
                      key={screen.label}
                      style={{
                        position: i === 0 ? "relative" : "absolute",
                        inset: 0,
                        opacity: activeScreen === i ? 1 : 0,
                        transition: "opacity 0.7s ease",
                      }}
                    >
                      <CaseStudyImage src={screen.src} label={`Hero — ${screen.label}`} aspectRatio="9/19" alt={screen.label} />
                    </div>
                  ))}
                </div>
              </PhoneFrame>

              {/* Screen indicator dots */}
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 16 }}>
                {HERO_SCREENS.map((screen, i) => (
                  <span
                    key={screen.label}
                    style={{
                      width: activeScreen === i ? 16 : 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: activeScreen === i ? PENSION_GREEN : "rgba(28,26,24,0.15)",
                      transition: "width 0.3s ease, background-color 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Approval ribbon badge */}
            <div
              style={{
                position: "absolute",
                top: "6%",
                right: "-16%",
                zIndex: 3,
                backgroundColor: PENSION_GREEN,
                color: "#F9F7F5",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 10.5,
                fontWeight: 700,
                padding: "7px 13px",
                borderRadius: 100,
                boxShadow: "0 8px 24px rgba(0,104,56,0.3)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F9F7F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Board Approved
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes csTrustRing {
          0% { transform: scale(0.7); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .cs-trust-ring {
          animation: csTrustRing 3.9s ease-out infinite;
        }
        @keyframes csTopoDrift {
          0% { transform: translateX(0); }
          100% { transform: translateX(-120px); }
        }
        .cs-pension-topo {
          animation: csTopoDrift 40s linear infinite alternate;
        }
      `}</style>
    </section>
  );
}