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
    <section id="capabilities" className="py-16 px-6 md:px-12 bg-surface">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <span className="text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
              Core Systems
            </span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter mb-6">
              Engineered <br />Execution.
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Our integrated approach combines specialized design with turnkey
              fulfillment to ensure every component arrives verified and ready
              for deployment.
            </p>
          </motion.div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-surface-container-low p-8 border-l-2 border-secondary hover:bg-surface-container-high transition-colors group"
              >
                <cap.icon className="text-secondary mb-6 w-8 h-8" />
                <h3 className="font-headline font-bold uppercase tracking-tight text-xl mb-4">
                  {cap.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
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
