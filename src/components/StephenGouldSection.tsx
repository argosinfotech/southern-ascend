import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const StephenGouldSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-surface-container-low">
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
            Global Strength, Local Focus
          </span>
          <h2 className="font-headline text-4xl font-extrabold tracking-tighter uppercase mb-8">
            Part of the <br />Stephen Gould Network.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-3xl">
            Gould Southern operates as a specialized execution arm within the
            Stephen Gould ecosystem. This gives our clients the personal
            attention and deep technical expertise of a boutique engineering
            firm, reinforced by the world-class resources, logistics
            infrastructure, and financial stability of a global leader in
            industrial packaging.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-highest p-6">
              <h4 className="font-headline font-bold text-white mb-2">
                40+ Locations
              </h4>
              <p className="text-on-surface-variant text-sm">
                Access to a sprawling North American footprint for regional
                fulfillment and rapid scale.
              </p>
            </div>
            <div className="bg-surface-container-highest p-6">
              <h4 className="font-headline font-bold text-white mb-2">
                Infinite Resource
              </h4>
              <p className="text-on-surface-variant text-sm">
                Leverage group procurement and massive manufacturing capacity on
                demand.
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
