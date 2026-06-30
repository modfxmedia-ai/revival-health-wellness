"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Printer, Clock, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";

/* ── Footer link data ──────────────────────────────────────────────────── */

const QUICK_LINKS = [
  { label: "Home", href: "/home/" },
  { label: "Weight Loss", href: "/weight-loss/" },
  { label: "Hormone Therapy", href: "/hormone-therapy/" },
  { label: "Sexual Wellness for Men", href: "/men/" },
  { label: "Sexual Wellness for Women", href: "/women/" },
  { label: "IV Hydration", href: "/iv-hydration/" },
  {
    label: "Lab Testing",
    href: "https://labs.revivalhealthandwellnessgroup.com/",
    external: true,
  },
];

const AESTHETIC_LINKS = [
  { label: "Aesthetics", href: "/aesthetics/" },
  { label: "Skin", href: "/skin/" },
  { label: "Hair", href: "/hair/" },
  { label: "Telehealth", href: "/telehealth/" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about-us/" },
  { label: "Contact Us", href: "/contact-us/" },
  {
    label: "Book Now",
    href: "https://revivalhealth.zenoti.com/webstoreNew",
    external: true,
  },
  { label: "Blogs", href: "/blogs/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  {
    label: "Zenoti's Privacy",
    href: "https://www.zenoti.com/trust/privacy-notice",
    external: true,
  },
];

const LOCATIONS = [
  {
    name: "Henderson / Southwest",
    address: "7220 S. Cimarron Road, Suite #140, Las Vegas, Nevada 89113",
    mapHref:
      "https://www.google.com/maps/place/Revival+Health+and+Wellness/@36.0569688,-115.2693326,15z/",
    phones: [
      { label: "(702) 963-1154", href: "tel:(702) 963-1154" },
      { label: "(702) 475-4621", href: "tel:(702) 475-4621" },
    ],
    hours: "Monday 9AM–1PM | Tue–Thu 9AM–7PM",
  },
  {
    name: "Summerlin / Northwest",
    address: "2585 Box Canyon Drive Suite #150, Las Vegas, Nevada 89128",
    mapHref:
      "https://www.google.com/maps/dir//2585+Box+Canyon+Dr+Suite+150+Las+Vegas,+NV+89128/",
    phones: [{ label: "(702) 725-1588", href: "tel:(702) 725-1588" }],
    fax: "(702) 475-4621",
    hours: "Friday & Saturday 9AM–5PM",
  },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/RevivalHealthAndWellness",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/revival.healthandwellness/",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@revival.lv",
    Icon: TikTokIcon,
  },
];

const LEGITSCRIPT_HREF =
  "https://www.legitscript.com/websites/?checker_keywords=revivalhealthandwellnessgroup.com";

/* ── Component ──────────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="bg-revival-dark text-revival-warm-white">
      {/* Pre-footer CTA strip */}
      <AnimatedSection
        as="div"
        variants={fadeInUp}
        className="bg-revival-charcoal"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <h2 className="text-3xl text-revival-warm-white md:text-4xl">
              Ready to Transform?
            </h2>
            <p className="mt-2 text-revival-warm-white/70">
              Book your free consultation and start your revival today.
            </p>
          </div>
          <a
            href="https://revivalhealth.zenoti.com/webstorenew"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-revival-gold px-7 py-3.5 text-sm font-medium text-revival-dark transition-transform duration-200 hover:scale-105 hover:bg-revival-gold-light"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </AnimatedSection>

      {/* Gold gradient top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-revival-gold/60 to-transparent" />

      {/* Main footer grid */}
      <AnimatedSection
        as="div"
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8"
      >
        {/* Col 1, Brand */}
        <motion.div variants={fadeInUp} className="lg:col-span-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Revival Health & Wellness home"
          >
            <Image
              src="/images/brand/logo.png"
              alt="Revival Health & Wellness"
              width={221}
              height={300}
              className="h-12 w-auto object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-xl font-medium uppercase tracking-[0.18em] text-revival-warm-white sm:text-2xl">
                Revival
              </span>
              <span className="mt-1 text-[0.6rem] font-light uppercase tracking-[0.35em] text-revival-gold">
                Health &amp; Wellness
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs font-heading text-lg leading-snug text-revival-warm-white/85">
            Revival Health and Wellness – A Modern Approach to Healing &amp;
            Vitality
          </p>

          {/* Newsletter (Webflow form endpoint, preserve hidden fields) */}
          <form
            name="email-form"
            method="post"
            action="https://revivalhealthandwellnessgroup.com/"
            className="mt-6 flex w-full max-w-sm overflow-hidden rounded-full border border-revival-gold/30 bg-revival-charcoal"
          >
            <input type="hidden" name="form-name" value="email-form" />
            <input type="hidden" name="ms" value="" />
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-5 py-3 text-sm text-revival-warm-white placeholder:text-revival-warm-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-revival-gold px-5 text-sm font-medium text-revival-dark transition-colors hover:bg-revival-gold-light"
            >
              Subscribe
            </button>
          </form>

          {/* LegitScript badge */}
          <a
            href={LEGITSCRIPT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-revival-gold/25 px-4 py-2 text-xs font-light text-revival-warm-white/75 transition-colors hover:border-revival-gold hover:text-revival-gold"
          >
            <span className="text-tagline text-revival-gold">LegitScript</span>
            Certified
          </a>

          {/* Social links */}
          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-revival-gold/40 text-revival-gold transition-colors duration-200 hover:bg-revival-gold hover:text-revival-dark"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Col 2, Quick Links */}
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks links={QUICK_LINKS} />
        </motion.div>

        {/* Col 3, Aesthetic Services */}
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <FooterHeading>Aesthetic Services</FooterHeading>
          <FooterLinks links={AESTHETIC_LINKS} />
        </motion.div>

        {/* Col 4, Company */}
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <FooterHeading>Company</FooterHeading>
          <FooterLinks links={COMPANY_LINKS} />
        </motion.div>

        {/* Col 5, Locations */}
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <FooterHeading>Locations</FooterHeading>
          <div className="space-y-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.name} className="text-sm font-light">
                <p className="font-heading text-base text-revival-gold">
                  {loc.name}
                </p>
                <a
                  href={loc.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-start gap-2 text-revival-warm-white/75 transition-colors hover:text-revival-gold"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-revival-gold" />
                  {loc.address}
                </a>
                {loc.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="mt-1.5 flex items-center gap-2 text-revival-warm-white/75 transition-colors hover:text-revival-gold"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-revival-gold" />
                    {phone.label}
                  </a>
                ))}
                {loc.fax ? (
                  <span className="mt-1.5 flex items-center gap-2 text-revival-warm-white/75">
                    <Printer className="h-4 w-4 shrink-0 text-revival-gold" />
                    Fax: {loc.fax}
                  </span>
                ) : null}
                <span className="mt-1.5 flex items-start gap-2 text-revival-warm-white/60">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-revival-gold" />
                  {loc.hours}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Bottom bar */}
      <div className="border-t border-revival-warm-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs font-light text-revival-warm-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © Revival Health &amp; Wellness. All Rights Reserved 2025
          </p>
          <p>
            Powered By{" "}
            <a
              href="https://www.modfxmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-revival-gold transition-colors hover:text-revival-gold-light"
            >
              ModfxFXMedia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────── */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-revival-gold">
      {children}
    </h3>
  );
}

function FooterLinks({
  links,
}: {
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-sm font-light text-revival-warm-white/75 transition-colors hover:text-revival-gold"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ── Brand icons (lucide-react dropped these) ──────────────────────────── */

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 5.5a4.5 4.5 0 0 0 4 2.3v3a7.5 7.5 0 0 1-4-1.2v5.9a5.5 5.5 0 1 1-5.5-5.5c.28 0 .55.02.82.06v3.1a2.5 2.5 0 1 0 1.68 2.36V2.5h3a4.5 4.5 0 0 0 0 .02z" />
    </svg>
  );
}
