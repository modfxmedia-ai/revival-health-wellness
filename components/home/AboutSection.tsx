"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart, Star, Award } from "lucide-react";
import { ABOUT, VALUES } from "@/lib/content/home";

const EASE = [0.22, 1, 0.36, 1] as const;

const VALUE_ICONS = [Heart, Star, Award];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-revival-warm-white py-24 lg:py-32"
    >
      {/* Animated gold ambiance */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.22), transparent 70%)",
          }}
          animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(138,90,43,0.18), transparent 70%)",
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-revival-gold/30 bg-white/60 px-4 py-1.5 text-tagline text-xs text-revival-gold shadow-sm backdrop-blur">
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
          <div className="mt-6 space-y-4">
            {ABOUT.body.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="font-light leading-relaxed text-revival-dark/70"
              >
                {p}
              </p>
            ))}
          </div>
          <Link
            href={ABOUT.href}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-revival-gold to-[#8a5a2b] px-7 py-3.5 text-sm font-medium text-revival-dark shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Image + floating values */}
        <div className="relative h-[480px] sm:h-[560px]">
          {/* rotating dashed ring */}
          <motion.div
            aria-hidden
            style={{ rotate: ringRotate }}
            className="absolute left-1/2 top-1/2 h-[108%] w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-revival-gold/30"
          />

          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5"
          >
            <Image
              src={ABOUT.image}
              alt="The Revival Health and Wellness experience"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating value chips */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute -bottom-4 left-1/2 w-[92%] -translate-x-1/2 space-y-3 sm:left-auto sm:right-4 sm:w-72 sm:translate-x-0"
          >
            {VALUES.items.map((v, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
              return (
                <motion.div
                  key={v.title}
                  variants={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-xl backdrop-blur-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-revival-gold to-[#8a5a2b] text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading text-base font-medium text-revival-dark">
                      {v.title}
                    </p>
                    <p className="mt-0.5 text-xs font-light leading-snug text-revival-dark/60">
                      {v.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
