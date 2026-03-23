import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import TrustSection from "@/components/TrustSection";
import IndustriesSection from "@/components/IndustriesSection";
import SolutionsSection from "@/components/SolutionsSection";
import CertificationsSection from "@/components/CertificationsSection";
import StephenGouldSection from "@/components/StephenGouldSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CapabilitiesSection />
      <TrustSection />
      <IndustriesSection />
      <SolutionsSection />
      <CertificationsSection />
      <StephenGouldSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
