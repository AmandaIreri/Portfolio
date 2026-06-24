// All paths point into /public/case-studies/pension/.
// Drop your exported files into that folder using exactly these filenames
// (image extension can be .jpg or .png, just keep the base name the same).
// No code changes needed once a file lands at the right path.
//
// NOTE: screen-registration.png and screen-contribution-withdraw.png contain
// small body-copy mentions of the institution's real name, and any landing/
// splash screen will contain the real logo. Swap in your blurred/redacted
// versions before this goes live — the filenames below are the drop-in targets.

const BASE = "/case-studies/pension";

export const PENSION_GREEN = "#006838";

// Individual screen captures — reused across the Hero rotation and the
// Key Screens walkthrough so there's a single file to update per screen.
const registration = `${BASE}/screen-registration.png`;
const signIn = `${BASE}/screen-sign-in.png`;
const dashboardHome = `${BASE}/screen-dashboard-home.png`;
const contributionMake = `${BASE}/screen-contribution-make.png`;
const contributionWithdraw = `${BASE}/screen-contribution-withdraw.png`;
const savingsGoals = `${BASE}/screen-savings-goals.png`;

export const pensionAssets = {
  // Hero — three screens that auto-crossfade inside the phone mockup
  hero: {
    onboarding: registration,
    dashboard: dashboardHome,
    transaction: contributionMake,
  },
  // Key Screens — one or two representative screens per category
  screens: {
    registration,
    signIn,
    dashboardHome,
    contributionMake,
    contributionWithdraw,
    savingsGoals,
  },
  // Screen recording of the diaspora access flow, prototyped in Figma.
  // Export cropped tight to just the phone (device chrome baked in already,
  // so the player below doesn't add a second frame around it).
  video: {
    diasporaWalkthrough: `${BASE}/diaspora-flow-walkthrough.mp4`,
  },
} as const;