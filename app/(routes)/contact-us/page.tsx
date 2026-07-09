import { buildMetadata, SITE } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import MapSection from "@/components/layout/MapSection";
import ContactFormSection from "@/components/home/ContactFormSection";
import MotionShowcase from "@/components/motion/MotionShowcase";
import {
  PillarsGrid,
  FAQSection,
} from "@/components/templates/HormoneSections";

const TITLE = "Contact Us";
const META_TITLE = "Contact Our Wellness Clinic";
const PATH = "/contact-us/";
const DESCRIPTION =
  "Ready to start your journey? Contact us today to book an appointment. Revival Health and Wellness is here to answer your questions and help you get started.";

export const metadata = buildMetadata({
  title: META_TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const CONTACT_METHODS = [
  {
    title: "Call us",
    text: "Speak with our team Monday–Saturday. We'll answer your questions and get you booked.",
    icon: "handHeart" as const,
  },
  {
    title: "Text us",
    text: "Prefer to text? Message us with a question or to schedule your first visit—same-day responses.",
    icon: "sparkles" as const,
  },
  {
    title: "Book online",
    text: "Reserve a free consultation on our Zenoti booking portal, 24/7, from any device.",
    icon: "timer" as const,
  },
  {
    title: "Visit in person",
    text: "Two Las Vegas locations—Henderson/Southwest and Summerlin/Northwest—open six days a week.",
    icon: "compass" as const,
  },
];

const HOURS = [
  { day: "Monday", hours: "9 AM to 1 PM" },
  { day: "Tuesday", hours: "9 AM to 7 PM" },
  { day: "Wednesday", hours: "9 AM to 7 PM" },
  { day: "Thursday", hours: "9 AM to 7 PM" },
  { day: "Friday & Saturday", hours: "9 AM to 5 PM" },
  { day: "Sunday", hours: "Closed" },
];

const FAQS = [
  {
    question: "How do I book my first visit?",
    answer:
      "Call, text, or use our online booking portal—consultations are always complimentary. New patients typically start with a virtual or in-clinic consultation followed by lab work if needed.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Revival is a cash-pay concierge clinic. We provide superbills you can submit to your insurance for potential reimbursement.",
  },
  {
    question: "Which services are available virtually?",
    answer:
      "Most consultations, follow-ups, and medication reviews can happen virtually. Some treatments (Emsculpt NEO, IV Hydration, injectables) require an in-clinic visit.",
  },
  {
    question: "How quickly can I get in?",
    answer:
      "Same-week appointments are almost always available. Let us know if you're pressed for time and we'll find a slot that works.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Any recent labs, a list of current medications, and questions. That's it—we handle everything else on our side.",
  },
];

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: META_TITLE,
  url: new URL(PATH, SITE.url).toString(),
  description: DESCRIPTION,
  publisher: {
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
  },
};

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            contactPageSchema,
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: TITLE, path: PATH },
            ]),
          ]),
        }}
      />

      <PageHero
        eyebrow="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: TITLE }]}
        title={
          <>
            Get in touch with{" "}
            <span className="italic text-revival-gold">Revival</span>
          </>
        }
        description="Ready to start your journey? Reach out and we'll help you take the first step—by phone, text, or online."
        secondary={{ label: "Take the Quiz", href: "/quiz/" }}
        gallery={[
          "/images/page-banners/contact-banner-1.webp",
          "/images/page-banners/contact-banner-2.png",
        ]}
      />

      <PillarsGrid
        tone="light"
        eyebrow="Four ways to reach us"
        heading="Have a question? We're here to help."
        intro="Pick whichever works best for you. All new-patient consultations are free."
        pillars={CONTACT_METHODS}
      />

      <ContactFormSection />

      <MotionShowcase
        eyebrow="Concierge care"
        heading="Every message goes to a real provider"
        body="No auto-reply loops, no bots. Our medical team reads every inquiry and responds personally—usually within one business day."
        centerIcon="handHeart"
        centerLabel="We Read Everything"
        orbitLabels={["Call", "Text", "Email", "Book"]}
        cornerBadges={[
          { icon: "timer", label: "Fast" },
          { icon: "shieldCheck", label: "Private" },
          { icon: "sparkles", label: "Personal" },
        ]}
        tone="dark"
      />

      <section className="relative overflow-hidden bg-revival-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-tagline text-xs text-revival-gold">
              Working hours
            </span>
            <h2
              className="mt-3 font-heading font-medium leading-[1.1] text-revival-dark"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)" }}
            >
              When we&apos;re open
            </h2>
            <p className="mt-5 text-base font-light text-revival-charcoal/80 sm:text-lg">
              Both Las Vegas locations follow the same weekly schedule.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-[1.75rem] border border-revival-gold/20 bg-white shadow-sm">
            <ul>
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-revival-dark/5 px-6 py-4 last:border-b-0 sm:px-8"
                >
                  <span className="font-heading text-base text-revival-dark sm:text-lg">
                    {h.day}
                  </span>
                  <span className="text-sm font-light text-revival-charcoal/80 sm:text-base">
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <MapSection />

      <FAQSection faqs={FAQS} />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <CTABanner
          title="Prefer to talk it through first?"
          subtitle="Book a free consultation and we'll answer your questions in a real conversation."
        />
      </div>
    </>
  );
}
