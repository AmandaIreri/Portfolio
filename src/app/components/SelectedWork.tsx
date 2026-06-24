import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "./useScrollReveal";
import { CaseStudyImage } from "./case-study/CaseStudyImage";

const PROJECTS = [
  {
    id: "flockr",
    slug: "flockr",
    title: "Flockr",
    subtitle: "Livestock Marketplace & Management Platform",
    tagline: "Shipped MVP with payments & dashboards.",
    description:
      "End-to-end product ownership — from brand identity and Figma system to live Android and responsive web app with M-Pesa payments integration and farmer dashboards.",
    tags: ["Full Product Ownership", "Android", "Payments"],
    meta: { role: "Product Designer & Android Dev", timeline: "Jan 2025 — Present", status: "Shipped MVP" },
    accent: "#3E2723",
    accentLight: "#D4AF37",
    bg: "#F9F7F5",
    thumbSrc: "/case-studies/flockr/flockr-logo-larger.jpg",
    thumbAlt: "Flockr logo",
    thumbType: "logo" as const,
  },
  {
    id: "fintech",
    slug: "fintech",
    title: "Pension Platform Prototype",
    subtitle: "Interactive Prototype for a Licensed Kenyan Pension Fund Institution",
    tagline: "Board-approved, advanced to negotiations.",
    description:
      "Onboarding, account management, and transaction experiences designed to modernize access to pension services in Kenya — from first user interview to executive boardroom.",
    tags: ["Fintech UX", "Design System", "Mobile-First"],
    meta: { role: "UX/UI Designer", timeline: "2025", status: "Board Approved" },
    accent: "#006838",
    accentLight: "#4ADE80",
    bg: "#F4F2EF",
    thumbSrc: "/case-studies/pension/screen-dashboard-snipped.png",
    thumbAlt: "Pension platform dashboard screen",
    thumbType: "screen" as const,
  },
  {
    id: "tourism",
    slug: "tourism",
    title: "Qaribia Tourism Platform",
    subtitle: "Booking Flows, Payments & User Journeys",
    tagline: "Booking flows, payments & user journeys.",
    description:
      "End-to-end UX for an East African travel platform — seat selection, booking flows, payment integration, and itinerary management. Interactive hosted prototype available.",
    tags: ["Travel UX", "Motion", "Booking Flow"],
    meta: { role: "UX/UI Designer", timeline: "Feb 2026", status: "Prototype Ready" },
    accent: "#6C3483",
    accentLight: "#BB8FCE",
    bg: "#F8F5FA",
    thumbSrc: "/case-studies/qaribia/hero-landing.png",
    thumbAlt: "Qaribia home screen",
    thumbType: "screen" as const,
  },
];

export function SelectedWork() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      id="work"
      ref={ref}
      style={{
        backgroundColor: "#FFFFFF",
        padding: "96px 0",
        position: "relative",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginBottom: 64,
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#D4AF37",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Selected Work
          </p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
              color: "#1C1A18",
              letterSpacing: "-0.025em",
              lineHeight: 1.12,
              marginBottom: 16,
              maxWidth: 680,
            }}
          >
            Projects demonstrating end-to-end ownership and meticulous attention to detail
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 16,
              color: "#1C1A18",
              opacity: 0.6,
              maxWidth: 480,
              lineHeight: 1.65,
            }}
          >
            Three representative projects — full case studies available via links.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
            marginBottom: 52,
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>

        {/* View all button */}
        <div
          style={{
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <Link
            to="/work"
            style={{
              backgroundColor: "transparent",
              color: "#3E2723",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 6,
              padding: "14px 36px",
              border: "1.5px solid #3E2723",
              cursor: "pointer",
              letterSpacing: "0.01em",
              textDecoration: "none",
              display: "inline-block",
              transition: "background-color 0.2s ease, color 0.2s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#3E2723";
              el.style.color = "#F9F7F5";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#3E2723";
              el.style.transform = "translateY(0)";
            }}
          >
            View All Projects →
          </Link>
        </div>
      </div>

      <style>{`
        .sw-thumb-img { transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); }
        a:hover .sw-thumb-img { transform: scale(1.04); }
        a:hover .sw-cta { gap: 10px !important; }
      `}</style>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  visible: boolean;
}) {
  const isLogo = project.thumbType === "logo";

  return (
    <Link
      to={`/work/${project.slug}`}
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(28,26,24,0.06)",
        boxShadow: "0 2px 16px rgba(28,26,24,0.05)",
        backgroundColor: "#FFFFFF",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${0.1 + index * 0.12}s, transform 0.6s ease ${0.1 + index * 0.12}s, box-shadow 0.25s ease`,
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 12px 48px rgba(28,26,24,0.12)";
        el.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 2px 16px rgba(28,26,24,0.05)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Image thumbnail */}
      <div
        style={{
          backgroundColor: project.bg,
          height: isLogo ? 220 : 280,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {isLogo ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
            }}
          >
            <img
              src={project.thumbSrc}
              alt={project.thumbAlt}
              className="sw-thumb-img"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ) : (
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <CaseStudyImage
              src={project.thumbSrc}
              label={project.thumbAlt}
              aspectRatio="16/10"
              alt={project.thumbAlt}
              className="sw-thumb-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>
        )}

        {/* Status badge */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
            padding: "5px 12px",
            borderRadius: 100,
          }}
        >
          {project.meta.status}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "26px 28px 28px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: project.accentLight,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {project.tagline}
        </p>

        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "#1C1A18",
            letterSpacing: "-0.015em",
            lineHeight: 1.25,
            marginBottom: 6,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13,
            color: project.accent,
            fontWeight: 600,
            marginBottom: 14,
            opacity: 0.8,
          }}
        >
          {project.subtitle}
        </p>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14,
            color: "#1C1A18",
            opacity: 0.6,
            lineHeight: 1.65,
            marginBottom: 20,
            flexGrow: 1,
          }}
        >
          {project.description}
        </p>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 20px",
            marginBottom: 18,
            paddingBottom: 18,
            borderBottom: "1px solid rgba(28,26,24,0.06)",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(28,26,24,0.35)",
                marginBottom: 2,
              }}
            >
              Role
            </p>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 12.5,
                fontWeight: 600,
                color: "#1C1A18",
                opacity: 0.8,
              }}
            >
              {project.meta.role}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(28,26,24,0.35)",
                marginBottom: 2,
              }}
            >
              Timeline
            </p>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 12.5,
                fontWeight: 600,
                color: "#1C1A18",
                opacity: 0.8,
              }}
            >
              {project.meta.timeline}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 10.5,
                fontWeight: 600,
                color: project.accent,
                backgroundColor: `${project.accent}10`,
                padding: "5px 12px",
                borderRadius: 100,
                letterSpacing: "0.03em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <span
          className="sw-cta"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13.5,
            fontWeight: 700,
            color: project.accent,
            borderBottom: `1.5px solid ${project.accentLight}`,
            paddingBottom: 2,
            width: "fit-content",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            transition: "gap 0.2s ease",
          }}
        >
          View Case Study →
        </span>
      </div>
    </Link>
  );
}