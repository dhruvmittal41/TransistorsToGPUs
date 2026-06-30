// Google Analytics Setup
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID

export const GA_MEASUREMENT_ID = "G-TLR428LQ68"; // TODO: Replace with your GA ID

// Initialize Google Analytics
export const initGA = () => {
  if (
    typeof window !== "undefined" &&
    GA_MEASUREMENT_ID &&
    GA_MEASUREMENT_ID.startsWith("G-")
  ) {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    // FIX: Use a function expression (const) instead of a block-scoped function declaration
    const gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };

    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });

    // Make gtag globally available
    (window as any).gtag = gtag;
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track article reads
export const trackArticleRead = (articleTitle: string, timeSpent: number) => {
  trackEvent("article_read", "engagement", articleTitle, timeSpent);
};

// Track navigation clicks
export const trackNavigation = (destination: string) => {
  trackEvent("navigation", "click", destination);
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}
