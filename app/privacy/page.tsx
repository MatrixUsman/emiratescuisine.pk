"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-dark-bg min-h-screen">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-8 font-display text-4xl font-bold text-primary md:text-6xl">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-white">
            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                1. Information We Collect
              </h2>
              <p className="text-dark-muted leading-relaxed">
                Emirates Cuisine is committed to protecting your privacy. This
                website is a static informational site and does not collect
                personal information through forms or cookies. We do not track
                user behavior or store personal data.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                2. Use of Information
              </h2>
              <p className="text-dark-muted leading-relaxed">
                Since we do not collect personal information through this
                website, no personal data is used, stored, or shared. Any
                information you provide directly at our restaurant locations is
                handled in accordance with local privacy laws.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                3. Third-Party Services
              </h2>
              <p className="text-dark-muted leading-relaxed">
                This website may use third-party services for hosting and
                analytics. These services may collect standard web server logs
                including IP addresses, browser types, and access times. This
                information is used solely for website maintenance and
                improvement purposes.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                4. External Links
              </h2>
              <p className="text-dark-muted leading-relaxed">
                Our website may contain links to external sites (such as Google
                Maps for directions). We are not responsible for the privacy
                practices of these external sites. We encourage you to review
                their privacy policies.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                5. Data Security
              </h2>
              <p className="text-dark-muted leading-relaxed">
                While this is a static website with no user data collection, we
                maintain appropriate security measures to protect the website
                infrastructure.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                6. Changes to Privacy Policy
              </h2>
              <p className="text-dark-muted leading-relaxed">
                We reserve the right to update this privacy policy at any time.
                Changes will be posted on this page with an updated revision
                date.
              </p>
            </section>

            <section className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
                7. Contact Us
              </h2>
              <p className="text-dark-muted leading-relaxed">
                If you have any questions about this Privacy Policy, please
                visit us at any of our branches or contact us directly.
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
