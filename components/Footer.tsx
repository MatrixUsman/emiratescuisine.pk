import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { branches } from "@/data/branches";
import { contactInfo } from "@/data/contact";
import OpeningHours from "./OpeningHours";

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Opening Hours Section - Top */}
        <div className="mb-12 md:mb-16">
          <OpeningHours />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="flex flex-col">
            <h3 className="mb-4 font-display text-lg md:text-xl font-bold text-primary">
              Emirates Cuisine
            </h3>
            <p className="mb-6 text-sm text-dark-muted leading-relaxed">
              Bringing the rich and authentic flavors of Arabic cuisine to
              Sahiwal. We are committed to using the freshest ingredients to
              ensure the highest quality in every dish.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-3 flex-wrap">
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-dark-card border border-dark-border text-white transition-all duration-500 hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 hover:rotate-3"
                aria-label="Follow on Instagram"
              >
                <Instagram className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10" />
              </a>
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-dark-card border border-dark-border text-white transition-all duration-500 hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 hover:-rotate-3"
                aria-label="Follow on Facebook"
              >
                <Facebook className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10" />
              </a>
              <a
                href={contactInfo.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-dark-card border border-dark-border text-white transition-all duration-500 hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 hover:rotate-3"
                aria-label="Follow on TikTok"
              >
                <svg className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-lg md:text-xl font-bold text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/menu"
                  className="group relative text-dark-muted transition-all duration-500 hover:text-primary inline-block"
                >
                  <span className="relative z-10">Menu</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="/branches"
                  className="group relative text-dark-muted transition-all duration-500 hover:text-primary inline-block"
                >
                  <span className="relative z-10">Branches</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="group relative text-dark-muted transition-all duration-500 hover:text-primary inline-block"
                >
                  <span className="relative z-10">Terms & Conditions</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="group relative text-dark-muted transition-all duration-500 hover:text-primary inline-block"
                >
                  <span className="relative z-10">Privacy Policy</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-lg md:text-xl font-bold text-primary">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="group flex items-start space-x-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <a
                  href={`tel:${contactInfo.phone.primary.replace(/\s/g, "")}`}
                  className="text-dark-muted transition-all duration-500 hover:text-primary hover:translate-x-1 inline-block break-all"
                >
                  {contactInfo.phone.primary}
                </a>
              </li>
              {contactInfo.phone.secondary && (
                <li className="group flex items-start space-x-3">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <a
                    href={`tel:${(contactInfo.phone.secondary || "").replace(/\s/g, "")}`}
                    className="text-dark-muted transition-all duration-500 hover:text-primary hover:translate-x-1 inline-block break-all"
                  >
                    {contactInfo.phone.secondary}
                  </a>
                </li>
              )}
              <li className="group flex items-start space-x-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-dark-muted transition-all duration-500 hover:text-primary hover:translate-x-1 inline-block break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="mb-4 font-display text-lg md:text-xl font-bold text-primary">
              Our Branches
            </h3>
            <ul className="space-y-4 text-sm">
              {branches.map((branch) => (
                <li key={branch.id} className="flex items-start space-x-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="font-medium text-white mb-1 break-words">{branch.city}</p>
                    <p className="text-dark-muted text-xs leading-relaxed break-words">{branch.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-dark-border pt-8 text-center text-xs md:text-sm text-dark-muted">
          <p>
            © {new Date().getFullYear()} Emirates Cuisine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
