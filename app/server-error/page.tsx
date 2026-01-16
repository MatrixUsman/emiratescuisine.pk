'use client';

import { motion } from 'framer-motion';
import { Server, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

/**
 * Server Error Page
 * 
 * Used for 500 Internal Server Error and other server-side errors
 */

export default function ServerErrorPage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center space-y-8"
      >
        {/* Server Icon with Animation */}
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
            <Server className="h-16 w-16 text-primary" />
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
            500
          </h1>
          <p className="text-xl sm:text-2xl text-white">
            Server Error
          </p>
          <p className="text-base sm:text-lg text-dark-muted max-w-lg mx-auto">
            Our server is experiencing technical difficulties. Please try again later or contact us if the problem persists.
          </p>
        </motion.div>

        {/* Status Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="p-4 bg-primary/5 border border-primary/20 rounded-lg"
        >
          <p className="text-sm text-dark-muted">
            We&apos;re working to restore service as quickly as possible.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={handleRefresh}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary-dark px-8 py-4 font-semibold text-dark-bg transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] flex items-center space-x-2"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <RefreshCw className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
              <span>Refresh Page</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <Link
            href="/"
            className="group relative overflow-hidden rounded-lg border-2 border-primary bg-transparent px-8 py-4 font-semibold text-primary transition-all duration-500 hover:bg-primary hover:text-dark-bg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-primary-light flex items-center space-x-2"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Go Home</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="pt-4 space-y-2"
        >
          <p className="text-sm text-dark-muted">Need assistance?</p>
          <Link
            href="https://wa.me/923210554466"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-light transition-colors duration-300"
          >
            <span>Contact us on WhatsApp</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
