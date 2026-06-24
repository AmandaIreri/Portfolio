import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { QARIBIA_GOLD } from "./assets";

const KEY_PROBLEMS = [
  "Static imagery failing to capture Kenya's dynamic landscapes",
  "Overwhelming or confusing booking flows",
  "Lack of personalization in trip curation",
  "Missed opportunity for emotional connection through motion and storytelling",
];

export function Challenge() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} style={{ backgroundColor: "#F9F7F5", padding: "72px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionHeader
            eyebrow="Challenge"
            heading="Creating Desire Through Digital Immersion"
            accentColor={QARIBIA_GOLD}
            description="Traditional tourism websites often feel static and transactional. For a premium Kenyan travel brand, the goal was to evoke emotion and wonder — transporting users to the savannah, coast, and mountains — while making itinerary planning and booking effortless."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3" style={{ maxWidth: 600, marginTop: 8 }}>
            {KEY_PROBLEMS.map((point, i) => (
              <div
                key={point}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-10px)",
                  transition: `opacity 0.45s ease ${0.15 + i * 0.08}s, transform 0.45s ease ${0.15 + i * 0.08}s`,
                }}
              >
                <span style={{ width: 16, height: 1.5, backgroundColor: QARIBIA_GOLD, flexShrink: 0, marginTop: 9 }} />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14.5, fontWeight: 600, color: "#1C1A18", opacity: 0.78, lineHeight: 1.5 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}