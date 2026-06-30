import { buildMetadata, SITE } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { Phone, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import MapSection from "@/components/layout/MapSection";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Revival Health & Wellness to book a consultation or ask a question. We're here to help you start your wellness journey.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact Us", path: "/contact-us" },
            ]),
          ),
        }}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-revival-gold">
              Get in Touch
            </span>
            <h1 className="mt-4 text-4xl text-revival-dark md:text-5xl">
              Let&apos;s start your revival
            </h1>
            <p className="mt-6 max-w-md text-lg text-revival-charcoal/80">
              Book a consultation or reach out with questions. Our team will get
              back to you promptly.
            </p>
            <div className="mt-10 space-y-4 text-revival-charcoal">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3"
              >
                <Phone className="h-5 w-5 text-revival-gold" /> {SITE.phone}
              </a>
              <a
                href="mailto:hello@revivalhealthandwellnessgroup.com"
                className="flex items-center gap-3"
              >
                <Mail className="h-5 w-5 text-revival-gold" />{" "}
                hello@revivalhealthandwellnessgroup.com
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-revival-gold" /> United States
              </span>
            </div>
          </div>

          <form className="space-y-5 rounded-3xl border border-revival-gold/15 bg-revival-warm-white p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First name" name="firstName" />
              <Field label="Last name" name="lastName" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" type="tel" />
            <label className="block">
              <span className="text-sm font-medium text-revival-charcoal">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-revival-gold/30 bg-revival-cream px-4 py-2.5 outline-none focus:border-revival-gold focus:ring-2 focus:ring-revival-gold/40"
              />
            </label>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <MapSection />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-revival-charcoal">{label}</span>
      <input
        type={type}
        name={name}
        className="mt-1.5 w-full rounded-xl border border-revival-gold/30 bg-revival-cream px-4 py-2.5 outline-none focus:border-revival-gold focus:ring-2 focus:ring-revival-gold/40"
      />
    </label>
  );
}
