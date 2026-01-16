'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

/**
 * Global Error Page
 * 
 * Catches errors in the root layout that error.tsx cannot handle.
 * This is the last resort error boundary.
 */

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg">
        <div className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl w-full text-center space-y-8"
          >
            {/* Error Icon with Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                    '0 0 40px rgba(212, 175, 55, 0.6)',
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"
              />
              <div className="relative bg-primary/10 rounded-full p-6 border-2 border-primary">
                <AlertTriangle className="h-16 w-16 text-primary" />
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Critical Error
              </h1>
              <p className="text-xl sm:text-2xl text-white">
                Something went seriously wrong
              </p>
              <p className="text-base sm:text-lg text-dark-muted max-w-lg mx-auto">
                We&apos;re experiencing a critical system error. Our team has been notified and is working to resolve this issue.
              </p>
            </motion.div>

            {/* Detailed Error Info */}
            {error.message && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-lg mx-auto"
              >
                <p className="text-xs sm:text-sm text-dark-muted font-mono break-words">
                  {error.message}
                </p>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button
                onClick={reset}
                className="group relative flex items-center space-x-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary-dark px-8 py-4 font-semibold text-dark-bg transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
              >
                <AlertTriangle className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                <span className="relative z-10">Retry</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <Link
                href="/"
                className="group relative overflow-hidden rounded-lg border-2 border-primary bg-transparent px-8 py-4 font-semibold text-primary transition-all duration-500 hover:bg-primary hover:text-dark-bg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-primary-light flex items-center space-x-2"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Home className="h-5 w-5" />
                  <span>Return Home</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>

            {/* Error ID */}
            {error.digest && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-xs text-dark-muted"
              >
                <p>Error ID: <span className="text-primary font-mono">{error.digest}</span></p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </body>
    </html>
  );
}
