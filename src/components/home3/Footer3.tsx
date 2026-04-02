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

const Footer3 = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-20 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="font-headline font-bold text-white text-xl mb-6 uppercase tracking-tighter">
            GOULD SOUTHERN
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
            Industrial Kitting & Specialized Packaging Excellence.
          </p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-secondary mb-6">
              {category}
            </h4>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-400 hover:text-secondary hover:translate-x-1 text-sm transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <div className="space-y-4">
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-secondary mb-6">
            Address
          </h4>
          <div className="text-gray-400 text-sm leading-relaxed space-y-1">
            <p>Gould Southern</p>
            <p>2940 Old Norcross Road</p>
            <p>Duluth, GA 30096</p>
          </div>
          <div className="text-gray-400 text-sm leading-relaxed space-y-1 pt-4">
            <p className="font-semibold text-gray-300">Customer Service Center</p>
            <p>Phone: <a href="tel:8005489085" className="hover:text-secondary transition-colors">800.548.9085</a></p>
            <p>Email: <a href="mailto:info@gouldsouthern.com" className="hover:text-secondary transition-colors">info@gouldsouthern.com</a></p>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto mt-8 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Gould Southern. All Rights Reserved.
        </span>
        <div className="flex gap-6">
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-500 hover:text-secondary text-sm transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
