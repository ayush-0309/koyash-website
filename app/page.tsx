"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { collectionCategories } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const uspItems = [
  { icon: "✦", text: "925 Sterling Silver" },
  { icon: "✦", text: "Global Shipping" },
  { icon: "✦", text: "BIS Hallmarked" },
  { icon: "✦", text: "Delhi Based Since 2005" },
  { icon: "✦", text: "Custom Engraving Available" },
  { icon: "✦", text: "Pan India Delivery" },
  { icon: "✦", text: "Elegant Gift Packaging" },
  { icon: "✦", text: "Trusted by 10,000+ Families" },
];

const features = [
  {
    icon: "🏅",
    title: "Pure Silver Guarantee",
    description: "Every piece carries BIS hallmark certification — your assurance of 925 or 999 purity.",
  },
  {
    icon: "📦",
    title: "Elegant Packaging",
    description: "Curated luxury boxes, velvet interiors, and personalised ribbon — ready to gift, always.",
  },
  {
    icon: "🌍",
    title: "Pan India + International",
    description: "From Delhi to Dubai, Mumbai to Melbourne — we ship safely across 30+ countries.",
  },
];

export default function HomePage() {
  const dupedUsp = [...uspItems, ...uspItems];

  return (
    <>
      <Hero />

      {/* USP Marquee Strip */}
      <div className="bg-maroon py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {dupedUsp.map((item, i) => (
            <span key={i} className="flex items-center gap-3 mx-8">
              <span className="text-gold text-xs">{item.icon}</span>
              <span className="font-poppins text-xs font-medium tracking-[0.2em] uppercase text-parchment/90">
                {item.text}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Collections Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-poppins text-xs tracking-[0.4em] uppercase text-gold mb-3">
              Curated for Every Occasion
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-cormorant text-4xl sm:text-5xl font-bold text-maroon mb-4">
              Our Collections
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-gold/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <div className="w-12 h-px bg-gold/50" />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectionCategories.map((cat, i) => (
              <motion.div
                key={cat.key}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`group bg-parchment rounded-2xl shadow-lg p-8 hover:scale-[1.02] transition-transform duration-300 cursor-pointer flex flex-col items-center text-center ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </span>
                <h3 className="font-cormorant text-2xl font-semibold text-maroon mb-2">{cat.label}</h3>
                <p className="font-poppins text-xs font-light text-maroon/60 mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <Link
                  href={`/collections?cat=${cat.key}`}
                  className="font-poppins text-sm font-medium text-maroon hover:text-maroon-light flex items-center gap-1.5 group/link"
                >
                  Explore
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={6}
            className="text-center mt-12"
          >
            <Link
              href="/collections"
              className="px-8 py-3.5 bg-maroon text-parchment font-poppins text-sm font-medium rounded-full border border-maroon hover:border-gold hover:bg-maroon-light transition-all duration-300 tracking-wide"
            >
              View All Collections
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex items-center max-w-7xl mx-auto px-6 lg:px-12 gap-4">
        <div className="flex-1 h-px bg-gold/25" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 0 L11.8 7.6 L20 10 L11.8 12.4 L10 20 L8.2 12.4 L0 10 L8.2 7.6 Z" fill="#C9A96E" opacity="0.4" />
        </svg>
        <div className="flex-1 h-px bg-gold/25" />
      </div>

      {/* Why Koyash */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-poppins text-xs tracking-[0.4em] uppercase text-gold mb-3">
              The Koyash Difference
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-cormorant text-4xl sm:text-5xl font-bold text-maroon">
              Why Choose Us
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-parchment rounded-2xl p-8 shadow-lg text-center hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="font-cormorant text-2xl font-semibold text-maroon mb-3">{f.title}</h3>
                <p className="font-poppins text-sm font-light text-maroon/60 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Banner */}
      <section className="bg-maroon py-20 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-gold/10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border border-gold/10 -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-xs tracking-[0.4em] uppercase text-gold/70 mb-4"
          >
            Ready to Gift?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-4xl sm:text-5xl font-bold text-parchment mb-4"
          >
            Looking for the perfect silver gift?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-sm font-light text-parchment/70 mb-10"
          >
            Our experts will help you find the ideal piece. Call us or WhatsApp — we respond within minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+919891710111"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-parchment text-maroon font-poppins text-sm font-semibold rounded-full border border-parchment hover:border-gold hover:bg-cream transition-all duration-300"
            >
              📞 Call +91 98917 10111
            </a>
            <a
              href="https://wa.me/919891710111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-parchment font-poppins text-sm font-medium rounded-full border border-parchment/40 hover:border-gold hover:bg-parchment/10 transition-all duration-300"
            >
              💬 WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
