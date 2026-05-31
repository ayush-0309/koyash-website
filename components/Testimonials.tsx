"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-parchment relative overflow-hidden">
      {/* Decorative bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-cormorant text-[15vw] font-bold text-maroon/3 leading-none">Trust</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-poppins text-xs tracking-[0.4em] uppercase text-gold mb-3">What Our Clients Say</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-maroon">Stories of Trust</h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <div className="w-12 h-px bg-gold/50" />
          </div>
        </motion.div>

        <div className="relative min-h-[220px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-cream rounded-2xl p-8 sm:p-12 shadow-lg w-full text-center"
            >
              <div className="font-cormorant text-6xl text-gold/50 leading-none mb-4">&ldquo;</div>
              <p className="font-cormorant text-xl sm:text-2xl text-maroon italic leading-relaxed mb-8">
                {testimonials[current].quote}
              </p>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-px bg-gold/50" />
                <p className="font-poppins text-sm font-semibold text-maroon mt-2">
                  {testimonials[current].name}
                </p>
                <p className="font-poppins text-xs text-maroon/50 tracking-wide">
                  {testimonials[current].city}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-6 h-2 bg-maroon" : "w-2 h-2 bg-maroon/25 hover:bg-maroon/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
