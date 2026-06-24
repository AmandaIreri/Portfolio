import { Link } from "react-router-dom";
import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { qaribiaAssets, QARIBIA_MIDNIGHT, QARIBIA_GOLD_LIGHT, QARIBIA_LIVE_URL } from "./assets";

const META = "Lead Product Designer & Motion Explorer · Feb 2025 · HTML, TypeScript, CSS, Figma, AI Prompting";

const STATS = [
  { value: "4+", label: "Page Templates Designed" },
  { value: "100%", label: "Hand-Coded, No Builder" },
  { value: "24s", label: "Motion Reel Below" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: QARIBIA_MIDNIGHT,
      }}
    >
      {/* Full-bleed photo — plain <img>, not CaseStudyImage, so it always
          covers the section regardless of viewport ratio. Falls back to
          the solid midnight background above if the file is missing. */}
      <img
        src={qaribiaAssets.heroBackground}
        alt="Kenya safari landscape"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 38%",
        }}
        onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
      />

      {/* Dark gradient overlay — same angle/stops as the live product's own
          hero__overlay, so the case study borrows its actual visual DNA */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(105deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.66) 45%, rgba(13,27,42,0.25) 100%)`,
        }}
      />

      <Link
        to="/#work"
        style={{
          position: "absolute",
          top: 36,
          left: 0,
          zIndex: 4,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: "rgba(255,255,255,0.6)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          transition: "color 0.2s ease",
        }}
        className="ml-6 lg:ml-10"
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}
      >
        ← Back to all work
      </Link>

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: "relative", zIndex: 3, width: "100%", paddingTop: 60 }}>
        <div
          style={{
            maxWidth: 620,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#D4AF37",
                display: "inline-block",
                boxShadow: "0 0 0 3px rgba(212,175,55,0.22)",
              }}
            />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.65)", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.03em" }}>
              Live Prototype · Self-Directed Project
            </span>
          </div>

          {/* "Case Study" label — site-wide interactive gold */}
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#D4AF37",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Case Study
          </p>

          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              lineHeight: 1.06,
              marginBottom: 18,
            }}
          >
            Qaribia Tourism Platform
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: 19,
              color: QARIBIA_GOLD_LIGHT,
              marginBottom: 22,
            }}
          >
            Immersive web prototype for premium Kenya travel experiences
          </p>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 540,
            }}
          >
            After completing PLP's AI Safari course, I challenged myself to
            build a complete, motion-rich web prototype from scratch —
            cinematic storytelling, an end-to-end booking flow, and
            delightful interactions, all built directly in code.
          </p>

          {/* CTAs — site-wide gold, matching every other CTA on the portfolio */}
          <div className="flex flex-wrap items-center" style={{ gap: 14, marginBottom: 48 }}>
            <a
              href={QARIBIA_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "#1C1A18",
                backgroundColor: "#D4AF37",
                padding: "13px 28px",
                borderRadius: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(212,175,55,0.35)",
                transition: "transform 0.25s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
            >
              View Live Prototype
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1C1A18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </a>
            <a
              href="#process"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "#FFFFFF",
                border: "1.5px solid rgba(255,255,255,0.4)",
                backgroundColor: "rgba(255,255,255,0.07)",
                padding: "12px 26px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              See the Process
            </a>
          </div>

          {/* Stats row — borrowed directly from the live product's own
              hero__stats pattern: bold value, small label, thin dividers */}
          <div className="flex flex-wrap items-center" style={{ gap: 28, marginBottom: 18 }}>
            {STATS.map((stat, i) => (
              <span key={stat.label} style={{ display: "flex", alignItems: "center", gap: 28 }}>
                {i > 0 && <span style={{ width: 1, height: 36, backgroundColor: "rgba(255,255,255,0.22)" }} />}
                <span>
                  <span style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: QARIBIA_GOLD_LIGHT, letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {stat.value}
                  </span>
                  <span style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 4 }}>
                    {stat.label}
                  </span>
                </span>
              </span>
            ))}
          </div>

          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12.5, color: "rgba(255,255,255,0.45)" }}>
            {META}
          </p>
        </div>
      </div>

      {/* Scroll indicator — rotated, animated line sweep, lifted straight
          from the live product's hero__scroll treatment */}
      <div
        aria-hidden="true"
        className="hidden md:flex"
        style={{
          position: "absolute",
          bottom: 64,
          left: 0,
          zIndex: 4,
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 10,
          transform: "rotate(90deg)",
          transformOrigin: "left center",
        }}
      >
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10.5, color: "rgba(255,255,255,0.45)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}>
          Scroll to Explore
        </span>
        <div style={{ width: 50, height: 1, position: "relative", overflow: "hidden", background: "linear-gradient(to right, rgba(255,255,255,0.5), transparent)" }}>
          <div className="qaribia-scroll-sweep" style={{ position: "absolute", left: "-100%", top: 0, width: 50, height: 1, backgroundColor: "#D4AF37" }} />
        </div>
      </div>

      {/* Floating glass badge, bottom-right — same position/treatment as
          the live site's own video-source badge */}
      <div
        className="hidden sm:flex"
        style={{
          position: "absolute",
          bottom: 36,
          right: 0,
          zIndex: 4,
          backgroundColor: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 10,
          padding: "12px 18px",
          alignItems: "center",
          gap: 12,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37"><circle cx="12" cy="12" r="11" opacity="0.18" /><path d="M10 8l6 4-6 4V8z" /></svg>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12.5, color: "#FFFFFF" }}>
          Built &amp; deployed live
          <br />
          <span style={{ opacity: 0.55, fontSize: 11 }}>qaribia.cspl-uat.com</span>
        </span>
      </div>

      <style>{`
        @keyframes qaribiaScrollSweep {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
        .qaribia-scroll-sweep {
          animation: qaribiaScrollSweep 2s 0.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}