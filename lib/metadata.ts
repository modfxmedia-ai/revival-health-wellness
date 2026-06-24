import type { Metadata } from "next";

export const SITE = {
  name: "Revival Health & Wellness",
  url: "https://revivalhealthandwellnessgroup.com",
  description:
    "Revival Health and Wellness is a premier center specializing in weight loss, hormone replacement therapy, body contouring, and aesthetics in Las Vegas, NV.",
  locale: "en_US",
  twitter: "@revivalhealth",
  phone: "(702) 963-1154",
} as const;

type BuildMetadataInput = {
  title: string;
  description?: string;
  /** Path beginning with a leading slash, e.g. "/weight-loss". */
  path?: string;
  images?: string[];
  noIndex?: boolean;
  keywords?: string[];
};

/**
 * Shared metadata builder. Produces canonical, OpenGraph, and Twitter tags
 * with sensible Revival Health & Wellness defaults.
 */
export function buildMetadata({
  title,
  description = SITE.description,
  path = "/",
  images = ["/images/og-default.jpg"],
  noIndex = false,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, SITE.url).toString();
  const fullTitle =
    path === "/"
      ? `${SITE.name} | Weight Loss & Aesthetic Solutions`
      : `${title} | ${SITE.name}`;

  return {
    // `absolute` prevents the root layout's title.template from re-appending
    // the brand name to pages that already build a full title.
    title: { absolute: fullTitle },
    description,
    keywords,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: images.map((src) => ({ url: src, width: 1200, height: 630 })),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
      creator: SITE.twitter,
    },
  };
}
