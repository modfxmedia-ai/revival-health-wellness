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

const TITLE = "CoolPeel® CO2 Laser for Skin Renewal";
const PATH = "/coolpeel-laser/";
const DESCRIPTION =
  "Try a CoolPeel® CO2 laser treatment for skin renewal in Las Vegas. Revival Health and Wellness offers this advanced service with less downtime & great results.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  images: ["/images/coolpeel-laser/228AB068-1B5F-4504-87BA-4C840C148E9D.jpeg"],
});

const BENEFITS = [
  "Minimize fine lines and wrinkles",
  "Improve skin tone and texture",
  "Reduce sun damage and pigmentation",
  "Shrink enlarged pores",
  "Stimulate natural collagen production",
  "Safe, quick, and requires minimal downtime",
];

const WHAT_TO_EXPECT = [
  "Treatment Time: 10–20 minutes",
  "Comfort: No anesthesia required, minimal discomfort",
  "Downtime: Redness for 1–2 days, makeup can usually be applied after 24 hours",
  "Results: Brighter, smoother skin within days; collagen continues to improve over several weeks",
];

const CANDIDATES = [
  "Refresh their skin with little disruption to their schedule",
  "Reduce early signs of aging",
  "Maintain youthful, healthy skin as a preventative treatment",
];

const BEFORE_AFTERS = [
  "/images/coolpeel-laser/before-after-1.jpg",
  "/images/coolpeel-laser/before-after-2.jpg",
  "/images/coolpeel-laser/before-after-3.jpg",
];

const FAQS = [
  {
    question: "What is CoolPeel®?",
    answer:
      "CoolPeel® is the next-generation CO2 laser treatment designed to give you all the benefits of traditional resurfacing without the downtime. Unlike aggressive CO2 lasers of the past, CoolPeel targets only the superficial layer of skin, removing damaged cells and stimulating collagen - leaving you with smoother, younger-looking skin.",
  },
  {
    question: "How much downtime should I expect?",
    answer:
      "Most patients resume normal activities within 24–48 hours, making CoolPeel the ideal “lunchtime” skin refresh. Redness typically lasts 1–2 days and makeup can usually be applied after 24 hours.",
  },
  {
    question: "How long does a session take?",
    answer:
      "Treatment time is just 10–20 minutes with no anesthesia required and minimal discomfort.",
  },
  {
    question: "When will I see results?",
    answer:
      "Brighter, smoother skin appears within days, and collagen continues to improve over several weeks after your treatment.",
  },
  {
    question: "Am I a good candidate?",
    answer:
      "CoolPeel is perfect for anyone looking to refresh their skin with little disruption to their schedule, reduce early signs of aging, or maintain youthful, healthy skin as a preventative treatment.",
  },
];

export default function CoolpeelLaserPage() {
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
              { name: "CoolPeel® Laser", path: PATH },
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
          { label: "CoolPeel® Laser" },
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
            {" ® Laser"}
          </>
        }
        description="Refresh your skin with minimal downtime. Next-generation CO2 laser resurfacing without the intensity or recovery of traditional lasers."
        gallery={[
          "/images/coolpeel-laser/228AB068-1B5F-4504-87BA-4C840C148E9D.jpeg",
          "/images/coolpeel-laser/image3.jpeg",
        ]}
        compact
      />

      <OverviewBlock
        section={{
          eyebrow: "Refresh Your Skin with Minimal Downtime",
          heading: "The next-generation CO2 laser - without the downtime",
          paragraphs: [
            "At Revival Health and Wellness, we’re proud to offer CoolPeel®, the next-generation CO2 laser treatment designed to give you all the benefits of traditional resurfacing without the downtime.",
            "Unlike aggressive CO2 lasers of the past, CoolPeel® targets only the superficial layer of skin, removing damaged cells and stimulating collagen - leaving you with smoother, younger-looking skin.",
          ],
          image: "/images/coolpeel-laser/228AB068-1B5F-4504-87BA-4C840C148E9D.jpeg",
        }}
      />

      <BenefitsList
        eyebrow={"Benefits of CoolPeel®"}
        heading="Real refresh, real fast"
        items={BENEFITS}
        image="/images/coolpeel-laser/image3.jpeg"
      />

      <BenefitsList
        eyebrow="What to Expect"
        heading="A true lunchtime skin refresh"
        items={WHAT_TO_EXPECT}
      />

      <BenefitsList
        eyebrow={"Is CoolPeel® Right for Me?"}
        heading="Perfect for anyone looking to..."
        items={CANDIDATES}
      />

      {/* Before & After gallery */}
      <section className="relative overflow-clip bg-revival-warm-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent via-revival-gold to-revival-gold/60 sm:w-12" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-revival-gold sm:text-xs">
                Before & After
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent via-revival-gold to-revival-gold/60 sm:w-12" />
            </div>
            <h2
              className="font-heading font-light leading-[1.05] text-revival-dark"
              style={{ fontSize: "clamp(2rem, 3.6vw, 3.15rem)", letterSpacing: "-0.01em" }}
            >
              Real patient results
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {BEFORE_AFTERS.map((src, i) => (
              <figure
                key={src}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-revival-gold/15 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(15,15,15,0.3)]"
              >
                <Image
                  src={src}
                  alt={`CoolPeel patient before-and-after result ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={90}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} />

      <RelatedServices
        items={[
          {
            label: "Deka Tetra Pro CO2 Laser",
            href: "/tetra-pro-co2-laser/",
            blurb:
              "The powerhouse sibling of CoolPeel - deeper resurfacing for dramatic anti-aging transformations.",
          },
          {
            label: "CO2 Laser Treatments",
            href: "/co2-laser-treatments/",
            blurb:
              "The complete overview of our CO2 laser offering - CoolPeel® vs. Deka Tetra Pro side-by-side.",
          },
          {
            label: "Everesse RF Skin Tightening",
            href: "/everesse-rf-skin-tightening-and-rejuvenation/",
            blurb:
              "Pair CoolPeel with Everesse RF for our exclusive Radiant Lift protocol - surface refinement plus deep collagen tightening.",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14 lg:px-8">
        <CTABanner
          title={"Book your CoolPeel® session"}
          subtitle="Ready for your skin to glow? Schedule your consultation at Revival Health and Wellness today."
        />
      </div>
    </>
  );
}
