import { motion } from "framer-motion";

const CertificationsSection = () => {
  return (
    <section id="quality" className="relative py-24 px-6 md:px-12 bg-[#082a40] overflow-hidden">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#082a40] via-[#062336] to-[#041c2e]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(214,120,50,0.05) 0%, transparent 60%)"
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-[1920px] mx-auto text-center relative z-10"
      >
        <span className="text-white/40 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
          Compliance & Trust
        </span>
        <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tighter uppercase mb-4 text-white">
          Quality Without Compromise
        </h2>
        <div className="w-12 h-[3px] bg-secondary mx-auto mb-6" />
        <p className="text-white/50 leading-relaxed max-w-3xl mx-auto text-lg">
          Our facilities are audited to the most rigorous standards in global
          logistics. We maintain active compliance to ensure the security and
          integrity of your assets.
        </p>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
