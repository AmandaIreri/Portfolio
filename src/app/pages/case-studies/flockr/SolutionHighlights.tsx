import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";

const HIGHLIGHTS = [
  {
    title: "Financial Inclusion & Payments",
    description: "M-Pesa integration paired with escrow protection — giving pastoralists a digital trail that can support future loan and insurance applications.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="16" rx="3" stroke="#D4AF37" strokeWidth="1.8" />
        <path d="M3 12h22" stroke="#D4AF37" strokeWidth="1.8" />
        <circle cx="20" cy="17.5" r="2.4" fill="rgba(212,175,55,0.3)" />
      </svg>
    ),
  },
  {
    title: "Seller Dashboard & Livestock Management",
    description: "A single home for managing herd inventory, listings, and sales — built so a first-time smartphone user can navigate it confidently.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="4" width="9" height="9" rx="2" stroke="#D4AF37" strokeWidth="1.8" />
        <rect x="16" y="4" width="9" height="9" rx="2" stroke="#D4AF37" strokeWidth="1.8" fill="rgba(212,175,55,0.15)" />
        <rect x="3" y="15" width="9" height="9" rx="2" stroke="#D4AF37" strokeWidth="1.8" fill="rgba(212,175,55,0.15)" />
        <rect x="16" y="15" width="9" height="9" rx="2" stroke="#D4AF37" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Marketplace with Traceability",
    description: "Every listing carries a verifiable record — origin, health, and ownership history — replacing word-of-mouth trust with real data.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l10 5v6c0 6-4.3 9.3-10 11-5.7-1.7-10-5-10-11V8l10-5z" stroke="#D4AF37" strokeWidth="1.8" />
        <path d="M10 14l3 3 5-5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scalable Design System",
    description: "Reusable components and clear UI patterns built to extend cleanly into the Phase 2 web rebuild and future modules.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="9" cy="9" r="4.5" stroke="#D4AF37" strokeWidth="1.8" />
        <rect x="15.5" y="4.5" width="9" height="9" rx="2" stroke="#D4AF37" strokeWidth="1.8" fill="rgba(212,175,55,0.15)" />
        <path d="M9 19.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" stroke="#D4AF37" strokeWidth="1.8" fill="rgba(212,175,55,0.15)" />
        <rect x="15.5" y="15" width="9" height="9" rx="2" stroke="#D4AF37" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export function SolutionHighlights() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} style={{ backgroundColor: "#FFFFFF", padding: "72px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionHeader eyebrow="The Solution" heading="Solution Highlights" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                padding: "28px 28px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.55s ease ${0.1 + i * 0.1}s, transform 0.55s ease ${0.1 + i * 0.1}s, box-shadow 0.25s ease`,
                boxShadow: "0 4px 18px rgba(62,39,35,0.07)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 34px rgba(62,39,35,0.13)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(62,39,35,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <div style={{ flexShrink: 0, display: "flex" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#1C1A18", letterSpacing: "-0.01em" }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, color: "#1C1A18", opacity: 0.65, lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}