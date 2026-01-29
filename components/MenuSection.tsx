"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { menuData, MenuCategory } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = menuData.categories;

  const filteredCategories = selectedCategory
    ? categories.filter((cat) => cat.id === selectedCategory)
    : categories;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-bg">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="motion-section-header mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <h2 className="mb-3 sm:mb-4 font-display font-bold text-primary">
            Our Menu
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-muted px-4 sm:px-0">
            Explore our diverse selection of authentic dishes
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-0">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className={`motion-button relative rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden whitespace-nowrap ${
              selectedCategory === null
                ? "bg-gradient-to-r from-primary to-primary-dark text-dark-bg shadow-[0_0_25px_rgba(212,175,55,0.6)] scale-105"
                : "bg-dark-card text-white border border-dark-border hover:border-primary/60 hover:text-primary hover:bg-dark-surface hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            }`}
          >
            {selectedCategory === null && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">All</span>
          </motion.button>
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`motion-button relative rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden whitespace-nowrap ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-primary to-primary-dark text-dark-bg shadow-[0_0_25px_rgba(212,175,55,0.6)] scale-105"
                  : "bg-dark-card text-white border border-dark-border hover:border-primary/60 hover:text-primary hover:bg-dark-surface hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Menu Categories */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="motion-section-header scroll-mt-24"
              id={category.id}
            >
              <div className="mb-4 sm:mb-6 md:mb-8 px-1 sm:px-0">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-xs sm:text-sm md:text-base text-dark-muted">
                    {category.description}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {category.items.map((item, index) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    categoryId={category.id}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
