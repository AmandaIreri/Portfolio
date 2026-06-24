import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { BrowserFrame } from "../../../components/case-study/BrowserFrame";
import { CaseStudyImage } from "../../../components/case-study/CaseStudyImage";
import { CaseStudyVideo } from "../../../components/case-study/CaseStudyVideo";
import { PlayButtonOverlay } from "../../../components/case-study/PlayButtonOverlay";
import { qaribiaAssets, QARIBIA_GOLD, QARIBIA_MIDNIGHT, QARIBIA_LIVE_URL } from "./assets";
import type { VideoOrientation } from "../../../components/case-study/VideoLightbox";

interface CategoryScreen {
  src: string;
  label: string;
}

const CATEGORIES: { title: string; screens: CategoryScreen[]; points: string[] }[] = [
  {
    title: "Cinematic Landing Experience",
    screens: [{ src: qaribiaAssets.screens.landingHero, label: "Landing Hero" }],
    points: [
      "Full-bleed video hero with Ken Burns-style migration footage and a staggered, animated headline reveal.",
      "Hero stats (2M+ wildebeest, 58 UNESCO sites, 4.9★ rating) build instant credibility before the user scrolls.",
    ],
  },
  {
    title: "Destination Discovery",
    screens: [{ src: qaribiaAssets.screens.destinations, label: "Destinations Grid" }],
    points: [
      "A featured large card anchors three supporting cards, each tagged with a category badge — Most Popular, Iconic View, Luxury Pick, Coastal Gem.",
      "Hover reveals destination copy and per-person pricing without cluttering the resting state.",
    ],
  },
  {
    title: "Curated Experiences",
    screens: [{ src: qaribiaAssets.screens.experiences, label: "Curated Experiences" }],
    points: [
      "Hot-air balloon safaris, bush dinners, horseback rides, and photography expeditions presented as compelling cards over a full-bleed background.",
      "Each card carries its own price point — built to feel like an invitation, not a listing.",
    ],
  },
  {
    title: "Trip Planner & Booking Flow",
    screens: [
      { src: qaribiaAssets.screens.tripPlanner, label: "Trip Planner" },
      { src: qaribiaAssets.screens.flightBooking, label: "Flight Selection" },
    ],
    points: [
      "A persistent itinerary sidebar tracks flights, stays, and transfers with a running total as the user builds their trip.",
      "Integrated flight search with seat selection and a confirmation step close the loop — this isn't just a search bar, it's a full booking flow.",
    ],
  },
  {
    title: "Wildlife & Storytelling",
    screens: [{ src: qaribiaAssets.screens.wildlife, label: "Big Five Showcase" }],
    points: [
      "A dedicated Big Five wildlife showcase pairs full-bleed photography with confident, short copy to build emotional momentum toward booking.",
      "Traveller testimonials in a touch-friendly carousel reinforce trust right before the closing call to action.",
    ],
  },
];

interface KeyScreensProps {
  onPlayVideo: (src: string, label: string, orientation?: VideoOrientation) => void;
}

export function KeyScreens({ onPlayVideo }: KeyScreensProps) {
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
            eyebrow="Walkthrough"
            heading="Key Features & Highlights"
            accentColor={QARIBIA_GOLD}
            style={{ marginBottom: 48 }}
          />
        </div>

        {/* Alternating feature rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 64, marginBottom: 56 }}>
          {CATEGORIES.map((cat, i) => {
            const reversed = i % 2 === 1;
            const isPair = cat.screens.length > 1;
            return (
              <div
                key={cat.title}
                className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.55s ease ${0.1 + i * 0.08}s, transform 0.55s ease ${0.1 + i * 0.08}s`,
                }}
              >
                <div style={{ order: reversed ? 2 : 1 }}>
                  <div className={isPair ? "grid grid-cols-2 gap-4" : ""}>
                    {cat.screens.map(screen => (
                      <div key={screen.label} style={{ boxShadow: "0 16px 50px rgba(28,37,54,0.12)", borderRadius: 12 }}>
                        <BrowserFrame>
                          <CaseStudyImage src={screen.src} label={screen.label} aspectRatio="16/10" alt={screen.label} />
                        </BrowserFrame>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ order: reversed ? 1 : 2 }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: QARIBIA_GOLD,
                      backgroundColor: "rgba(200,150,62,0.09)",
                      padding: "5px 12px",
                      borderRadius: 100,
                      marginBottom: 14,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.35rem", color: "#1C1A18", marginBottom: 16, letterSpacing: "-0.015em" }}>
                    {cat.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {cat.points.map(point => (
                      <div key={point} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: QARIBIA_GOLD, marginTop: 7, flexShrink: 0 }} />
                        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#1C1A18", opacity: 0.7, lineHeight: 1.65 }}>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* In-motion video spotlight — real screen recording */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.55s ease 0.5s, transform 0.55s ease 0.5s",
            marginBottom: 56,
          }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center"
            style={{ backgroundColor: "#FFFFFF", borderRadius: 20, padding: 32 }}
          >
            <div
              className="cs-card"
              style={{ cursor: "pointer" }}
              onClick={() => onPlayVideo(qaribiaAssets.video.motionReel, "Qaribia — Motion Reel", "landscape")}
            >
              <div style={{ position: "relative", boxShadow: "0 16px 50px rgba(28,37,54,0.14)", borderRadius: 12, overflow: "hidden" }}>
                <BrowserFrame>
                  <div className="cs-frame-media">
                    <CaseStudyVideo src={qaribiaAssets.video.motionReel} label="Qaribia — Motion Reel" aspectRatio="16/10" autoPlay />
                  </div>
                </BrowserFrame>
                <PlayButtonOverlay size={48} />
              </div>
            </div>

            <div>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: QARIBIA_GOLD,
                  backgroundColor: "rgba(200,150,62,0.09)",
                  padding: "5px 12px",
                  borderRadius: 100,
                  marginBottom: 14,
                }}
              >
                In Motion
              </span>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#1C1A18", marginBottom: 16, letterSpacing: "-0.015em" }}>
                See the Scroll Choreography
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#1C1A18", opacity: 0.7, lineHeight: 1.65 }}>
                A real screen recording of the live prototype, walking
                through the landing experience and into the trip-planning
                flow — the scroll reveals, parallax, and state transitions
                that the static screens above can only hint at.
              </p>
            </div>
          </div>
        </div>

        {/* Prominent live prototype CTA — site-wide interactive gold */}
        <div
          style={{
            backgroundColor: QARIBIA_MIDNIGHT,
            borderRadius: 20,
            padding: "44px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 18,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.55s ease 0.6s, transform 0.55s ease 0.6s",
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#FFFFFF", letterSpacing: "-0.01em" }}>
            Fully Interactive Prototype
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", maxWidth: 460, lineHeight: 1.65 }}>
            Explore the motion and flows for yourself — built and deployed live, not just clickable frames in Figma.
          </p>
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
              boxShadow: "0 8px 28px rgba(212,175,55,0.3)",
            }}
          >
            Open qaribia.cspl-uat.com
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1C1A18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .cs-frame-media { transition: transform 0.45s cubic-bezier(0.16,1,0.3,1); }
        .cs-card:hover .cs-frame-media { transform: scale(1.02); }
      `}</style>
    </section>
  );
}