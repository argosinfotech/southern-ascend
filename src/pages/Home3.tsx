import HeaderLight from "@/components/home3/HeaderLight";
import HeroSection from "@/components/home3/HeroSection4";
import TrustBar from "@/components/home3/TrustBar4";
import CapabilitiesSection from "@/components/home3/CapabilitiesSection4";
import WhySection from "@/components/home3/WhySection4";
import IndustriesSection from "@/components/home3/IndustriesSection4";
import CertificationsSection from "@/components/home3/CertificationsSection4";
import StephenGouldSection from "@/components/home3/StephenGouldSection4";
import Footer from "@/components/home3/Footer4";

const Home3 = () => {
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

export default Home3;