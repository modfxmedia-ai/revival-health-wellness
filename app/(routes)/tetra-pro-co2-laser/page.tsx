import { buildMetadata } from "@/lib/metadata";
import {
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
  jsonLd,
} from "@/lib/schema";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import {
  OverviewBlock,
  BenefitsList,
  FAQSection,
  RelatedServices,
} from "@/components/templates/HormoneSections";

const TITLE = "Tetra Pro CO2 Laser Treatments";
const PATH = "/tetra-pro-co2-laser/";
const DESCRIPTION =
  "Smooth your skin with the Tetra Pro CO2 laser. Revival Health and Wellness uses this precise technology to treat aging skin and large pores with total customization.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  images: ["/images/tetra-pro-co2-laser/coolpeel-patient-treatment.jpg"],
});

const BENEFITS = [
  "Smooth deep wrinkles and creases",
  "Improve acne scars and surgical scars",
  "Tighten loose or sagging skin",
  "Repair sun damage and hyperpigmentation",
  "Stimulate collagen for long-term skin health",
  "Customizable for mild to intensive treatments",
];

const CANDIDATES = [
  "A powerful anti-aging solution",
  "Improvement in skin laxity and deep wrinkles",
  "Correction of scars or uneven texture",
  "Long-lasting rejuvenation with one comprehensive treatment",
];

const FAQS = [
  {
    question: "What is the Tetra Pro CO2 laser?",
    answer:
      "The Tetra Pro is the most powerful and customizable CO2 resurfacing treatment available at Revival Health and Wellness. It targets deeper layers of the skin, repairing years of damage and stimulating collagen for lasting improvements in texture, tone, and firmness.",
  },
  {
    question: "How long does a Tetra Pro treatment take?",
    answer:
      "Treatment time is 30–60 minutes depending on the area being treated and the intensity level selected by your provider.",
  },
  {
    question: "Will I need numbing or anesthesia?",
    answer:
      "A numbing cream or anesthesia may be used depending on the depth of treatment. Your provider will discuss the right approach for your comfort during your consultation.",
  },
  {
    question: "What is downtime like?",
    answer:
      "Downtime typically ranges from 3–10 days depending on the intensity of your treatment. Lighter settings mean shorter recovery; deeper settings mean more dramatic transformation with more redness and peeling.",
  },
  {
    question: "When will I see results?",
    answer:
      "Most patients notice an immediate glow, with progressive improvements as collagen rebuilds over the following 3–6 months.",
  },
];

export default function TetraProCo2LaserPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            serviceSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Aesthetics", path: "/aesthetics/" },
              { name: "Tetra Pro CO2 Laser", path: PATH },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <PageHero
        eyebrow={"Aesthetics · Tetra Pro CO₂ Laser"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aesthetics", href: "/aesthetics/" },
          { label: "Tetra Pro" },
        ]}
        title={
          <>
            <span className="relative inline-block italic text-revival-gold">
              Tetra Pro
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>{" "}
            CO2 Laser
          </>
        }
        description="Advanced resurfacing. Transformative results. The most powerful and customizable CO2 resurfacing treatment available at Revival Health and Wellness."
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
        gallery={[
          "/images/tetra-pro-co2-laser/coolpeel-patient-treatment.jpg",
          "/images/tetra-pro-co2-laser/Image_20250905_080311_234.jpeg",
        ]}
        compact
      />

      <OverviewBlock
        section={{
          eyebrow: "Benefits of Tetra Pro",
          heading: "Advanced Resurfacing. Transformative Results.",
          paragraphs: [
            "For patients seeking dramatic rejuvenation, the Tetra Pro CO2 laser is the most powerful and customizable resurfacing treatment available at Revival Health and Wellness.",
            "The Tetra Pro system allows us to target deeper layers of the skin, repairing years of damage and stimulating collagen for lasting improvements in texture, tone, and firmness.",
          ],
          image: "/images/tetra-pro-co2-laser/IMG_9766.jpg",
          bullets: BENEFITS,
        }}
      />

      <OverviewBlock
        tone="cream"
        reverse
        section={{
          eyebrow: "In-treatment",
          heading: "The Cartessa Tetra Pro platform",
          paragraphs: [
            "The same DEKA-powered CO2 platform used for CoolPeel®, dialed up for deeper, more transformative resurfacing. Fully customizable from a light refresh to intensive renewal.",
          ],
          image: "/images/tetra-pro-co2-laser/Image_20250905_080311_234.jpeg",
          imageAspect: "landscape",
        }}
      />

      <OverviewBlock
        tone="cream"
        reverse
        section={{
          eyebrow: "What to Expect",
          heading: "Your Tetra Pro session, start to finish",
          paragraphs: [
            "Treatment time: 30–60 minutes. Comfort: numbing cream or anesthesia may be used depending on treatment depth.",
            "Downtime ranges from 3–10 days depending on intensity. Results appear as an immediate glow with progressive improvements as collagen rebuilds over 3–6 months.",
          ],
        }}
      />

      <BenefitsList
        eyebrow="Is Tetra Pro Right for Me?"
        heading="Tetra Pro is ideal for those who want:"
        items={CANDIDATES}
      />

      <FAQSection faqs={FAQS} />

      <RelatedServices
        items={[
          {
            label: "CoolPeel® Laser",
            href: "/coolpeel-laser/",
            blurb:
              "The lighter cousin of Tetra Pro — same Cartessa CO2 platform with minimal downtime for a quick skin refresh.",
          },
          {
            label: "CO2 Laser Treatments",
            href: "/co2-laser-treatments/",
            blurb:
              "The complete overview of our CO2 laser offering — CoolPeel® vs. Tetra Pro side-by-side.",
          },
          {
            label: "Everesse RF Skin Tightening",
            href: "/everesse-rf-skin-tightening-and-rejuvenation/",
            blurb:
              "Pair Tetra Pro with monopolar RF for our exclusive Radiant Lift protocol — surface renewal plus deep tightening.",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14 lg:px-8">
        <CTABanner
          title="Book your Tetra Pro consultation"
          subtitle="Experience the ultimate in skin renewal. Schedule your consultation at Revival Health and Wellness today."
        />
      </div>
    </>
  );
}
