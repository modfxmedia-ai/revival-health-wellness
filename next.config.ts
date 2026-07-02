import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mirror the live site: every URL ends with a trailing slash.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "revivalhealthandwellnessgroup.com",
        pathname: "/wp-content/uploads/**",
      },
      { protocol: "https", hostname: "**.revivalhealthandwellnessgroup.com" },
    ],
  },
  poweredByHeader: false,
};

export default nextConfig;
