import HeaderLight from "@/components/gsf4/HeaderLight";
import HeroSection from "@/components/gsf4/HeroSection4";
import TrustBar from "@/components/gsf4/TrustBar4";
import CapabilitiesSection from "@/components/gsf4/CapabilitiesSection4";
import WhySection from "@/components/gsf4/WhySection4";
import IndustriesSection from "@/components/gsf4/IndustriesSection4";
import CertificationsSection from "@/components/gsf4/CertificationsSection4";
import StephenGouldSection from "@/components/gsf4/StephenGouldSection4";
import Footer from "@/components/gsf4/Footer4";

const GSF4 = () => {
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

export default GSF4;