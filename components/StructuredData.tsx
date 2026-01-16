"use client";

/**
 * Structured Data Component (JSON-LD)
 * 
 * Adds structured data (schema.org) to pages for better search engine understanding.
 * This helps Google and other search engines display rich snippets, knowledge panels,
 * and improve search rankings.
 * 
 * Types of structured data included:
 * - Restaurant schema
 * - Menu items schema
 * - Breadcrumb schema
 * - LocalBusiness schema
 */

interface StructuredDataProps {
  restaurantSchema?: string;
  breadcrumbSchema?: string;
  menuItems?: string;
}

export default function StructuredData({ restaurantSchema, breadcrumbSchema, menuItems }: StructuredDataProps) {
  return (
    <>
      {restaurantSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: restaurantSchema }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
      )}
      {menuItems && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: menuItems }}
        />
      )}
    </>
  );
}
