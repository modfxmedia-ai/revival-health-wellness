import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LPHeader from "@/components/lp/LPHeader";
import LPFooter from "@/components/lp/LPFooter";
import PLongBooking from "@/components/lp/PLongBooking";

// Ads-only booking page for the P-Long Meta campaign - intentionally
// excluded from app/sitemap.ts and marked noindex so it never competes
// with the organic /p-long/ service page in search.
export const metadata: Metadata = buildMetadata({
  title: "Book Your Free P-Long\u00ae Consultation",
  description:
    "Reserve your free, confidential P-Long\u00ae consultation with Revival Health & Wellness. Same-week appointments almost always available.",
  path: "/lp/p-long/book/",
  noIndex: true,
});

export default function PLongBookingPage() {
  return (
    <>
      <LPHeader />
      <PLongBooking />
      <LPFooter />
    </>
  );
}
