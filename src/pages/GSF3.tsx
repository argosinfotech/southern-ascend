import HeaderLight from "@/components/gsf3/HeaderLight";
import HeroSection from "@/components/gsf3/HeroSection4";
import TrustBar from "@/components/gsf3/TrustBar4";
import CapabilitiesSection from "@/components/gsf3/CapabilitiesSection4";
import WhySection from "@/components/gsf3/WhySection4";
import IndustriesSection from "@/components/gsf3/IndustriesSection4";
import CertificationsSection from "@/components/gsf3/CertificationsSection4";
import StephenGouldSection from "@/components/gsf3/StephenGouldSection4";
import Footer from "@/components/gsf3/Footer4";

const GSF3 = () => {
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

export default GSF3;