import { ReactNode, CSSProperties } from "react";

interface FrameProps {
  children: ReactNode;
  tilt?: number;
  scale?: number;
  style?: CSSProperties;
  className?: string;
}

export function PhoneFrame({ children, tilt = 0, scale = 1, style, className }: FrameProps) {
  return (
    <div
      className={className}
      style={{
        borderRadius: 30,
        padding: 9,
        backgroundColor: "#1C1A18",
        boxShadow: "0 28px 64px rgba(28,26,24,0.32), 0 6px 18px rgba(28,26,24,0.16)",
        transform: `perspective(1600px) rotateY(${tilt}deg) scale(${scale})`,
        transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease",
        ...style,
      }}
    >
      <div style={{ borderRadius: 21, overflow: "hidden", position: "relative", lineHeight: 0 }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 64,
            height: 16,
            backgroundColor: "#1C1A18",
            borderRadius: "0 0 10px 10px",
            zIndex: 2,
          }}
        />
        {children}
      </div>
    </div>
  );
}
