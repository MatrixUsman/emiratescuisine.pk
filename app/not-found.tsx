"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Menu, ArrowLeft } from "lucide-react";

/**
 * 404 Not Found Page
 * 
 * Custom 404 page for better user experience when pages are not found.
 */

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-bg px-4 py-20">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 404 Number with Enhanced Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="relative mb-4"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                  "0 0 60px rgba(212, 175, 55, 0.5)",
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-10 bg-primary/20 rounded-2xl blur-2xl"
            />
            <h1 className="relative font-display text-9xl font-bold bg-gradient-to-b from-primary via-primary-light to-primary bg-clip-text text-transparent md:text-[12rem]">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-2 font-display text-3xl font-bold text-white md:text-4xl"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 text-lg text-dark-muted"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/"
              className="group relative flex items-center space-x-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary-dark px-8 py-4 font-semibold text-dark-bg transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
            >
              <Home className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
              <span className="relative z-10">Go Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>

            <Link
              href="/menu"
              className="group relative overflow-hidden rounded-lg border-2 border-primary bg-transparent px-8 py-4 font-semibold text-primary transition-all duration-500 hover:bg-primary hover:text-dark-bg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-primary-light"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Menu className="h-5 w-5" />
                <span>View Menu</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12"
          >
            <p className="mb-4 text-sm text-dark-muted">Or visit:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/branches"
                className="text-primary transition-all duration-300 hover:text-primary-light hover:underline"
              >
                Branches
              </Link>
              <Link
                href="/terms"
                className="text-primary transition-all duration-300 hover:text-primary-light hover:underline"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-primary transition-all duration-300 hover:text-primary-light hover:underline"
              >
                Privacy
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
