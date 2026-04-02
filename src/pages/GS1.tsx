import HeaderLight from "@/components/gs1/HeaderLight";
import HeroSection from "@/components/gs1/HeroSection4";
import TrustBar from "@/components/gs1/TrustBar4";
import CapabilitiesSection from "@/components/gs1/CapabilitiesSection4";
import WhySection from "@/components/gs1/WhySection4";
import IndustriesSection from "@/components/gs1/IndustriesSection4";
import CertificationsSection from "@/components/gs1/CertificationsSection4";
import StephenGouldSection from "@/components/gs1/StephenGouldSection4";
import Footer from "@/components/gs1/Footer4";

const GS1 = () => {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-gray-900">
      <HeaderLight />
      <main className="pt-24">
        <HeroSection />
        <TrustBar />
        <CapabilitiesSection />
        <WhySection />
        <IndustriesSection />
        <CertificationsSection />
        <StephenGouldSection />
      </main>
      <Footer />
    </div>
  );
};

export default GS1;
