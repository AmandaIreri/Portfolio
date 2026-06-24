// NextProjects for the HOMA BAY COUNTY HRIS case study
// Shows: Pension Platform + Flockr

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../../components/useScrollReveal";

const RELATED = [
  {
    title: "Pension Platform Prototype",
    subtitle: "Interactive Prototype for a Licensed Kenyan Pension Fund Administrator",
    href: "/work/fintech",
    thumbSrc: "/case-studies/pension/screen-dashboard-snipped.png",
    thumbType: "screen" as const,
    bg: "#F4F2EF",
  },
  {
    title: "Flockr",
    subtitle: "Livestock Marketplace & Management Platform",
    href: "/work/flockr",
    thumbSrc: "/case-studies/flockr/flockr-logo-larger.jpg",
    thumbType: "logo" as const,
    bg: "#F9F7F5",
  },
];

export function NextProjects() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section ref={ref} style={{ backgroundColor: "#F5F8FA", padding: "80px 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginBottom: 36,
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#7EC8E3",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Keep Exploring
          </p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "#0B1D2E",
              letterSpacing: "-0.025em",
            }}
          >
            More Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {RELATED.map((project, i) => (
            <Link
              key={project.href}
              to={project.href}
              style={{
                textDecoration: "none",
                display: "block",
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(11,29,46,0.06)",
                boxShadow: "0 2px 16px rgba(11,29,46,0.04)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.55s ease ${0.1 + i * 0.1}s, transform 0.55s ease ${0.1 + i * 0.1}s, box-shadow 0.25s ease`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.boxShadow = "0 8px 32px rgba(11,29,46,0.1)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.boxShadow = "0 2px 16px rgba(11,29,46,0.04)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  backgroundColor: project.bg,
                  height: project.thumbType === "logo" ? 180 : 200,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {project.thumbType === "logo" ? (
                  <img
                    src={project.thumbSrc}
                    alt={project.title}
                    className="np-h-thumb"
                    style={{
                      maxWidth: "70%",
                      maxHeight: "70%",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <img
                    src={project.thumbSrc}
                    alt={project.title}
                    className="np-h-thumb"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "20px 24px", backgroundColor: "#FFFFFF" }}>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#0B1D2E",
                    marginBottom: 6,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12.5,
                    color: "#0B1D2E",
                    opacity: 0.55,
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  {project.subtitle}
                </p>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0B1D2E",
                    borderBottom: "1.5px solid #7EC8E3",
                    paddingBottom: 2,
                  }}
                >
                  View Case Study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .np-h-thumb { transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); }
        a:hover .np-h-thumb { transform: scale(1.04); }
      `}</style>
    </section>
  );
}