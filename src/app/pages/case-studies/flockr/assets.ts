// All paths point into /public/case-studies/flockr/.
// Drop your exported files into that folder using exactly these filenames
// (any image format works — just keep the same base name, e.g. .jpg/.png both
// fine, the page will pick up whichever extension you actually saved).
//
// No code changes needed — once a file lands at the right path, it
// automatically replaces the "coming soon" placeholder on the page.

const BASE = "/case-studies/flockr";

export const flockrAssets = {
  hero: {
    // "Landing Page Web / Mobile" → the Marketplace side of the composite
    marketplaceWeb: `${BASE}/landing-page-web.png`,
    marketplaceMobile: `${BASE}/landing-page-mobile.png`,
    // "Seller Dashboard Web / Mobile"
    dashboardWeb: `${BASE}/seller-dashboard-web.png`,
    dashboardMobile: `${BASE}/seller-dashboard-mobile.png`,
    // Prototype recordings linked from the hero buttons
    dashboardVideo: `${BASE}/seller-dashboard-navigation.mp4`,
    marketplaceVideo: `${BASE}/marketplace-recording.mp4`,
  },
  research: {
    photo1: `${BASE}/research-photo-1.jpeg`,
    photo2: `${BASE}/research-photo-2.jpeg`,
    photo3: `${BASE}/research-photo-3.jpeg`,
    photo4: `${BASE}/research-photo-4.jpeg`,
  },
  brand: {
    logo: `${BASE}/flockr-logo.png`,
    banner: `${BASE}/banner.jpeg`,
    flowchart: `${BASE}/flowchart.png`,
  },
  screens: {
    dashboardOverview: `${BASE}/screen-seller-dashboard-overview.png`,
    myLivestock: `${BASE}/screen-my-livestock.png`,
    addLivestockForm: `${BASE}/screen-add-livestock-form.png`,
    marketplaceHome: `${BASE}/screen-marketplace-homepage.png`,
    listingDetail: `${BASE}/screen-listing-detail.png`,
    purchaseEscrow: `${BASE}/screen-purchase-escrow-flow.png`,
  },
  videos: {
    dashboardNavigation: `${BASE}/seller-dashboard-navigation.mp4`,
    checkoutMobile: `${BASE}/order-checkout-mobile.mp4`,
  },
} as const;
