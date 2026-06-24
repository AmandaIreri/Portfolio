import { CSSProperties } from "react";

interface AnnotationProps {
  label: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  style?: CSSProperties;
}

export function Annotation({ label, top, left, right, bottom, style }: AnnotationProps) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 10.5,
        fontWeight: 600,
        color: "#1C1A18",
        backgroundColor: "rgba(249,247,245,0.96)",
        border: "1px solid rgba(212,175,55,0.4)",
        padding: "5px 10px 5px 8px",
        borderRadius: 100,
        boxShadow: "0 6px 18px rgba(28,26,24,0.18)",
        whiteSpace: "nowrap",
        zIndex: 3,
        ...style,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#D4AF37", flexShrink: 0 }} />
      {label}
    </div>
  );
}
