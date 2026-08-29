import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { AboutPreview } from "@/components/home/AboutPreview";
import { PatientPathway } from "@/components/home/PatientPathway";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <BeforeAfterSlider />
      <AboutPreview />
      <PatientPathway />
      <TestimonialsCarousel />
      <CTABanner />
    </main>
  );
}
