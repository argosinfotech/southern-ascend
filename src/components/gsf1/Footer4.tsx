import { motion } from "framer-motion";

const footerLinks = {
  Capabilities: [
    { label: "Kitting & Toolkits", href: "#capabilities" },
    { label: "Packaging & Logistics", href: "#capabilities" },
    { label: "RFID/FOD Solutions", href: "#capabilities" },
    { label: "Turnkey Integration", href: "#capabilities" },
    { label: "Government Contracting", href: "#capabilities" },
  ],
  Certifications: [
    { label: "AS9100:D", href: "#quality" },
    { label: "ISO 9001:2015", href: "#quality" },
    { label: "AS9120:B", href: "#quality" },
    { label: "AS9100:D", href: "#quality" },
  ],
};

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#082a40] pt-24 pb-8 px-6 md:px-12 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      {/* Subtle atmospheric glow */}
      <div className="absolute bottom-0 left-0 right-0 h-48" style={{
        background: "radial-gradient(ellipse at 50% 100%, rgba(8,42,64,0.8) 0%, transparent 70%)"
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10"
      >
        <div>
          <div className="font-headline font-bold text-white text-xl mb-2 uppercase tracking-tighter">
            GOULD SOUTHERN
          </div>
          <div className="w-8 h-[2px] bg-secondary/40 mb-6" />
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Industrial Kitting & Specialized Packaging Excellence.
          </p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="space-y-3">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-secondary mb-4">
              {category}
            </h4>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-white/40 hover:text-secondary hover:translate-x-1 text-sm transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <div className="space-y-3">
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-secondary mb-4">
            Address
          </h4>
          <div className="text-white/40 text-sm leading-relaxed space-y-1">
            <p>Gould Southern</p>
            <p>2940 Old Norcross Road</p>
            <p>Duluth, GA 30096</p>
          </div>
          <div className="text-white/40 text-sm leading-relaxed space-y-1 pt-4">
            <p className="font-semibold text-white/60">Customer Service Center</p>
            <p>Phone: <a href="tel:8005489085" className="hover:text-secondary transition-colors duration-300">800.548.9085</a></p>
            <p>Email: <a href="mailto:info@gouldsouthern.com" className="hover:text-secondary transition-colors duration-300">info@gouldsouthern.com</a></p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-[1920px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <span className="text-white/30 text-sm">
          © {new Date().getFullYear()} Gould Southern. All Rights Reserved.
        </span>
        <div className="flex gap-6">
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/30 hover:text-secondary text-sm transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
