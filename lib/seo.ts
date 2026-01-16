/**
 * SEO Configuration and Utilities
 * 
 * This file contains SEO-related constants and helper functions for generating
 * metadata, structured data, and optimizing search engine visibility.
 * 
 * Used by: All pages for SEO optimization, Google Search Console, and social media sharing
 */

export const siteConfig = {
  name: "Emirates Cuisine",
  title: "Emirates Cuisine - Authentic Arabic & Pakistani Food in Sahiwal, Pakistan",
  description:
    "Experience authentic Arabic cuisine in Sahiwal. Best restaurant for Mandi, Karahi, BBQ, Chinese, Continental, and Desi food. Visit our branches in Sahiwal and Okara. Fresh ingredients, traditional recipes, warm hospitality.",
  url: "https://emiratescuisine.pk",
  ogImage: "/og-image.jpg",
  twitterHandle: "@emiratescuisine",
  locale: "en_US",
  type: "restaurant",
};

/**
 * Generate comprehensive keywords for SEO
 * Includes food items, location-based keywords, and cuisine types
 */
export const generateKeywords = (additionalKeywords: string[] = []) => {
  const baseKeywords = [
    // Restaurant name variations
    "Emirates Cuisine",
    "Emirates Cuisine Sahiwal",
    "Emirates Cuisine Okara",
    "Emirates Cuisine Pakistan",
    
    // Location-based
    "restaurant Sahiwal",
    "restaurant Okara",
    "best restaurant Sahiwal",
    "Arabic restaurant Pakistan",
    "Pakistani restaurant Sahiwal",
    "food delivery Sahiwal",
    
    // Cuisine types
    "Arabic food",
    "Pakistani food",
    "Desi food",
    "Chinese food",
    "BBQ restaurant",
    "Shinwari food",
    "Continental food",
    
    // Popular dishes
    "Chicken Mandi",
    "Mutton Mandi",
    "Chicken Karahi",
    "Beef Karahi",
    "Mutton Karahi",
    "BBQ Sahiwal",
    "Chicken Biryani",
    "Mutton Biryani",
    "Shawarma",
    "Kebab",
    "Tikka",
    "Handi",
    "Steak",
    "Pasta",
    "Chowmein",
    
    // Service keywords
    "halal food",
    "fresh food",
    "authentic cuisine",
    "traditional food",
    "family restaurant",
  ];

  return [...baseKeywords, ...additionalKeywords].join(", ");
};

/**
 * Generate structured data for restaurant (JSON-LD)
 * Includes both Restaurant and LocalBusiness schema for maximum SEO benefit
 */
export const generateRestaurantSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "FoodEstablishment", "LocalBusiness"],
    name: "Emirates Cuisine",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/logo.png`,
    servesCuisine: [
      "Arabic",
      "Pakistani",
      "Desi",
      "Chinese",
      "Continental",
      "BBQ",
      "Shinwari",
    ],
    priceRange: "$$",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Sattar Complex Five Ways Chowk",
        addressLocality: "Sahiwal",
        addressRegion: "Punjab",
        postalCode: "57000",
        addressCountry: "PK",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "GT Road Beside Punjab College & Abdullah Hosp",
        addressLocality: "Okara",
        addressRegion: "Punjab",
        postalCode: "56300",
        addressCountry: "PK",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Sahiwal",
      },
      {
        "@type": "City",
        name: "Okara",
      },
    ],
    hasMenu: `${siteConfig.url}/menu`,
    menu: `${siteConfig.url}/menu`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "100",
    },
  };
};

/**
 * Generate structured data for menu items (JSON-LD)
 */
export const generateMenuItemSchema = (item: {
  name: string;
  description?: string;
  price?: number;
  category: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: item.name,
    description: item.description || `${item.name} at Emirates Cuisine`,
    menuAddOn: {
      "@type": "MenuSection",
      name: item.category,
    },
    offers: item.price
      ? {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "PKR",
        }
      : undefined,
  };
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
};
