import { motion } from "framer-motion";
import { Package, Wrench, Plane, Radio } from "lucide-react";
import earthBg from "@/assets/earth-horizon-bg.jpg";

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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT — Alternating image / text rows */}
      <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-[1920px] mx-auto relative z-10">

        {/* Alternating image / text rows */}
        <div className="space-y-20 md:space-y-28">
          {capabilities.map((cap, i) => {
            // Flipped: first row starts with TEXT on the left, IMAGE on the right
            const reverse = i % 2 === 0;
            return (
              <div
                key={cap.title}
                className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`md:col-span-6 ${reverse ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="relative overflow-hidden rounded-lg border border-[#E8E2D9] bg-[#FAF8F5] shadow-sm group">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`md:col-span-6 ${reverse ? "md:order-1" : "md:order-2"}`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-white border border-[#E8E2D9] mb-5 shadow-sm">
                    <cap.icon className="text-secondary w-6 h-6" />
                  </div>
                  <span className="text-[#1E3448]/50 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-3">
                    {String(i + 1).padStart(2, "0")} — Capability
                  </span>
                  <h3 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tighter uppercase mb-4 text-[#1E3448] leading-none">
                    {cap.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-6">
                    {cap.description}
                  </p>
                  <ul className="space-y-3">
                    {cap.points.map((point) => (
                      <li key={point} className="flex gap-3 items-start">
                        <span className="mt-[6px] inline-flex items-center justify-center w-4 h-4 rounded-sm bg-secondary/10 shrink-0">
                          <Check className="w-3 h-3 text-secondary" strokeWidth={3} />
                        </span>
                        <span className="text-gray-600 text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
        </div>
      </section>
    </>
  );
};

export default CapabilitiesSection;
