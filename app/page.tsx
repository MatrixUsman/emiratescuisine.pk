import type { Metadata } from "next";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import StructuredData from "@/components/StructuredData";
import { siteConfig, generateKeywords, generateRestaurantSchema, generateBreadcrumbSchema } from "@/lib/seo";

/**
 * Homepage
 * 
 * Main landing page with:
 * - Hero section
 * - Featured menu items
 * - Restaurant information
 * - SEO-optimized content
 * 
 * This page is optimized for:
 * - "restaurant Sahiwal"
 * - "Arabic food Pakistan"
 * - "best restaurant Sahiwal"
 * - "Emirates Cuisine"
 * - Food-related searches
 */

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: generateKeywords([
    "best restaurant",
    "top restaurant",
    "authentic food",
    "halal restaurant",
    "family restaurant",
  ]),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Emirates Cuisine - Authentic Arabic & Pakistani Food",
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <StructuredData 
        restaurantSchema={JSON.stringify(generateRestaurantSchema())}
        breadcrumbSchema={JSON.stringify(generateBreadcrumbSchema([
          { name: "Home", url: "/" },
        ]))}
      />
      <Hero />
      <MenuSection />
    </>
  );
}
