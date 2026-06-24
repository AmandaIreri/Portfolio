import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";

export function Reflections() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} style={{ backgroundColor: "#FFFFFF", padding: "80px 0" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-10" style={{ textAlign: "center" }}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#7EC8E3",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Reflections
          </p>

          <blockquote
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
              color: "#0B1D2E",
              lineHeight: 1.65,
              letterSpacing: "-0.01em",
              fontStyle: "italic",
              margin: 0,
              padding: "0 12px",
            }}
          >
            "This project strengthened my ability to improve existing products
            rather than starting from zero. It reinforced the importance of clean
            hierarchy and modern conventions in tools that thousands of public
            servants rely on daily."
          </blockquote>

          <div
            style={{
              width: 48,
              height: 3,
              borderRadius: 2,
              backgroundColor: "#7EC8E3",
              margin: "28px auto 0",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease 0.3s",
            }}
          />
        </div>
      </div>
    </section>
  );
}