import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { ProofStrip } from "../components/ProofStrip";
import { SelectedWork } from "../components/SelectedWork";
import { HowIWork } from "../components/HowIWork";
import { AboutTeaser } from "../components/AboutTeaser";
import { ContactCTA } from "../components/ContactCTA";

export function Home() {
  const { hash } = useLocation();

  // Supports links like "/#work" coming from other pages (e.g. Navigation
  // or Footer clicked while on a case study page navigates here first,
  // then we scroll to the right section once it's mounted).
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // Small delay so layout/images have settled before measuring position.
      requestAnimationFrame(() => {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      });
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <HowIWork />
      <AboutTeaser />
      <ContactCTA />
    </main>
  );
}
