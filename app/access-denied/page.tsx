'use client';

import { motion } from 'framer-motion';
import { Lock, ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

/**
 * Unauthorized/Access Denied Page
 * 
 * Used for 401 Unauthorized and 403 Forbidden errors
 */

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center space-y-8"
      >
        {/* Lock Icon with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
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
            <Lock className="h-16 w-16 text-primary" />
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
            403
          </h1>
          <p className="text-xl sm:text-2xl text-white">
            Access Denied
          </p>
          <p className="text-base sm:text-lg text-dark-muted max-w-lg mx-auto">
            You don&apos;t have permission to access this resource. If you believe this is a mistake, please contact us.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary-dark px-8 py-4 font-semibold text-dark-bg transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] flex items-center space-x-2"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Go Home</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          <Link
            href="/"
            className="group relative overflow-hidden rounded-lg border-2 border-primary bg-transparent px-8 py-4 font-semibold text-primary transition-all duration-500 hover:bg-primary hover:text-dark-bg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-primary-light flex items-center space-x-2"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Go Back</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
