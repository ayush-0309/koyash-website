"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Collection } from "@/lib/data";

interface Props {
  collection: Collection;
  index: number;
}

export default function CollectionCard({ collection, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-parchment rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 flex flex-col"
    >
      {/* Image placeholder */}
      <div className="relative h-52 bg-gradient-to-br from-cream via-parchment to-gold/10 flex items-center justify-center overflow-hidden">
        <span className="text-6xl select-none group-hover:scale-110 transition-transform duration-500">
          {collection.icon}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-maroon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-maroon/10 text-maroon font-poppins text-[10px] font-medium rounded-full tracking-wide uppercase">
            {collection.purity}
          </span>
          <span className="px-2.5 py-0.5 bg-gold/15 text-gold font-poppins text-[10px] font-medium rounded-full tracking-wide">
            {collection.weight}
          </span>
        </div>

        <h3 className="font-cormorant text-xl font-semibold text-maroon mb-2 leading-tight">
          {collection.name}
        </h3>
        <p className="font-poppins text-xs font-light text-maroon/60 leading-relaxed flex-1">
          {collection.description}
        </p>

        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-1.5 font-poppins text-sm font-medium text-maroon hover:text-maroon-light transition-colors duration-200 group/link"
        >
          Enquire
          <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
