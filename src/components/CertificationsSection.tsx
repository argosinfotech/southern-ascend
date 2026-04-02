import { motion } from "framer-motion";
import qualityBg from "@/assets/quality-bg.jpg";

const CertificationsSection = () => {
  return (
    <section id="quality" className="relative py-16 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={qualityBg}
          alt="Industrial quality inspection"
          loading="lazy"
          width={1920}
          height={800}
          className="w-full h-full object-cover opacity-30 brightness-50"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-[1920px] mx-auto text-center"
      >
        <h2 className="font-headline text-3xl font-extrabold tracking-tighter mb-4">
          Quality Without Compromise
        </h2>
        <p className="text-primary/70 leading-relaxed max-w-3xl mx-auto">
          Our facilities are audited to the most rigorous standards in global
          logistics. We maintain active compliance to ensure the security and
          integrity of your assets.
        </p>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
