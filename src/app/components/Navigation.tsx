import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import headshotImg from "../../imports/Headshot.jpeg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    setMobileOpen(false);
    if (location.pathname === "/") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: scrolled ? "rgba(62,39,35,0.97)" : "#3E2723",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(62,39,35,0.35)" : "none",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("Home", "#home")}
            className="flex items-center gap-3 group"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <div
              className="overflow-hidden flex-shrink-0"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "2px solid #D4AF37",
                transition: "border-color 0.2s ease",
              }}
            >
              <ImageWithFallback
                src={headshotImg}
                alt="Amanda Ireri"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span
              style={{ color: "#F9F7F5", letterSpacing: "0.02em" }}
              className="hidden sm:block text-sm font-semibold"
            >
              Amanda Ireri
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(label, href)}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: activeLink === label ? "#D4AF37" : "rgba(249,247,245,0.75)",
                    background: "none",
                    border: "none",
                    borderBottom: activeLink === label ? "1.5px solid #D4AF37" : "1.5px solid transparent",
                    cursor: "pointer",
                    paddingBottom: 2,
                    transition: "color 0.2s ease, border-color 0.2s ease",
                  }}
                  className="text-sm font-medium tracking-wide hover:text-[#D4AF37]"
                  onMouseEnter={e => {
                    if (activeLink !== label) (e.currentTarget as HTMLButtonElement).style.color = "#D4AF37";
                  }}
                  onMouseLeave={e => {
                    if (activeLink !== label) (e.currentTarget as HTMLButtonElement).style.color = "rgba(249,247,245,0.75)";
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:nyawiramanda@gmail.com"
            style={{
              backgroundColor: "#D4AF37",
              color: "#1C1A18",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              borderRadius: 6,
              fontWeight: 600,
              letterSpacing: "0.01em",
              transition: "background-color 0.2s ease, transform 0.15s ease",
            }}
            className="hidden md:inline-flex items-center px-4 py-2 text-sm"
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C9A227"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#D4AF37"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            Hire me
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            style={{ background: "none", border: "none", cursor: "pointer" }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  backgroundColor: i === 1 && mobileOpen ? "transparent" : "#D4AF37",
                  borderRadius: 2,
                  transition: "transform 0.25s ease, opacity 0.25s ease, background-color 0.25s ease",
                  transform: mobileOpen
                    ? i === 0 ? "rotate(45deg) translate(3px, 3px)" : i === 2 ? "rotate(-45deg) translate(3px, -3px)" : "none"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            maxHeight: mobileOpen ? 300 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            backgroundColor: "#3E2723",
            borderTop: mobileOpen ? "1px solid rgba(212,175,55,0.2)" : "none",
          }}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(label, href)}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: activeLink === label ? "#D4AF37" : "rgba(249,247,245,0.85)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 16,
                    fontWeight: activeLink === label ? 600 : 400,
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
