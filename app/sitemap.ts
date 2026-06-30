import type { MetadataRoute } from "next";
import { SITE } from "@/lib/metadata";
import { getAllGeoPages } from "@/lib/locations";

/** Primary service pillars, priority 0.9. */
const PILLAR_SERVICES = [
  "weight-loss",
  "hormone-therapy",
  "sexual-wellness",
  "aesthetics",
  "iv-hydration",
  "telehealth",
];

/** Sub-service / treatment pages, priority 0.8. */
const SUB_SERVICES = [
  "botox",
  "co2-laser-treatments",
  "coolpeel-laser",
  "derma-filler",
  "dysport",
  "emsculpt-neo",
  "emsella",
  "everesse-rf-skin-tightening-and-rejuvenation",
  "finasteride",
  "gainswave-tm",
  "gainswavetm-for-her",
  "glp-1",
  "growth-hormone-optimization",
  "hair",
  "kybella",
  "men",
  "mens-hormone-therapy",
  "microneedling",
  "o-shot-tm",
  "p-long",
  "p-shot-tm",
  "pdo-thread-lifts",
  "priapus-toxin",
  "prp-hair-restoration",
  "scar-camouflage",
  "sculptra",
  "skin",
  "tetra-pro-co2-laser",
  "trimix",
  "under-eye-treatment",
  "viagra",
  "vitamin-injections",
  "women",
  "womens-hormone-therapy",
  "xeomin",
];

/** Editorial / company pages, priority 0.7. */
const CONTENT_PAGES = ["about-us", "contact-us", "blogs"];

/** Latest blog posts, priority 0.7. */
const BLOG_POSTS: { slug: string; lastModified: string }[] = [
  { slug: "break-weight-loss-plateau", lastModified: "2026-06-21" },
  { slug: "ed-treatment-roadmap-guide", lastModified: "2026-06-14" },
  { slug: "unlocking-hormone-therapy-for-stubborn-weight", lastModified: "2026-06-07" },
];

/** Utility pages, priority 0.6. */
const UTILITY_PAGES = ["quiz"];

/** Low-priority legal pages, priority 0.3. */
const LOW_PRIORITY_PAGES = ["privacy-policy"];

function url(path: string): string {
  return new URL(path, SITE.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: url("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const pillars: MetadataRoute.Sitemap = PILLAR_SERVICES.map((slug) => ({
    url: url(`/${slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const subServices: MetadataRoute.Sitemap = SUB_SERVICES.map((slug) => ({
    url: url(`/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const content: MetadataRoute.Sitemap = CONTENT_PAGES.map((slug) => ({
    url: url(`/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: url(`/${post.slug}`),
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const geo: MetadataRoute.Sitemap = getAllGeoPages().map((page) => ({
    url: url(`/${page.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const utility: MetadataRoute.Sitemap = UTILITY_PAGES.map((slug) => ({
    url: url(`/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const lowPriority: MetadataRoute.Sitemap = LOW_PRIORITY_PAGES.map((slug) => ({
    url: url(`/${slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [
    ...home,
    ...pillars,
    ...subServices,
    ...content,
    ...blogPosts,
    ...geo,
    ...utility,
    ...lowPriority,
  ];
}
