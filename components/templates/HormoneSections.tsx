"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HormoneMotionGraphic from "./HormoneMotionGraphic";
import { AnimatedPortraitFrame } from "@/components/ui/PortraitFrame";
import {
  Activity,
  ArrowRight,
  Award,
  Battery,
  Bone,
  Brain,
  CheckCircle2,
  Compass,
  Droplet,
  Dumbbell,
  Flame,
  HandHeart,
  Heart,
  HeartPulse,
  Leaf,
  Moon,
  Pill,
  Scale,
  ShieldCheck,
  Smile,
  Sparkles,
  Syringe,
  Target,
  Timer,
  Users,
  Utensils,
  Zap,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Icon registry (Lucide components can't cross the server → client boundary,
// so pages send a string key and this map resolves it inside the client).
// ─────────────────────────────────────────────────────────────────────────────

const ICONS = {
  activity: Activity,
  award: Award,
  battery: Battery,
  bone: Bone,
  brain: Brain,
  compass: Compass,
  droplet: Droplet,
  dumbbell: Dumbbell,
  flame: Flame,
  handHeart: HandHeart,
  heart: Heart,
  heartPulse: HeartPulse,
  leaf: Leaf,
  moon: Moon,
  pill: Pill,
  scale: Scale,
  shieldCheck: ShieldCheck,
  smile: Smile,
  sparkles: Sparkles,
  syringe: Syringe,
  target: Target,
  timer: Timer,
  users: Users,
  utensils: Utensils,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof ICONS;

// ─────────────────────────────────────────────────────────────────────────────
// Section types
// ─────────────────────────────────────────────────────────────────────────────

export type OverviewSection = {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  image?: string;
  bullets?: string[];
};

export type PillarBlock = {
  title: string;
  text: string;
  icon: IconKey;
};

export type FAQ = { question: string; answer: string };

// ─────────────────────────────────────────────────────────────────────────────
// Reusable sub-components
// ─────────────────────────────────────────────────────────────────────────────

export function OverviewBlock({
  section,
  reverse = false,
  tone = "light",
}: {
  section: OverviewSection;
  reverse?: boolean;
  tone?: "light" | "dark" | "cream";
}) {
  const bg =
    tone === "dark"
      ? "bg-revival-dark text-white"
      : tone === "cream"
        ? "bg-revival-cream"
        : "bg-revival-warm-white";
  const textColor =
    tone === "dark" ? "text-revival-cream/85" : "text-revival-charcoal/85";
  const headingColor = tone === "dark" ? "text-white" : "text-revival-dark";

  return (
    <section className={`relative overflow-hidden ${bg} py-16 lg:py-24`}>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -left-20 top-10 h-[24rem] w-[24rem] rounded-full blur-[140px]"
          style={{
            background:
              tone === "dark"
                ? "radial-gradient(circle, rgba(201,169,110,0.22), transparent 70%)"
                : "radial-gradient(circle, rgba(201,169,110,0.18), transparent 70%)",
          }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:gap-16 lg:px-8 ${
          section.image ? "lg:grid-cols-2" : ""
        }`}
      >
        {section.image && (
          <AnimatedPortraitFrame
            src={section.image}
            className={reverse ? "lg:order-2" : ""}
            aspect="aspect-[4/5]"
          />
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {section.eyebrow && (
            <span className="text-tagline text-xs text-revival-gold">
              {section.eyebrow}
            </span>
          )}
          <h2
            className={`mt-3 font-heading font-medium leading-[1.1] ${headingColor}`}
            style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)" }}
          >
            {section.heading}
          </h2>
          <div className={`mt-6 space-y-5 ${textColor}`}>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-base font-light leading-relaxed sm:text-lg">
                {p}
              </p>
            ))}
          </div>
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {section.bullets.map((b) => (
                <li
                  key={b}
                  className={`flex items-start gap-3 text-sm ${textColor}`}
                >
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-revival-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function PillarsGrid({
  eyebrow,
  heading,
  intro,
  pillars,
  tone = "light",
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  pillars: PillarBlock[];
  tone?: "light" | "dark" | "cream";
}) {
  const bg =
    tone === "dark"
      ? "bg-revival-dark text-white"
      : tone === "cream"
        ? "bg-revival-cream"
        : "bg-revival-warm-white";
  const cardBg =
    tone === "dark"
      ? "bg-white/[0.03] border-white/10"
      : "bg-white border-revival-gold/15";
  const textColor =
    tone === "dark" ? "text-revival-cream/80" : "text-revival-charcoal/80";
  const headingColor = tone === "dark" ? "text-white" : "text-revival-dark";

  return (
    <section className={`relative overflow-hidden ${bg} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <span className="text-tagline text-xs text-revival-gold">
              {eyebrow}
            </span>
          )}
          <h2
            className={`mt-3 font-heading font-medium leading-[1.1] ${headingColor}`}
            style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)" }}
          >
            {heading}
          </h2>
          {intro && (
            <p className={`mt-5 text-base font-light leading-relaxed sm:text-lg ${textColor}`}>
              {intro}
            </p>
          )}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                className={`group relative overflow-hidden rounded-[1.75rem] border p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${cardBg}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    tone === "dark"
                      ? "bg-revival-gold text-revival-dark"
                      : "bg-revival-dark text-revival-gold"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className={`mt-5 font-heading text-xl ${
                    tone === "dark" ? "text-white" : "text-revival-dark"
                  }`}
                >
                  {p.title}
                </h3>
                <p className={`mt-3 text-sm font-light leading-relaxed ${textColor}`}>
                  {p.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BenefitsList({
  eyebrow,
  heading,
  items,
  image,
  motionGraphic = false,
}: {
  eyebrow?: string;
  heading: string;
  items: string[];
  image?: string;
  /** When true (and no image is provided), renders the animated hormone motion graphic on the right. */
  motionGraphic?: boolean;
}) {
  const hasVisual = Boolean(image) || motionGraphic;

  return (
    <section className="relative overflow-hidden bg-revival-cream py-16 lg:py-24">
      <div
        className={
          "mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:gap-16 lg:px-8 " +
          (hasVisual ? "lg:grid-cols-[1.05fr_0.95fr]" : "")
        }
      >
        {image ? (
          <AnimatedPortraitFrame
            src={image}
            className="lg:order-1"
            aspect="aspect-[4/5]"
          />
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className={image ? "lg:order-2" : "lg:order-1"}
        >
          {eyebrow && (
            <span className="text-tagline text-xs text-revival-gold">
              {eyebrow}
            </span>
          )}
          <h2
            className="mt-3 font-heading font-medium leading-[1.1] text-revival-dark"
            style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)" }}
          >
            {heading}
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((it, i) => (
              <motion.li
                key={it}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: EASE }}
                className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm text-revival-charcoal/85 shadow-sm ring-1 ring-revival-gold/10"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-revival-gold to-revival-gold-light text-revival-dark">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                {it}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {motionGraphic && !image ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative lg:order-2"
          >
            <HormoneMotionGraphic />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="relative overflow-hidden bg-revival-warm-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-tagline text-xs text-revival-gold">
            Frequently Asked
          </span>
          <h2
            className="mt-3 font-heading font-medium leading-[1.1] text-revival-dark"
            style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)" }}
          >
            Common questions, straight answers
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-2xl border border-revival-gold/15 bg-white p-5 shadow-sm transition-all open:border-revival-gold/40 open:shadow-md sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base text-revival-dark sm:text-lg">
                {f.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-revival-gold/15 text-revival-gold transition-transform duration-300 group-open:rotate-45">
                  <span aria-hidden className="text-xl leading-none">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm font-light leading-relaxed text-revival-charcoal/80 sm:text-base">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedServices({
  items,
}: {
  items: { label: string; href: string; blurb: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-revival-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-tagline text-xs text-revival-gold">
            Explore
          </span>
          <h2
            className="mt-3 font-heading font-medium leading-[1.1] text-revival-dark"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
          >
            Related hormone services
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group relative overflow-hidden rounded-[1.75rem] border border-revival-gold/20 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-revival-gold/50 hover:shadow-xl"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-revival-gold to-revival-gold-light text-revival-dark">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-xl text-revival-dark">
                {it.label}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-revival-charcoal/75">
                {it.blurb}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-revival-gold">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
