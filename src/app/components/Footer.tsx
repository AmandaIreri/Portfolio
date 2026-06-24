import { useNavigate, useLocation } from "react-router-dom";
import headshotImg from "../../imports/Headshot.jpeg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:nyawiramanda@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    if (location.pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#2A1C1A",
        borderTop: "1px solid rgba(212,175,55,0.15)",
        padding: "48px 0 32px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          {/* Logo + tagline */}
          <div className="flex items-center gap-4">
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(212,175,55,0.4)",
                flexShrink: 0,
              }}
            >
              <ImageWithFallback
                src={headshotImg}
                alt="Amanda Ireri"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p style={{ color: "#F9F7F5", fontWeight: 700, fontSize: 15, marginBottom: 2 }}>Amanda Ireri</p>
              <p style={{ color: "rgba(249,247,245,0.4)", fontSize: 12 }}>UX/UI Designer & Product Engineer · Nairobi, Kenya</p>
            </div>
          </div>

          {/* Nav links */}
          <nav>
            <ul style={{ display: "flex", gap: 28, listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(href)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(249,247,245,0.55)",
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      padding: 0,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#D4AF37"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(249,247,245,0.55)"; }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + back to top */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {SOCIAL.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                style={{
                  color: "rgba(249,247,245,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: "1px solid rgba(249,247,245,0.1)",
                  transition: "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#D4AF37";
                  el.style.borderColor = "rgba(212,175,55,0.4)";
                  el.style.backgroundColor = "rgba(212,175,55,0.08)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "rgba(249,247,245,0.5)";
                  el.style.borderColor = "rgba(249,247,245,0.1)";
                  el.style.backgroundColor = "transparent";
                }}
              >
                {icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                background: "none",
                border: "1px solid rgba(249,247,245,0.1)",
                color: "rgba(249,247,245,0.5)",
                width: 36,
                height: 36,
                borderRadius: 8,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.color = "#D4AF37";
                el.style.borderColor = "rgba(212,175,55,0.4)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.color = "rgba(249,247,245,0.5)";
                el.style.borderColor = "rgba(249,247,245,0.1)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5,12 12,5 19,12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Gold divider */}
        <div
          aria-hidden="true"
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2) 30%, rgba(212,175,55,0.2) 70%, transparent)",
            marginBottom: 24,
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p style={{ color: "rgba(249,247,245,0.3)", fontSize: 12 }}>
            © {new Date().getFullYear()} Amanda Ireri. All rights reserved.
          </p>
          <p style={{ color: "rgba(249,247,245,0.25)", fontSize: 11, letterSpacing: "0.05em" }}>
            NAIROBI · KENYA
          </p>
        </div>
      </div>
    </footer>
  );
}
