"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Sparkles, Phone, Mail, ShieldCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const TOPICS = [
  "Weight Loss",
  "Hormone Therapy",
  "Sexual Wellness",
  "Aesthetics",
  "IV Hydration",
  "Something else",
];

export default function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [topic, setTopic] = useState(TOPICS[0]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    try {
      // TODO: wire up to your backend / email service. Simulated success:
      await new Promise((r) => setTimeout(r, 700));
      void data;
      setStatus("sent");
      e.currentTarget.reset();
      setTopic(TOPICS[0]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="ask-us"
      className="relative overflow-hidden bg-revival-warm-white py-16 lg:py-28"
    >
      {/* ambiance */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-[26rem] w-[26rem] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.22), transparent 70%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(138,90,43,0.18), transparent 70%)",
        }}
        animate={{ x: [0, -40, 0], y: [0, -20, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        {/* Left: copy + trust points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-revival-gold/30 bg-white/70 px-4 py-1.5 text-tagline text-xs text-revival-gold shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Ask Us Anything
          </span>
          <h2
            className="mt-5 font-heading font-medium leading-[1.1] text-revival-dark"
            style={{ fontSize: "clamp(2rem, 3.4vw, 3rem)" }}
          >
            Have a question?{" "}
            <span className="bg-gradient-to-r from-[#8a5a2b] via-revival-gold to-[#e8d5b0] bg-clip-text italic text-transparent">
              We&apos;ll answer.
            </span>
          </h2>
          <p className="mt-5 max-w-md text-lg font-light leading-relaxed text-revival-charcoal/85">
            Tell us a little about what you&apos;re hoping to work on, and a
            member of our medical team will reach out with next steps.
            Consultations are always complimentary.
          </p>

          <ul className="mt-8 space-y-3.5 text-sm">
            {[
              { icon: ShieldCheck, text: "100% confidential—no obligation" },
              { icon: CheckCircle2, text: "Response from a real provider within 1 business day" },
              { icon: Sparkles, text: "Personalized recommendations based on your goals" },
            ].map((row) => (
              <li key={row.text} className="flex items-start gap-3 text-revival-charcoal/85">
                <row.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-revival-gold" />
                {row.text}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="tel:7029631154"
              className="inline-flex items-center gap-2 text-sm font-medium text-revival-dark transition-colors hover:text-revival-gold"
            >
              <Phone className="h-4 w-4 text-revival-gold" />
              (702) 963-1154
            </a>
            <span aria-hidden className="hidden h-4 w-px bg-revival-dark/15 sm:block" />
            <a
              href="mailto:info@revivalhealthandwellnessgroup.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-revival-dark transition-colors hover:text-revival-gold"
            >
              <Mail className="h-4 w-4 text-revival-gold" />
              info@revivalhealthandwellnessgroup.com
            </a>
          </div>
        </motion.div>

        {/* Right: form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
          className="relative rounded-[2rem] bg-white p-6 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)] ring-1 ring-revival-gold/15 sm:p-8"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-revival-gold/25 via-transparent to-transparent p-[1px] [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude]"
          />

          <form onSubmit={onSubmit} className="relative space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="First name"
                name="firstName"
                autoComplete="given-name"
                required
              />
              <Field
                label="Last name"
                name="lastName"
                autoComplete="family-name"
                required
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-revival-charcoal/70">
                What can we help with?
              </label>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((t) => {
                  const selected = topic === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      className={
                        "rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 " +
                        (selected
                          ? "bg-revival-dark text-revival-gold-light shadow-sm"
                          : "border border-revival-dark/10 bg-white text-revival-charcoal/70 hover:border-revival-gold/40 hover:text-revival-dark")
                      }
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="topic" value={topic} />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-revival-charcoal/70"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your goals or any questions you have…"
                className="w-full resize-none rounded-2xl border border-revival-dark/10 bg-white px-4 py-3 text-sm text-revival-dark placeholder:text-revival-charcoal/40 focus:border-revival-gold focus:outline-none focus:ring-2 focus:ring-revival-gold/25"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-revival-dark/20 text-revival-gold focus:ring-revival-gold"
              />
              <label
                htmlFor="consent"
                className="text-xs font-light leading-relaxed text-revival-charcoal/70"
              >
                I agree to be contacted by Revival Health &amp; Wellness regarding
                my inquiry. Standard messaging rates may apply.
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-revival-dark shadow-[0_10px_30px_-10px_rgba(201,169,110,0.7)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              {status === "sent" ? (
                <>
                  <CheckCircle2 className="relative h-4 w-4" />
                  <span className="relative">Thanks—message sent!</span>
                </>
              ) : status === "loading" ? (
                <span className="relative">Sending…</span>
              ) : (
                <>
                  <Send className="relative h-4 w-4" />
                  <span className="relative">Send Message</span>
                </>
              )}
            </button>

            {status === "error" ? (
              <p className="text-sm text-red-600">
                Something went wrong. Please call us or try again in a moment.
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-revival-charcoal/70">
        {label}
        {required ? <span className="text-revival-gold"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-2xl border border-revival-dark/10 bg-white px-4 py-3 text-sm text-revival-dark placeholder:text-revival-charcoal/40 focus:border-revival-gold focus:outline-none focus:ring-2 focus:ring-revival-gold/25"
      />
    </label>
  );
}
