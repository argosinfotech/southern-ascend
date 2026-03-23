import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import solutionToolkit from "@/assets/solution-toolkit.jpg";
import solutionRfid from "@/assets/solution-rfid.jpg";
import solutionKitting from "@/assets/solution-kitting.jpg";

const solutions = [
  {
    image: solutionToolkit,
    title: "Custom Tool Control Programs",
    description:
      "Complete tool accountability systems with precision-cut foam inserts, shadow boards, and inventory tracking for maintenance environments.",
    category: "Tool Management",
  },
  {
    image: solutionRfid,
    title: "RFID-Enabled Asset Tracking",
    description:
      "Integrated RFID solutions for real-time asset visibility, automated inventory management, and FOD prevention compliance.",
    category: "Technology Integration",
  },
  {
    image: solutionKitting,
    title: "Aerospace Kitting Systems",
    description:
      "Production-ready kitting programs that deliver the right components, in the right configuration, at the right time.",
    category: "Program Execution",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-accent-warm font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Featured Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-4">
            Programs Built to Perform
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Representative solutions that demonstrate our approach to complex packaging and kitting challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-5">
                <img
                  src={sol.image}
                  alt={sol.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-warm mb-2 block">
                {sol.category}
              </span>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-accent-warm transition-colors">
                {sol.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {sol.description}
              </p>
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.1em] text-primary group-hover:text-accent-warm transition-colors">
                View Details <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
