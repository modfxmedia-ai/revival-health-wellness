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

const TITLE = "Under Eye & Tear Trough Care";
const PATH = "/under-eye-treatment/";
const DESCRIPTION =
  "Brighten and rejuvenate the under-eye area with tear trough treatments in Las Vegas. Revival Health and Wellness targets dark circles, puffiness, and fine lines for a refreshed, well-rested look.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  images: ["/images/under-eye-treatment/23128-dark-circles-under-eyes.jpg"],
});

const BENEFITS = [
  "Brightens dark circles and hollowed under-eye areas",
  "Smooths the appearance of fine lines and crepey skin",
  "Reduces puffiness for a well-rested look",
  "Restores volume gently in the tear trough",
  "Rejuvenates the under-eye area without surgery",
  "Delivers a naturally refreshed, youthful appearance",
];

const FAQS = [
  {
    question: "What is under-eye / tear trough treatment?",
    answer:
      "The tear trough is the delicate hollow between the lower eyelid and the cheekbone. Age, genetics, and volume loss can create shadows, hollows, and “tired” looking eyes. Under-eye treatment brightens dark circles, smooths crepey texture, and restores gentle volume for a well-rested, youthful appearance.",
  },
  {
    question: "How does tear trough lightening work?",
    answer:
      "Small amounts of hyaluronic acid filler are precisely placed in the tear trough to gently restore volume, reflect light differently, and smooth the transition between the lower lid and the cheek. Our injectors also often pair this with skin brightening or PRP protocols depending on your concerns.",
  },
  {
    question: "How long do results last?",
    answer:
      "Most patients enjoy results lasting 9 to 18 months, depending on the product used and your metabolism. We’ll create a maintenance plan that keeps you looking refreshed year-round.",
  },
  {
    question: "Is there any downtime?",
    answer:
      "Downtime is minimal. Some patients experience mild swelling, redness, or bruising at the injection sites, but most return to daily activities right away. Avoid strenuous exercise and heat exposure for 24 hours after treatment.",
  },
  {
    question: "Am I a good candidate?",
    answer:
      "The best candidates have hollows or dark circles in the tear trough area, are in generally good health, are over 18, are not pregnant or breastfeeding, and have realistic expectations. A consultation confirms whether tear-trough treatment is the right approach for you.",
  },
];

export default function UnderEyeTreatmentPage() {
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
              { name: "Under Eye Treatment", path: PATH },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <PageHero
        eyebrow={"Aesthetics · Under Eye Treatment"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aesthetics", href: "/aesthetics/" },
          { label: "Under Eye Treatment" },
        ]}
        title={
          <>
            <span className="relative inline-block italic text-revival-gold">
              Under Eye Treatment
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>
          </>
        }
        description="Revive tired, dull eyes. This advanced tear-trough treatment targets dark circles, puffiness, and fine lines to rejuvenate and brighten the under-eye area for a refreshed, well-rested look."
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
        gallery={[
          "/images/under-eye-treatment/23128-dark-circles-under-eyes.jpg",
          "/images/under-eye-treatment/Eyes-3.jpg",
        ]}
        compact
      />

      <OverviewBlock
        section={{
          eyebrow: "Comprehensive Guide to Under Eye Treatment",
          heading:
            "A youthful appearance starts with a well-rested eye area",
          paragraphs: [
            "Revive tired, dull eyes with our specialized Under-Eye Treatment at Revival Health & Wellness. This advanced treatment targets dark circles, puffiness, and fine lines, helping to rejuvenate and brighten the under-eye area.",
            "Experience a refreshed, youthful, and well-rested look that enhances your overall appearance — no surgery, no downtime, and results that look like the best-rested version of you.",
          ],
          image: "/images/under-eye-treatment/Eyes-3.jpg",
        }}
      />

      <OverviewBlock
        tone="cream"
        reverse
        section={{
          eyebrow: "How does tear trough lightening work?",
          heading:
            "Precisely placed hyaluronic acid — reflect light, restore volume",
          paragraphs: [
            "The tear trough is the delicate hollow between the lower eyelid and the cheekbone. Age, genetics, and volume loss can create shadows and “tired” looking eyes. Tear trough lightening uses small amounts of hyaluronic acid filler, precisely placed to gently restore volume, reflect light differently, and smooth the transition between the lower lid and the cheek.",
            "Our injectors often pair this with skin-brightening or PRP protocols depending on your specific concerns — the goal is a naturally refreshed look that never appears “done.”",
          ],
          image: "/images/under-eye-treatment/under-eye-bags-treatment.webp",
          imageAspect: "landscape",
        }}
      />

      <BenefitsList
        eyebrow="Benefits of tear trough lightening"
        heading="What patients notice"
        items={BENEFITS}
        image="/images/under-eye-treatment/under-eye-benefits.webp"
      />

      <FAQSection faqs={FAQS} />

      <RelatedServices
        items={[
          {
            label: "Derma Filler",
            href: "/derma-filler/",
            blurb:
              "The full hyaluronic-acid dermal filler portfolio — for lips, cheeks, jawline, and more.",
          },
          {
            label: "PRP Hair restoration",
            href: "/prp-hair-restoration/",
            blurb:
              "Similar PRP science, applied to the scalp — stimulate natural hair growth with your own growth factors.",
          },
          {
            label: "Microneedling",
            href: "/microneedling/",
            blurb:
              "Boost collagen and improve skin texture around the eye area — pairs beautifully with tear-trough treatment.",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14 lg:px-8">
        <CTABanner
          title="Ready for brighter, well-rested eyes?"
          subtitle="Book a free consultation. Our team will design a personalized under-eye plan for you."
        />
      </div>
    </>
  );
}
