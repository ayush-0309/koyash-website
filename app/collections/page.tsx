"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { collections } from "@/lib/data";
import CollectionCard from "@/components/CollectionCard";

type FilterKey = "all" | "coins" | "idols" | "kids" | "accessories" | "giftsets";

const filters: { key: FilterKey; label: string; icon: string }[] = [
  { key: "all", label: "All", icon: "✦" },
  { key: "coins", label: "Coins", icon: "🪙" },
  { key: "idols", label: "Idols", icon: "🛕" },
  { key: "kids", label: "Kids", icon: "🍼" },
  { key: "accessories", label: "Accessories", icon: "💍" },
  { key: "giftsets", label: "Gift Sets", icon: "🎁" },
];

export default function CollectionsPage() {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered =
    active === "all"
      ? collections
      : collections.filter((c) => c.category === active);

  return (
    <div className="min-h-screen bg-cream pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-poppins text-xs tracking-[0.4em] uppercase text-gold mb-3">
            925 Sterling Silver · BIS Hallmarked
          </p>
          <h1 className="font-cormorant text-5xl sm:text-6xl font-bold text-maroon mb-4">
            Our Collections
          </h1>
          <p className="font-poppins text-sm font-light text-maroon/60 max-w-lg mx-auto leading-relaxed">
            Explore our curated range of pure silver gifts — each piece hallmarked, beautifully packaged,
            and ready to make any occasion unforgettable.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <div className="w-12 h-px bg-gold/50" />
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-poppins text-sm font-medium transition-all duration-300 ${
                active === f.key
                  ? "bg-maroon text-parchment border border-maroon shadow-md"
                  : "bg-parchment text-maroon/70 border border-maroon/20 hover:border-maroon hover:text-maroon"
              }`}
            >
              <span>{f.icon}</span>
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((item, i) => (
            <CollectionCard key={item.id} collection={item} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-cormorant text-2xl text-maroon/40">No items in this category yet.</p>
          </div>
        )}

        {/* Enquire CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-10 bg-parchment rounded-2xl shadow-lg"
        >
          <p className="font-poppins text-xs tracking-[0.3em] uppercase text-gold mb-3">Bespoke Orders</p>
          <h2 className="font-cormorant text-3xl font-bold text-maroon mb-3">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="font-poppins text-sm font-light text-maroon/60 mb-8 max-w-md mx-auto">
            We take custom orders — engraved names, corporate gifting, bulk orders, and more.
          </p>
          <a
            href="https://wa.me/919891710111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-maroon text-parchment font-poppins text-sm font-medium rounded-full border border-maroon hover:border-gold hover:bg-maroon-light transition-all duration-300"
          >
            💬 WhatsApp for Custom Order
          </a>
        </motion.div>
      </div>
    </div>
  );
}
