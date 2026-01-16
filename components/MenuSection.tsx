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
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-4xl font-bold text-primary md:text-6xl">
            Our Menu
          </h2>
          <p className="text-lg text-dark-muted md:text-xl">
            Explore our diverse selection of authentic dishes
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-16 flex flex-wrap justify-center gap-3">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className={`relative rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 overflow-hidden ${
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
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 overflow-hidden ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-primary to-primary-dark text-dark-bg shadow-[0_0_25px_rgba(212,175,55,0.6)] scale-105"
                  : "bg-dark-card text-white border border-dark-border hover:border-primary/60 hover:text-primary hover:bg-dark-surface hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              }`}
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
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
              id={category.id}
            >
              <div className="mb-8">
                <h3 className="font-display text-3xl font-bold text-primary mb-2">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-sm text-dark-muted">
                    {category.description}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
