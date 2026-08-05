import Link from "next/link";
import { CLINICS, telHref } from "@/lib/content/clinics";

/**
 * Minimal ad-compliance footer for /lp/* landing pages: business identity,
 * NAP, and required legal links only - no full sitemap (keeps the page a
 * single conversion funnel).
 */
export default function LPFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-revival-gold/15 bg-revival-dark py-8 text-revival-cream/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 text-center text-xs sm:px-6">
        <p className="font-heading text-sm text-revival-cream">
          Revival Health &amp; Wellness
        </p>
        <p>
          {CLINICS[0].address} ·{" "}
          <a href={telHref(CLINICS[0].phones[0])} className="hover:text-revival-gold">
            {CLINICS[0].phones[0]}
          </a>
        </p>
        <p className="text-revival-cream/50">
          &copy; {year}{" "}
          Revival Health &amp; Wellness. All rights reserved. Results vary by individual.
        </p>
        <p>
          <Link href="/privacy-policy/" className="hover:text-revival-gold">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
