import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import BlogCard, { type BlogPost } from "@/components/ui/BlogCard";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Wellness insights, treatment guides, and expert advice from the Revival Health & Wellness team.",
  path: "/blogs",
});

const POSTS: BlogPost[] = [
  {
    title: "GLP-1 Medications: What to Know Before You Start",
    excerpt:
      "A clear, science-backed guide to how GLP-1s work and who they're right for.",
    slug: "glp-1-what-to-know",
    category: "Weight Loss",
    date: "Coming soon",
  },
  {
    title: "Signs Your Hormones May Be Out of Balance",
    excerpt:
      "Fatigue, low libido, brain fog, when to consider hormone optimization.",
    slug: "hormone-imbalance-signs",
    category: "Hormone Therapy",
    date: "Coming soon",
  },
  {
    title: "The Aesthetics Glossary: Botox, Filler, and Beyond",
    excerpt:
      "Demystifying the most popular treatments and what results to expect.",
    slug: "aesthetics-glossary",
    category: "Aesthetics",
    date: "Coming soon",
  },
];

export default function BlogsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blogs" },
            ]),
          ),
        }}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-revival-gold">
          The Journal
        </span>
        <h1 className="mt-4 text-4xl text-revival-dark md:text-5xl">
          Insights to help you thrive
        </h1>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
