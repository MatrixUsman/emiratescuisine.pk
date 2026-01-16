import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

/**
 * Robots.txt Generator
 * 
 * Tells search engines which pages to crawl and index.
 * Allows all pages for maximum SEO visibility.
 * 
 * Access at: https://emiratescuisine.pk/robots.txt
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
