"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  Award,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  Gift,
  HeartPulse,
  Lock,
  MapPin,
  Pause,
  Phone,
  Play,
  Plus,
  Route,
  Ruler,
  ScanLine,
  Sparkles,
  Star,
  Syringe,
  Timer,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import { telHref } from "@/lib/content/clinics";
import { TEAM } from "@/components/about/AboutSections";
import WeightlossLeadFormModal from "@/components/lp/WeightlossLeadFormModal";
import GoogleReviewsSection from "@/components/lp/GoogleReviewsSection";
import MapSection from "@/components/layout/MapSection";

const EASE = [0.22, 1, 0.36, 1] as const;
const PHONE = "(725) 241-0010";
const CTA_LABEL = "Claim My $79 Weight Loss Experience";
const CTA_SHORT = "$79 Offer";
const PROVIDER = TEAM.find((m) => m.name === "Sanaz Salmani")!;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};
const fadeContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const HERO_BULLETS = [
  "Styku 3D body scan included",
  "Comprehensive medical consultation",
  "Complimentary Lipolean injection",
  "A plan built around your body, not a generic diet",
];

const OFFER_TEASER = [
  "Comprehensive Wellness Consultation",
  "Styku 3D Body Scan",
  "Personalized Weight Loss Plan",
  "Complimentary Lipolean Injection",
];

const STATS = [
  { value: "500+", label: "Patients served" },
  { value: "16 lbs", label: "Average weight loss" },
  { value: "12 wks", label: "Typical program" },
  { value: "98%", label: "Would recommend" },
];

const INCLUDED_ITEMS = [
  "Comprehensive wellness consultation",
  "Styku 3D Body Scan",
  "Body fat percentage measurement",
  "Lean muscle mass measurement",
  "Circumference measurements",
  "Metabolic health baseline",
  "Personalized weight loss and wellness plan",
  "Complimentary Lipolean Fat Burner Injection",
];

const STEPS = [
  {
    title: "Reserve your $79 experience",
    time: "60 SECONDS",
    text: `Reserve your $79 Weight Loss Experience online or call/text ${PHONE}. Only five introductory-priced appointments are available.`,
    icon: Phone,
  },
  {
    title: "Complete your scan & consultation",
    time: "IN-OFFICE",
    text: "Get a full Styku 3D body scan and a comprehensive consultation with our medical team, plus a complimentary Lipolean injection the same visit.",
    icon: Timer,
  },
  {
    title: "Start your personalized plan",
    time: "SAME VISIT",
    text: "Leave with a custom weight loss and wellness plan built around your body, your goals, and your real schedule.",
    icon: Sparkles,
  },
];

const REASONS = [
  {
    icon: Award,
    title: "Licensed medical team",
    text: "Your plan is built and delivered by a licensed Las Vegas medical team, not a generic diet coach or fad program.",
  },
  {
    icon: Activity,
    title: "Styku 3D body scan technology",
    text: "See real, measurable changes in body fat, lean muscle, and circumference, far more than a bathroom scale can ever tell you.",
  },
  {
    icon: Route,
    title: "Personalized, not cookie-cutter",
    text: "Your plan is built around your body, your goals, and your real life, including night-shift schedules and irregular hours.",
  },
  {
    icon: Zap,
    title: "Pairs with GLP-1, Phentermine & vitamins",
    text: "Your personalized plan can pair with GLP-1 therapy, Phentermine, or vitamin injections for deeper, longer-lasting support.",
  },
  {
    icon: Lock,
    title: "No pressure, no contracts",
    text: "A transparent $79 introductory offer with zero obligation. You decide if and when you're ready to continue.",
  },
  {
    icon: MapPin,
    title: "Two convenient Las Vegas locations",
    text: "Choose our Summerlin/Northwest or Henderson/Southwest location for your appointment.",
  },
];

const FAQS = [
  {
    q: "What's included in the $79 Weight Loss Experience?",
    a: "A comprehensive wellness consultation, a Styku 3D body scan (body fat, lean muscle, and circumference measurements), a metabolic health baseline, a personalized weight loss and wellness plan, and a complimentary Lipolean Fat Burner Injection, a $250 value for $79.",
  },
  {
    q: "What is a Styku 3D body scan?",
    a: "Styku is a 3D body-scanning technology that measures body fat percentage, lean muscle mass, and circumference in minutes, giving you a complete picture of your body composition beyond what a scale alone can show.",
  },
  {
    q: "Is the Lipolean injection really included?",
    a: "Yes. Your $79 Weight Loss Experience includes a complimentary Lipolean Fat Burner Injection to help support metabolism and energy, at no extra cost.",
  },
  {
    q: "How is this different from a typical diet program?",
    a: "There's no generic meal plan or one-size-fits-all approach. Our medical team looks at your actual body composition and health baseline, then builds a personalized plan around your goals and your real-life schedule.",
  },
  {
    q: "How many of these $79 appointments are available?",
    a: "This introductory offer is limited to the first five new patients who click and schedule. Choose our Summerlin or Henderson area location to secure your spot.",
  },
  {
    q: "How do I claim the $79 offer?",
    a: `Click any "${CTA_LABEL}" button on this page or call/text ${PHONE} to reserve one of the five available appointments.`,
  },
];

function OfferBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-revival-gold/40 bg-revival-gold/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-revival-gold ${className}`}
    >
      <Gift className="h-3 w-3" />
      First 5 New Patients &middot; $79 Offer
    </span>
  );
}

/** Self-hosted Styku body-scan video with a custom play/pause overlay. */
function VideoCard({
  src,
  poster,
  aspect = "aspect-video",
  className = "",
}: {
  src: string;
  poster: string;
  aspect?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  return (
    <div className={`mx-auto w-full ${className}`}>
      <div
        onClick={toggle}
        className={`group relative ${aspect} cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-[0_40px_120px_-32px_rgba(0,0,0,0.6)]`}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />

        {!playing && (
          <>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 transition-opacity duration-300 group-hover:from-black/45"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-revival-gold text-revival-dark shadow-[0_20px_60px_-12px_rgba(201,169,110,0.6)] transition-transform duration-300 group-hover:scale-110">
                <span
                  aria-hidden
                  className="absolute inset-0 animate-ping rounded-full bg-revival-gold/40"
                />
                <Play className="relative ml-1 h-7 w-7 fill-current" strokeWidth={0} />
              </span>
            </span>
          </>
        )}

        {playing && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            aria-label="Pause video"
            className="absolute bottom-4 left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:border-revival-gold hover:bg-black/70 group-hover:opacity-100"
          >
            <Pause className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function WeightlossOfferLanding() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const openModal = () => setModalOpen(true);

  return (
    <>
      {/* ═══════════════════════ OFFER BAR ═══════════════════════ */}
      <div className="sticky top-16 z-40 overflow-hidden border-b border-revival-gold/25 bg-gradient-to-r from-revival-gold to-revival-gold-light py-2 text-revival-dark">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 text-center text-xs font-semibold uppercase tracking-[0.08em] sm:text-sm">
          <Gift className="h-3.5 w-3.5 shrink-0" />
          First 5 New Patients: $79 Weight Loss Experience
          <span className="hidden sm:inline">A $250 value</span>
          <button
            type="button"
            onClick={openModal}
            className="ml-1 cursor-pointer underline decoration-2 underline-offset-2 hover:no-underline"
          >
            Book now &rarr;
          </button>
        </div>
      </div>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden bg-revival-dark py-12 lg:py-16">
        <motion.div
          aria-hidden
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-revival-gold/15 blur-[160px]"
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#8a5a2b]/20 blur-[150px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]"
        />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
          <div>
            <div className="lp-reveal" style={{ "--reveal-delay": "0ms" } as React.CSSProperties}>
              <OfferBadge />
            </div>

            <h1
              className="lp-reveal mt-5 font-heading leading-[1.03] text-white"
              style={{
                fontSize: "clamp(2.4rem, 4.6vw, 3.75rem)",
                ["--reveal-delay" as string]: "100ms",
              }}
            >
              Lose weight. Get{" "}
              <span className="bg-gradient-to-r from-revival-gold to-revival-gold-light bg-clip-text italic text-transparent">
                real results.
              </span>
            </h1>

            <p
              className="lp-reveal mt-5 max-w-xl text-base font-light leading-relaxed text-revival-cream/80 sm:text-lg"
              style={{ ["--reveal-delay" as string]: "200ms" }}
            >
              The number on the scale doesn&apos;t tell the whole story. Our
              Revival Weight Loss Experience uses a Styku 3D body scan to
              measure body fat, lean muscle, and circumference, then builds a
              personalized plan around your body and your goals, with{" "}
              <span className="font-semibold text-revival-gold">
                zero cookie-cutter diets
              </span>
              .
            </p>

            <ul
              className="lp-reveal mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2"
              style={{ ["--reveal-delay" as string]: "300ms" }}
            >
              {HERO_BULLETS.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-sm font-medium text-revival-cream/90"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-revival-gold" />
                  {b}
                </li>
              ))}
            </ul>

            <div
              className="lp-reveal mt-8 flex flex-wrap items-center gap-3"
              style={{ ["--reveal-delay" as string]: "400ms" }}
            >
              <button
                type="button"
                onClick={openModal}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-revival-dark shadow-[0_14px_36px_-14px_rgba(201,169,110,0.7)] transition-transform duration-300 hover:scale-[1.03]"
              >
                <Gift className="h-4 w-4" />
                {CTA_LABEL}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <a
                href={telHref(PHONE)}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-medium text-revival-cream/90 transition-colors hover:border-revival-gold hover:text-revival-gold"
              >
                <Phone className="h-4 w-4 text-revival-gold" />
                {PHONE}
              </a>
            </div>

            <p
              className="lp-reveal mt-4 text-xs text-revival-cream/50"
              style={{ ["--reveal-delay" as string]: "500ms" }}
            >
              *$79 introductory offer available for the first 5 new patients. Limited appointments.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-revival-gold/25 bg-gradient-to-br from-revival-charcoal via-revival-dark to-black p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-revival-gold/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-revival-gold/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-revival-gold/40 bg-revival-gold/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-revival-gold">
                  <Sparkles className="h-3 w-3" />
                  Weight Loss Introductory Offer
                </span>
                <span className="rounded-full bg-revival-gold/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-revival-gold">
                  First 5 Only
                </span>
              </div>

              <div className="relative mt-6 text-center">
                <p className="font-heading text-[3.5rem] leading-none text-white sm:text-[4.5rem]">
                  <span className="bg-gradient-to-b from-white to-revival-gold-light bg-clip-text text-transparent">
                    $79
                  </span>
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-revival-cream/85">
                  <span className="mr-2 text-revival-cream/40 line-through">$250 value</span>
                  Weight Loss Experience
                </p>
                <p className="mt-1 text-xs text-revival-cream/55">
                  Consultation, Styku scan &amp; Lipolean injection included
                </p>
              </div>

              <ul className="relative mt-6 space-y-3 border-y border-white/10 py-5">
                {OFFER_TEASER.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-revival-cream/85"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-revival-gold" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={openModal}
                className="group relative mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-revival-dark shadow-[0_14px_36px_-14px_rgba(201,169,110,0.75)] transition-transform duration-300 hover:scale-[1.02]"
              >
                Reserve My Spot
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <p className="mt-3 text-center text-[0.7rem] uppercase tracking-[0.14em] text-revival-cream/50">
                Only 5 spots &middot; Book today
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          className="relative mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-[0.7rem] uppercase tracking-[0.14em] text-revival-cream/60 sm:text-xs"
        >
          <span className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-revival-gold text-revival-gold" />
            98% would recommend
          </span>
          <span className="flex items-center gap-1.5">
            <ScanLine className="h-3.5 w-3.5 text-revival-gold" />
            Styku 3D body scan
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-revival-gold" />
            500+ patients served
          </span>
          <span className="flex items-center gap-1.5">
            <UserCheck className="h-3.5 w-3.5 text-revival-gold" />
            Licensed medical providers
          </span>
        </motion.div>
      </section>

      {/* ═══════════════════════ BIG STATS ═══════════════════════ */}
      <section className="bg-revival-warm-white py-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-4xl text-revival-dark sm:text-5xl">
                <span className="bg-gradient-to-b from-revival-dark to-revival-charcoal bg-clip-text text-transparent">
                  {s.value}
                </span>
              </p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-revival-charcoal/70 sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ SAFETY / DIFFERENTIATION ═══════════════════════ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className="text-tagline text-xs text-revival-gold">
              Why It Matters
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-heading text-3xl leading-tight text-revival-dark sm:text-4xl lg:text-[2.75rem]"
            >
              Not all weight loss programs are{" "}
              <span className="bg-gradient-to-r from-revival-gold to-revival-gold-light bg-clip-text italic text-transparent">
                safe.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base font-light leading-relaxed text-revival-charcoal/80">
              Start with real measurements, professional guidance, and a plan
              built around you.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-base font-light leading-relaxed text-revival-charcoal/80">
              Too many weight loss programs hand out the same generic
              prescription to every patient. Ours starts with a Styku 3D body
              scan so we can see exactly how your body is composed, then a
              licensed medical provider builds a plan around those numbers,
              your goals, and your health history.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-8 space-y-4">
              {[
                { icon: ScanLine, text: "Styku 3D Body Scan" },
                { icon: ClipboardList, text: "Personalized Wellness Plan" },
                { icon: Syringe, text: "Complimentary Lipolean Injection" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-revival-gold/10">
                    <item.icon className="h-5 w-5 text-revival-gold" />
                  </span>
                  <span className="font-heading text-lg text-revival-dark">
                    {item.text}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.p variants={fadeUp} className="mt-6 text-sm font-light leading-relaxed text-revival-charcoal/70">
              Every plan is reviewed and prescribed by a licensed medical
              provider, not sold off a shelf, so what you get is effective
              and safe for your body.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-revival-dark shadow-[0_14px_36px_-14px_rgba(201,169,110,0.7)] transition-transform duration-300 hover:scale-[1.03]"
              >
                {CTA_LABEL}
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] border border-revival-gold/15 shadow-[0_40px_100px_-32px_rgba(15,15,15,0.2)] lg:max-w-none"
          >
            <Image
              src="/images/weight-loss/weight-loss-safety-photo-2.png"
              alt="Revival Health & Wellness provider holding a Styku 3D body scan tablet"
              width={1023}
              height={1537}
              sizes="(min-width: 1024px) 35vw, 60vw"
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ WHAT'S INCLUDED + IMAGE ═══════════════════════ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-revival-gold/25 bg-black shadow-[0_50px_120px_-32px_rgba(15,15,15,0.25)]">
              <div className="relative pt-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/bM3oJ3KsgxI?start=5&rel=0&modestbranding=1"
                  title="Medical weight loss at Revival Health & Wellness"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="order-1 lg:order-2"
          >
            <motion.span variants={fadeUp} className="text-tagline text-xs text-revival-gold">
              What&apos;s Included
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-heading text-3xl leading-tight text-revival-dark sm:text-4xl lg:text-[2.75rem]"
            >
              A complete weight loss experience, a $250 value for $79.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base font-light leading-relaxed text-revival-charcoal/80">
              This is not another cookie-cutter weight loss program. Your
              visit includes a full body composition analysis and a
              personalized plan built by our medical team.
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-2">
              {INCLUDED_ITEMS.map((b, i) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-revival-charcoal/80 sm:text-[0.95rem]"
                >
                  <span
                    aria-hidden
                    className="mt-1 font-heading text-xs italic text-revival-gold"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-8">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-revival-dark shadow-[0_14px_36px_-14px_rgba(201,169,110,0.7)] transition-transform duration-300 hover:scale-[1.03]"
              >
                {CTA_LABEL}
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ HOW IT WORKS + VIDEO ═══════════════════════ */}
      <section className="bg-revival-dark py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <motion.div
              variants={fadeContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.span variants={fadeUp} className="text-tagline text-xs text-revival-gold">
                How It Works
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-4 font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem]"
              >
                Styku 3D body scanning: real data, not guesswork.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-base font-light leading-relaxed text-revival-cream/75"
              >
                Every visit includes a Styku body scan, so you can see
                measurable changes in muscle, water, and fat, not just the
                number on the scale. It cannot show how much body fat has
                changed, whether lean muscle has increased, or why progress
                may have stalled, so we measure it directly instead.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-base font-light leading-relaxed text-revival-cream/75"
              >
                Your provider reviews the results with you during your
                consultation, then builds a personalized weight loss and
                wellness plan around what&apos;s actually happening inside
                your body.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-revival-dark shadow-[0_14px_36px_-14px_rgba(201,169,110,0.7)] transition-transform duration-300 hover:scale-[1.03]"
                >
                  Start My $79 Experience
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <VideoCard
                src="/videos/styku.mp4"
                poster="/videos/styku-poster.jpg"
                aspect="aspect-[9/16]"
                className="max-w-xs sm:max-w-sm"
              />
              <p className="mt-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-revival-cream/50">
                See The Styku 3D Body Scan
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ HOW IT WORKS: STEPS ═══════════════════════ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span variants={fadeUp} className="text-tagline text-xs text-revival-gold">
              Getting Started
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-heading text-3xl leading-tight text-revival-dark sm:text-4xl lg:text-[2.75rem]"
            >
              Three simple steps to real answers about your body.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm font-light text-revival-charcoal/70">
              No high-pressure sales pitch. No mystery fees. Just a clear path
              from &ldquo;I&rsquo;m interested&rdquo; to a plan you can actually follow.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="relative rounded-[1.5rem] border border-revival-gold/15 bg-revival-warm-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-revival-gold to-revival-gold-light font-heading text-lg font-semibold text-revival-dark">
                    {i + 1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-revival-charcoal/70">
                    <Clock className="h-3 w-3 text-revival-gold" />
                    {s.time}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl text-revival-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-revival-charcoal/75">
                  {s.text}
                </p>
                <s.icon className="absolute bottom-6 right-6 h-6 w-6 text-revival-gold/40" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ WHY REVIVAL / 6 REASONS ═══════════════════════ */}
      <section className="bg-revival-warm-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span variants={fadeUp} className="text-tagline text-xs text-revival-gold">
              Why Revival
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-heading text-3xl leading-tight text-revival-dark sm:text-4xl lg:text-[2.75rem]"
            >
              Six reasons Las Vegas locals trust us with this.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {REASONS.map((r) => (
              <motion.div
                key={r.title}
                variants={fadeUp}
                className="rounded-[1.25rem] border border-revival-gold/15 bg-white p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-revival-gold/10">
                  <r.icon className="h-5 w-5 text-revival-gold" />
                </span>
                <h3 className="mt-4 font-heading text-lg text-revival-dark">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-revival-charcoal/75">
                  {r.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ MEET THE TEAM ═══════════════════════ */}
      <section className="bg-revival-dark py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
          <div
            className="lp-reveal relative mx-auto w-full max-w-xs lg:max-w-none"
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-revival-gold/20 bg-white/[0.03] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]">
              <Image
                src={PROVIDER.image}
                alt={`${PROVIDER.name}, ${PROVIDER.role} at Revival Health & Wellness`}
                width={632}
                height={750}
                sizes="(min-width: 1024px) 35vw, 80vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <span
              className="lp-reveal text-tagline text-xs text-revival-gold"
              style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            >
              Meet The Team
            </span>
            <h2
              className="lp-reveal mt-4 font-heading text-3xl leading-tight text-white sm:text-4xl"
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              {PROVIDER.name}, {PROVIDER.role}
            </h2>
            <p
              className="lp-reveal mt-5 text-base font-light leading-relaxed text-revival-cream/75"
              style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
            >
              {PROVIDER.bio}
            </p>
            <div
              className="lp-reveal mt-8"
              style={{ "--reveal-delay": "400ms" } as React.CSSProperties}
            >
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-revival-dark shadow-[0_14px_36px_-14px_rgba(201,169,110,0.7)] transition-transform duration-300 hover:scale-[1.03]"
              >
                Book Your Consultation With {PROVIDER.name.split(" ")[0]}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ BEFORE / AFTER ═══════════════════════ */}
      <section className="relative overflow-clip bg-white py-14 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 text-center"
          >
            <p className="text-tagline text-[0.7rem] text-revival-gold">
              REAL RESULTS &middot; BEFORE &amp; AFTER
            </p>
            <h2 className="mt-3 font-heading text-3xl italic text-revival-dark sm:text-4xl lg:text-[2.75rem]">
              Real patients. Real transformations.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-revival-charcoal/80 sm:text-lg">
              A look at what a personalized weight loss plan can do, built
              around your body, your goals, and your schedule.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
          >
            <figure className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-revival-gold/20 bg-white shadow-xl">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/weight-loss/weightloss-before-after-1-v2.png"
                  alt="Revival Health & Wellness weight loss patient before and after, lost 26.3 pounds"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="border-t border-revival-gold/15 bg-revival-warm-white px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-revival-charcoal">
                Real Revival Patient &middot; Lost 26.3 lbs
              </figcaption>
            </figure>
            <figure className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-revival-gold/20 bg-white shadow-xl">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/weight-loss/weightloss-before-after-2-v2.png"
                  alt="Weight loss before and after transformation"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="border-t border-revival-gold/15 bg-revival-warm-white px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-revival-charcoal">
                Before &amp; After
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      <GoogleReviewsSection bgClassName="bg-revival-warm-white" treatment="Weight Loss" />

      {/* ═══════════════════════ LIMITED SPOTS ═══════════════════════ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="overflow-hidden rounded-[2rem] border border-revival-gold/20 bg-revival-dark p-8 text-center sm:p-12"
          >
            <motion.span variants={fadeUp} className="text-tagline text-xs text-revival-gold">
              Limited Time
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mx-auto mt-4 max-w-2xl font-heading text-3xl leading-tight text-white sm:text-4xl"
            >
              Only 5 introductory-priced appointments available.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-revival-cream/75"
            >
              Your $79 Weight Loss Experience comes with zero obligation,
              just real data about your body and a personalized plan built
              around your goals.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-revival-dark shadow-[0_14px_36px_-14px_rgba(201,169,110,0.75)] transition-transform duration-300 hover:scale-[1.03]"
              >
                Claim My $79 Offer
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <motion.span variants={fadeUp} className="text-tagline text-xs text-revival-gold">
              Good To Know
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-heading text-3xl leading-tight text-revival-dark sm:text-4xl lg:text-[2.75rem]"
            >
              Your questions, answered.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm font-light text-revival-charcoal/70">
              Still have questions? Call or text us at{" "}
              <a
                href={telHref(PHONE)}
                className="font-semibold text-revival-dark underline decoration-revival-gold/60 underline-offset-4 hover:text-revival-gold"
              >
                {PHONE}
              </a>
              .
            </motion.p>
          </motion.div>

          <div className="mt-10 divide-y divide-revival-gold/15 rounded-2xl border border-revival-gold/15 bg-revival-warm-white">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/60 sm:px-6"
                  >
                    <span className="font-heading text-base text-revival-dark sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-revival-gold/40 text-revival-gold transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="px-5 pb-5 text-sm font-light leading-relaxed text-revival-charcoal/75 sm:px-6">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MAP / LOCATIONS ═══════════════════════ */}
      <MapSection dark />

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="relative overflow-hidden bg-revival-dark py-16 lg:py-24">
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-revival-gold/15 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#8a5a2b]/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
        >
          <OfferBadge className="mx-auto" />
          <h2 className="mt-5 font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Real answers about your body.{" "}
            <span className="bg-gradient-to-r from-revival-gold to-revival-gold-light bg-clip-text italic text-transparent">
              Not another diet.
            </span>
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-revival-cream/80 sm:text-lg">
            A $250 value for $79, for the first 5 new patients who click and
            schedule. Comprehensive consultation, Styku 3D body scan, and a
            complimentary Lipolean injection included.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-9 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-revival-dark shadow-[0_18px_46px_-16px_rgba(201,169,110,0.75)] transition-transform duration-300 hover:scale-[1.04]"
            >
              {CTA_LABEL}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <a
              href={telHref(PHONE)}
              className="inline-flex items-center gap-2 text-sm font-medium text-revival-cream/90 transition-colors hover:text-revival-gold"
            >
              <Phone className="h-4 w-4 text-revival-gold" />
              Or call/text {PHONE}
            </a>
          </div>

          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-revival-cream/50">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              Henderson/SW &amp; Summerlin/NW
            </span>
            <span>*$79 offer limited to the first 5 new patients.</span>
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════ STICKY MOBILE CTA ═══════════════════════ */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-revival-gold/25 bg-revival-dark/95 p-3 backdrop-blur-xl lg:hidden">
        <a
          href={telHref(PHONE)}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-revival-gold"
          aria-label={`Call ${PHONE}`}
        >
          <Phone className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={openModal}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light text-sm font-semibold uppercase tracking-[0.08em] text-revival-dark"
        >
          {CTA_SHORT}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {/* Spacer so the sticky bar never covers content on mobile */}
      <div className="h-20 lg:hidden" aria-hidden />

      <WeightlossLeadFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
