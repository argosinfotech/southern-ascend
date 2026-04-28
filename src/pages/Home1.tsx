import HeaderLight from "@/components/home1/HeaderLight";
import HeroSection from "@/components/home1/HeroSection4";
import TrustBar from "@/components/home1/TrustBar4";
import CapabilitiesSection from "@/components/home1/CapabilitiesSection4";
import WhySection from "@/components/home1/WhySection4";
import IndustriesSection from "@/components/home1/IndustriesSection4";
import CertificationsSection from "@/components/home1/CertificationsSection4";
import StephenGouldSection from "@/components/home1/StephenGouldSection4";
import Footer from "@/components/home1/Footer4";

const Home1 = () => {
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

export default Home1;