"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { branches } from "@/data/branches";
import OpeningHours from "@/components/OpeningHours";

/**
 * Branches Page
 * 
 * Displays all restaurant locations with:
 * - Google Maps integration
 * - Address information
 * - Local SEO optimization
 */

export default function BranchesPage() {
  return (
    <div className="py-16 sm:py-20 md:py-24 bg-dark-bg min-h-screen">
      <div className="container mx-auto px-safe">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <h1 className="mb-3 sm:mb-4 font-display font-bold text-primary">
            Our Branches
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-dark-muted px-4 sm:px-0">
            Visit us at any of our locations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-safe">
              {branches.map((branch, index) => (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative rounded-lg sm:rounded-xl border border-dark-border bg-dark-card p-4 sm:p-6 md:p-8 shadow-lg transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                  
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-full bg-primary/20 p-3 sm:p-4 border border-primary/30 transition-all duration-500 group-hover:bg-primary/30 group-hover:border-primary/50 group-hover:scale-110 flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-primary transition-all duration-500 group-hover:text-primary-light break-words">
                        {branch.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-dark-muted uppercase tracking-wider transition-colors duration-500 group-hover:text-primary/70">{branch.city}</p>
                    </div>
                  </div>
                  <p className="mb-6 sm:mb-8 text-xs sm:text-sm text-dark-muted leading-relaxed transition-colors duration-500 group-hover:text-white/80">{branch.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary/10 border border-primary/20 px-3 sm:px-4 py-2 sm:py-2.5 text-primary transition-all duration-500 hover:bg-primary hover:text-dark-bg hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  >
                    <Navigation className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:scale-110 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium relative z-10">Get Directions</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="order-first lg:order-last">
            <OpeningHours />
          </div>
        </div>
      </div>
    </div>
  );
}
