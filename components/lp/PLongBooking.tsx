"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import {
  CalendarClock,
  CheckCircle2,
  Lock,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { CLINICS, telHref } from "@/lib/content/clinics";

const CALENDAR_ID = "DJzvMy6qqnReRTFdwcpC";
const PHONE = CLINICS[0].phones[0];

/**
 * Client-side booking page for /lp/p-long/book/. Embeds the LeadConnector
 * (GoHighLevel) calendar iframe and listens for the widget's post-booking
 * messages to route to the shared /lp/p-long/thank-you/ confirmation page.
 *
 * LeadConnector's calendar widget posts a variety of messages from
 * link.msgsndr.com / leadconnectorhq.com origins during and after a
 * booking. We match on any message from those origins whose payload
 * mentions booking/appointment + success/confirmation, which reliably
 * fires after a completed booking without misfiring on interim
 * time-select events.
 */
export default function PLongBooking() {
  const router = useRouter();

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const origin = e.origin || "";
      const trusted =
        origin.includes("leadconnectorhq.com") ||
        origin.includes("msgsndr.com");
      if (!trusted) return;

      const raw =
        typeof e.data === "string" ? e.data : JSON.stringify(e.data ?? "");
      const s = raw.toLowerCase();

      const isBookingEvent =
        s.includes("appointment") ||
        s.includes("booking") ||
        s.includes("booked") ||
        s.includes("scheduled");
      const isSuccess =
        s.includes("success") ||
        s.includes("confirm") ||
        s.includes("complete");

      if (isBookingEvent && isSuccess) {
        router.push("/lp/p-long/thank-you/");
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [router]);

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

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
