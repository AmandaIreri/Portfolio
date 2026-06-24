export function PlayButtonOverlay({ size = 56 }: { size?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, rgba(28,26,24,0.05) 0%, rgba(28,26,24,0.32) 100%)",
        zIndex: 3,
      }}
    >
      {/* small persistent badge so it reads as video even at a glance */}
      <span
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: "#F9F7F5",
          backgroundColor: "rgba(28,26,24,0.55)",
          padding: "4px 9px 4px 7px",
          borderRadius: 100,
        }}
      >
        <svg width="8" height="8" viewBox="0 0 24 24" fill="#D4AF37"><path d="M8 5v14l11-7z" /></svg>
        VIDEO
      </span>

      <div style={{ position: "relative", width: size, height: size }}>
        {/* pulsing ring */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            backgroundColor: "rgba(249,247,245,0.5)",
            animation: "csPlayPulse 2.2s ease-out infinite",
          }}
        />
        <div
          style={{
            position: "relative",
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: "rgba(249,247,245,0.97)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(0,0,0,0.32)",
          }}
        >
          <svg width={size * 0.34} height={size * 0.34} viewBox="0 0 24 24" fill="#1C1A18">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes csPlayPulse {
          0% { transform: scale(1); opacity: 0.55; }
          70% { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
      `}</style>
    </div>
  );
}