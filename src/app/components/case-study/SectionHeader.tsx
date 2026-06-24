import { CSSProperties, ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  accentColor?: string;
  style?: CSSProperties;
}

export function SectionHeader({ eyebrow, heading, description, align = "left", light = false, accentColor = "#D4AF37", style }: SectionHeaderProps) {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: 44,
        maxWidth: align === "center" ? 640 : 700,
        marginLeft: align === "center" ? "auto" : undefined,
        marginRight: align === "center" ? "auto" : undefined,
        ...style,
      }}
    >
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: accentColor,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
          color: light ? "#F9F7F5" : "#1C1A18",
          letterSpacing: "-0.025em",
          lineHeight: 1.12,
          marginBottom: description ? 16 : 0,
        }}
      >
        {heading}
      </h2>
      {description && (
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 16,
            color: light ? "rgba(249,247,245,0.65)" : "#1C1A18",
            opacity: light ? 1 : 0.65,
            lineHeight: 1.75,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
