import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const StephenGouldSection = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Stephen Gould info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8"
        >
          <span className="text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
            Strategic Partnership
          </span>
          <h2 className="font-headline text-4xl font-extrabold tracking-tighter mb-8">
            Specialized Service with Expanded Reach
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-3xl">
            Gould Southern combines the responsiveness of a specialized
            packaging partner with the advantages of a broader strategic
            network. Clients get direct access to a team focused on execution,
            backed by expanded sourcing, logistics, and operational support
            through the Stephen Gould network.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-highest p-6">
              <h4 className="font-headline font-bold text-white mb-2">
                Regional Reach
              </h4>
              <p className="text-on-surface-variant text-sm">
                A broad North American network helps support regional
                fulfillment and multi-market execution.
              </p>
            </div>
            <div className="bg-surface-container-highest p-6">
              <h4 className="font-headline font-bold text-white mb-2">
                Scalable Support
              </h4>
              <p className="text-on-surface-variant text-sm">
                Flexible sourcing, production, and logistics capabilities help
                meet changing volume and timeline needs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="contact"
          className="lg:col-span-4 bg-background p-12 border-t-8 border-secondary"
        >
          <h3 className="font-headline font-bold text-xl uppercase mb-6">
            Connect with Us
          </h3>
          <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
            Discuss your project requirements with our technical sales team for
            a custom-engineered proposal.
          </p>
          <ul className="space-y-6 mb-12">
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-secondary" />
              <span className="text-sm font-label tracking-wide uppercase">
                sales@gouldsouthern.com
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-secondary" />
              <span className="text-sm font-label tracking-wide uppercase">
                +1 (770) 476-1860
              </span>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-sm font-label tracking-wide uppercase">
                Duluth, Georgia
              </span>
            </li>
          </ul>
          <a
            href="mailto:sales@gouldsouthern.com"
            className="block w-full bg-secondary text-on-secondary-container py-4 font-headline font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 transition-all text-center"
          >
            Initiate Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StephenGouldSection;
