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
    <div className="py-20 bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 font-display text-4xl font-bold text-primary md:text-6xl">
            Our Branches
          </h1>
          <p className="text-lg text-dark-muted md:text-xl">
            Visit us at any of our locations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {branches.map((branch, index) => (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-xl border border-dark-border bg-dark-card p-8 shadow-lg transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
              
              <div className="mb-6 flex items-center space-x-4">
                <div className="rounded-full bg-primary/20 p-4 border border-primary/30 transition-all duration-500 group-hover:bg-primary/30 group-hover:border-primary/50 group-hover:scale-110">
                  <MapPin className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-primary transition-all duration-500 group-hover:text-primary-light">
                    {branch.name}
                  </h2>
                  <p className="text-sm text-dark-muted uppercase tracking-wider transition-colors duration-500 group-hover:text-primary/70">{branch.city}</p>
                </div>
              </div>
              <p className="mb-8 text-dark-muted leading-relaxed transition-colors duration-500 group-hover:text-white/80">{branch.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center space-x-2 overflow-hidden rounded-lg bg-primary/10 border border-primary/20 px-4 py-2 text-primary transition-all duration-500 hover:bg-primary hover:text-dark-bg hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <Navigation className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                <span className="text-sm font-medium relative z-10">Get Directions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              </a>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <OpeningHours />
          </div>
        </div>
      </div>
    </div>
  );
}
