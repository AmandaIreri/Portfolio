import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { BrowserFrame } from "../../../components/case-study/BrowserFrame";
import { PhoneFrame } from "../../../components/case-study/PhoneFrame";
import { CaseStudyImage } from "../../../components/case-study/CaseStudyImage";
import { flockrAssets } from "./assets";

interface HeroProps {
  onPlayVideo: (src: string, label: string, orientation?: "landscape" | "portrait") => void;
}

export function Hero({ onPlayVideo }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);
  const [settled, setSettled] = useState(false);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#3E2723",
        padding: "108px 0 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid texture */}
      <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}>
        <defs>
          <pattern id="dot-flockr-hero" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#D4AF37" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-flockr-hero)" />
      </svg>

      {/* Radial gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: "relative" }}>
        <Link
          to="/#work"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(249,247,245,0.55)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 24,
            transition: "color 0.2s ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(249,247,245,0.55)"; }}
        >
          ← Back to all work
        </Link>

        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 items-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Left — text */}
          <div>
            <div
              className="flex items-center gap-2 mb-4"
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
              <span style={{ color: "rgba(249,247,245,0.6)", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.03em" }}>
                Shipped MVP · Nairobi, Kenya
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
                marginBottom: 12,
              }}
            >
              Case Study
            </p>

            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
                color: "#F9F7F5",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                marginBottom: 14,
              }}
            >
              Flockr
            </h1>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                color: "rgba(249,247,245,0.72)",
                lineHeight: 1.65,
                marginBottom: 20,
                maxWidth: 460,
              }}
            >
              Kenya's first comprehensive livestock e-commerce ecosystem — shipped MVP
              with 120+ registered users and 412 animals listed.
            </p>

            {/* Role / timeline meta */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 28px",
                marginBottom: 22,
                paddingBottom: 22,
                borderBottom: "1px solid rgba(249,247,245,0.1)",
              }}
            >
              <div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(249,247,245,0.4)", marginBottom: 4 }}>
                  Role
                </p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, fontWeight: 600, color: "#F9F7F5" }}>
                  UX/UI Designer &amp; Android Developer
                  <span style={{ color: "rgba(249,247,245,0.5)", fontWeight: 500 }}> (End-to-End)</span>
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(249,247,245,0.4)", marginBottom: 4 }}>
                  Timeline
                </p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, fontWeight: 600, color: "#F9F7F5" }}>
                  April 2025 – Present
                </p>
              </div>
            </div>

            {/* Video CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onPlayVideo(flockrAssets.hero.dashboardVideo, "Seller Dashboard Navigation", "landscape")}
                style={{
                  backgroundColor: "#D4AF37",
                  color: "#1C1A18",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  borderRadius: 6,
                  padding: "13px 22px",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  boxShadow: "0 4px 16px rgba(212,175,55,0.3)",
                  transition: "background-color 0.2s ease, transform 0.15s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#C9A227"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#D4AF37"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                Dashboard Prototype
              </button>
              <button
                onClick={() => onPlayVideo(flockrAssets.hero.marketplaceVideo, "Marketplace Recording", "landscape")}
                style={{
                  backgroundColor: "transparent",
                  color: "#F9F7F5",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  borderRadius: 6,
                  padding: "12px 22px",
                  border: "1.5px solid rgba(249,247,245,0.25)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  transition: "border-color 0.2s ease, background-color 0.2s ease, transform 0.15s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF37"; (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(212,175,55,0.08)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(249,247,245,0.25)"; (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                Marketplace Prototype
              </button>
            </div>
          </div>

          {/* Right — angled composite mockup */}
          <div
            onMouseEnter={() => setSettled(true)}
            onMouseLeave={() => setSettled(false)}
            style={{
              position: "relative",
              height: "clamp(320px, 40vw, 460px)",
              cursor: "default",
            }}
          >
            {/* Marketplace desktop — back layer */}
            <div className="cs-hero-float" style={{ position: "absolute", top: "4%", left: "0%", width: "64%", zIndex: 1, animationDuration: "7s", animationDelay: "0s" }}>
              <BrowserFrame tilt={settled ? 0 : -7}>
                <CaseStudyImage
                  src={flockrAssets.hero.marketplaceWeb}
                  label="Marketplace — Desktop"
                  aspectRatio="16/10"
                  alt="Flockr marketplace, desktop view"
                />
              </BrowserFrame>
            </div>

            {/* Marketplace mobile — lower left */}
            <div className="cs-hero-float" style={{ position: "absolute", bottom: "0%", left: "2%", width: "23%", zIndex: 2, animationDuration: "5.5s", animationDelay: "0.6s" }}>
              <PhoneFrame tilt={settled ? 0 : -10}>
                <CaseStudyImage
                  src={flockrAssets.hero.marketplaceMobile}
                  label="Marketplace — Mobile"
                  aspectRatio="9/19"
                  alt="Flockr marketplace, mobile view"
                />
              </PhoneFrame>
            </div>

            {/* Dashboard desktop — front layer */}
            <div className="cs-hero-float" style={{ position: "absolute", bottom: "2%", right: "0%", width: "60%", zIndex: 3, animationDuration: "6.5s", animationDelay: "1.2s" }}>
              <BrowserFrame tilt={settled ? 0 : 6}>
                <CaseStudyImage
                  src={flockrAssets.hero.dashboardWeb}
                  label="Seller Dashboard — Desktop"
                  aspectRatio="16/10"
                  alt="Flockr seller dashboard, desktop view"
                />
              </BrowserFrame>
            </div>

            {/* Dashboard mobile — upper right */}
            <div className="cs-hero-float" style={{ position: "absolute", top: "0%", right: "4%", width: "22%", zIndex: 4, animationDuration: "6s", animationDelay: "1.8s" }}>
              <PhoneFrame tilt={settled ? 0 : 9}>
                <CaseStudyImage
                  src={flockrAssets.hero.dashboardMobile}
                  label="Seller Dashboard — Mobile"
                  aspectRatio="9/19"
                  alt="Flockr seller dashboard, mobile view"
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes csHeroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
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