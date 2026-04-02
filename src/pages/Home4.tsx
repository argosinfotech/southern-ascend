import HeaderLight from "@/components/home4/HeaderLight";
import HeroSection from "@/components/home4/HeroSection4";
import TrustBar from "@/components/home4/TrustBar4";
import CapabilitiesSection from "@/components/home4/CapabilitiesSection4";
import WhySection from "@/components/home4/WhySection4";
import IndustriesSection from "@/components/home4/IndustriesSection4";
import CertificationsSection from "@/components/home4/CertificationsSection4";
import StephenGouldSection from "@/components/home4/StephenGouldSection4";
import Footer from "@/components/home4/Footer4";

const Home4 = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
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

export default Home4;
