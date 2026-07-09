import Image from "next/image";
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

const TITLE = "CO2 Laser Skin Resurfacing";
const PATH = "/co2-laser-treatments/";
const DESCRIPTION =
  "Deeply renew your skin with CO2 laser treatments in Las Vegas. Revival Health and Wellness targets deep wrinkles and sun damage for smoother, brighter skin with CoolPeel® and Tetra Pro.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  images: ["/images/co2-laser-treatments/beauty-woman-clean-skin.webp"],
});

const COOLPEEL_BENEFITS = [
  "Improves skin texture and tone",
  "Reduces the appearance of fine lines and wrinkles",
  "Minimizes sun damage and age spots",
  "Shrinks the look of pores",
  "Stimulates natural collagen production",
  "Safe, fast, and little to no downtime",
];

const TETRA_BENEFITS = [
  "Addresses deeper wrinkles and creases",
  "Improves acne scars and skin laxity",
  "Stimulates long-term collagen remodeling",
  "Creates tighter, more youthful-looking skin",
  "Adjustable for light or aggressive treatments depending on downtime preference",
];

const COOLPEEL_CHOOSE = [
  "A fast, minimal downtime treatment",
  "A refreshed, glowing complexion",
  "Preventative care or early anti-aging",
];

const TETRA_CHOOSE = [
  "A powerful, one-time treatment for advanced concerns",
  "Improvement in wrinkles, laxity, and scars",
  "Long-term rejuvenation and dramatic transformation",
];

const COMPARISON = [
  { feature: "Treatment Depth", coolpeel: "Superficial (top layer of skin)", tetra: "Deep & customizable (multiple skin layers)" },
  { feature: "Best For", coolpeel: "Fine lines, sun damage, pores, texture, preventative care", tetra: "Wrinkles, scars, skin laxity, advanced aging concerns" },
  { feature: "Downtime", coolpeel: "1–2 days of redness", tetra: "3–10 days depending on intensity" },
  { feature: "Comfort Level", coolpeel: "Minimal discomfort, no anesthesia needed", tetra: "Numbing cream or anesthesia may be used" },
  { feature: "Treatment Time", coolpeel: "10–20 minutes", tetra: "30–60 minutes" },
  { feature: "Results Timeline", coolpeel: "Immediate glow + gradual collagen boost", tetra: "Dramatic results with ongoing collagen remodeling" },
  { feature: "Maintenance", coolpeel: "Best in a series or as upkeep", tetra: "Often a single treatment delivers long-lasting results" },
];

const FAQS = [
  {
    question: "What is CoolPeel®?",
    answer:
      "CoolPeel® is a revolutionary fractional CO2 treatment that safely and comfortably delivers the benefits of traditional laser resurfacing without the downtime. By targeting only the superficial layer of skin tissue, it removes damaged skin to reveal a smoother, brighter, and younger-looking complexion.",
  },
  {
    question: "What is Tetra Pro?",
    answer:
      "The Tetra Pro CO2 laser offers deeper, more customizable resurfacing for patients seeking dramatic results in skin renewal. With its advanced settings, our providers can tailor treatments for your unique skin type and goals.",
  },
  {
    question: "Which treatment is right for me?",
    answer:
      "Choose CoolPeel® for a quick refresh with minimal downtime (great before big events or as preventative anti-aging). Choose Tetra Pro for more transformative results if you’re comfortable with some downtime for deeper resurfacing. Our providers will create a personalized treatment plan based on your skin goals, lifestyle, and comfort level.",
  },
  {
    question: "How much downtime should I expect?",
    answer:
      "CoolPeel® typically involves 1–2 days of redness. Tetra Pro downtime ranges from 3–10 days depending on the intensity of the treatment. Your provider will discuss options during your consultation to match your schedule.",
  },
  {
    question: "Why choose Revival for CO2 laser treatments?",
    answer:
      "At Revival, we specialize in modern, luxury treatments that help you look and feel your absolute best. Our team combines advanced medical expertise with a personalized, patient-first approach. With CoolPeel® and Tetra Pro, you’ll experience cutting-edge technology, proven results, and exceptional care.",
  },
];

export default function Co2LaserTreatmentsPage() {
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
              { name: "CO2 Laser Treatments", path: PATH },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <PageHero
        eyebrow={"Aesthetics · CO₂ Laser"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aesthetics", href: "/aesthetics/" },
          { label: "CO₂ Laser Treatments" },
        ]}
        title={
          <>
            <span className="relative inline-block italic text-revival-gold">
              {"CO₂ Laser"}
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>{" "}
            Treatments
          </>
        }
        description={"CoolPeel® & Tetra Pro — the future of skin rejuvenation. The latest technology in skin resurfacing with the Cartessa SmartXide Tetra CO2 laser."}
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
        gallery={[
          "/images/co2-laser-treatments/beauty-woman-clean-skin.webp",
          "/images/co2-laser-treatments/Touch-MedSpa-CoolPeel-7727.jpg",
        ]}
        compact
      />

      <OverviewBlock
        section={{
          eyebrow: "CoolPeel® & Tetra Pro",
          heading:
            "The future of skin rejuvenation",
          paragraphs: [
            "At Revival Health and Wellness, we bring you the latest technology in skin resurfacing with the Cartessa SmartXide Tetra CO2 laser. Known as one of the most advanced CO2 systems available, the Tetra Pro and CoolPeel® treatments offer the perfect balance between powerful results and minimal downtime.",
          ],
          image: "/images/co2-laser-treatments/Touch-MedSpa-CoolPeel-7727.jpg",
          imageAspect: "landscape",
        }}
      />

      <BenefitsList
        eyebrow={"What is CoolPeel®?"}
        heading={"Fractional CO2 resurfacing — without the downtime"}
        items={COOLPEEL_BENEFITS}
        image="/images/co2-laser-treatments/coolpeel-treatment-in-progress.jpg"
      />

      <OverviewBlock
        tone="cream"
        reverse
        section={{
          eyebrow: "What is Tetra Pro?",
          heading:
            "Deeper, customizable resurfacing for dramatic results",
          paragraphs: [
            "The Tetra Pro CO2 laser offers deeper, more customizable resurfacing for patients seeking dramatic results in skin renewal. With its advanced settings, our providers can tailor treatments for your unique skin type and goals.",
          ],
          bullets: TETRA_BENEFITS,
          image: "/images/co2-laser-treatments/Image_20260225_164500_469.jpg",
        }}
      />

      {/* Comparison table */}
      <section className="relative overflow-hidden bg-revival-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent via-revival-gold to-revival-gold/60 sm:w-12" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-revival-gold sm:text-xs">
                Key Differences at a Glance
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent via-revival-gold to-revival-gold/60 sm:w-12" />
            </div>
            <h2
              className="font-heading font-light leading-[1.05] text-revival-dark"
              style={{ fontSize: "clamp(2rem, 3.6vw, 3.15rem)", letterSpacing: "-0.01em" }}
            >
              {"CoolPeel® vs. Tetra Pro"}
            </h2>
          </div>

          <div className="mt-14 overflow-hidden rounded-2xl border border-revival-gold/20 bg-white shadow-sm">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-revival-dark text-white">
                <tr>
                  <th className="px-4 py-4 font-heading font-medium sm:px-6">Feature</th>
                  <th className="px-4 py-4 font-heading font-medium sm:px-6">{"CoolPeel®"}</th>
                  <th className="px-4 py-4 font-heading font-medium sm:px-6">Tetra Pro</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={
                      i % 2 === 0
                        ? "border-t border-revival-gold/10 bg-white"
                        : "border-t border-revival-gold/10 bg-revival-cream/50"
                    }
                  >
                    <td className="px-4 py-4 font-semibold text-revival-dark sm:px-6">
                      {row.feature}
                    </td>
                    <td className="px-4 py-4 text-revival-charcoal/80 sm:px-6">
                      {row.coolpeel}
                    </td>
                    <td className="px-4 py-4 text-revival-charcoal/80 sm:px-6">
                      {row.tetra}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <BenefitsList
        eyebrow={"Choose CoolPeel® if you want:"}
        heading="Fast refresh. Minimal downtime."
        items={COOLPEEL_CHOOSE}
      />

      <BenefitsList
        eyebrow="Choose Tetra Pro if you want:"
        heading="Dramatic transformation. Long-term results."
        items={TETRA_CHOOSE}
        image="/images/co2-laser-treatments/cartessa-smartxide-tetra.jpg"
      />

      <OverviewBlock
        tone="cream"
        section={{
          eyebrow: "Why choose Revival Health and Wellness?",
          heading: "Modern, luxury treatments with proven results",
          paragraphs: [
            "At Revival, we specialize in modern, luxury treatments that help you look and feel your absolute best. Our team combines advanced medical expertise with a personalized, patient-first approach.",
            "With CoolPeel® and Tetra Pro, you can trust that you’re getting the most advanced technology and the luxury care experience that sets Revival apart.",
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
              "Radiofrequency skin tightening — pairs beautifully with CoolPeel® in our exclusive Radiant Lift protocol.",
          },
          {
            label: "Microneedling",
            href: "/microneedling/",
            blurb:
              "Boost collagen and refine skin texture — a natural complement to CO2 laser resurfacing.",
          },
          {
            label: "Sculptra®",
            href: "/sculptra/",
            blurb:
              "Restore volume gradually with collagen-stimulating Sculptra® as your CO2 results build.",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14 lg:px-8">
        <CTABanner
          title="Ready to reveal smoother, healthier skin?"
          subtitle="Contact us today to schedule your personalized CO2 laser consultation."
        />
      </div>
    </>
  );
}
