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

const TITLE = "PDO Thread Lift Treatments";
const PATH = "/pdo-thread-lifts/";
const DESCRIPTION =
  "Lift, tighten, and redefine your facial contours with PDO thread lifts in Las Vegas. Revival Health and Wellness offers minimally invasive lifts that stimulate collagen without surgery.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  images: ["/images/pdo-thread-lifts/threadlift.jpg"],
});

const THREAD_TYPES = [
  {
    title: "Mono threads",
    text: "Smooth, single filament threads that tighten the skin and gently stimulate collagen production for an overall skin-tightening effect.",
    icon: "leaf" as const,
  },
  {
    title: "Cog threads",
    text: "Barbed threads that hook into the skin to physically lift and reposition sagging tissue — the go-to option for jawline and jowl lifting.",
    icon: "target" as const,
  },
  {
    title: "Screw threads",
    text: "Intertwined threads used to restore volume to sunken areas of the skin, giving cheeks and mid-face a fuller, lifted appearance.",
    icon: "sparkles" as const,
  },
];

const CANDIDATES = [
  "Wants instantaneous, dramatic, and natural-looking results without surgery",
  "Looking to reverse signs of aging — fine lines, wrinkles, sagging skin",
  "In good physical and emotional health",
  "Has realistic expectations about the outcome",
  "Wants gradual collagen improvement in addition to an immediate lift",
];

const FAQS = [
  {
    question: "What are PDO thread lifts?",
    answer:
      "A PDO thread lift is a minimally invasive, non-surgical procedure that lifts and tightens sagging skin using dissolvable polydioxanone (PDO) threads. The threads are placed under the skin to physically lift tissue and stimulate new collagen production for gradual, long-lasting improvement.",
  },
  {
    question: "What are the types of PDO threads?",
    answer:
      "There are three main types: Mono threads (smooth, for overall tightening), Cog threads (barbed, for repositioning and lifting sagging tissue), and Screw threads (intertwined, for restoring volume to sunken areas). Your provider will select the right combination for your goals.",
  },
  {
    question: "Who is a good candidate for PDO thread lifts?",
    answer:
      "This treatment is ideal for anyone seeking instantaneous, dramatic, and natural-looking results without the need for surgery — particularly for reversing signs of aging like fine lines, wrinkles, and sagging skin. Candidates should be physically and emotionally healthy and have realistic expectations about the outcome.",
  },
  {
    question: "What happens after PDO thread lifts?",
    answer:
      "You may experience mild swelling, bruising, and irritation around the treatment areas. Ice packs and over-the-counter pain relievers like Tylenol and Arnica help reduce these symptoms. Avoid strenuous physical activities and workouts for about 3 days after the procedure.",
  },
  {
    question: "How long do the results last?",
    answer:
      "PDO thread lifts offer immediate results — your face appears fuller and smoother as soon as you leave the clinic. Results continue to improve over the next two months as your body produces new collagen fibers. While the PDO threads are absorbed by your body after about 9 months, the results last longer due to the increased collagen reserves.",
  },
];

export default function PdoThreadLiftsPage() {
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
              { name: "PDO Thread Lifts", path: PATH },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <PageHero
        eyebrow={"Aesthetics · PDO Thread Lifts"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aesthetics", href: "/aesthetics/" },
          { label: "PDO Thread Lifts" },
        ]}
        title={
          <>
            <span className="relative inline-block italic text-revival-gold">
              PDO Thread
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>{" "}
            lifts
          </>
        }
        description={"Lift, tighten, and redefine your facial contours with a minimally invasive PDO thread lift. Instant results plus long-term collagen stimulation — no surgery, no scarring."}
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
        gallery={[
          "/images/pdo-thread-lifts/threadlift.jpg",
        ]}
        compact
      />

      <OverviewBlock
        section={{
          eyebrow: "Reverse the Signs of Aging",
          heading:
            "Instant lift. Long-term collagen. Zero surgery.",
          paragraphs: [
            "A PDO thread lift is a minimally invasive, non-surgical procedure that lifts and tightens sagging skin using dissolvable polydioxanone (PDO) threads. The threads are placed under the skin to physically lift tissue and stimulate new collagen production over time.",
            "Your face will appear fuller and smoother as soon as you leave the medical center — and the results continue to improve over the following two months as your body produces new collagen fibers. This treatment reduces sagging, redefines facial contours, and gives you a naturally youthful, lifted, and refreshed appearance.",
          ],
          image: "/images/pdo-thread-lifts/threadlift.jpg",
          imageAspect: "landscape",
        }}
      />

      <PillarsGrid
        tone="cream"
        eyebrow="What are the types of PDO threads?"
        heading={"Three thread types — tailored to your goals"}
        intro="Your provider selects the right combination of thread types for your specific concerns."
        pillars={THREAD_TYPES}
      />

      <BenefitsList
        eyebrow="Ideal candidates"
        heading="Who is PDO right for?"
        items={CANDIDATES}
        image="/images/pdo-thread-lifts/threadlift.jpg"
        imageAspect="landscape"
      />

      <OverviewBlock
        reverse
        section={{
          eyebrow: "What happens after PDO thread lifts?",
          heading:
            "Mild swelling, immediate results, long-term collagen",
          paragraphs: [
            "After your PDO thread lift, you may experience mild swelling, bruising, and irritation around the treatment areas. To reduce these symptoms, you can use ice packs and over-the-counter pain relievers like Tylenol and Arnica. It’s also recommended to avoid strenuous physical activities and workouts for about 3 days following the procedure.",
            "PDO thread lifts offer immediate results — your face will appear fuller and smoother as soon as you leave the medical center. However, the results will continue to improve over the next two months as your body produces new collagen fibers. While the PDO threads will be absorbed by your body after about 9 months, the results last longer due to the increased collagen reserves.",
          ],
          image: "/images/pdo-thread-lifts/Luxury-Living-in-Dubai-South-8-e1756238774520.png",
        }}
      />

      <FAQSection faqs={FAQS} />

      <RelatedServices
        items={[
          {
            label: "Derma Filler",
            href: "/derma-filler/",
            blurb:
              "Restore volume alongside lifting — dermal fillers pair beautifully with thread lifts for complete rejuvenation.",
          },
          {
            label: "Sculptra®",
            href: "/sculptra/",
            blurb:
              "Collagen-stimulating biostimulator that layers well with the collagen build from PDO threads.",
          },
          {
            label: "Kybella®",
            href: "/kybella/",
            blurb:
              "Refine your jawline and profile by targeting stubborn submental fat — the perfect complement to a thread lift.",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14 lg:px-8">
        <CTABanner
          title="Instant lift. Long-term glow."
          subtitle="Book a free consultation and see if a PDO thread lift is right for you."
        />
      </div>
    </>
  );
}
