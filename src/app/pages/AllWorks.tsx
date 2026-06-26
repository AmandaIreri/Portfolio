import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../components/useScrollReveal";
import { CaseStudyImage } from "../components/case-study/CaseStudyImage";

const PROJECTS = [
  {
    slug: "flockr",
    title: "Flockr",
    subtitle: "Livestock Marketplace & Management Platform",
    tagline: "Shipped MVP with payments & dashboards",
    description:
      "End-to-end product ownership — from brand identity and Figma system to live Android and responsive web app with M-Pesa payments integration and farmer dashboards.",
    tags: ["Full Product Ownership", "Android", "Payments", "M-Pesa"],
    meta: { role: "UX/UI Designer & Android Dev", timeline: "Jan 2025 — Present", status: "Shipped MVP" },
    accent: "#3E2723",
    accentLight: "#D4AF37",
    bg: "#F9F7F5",
    thumbSrc: "/case-studies/flockr/flockr-logo-larger.jpg",
    thumbAlt: "Flockr logo",
    thumbType: "logo" as const,
  },
  {
    slug: "fintech",
    title: "Pension Platform Prototype",
    subtitle: "Interactive Prototype for a National Pension Institution",
    tagline: "Board-approved, advanced to negotiations",
    description:
      "Onboarding, account management, and transaction experiences designed to modernize access to pension services in Kenya — from first user interview to executive boardroom.",
    tags: ["Fintech UX", "Design System", "Mobile-First", "Prototyping"],
    meta: { role: "UX/UI Designer", timeline: "2025", status: "Board Approved" },
    accent: "#006838",
    accentLight: "#4ADE80",
    bg: "#F4F2EF",
    thumbSrc: "/case-studies/pension/screen-dashboard-snipped.png",
    thumbAlt: "Pension platform onboarding screen",
    thumbType: "screen" as const,
  },
  {
    slug: "tourism",
    title: "Qaribia Tourism Platform",
    subtitle: "Booking Flows, Payments & User Journeys",
    tagline: "Booking flows, payments & user journeys",
    description:
      "End-to-end UX for an East African travel platform — seat selection, booking flows, payment integration, and itinerary management. Interactive hosted prototype available.",
    tags: ["Travel UX", "Motion", "Booking Flow", "Payments"],
    meta: { role: "UX/UI Designer", timeline: "Feb 2026", status: "Prototype Ready" },
    accent: "#6C3483",
    accentLight: "#BB8FCE",
    bg: "#F8F5FA",
    thumbSrc: "/case-studies/qaribia/hero-landing.png",
    thumbAlt: "Qaribia home screen",
    thumbType: "screen" as const,
  },
  {
    slug: "homabay-hris",
    title: "HRIS Mobile App",
    subtitle: "UI/UX Revamp for a Workforce Management",
    tagline: "Design complete — implementing in Android",
    description:
      "Revamping the mobile HR Information System for a civic institution. Transformed a dated interface into a modern, intuitive experience for attendance tracking, leave management, and staff productivity.",
    tags: ["UI Revamp", "Android XML", "Civic UX", "Design System"],
    meta: { role: "UI/UX Designer & Implementation", timeline: "Ongoing", status: "In Progress" },
    accent: "#0B1D2E",
    accentLight: "#7EC8E3",
    bg: "#F5F8FA",
    thumbSrc: "/case-studies/homabay-hris/screen-splash-cropped.png",
    thumbAlt: "HRIS Splash screen",
    thumbType: "screen" as const,
  },
];

export function AllWorks() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#FFFFFF",
        padding: "108px 0 96px",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginBottom: 64,
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(28,26,24,0.45)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 28,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#3E2723";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(28,26,24,0.45)";
            }}
          >
            ← Back to home
          </Link>

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
            Portfolio
          </p>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              color: "#1C1A18",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            All Projects
          </h1>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 16,
              color: "#1C1A18",
              opacity: 0.6,
              maxWidth: 520,
              lineHeight: 1.65,
            }}
          >
            Four case studies spanning fintech, agriculture, travel, and
            workforce-related flows — each demonstrating end-to-end design ownership.
          </p>
        </div>

        {/* Projects — 2x2 grid on desktop */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
          style={{ alignItems: "stretch" }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
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
        display: "block",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(28,26,24,0.06)",
        boxShadow: "0 2px 16px rgba(28,26,24,0.05)",
        backgroundColor: "#FFFFFF",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${0.1 + index * 0.1}s, transform 0.6s ease ${0.1 + index * 0.1}s, box-shadow 0.25s ease`,
        cursor: "pointer",
        height: "100%",
        flexDirection: "column",
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
        }}
      >
        {isLogo ? (
          /* Logo: contained, max size, no cropping */
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
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
              }}
              className="aw-thumb-img"
            />
          </div>
        ) : (
          /* Screenshot: fills area, nicely cropped from center */
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <CaseStudyImage
              src={project.thumbSrc}
              label={project.thumbAlt}
              aspectRatio="16/10"
              alt={project.thumbAlt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
              }}
              className="aw-thumb-img"
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
          className="aw-cta"
        >
          View Case Study →
        </span>
      </div>

      <style>{`
        .aw-thumb-img { transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); }
        a:hover .aw-thumb-img { transform: scale(1.04); }
        a:hover .aw-cta { gap: 10px !important; }
      `}</style>
    </Link>
  );
}