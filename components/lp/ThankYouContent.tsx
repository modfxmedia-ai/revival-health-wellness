"use client";

import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { CLINICS, telHref } from "@/lib/content/clinics";

const EASE = [0.22, 1, 0.36, 1] as const;
const PHONE = CLINICS[0].phones[0];

const NEXT_STEPS = [
  {
    icon: Phone,
    title: "We'll call you shortly",
    text: "A member of our medical team will reach out within 1 business day to confirm your details.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule your visit",
    text: "We'll find a same-week appointment time that works for your schedule.",
  },
  {
    icon: Sparkles,
    title: "Meet your provider",
    text: "Your free, confidential consultation covers your goals and a personalized P-Long\u00ae plan.",
  },
];

/** Thank-you page shown after the P-Long lead form is submitted. */
export default function ThankYouContent() {
  return (
    <section className="relative overflow-hidden bg-revival-dark py-20 lg:py-32">
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-revival-gold/15 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-revival-gold/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-revival-gold/10"
        >
          <CheckCircle2 className="h-10 w-10 text-revival-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mt-7 font-heading text-3xl text-white sm:text-4xl"
        >
          You&apos;re all set, thank you!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
          className="mt-4 text-lg font-light leading-relaxed text-revival-cream/75"
        >
          Your request for a free, confidential P-Long&reg; consultation has{" "}
          been received. Here&apos;s what happens next.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
          className="mt-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-3"
        >
          {NEXT_STEPS.map((step) => (
            <motion.div
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="rounded-2xl border border-revival-gold/20 bg-white/[0.03] p-6"
            >
              <step.icon className="h-6 w-6 text-revival-gold" />
              <h3 className="mt-4 font-heading text-lg text-white">{step.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-revival-cream/70">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-sm text-revival-cream/60">
            Need to reach us sooner? Call us directly:
          </p>
          <a
            href={telHref(PHONE)}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-revival-dark shadow-[0_14px_36px_-14px_rgba(201,169,110,0.7)] transition-transform hover:scale-[1.04]"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
