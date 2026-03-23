import { motion } from "framer-motion";

const industries = [
  {
    title: "Aerospace",
    description: "Precision packaging and kitting for flight-critical components, MRO programs, and OEM supply chains.",
    tags: ["Traceability", "FOD Control", "AS9100:D"],
  },
  {
    title: "Defense & Government",
    description: "Tool control, deployment kits, and asset management solutions for military readiness programs.",
    tags: ["Tool Accountability", "Readiness", "Compliance"],
  },
  {
    title: "Industrial Operations",
    description: "Custom kitting and packaging that reduces downtime, improves organization, and supports lean operations.",
    tags: ["Efficiency", "Organization", "Quality Control"],
  },
  {
    title: "High-Precision Equipment",
    description: "Engineered protective solutions for sensitive instruments, calibration equipment, and critical assemblies.",
    tags: ["Protection", "Custom Foam", "Reusability"],
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 md:py-28 bg-surface-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-accent-warm font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Industries We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground tracking-tight mb-4">
            Built for Environments Where Failure Isn't an Option
          </h2>
          <p className="text-surface-dark-fg/70 text-lg leading-relaxed">
            Our solutions are designed for sectors that demand operational reliability, traceability, and zero-defect quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface-slate rounded-lg p-8 border border-surface-slate hover:border-accent-warm/30 transition-all duration-300"
            >
              <h3 className="text-xl font-display font-bold text-primary-foreground mb-3">
                {ind.title}
              </h3>
              <p className="text-surface-dark-fg/70 text-sm leading-relaxed mb-5">
                {ind.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {ind.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium uppercase tracking-[0.1em] text-accent-warm bg-accent-warm/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
