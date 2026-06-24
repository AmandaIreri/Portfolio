import { useState, VideoHTMLAttributes, CSSProperties } from "react";

interface CaseStudyVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, "style"> {
  src: string;
  label?: string;
  aspectRatio?: string;
  style?: CSSProperties;
}

export function CaseStudyVideo({
  src,
  label,
  aspectRatio = "16/10",
  style,
  ...rest
}: CaseStudyVideoProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        style={{
          aspectRatio,
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          border: "1.5px dashed rgba(212,175,55,0.35)",
          backgroundColor: "rgba(62,39,35,0.025)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: 20,
          textAlign: "center",
          boxSizing: "border-box",
          ...style,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9.5" />
          <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="#D4AF37" stroke="none" />
        </svg>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, fontWeight: 600, color: "#3E2723", opacity: 0.55, lineHeight: 1.45, maxWidth: 180 }}>
          {label || "Video coming soon"}
        </span>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 9, color: "#3E2723", opacity: 0.32, wordBreak: "break-all" }}>
          {src.split("/").pop()}
        </span>
      </div>
    );
  }

  return (
    <video
      src={src}
      onError={() => setError(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", aspectRatio, ...style }}
      playsInline
      muted
      loop
      {...rest}
    />
  );
}
