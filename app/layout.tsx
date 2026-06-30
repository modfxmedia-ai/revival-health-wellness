import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { organizationSchema, websiteSchema, jsonLd } from "@/lib/schema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://revivalhealthandwellnessgroup.com"),
  title: {
    default: "Revival Health & Wellness | Weight Loss & Aesthetic Solutions",
    template: "%s | Revival Health & Wellness",
  },
  description:
    "Revival Health and Wellness is a premier center specializing in weight loss, hormone replacement therapy, body contouring, and aesthetics in Las Vegas, NV.",
  keywords: [
    "weight loss Las Vegas",
    "hormone therapy Las Vegas",
    "medical spa Las Vegas",
    "GLP-1 Las Vegas",
    "botox Las Vegas",
    "Revival Health and Wellness",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://revivalhealthandwellnessgroup.com",
    siteName: "Revival Health & Wellness",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://revivalhealthandwellnessgroup.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-revival-cream text-revival-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd([organizationSchema(), websiteSchema()]),
          }}
        />
        <Header />
        <main className="flex-1 pt-[96px] xl:pt-[150px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
