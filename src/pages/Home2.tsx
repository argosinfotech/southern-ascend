import HeaderLight from "@/components/home2/HeaderLight";
import HeroSection from "@/components/home2/HeroSection4";
import TrustBar from "@/components/home2/TrustBar4";
import CapabilitiesSection from "@/components/home2/CapabilitiesSection4";
import WhySection from "@/components/home2/WhySection4";
import IndustriesSection from "@/components/home2/IndustriesSection4";
import CertificationsSection from "@/components/home2/CertificationsSection4";
import StephenGouldSection from "@/components/home2/StephenGouldSection4";
import Footer from "@/components/home2/Footer4";

const Home2 = () => {
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

export default Home2;
