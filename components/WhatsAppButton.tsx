"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/contact";

/**
 * WhatsApp Floating Button
 * 
 * Floating button that opens WhatsApp chat directly.
 * Uses phone number from contact info.
 */

const WHATSAPP_MESSAGE = "Hello! I'd like to know more about Emirates Cuisine.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${contactInfo.phone.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#25D366]/60 hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white md:h-8 md:w-8" />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
}
