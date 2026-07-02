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

const TITLE = "Telehealth";
const PATH = "/telehealth/";
const META_TITLE = "Telehealth Consultations";
const DESCRIPTION =
  "Speak with a provider from home w/ telehealth consultations in Las Vegas. Revival Health and Wellness makes it easy to get medical advice on your own schedule.";

export const metadata = buildMetadata({
  title: META_TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const HOW_IT_WORKS = [
  {
    title: "Book your virtual visit",
    text: "Pick a time that fits your schedule and get a secure video link—no travel, no waiting rooms.",
    icon: "timer" as const,
  },
  {
    title: "Talk to a provider",
    text: "Meet face-to-face over video with a licensed clinician who reviews your goals and history.",
    icon: "heartPulse" as const,
  },
  {
    title: "Labs at a nearby location",
    text: "If lab work is needed, we order it and route you to a lab close to home—results come back to us.",
    icon: "compass" as const,
  },
  {
    title: "Personalized plan",
    text: "Your provider builds a plan tailored to your labs, symptoms, and goals—delivered to your inbox.",
    icon: "target" as const,
  },
  {
    title: "Medication delivered",
    text: "Where clinically appropriate, prescriptions are called into your preferred pharmacy or shipped to your door.",
    icon: "pill" as const,
  },
  {
    title: "Ongoing follow-up",
    text: "Regular check-ins by video, phone, or message so we can adjust your plan as your body responds.",
    icon: "handHeart" as const,
  },
];

const BENEFITS = [
  "Skip the traffic and waiting rooms",
  "Same-week appointments in most cases",
  "See a licensed provider from anywhere in Nevada",
  "Discreet, private, and secure video visits",
  "In-person handoff if you ever prefer to come in",
  "Follow-ups by video, phone, or message",
];

const CANDIDATES = [
  "Weight loss consultations (GLP-1, Phentermine, Vitamin Injections)",
  "Hormone therapy check-ins and lab reviews",
  "Sexual wellness consultations and follow-ups",
  "Refills, medication adjustments, and progress reviews",
  "Educational visits before booking an in-clinic treatment",
];

const FAQS = [
  {
    question: "What is telehealth?",
    answer:
      "Telehealth is a secure video visit with a licensed Revival provider. You get the same personalized care you'd receive in-clinic, just from the comfort of home.",
  },
  {
    question: "Which services can I do virtually?",
    answer:
      "Weight-loss consultations, hormone therapy reviews, sexual wellness consultations, medication adjustments, and follow-up visits are all available online.",
  },
  {
    question: "Can I be prescribed medication over telehealth?",
    answer:
      "Yes—when clinically appropriate and after a proper evaluation. Some prescriptions require baseline labs, which we order from a lab near you.",
  },
  {
    question: "Do you accept insurance for telehealth?",
    answer:
      "Revival is a cash-pay concierge clinic. We provide superbills you can submit to your insurance for potential reimbursement.",
  },
  {
    question: "Is my visit private?",
    answer:
      "Absolutely. All video visits use HIPAA-compliant secure video, and your records are protected under the same privacy standards as an in-clinic visit.",
  },
];

export default function TelehealthPage() {
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
              { name: TITLE, path: PATH },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <PageHero
        eyebrow="Telehealth"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: TITLE }]}
        title={
          <>
            <span className="relative inline-block">
              Telehealth
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-revival-gold to-transparent"
              />
            </span>{" "}
            from the comfort of home
          </>
        }
        description="Meet with a Revival provider by secure video. Same personalized care—weight loss, hormone therapy, sexual wellness—without the drive."
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
      />

      <OverviewBlock
        section={{
          eyebrow: "Book Your Virtual Consultation",
          heading: "Care that fits your schedule",
          paragraphs: [
            "Telehealth at Revival makes it easy to talk to a licensed provider on your own time. Whether it's a new weight-loss consultation, a hormone therapy check-in, or a discreet sexual wellness visit, we can meet face-to-face over a secure video link.",
            "Every plan starts the same way: a real conversation about your goals, a review of your history, and—where needed—labs from a facility close to you. No cookie-cutter templates. Just concierge care, delivered virtually.",
          ],
          image: "/images/telehealth/telehealth-consult.jpg",
        }}
      />

      <PillarsGrid
        eyebrow="How it works"
        heading="A virtual visit, start to finish"
        intro="Six steps from booking your first video call to sustaining your results long-term."
        pillars={HOW_IT_WORKS}
      />

      <MotionShowcase
        eyebrow="Concierge, Delivered"
        heading="Real medical care. Zero drive time."
        body="Video visits, at-home labs, medication shipped, and follow-ups by video, phone, or message—the full Revival experience, minus the commute."
        centerIcon="heartPulse"
        centerLabel="Virtual Care"
        orbitLabels={["Consult", "Labs", "Rx", "Follow-up"]}
        cornerBadges={[
          { icon: "timer", label: "Fast" },
          { icon: "shieldCheck", label: "HIPAA" },
          { icon: "sparkles", label: "Concierge" },
        ]}
        tone="dark"
      />

      <BenefitsList
        eyebrow="Why patients choose it"
        heading="The benefits of a Revival virtual visit"
        items={BENEFITS}
      />

      <PillarsGrid
        tone="cream"
        eyebrow="Available services"
        heading="What we can do over telehealth"
        intro="Most of Revival's care can be delivered virtually. Some treatments still need an in-clinic visit—we'll always tell you which is which."
        pillars={CANDIDATES.map((c, i) => ({
          title: `0${i + 1}`,
          text: c,
          icon: "sparkles" as const,
        }))}
      />

      <FAQSection faqs={FAQS} />

      <RelatedServices
        items={[
          {
            label: "Weight Loss",
            href: "/weight-loss/",
            blurb:
              "Start your GLP-1 or Phentermine program with a virtual consultation.",
          },
          {
            label: "Hormone Therapy",
            href: "/hormone-therapy/",
            blurb:
              "Review your labs and adjust your HRT plan without an in-clinic visit.",
          },
          {
            label: "Contact Us",
            href: "/contact-us/",
            blurb: "Have a question first? Reach out and we'll get right back to you.",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <CTABanner
          title="Meet with a provider this week."
          subtitle="Book your virtual consultation—free, no commitment, from anywhere in Nevada."
        />
      </div>
    </>
  );
}
