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

const TITLE = "CoolPeel | Aesthetic Treatments in Las Vegas";
const PATH = "/coolpeel/";
// NOTE: The live /coolpeel/ page has a broken meta description referencing Viagra/sexual
// wellness (a leftover template error on the live site). Replaced with an accurate,
// CoolPeel-specific description here.
const DESCRIPTION =
  "Reveal smoother, healthier, younger-looking skin with CoolPeel® CO₂ laser in Las Vegas. Next-generation resurfacing on the Cartessa Deka Tetra Pro platform - dramatic results, minimal downtime.";

export const metadata = buildMetadata({
  title: "CoolPeel",
  description: DESCRIPTION,
  path: PATH,
  images: ["/images/coolpeel/1R1A7618-1024x683-1.jpg"],
});

const KEY_BENEFITS = [
  "Improves skin tone, texture, and tightness",
  "Reduces fine lines, wrinkles, and sun damage",
  "Shrinks the appearance of pores",
  "Stimulates natural collagen production",
  "Little to no downtime compared to traditional CO₂",
  "Safe for face, neck, chest, and hands",
];

const RIGHT_AFTER = [
  "Skin may feel warm and appear slightly red - like a mild sunburn",
  "No significant pain or peeling expected",
  "You’ll be able to return to most daily activities immediately",
];

const FIRST_WEEK = [
  "Slight dryness or rough texture may occur as your skin renews",
  "Redness usually fades within 1–3 days",
  "By day 7, skin appears noticeably brighter, smoother, and more even",
];

const FAQS = [
  {
    question: "What is CoolPeel®?",
    answer:
      "CoolPeel® is the next-generation CO₂ laser resurfacing that delivers powerful skin rejuvenation without the intensity or downtime of traditional lasers. Performed using the advanced Cartessa Deka Tetra Pro platform, CoolPeel is perfect for patients who want dramatic results - smoother texture, smaller pores, fewer wrinkles, and renewed radiance - with less redness and recovery time.",
  },
  {
    question: "Why choose CoolPeel?",
    answer:
      "Unlike traditional CO₂ lasers that often require a week or more of recovery, CoolPeel offers controlled precision and powerful results - without the heat damage that causes extended downtime.",
  },
  {
    question: "Can CoolPeel be customized?",
    answer:
      "Yes - with the DEKA pulse technology, our providers can fully customize your CO₂ treatment from a gentle refresh to a deeper resurfacing for stubborn lines, acne scars, and aging skin. Whether you need a light touch or dramatic renewal, Revival Health and Wellness has the right setting for you.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "For optimal results, we recommend a series of 3 CoolPeel sessions, spaced 4–6 weeks apart. This protocol delivers cumulative collagen remodeling, skin tightening, and long-term skin health benefits - with results that keep getting better over time.",
  },
];

export default function CoolPeelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            serviceSchema({ name: "CoolPeel® CO₂ Laser", description: DESCRIPTION, path: PATH }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Aesthetics", path: "/aesthetics/" },
              { name: "CoolPeel", path: PATH },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <PageHero
        eyebrow={"Aesthetics · CoolPeel®"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aesthetics", href: "/aesthetics/" },
          { label: "CoolPeel" },
        ]}
        title={
          <>
            <span className="relative inline-block italic text-revival-gold">
              CoolPeel
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>
          </>
        }
        description="Reveal smoother, healthier, younger-looking skin - with little to no downtime. Powered by the advanced Cartessa Deka Tetra Pro platform."
        gallery={[
          "/images/coolpeel/1R1A7618-1024x683-1.jpg",
          "/images/coolpeel/Uptown-Medical-Aesthetics-Coolpeel.webp",
        ]}
        compact
      />

      <OverviewBlock
        section={{
          eyebrow: "CoolPeel® CO₂ Laser at Revival Health and Wellness",
          heading:
            "Reveal smoother, younger-looking skin - without the downtime",
          paragraphs: [
            "The CoolPeel® treatment is the next-generation CO₂ laser resurfacing that delivers powerful skin rejuvenation without the intensity or downtime of traditional lasers.",
            "Performed using the advanced Cartessa Deka Tetra Pro platform, CoolPeel is perfect for patients who want dramatic results - smoother texture, smaller pores, fewer wrinkles, and renewed radiance - with less redness and recovery time.",
          ],
          image: "/images/coolpeel/Uptown-Medical-Aesthetics-Coolpeel.webp",
          imageAspect: "portrait",
        }}
      />

      <OverviewBlock
        tone="cream"
        reverse
        section={{
          eyebrow: "Why Choose CoolPeel?",
          heading: "Controlled precision. Powerful results. No downtime.",
          paragraphs: [
            "Unlike traditional CO₂ lasers that often require a week or more of recovery, CoolPeel offers controlled precision and powerful results - without the heat damage that causes extended downtime.",
          ],
          image: "/images/coolpeel/1R1A7618-1024x683-1.jpg",
          imageAspect: "landscape",
        }}
      />

      <BenefitsList
        eyebrow={"Key Benefits of CoolPeel®"}
        heading="What CoolPeel can do for you"
        items={KEY_BENEFITS}
      />

      <BenefitsList
        eyebrow="What to Expect (Right After)"
        heading="The first few hours"
        items={RIGHT_AFTER}
      />

      <BenefitsList
        eyebrow="Over the First Week"
        heading="How your skin transforms"
        items={FIRST_WEEK}
      />

      <OverviewBlock
        section={{
          eyebrow: "DEKA Pulse Technology",
          heading:
            "Mild, moderate, or aggressive CO₂ - tailored to you",
          paragraphs: [
            "With the DEKA pulse technology, our providers can fully customize your CO₂ treatment from a gentle refresh to a deeper resurfacing for stubborn lines, acne scars, and aging skin. Whether you need a light touch or dramatic renewal, Revival Health and Wellness has the right setting for you.",
          ],
        }}
      />

      <OverviewBlock
        tone="cream"
        section={{
          eyebrow: "The Power of a CoolPeel Series",
          heading: "3 sessions, 4–6 weeks apart",
          paragraphs: [
            "For optimal results, we recommend a series of 3 CoolPeel sessions, spaced 4–6 weeks apart. This protocol delivers cumulative collagen remodeling, skin tightening, and long-term skin health benefits - with results that keep getting better over time.",
          ],
        }}
      />

      <FAQSection faqs={FAQS} />

      <RelatedServices
        items={[
          {
            label: "CoolPeel® Laser (details)",
            href: "/coolpeel-laser/",
            blurb:
              "Deep-dive on CoolPeel® - benefits, timing, and before/after gallery.",
          },
          {
            label: "Deka Tetra Pro CO2 Laser",
            href: "/tetra-pro-co2-laser/",
            blurb:
              "The powerhouse sibling - deeper resurfacing on the same Cartessa platform for dramatic transformation.",
          },
          {
            label: "CO2 Laser Treatments",
            href: "/co2-laser-treatments/",
            blurb:
              "The complete overview - CoolPeel vs. Deka Tetra Pro side-by-side comparison.",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14 lg:px-8">
        <CTABanner
          title="Let’s get you glowing"
          subtitle="Ready to experience one of the most effective skin resurfacing treatments - with minimal downtime? Book your personalized CoolPeel consultation today and discover what true skin renewal feels like."
        />
      </div>
    </>
  );
}
