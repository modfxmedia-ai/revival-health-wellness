import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LPHeader from "@/components/lp/LPHeader";
import LPFooter from "@/components/lp/LPFooter";
import PLongLanding from "@/components/lp/PLongLanding";

// Ads-only landing page for Meta campaigns - intentionally excluded from
// app/sitemap.ts and marked noindex so it never competes with the organic
// /p-long/ service page in search.
export const metadata: Metadata = buildMetadata({
  title: "P-Long\u00ae Protocol \u2014 Free Consultation",
  description:
    "Increase length and girth by up to a full inch \u2014 no surgery, no fillers. The first clinically proven P-Long\u00ae protocol. Book your free, confidential consultation.",
  path: "/lp/p-long/",
  noIndex: true,
});

export default function PLongLandingPage() {
  return (
    <>
      <LPHeader />
      <PLongLanding />
      <LPFooter />
    </>
  );
}
