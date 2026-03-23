import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, Network } from "lucide-react";

const proofPoints = [
  {
    icon: Clock,
    title: "Decades of Experience",
    description: "Proven track record delivering complex packaging and kitting programs for the most demanding industries.",
  },
  {
    icon: Shield,
    title: "Certified Quality Systems",
    description: "AS9100:D and ISO 9001:2015 certified—quality is built into every process, every time.",
  },
  {
    icon: Users,
    title: "Specialized Industry Knowledge",
    description: "Deep expertise in aerospace, defense, and industrial applications that require zero-defect execution.",
  },
  {
    icon: Award,
    title: "Dependable Execution",
    description: "Consistent, on-time delivery with rigorous process controls and continuous improvement discipline.",
  },
  {
    icon: Network,
    title: "Stephen Gould Ecosystem",
    description: "Access to a nationwide network of resources, capabilities, and supply chain infrastructure.",
  },
];

const TrustSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-accent-warm font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Why Gould Southern
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-4">
            Trust Built on Performance
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            When programs demand certified quality, reliable execution, and specialized expertise, operators choose Gould Southern.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proofPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
