import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { CaseStudyImage } from "../../../components/case-study/CaseStudyImage";
import { flockrAssets } from "./assets";

const PHOTOS = [
  { src: flockrAssets.research.photo1, caption: "Field interviews — Laikipia", rotate: -2 },
  { src: flockrAssets.research.photo2, caption: "Livestock tagging practices — Kajiado", rotate: 1.5 },
  { src: flockrAssets.research.photo3, caption: "Trading day, on the ground", rotate: -1.5 },
  { src: flockrAssets.research.photo4, caption: "Synthesis & competitive analysis", rotate: 2 },
];

export function ApproachResearch() {
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
            eyebrow="Process"
            heading="Approach & Research"
            description="Eight-plus months of iterative field research with pastoralists and ranchers across Laikipia, Kajiado, and surrounding regions — user interviews, on-the-ground observation of livestock tagging and trading practices, and competitive analysis. These insights directly shaped features like M-Pesa payments, escrow protection, full traceability, and the seller dashboard's management tools."
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6" style={{ marginTop: 16 }}>
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.caption}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? `translateY(0) rotate(${photo.rotate}deg)` : "translateY(20px) rotate(0deg)",
                transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s`,
              }}
              className="group"
            >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: 8,
                  borderRadius: 10,
                  boxShadow: "0 10px 32px rgba(62,39,35,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "rotate(0deg) translateY(-4px)";
                  el.style.boxShadow = "0 16px 40px rgba(62,39,35,0.16)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "0 10px 32px rgba(62,39,35,0.1)";
                }}
              >
                <div style={{ borderRadius: 6, overflow: "hidden" }}>
                  <CaseStudyImage src={photo.src} label={photo.caption} aspectRatio="3/4" alt={photo.caption} />
                </div>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#3E2723",
                    opacity: 0.6,
                    textAlign: "center",
                    padding: "10px 4px 4px",
                    lineHeight: 1.4,
                  }}
                >
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}