import type { Metadata } from "next";
import { siteConfig, generateKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms & Conditions | Emirates Cuisine",
  description:
    "Read our terms and conditions for dining at Emirates Cuisine. Menu pricing, food quality, reservations, and service policies.",
  keywords: generateKeywords(["terms", "conditions", "policy", "rules"]),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
