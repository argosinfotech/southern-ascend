import { motion } from "framer-motion";
import industryAerospace from "@/assets/industry-aerospace.jpg";
import industryDefense from "@/assets/industry-defense.jpg";
import industryIndustrial from "@/assets/industry-industrial.jpg";

const industries = [
  {
    image: industryAerospace,
    title: "Aerospace",
    description:
      "Supporting major OEMs and Tier 1 suppliers with high-precision part kitting and FAA-compliant packaging.",
  },
  {
    image: industryDefense,
    title: "Defense & Gov",
    description:
      "Robust logistics solutions meeting MIL-SPEC requirements for deployment-ready equipment kits.",
  },
  {
    image: industryIndustrial,
    title: "Industrial Ops",
    description:
      "Turnkey fulfillment and RFID tracking for complex manufacturing environments and supply chains.",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-16 px-6 md:px-12 bg-surface">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
              Market Verticals
            </span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter">
              Deployed Expertise.
            </h2>
          </motion.div>
          <div className="hidden md:block w-1/3 h-[2px] bg-primary-container mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group overflow-hidden h-[500px]"
            >
              <img
                src={ind.image}
                alt={ind.title}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/30 to-transparent">
                <h3 className="font-headline font-bold text-2xl uppercase mb-4">
                  {ind.title}
                </h3>
                <p className="text-on-surface-variant text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {ind.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
