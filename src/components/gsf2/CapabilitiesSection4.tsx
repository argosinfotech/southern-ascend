import { motion } from "framer-motion";
import { Package, Wrench, Plane, Radio } from "lucide-react";

const capabilities = [
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Protective solutions engineered for high-value sensitive components.",
  },
  {
    icon: Wrench,
    title: "Kitting & Toolkits",
    description: "Streamlined assembly of complex toolsets and mission-ready kits.",
  },
  {
    icon: Plane,
    title: "Aerospace & Military",
    description: "Compliant logistics tailored for defense and government support.",
  },
  {
    icon: Radio,
    title: "RFID / FOD Solutions",
    description: "Automated asset tracking and Foreign Object Debris prevention.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
      {/* Top gradient bleed from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAF8F5] to-transparent z-0" />

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-5 md:sticky md:top-32"
          >
            <span className="text-[#1E3448]/60 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
              Core Systems
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mb-6 text-brand-blue leading-none">
              Engineered <br />Execution.
            </h2>
            <div className="w-12 h-[3px] bg-secondary mb-6" />
            <p className="text-gray-500 leading-relaxed text-lg">
              Our integrated approach combines specialized design with turnkey
              fulfillment to ensure every component arrives verified and ready
              for deployment.
            </p>
          </motion.div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-[#FAF8F5] border border-[#E8E2D9] p-10 group hover:bg-white hover:shadow-lg hover:border-secondary/20 transition-all duration-500 relative rounded-lg overflow-hidden"
              >
                {/* Subtle top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-lg" />
                <cap.icon className="text-secondary mb-6 w-7 h-7" />
                <h3 className="font-headline font-bold uppercase tracking-tight text-lg mb-3 text-gray-900">
                  {cap.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
