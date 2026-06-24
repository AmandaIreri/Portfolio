import { Link } from "react-router-dom";

interface ComingSoonProps {
  title: string;
  subtitle: string;
  accentColor: string;
}

export function CaseStudyComingSoon({ title, subtitle, accentColor }: ComingSoonProps) {
  return (
    <main>
      <section
        style={{
          backgroundColor: "#3E2723",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          padding: "140px 0 80px",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <Link
            to="/#work"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(249,247,245,0.6)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 40,
            }}
          >
            ← Back to all work
          </Link>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: accentColor,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Case Study
          </p>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              color: "#F9F7F5",
              letterSpacing: "-0.025em",
              marginBottom: 16,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15,
              color: "rgba(249,247,245,0.55)",
              lineHeight: 1.7,
            }}
          >
            {subtitle} — full write-up coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
