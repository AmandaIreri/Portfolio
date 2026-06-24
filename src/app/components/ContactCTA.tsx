import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";

export function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        backgroundColor: "#3E2723",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid texture */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none" }}
      >
        <defs>
          <pattern id="dot-contact" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#D4AF37" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-contact)" />
      </svg>

      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(212,175,55,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#D4AF37",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Let's Collaborate
          </p>

          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              color: "#F9F7F5",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Ready to build something{" "}
            <span style={{ color: "#D4AF37" }}>great?</span>
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              color: "rgba(249,247,245,0.65)",
              lineHeight: 1.7,
              marginBottom: 44,
              maxWidth: 560,
              margin: "0 auto 44px",
            }}
          >
            I'm currently available for select projects — fintech UX, civic products, and anything that ships real value to African users. Remote-friendly, async-capable, and ready to own the full pipeline.
          </p>

          {/* Gold divider */}
          <div
            aria-hidden="true"
            style={{
              width: 48,
              height: 2,
              backgroundColor: "#D4AF37",
              borderRadius: 2,
              margin: "0 auto 44px",
              opacity: 0.5,
            }}
          />

          {/* CTA buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href="mailto:nyawiramanda@gmail.com"
              style={{
                backgroundColor: "#D4AF37",
                color: "#1C1A18",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: 6,
                padding: "15px 32px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 4px 20px rgba(212,175,55,0.3)",
                transition: "background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#C9A227";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 28px rgba(212,175,55,0.4)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#D4AF37";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 20px rgba(212,175,55,0.3)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2,4 12,13 22,4" />
              </svg>
              Send me a message
            </a>

            <a
              href="https://www.linkedin.com/in/ireri-amanda/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "transparent",
                color: "#F9F7F5",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 6,
                padding: "14px 32px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                border: "1.5px solid rgba(249,247,245,0.25)",
                transition: "border-color 0.2s ease, background-color 0.2s ease, transform 0.15s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#D4AF37";
                el.style.backgroundColor = "rgba(212,175,55,0.08)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(249,247,245,0.25)";
                el.style.backgroundColor = "transparent";
                el.style.transform = "translateY(0)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
