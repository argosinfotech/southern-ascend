import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const StephenGouldSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-dark">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent-warm font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Part of Something Bigger
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground tracking-tight mb-6">
              Specialized Execution.{" "}
              <span className="text-accent-warm">National Strength.</span>
            </h2>
            <p className="text-surface-dark-fg/70 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Gould Southern is a wholly owned subsidiary of Stephen Gould Corporation—one of
              the largest packaging and supply chain companies in the United States. This
              relationship gives our clients the best of both worlds: the focused expertise
              and responsiveness of a specialized operator, combined with the resources,
              infrastructure, and scale of a national organization.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 mt-12 mb-10">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary-foreground mb-1">40+</div>
                <div className="text-sm text-surface-dark-fg/60">Locations Nationwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary-foreground mb-1">80+</div>
                <div className="text-sm text-surface-dark-fg/60">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary-foreground mb-1">Top 10</div>
                <div className="text-sm text-surface-dark-fg/60">U.S. Packaging Company</div>
              </div>
            </div>
            <a
              href="https://www.stephengould.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.1em] text-accent-warm hover:text-accent-warm-hover transition-colors"
            >
              Visit Stephen Gould <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StephenGouldSection;
