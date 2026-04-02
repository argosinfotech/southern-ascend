import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection3 = () => {
  return (
    <section className="relative min-h-[700px] flex items-center px-6 md:px-12 py-16 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="High-tech manufacturing facility"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE6] via-[#F5EFE6]/90 to-[#F5EFE6]/60" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-[#EBE3D5] text-gray-700 font-label text-[0.6875rem] uppercase tracking-[0.2em] px-3 py-1 mb-8"
        >
          Industrial Excellence
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headline text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tighter mb-8 uppercase text-gray-900"
        >
          Mission-Critical{" "}
          <span className="text-secondary">Kitting & Packaging</span> for
          High-Consequence Industries.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg max-w-2xl mb-12 font-body leading-relaxed"
        >
          Where precision meets protection. Gould Southern delivers engineered
          logistics and specialized kitting solutions designed for the
          zero-failure environments of Aerospace, Defense, and Global
          Infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-6"
        >
          <a
            href="#contact"
            className="bg-secondary text-white px-8 py-4 font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 transition-all"
          >
            Request a Consultation
          </a>
          <a
            href="#capabilities"
            className="border border-[#D4C9B8] text-gray-900 px-8 py-4 font-headline font-bold uppercase text-sm tracking-widest hover:bg-[#EBE3D5] transition-all"
          >
            Explore Our Capabilities
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection3;
