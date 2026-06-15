import { motion } from "framer-motion";
import { Wrench, Radio, Plane, Landmark, ArrowRight } from "lucide-react";
import earthBg from "@/assets/earth-horizon-bg.jpg";

const capabilities = [
  {
    icon: Wrench,
    title: "Kitting & Toolkits",
    description: "Streamlined assembly of complex toolsets and mission-ready kits.",
  },
  {
    icon: Radio,
    title: "RFID / FOD",
    description: "Automated asset tracking and Foreign Object Debris prevention.",
  },
  {
    icon: Plane,
    title: "Compliant Logistics",
    description: "Compliant logistics tailored for defense and government support.",
  },
  {
    icon: Landmark,
    title: "Government Contracting",
    description: "Full-service contracting and procurement support for federal agencies and defense programs.",
  },
];

const CapabilitiesSection = () => {
  return (
    <>
      {/* DARK INTRO BAND — Engineered Execution */}
      <section id="capabilities" className="relative px-6 md:px-12 py-24 md:py-32 bg-[#082A40] overflow-hidden">
        {/* Earth horizon background */}
        <div className="absolute inset-0">
          <img
            src={earthBg}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Color wash + readability overlays */}
        <div className="absolute inset-0 bg-[#082A40]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082A40] via-[#082A40]/60 to-[#082A40]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#082A40]/40 via-transparent to-[#082A40]/60" />

        <div className="max-w-[1920px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl mb-20"
          >
            <span className="text-white/50 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
              Core Systems
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mb-6 text-white leading-none">
              Engineered Execution.
            </h2>
            <div className="w-12 h-[3px] bg-secondary mb-6" />
            <p className="text-white/60 leading-relaxed text-lg">
              Our integrated approach combines specialized design with turnkey
              fulfillment to ensure every component arrives verified and ready
              for deployment.
            </p>
          </motion.div>

          {/* 4 capability columns with vertical dotted dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`px-6 md:px-8 py-6 ${
                  i > 0 ? "lg:border-l lg:border-dashed lg:border-white/20" : ""
                }`}
              >
                <cap.icon className="text-secondary w-7 h-7 mb-8" strokeWidth={1.75} />
                <h3 className="font-headline font-extrabold text-white text-lg md:text-xl uppercase tracking-tight mb-5">
                  {cap.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {cap.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 mt-5 text-secondary text-sm font-medium hover:text-secondary/80 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CapabilitiesSection;
