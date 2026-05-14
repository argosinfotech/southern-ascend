import { motion } from "framer-motion";

const certs = [
  { title: "AS9100:D", subtitle: "Certified Quality" },
  { title: "ISO 9001:2015", subtitle: "Global Standards" },
  { title: "AS9120:B", subtitle: "Distribution & Stockist" },
  { title: "AS9100:D", subtitle: "Aviation & Defense" },
];

const TrustBar = () => {
  return (
    <section className="relative bg-[#FAF8F5] py-10 px-6 md:px-12 border-t border-[#E8E2D9]">
      <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-start group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="block w-6 h-[2px] bg-secondary" />
              <span className="text-[#1E3448] font-headline font-black text-xl group-hover:text-secondary transition-colors duration-300">
                {cert.title}
              </span>
            </div>
            <span className="text-[#1E3448]/50 font-label text-[0.6875rem] uppercase tracking-widest pl-9">
              {cert.subtitle}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
