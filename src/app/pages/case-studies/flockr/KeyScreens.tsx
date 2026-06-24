import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { BrowserFrame } from "../../../components/case-study/BrowserFrame";
import { PhoneFrame } from "../../../components/case-study/PhoneFrame";
import { CaseStudyImage } from "../../../components/case-study/CaseStudyImage";
import { CaseStudyVideo } from "../../../components/case-study/CaseStudyVideo";
import { Annotation } from "../../../components/case-study/Annotation";
import { PlayButtonOverlay } from "../../../components/case-study/PlayButtonOverlay";
import { flockrAssets } from "./assets";
import type { VideoOrientation } from "../../../components/case-study/VideoLightbox";

interface ScreenItem {
  key: string;
  title: string;
  src: string;
  annotation?: { label: string; top?: string; left?: string; right?: string; bottom?: string };
}

const SCREENS: ScreenItem[] = [
  { key: "dashboardOverview", title: "Seller Dashboard — Overview", src: flockrAssets.screens.dashboardOverview, annotation: { label: "Live herd value chart", top: "12%", left: "8%" } },
  { key: "myLivestock", title: "My Livestock — Management", src: flockrAssets.screens.myLivestock, annotation: { label: "Health & vaccination status", top: "12%", right: "8%" } },
  { key: "addLivestock", title: "Add Livestock — Form Flow", src: flockrAssets.screens.addLivestockForm, annotation: { label: "Smart form validation", bottom: "10%", left: "8%" } },
  { key: "marketplaceHome", title: "Marketplace — Homepage", src: flockrAssets.screens.marketplaceHome, annotation: { label: "Verified seller badge", top: "12%", left: "8%" } },
  { key: "listingDetail", title: "Listing Detail", src: flockrAssets.screens.listingDetail, annotation: { label: "Traceability record", bottom: "10%", right: "8%" } },
  { key: "purchaseEscrow", title: "Purchase & Escrow Flow", src: flockrAssets.screens.purchaseEscrow, annotation: { label: "Escrow-protected payment", top: "12%", right: "8%" } },
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
            heading="Key Screens & Interactions"
            description="The six screens that carry the most design weight."
            style={{ marginBottom: 36 }}
          />
        </div>

        {/* Photo gallery — clean, even 3x2 grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ alignItems: "start", marginBottom: 64 }}
        >
          {SCREENS.map((screen, i) => (
            <div
              key={screen.key}
              className="cs-card"
              style={{
                position: "relative",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${0.06 + i * 0.05}s, transform 0.5s ease ${0.06 + i * 0.05}s`,
              }}
            >
              <BrowserFrame>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div className="cs-frame-media">
                    <CaseStudyImage src={screen.src} label={screen.title} aspectRatio="16/10" alt={screen.title} />
                  </div>

                  {screen.annotation && (
                    <Annotation
                      label={screen.annotation.label}
                      top={screen.annotation.top}
                      left={screen.annotation.left}
                      right={screen.annotation.right}
                      bottom={screen.annotation.bottom}
                    />
                  )}

                  <div
                    className="cs-caption"
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: "28px 14px 12px",
                      background: "linear-gradient(0deg, rgba(28,26,24,0.82) 0%, transparent 100%)",
                    }}
                  >
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12.5, fontWeight: 700, color: "#F9F7F5" }}>
                      {screen.title}
                    </p>
                  </div>
                </div>
              </BrowserFrame>
            </div>
          ))}
        </div>

        {/* Videos — grouped together, clearly its own moment */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
            paddingTop: 40,
            borderTop: "1px solid rgba(62,39,35,0.08)",
          }}
        >
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#D4AF37", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>
            See It In Motion
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-7 items-end">
            {/* Desktop: dashboard navigation */}
            <div
              className="cs-card"
              style={{ cursor: "pointer" }}
              onClick={() => onPlayVideo(flockrAssets.videos.dashboardNavigation, "Seller Dashboard Navigation", "landscape")}
            >
              <BrowserFrame>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div className="cs-frame-media">
                    <CaseStudyVideo src={flockrAssets.videos.dashboardNavigation} label="Seller Dashboard Navigation" aspectRatio="16/10" autoPlay />
                  </div>
                  <PlayButtonOverlay size={50} />
                </div>
              </BrowserFrame>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "#1C1A18", opacity: 0.6, marginTop: 12 }}>
                Seller Dashboard Navigation
              </p>
            </div>

            {/* Mobile: order & checkout */}
            <div
              className="cs-card"
              style={{ cursor: "pointer", maxWidth: 220, margin: "0 auto" }}
              onClick={() => onPlayVideo(flockrAssets.videos.checkoutMobile, "Order and Checkout — Mobile Version", "portrait")}
            >
              <PhoneFrame>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div className="cs-frame-media">
                    <CaseStudyVideo src={flockrAssets.videos.checkoutMobile} label="Order & Checkout — Mobile" aspectRatio="9/19" autoPlay />
                  </div>
                  <PlayButtonOverlay size={40} />
                </div>
              </PhoneFrame>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "#1C1A18", opacity: 0.6, marginTop: 12, textAlign: "center" }}>
                Order &amp; Checkout — Mobile
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cs-caption { opacity: 0; transform: translateY(6px); transition: opacity 0.25s ease, transform 0.25s ease; }
        .cs-card:hover .cs-caption { opacity: 1; transform: translateY(0); }
        .cs-frame-media { transition: transform 0.45s cubic-bezier(0.16,1,0.3,1); }
        .cs-card:hover .cs-frame-media { transform: scale(1.045); }
      `}</style>
    </section>
  );
}