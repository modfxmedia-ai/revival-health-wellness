import type { Metadata } from "next";
import Script from "next/script";
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
      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '926054265492584');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=926054265492584&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}
      <Script id="meta-pixel-lead" strategy="afterInteractive">
        {`fbq('track', 'Lead');`}
      </Script>
      <LPHeader />
      <PLongBooking />
      <LPFooter />
    </>
  );
}
