"use client";

import Script from "next/script";
import {
  CalendarClock,
  CheckCircle2,
  Lock,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { telHref } from "@/lib/content/clinics";
import MapSection from "@/components/layout/MapSection";

const CALENDAR_ID = "DJzvMy6qqnReRTFdwcpC";
const PHONE = "+1 725-334-7214";

const TESTIMONIALS = [
  {
    quote:
      "I was skeptical, but the free consultation had zero pressure. Six months later, my length is up nearly an inch and my confidence is back for the first time in years.",
    author: "Michael R.",
    initials: "MR",
    city: "Las Vegas, NV",
    tag: "Length gain",
  },
  {
    quote:
      "I looked at surgery. Once I heard the risks, I found Revival's P-Long protocol. No scalpel, no downtime, and real, measurable results. Best decision I've made.",
    author: "Jason T.",
    initials: "JT",
    city: "Henderson, NV",
    tag: "Non-surgical",
  },
  {
    quote:
      "The team treated me like family. Private, professional, and honest about what to expect. My girth improved and so did my erections. Worth every second.",
    author: "David L.",
    initials: "DL",
    city: "Summerlin, NV",
    tag: "Girth & performance",
  },
];

/**
 * Client-side booking page for /lp/p-long/book/. Embeds the LeadConnector
 * (GoHighLevel) calendar directly - booking confirmation happens inside
 * the calendar widget itself, so there's no separate thank-you redirect.
 */
export default function PLongBooking() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden bg-revival-dark py-12 lg:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-revival-gold/15 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#8a5a2b]/20 blur-[140px]"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-revival-gold/40 bg-revival-gold/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-revival-gold">
            <CalendarClock className="h-3 w-3" />
            Book Your Free Consultation
          </span>
          <h1
            className="mt-5 font-heading leading-[1.05] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Pick a time that{" "}
            <span className="bg-gradient-to-r from-revival-gold to-revival-gold-light bg-clip-text italic text-transparent">
              works for you.
            </span>
          </h1>
          <p className="mt-5 text-base font-light leading-relaxed text-revival-cream/80 sm:text-lg">
            Reserve your free, confidential P-Long<sup>&reg;</sup>{" "}
            consultation with our medical team. Same-week appointments almost
            always available.
          </p>

          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-revival-cream/70">
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-revival-gold" />
              Licensed medical providers
            </li>
            <li className="flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-revival-gold" />
              100% confidential
            </li>
            <li className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-revival-gold text-revival-gold" />
              4.9 / 5 patient rating
            </li>
          </ul>
        </div>
      </section>

      {/* ═══════════════════════ CALENDAR ═══════════════════════ */}
      <section className="bg-revival-warm-white py-10 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[1.75rem] border border-revival-gold/25 bg-white p-3 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)] sm:p-4">
            <div
              className="relative"
              style={{ minHeight: 900 }}
            >
              <iframe
                src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
                allow="payment"
                scrolling="no"
                id={`${CALENDAR_ID}_1786037400874`}
                title="Book your P-Long consultation"
                style={{
                  width: "100%",
                  minHeight: 900,
                  border: "none",
                  overflow: "hidden",
                  borderRadius: 12,
                }}
              />
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-revival-charcoal/60">
              Prefer to talk to a human?
            </p>
            <a
              href={telHref(PHONE)}
              className="inline-flex items-center gap-2 rounded-full border border-revival-gold/50 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-revival-dark transition-colors hover:border-revival-gold hover:bg-revival-gold/10"
            >
              <Phone className="h-4 w-4 text-revival-gold" />
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ REASSURANCE ═══════════════════════ */}
      <section className="bg-revival-dark py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                title: "Free & no obligation",
                text: "There's no cost, no pressure, and no obligation to move forward.",
              },
              {
                title: "100% confidential",
                text: "Private rooms, discreet billing, and providers you can trust.",
              },
              {
                title: "Clinically proven",
                text: "The P-Long\u00ae Protocol is the first clinically studied protocol of its kind.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <CheckCircle2 className="h-5 w-5 text-revival-gold" />
                <p className="mt-3 font-heading text-base text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-sm font-light leading-relaxed text-revival-cream/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
      <section className="bg-revival-warm-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-tagline text-xs text-revival-gold">
              Real Stories
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-revival-dark sm:text-4xl lg:text-[2.75rem]">
              Real stories from real Las Vegas patients.
            </h2>
            <p className="mt-4 text-sm font-light text-revival-charcoal/70">
              These visits started with the same free consultation you&apos;re
              booking now.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                className="flex h-full flex-col rounded-[1.5rem] border border-revival-gold/20 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-revival-gold text-revival-gold"
                      />
                    ))}
                  </span>
                  <span className="rounded-full bg-revival-gold/15 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-revival-gold">
                    {t.tag}
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 text-sm font-light italic leading-relaxed text-revival-charcoal/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-revival-dark/10 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-revival-gold to-revival-gold-light font-heading text-sm font-semibold text-revival-dark">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-revival-dark">{t.author}</p>
                    <p className="text-[0.7rem] uppercase tracking-[0.14em] text-revival-charcoal/60">
                      {t.city}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MAP / LOCATIONS ═══════════════════════ */}
      <MapSection dark />

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
