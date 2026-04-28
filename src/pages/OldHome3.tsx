import Header from "@/components/Header";
import HeroSection from "@/components/oldhome3/HeroSection3";
import TrustBar from "@/components/oldhome3/TrustBar3";
import CapabilitiesSection from "@/components/oldhome3/CapabilitiesSection3";
import WhySection from "@/components/oldhome3/WhySection3";
import IndustriesSection from "@/components/oldhome3/IndustriesSection3";
import CertificationsSection from "@/components/oldhome3/CertificationsSection3";
import StephenGouldSection from "@/components/oldhome3/StephenGouldSection3";
import Footer from "@/components/oldhome3/Footer3";

const OldHome3 = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
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

export default OldHome3;
