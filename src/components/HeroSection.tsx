import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const trustPoints = [
  "AS9100:D Certified",
  "ISO 9001:2015",
  "Aerospace & Military",
  "Custom Tool Kitting",
  "Turnkey Solutions",
  "Stephen Gould Network",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Precision aerospace tool kitting facility"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/90 to-surface-dark/60" />
      </div>

      <div className="container relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent-warm font-display font-semibold text-sm uppercase tracking-[0.2em] mb-6"
          >
            Precision Packaging & Kitting for Critical Programs
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] tracking-tight mb-6"
          >
            Engineered Packaging.{" "}
            <span className="text-accent-warm">Certified Quality.</span>{" "}
            Mission-Ready Solutions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-surface-dark-fg/80 max-w-2xl mb-10 leading-relaxed"
          >
            Gould Southern delivers custom kitting, toolkits, packaging, and
            turnkey logistics solutions for aerospace, defense, and
            industrial programs—backed by AS9100:D certification and the
            strength of the Stephen Gould network.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="accent" size="lg" asChild>
              <a href="#contact">
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outlineLight" size="lg" asChild>
              <a href="#capabilities">
                Explore Capabilities <ChevronDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-trust-badge-bg/90 backdrop-blur-sm border-t border-surface-slate">
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="text-xs md:text-sm font-medium text-trust-badge-fg uppercase tracking-[0.15em]"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
