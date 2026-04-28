import HeaderLight from "@/components/gsf2/HeaderLight";
import HeroSection from "@/components/gsf2/HeroSection4";
import TrustBar from "@/components/gsf2/TrustBar4";
import CapabilitiesSection from "@/components/gsf2/CapabilitiesSection4";
import WhySection from "@/components/gsf2/WhySection4";
import IndustriesSection from "@/components/gsf2/IndustriesSection4";
import CertificationsSection from "@/components/gsf2/CertificationsSection4";
import StephenGouldSection from "@/components/gsf2/StephenGouldSection4";
import Footer from "@/components/gsf2/Footer4";

const GSF2 = () => {
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

export default GSF2;
