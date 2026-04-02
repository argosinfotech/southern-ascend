import Header from "@/components/Header";
import HeroSection from "@/components/home3/HeroSection3";
import TrustBar from "@/components/TrustBar";
import CapabilitiesSection from "@/components/home3/CapabilitiesSection3";
import WhySection from "@/components/home3/WhySection3";
import IndustriesSection from "@/components/home3/IndustriesSection3";
import CertificationsSection from "@/components/home3/CertificationsSection3";
import StephenGouldSection from "@/components/home3/StephenGouldSection3";
import Footer from "@/components/Footer";

const Home3 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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

export default Home3;
