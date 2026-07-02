import { buildMetadata } from "@/lib/metadata";
import {
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
  jsonLd,
} from "@/lib/schema";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import MotionShowcase from "@/components/motion/MotionShowcase";
import {
  OverviewBlock,
  PillarsGrid,
  BenefitsList,
  FAQSection,
  RelatedServices,
} from "@/components/templates/HormoneSections";

const TITLE = "Phentermine";
const PATH = "/phentermine/";
const META_TITLE = "Phentermine for Weight Loss";
const DESCRIPTION =
  "Looking for phentermine for weight loss in Las Vegas? Revival Health and Wellness helps you manage your appetite and boost energy with medical supervision.";

export const metadata = buildMetadata({
  title: META_TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const HOW_IT_WORKS = [
  {
    title: "Suppresses appetite",
    text: "Stimulates neurotransmitters that reduce hunger signals so smaller meals feel satisfying.",
    icon: "utensils" as const,
  },
  {
    title: "Boosts energy",
    text: "A mild stimulant effect that makes movement, workouts, and daily activity feel easier.",
    icon: "zap" as const,
  },
  {
    title: "Kickstarts momentum",
    text: "Fast, tangible early results help build the habits that carry the rest of your journey.",
    icon: "timer" as const,
  },
  {
    title: "Physician-supervised",
    text: "Baseline labs, dose adjustments, and progress reviews keep the plan safe and effective.",
    icon: "shieldCheck" as const,
  },
];

const CANDIDATES_BULLETS = [
  "BMI of 30 or higher, or 27+ with weight-related conditions",
  "Struggled to lose weight through diet and exercise alone",
  "Cleared for a short- to mid-term appetite-suppressant program",
  "Wants a fast-acting kickstart alongside lifestyle changes",
];

const SIDE_EFFECTS = [
  "Increased heart rate or blood pressure",
  "Dry mouth",
  "Difficulty sleeping if taken late in the day",
  "Restlessness or jitters",
  "Constipation or GI upset",
];

const FAQS = [
  {
    question: "What is Phentermine?",
    answer:
      "Phentermine is a prescription appetite suppressant used to support weight loss. It's typically prescribed short- to mid-term alongside a medically supervised plan and lifestyle changes.",
  },
  {
    question: "How does Phentermine work?",
    answer:
      "It stimulates the release of neurotransmitters that reduce hunger signals, so you feel full sooner and can comfortably eat in a lower calorie range. It also gives a mild energy boost.",
  },
  {
    question: "Is Phentermine right for me?",
    answer:
      "Phentermine is a good fit for adults with a BMI of 30+ (or 27+ with weight-related conditions) who have struggled with diet and exercise alone. A short consultation and lab review confirms whether it's safe for you.",
  },
  {
    question: "Will Phentermine give me side effects?",
    answer:
      "Some patients experience increased heart rate, dry mouth, trouble sleeping if taken late, or restlessness. Our team monitors you throughout the program and adjusts dose or timing to minimize side effects.",
  },
];

export default function PhenterminePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            serviceSchema({
              name: META_TITLE,
              description: DESCRIPTION,
              path: PATH,
            }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Weight Loss", path: "/weight-loss/" },
              { name: TITLE, path: PATH },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <PageHero
        eyebrow="Weight Loss · Phentermine"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Weight Loss", href: "/weight-loss/" },
          { label: "Phentermine" },
        ]}
        title={
          <>
            <span className="relative inline-block">
              Phentermine
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>{" "}
            to kickstart your journey
          </>
        }
        description="A clinically proven appetite suppressant with a mild energy boost, delivered under medical supervision in Las Vegas."
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
        gallery={[
          "/images/weight-loss/phentermine-hero.jpg",
          "/images/weight-loss/phentermine-medication.webp",
          "/images/weight-loss/phentermine-secondary.png",
        ]}
      />

      <OverviewBlock
        section={{
          eyebrow: "Weight Loss with Phentermine",
          heading: "What is the Phentermine treatment?",
          paragraphs: [
            "Phentermine is a prescription appetite suppressant used to support short- to mid-term weight loss. It's most effective as part of a medically supervised plan that also addresses nutrition, movement, and lifestyle.",
            "At Revival, we start with a consultation and baseline labs, confirm you're a good candidate, and monitor your progress week-over-week so the dose stays right and side effects stay manageable.",
          ],
          image: "/images/weight-loss/phentermine-hero.jpg",
        }}
      />

      <PillarsGrid
        eyebrow="How it works"
        heading="How does Phentermine work?"
        intro="Four ways Phentermine supports the momentum that turns a weight-loss plan into real results."
        pillars={HOW_IT_WORKS}
      />

      <MotionShowcase
        eyebrow="The Mechanism"
        heading="Appetite down. Energy up."
        body="Phentermine works on the appetite-signaling pathway while giving you the energy to move more—a two-lever effect that jumpstarts weight loss."
        centerIcon="zap"
        centerLabel="Appetite Control"
        orbitLabels={["Focus", "Energy", "Appetite", "Metabolism"]}
        cornerBadges={[
          { icon: "flame", label: "Fat Loss" },
          { icon: "activity", label: "Movement" },
          { icon: "timer", label: "Kickstart" },
        ]}
        tone="dark"
      />

      <OverviewBlock
        tone="cream"
        reverse
        section={{
          eyebrow: "Is it right for you?",
          heading: "Is Phentermine right for you?",
          paragraphs: [
            "Phentermine works best for adults who are ready to combine medication with lifestyle changes. If diet-and-exercise-only approaches have stalled and you're cleared for a stimulant-class medication, it may be a strong option.",
            "During your consultation we'll review your medical history, current medications, and goals to confirm it's the right fit before writing a prescription.",
          ],
          image: "/images/weight-loss/phentermine-medication.webp",
          bullets: [
            "Medical history and medication review",
            "Baseline labs and vitals",
            "Personalized dose and timing",
            "Weekly check-ins during the program",
          ],
        }}
      />

      <BenefitsList
        eyebrow="Who it's for"
        heading="Candidates for Phentermine"
        items={CANDIDATES_BULLETS}
        image="/images/weight-loss/phentermine-secondary.png"
      />

      <PillarsGrid
        tone="cream"
        eyebrow="Safety"
        heading="Will Phentermine give me side effects?"
        intro="Most patients tolerate Phentermine well, especially with medical supervision. Common effects to know about:"
        pillars={SIDE_EFFECTS.map((s) => ({
          title: s,
          text: "We monitor and adjust to keep this manageable throughout your program.",
          icon: "shieldCheck" as const,
        }))}
      />

      <FAQSection faqs={FAQS} />

      <RelatedServices
        items={[
          {
            label: "GLP-1",
            href: "/glp-1/",
            blurb:
              "Non-stimulant option: hormone-based appetite regulation with sustained results.",
          },
          {
            label: "Vitamin Injections",
            href: "/vitamin-injections/",
            blurb:
              "Boost energy, metabolism, and immunity while you're on your weight-loss plan.",
          },
          {
            label: "Medical Weight Loss",
            href: "/weight-loss/",
            blurb:
              "The full program—labs, physician-led plans, and ongoing support.",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <CTABanner
          title="Ready to kickstart your plan?"
          subtitle="Book a free consultation. We'll check your labs and confirm Phentermine is right for you."
        />
      </div>
    </>
  );
}
