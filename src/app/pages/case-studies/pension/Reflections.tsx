import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { PENSION_GREEN } from "./assets";

export function Reflections() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: PENSION_GREEN,
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 400"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }}
      >
        <path d="M-50 100 Q 200 40, 450 100 T 1050 100" stroke="#F9F7F5" strokeWidth="1.2" fill="none" />
        <path d="M-50 300 Q 200 240, 450 300 T 1050 300" stroke="#F9F7F5" strokeWidth="1.2" fill="none" />
      </svg>

      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center" style={{ position: "relative" }}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 80,
              fontWeight: 800,
              color: "#D4AF37",
              opacity: 0.4,
              lineHeight: 1,
              display: "block",
              marginBottom: -8,
            }}
          >
            "
          </span>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#D4AF37", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>
            Reflections
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)",
              color: "#F9F7F5",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
            }}
          >
            This project highlighted the power of clear, empathetic mobile
            design in building trust for high-stakes financial services.
            Delivering a board-ready prototype under tight constraints
            reinforced my ability to translate complex requirements into
            intuitive experiences for African users.
          </p>
        </div>
      </div>
    </section>
  );
}