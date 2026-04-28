import { motion } from "framer-motion";
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

const WhySection2 = () => {
  return (
    <section className="py-16 bg-surface-container-lowest">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={whyImage}
            alt="Precision industrial components on a dark workbench"
            loading="lazy"
            width={800}
            height={800}
            className="w-full aspect-square object-cover shadow-2xl brightness-90"
          />
          <div className="absolute -bottom-8 -right-8 machined-texture p-12 hidden md:block max-w-xs">
            <p className="font-headline font-black text-4xl text-white">100%</p>
            <p className="text-primary font-label text-[0.6875rem] uppercase tracking-widest mt-2">
              Focus on Precision
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-headline text-5xl font-extrabold tracking-tighter uppercase mb-12 leading-none">
            Specialized <br />
            <span className="text-secondary">Knowledge.</span>
          </h2>
          <div className="space-y-12">
            {points.map((point) => (
              <div key={point.num} className="flex gap-8">
                <span className="text-secondary font-headline font-black text-2xl">
                  {point.num}
                </span>
                <div>
                  <h4 className="font-headline font-bold uppercase tracking-widest text-sm mb-2">
                    {point.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection2;
