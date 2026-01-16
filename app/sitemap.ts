import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { menuData } from "@/data/menu";
import { branches } from "@/data/branches";

/**
 * Sitemap Generator
 * 
 * Automatically generates sitemap.xml for search engines.
 * Includes all pages, menu categories, and branch pages.
 * 
 * Access at: https://emiratescuisine.pk/sitemap.xml
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/branches`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Menu category pages
  const menuCategoryPages = menuData.categories.map((category) => ({
    url: `${baseUrl}/menu#${category.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Branch pages
  const branchPages = branches.map((branch) => ({
    url: `${baseUrl}/branches#${branch.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...menuCategoryPages, ...branchPages];
}
