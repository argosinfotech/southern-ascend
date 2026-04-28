import { motion } from "framer-motion";
import { Package, Wrench, Plane, Radio, Check } from "lucide-react";
import capPackaging from "@/assets/cap-packaging.jpg";
import capKitting from "@/assets/cap-kitting.jpg";
import capAerospace from "@/assets/cap-aerospace.jpg";
import capRfid from "@/assets/cap-rfid.jpg";

const capabilities = [
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Protective solutions engineered for high-value sensitive components.",
    image: capPackaging,
    points: [
      "ESD-safe and climate-controlled enclosures for sensitive electronics",
      "Custom foam, fixtures and inserts engineered per component geometry",
      "Reusable and returnable systems for closed-loop programs",
      "Validated drop, vibration and shock testing on request",
    ],
  },
  {
    icon: Wrench,
    title: "Kitting & Toolkits",
    description: "Streamlined assembly of complex toolsets and mission-ready kits.",
    image: capKitting,
    points: [
      "Mission-ready toolkits assembled to exact build-of-materials",
      "Serialized component traceability from receipt to deployment",
      "Shadowboard layouts and FOD-controlled tool accountability",
      "Scalable from prototype kits to recurring production runs",
    ],
  },
  {
    icon: Plane,
    title: "Aerospace & Military",
    description: "Compliant logistics tailored for defense and government support.",
    image: capAerospace,
    points: [
      "AS9100D and ISO 9001 governed processes end-to-end",
      "ITAR-aware handling for controlled defense components",
      "MIL-SPEC packaging, marking and barcoding compliance",
      "Secure storage and managed release for program timelines",
    ],
  },
  {
    icon: Radio,
    title: "RFID / FOD Solutions",
    description: "Automated asset tracking and Foreign Object Debris prevention.",
    image: capRfid,
    points: [
      "RFID-tagged kits with automated check-in / check-out workflows",
      "FOD-prevention shadowboards and tethered tool systems",
      "Real-time visibility across distributed inventory locations",
      "Integrates with existing ERP and MES platforms",
    ],
  },
];

const CapabilitiesSection = () => {
  return (
    <>
      {/* DARK INTRO BAND — Engineered Execution */}
      <section id="capabilities" className="relative px-6 md:px-12 py-20 md:py-24 bg-[#0B2238] overflow-hidden">
        {/* Atmospheric layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2238] via-[#0A1E32] to-[#06182A]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(56,120,170,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

        <div className="max-w-[1920px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl mb-16"
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

          {/* 4 capability mini-cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-[#0B2238] p-7 group hover:bg-[#0E2A44] transition-colors duration-300"
              >
                <cap.icon className="text-secondary w-6 h-6 mb-5" />
                <h3 className="font-headline font-extrabold text-white text-base uppercase tracking-tight mb-3">
                  {cap.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
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
