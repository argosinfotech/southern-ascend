import { motion } from "framer-motion";

const certs = [
  { title: "AS9100:D", subtitle: "Certified Quality" },
  { title: "ISO 9001:2015", subtitle: "Global Standards" },
  { title: "AS9120:B", subtitle: "Distribution & Stockist" },
  { title: "AS9100:D", subtitle: "Aviation & Defense" },
];

const TrustBar = () => {
  return (
    <section className="relative bg-[#FAF8F5] py-12 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center md:items-start group"
          >
            <span className="text-[#1E3448] font-headline font-black text-xl mb-1 group-hover:text-secondary transition-colors duration-300">
              {cert.title}
            </span>
            <span className="text-gray-400 font-label text-[0.6875rem] uppercase tracking-widest">
              {cert.subtitle}
            </span>
          </motion.div>
        ))}
      </div>
      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 h-px bg-gradient-to-r from-transparent via-[#D4C9B8]/60 to-transparent" />
    </section>
  );
};

export default TrustBar;
