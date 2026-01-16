"use client";

import Script from "next/script";

/**
 * Google Analytics Component
 * 
 * Tracks page views and user interactions for analytics.
 * Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID.
 * 
 * To get your GA4 Measurement ID:
 * 1. Go to https://analytics.google.com
 * 2. Create a new property or select existing one
 * 3. Go to Admin > Data Streams
 * 4. Copy the Measurement ID (format: G-XXXXXXXXXX)
 * 
 * For production, set NEXT_PUBLIC_GA_ID environment variable in Vercel/Cloudflare
 */

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    return null; // Don't load GA if ID is not set
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
