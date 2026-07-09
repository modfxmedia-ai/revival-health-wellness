import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import MotionShowcase from "@/components/motion/MotionShowcase";
import HairIntroSection from "@/components/hair/HairIntroSection";

const TITLE = "Medical Hair Care & Restoration";
const PATH = "/hair/";
const DESCRIPTION =
  "Restore your confidence with medical hair care & restoration services in Las Vegas. Revival Health and Wellness offers proven ways to help your hair grow back.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  images: ["/images/hair/PRP-Treatment-for-Hair-Loss-Orlando.webp"],
});

const HAIR_SERVICES = [
  {
    label: "PRP Hair restoration",
    href: "/prp-hair-restoration/",
    image: "/images/hair/PRP-HAIR.jpg",
    blurb:
      "Stimulate natural hair growth with our PRP Hair Restoration treatment at Revival Health & Wellness. This advanced therapy strengthens thinning hair, revitalizes follicles, and helps restore a fuller, thicker, and healthier-looking head of hair over time. Perfect for those looking to regain confidence and improve hair density naturally.",
  },
  {
    label: "Finasteride",
    href: "/finasteride/",
    image: "/images/hair/PRP-Treatment-for-Hair-Loss-Orlando.webp",
    blurb:
      "Finasteride is a clinically proven treatment for hair loss that blocks the hormone causing thinning. It slows hair loss, strengthens existing hair, and promotes fuller, healthier growth—perfect for maintaining hair and boosting confidence naturally.",
  },
];

export default function HairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            serviceSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Hair", path: PATH },
            ]),
          ]),
        }}
      />

      <PageHero
        eyebrow="Hair"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hair" }]}
        title={
          <>
            <span className="relative inline-block italic text-revival-gold">
              Hair
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>
          </>
        }
        description="Revival Health and Wellness is here to help you with your medical hair care needs. Check out our hair services below."
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
        gallery={[
          "/images/hair/PRP-Treatment-for-Hair-Loss-Orlando.webp",
          "/images/hair/Luxury-Living-in-Dubai-South-3-e1756038721930.png",
        ]}
        compact
      />

      <HairIntroSection />

      <MotionShowcase
        tone="dark"
        eyebrow="How it works"
        heading="The science of hair restoration"
        body="Our medical hair program pairs two clinically proven approaches — PRP that reactivates dormant follicles from within, and Finasteride that blocks the hormone driving thinning. Together they build density from the root."
        centerIcon="sparkles"
        centerLabel="Hair Regrowth"
        orbitLabels={[
          "PRP separation",
          "Growth factors",
          "Follicle activation",
          "Denser regrowth",
        ]}
        cornerBadges={[
          { icon: "droplet", label: "Autologous PRP" },
          { icon: "shieldCheck", label: "Clinically proven" },
          { icon: "heartPulse", label: "Natural regrowth" },
        ]}
      />

      {/* Service strip — 2 cards */}
      <section className="relative overflow-hidden bg-revival-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent via-revival-gold to-revival-gold/60 sm:w-12" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-revival-gold sm:text-xs">
                Explore Our Hair Services
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent via-revival-gold to-revival-gold/60 sm:w-12" />
            </div>
            <h2
              className="font-heading font-light leading-[1.05] text-revival-dark"
              style={{
                fontSize: "clamp(2rem, 3.6vw, 3.15rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Two proven paths. One personalized plan.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {HAIR_SERVICES.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative flex aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-20px_rgba(15,15,15,0.4)]"
              >
                <Image
                  src={s.image}
                  alt={`${s.label} at Revival Health & Wellness`}
                  fill
                  sizes="(min-width: 640px) 48vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={90}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-revival-dark/95 via-revival-dark/60 to-transparent"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-revival-gold via-revival-gold/70 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="relative z-10 mt-auto flex flex-col p-6 text-white sm:p-8">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-heading text-2xl leading-tight sm:text-3xl">
                      {s.label}
                    </h3>
                    <span
                      aria-hidden
                      className="font-heading text-2xl italic leading-none text-revival-gold/70 sm:text-3xl"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-light leading-relaxed text-white/85 sm:text-[0.95rem]">
                    {s.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-revival-gold transition-transform group-hover:translate-x-1">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-revival-warm-white py-10 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs leading-relaxed text-revival-charcoal/55">
            * All patients have the option to obtain a prescription for the Brand
            Name medications listed on this page to be called in at the pharmacy
            of their choice. Please note a prescription for the Brand Name
            medications does not guarantee your insurance will cover this
            medication. All patients will be charged a monthly weight management
            fee for this service.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14 lg:px-8">
        <CTABanner
          title="Ready to restore your hair?"
          subtitle="Book a free consultation. Our medical team will design a plan for you."
        />
      </div>
    </>
  );
}
