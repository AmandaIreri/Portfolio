import { useEffect } from "react";
import { CaseStudyVideo } from "./CaseStudyVideo";

export type VideoOrientation = "landscape" | "portrait";

interface VideoLightboxProps {
  src: string | null;
  label?: string;
  orientation?: VideoOrientation;
  onClose: () => void;
}

export function VideoLightbox({ src, label, orientation = "landscape", onClose }: VideoLightboxProps) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [src, onClose]);

  if (!src) return null;

  const isPortrait = orientation === "portrait";

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        backgroundColor: "rgba(28,26,24,0.88)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "csLightboxFade 0.2s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: isPortrait ? 380 : 980,
          width: "100%",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          style={{
            position: "absolute",
            top: -48,
            right: 0,
            background: "none",
            border: "1.5px solid rgba(249,247,245,0.3)",
            color: "#F9F7F5",
            width: 36,
            height: 36,
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            transition: "border-color 0.2s ease, background-color 0.2s ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF37"; (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(212,175,55,0.12)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(249,247,245,0.3)"; (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
        >
          ✕
        </button>
        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 32px 90px rgba(0,0,0,0.5)",
            backgroundColor: "#000",
          }}
        >
          <CaseStudyVideo
            key={src}
            src={src}
            label={label}
            aspectRatio={isPortrait ? "9/16" : "16/9"}
            autoPlay
            controls
            muted={false}
            loop={false}
            style={{ objectFit: "contain", backgroundColor: "#000" }}
          />
        </div>
        {label && (
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(249,247,245,0.6)", marginTop: 14, textAlign: "center" }}>
            {label}
          </p>
        )}
      </div>
      <style>{`@keyframes csLightboxFade { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}