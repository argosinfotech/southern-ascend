import HeaderLight from "@/components/gsf1/HeaderLight";
import HeroSection from "@/components/gsf1/HeroSection4";
import TrustBar from "@/components/gsf1/TrustBar4";
import CapabilitiesSection from "@/components/gsf1/CapabilitiesSection4";
import WhySection from "@/components/gsf1/WhySection4";
import IndustriesSection from "@/components/gsf1/IndustriesSection4";
import CertificationsSection from "@/components/gsf1/CertificationsSection4";
import StephenGouldSection from "@/components/gsf1/StephenGouldSection4";
import Footer from "@/components/gsf1/Footer4";

const GSF1 = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-900">
      <HeaderLight />
      <main>
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

export default GSF1;
