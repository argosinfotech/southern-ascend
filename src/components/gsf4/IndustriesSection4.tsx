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
    <section id="industries" className="relative py-28 px-6 md:px-12 bg-white overflow-hidden">
      {/* Top gradient bleed */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAF8F5] to-transparent" />

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-[#1E3448]/60 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
              Market Verticals
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448]">
              Deployed Expertise.
            </h2>
            <div className="w-12 h-[3px] bg-secondary mt-5" />
          </motion.div>
          <div className="hidden md:block w-1/3 h-px bg-gradient-to-l from-[#D4C9B8]/60 to-transparent mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group overflow-hidden h-[520px] cursor-pointer rounded-lg"
            >
              {/* Image with zoom on hover */}
              <img
                src={ind.image}
                alt={ind.title}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
              />

              {/* Multi-layer overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3448]/80 via-[#1E3448]/20 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#1E3448]/0 group-hover:bg-[#1E3448]/30 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <div className="w-8 h-[2px] bg-secondary mb-4 transition-all duration-500 group-hover:w-12" />
                <h3 className="font-headline font-bold text-2xl uppercase mb-3 text-white">
                  {ind.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {ind.description}
                </p>
              </div>

              {/* Top-right accent */}
              <div className="absolute top-6 right-6 w-3 h-3 border border-white/20 group-hover:border-secondary/60 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
