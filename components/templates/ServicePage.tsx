import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABanner from "@/components/ui/CTABanner";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle2 } from "lucide-react";

export type ServicePageProps = {
  /** Eyebrow label above the title (e.g. category). */
  eyebrow: string;
  title: string;
  intro: string;
  /** Bullet points describing benefits / what's included. */
  highlights?: string[];
};

/**
 * Shared layout for service / treatment landing pages. Provides a hero,
 * highlights, an overview block, and a closing CTA. Replace placeholder copy
 * with real content per service.
 */
export default function ServicePage({
  eyebrow,
  title,
  intro,
  highlights = [
    "Personalized treatment plans built around your goals",
    "Physician-led, evidence-based protocols",
    "Comfortable, discreet, concierge-level care",
    "In-clinic and telehealth options available",
  ],
}: ServicePageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: eyebrow }]}
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
        compact
      />

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-revival-gold-light/50 to-revival-gold/20">
            <div className="absolute inset-0 flex items-center justify-center text-revival-charcoal/40">
              <span className="font-serif text-xl">Treatment imagery</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-revival-dark">What to expect</h2>
            <p className="mt-4 text-revival-charcoal/80">
              Our team will guide you through every step, from your initial
              consultation and personalized plan to treatment and ongoing
              support. Here&apos;s what sets this experience apart:
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-revival-gold" />
                  <span className="text-revival-charcoal/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTABanner />
      </div>
    </>
  );
}
