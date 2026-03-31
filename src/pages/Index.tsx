import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { SolutionsOverview } from "@/components/SolutionsOverview";
import { PlatformsPreview } from "@/components/PlatformsPreview";
import { ServicesPreview } from "@/components/ServicesPreview";
import { WhyStratumtec } from "@/components/WhyStratumtec";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppPlugin } from "@/components/WhatsAppPlugin";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <SolutionsOverview />
        <PlatformsPreview />
        <ServicesPreview />
        <WhyStratumtec />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppPlugin />
    </div>
  );
};

export default Index;
