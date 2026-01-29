"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { MenuItem } from "@/data/menu";
import { getCategoryPlaceholder } from "@/lib/images";

interface MenuCardProps {
  item: MenuItem;
  categoryId: string;
  index: number;
}

export default function MenuCard({ item, categoryId, index }: MenuCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const localImagePath = `/images/${categoryId}/${item.id}.jpg`;
  const placeholderImage = getCategoryPlaceholder(categoryId);
  // Start with placeholder to avoid 404s, then try local image
  const imageUrl = imageError ? placeholderImage : localImagePath;

  const formatPrice = (price?: number) => {
    if (!price) return null;
    return `${price.toLocaleString()}`;
  };

  const getPriceDisplay = () => {
    if (item.price) {
      return {
        type: "single",
        value: formatPrice(item.price),
      };
    }
    
    if (item.sizes) {
      const { single, half, full } = item.sizes;
      if (single && half && full) {
        return {
          type: "sizes",
          single: formatPrice(single),
          half: formatPrice(half),
          full: formatPrice(full),
        };
      }
    }
    
    if (item.halfPrice && item.fullPrice) {
      return {
        type: "half-full",
        half: formatPrice(item.halfPrice),
        full: formatPrice(item.fullPrice),
      };
    }
    
    if (item.quarterPrice && item.halfPrice && item.fullPrice) {
      return {
        type: "quarter-half-full",
        quarter: formatPrice(item.quarterPrice),
        half: formatPrice(item.halfPrice),
        full: formatPrice(item.fullPrice),
      };
    }
    
    if (item.fullPrice) {
      return {
        type: "single",
        value: formatPrice(item.fullPrice),
      };
    }
    
    if (item.description && item.description === "On Demand") {
      return {
        type: "on-demand",
      };
    }
    
    return null;
  };

  const priceDisplay = getPriceDisplay();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="motion-card group relative overflow-hidden rounded-lg sm:rounded-xl bg-dark-card border border-dark-border shadow-lg transition-all duration-200 ease-out hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] flex flex-col h-full"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-200 -z-10" />
      
      {/* Image Container */}
      <div className="relative h-32 sm:h-40 md:h-48 lg:h-52 w-full overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl}
          alt={item.name}
          fill
          className="object-cover transition-all duration-300 ease-out group-hover:scale-115 group-hover:brightness-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
          quality={85}
          priority={index < 3}
          loading={index < 3 ? 'eager' : 'lazy'}
          onError={() => {
            if (!imageError) {
              setImageError(true);
            }
          }}
          onLoad={() => setImageLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-200 group-hover:from-black/70 group-hover:via-black/30" />
        
        {/* Spicy Badge */}
        {item.spicy && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-1.5 sm:top-2 md:top-3 right-1.5 sm:right-2 md:right-3 flex items-center gap-0.5 sm:gap-1 rounded-full bg-red-500/90 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 backdrop-blur-sm shadow-lg"
          >
            <Flame className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-white flex-shrink-0" />
            <span className="text-[9px] sm:text-xs font-semibold text-white">Spicy</span>
          </motion.div>
        )}

        {/* Item Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 transform transition-transform duration-200 group-hover:translate-y-0 translate-y-1">
          <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white drop-shadow-2xl transition-all duration-200 group-hover:text-primary group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.8)] line-clamp-2">
            {item.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 sm:p-3 md:p-4 lg:p-5 bg-dark-card transition-colors duration-200 group-hover:bg-dark-surface flex flex-col">
        {item.description && (
          <p className="mb-2 sm:mb-3 md:mb-4 line-clamp-2 text-[10px] sm:text-xs md:text-sm text-dark-muted leading-relaxed transition-colors duration-200 group-hover:text-white/80">
            {item.description}
          </p>
        )}

        {/* Price Display */}
        <div className="border-t border-dark-border pt-2 sm:pt-3 md:pt-4 mt-auto">
          {priceDisplay && (
            <>
              {priceDisplay.type === "single" && (
                <div className="flex items-center justify-between group/price">
                  <span className="text-[9px] sm:text-xs font-medium text-dark-muted uppercase tracking-wider transition-colors duration-200 group-hover:text-primary/70">Price</span>
                  <div className="flex items-baseline gap-0.5 sm:gap-1">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary transition-all duration-200 group-hover/price:scale-110">Rs.</span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white transition-all duration-200 group-hover/price:text-primary group-hover/price:scale-105">
                      {priceDisplay.value}
                    </span>
                    <span className="text-[9px] sm:text-xs md:text-sm text-dark-muted">/-</span>
                  </div>
                </div>
              )}

              {priceDisplay.type === "half-full" && (
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between rounded-md sm:rounded-lg bg-primary/10 border border-primary/20 px-2 sm:px-3 py-1.5 sm:py-2 md:py-2.5 transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <span className="text-[9px] sm:text-xs font-semibold text-primary uppercase tracking-wider transition-colors duration-300">Half</span>
                    <div className="flex items-baseline gap-0.5 sm:gap-1">
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-primary transition-all duration-300 group-hover:scale-110">Rs.</span>
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                        {priceDisplay.half}
                      </span>
                      <span className="text-[8px] sm:text-[9px] md:text-xs text-dark-muted">/-</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-md sm:rounded-lg bg-primary/20 border border-primary/30 px-2 sm:px-3 py-1.5 sm:py-2 md:py-2.5 transition-all duration-300 group-hover:bg-primary/25 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <span className="text-[9px] sm:text-xs font-semibold text-primary uppercase tracking-wider transition-colors duration-300">Full</span>
                    <div className="flex items-baseline gap-0.5 sm:gap-1">
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-primary transition-all duration-300 group-hover:scale-110">Rs.</span>
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                        {priceDisplay.full}
                      </span>
                      <span className="text-[8px] sm:text-[9px] md:text-xs text-dark-muted">/-</span>
                    </div>
                  </div>
                </div>
              )}

              {priceDisplay.type === "quarter-half-full" && (
                <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                  <div className="flex items-center justify-between rounded-md sm:rounded-lg bg-primary/10 border border-primary/20 px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <span className="text-[8px] sm:text-[9px] md:text-xs font-semibold text-primary uppercase tracking-wider transition-colors duration-300">Quarter</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-primary transition-all duration-300 group-hover:scale-110">Rs.</span>
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                        {priceDisplay.quarter}
                      </span>
                      <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs text-dark-muted">/-</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-md sm:rounded-lg bg-primary/15 border border-primary/25 px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/45 group-hover:shadow-[0_0_18px_rgba(212,175,55,0.25)]">
                    <span className="text-[8px] sm:text-[9px] md:text-xs font-semibold text-primary uppercase tracking-wider transition-colors duration-300">Half</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-primary transition-all duration-300 group-hover:scale-110">Rs.</span>
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                        {priceDisplay.half}
                      </span>
                      <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs text-dark-muted">/-</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-md sm:rounded-lg bg-primary/20 border border-primary/30 px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 transition-all duration-300 group-hover:bg-primary/25 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <span className="text-[8px] sm:text-[9px] md:text-xs font-semibold text-primary uppercase tracking-wider transition-colors duration-300">Full</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-primary transition-all duration-300 group-hover:scale-110">Rs.</span>
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                        {priceDisplay.full}
                      </span>
                      <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs text-dark-muted">/-</span>
                    </div>
                  </div>
                </div>
              )}

              {priceDisplay.type === "sizes" && (
                <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                  <div className="flex items-center justify-between rounded-md sm:rounded-lg bg-primary/10 border border-primary/20 px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <span className="text-[8px] sm:text-[9px] md:text-xs font-semibold text-primary uppercase tracking-wider transition-colors duration-300">Single</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-primary transition-all duration-300 group-hover:scale-110">Rs.</span>
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                        {priceDisplay.single}
                      </span>
                      <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs text-dark-muted">/-</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-md sm:rounded-lg bg-primary/15 border border-primary/25 px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/45 group-hover:shadow-[0_0_18px_rgba(212,175,55,0.25)]">
                    <span className="text-[8px] sm:text-[9px] md:text-xs font-semibold text-primary uppercase tracking-wider transition-colors duration-300">Half</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-primary transition-all duration-300 group-hover:scale-110">Rs.</span>
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                        {priceDisplay.half}
                      </span>
                      <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs text-dark-muted">/-</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-md sm:rounded-lg bg-primary/20 border border-primary/30 px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 transition-all duration-300 group-hover:bg-primary/25 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <span className="text-[8px] sm:text-[9px] md:text-xs font-semibold text-primary uppercase tracking-wider transition-colors duration-300">Full</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-primary transition-all duration-300 group-hover:scale-110">Rs.</span>
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                        {priceDisplay.full}
                      </span>
                      <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs text-dark-muted">/-</span>
                    </div>
                  </div>
                </div>
              )}

              {priceDisplay.type === "on-demand" && (
                <div className="flex items-center justify-center rounded-md sm:rounded-lg bg-warning/10 border border-warning/20 px-2 sm:px-3 py-1.5 sm:py-2">
                  <span className="text-xs sm:text-sm font-semibold text-warning">On Demand</span>
                </div>
              )}
            </>
          )}

          {!priceDisplay && (
            <div className="text-center text-sm text-dark-muted">
              Price on request
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
