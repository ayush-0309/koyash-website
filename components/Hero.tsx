"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#C9A96E22_0%,_transparent_60%),_radial-gradient(ellipse_at_bottom_left,_#6B1A3A11_0%,_transparent_60%)]" />

      {/* Decorative arc SVG */}
      <svg
        className="absolute top-0 right-0 w-[55vw] max-w-[700px] opacity-10 pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M600 0 Q300 300 600 600" stroke="#6B1A3A" strokeWidth="1.5" fill="none" />
        <path d="M600 0 Q250 350 600 600" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <path d="M600 60 Q320 320 600 540" stroke="#6B1A3A" strokeWidth="0.8" fill="none" />
        <circle cx="580" cy="300" r="180" stroke="#C9A96E" strokeWidth="0.6" fill="none" />
        <circle cx="580" cy="300" r="240" stroke="#6B1A3A" strokeWidth="0.4" fill="none" />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[40vw] max-w-[500px] opacity-8 pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="0" cy="400" r="200" stroke="#C9A96E" strokeWidth="0.8" fill="none" />
        <circle cx="0" cy="400" r="280" stroke="#6B1A3A" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center pt-28">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-poppins text-xs font-medium tracking-[0.4em] uppercase text-gold mb-6"
        >
          925 Sterling Silver · BIS Hallmarked · Delhi
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-cormorant text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-maroon leading-[0.9] mb-8"
        >
          Gifting Rooted
          <br />
          <span className="italic font-semibold text-maroon-light">in Trust</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-poppins text-base sm:text-lg font-light text-maroon/70 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Timeless silver gifts for every sacred moment — handpicked, hallmarked,
          and delivered with care across India and the world.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/collections"
            className="px-8 py-3.5 bg-maroon text-parchment font-poppins text-sm font-medium rounded-full border border-maroon hover:border-gold hover:bg-maroon-light transition-all duration-300 tracking-wide"
          >
            Explore Collections
          </Link>
          <a
            href="tel:+919891710111"
            className="px-8 py-3.5 bg-transparent text-maroon font-poppins text-sm font-medium rounded-full border border-maroon hover:border-gold hover:bg-maroon/5 transition-all duration-300 tracking-wide"
          >
            📞 Call Us
          </a>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 flex items-center justify-center gap-4"
        >
          <div className="w-16 h-px bg-gold/50" />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0 L11.8 7.6 L20 10 L11.8 12.4 L10 20 L8.2 12.4 L0 10 L8.2 7.6 Z" fill="#C9A96E" opacity="0.6" />
          </svg>
          <div className="w-16 h-px bg-gold/50" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-poppins text-[10px] tracking-[0.3em] uppercase text-maroon/40">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
