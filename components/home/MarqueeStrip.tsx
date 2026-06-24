"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { MARQUEE } from "@/lib/content/home";

/**
 * Modern infinite marquee — gold-outlined glass chips drifting across a dark
 * band with a soft animated gold glow. Sleek, minimal, brand-aligned.
 */
function Row({
  reverse = false,
  duration = 32,
}: {
  reverse?: boolean;
  duration?: number;
}) {
  const items = [...MARQUEE, ...MARQUEE];

  return (
    <motion.div
      className="flex w-max items-center gap-4"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-revival-gold/25 bg-white/[0.04] px-5 py-2.5 backdrop-blur-sm transition-colors duration-300 hover:border-revival-gold/60 hover:bg-revival-gold/10"
        >
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-revival-gold" />
          <span className="text-[0.8rem] font-medium uppercase tracking-[0.18em] text-revival-cream/85 transition-colors group-hover:text-revival-gold">
            {word}
          </span>
        </span>
      ))}
    </motion.div>
  );
}

export default function MarqueeStrip() {
  return (
    <section className="relative overflow-hidden bg-revival-dark py-10">
      {/* animated gold glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.18), transparent 70%)",
        }}
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* top & bottom hairlines */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-revival-gold/40 to-transparent"
      />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-revival-gold/40 to-transparent"
      />

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-revival-dark to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-revival-dark to-transparent sm:w-40" />

      <div className="relative flex flex-col gap-3">
        <Row duration={34} />
        <Row reverse duration={40} />
      </div>
    </section>
  );
}
