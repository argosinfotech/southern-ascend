import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const StephenGouldSection = () => {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-[#FAF8F5] overflow-hidden">
      {/* Top transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-7"
        >
          <span className="text-[#1E3448]/60 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
            Strategic Partnership
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mb-6 text-gray-900 leading-none">
            Specialized Service with Expanded Reach
          </h2>
          <div className="w-12 h-[3px] bg-secondary mb-8" />
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
            Gould Southern combines the responsiveness of a specialized
            packaging partner with the advantages of a broader strategic
            network. Clients get direct access to a team focused on execution,
            backed by expanded sourcing, logistics, and operational support
            through the Stephen Gould network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          id="contact"
          className="lg:col-span-5 bg-white p-10 md:p-12 shadow-xl relative group rounded-lg"
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary to-secondary/60" />

          <h3 className="font-headline font-bold text-xl uppercase mb-2 text-gray-900">
            Connect with Us
          </h3>
          <div className="w-8 h-[2px] bg-secondary/40 mb-6" />
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Discuss your project requirements with our technical sales team for
            a custom-engineered proposal.
          </p>
          <ul className="space-y-5 mb-10">
            <li className="flex items-center gap-4 group/item">
              <div className="w-10 h-10 bg-[#FAF8F5] flex items-center justify-center group-hover/item:bg-secondary/10 transition-colors duration-300 rounded-md">
                <Mail className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-sm font-label tracking-wide uppercase text-gray-600">
                sales@gouldsouthern.com
              </span>
            </li>
            <li className="flex items-center gap-4 group/item">
              <div className="w-10 h-10 bg-[#FAF8F5] flex items-center justify-center group-hover/item:bg-secondary/10 transition-colors duration-300 rounded-md">
                <Phone className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-sm font-label tracking-wide uppercase text-gray-600">
                +1 (770) 476-1860
              </span>
            </li>
            <li className="flex items-center gap-4 group/item">
              <div className="w-10 h-10 bg-[#FAF8F5] flex items-center justify-center group-hover/item:bg-secondary/10 transition-colors duration-300 rounded-md">
                <MapPin className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-sm font-label tracking-wide uppercase text-gray-600">
                Duluth, Georgia
              </span>
            </li>
          </ul>
          <a
            href="mailto:sales@gouldsouthern.com"
            className="block w-full bg-secondary text-white py-4 font-headline font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 text-center rounded-md"
          >
            Initiate Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StephenGouldSection;
