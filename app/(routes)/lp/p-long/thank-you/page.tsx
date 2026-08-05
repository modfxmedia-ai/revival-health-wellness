import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LPHeader from "@/components/lp/LPHeader";
import LPFooter from "@/components/lp/LPFooter";
import ThankYouContent from "@/components/lp/ThankYouContent";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description: "Thank you for requesting your free P-Long\u00ae consultation.",
  path: "/lp/p-long/thank-you/",
  noIndex: true,
});

export default function PLongThankYouPage() {
  return (
    <>
      <LPHeader />
      <ThankYouContent />
      <LPFooter />
    </>
  );
}
