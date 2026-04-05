import { motion } from "framer-motion";

const certs = [
  { title: "AS9100:D", subtitle: "Certified Quality" },
  { title: "ISO 9001:2015", subtitle: "Global Standards" },
  { title: "AS9120:B", subtitle: "Distribution & Stockist" },
  { title: "AS9100:D", subtitle: "Aviation & Defense" },
];

const TrustBar = () => {
  return (
    <section className="relative bg-[#1E3448] py-10 px-6 md:px-12">
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
            <span className="text-white font-headline font-black text-xl mb-1 group-hover:text-secondary transition-colors duration-300">
              {cert.title}
            </span>
            <span className="text-white/40 font-label text-[0.6875rem] uppercase tracking-widest">
              {cert.subtitle}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
