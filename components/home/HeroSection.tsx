"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown, Star, Sparkles, MapPin } from "lucide-react";
import { HERO, ZENOTI } from "@/lib/content/home";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  // Auto-cycling background image (cinematic slideshow)
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setActive((i) => (i + 1) % HERO.gallery.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-revival-dark"
    >
      {/* ── Full-bleed cinematic background slideshow ──────────────────── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.6, ease: EASE },
              scale: { duration: 6.5, ease: "easeOut" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={HERO.gallery[active]}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── Readability overlays ───────────────────────────────────────── */}
      {/* Left-weighted dark gradient so copy stays legible */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-gradient-to-r from-revival-dark via-revival-dark/85 to-revival-dark/30"
      />
      {/* Top & bottom vertical fades */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-revival-dark/70 via-transparent to-revival-dark" />
      {/* Warm gold tint */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_40%,rgba(201,169,110,0.18),transparent_60%)]" />

      {/* Animated gold ambiance orbs */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-10 h-[40rem] w-[40rem] rounded-full bg-revival-gold/20 blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full bg-[#8a5a2b]/25 blur-[150px]"
        />
      </div>

      {/* Floating gold sparks */}
      {SPARKS.map((s, i) => (
        <Spark key={i} {...s} />
      ))}

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          style={{ y: contentY }}
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-2xl"
        >
          <motion.span
            variants={item}
            className="text-tagline inline-flex items-center gap-2.5 rounded-full border border-revival-gold/30 bg-white/[0.06] px-4 py-1.5 text-xs text-revival-gold backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {HERO.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.25rem)", lineHeight: 1.08 }}
          >
            Take the first step towards a{" "}
            <span className="relative inline-block italic text-revival-gold">
              vibrant
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.9, ease: EASE }}
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>{" "}
            future
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-lg text-lg font-light leading-relaxed text-revival-cream/90"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={ZENOTI}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-8 py-4 text-base font-medium text-revival-dark shadow-[0_8px_30px_-8px_rgba(201,169,110,0.6)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="relative">Book Your Free Consultation</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              href="/about-us/"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/[0.04] px-8 py-4 text-base font-light text-white backdrop-blur-md transition-colors duration-300 hover:border-revival-gold hover:text-revival-gold"
            >
              Discover Our Story
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-revival-gold text-revival-gold"
                  />
                ))}
              </span>
              <span className="text-sm font-light text-revival-cream/80">
                Rated 5.0 by 240+ patients
              </span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-light text-revival-cream/80">
              <MapPin className="h-4 w-4 text-revival-gold" />2 Las Vegas
              Locations
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-tagline text-xs text-revival-gold/90"
          >
            {HERO.words.map((w, i) => (
              <span key={w} className="flex items-center gap-4">
                {i > 0 && <Dot />}
                {w}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Floating glass info cards (over the background) ───────────── */}
        <div className="relative hidden h-[34rem] lg:block">
          {/* Rotating dashed gold rings */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute right-6 top-8 h-56 w-56 rounded-full border border-dashed border-revival-gold/25"
          />
          <motion.div
            aria-hidden
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-28 h-40 w-40 rounded-full border border-dashed border-revival-gold/15"
          />

          {/* Featured framed image card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.45, duration: 1, ease: EASE }}
            className="absolute right-0 top-6 h-[24rem] w-[18rem] overflow-hidden rounded-[2rem] border border-revival-gold/30 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={HERO.gallery[(active + 1) % HERO.gallery.length]}
                  alt="Aesthetic treatment showcase"
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-revival-dark/60 via-transparent to-transparent" />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
              {HERO.gallery.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? "w-6 bg-revival-gold" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating "30+ Treatments" glass card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.7, ease: EASE },
              scale: { delay: 1, duration: 0.7, ease: EASE },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
            }}
            className="absolute left-0 top-24 z-20 flex items-center gap-3 rounded-2xl border border-revival-gold/25 bg-revival-charcoal/70 px-4 py-3 shadow-xl backdrop-blur-xl"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-revival-gold/15">
              <Sparkles className="h-5 w-5 text-revival-gold" />
            </span>
            <div className="leading-tight">
              <p className="font-heading text-xl font-semibold text-white">
                30+
              </p>
              <p className="text-[0.6rem] font-light uppercase tracking-[0.2em] text-revival-cream/65">
                Treatments
              </p>
            </div>
          </motion.div>

          {/* Floating "5.0 Rating" glass card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, 12, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.7, ease: EASE },
              scale: { delay: 1.2, duration: 0.7, ease: EASE },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
            }}
            className="absolute bottom-6 left-6 z-20 flex items-center gap-3 rounded-2xl border border-revival-gold/25 bg-revival-charcoal/70 px-4 py-3 shadow-xl backdrop-blur-xl"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-revival-gold/15">
              <Star className="h-5 w-5 fill-revival-gold text-revival-gold" />
            </span>
            <div className="leading-tight">
              <p className="font-heading text-xl font-semibold text-white">
                5.0
              </p>
              <p className="text-[0.6rem] font-light uppercase tracking-[0.2em] text-revival-cream/65">
                240+ Reviews
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-revival-dark to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-revival-gold"
        >
          <span className="text-tagline text-[10px]">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── Floating gold sparks ──────────────────────────────────────────────── */

const SPARKS = [
  { left: "12%", top: "26%", size: 6, delay: 0, duration: 7 },
  { left: "28%", top: "70%", size: 4, delay: 1.5, duration: 9 },
  { left: "46%", top: "16%", size: 5, delay: 0.8, duration: 8 },
  { left: "60%", top: "72%", size: 4, delay: 2, duration: 10 },
  { left: "78%", top: "30%", size: 6, delay: 1, duration: 7.5 },
];

function Spark({
  left,
  top,
  size,
  delay,
  duration,
}: {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute z-[2] rounded-full bg-revival-gold shadow-[0_0_12px_2px_rgba(201,169,110,0.6)]"
      style={{ left, top, width: size, height: size }}
      animate={{ y: [0, -24, 0], opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function Dot() {
  return <span className="h-1 w-1 rounded-full bg-revival-gold/60" aria-hidden />;
}
