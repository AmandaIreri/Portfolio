import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { PhoneFrame } from "../../../components/case-study/PhoneFrame";
import { CaseStudyImage } from "../../../components/case-study/CaseStudyImage";
import { homabayAssets } from "./assets";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);
  const [hovered, setHovered] = useState(false);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#0B1D2E",
        padding: "108px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle wave texture overlay */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <defs>
          <pattern
            id="wave-homabay"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 30 Q15 20 30 30 T60 30"
              fill="none"
              stroke="#7EC8E3"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wave-homabay)" />
      </svg>

      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          right: "-8%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(126,200,227,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        style={{ position: "relative" }}
      >
        <Link
          to="/#work"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(245,248,250,0.45)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 28,
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#7EC8E3";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color =
              "rgba(245,248,250,0.45)";
          }}
        >
          ← Back to all work
        </Link>

        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-12 items-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Left — text */}
          <div>
            <div
              className="flex items-center gap-2 mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#4ADE80",
                  display: "inline-block",
                  boxShadow: "0 0 0 3px rgba(74,222,128,0.18)",
                }}
              />
              <span
                style={{
                  color: "rgba(245,248,250,0.55)",
                  fontSize: 12.5,
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                }}
              >
                In Progress.
              </span>
            </div>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#7EC8E3",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Case Study
            </p>

            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                color: "#F5F8FA",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                marginBottom: 16,
              }}
            >
              <span style={{ color: "#7EC8E3" }}>HRIS Mobile App</span>
            </h1>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                color: "rgba(245,248,250,0.65)",
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 480,
              }}
            >
              Revamping the mobile HR Information System for A Civic
              Institution — transforming a dated interface into a modern, intuitive
              experience for county staff managing attendance, leave, and
              productivity.
            </p>

            {/* Role / timeline meta */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 32px",
                marginBottom: 26,
                paddingBottom: 26,
                borderBottom: "1px solid rgba(245,248,250,0.08)",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(245,248,250,0.35)",
                    marginBottom: 4,
                  }}
                >
                  Role
                </p>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: "#F5F8FA",
                  }}
                >
                  UI/UX Designer &amp; Implementation Support
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(245,248,250,0.35)",
                    marginBottom: 4,
                  }}
                >
                  Timeline
                </p>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: "#F5F8FA",
                  }}
                >
                  Ongoing
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(245,248,250,0.35)",
                    marginBottom: 4,
                  }}
                >
                  Status
                </p>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: "#4ADE80",
                  }}
                >
                  Design Complete → Implementing
                </p>
              </div>
            </div>

            {/* Tools pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Figma", "Android XML", "UI/UX Design", "Design System"].map(
                (tool) => (
                  <span
                    key={tool}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "rgba(126,200,227,0.85)",
                      backgroundColor: "rgba(126,200,227,0.08)",
                      border: "1px solid rgba(126,200,227,0.15)",
                      padding: "5px 14px",
                      borderRadius: 100,
                    }}
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — angled phone mockup stack */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              position: "relative",
              height: "clamp(340px, 42vw, 480px)",
              cursor: "default",
            }}
          >
            {/* Back phone — tilted left */}
            <div
              className="cs-hero-float"
              style={{
                position: "absolute",
                top: "8%",
                left: "5%",
                width: "32%",
                zIndex: 1,
                animationDuration: "7s",
                animationDelay: "0s",
              }}
            >
              <PhoneFrame tilt={hovered ? 0 : -12}>
                <CaseStudyImage
                  src={homabayAssets.screens.attendanceClock}
                  label="Attendance — Clock In"
                  aspectRatio="9/19"
                  alt="Attendance clock-in screen"
                />
              </PhoneFrame>
            </div>

            {/* Middle phone — centered, slightly forward */}
            <div
              className="cs-hero-float"
              style={{
                position: "absolute",
                top: "0%",
                left: "28%",
                width: "38%",
                zIndex: 3,
                animationDuration: "6s",
                animationDelay: "0.8s",
              }}
            >
              <PhoneFrame tilt={hovered ? 0 : 0}>
                <CaseStudyImage
                  src={homabayAssets.screens.dashboard}
                  label="Dashboard"
                  aspectRatio="9/19"
                  alt="Dashboard screen"
                />
              </PhoneFrame>
            </div>

            {/* Front phone — tilted right */}
            <div
              className="cs-hero-float"
              style={{
                position: "absolute",
                bottom: "5%",
                right: "8%",
                width: "34%",
                zIndex: 2,
                animationDuration: "5.5s",
                animationDelay: "1.4s",
              }}
            >
              <PhoneFrame tilt={hovered ? 0 : 10}>
                <CaseStudyImage
                  src={homabayAssets.screens.leaveApply}
                  label="Leave Application"
                  aspectRatio="9/19"
                  alt="Leave application screen"
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes csHeroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cs-hero-float {
          animation-name: csHeroFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
}