import type { Metadata } from "next";
import { siteConfig, generateKeywords } from "@/lib/seo";

/**
 * Layout for Branches Page
 * Provides SEO metadata for location-based searches
 */

export const metadata: Metadata = {
  title: "Our Locations - Sahiwal & Okara Branches | Emirates Cuisine",
  description:
    "Visit Emirates Cuisine at our branches in Sahiwal (Sattar Complex Five Ways Chowk) and Okara (GT Road). Find directions, addresses, and contact information. Best Arabic and Pakistani restaurant in Sahiwal and Okara.",
  keywords: generateKeywords([
    "location",
    "address",
    "directions",
    "Sahiwal location",
    "Okara location",
    "restaurant location",
    "where to find",
    "contact",
    "visit us",
    "near me",
  ]),
  openGraph: {
    title: "Our Locations | Emirates Cuisine",
    description:
      "Visit Emirates Cuisine at our branches in Sahiwal and Okara. Find directions and addresses.",
    url: `${siteConfig.url}/branches`,
  },
  alternates: {
    canonical: `${siteConfig.url}/branches`,
  },
};

export default function BranchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
