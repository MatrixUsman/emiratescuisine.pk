"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="py-20 bg-dark-bg min-h-screen">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-8 font-display text-4xl font-bold text-primary md:text-6xl">
            Terms & Conditions
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-white">
            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                1. General Terms
              </h2>
              <p className="text-dark-muted leading-relaxed">
                By accessing and using the Emirates Cuisine website, you accept
                and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                2. Menu & Pricing
              </h2>
              <p className="text-dark-muted leading-relaxed">
                All menu items, prices, and availability are subject to change
                without prior notice. Prices displayed on the website are in
                Pakistani Rupees (PKR) and are inclusive of applicable taxes
                unless otherwise stated.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                3. Food Quality & Allergies
              </h2>
              <p className="text-dark-muted leading-relaxed">
                While we strive to maintain the highest quality standards, we
                cannot guarantee that all ingredients are allergen-free. Please
                inform our staff of any food allergies or dietary restrictions
                before placing your order.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                4. Reservations & Orders
              </h2>
              <p className="text-dark-muted leading-relaxed">
                Reservations are subject to availability. We reserve the right
                to refuse service to anyone for any reason at any time. All
                orders are subject to confirmation and availability.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                5. Limitation of Liability
              </h2>
              <p className="text-dark-muted leading-relaxed">
                Emirates Cuisine shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                6. Contact Information
              </h2>
              <p className="text-dark-muted leading-relaxed">
                For any questions regarding these Terms & Conditions, please
                contact us at our branches or visit us in person.
              </p>
            </section>

            <p className="mt-8 text-sm text-dark-muted text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
