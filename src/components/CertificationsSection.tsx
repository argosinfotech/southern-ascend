import { motion } from "framer-motion";

const CertificationsSection = () => {
  return (
    <section id="quality" className="py-16 px-6 md:px-12 machined-texture">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="md:w-1/2">
          <h2 className="font-headline text-3xl font-extrabold tracking-tighter uppercase mb-4">
            Quality Without Compromise
          </h2>
          <p className="text-primary/70 leading-relaxed">
            Our facilities are audited to the most rigorous standards in global
            logistics. We maintain active compliance to ensure the security and
            integrity of your assets.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-background/40 backdrop-blur-md p-8 border border-white/5 text-center">
            <span className="block text-secondary font-black text-2xl mb-2">
              AS9100:D
            </span>
            <span className="text-xs uppercase tracking-widest text-white/60">
              Aviation
            </span>
          </div>
          <div className="bg-background/40 backdrop-blur-md p-8 border border-white/5 text-center">
            <span className="block text-secondary font-black text-2xl mb-2">
              ISO 9001
            </span>
            <span className="text-xs uppercase tracking-widest text-white/60">
              Quality Mgmt
            </span>
          </div>
          <div className="bg-background/40 backdrop-blur-md p-8 border border-white/5 text-center">
            <span className="block text-secondary font-black text-2xl mb-2">
              AS9120:B
            </span>
            <span className="text-xs uppercase tracking-widest text-white/60">
              Distribution & Stockist
            </span>
          </div>
          <div className="bg-background/40 backdrop-blur-md p-8 border border-white/5 text-center">
            <span className="block text-secondary font-black text-2xl mb-2">
              AS9100:D
            </span>
            <span className="text-xs uppercase tracking-widest text-white/60">
              Aviation & Defense
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
