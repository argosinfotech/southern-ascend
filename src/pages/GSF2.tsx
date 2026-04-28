import Header from "@/components/Header";
import HeroSection from "@/components/home2/HeroSection2";
import TrustBar from "@/components/TrustBar";
import CapabilitiesSection from "@/components/home2/CapabilitiesSection2";
import WhySection from "@/components/home2/WhySection2";
import IndustriesSection from "@/components/home2/IndustriesSection2";
import CertificationsSection from "@/components/home2/CertificationsSection2";
import StephenGouldSection from "@/components/home2/StephenGouldSection2";
import Footer from "@/components/Footer";

const Home2 = () => {
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

export default Home2;
