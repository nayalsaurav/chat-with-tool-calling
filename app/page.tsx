import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { FeatureSection } from "@/components/landing/feature-section";
import { ToolShowcase } from "@/components/landing/tool-showcase";
import { CallToAction } from "@/components/landing/cta-section";
import { FlickeringFooter } from "@/components/landing/flickering-footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ToolShowcase />
      <CallToAction />
      <FlickeringFooter />
    </>
  );
}
