import { motion } from "framer-motion";

const CertificationsSection3 = () => {
  return (
    <section id="quality" className="py-16 px-6 md:px-12 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1920px] mx-auto text-center"
      >
        <h2 className="font-headline text-3xl font-extrabold tracking-tighter uppercase mb-4 text-white">
          Quality Without Compromise
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Our facilities are audited to the most rigorous standards in global
          logistics. We maintain active compliance to ensure the security and
          integrity of your assets.
        </p>
      </motion.div>
    </section>
  );
};

export default CertificationsSection3;
