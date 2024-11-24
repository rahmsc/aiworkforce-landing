import HeroSection from "@/components/hero/HeroSection";
import BusinessPotential from "@/components/BusinessPotential";
import TransformBusiness from "@/components/TransformBusiness";
import AiExpertise from "@/components/AiExpertise";
// import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookCall from "@/components/BookCall";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BusinessPotential />
      <AiExpertise />
      <TransformBusiness />
      {/* <Benefits /> */}
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <BookCall />
    </main>
  );
}
