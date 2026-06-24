import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import ApproachSection from "@/components/home/ApproachSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import GalleryCarousel from "@/components/home/GalleryCarousel";
import BlogsSection from "@/components/home/BlogsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import AboutSection from "@/components/home/AboutSection";
import PlanOfferSection from "@/components/home/PlanOfferSection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Las Vegas Medical Spa & Wellness",
  description:
    "Revival Health and Wellness offers weight loss, hormone therapy, sexual wellness, and aesthetics in Las Vegas. Revitalize, rebalance, and reveal your best self.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <ServicesGrid />
      <ApproachSection />
      <StatsSection />
      <WhyChooseSection />
      <GalleryCarousel />
      <BlogsSection />
      <TestimonialsSection />
      <CTASection />
      <AboutSection />
      <PlanOfferSection />
    </>
  );
}
