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
  PillarsGrid,
  BenefitsList,
  FAQSection,
  RelatedServices,
} from "@/components/templates/HormoneSections";

const TITLE = "OctoPro (ONDA) Body Contouring";
const PATH = "/octopro-onda/";
const DESCRIPTION =
  "Non-invasive body contouring with the OctoPro (ONDA) system in Las Vegas. Revival Health and Wellness uses microwave-based Coolwaves technology to reduce fat, tighten skin, and smooth cellulite.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  images: ["/images/emsculpt-neo/emsculpt-neo-female-model.jpg"],
});

const KEY_BENEFITS = [
  "Non-invasive fat reduction on abdomen, love handles, thighs, arms",
  "Simultaneous skin tightening in the treated area",
  "Visible cellulite improvement",
  "No incisions, no needles, no anesthesia",
  "Zero downtime — return to normal activity immediately",
  "Comfortable, well-tolerated sessions",
];

const TREATMENT_AREAS = [
  {
    title: "Abdomen & Flanks",
    text: "The most-requested zone — target stubborn belly fat and love handles that resist diet and exercise. OctoPro’s Coolwaves reach subcutaneous adipose tissue while protecting the skin.",
    icon: "target" as const,
  },
  {
    title: "Thighs & Buttocks",
    text: "Smooth cellulite, reduce localized fat, and tighten the overlying skin — a combination few devices deliver in one session.",
    icon: "sparkles" as const,
  },
  {
    title: "Arms & Bra Line",
    text: "Refine the upper arms and bra-line area with the same technology, calibrated for smaller, more delicate treatment zones.",
    icon: "timer" as const,
  },
];

const FAQS = [
  {
    question: "What is OctoPro (ONDA)?",
    answer:
      "OctoPro is a non-invasive body-contouring device by DEKA that uses Coolwaves — a proprietary microwave technology — to selectively heat subcutaneous fat cells while protecting the surface of the skin. In the same treatment, the residual thermal action stimulates dermal remodeling for skin tightening and cellulite improvement.",
  },
  {
    question: "What can OctoPro treat?",
    answer:
      "OctoPro is cleared for localized fat reduction, skin laxity, and cellulite — across the abdomen, flanks, thighs, buttocks, arms, and bra-line area. It’s particularly well-suited to patients seeking a non-surgical alternative to liposuction who also want a mild skin-tightening benefit.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "Most patients see meaningful results after a series of 3–4 sessions spaced 2–4 weeks apart. Your provider will build a personalized protocol during your consultation based on your goals and the treatment area.",
  },
  {
    question: "What does a session feel like?",
    answer:
      "Sessions are comfortable — you’ll feel a warm, massage-like sensation as the handpiece is moved across the treatment area. There’s no numbing required and no post-treatment soreness. Sessions typically run 20–40 minutes depending on the area.",
  },
  {
    question: "Is there downtime?",
    answer:
      "None. You may see mild pinkness in the treated area for a few hours, but you can return to work, exercise, and normal activities immediately.",
  },
  {
    question: "When will I see results?",
    answer:
      "Initial changes are visible within a few weeks. Optimal results build gradually over 3–6 months as the body naturally metabolizes the treated fat cells and new collagen forms.",
  },
];

export default function OctoProOndaPage() {
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
              { name: "OctoPro (ONDA)", path: PATH },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <PageHero
        eyebrow={"Aesthetics · Body Contouring"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aesthetics", href: "/aesthetics/" },
          { label: "OctoPro (ONDA)" },
        ]}
        title={
          <>
            <span className="relative inline-block italic text-revival-gold">
              OctoPro
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>{" "}
            (ONDA)
          </>
        }
        description="Non-invasive fat reduction, skin tightening, and cellulite improvement — in one treatment. Powered by DEKA’s proprietary Coolwaves microwave technology."
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
        gallery={[
          "/images/emsculpt-neo/emsculpt-neo-female-model.jpg",
          "/images/emsculpt-neo/neobum.webp",
        ]}
        compact
      />

      <OverviewBlock
        section={{
          eyebrow: "Introducing the OctoPro Platform",
          heading:
            "Fat reduction. Skin tightening. Cellulite smoothing. In one session.",
          paragraphs: [
            "OctoPro is DEKA’s next-generation body-contouring platform, now available at Revival Health and Wellness. Using proprietary Coolwaves technology, it selectively heats subcutaneous adipose tissue while protecting the surface of the skin — a combination that’s difficult to achieve with laser or radiofrequency alone.",
            "The result: measurable reduction in localized fat, visible skin tightening, and improvement in the appearance of cellulite — without incisions, anesthesia, or downtime.",
          ],
          image: "/images/emsculpt-neo/emsculpt-neo-female-model.jpg",
          imageAspect: "landscape",
        }}
      />

      <OverviewBlock
        tone="cream"
        reverse
        section={{
          eyebrow: "How OctoPro Works",
          heading: "Coolwaves — microwave energy, precisely delivered",
          paragraphs: [
            "OctoPro delivers 2.45 GHz microwave energy through a proprietary handpiece designed to preferentially target adipose tissue. Fat cells absorb the energy and undergo apoptosis (natural cell death); the body then clears them through normal metabolic processes over the following weeks.",
            "Because the same thermal action gently heats the dermis, patients also see collagen remodeling in the treated area — which is why OctoPro tightens skin and improves cellulite in the same session it reduces fat.",
          ],
        }}
      />

      <BenefitsList
        eyebrow="Key Benefits"
        heading="Everything OctoPro delivers in one platform"
        items={KEY_BENEFITS}
        image="/images/emsculpt-neo/neobum.webp"
        imageAspect="landscape"
      />

      <PillarsGrid
        tone="cream"
        eyebrow="Where OctoPro Treats"
        heading="One device. Multiple body zones."
        intro="The OctoPro handpiece adjusts to the treatment area, letting your provider address stubborn fat across a wide range of body zones."
        pillars={TREATMENT_AREAS}
      />

      <OverviewBlock
        section={{
          eyebrow: "Who is a good candidate?",
          heading:
            "For patients seeking a non-surgical alternative to liposuction",
          paragraphs: [
            "OctoPro is ideal for patients close to their goal weight who want to address localized pockets of stubborn fat, mild-to-moderate skin laxity, or cellulite — without the recovery of surgical liposuction.",
            "During your complimentary consultation, our medical team will assess your goals, review your health history, and design a customized OctoPro protocol — or recommend the best combination of body-contouring options across our platform.",
          ],
        }}
      />

      <OverviewBlock
        tone="cream"
        reverse
        section={{
          eyebrow: "Pairs Beautifully With",
          heading: "Combine OctoPro with our other body-shaping tools",
          paragraphs: [
            "For patients seeking maximum transformation, our providers often layer OctoPro with Emsculpt NEO (to build muscle in the treated area) and Everesse RF (for deeper skin tightening). We’ll design the right combination for your goals.",
          ],
        }}
      />

      <FAQSection faqs={FAQS} />

      <RelatedServices
        items={[
          {
            label: "Emsculpt NEO",
            href: "/emsculpt-neo/",
            blurb:
              "Build muscle and burn fat with HIFEM + RF — the perfect complement to OctoPro’s fat-reduction focus.",
          },
          {
            label: "Everesse RF Skin Tightening",
            href: "/everesse-rf-skin-tightening-and-rejuvenation/",
            blurb:
              "Deeper monopolar RF tightening for the same treatment areas — layer for compound results.",
          },
          {
            label: "Weight Loss Program",
            href: "/weight-loss/",
            blurb:
              "Medical weight-loss (GLP-1s, phentermine, coaching) that pairs beautifully with body contouring.",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14 lg:px-8">
        <CTABanner
          title="Reduce fat. Tighten skin. Smooth cellulite. Without surgery."
          subtitle="Book a complimentary OctoPro consultation. Our medical team will assess your goals and design a personalized protocol."
        />
      </div>
    </>
  );
}
