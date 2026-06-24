import { useEffect, useRef, useState } from "react";
import headshotImg from "../../imports/Headshot.jpeg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.18,
        pointerEvents: "none",
      }}
    >
      <defs>
        <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#D4AF37" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
    </svg>
  );
}

function BlobFrame() {
  return (
    <svg
      viewBox="0 0 520 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        inset: -20,
        width: "calc(100% + 40px)",
        height: "calc(100% + 40px)",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <path
        d="M260 20 C340 10, 460 60, 490 160 C520 260, 500 380, 420 460 C340 540, 180 560, 100 480 C20 400, 0 260, 40 160 C80 60, 180 30, 260 20Z"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeOpacity="0.4"
        fill="none"
      />
      <path
        d="M260 50 C330 42, 435 85, 460 175 C485 265, 468 368, 396 438 C324 508, 180 526, 108 452 C36 378, 24 248, 58 158 C92 68, 190 58, 260 50Z"
        stroke="#D4AF37"
        strokeWidth="0.75"
        strokeOpacity="0.2"
        fill="none"
      />
      {/* Corner decoration marks */}
      <line x1="30" y1="30" x2="70" y2="30" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="30" y1="30" x2="30" y2="70" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="490" y1="30" x2="450" y2="30" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="490" y1="30" x2="490" y2="70" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="30" y1="530" x2="70" y2="530" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="30" y1="530" x2="30" y2="490" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="490" y1="530" x2="450" y2="530" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="490" y1="530" x2="490" y2="490" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6" />
    </svg>
  );
}

const HIGHLIGHTS = [
  { icon: "✦", label: "Figma & Design Systems" },
  { icon: "✦", label: "End-to-End Shipping (Design + Code)" },
  { icon: "✦", label: "Field Research & Real Impact" },
];

export function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleWorkClick = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutClick = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: "100vh",
        backgroundColor: "#F9F7F5",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
      }}
    >
      <DotGrid />

      {/* Warm radial gradient accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,69,19,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Status line */}
            <div
              className="flex items-center gap-2 mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                  display: "inline-block",
                  boxShadow: "0 0 0 3px rgba(76,175,80,0.2)",
                }}
              />
              <span
                style={{ color: "#1C1A18", opacity: 0.65, fontSize: 13, fontWeight: 500, letterSpacing: "0.03em" }}
              >
                Available for select projects&nbsp;&nbsp;·&nbsp;&nbsp;Nairobi, Kenya
              </span>
            </div>

            {/* Eyebrow */}
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#D4AF37",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Amanda Ireri
            </p>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: "#1C1A18",
                marginBottom: 24,
              }}
            >
              I design intuitive{" "}
              <span style={{ color: "#3E2723" }}>digital experiences</span>{" "}
              and ship{" "}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                production-ready
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: -2,
                    width: "100%",
                    height: 3,
                    backgroundColor: "#D4AF37",
                    borderRadius: 2,
                    opacity: 0.6,
                  }}
                />
              </span>{" "}
              products for African users.
            </h1>

            {/* Body */}
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
                lineHeight: 1.7,
                color: "#1C1A18",
                opacity: 0.72,
                marginBottom: 36,
                maxWidth: 520,
              }}
            >
              Detail-oriented UX/UI Designer &amp; Product Engineer. I take early-stage
              ideas from brand identity and Figma prototypes to polished, responsive
              interfaces and functional code — with meticulous attention to every pixel
              and user flow.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={handleWorkClick}
                style={{
                  backgroundColor: "#D4AF37",
                  color: "#1C1A18",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  borderRadius: 6,
                  padding: "14px 28px",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                  boxShadow: "0 4px 16px rgba(212,175,55,0.3)",
                  transition: "background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "#C9A227";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 6px 20px rgba(212,175,55,0.4)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "#D4AF37";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 16px rgba(212,175,55,0.3)";
                }}
              >
                See my work →
              </button>
              <button
                onClick={handleAboutClick}
                style={{
                  backgroundColor: "transparent",
                  color: "#3E2723",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  borderRadius: 6,
                  padding: "13px 28px",
                  border: "1.5px solid #3E2723",
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                  transition: "background-color 0.2s ease, transform 0.15s ease, color 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "#3E2723";
                  el.style.color = "#F9F7F5";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "transparent";
                  el.style.color = "#3E2723";
                  el.style.transform = "translateY(0)";
                }}
              >
                About me
              </button>
            </div>

            {/* Highlights row */}
            <div className="flex flex-wrap gap-3">
              {HIGHLIGHTS.map(({ icon, label }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#1C1A18",
                    opacity: 0.7,
                    backgroundColor: "white",
                    border: "1px solid rgba(62,39,35,0.1)",
                    borderRadius: 100,
                    padding: "6px 14px",
                    boxShadow: "0 1px 4px rgba(62,39,35,0.06)",
                  }}
                >
                  <span style={{ color: "#D4AF37", fontSize: 10 }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — headshot */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: 440 }}>
              <BlobFrame />
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 24px 64px rgba(62,39,35,0.22), 0 8px 24px rgba(62,39,35,0.12)",
                  aspectRatio: "4/5",
                }}
              >
                <ImageWithFallback
                  src={headshotImg}
                  alt="Amanda Ireri — UX/UI Designer & Product Engineer based in Nairobi, Kenya"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay at bottom */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "30%",
                    background: "linear-gradient(to top, rgba(62,39,35,0.12), transparent)",
                  }}
                />
              </div>
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: -20,
                  zIndex: 10,
                  backgroundColor: "#3E2723",
                  color: "#F9F7F5",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "10px 16px",
                  borderRadius: 10,
                  boxShadow: "0 8px 24px rgba(62,39,35,0.3)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "#D4AF37", marginRight: 6 }}>⬡</span>
                Nairobi, Kenya
              </div>
              {/* Role badge */}
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: -16,
                  zIndex: 10,
                  backgroundColor: "white",
                  color: "#1C1A18",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "8px 14px",
                  borderRadius: 10,
                  boxShadow: "0 4px 20px rgba(62,39,35,0.15)",
                  border: "1px solid rgba(62,39,35,0.08)",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "#D4AF37", marginRight: 6 }}>●</span>
                UX/UI · Product
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          opacity: 0.4,
          animation: "bounce 2s ease-in-out infinite",
        }}
      >
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1C1A18" }}>Scroll</span>
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
          <path d="M6 0v12M1 8l5 6 5-6" stroke="#1C1A18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(5px); }
        }
      `}</style>
    </section>
  );
}
