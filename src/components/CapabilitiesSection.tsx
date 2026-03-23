import { motion } from "framer-motion";
import { Package, Wrench, Plane, Radio, Database, Truck } from "lucide-react";

const capabilities = [
  {
    icon: Package,
    title: "Custom Packaging Solutions",
    description:
      "Engineered protective packaging designed to specification for high-value, sensitive, and mission-critical components.",
  },
  {
    icon: Wrench,
    title: "Kitting & Toolkits",
    description:
      "Precision tool control kits with custom foam inserts, shadow boards, and organized assemblies built for operational readiness.",
  },
  {
    icon: Plane,
    title: "Aerospace & Military Programs",
    description:
      "Specialized packaging and kitting solutions meeting the stringent requirements of aerospace and defense applications.",
  },
  {
    icon: Radio,
    title: "RFID & FOD Reduction",
    description:
      "Advanced tracking and foreign object debris prevention solutions that improve traceability and compliance.",
  },
  {
    icon: Database,
    title: "Layout, Data & Program Integration",
    description:
      "End-to-end program design, data management, and integration services for complex packaging programs.",
  },
  {
    icon: Truck,
    title: "Logistics & Turnkey Fulfillment",
    description:
      "Complete fulfillment solutions from warehousing through delivery, managed under one quality system.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-accent-warm font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-4">
            Built for Demanding Programs
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Six specialized disciplines, one certified quality system. Every capability is designed
            to deliver operational reliability at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-accent-warm/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-accent-warm/10 transition-colors">
                <cap.icon className="w-6 h-6 text-primary group-hover:text-accent-warm transition-colors" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {cap.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cap.description}
              </p>
              <div className="mt-5">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-warm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
