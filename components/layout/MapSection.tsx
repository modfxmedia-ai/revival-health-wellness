"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Navigation } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Location = {
  name: string;
  address: string;
  phone: string;
  mapHref: string;
  embed: string;
};

const LOCATIONS: Location[] = [
  {
    name: "Henderson / Southwest",
    address: "7220 S. Cimarron Road, Suite #140, Las Vegas, NV 89113",
    phone: "(702) 963-1154",
    mapHref:
      "https://www.google.com/maps/place/Revival+Health+and+Wellness/@36.0569688,-115.2693326,15z/",
    embed:
      "https://www.google.com/maps?q=7220+S+Cimarron+Road+Suite+140+Las+Vegas+NV+89113&output=embed",
  },
  {
    name: "Summerlin / Northwest",
    address: "2585 Box Canyon Drive, Suite #150, Las Vegas, NV 89128",
    phone: "(702) 725-1588",
    mapHref:
      "https://www.google.com/maps/dir//2585+Box+Canyon+Dr+Suite+150+Las+Vegas,+NV+89128/",
    embed:
      "https://www.google.com/maps?q=2585+Box+Canyon+Drive+Suite+150+Las+Vegas+NV+89128&output=embed",
  },
];

export default function MapSection() {
  const [active, setActive] = useState(0);
  const loc = LOCATIONS[active];

  return (
    <section className="relative overflow-hidden bg-revival-warm-white py-14 lg:py-16">
      {/* drifting gold ambiance */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.22), transparent 70%)",
        }}
        animate={{ x: [0, -30, 0], y: [0, 24, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: heading + location switcher */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-revival-gold/30 bg-white/70 px-4 py-1.5 text-tagline text-xs text-revival-gold shadow-sm backdrop-blur">
              <MapPin className="h-3.5 w-3.5" />
              Visit Us
            </span>
            <h2
              className="mt-4 text-revival-dark"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.1 }}
            >
              Two Las Vegas{" "}
              <span className="bg-gradient-to-r from-[#8a5a2b] via-revival-gold to-[#e8d5b0] bg-clip-text text-transparent">
                locations
              </span>
            </h2>

            <div className="mt-6 space-y-3">
              {LOCATIONS.map((l, i) => {
                const selected = i === active;
                return (
                  <button
                    key={l.name}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group relative flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-colors duration-300 ${
                      selected
                        ? "border-revival-gold/40 bg-white shadow-lg"
                        : "border-revival-dark/10 bg-white/50 hover:border-revival-gold/30 hover:bg-white/80"
                    }`}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="map-active"
                        aria-hidden
                        className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-revival-gold to-[#8a5a2b]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                        selected
                          ? "bg-gradient-to-br from-revival-gold to-[#8a5a2b] text-white"
                          : "bg-revival-gold/10 text-revival-gold"
                      }`}
                    >
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-heading text-base font-medium text-revival-dark">
                        {l.name}
                      </span>
                      <span className="mt-0.5 block text-sm font-light leading-snug text-revival-dark/60">
                        {l.address}
                      </span>
                      <a
                        href={`tel:${l.phone.replace(/[^\d]/g, "")}`}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-revival-gold transition-colors hover:text-[#8a5a2b]"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        {l.phone}
                      </a>
                    </span>
                  </button>
                );
              })}
            </div>

            <a
              href={loc.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-revival-dark px-6 py-3 text-sm font-medium text-revival-warm-white transition-colors hover:bg-revival-charcoal"
            >
              <Navigation className="h-4 w-4 text-revival-gold transition-transform duration-300 group-hover:rotate-45" />
              Get Directions
            </a>
          </motion.div>

          {/* Right: animated map frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative min-h-[280px] overflow-hidden rounded-3xl border border-revival-gold/20 shadow-2xl ring-1 ring-black/5 lg:min-h-0"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 rounded-3xl ring-1 ring-inset ring-white/10"
            />
            <AnimatePresence mode="wait">
              <motion.iframe
                key={active}
                title={`Map of ${loc.name}`}
                src={loc.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0 h-full w-full grayscale-[0.2] [filter:sepia(0.12)_grayscale(0.2)]"
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
