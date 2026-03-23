import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent-warm font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Certifications & Quality
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-6">
              Quality Isn't a Department.{" "}
              <span className="text-accent-warm">It's the Standard.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every solution we deliver is produced under certified quality management systems
              that meet the highest standards in aerospace and defense. Process discipline,
              consistency, and continuous improvement are embedded in how we operate—not treated
              as afterthoughts.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-accent-warm flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-foreground">AS9100:D Certified</h4>
                  <p className="text-sm text-muted-foreground">
                    The aerospace industry's quality management standard, ensuring rigorous process control and traceability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-accent-warm flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-foreground">ISO 9001:2015 Certified</h4>
                  <p className="text-sm text-muted-foreground">
                    International quality management standard demonstrating consistent, documented operational processes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card border border-border rounded-lg p-10 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">
              Trusted Execution
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our quality management system ensures every kit, every package, and every shipment
              meets documented standards—providing the audit trail and confidence that
              aerospace and defense programs demand.
            </p>
            <div className="flex justify-center gap-6 pt-4 border-t border-border">
              <div>
                <div className="text-2xl font-display font-bold text-accent-warm">AS9100:D</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Aerospace QMS</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-2xl font-display font-bold text-accent-warm">ISO 9001</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Quality Standard</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
