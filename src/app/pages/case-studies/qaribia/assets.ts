// All paths point into /public/case-studies/qaribia/.
// Drop your exports into that folder using exactly these filenames — see
// the asset checklist in chat for what to capture and from where.

const BASE = "/case-studies/qaribia";

// Project-identity colors only — pulled from the live prototype's style.css.
// These drive THIS case study's backgrounds, internal section eyebrows, and
// icons. They do not replace the site-wide interactive gold (#D4AF37),
// which stays hardcoded inline wherever it's used, per the portfolio's
// established convention (nav, CTAs, the "Case Study" label, video play
// affordances — see PORTFOLIO-CONTEXT.md).
export const QARIBIA_GOLD = "#C8963E";
export const QARIBIA_GOLD_LIGHT = "#E8B96A";
export const QARIBIA_AMBER = "#E07B39";
export const QARIBIA_MIDNIGHT = "#0D1B2A";
export const QARIBIA_CHARCOAL = "#1C2536";

// The live, fully interactive prototype.
export const QARIBIA_LIVE_URL = "https://qaribia.cspl-uat.com/";

export const qaribiaAssets = {
  // Clean landscape/wildlife photo for the full-bleed hero background —
  // NOT a screenshot of the site, no UI or text baked in. This is what
  // sits behind the case study's own headline, mirroring the real
  // product's own hero treatment (see PORTFOLIO-CONTEXT.md note on
  // grounding each hero in its subject).
  heroBackground: `${BASE}/hero-background.jpg`,

  screens: {
    landingHero: `${BASE}/hero-landing.png`, // full screenshot WITH UI — used in Key Features, not the case-study Hero
    destinations: `${BASE}/screen-destinations.png`,
    experiences: `${BASE}/screen-experiences.png`,
    wildlife: `${BASE}/screen-wildlife.png`,
    tripPlanner: `${BASE}/screen-trip-planner.png`,
    flightBooking: `${BASE}/screen-flight-booking.png`,
    confirmation: `${BASE}/screen-confirmation.png`,
  },

  // Real screen recording — trimmed to ~24s, no device frame needed since
  // it's already a clean browser-viewport capture.
  video: {
    motionReel: `${BASE}/motion-reel.mp4`,
  },
} as const;