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
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
