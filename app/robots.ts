import type { MetadataRoute } from "next";
import { SITE } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/sample-page/", "/title/"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
