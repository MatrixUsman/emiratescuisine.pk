import type { Metadata } from "next";
import MenuSection from "@/components/MenuSection";
import StructuredData from "@/components/StructuredData";
import { siteConfig, generateKeywords, generateMenuItemSchema } from "@/lib/seo";
import { menuData } from "@/data/menu";

/**
 * Menu Page with Enhanced SEO
 * 
 * This page displays all menu items with:
 * - Category-based filtering
 * - SEO-optimized metadata
 * - Structured data for each menu item
 * - Keywords targeting food-related searches
 */

export const metadata: Metadata = {
  title: "Menu - Complete Food Menu | Emirates Cuisine Sahiwal",
  description:
    "Browse our complete menu with prices. Arabic Mandi, Karahi, BBQ, Chinese, Continental, Desi food, Biryani, Shawarma, Kebab, Tikka, Handi, Steaks, Pasta, and more. Available in Sahiwal and Okara.",
  keywords: generateKeywords([
    "menu",
    "food menu",
    "restaurant menu",
    "menu with prices",
    "Arabic menu",
    "Pakistani menu",
    "BBQ menu",
    "Chinese menu",
    "food prices",
    "restaurant prices",
  ]),
  openGraph: {
    title: "Complete Menu | Emirates Cuisine",
    description:
      "Browse our complete menu featuring Arabic, Continental, Desi, Chinese, BBQ, and Shinwari dishes with prices.",
    url: `${siteConfig.url}/menu`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Menu | Emirates Cuisine",
    description:
      "Browse our complete menu featuring Arabic, Continental, Desi, Chinese, BBQ, and Shinwari dishes.",
  },
  alternates: {
    canonical: `${siteConfig.url}/menu`,
  },
};

export default function MenuPage() {
  // Generate structured data for all menu items
  const menuItemSchemas = menuData.categories.flatMap((category) =>
    category.items.map((item) =>
      generateMenuItemSchema({
        name: item.name,
        description: item.description,
        price: item.price || item.fullPrice || item.halfPrice,
        category: category.name,
      })
    )
  );

  return (
    <>
      <StructuredData menuItems={JSON.stringify(menuItemSchemas)} />
      <div className="pt-6 sm:pt-8">
        <MenuSection />
      </div>
    </>
  );
}
