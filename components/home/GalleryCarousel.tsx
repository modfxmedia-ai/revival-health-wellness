"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Camera } from "lucide-react";
import { GALLERY } from "@/lib/content/home";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Bento span classes for 8 tiles — tessellates cleanly on a 4-col grid. */
const SPANS = [
  "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2", // 0 — large feature
  "col-span-1 row-span-1", // 1
  "col-span-1 row-span-1", // 2
  "col-span-2 row-span-1 sm:col-span-2 sm:row-span-1", // 3 — wide
  "col-span-1 row-span-2 sm:col-span-1 sm:row-span-2", // 4 — tall
  "col-span-1 row-span-1", // 5
  "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2", // 6 — large feature
  "col-span-1 row-span-1", // 7
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const tile = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

export default function GalleryCarousel() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-revival-cream py-24 lg:py-32">
      {/* Animated gold ambiance */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.22), transparent 70%)",
          }}
          animate={{ x: [0, 50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-32 bottom-1/4 h-[26rem] w-[26rem] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(138,90,43,0.18), transparent 70%)",
          }}
          animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-revival-gold/30 bg-white/70 px-4 py-1.5 text-tagline text-xs text-revival-gold shadow-sm backdrop-blur">
            <Camera className="h-3.5 w-3.5" />
            Gallery
          </span>
          <h2
            className="mt-5 text-revival-dark"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
          >
            Inside{" "}
            <span className="bg-gradient-to-r from-[#8a5a2b] via-revival-gold to-[#e8d5b0] bg-clip-text text-transparent">
              Revival Health &amp; Wellness
            </span>
          </h2>
          <p className="mt-5 text-lg font-light text-revival-dark/65">
            Step inside our Las Vegas locations — designed for comfort,
            privacy, and a true luxury experience.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-flow-row-dense auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[180px] sm:grid-cols-4 lg:auto-rows-[210px]"
        >
          {GALLERY.map((src, i) => (
            <motion.button
              key={src}
              variants={tile}
              onClick={() => setActive(src)}
              className={`group relative overflow-hidden rounded-3xl shadow-md ring-1 ring-black/5 ${
                SPANS[i % SPANS.length]
              }`}
            >
              <Image
                src={src}
                alt="Revival Health and Wellness gallery"
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* scrim + gold wash on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-revival-gold/10 opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
              {/* zoom hint */}
              <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-revival-dark opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Sparkles className="h-4 w-4" />
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-black"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            >
              <Image
                src={active}
                alt="Revival Health and Wellness"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
