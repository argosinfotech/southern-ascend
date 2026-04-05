import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import whyImage from "@/assets/why-section.jpg";

const points = [
  {
    num: "01",
    title: "Technical Authority",
    description:
      "Deep domain expertise in industrial packaging engineering and complex kitting logistics for defense applications.",
  },
  {
    num: "02",
    title: "Quality Rigor",
    description:
      "Every process is governed by AS9100D protocols, ensuring total accountability from receipt to final delivery.",
  },
  {
    num: "03",
    title: "Operational Speed",
    description:
      "Agile execution models backed by the massive procurement power of the global Stephen Gould network.",
  },
];

const WhySection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background tone shift */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAF8F5] to-[#FAF8F5]" />

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <div className="relative overflow-hidden shadow-2xl">
            <motion.img
              src={whyImage}
              alt="Precision industrial components on a dark workbench"
              loading="lazy"
              width={800}
              height={800}
              className="w-full aspect-[4/5] object-cover"
              style={{ y: imageY }}
            />
            {/* Image overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3448]/40 via-transparent to-[#1E3448]/10" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-6 -right-6 bg-white border border-[#E8E2D9] p-10 hidden md:block max-w-[200px] shadow-xl"
          >
            <p className="font-headline font-black text-4xl text-secondary">100%</p>
            <p className="text-gray-400 font-label text-[0.6875rem] uppercase tracking-widest mt-2">
              Focus on Precision
            </p>
          </motion.div>

          {/* Decorative line */}
          <div className="absolute -left-4 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-secondary/30 to-transparent hidden lg:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-[#1E3448]/60 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
            Why Us
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mb-6 leading-none text-gray-900">
            Specialized <br />
            <span className="text-secondary">Knowledge.</span>
          </h2>
          <div className="w-12 h-[3px] bg-secondary mb-12" />

          <div className="space-y-10">
            {points.map((point, i) => (
              <motion.div
                key={point.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex gap-6 group"
              >
                <span className="text-secondary/40 group-hover:text-secondary font-headline font-black text-2xl transition-colors duration-500 shrink-0">
                  {point.num}
                </span>
                <div>
                  <h4 className="font-headline font-bold uppercase tracking-widest text-sm mb-2 text-gray-900 group-hover:text-secondary transition-colors duration-300">
                    {point.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
