"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { contactInfo } from "@/data/contact";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.05)_25%,rgba(212,175,55,0.05)_50%,transparent_50%,transparent_75%,rgba(212,175,55,0.05)_75%)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container relative mx-auto px-safe py-20 sm:py-28 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <h1 className="mb-4 sm:mb-6 font-display font-bold text-white leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Emirates Cuisine
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl text-dark-muted leading-relaxed px-4 sm:px-0"
          >
            Experience the rich and authentic flavors of Arabic cuisine. We
            offer a diverse menu featuring Arabic, Continental, Desi, Chinese,
            BBQ, and Shinwari dishes crafted with the freshest ingredients.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="/menu"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary-dark px-6 sm:px-8 py-3 sm:py-4 font-semibold text-dark-bg transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] w-full sm:w-auto"
              >
                <span className="relative z-10 transition-all duration-300">View Menu</span>
                <ArrowRight className="h-5 w-5 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-primary/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="/branches"
                className="group relative flex items-center justify-center overflow-hidden rounded-lg border-2 border-primary bg-transparent px-6 sm:px-8 py-3 sm:py-4 font-semibold text-primary transition-all duration-500 hover:bg-primary hover:text-dark-bg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-primary-light w-full sm:w-auto"
              >
                <span className="relative z-10">Find Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Opening Hours Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm"
          >
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-white text-center">
              Open Daily: <span className="text-primary font-semibold">7:00 AM - 1:00 AM</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
