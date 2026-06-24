import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatsCounter from "@/components/ui/StatsCounter";
import CTABanner from "@/components/ui/CTABanner";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Revival Health & Wellness — our mission, our physician-led team, and our concierge approach to modern health and aesthetics.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
            ]),
          ),
        }}
      />
      <section className="bg-revival-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-revival-gold">
            About Revival
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl text-revival-dark md:text-5xl">
            Helping you look, feel, and live better
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-revival-charcoal/80">
            Revival Health &amp; Wellness was founded on a simple idea: that
            modern medicine and aesthetics should work together to treat the
            whole person. Our providers combine clinical expertise with a
            concierge experience to deliver results that last.
          </p>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <StatsCounter value={15} suffix="k+" label="Patients Served" />
          <StatsCounter value={40} suffix="+" label="Treatments Offered" />
          <StatsCounter value={98} suffix="%" label="Would Recommend" />
        </div>
      </AnimatedSection>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTABanner />
      </div>
    </>
  );
}
