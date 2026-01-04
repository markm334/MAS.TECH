import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FoundersStorySection from "@/components/FoundersStorySection";
import SolutionSection from "@/components/SolutionSection";
import UseCasesSection from "@/components/UseCasesSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RoadmapSection from "@/components/RoadmapSection";
import InvestSection from "@/components/InvestSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <FoundersStorySection />
        <SolutionSection />
        <UseCasesSection />
        <ImpactSection />
        <TestimonialsSection />
        <RoadmapSection />
        <InvestSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
