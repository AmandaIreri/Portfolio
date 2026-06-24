// Drop your exported files into that folder using exactly these filenames
// (any image format works — just keep the same base name, e.g. .jpg/.png both
// fine, the page will pick up whichever extension you actually saved).
//
// No code changes needed — once a file lands at the right path, it
// automatically replaces the "coming soon" placeholder on the page.

const BASE = "/case-studies/homabay-hris";

export const homabayAssets = {
  hero: {
    combinedScreens: `${BASE}/homabayhr-mobile-screens.png`,
  },
  beforeAfter: {
    signIn: { before: `${BASE}/signin-before.png`, after: `${BASE}/signin-after.png` },
    homepage: { before: `${BASE}/homepage-before.jpeg`, after: `${BASE}/homepage-after.png` },
    attendance: { before: `${BASE}/attendance-before.jpeg`, after: `${BASE}/attendance-after.png` },
    leave: { before: `${BASE}/leave-before.jpeg`, after: `${BASE}/leave-after.png` },
  },
  process: {
    codeReview: `${BASE}/process-codebase-review.png`,
    figmaSystem: `${BASE}/process-figma-system.png`,
    implementation: `${BASE}/process-implementation.png`,
  },
  screens: {
    onboarding: `${BASE}/screen-onboarding.png`,
    dashboard: `${BASE}/screen-dashboard.png`,
    attendanceClock: `${BASE}/screen-attendance-clock.png`,
    attendanceRecords: `${BASE}/screen-attendance-records.png`,
    leaveApply: `${BASE}/screen-leave-apply.png`,
    leaveHistory: `${BASE}/screen-leave-history.png`,
    profile: `${BASE}/screen-profile.png`,
  },
} as const;