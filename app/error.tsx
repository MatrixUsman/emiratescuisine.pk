"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

/**
 * Error Page
 * 
 * Custom error page for handling runtime errors.
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for debugging
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-bg px-4 py-20">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="mb-6 flex justify-center"
          >
            <div className="rounded-full bg-red-500/20 p-6 border border-red-500/30">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-4 font-display text-3xl font-bold text-white md:text-4xl"
          >
            Something went wrong!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8 text-lg text-dark-muted"
          >
            {error.message || "An unexpected error occurred. Please try again."}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={reset}
              className="group relative flex items-center space-x-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary-dark px-8 py-4 font-semibold text-dark-bg transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
            >
              <RefreshCw className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
              <span className="relative z-10">Try Again</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <Link
              href="/"
              className="group relative overflow-hidden rounded-lg border-2 border-primary bg-transparent px-8 py-4 font-semibold text-primary transition-all duration-500 hover:bg-primary hover:text-dark-bg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-primary-light"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Home className="h-5 w-5" />
                <span>Go Home</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
