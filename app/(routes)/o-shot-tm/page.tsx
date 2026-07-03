import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import SexualWellnessPage from "@/components/sexual-wellness/SexualWellnessPage";
import { SW_CONTENT } from "@/lib/content/sexual-wellness";

const SLUG = "o-shot-tm";
const data = SW_CONTENT[SLUG];

export const metadata: Metadata = buildMetadata({
  title: data.meta.title,
  description: data.meta.description,
  path: `/${SLUG}/`,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            serviceSchema({
              name: data.schema.medicalTherapyName,
              description: data.meta.description,
              path: `/${SLUG}/`,
            }),
            breadcrumbSchema(
              data.breadcrumbs.map((b) => ({
                name: b.label,
                path: b.href ?? `/${SLUG}/`,
              })),
            ),
          ]),
        }}
      />
      <SexualWellnessPage data={data} contentMap={SW_CONTENT} />
    </>
  );
}
