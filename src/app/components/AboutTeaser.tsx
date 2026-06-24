import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";
import headshotImg from "../../imports/Headshot.jpeg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const SKILLS = [
  "Figma & Prototyping",
  "Design Systems",
  "User Research",
  "Vue.js / React",
  "Android (Kotlin)",
  "Payment APIs",
  "Brand Identity",
  "Motion Design",
];

export function AboutTeaser() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        backgroundColor: "#FFFFFF",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              position: "relative",
            }}
          >
            <div style={{ position: "relative", maxWidth: 440 }}>
              {/* Decorative bracket top-left */}
              <svg
                aria-hidden="true"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                style={{ position: "absolute", top: -16, left: -16, zIndex: 2 }}
              >
                <line x1="2" y1="2" x2="32" y2="2" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="2" x2="2" y2="32" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {/* Decorative bracket bottom-right */}
              <svg
                aria-hidden="true"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                style={{ position: "absolute", bottom: -16, right: -16, zIndex: 2 }}
              >
                <line x1="46" y1="46" x2="16" y2="46" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
                <line x1="46" y1="46" x2="46" y2="16" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              </svg>

              {/* Espresso background block offset */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  right: -16,
                  bottom: -16,
                  backgroundColor: "#3E2723",
                  borderRadius: 14,
                  zIndex: 0,
                }}
              />

              {/* Image */}
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 16px 48px rgba(62,39,35,0.2)",
                  aspectRatio: "3/4",
                }}
              >
                <ImageWithFallback
                  src={headshotImg}
                  alt="Amanda Ireri"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
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
                marginBottom: 16,
              }}
            >
              About Amanda
            </p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#1C1A18",
                letterSpacing: "-0.025em",
                lineHeight: 1.12,
                marginBottom: 24,
              }}
            >
              One designer who delivers the{" "}
              <span
                style={{
                  borderBottom: "3px solid #D4AF37",
                  paddingBottom: 1,
                }}
              >
                whole product
              </span>
              .
            </h2>

            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 15.5,
                color: "#1C1A18",
                opacity: 0.72,
                lineHeight: 1.75,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginBottom: 28,
              }}
            >
              <p>
                I'm Amanda — a UX/UI Designer and Product Engineer based in Nairobi, Kenya. I take products end-to-end: from early brand conversations and Figma prototypes through to shipped Android and web interfaces with live payment integrations.
              </p>
              <p>
                My background spans African fintech, civic technology, and travel — sectors where user trust and interface clarity directly determine adoption. I bring 8+ months of field research experience, a deep care for accessibility, and a relentless eye for detail.
              </p>
              <p>
                I'm looking for remote UX/UI or product roles where owning the full pipeline — not just a slice of it — creates real value.
              </p>
            </div>

            {/* Skills grid */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {SKILLS.map(skill => (
                <span
                  key={skill}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#3E2723",
                    backgroundColor: "rgba(62,39,35,0.06)",
                    padding: "5px 12px",
                    borderRadius: 100,
                    border: "1px solid rgba(62,39,35,0.1)",
                    letterSpacing: "0.02em",
                    transition: "background-color 0.2s ease, color 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "#3E2723";
                    el.style.color = "#F9F7F5";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "rgba(62,39,35,0.06)";
                    el.style.color = "#3E2723";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="mailto:nyawiramanda@gmail.com"
                style={{
                  backgroundColor: "#D4AF37",
                  color: "#1C1A18",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  borderRadius: 6,
                  padding: "12px 24px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 4px 16px rgba(212,175,55,0.28)",
                  transition: "background-color 0.2s ease, transform 0.15s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C9A227"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#D4AF37"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
              >
                Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/ireri-amanda/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "transparent",
                  color: "#3E2723",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  borderRadius: 6,
                  padding: "11px 24px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1.5px solid rgba(62,39,35,0.3)",
                  transition: "border-color 0.2s ease, color 0.2s ease, transform 0.15s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#3E2723"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(62,39,35,0.3)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
