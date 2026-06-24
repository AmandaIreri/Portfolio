import { ReactNode, CSSProperties } from "react";

interface FrameProps {
  children: ReactNode;
  tilt?: number;
  scale?: number;
  style?: CSSProperties;
  className?: string;
}

export function BrowserFrame({ children, tilt = 0, scale = 1, style, className }: FrameProps) {
  return (
    <div
      className={className}
      style={{
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#1C1A18",
        boxShadow: "0 28px 64px rgba(28,26,24,0.3), 0 6px 18px rgba(28,26,24,0.14)",
        transform: `perspective(1600px) rotateY(${tilt}deg) scale(${scale})`,
        transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "9px 12px",
          backgroundColor: "#2A2724",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E5594F" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E8B339" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#4CAF50" }} />
        <div style={{ flex: 1, marginLeft: 8, height: 14, borderRadius: 4, backgroundColor: "rgba(255,255,255,0.06)" }} />
      </div>
      <div style={{ position: "relative", lineHeight: 0 }}>{children}</div>
    </div>
  );
}
