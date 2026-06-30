"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Heart, Star, Award, type LucideIcon } from "lucide-react";
import { ABOUT, VALUES } from "@/lib/content/home";

const EASE = [0.22, 1, 0.36, 1] as const;

type Pillar = {
  title: string;
  description: string;
  points: string[];
  image: string;
  icon: LucideIcon;
};

const PILLARS: Pillar[] = [
  {
    title: VALUES.items[0].title,
    description: VALUES.items[0].text,
    points: [
      "Personalized treatment plans",
      "Goals-first approach",
      "Dedicated care team",
      "Ongoing support",
    ],
    image: "/images/home/Image_20250829_162859_144.jpeg",
    icon: Heart,
  },
  {
    title: VALUES.items[1].title,
    description: VALUES.items[1].text,
    points: [
      "Luxury spa setting",
      "Expert medical providers",
      "Comfortable & private",
      "Tailored every visit",
    ],
    image: "/images/home/Image_20250829_162858_851.jpeg",
    icon: Star,
  },
  {
    title: VALUES.items[2].title,
    description: VALUES.items[2].text,
    points: [
      "Evidence-based care",
      "Long-term results",
      "Continuous follow-up",
      "Excellence in all we do",
    ],
    image: "/images/home/Image_20250829_162859_344.jpeg",
    icon: Award,
  },
];

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const pillar = PILLARS[active];

  return (
    <section className="relative overflow-hidden bg-[#F4EFE8] py-14 lg:py-32">
      {/* Animated gold ambiance */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.18), transparent 70%)",
          }}
          animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(138,90,43,0.22), transparent 70%)",
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-revival-gold/40 bg-revival-dark/5 px-4 py-1.5 text-tagline text-xs text-revival-gold backdrop-blur">
            {ABOUT.eyebrow}
          </span>
          <h2
            className="mt-5 text-revival-dark"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
          >
            Everything we do is{" "}
            <span className="bg-gradient-to-r from-[#8a5a2b] via-revival-gold to-[#e8d5b0] bg-clip-text text-transparent">
              centered around you
            </span>
          </h2>
        </motion.div>

        {/* Pillar showcase */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {/* Detail card */}
          <div className="relative overflow-hidden rounded-3xl border border-revival-gold/15 bg-gradient-to-br from-[#1c150c] to-[#0f0d0a] p-8 lg:p-10">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full blur-[90px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,169,110,0.28), transparent 70%)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="relative"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-revival-gold to-[#8a5a2b] text-revival-dark shadow-lg">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-heading text-3xl font-medium uppercase tracking-wide text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-md font-light leading-relaxed text-revival-cream/75">
                  {pillar.description}
                </p>

                <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm font-light text-revival-cream/85"
                    >
                      <Check className="h-4 w-4 shrink-0 text-revival-gold" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={ABOUT.href}
                  className="group mt-9 inline-flex items-center gap-2 rounded-full border border-revival-gold/40 bg-revival-gold/5 px-7 py-3 text-tagline text-xs text-revival-gold transition-colors hover:bg-revival-gold hover:text-revival-dark"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image */}
          <div className="relative h-[360px] overflow-hidden rounded-3xl ring-1 ring-white/10 lg:h-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-revival-dark/50 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {PILLARS.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.title}
                type="button"
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2.5 rounded-full px-6 py-3 text-tagline text-xs transition-colors ${
                  isActive
                    ? "text-revival-dark"
                    : "border border-revival-dark/15 bg-revival-dark/[0.03] text-revival-dark/60 hover:text-revival-gold"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="pillar-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-revival-gold to-[#e8d5b0]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative flex items-center gap-2.5">
                  <p.icon className="h-4 w-4" />
                  {p.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
