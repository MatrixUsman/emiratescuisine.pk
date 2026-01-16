"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactInfo } from "@/data/contact";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/branches", label: "Branches" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-border bg-dark-surface/95 backdrop-blur-md supports-[backdrop-filter]:bg-dark-surface/90">
      <nav className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-safe">
        <Link
          href="/"
          prefetch
          className="group flex items-center gap-2 sm:gap-3 transition-all duration-200 hover:scale-105 flex-shrink-0"
        >
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image
              src="/logo/logo.png"
              alt="Emirates Cuisine Logo"
              fill
              className="object-contain"
              priority
              quality={95}
              sizes="(max-width: 640px) 40px, 48px"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold text-primary leading-tight transition-all duration-200 group-hover:text-primary-light">
              emirates
            </span>
            <span className="text-xs text-dark-muted uppercase tracking-wider transition-all duration-200 group-hover:text-primary/70">
              cuisine
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:gap-6 lg:gap-8 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={item.href}
                prefetch
                className="relative text-sm md:text-base font-medium text-white transition-all duration-300 hover:text-primary group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary-light transition-all duration-200 group-hover:w-full" />
                <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
              </Link>
            </motion.div>
          ))}
          <motion.a
            href={`tel:${contactInfo.phone.primary.replace(/\s/g, "")}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-primary/10 border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-dark-bg hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <Phone className="h-4 w-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12" />
            <span className="relative z-10">Call Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors duration-200 p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-dark-border bg-dark-surface md:hidden"
          >
            <div className="container mx-auto space-y-2 px-safe py-4 sm:py-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    prefetch
                    onClick={() => setMobileMenuOpen(false)}
                    className="group relative block rounded-lg px-4 py-3 text-sm sm:text-base font-medium text-white transition-all duration-200 hover:bg-dark-card hover:text-primary"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-primary/10 rounded-lg transition-all duration-200 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={`tel:${contactInfo.phone.primary.replace(/\s/g, "")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-primary/10 border border-primary/30 px-4 py-3 text-sm sm:text-base font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-dark-bg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  <Phone className="h-4 w-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0" />
                  <span className="relative z-10">Call Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
