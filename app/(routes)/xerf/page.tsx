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

const TITLE = "Xerf Skin Tightening & Rejuvenation";
const PATH = "/xerf/";
const DESCRIPTION =
  "Non-invasive skin tightening and rejuvenation for face and body with Xerf in Las Vegas. Revival Health and Wellness delivers lift, firmness, and glow — without downtime.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  images: ["/images/microneedling/close-beauty-portrait-serum-hydration.webp"],
});

const KEY_BENEFITS = [
  "Visible lifting and tightening on face, neck, and body",
  "Improved skin tone, texture, and firmness",
  "Reduced fine lines and early wrinkles",
  "Long-term collagen and elastin stimulation",
  "Comfortable sessions — no numbing required",
  "Zero downtime — return to daily life immediately",
];

const TREATMENT_AREAS = [
  {
    title: "Face & Neck",
    text: "Lift and firm the jawline, tighten the neck, and refine facial contours — a non-surgical alternative to a facelift for the right candidate.",
    icon: "sparkles" as const,
  },
  {
    title: "Décolletage & Arms",
    text: "Address sun damage, crepiness, and laxity on the chest and upper arms — zones where skin aging is often the most visible.",
    icon: "target" as const,
  },
  {
    title: "Abdomen & Legs",
    text: "Firm loose skin post-weight-loss or post-pregnancy — pair with body-contouring treatments for compound results.",
    icon: "timer" as const,
  },
];

const FAQS = [
  {
    question: "What is Xerf?",
    answer:
      "Xerf is a non-invasive skin tightening, lifting, and rejuvenation platform used on both the face and body. It stimulates the skin’s own collagen and elastin production to firm, lift, and smooth over time — without incisions, injections, or downtime.",
  },
  {
    question: "What can Xerf treat?",
    answer:
      "Xerf is used for skin laxity and early signs of aging — including a soft jawline, neck crepiness, loose skin on the abdomen or arms, and general loss of firmness. It’s also used to maintain results between more intensive treatments.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "Most patients see meaningful improvement after a series of 3–6 sessions. Your provider will design a personalized protocol during your consultation based on the treatment area and your goals.",
  },
  {
    question: "Does Xerf hurt?",
    answer:
      "No. Sessions are comfortable — patients typically describe a warm, relaxing sensation. No numbing cream is required and there’s no post-treatment soreness.",
  },
  {
    question: "Is there any downtime?",
    answer:
      "None. Xerf is a lunch-break treatment — you can return to work, exercise, and normal skincare immediately afterward.",
  },
  {
    question: "When will I see results?",
    answer:
      "Some patients notice initial tightening right after their first session, but the real transformation builds gradually over 8–12 weeks as collagen and elastin remodel in the treated area.",
  },
];

export default function XerfPage() {
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
              { name: "Skin", path: "/skin/" },
              { name: "Xerf", path: PATH },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <PageHero
        eyebrow={"Skin · Tightening & Rejuvenation"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aesthetics", href: "/aesthetics/" },
          { label: "Skin", href: "/skin/" },
          { label: "Xerf" },
        ]}
        title={
          <>
            <span className="relative inline-block italic text-revival-gold">
              Xerf
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>{" "}
            skin tightening
          </>
        }
        description="Non-invasive lifting and rejuvenation for face and body — stimulating natural collagen and elastin for firmer, smoother, more radiant skin. No injections. No downtime."
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
        gallery={[
          "/images/microneedling/close-beauty-portrait-serum-hydration.webp",
          "/images/under-eye-treatment/under-eye-bags-treatment.webp",
        ]}
        compact
      />

      <OverviewBlock
        section={{
          eyebrow: "Introducing Xerf",
          heading:
            "A gentle way to lift, firm, and rejuvenate — face and body",
          paragraphs: [
            "Xerf is a next-generation skin tightening and rejuvenation platform now available at Revival Health and Wellness. It works on both the face and body — addressing skin laxity, early signs of aging, and loss of firmness with a comfortable, non-invasive approach.",
            "Xerf gently heats the deeper layers of the skin to trigger the body’s own repair response. Over the following weeks, new collagen and elastin form in the treated area, resulting in visible lift, tightening, and improved texture.",
          ],
          image: "/images/microneedling/close-beauty-portrait-serum-hydration.webp",
          imageAspect: "landscape",
        }}
      />

      <BenefitsList
        eyebrow="Key Benefits of Xerf"
        heading="Lift, firm, and rejuvenate — without needles or downtime"
        items={KEY_BENEFITS}
        image="/images/under-eye-treatment/under-eye-bags-treatment.webp"
        imageAspect="landscape"
      />

      <PillarsGrid
        tone="cream"
        eyebrow="Where Xerf Treats"
        heading="From face to body — one versatile platform"
        intro="Xerf handpieces adjust to each treatment zone, letting your provider address skin laxity across a wide range of face and body areas in the same visit."
        pillars={TREATMENT_AREAS}
      />

      <OverviewBlock
        section={{
          eyebrow: "How Xerf Works",
          heading:
            "Controlled thermal energy. Natural collagen regeneration.",
          paragraphs: [
            "Xerf uses precisely-controlled thermal energy to reach the deeper dermal layers where collagen and elastin live — while keeping the surface of the skin cool and comfortable.",
            "This activates the body’s natural repair response, gradually rebuilding the underlying scaffold that keeps skin looking firm, smooth, and youthful. The result is a lift and glow that looks like your skin, only better.",
          ],
        }}
      />

      <OverviewBlock
        tone="cream"
        reverse
        section={{
          eyebrow: "Who Xerf is for",
          heading:
            "For patients who want real results — without surgery",
          paragraphs: [
            "Xerf is ideal for patients noticing early or moderate skin laxity — a softening jawline, crepey neck, loose abdominal skin after weight loss or pregnancy, or general loss of firmness on the arms and thighs.",
            "During your complimentary consultation, our medical team will assess your skin, review your goals, and design a customized Xerf protocol — often layered with other treatments for compound results.",
          ],
        }}
      />

      <FAQSection faqs={FAQS} />

      <RelatedServices
        items={[
          {
            label: "Everesse RF Skin Tightening",
            href: "/everesse-rf-skin-tightening-and-rejuvenation/",
            blurb:
              "Deeper monopolar RF tightening for the face and body — an excellent pairing with Xerf.",
          },
          {
            label: "Microneedling",
            href: "/microneedling/",
            blurb:
              "Collagen induction through controlled micro-channels — layers beautifully with Xerf for texture and firmness.",
          },
          {
            label: "PDO Thread Lifts",
            href: "/pdo-thread-lifts/",
            blurb:
              "Instant lift plus long-term collagen — combine with Xerf for a comprehensive non-surgical lifting protocol.",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14 lg:px-8">
        <CTABanner
          title="Ready to lift, firm, and rejuvenate?"
          subtitle="Book a complimentary Xerf consultation. Our medical team will assess your goals and design a personalized protocol tailored to you."
        />
      </div>
    </>
  );
}
