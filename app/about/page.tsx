"use client";

import { motion } from "framer-motion";
import { milestones } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const trustBadges = [
  { icon: "🏅", label: "BIS Hallmarked" },
  { icon: "🌍", label: "30+ Countries Shipped" },
  { icon: "🏆", label: "10,000+ Happy Families" },
  { icon: "✍️", label: "Custom Engraving" },
  { icon: "📦", label: "Luxury Packaging" },
  { icon: "🔒", label: "100% Purity Guarantee" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Arc decoration */}
        <svg
          className="absolute top-0 right-0 w-[50vw] max-w-[600px] opacity-8 pointer-events-none"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path d="M500 0 Q250 250 500 500" stroke="#6B1A3A" strokeWidth="1.5" fill="none" />
          <path d="M500 50 Q270 270 500 450" stroke="#C9A96E" strokeWidth="1" fill="none" />
          <circle cx="480" cy="250" r="180" stroke="#C9A96E" strokeWidth="0.6" fill="none" />
        </svg>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" className="text-center mb-20">
            <motion.p variants={fadeUp} custom={0} className="font-poppins text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Our Story
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold text-maroon mb-6 leading-tight">
              House of Trust,
              <br />
              <span className="italic font-semibold text-maroon-light">Born in Delhi</span>
            </motion.h1>
            <motion.div variants={fadeUp} custom={2} className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-gold/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <div className="w-12 h-px bg-gold/50" />
            </motion.div>
            <motion.p variants={fadeUp} custom={3} className="font-poppins text-base font-light text-maroon/70 max-w-2xl mx-auto leading-relaxed">
              Koyash was founded on a simple belief — that every gift should carry the weight of trust.
              In a market flooded with imitations, we chose purity. Every piece we offer is BIS hallmarked,
              every delivery is handled with care, and every customer relationship is built to last.
            </motion.p>
          </motion.div>

          {/* Brand story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="bg-parchment rounded-2xl p-8 shadow-lg"
            >
              <div className="font-cormorant text-6xl text-gold/30 leading-none mb-4">&ldquo;</div>
              <p className="font-cormorant text-2xl italic text-maroon leading-relaxed mb-6">
                We don&rsquo;t just sell silver. We sell the certainty that comes with it.
              </p>
              <p className="font-poppins text-xs font-medium text-gold tracking-widest uppercase">
                — Founder, Koyash
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="space-y-6"
            >
              {[
                { title: "Our Mission", body: "To make pure silver gifting accessible, trustworthy, and beautiful for every Indian family — whether they're celebrating a birth, a wedding, a festival, or a milestone." },
                { title: "Our Promise", body: "No compromise on purity. No hidden charges. No plastic-looking packaging. Just honest silver, honestly priced, delivered with love." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-cormorant text-2xl font-semibold text-maroon mb-2">{item.title}</h3>
                  <p className="font-poppins text-sm font-light text-maroon/65 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-maroon">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="text-3xl">{badge.icon}</span>
                <span className="font-poppins text-xs font-medium text-parchment/80 tracking-wide leading-snug">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-poppins text-xs tracking-[0.4em] uppercase text-gold mb-3">
              Two Decades of Excellence
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-cormorant text-4xl sm:text-5xl font-bold text-maroon">
              Our Journey
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/25 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-14 md:pl-0`}>
                    <div className="bg-parchment rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <span className="font-poppins text-xs font-semibold text-gold tracking-widest uppercase">
                        {m.year}
                      </span>
                      <h3 className="font-cormorant text-xl font-semibold text-maroon mt-1 mb-2">{m.title}</h3>
                      <p className="font-poppins text-xs font-light text-maroon/60 leading-relaxed">{m.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:static md:flex-shrink-0 w-4 h-4 bg-gold rounded-full border-2 border-parchment shadow-md z-10" />

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
