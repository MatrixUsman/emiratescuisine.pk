import type { Metadata } from "next";
import { siteConfig, generateKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | Emirates Cuisine",
  description:
    "Privacy policy for Emirates Cuisine website. Learn how we handle information and protect your privacy.",
  keywords: generateKeywords(["privacy", "policy", "data protection"]),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
