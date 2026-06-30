import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import ServicePage from "@/components/templates/ServicePage";

const TITLE = "TetraPro CO2 Laser";
const PATH = "/tetra-pro-co2-laser";
const DESCRIPTION =
  "Discover TetraPro CO2 Laser at Revival Health & Wellness, a personalized, physician-led approach designed to help you look and feel your best.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            serviceSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: TITLE, path: PATH },
            ]),
          ]),
        }}
      />
      <ServicePage eyebrow="Laser" title={TITLE} intro={DESCRIPTION} />
    </>
  );
}
