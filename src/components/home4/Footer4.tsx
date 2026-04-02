const footerLinks = {
  Expertise: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Industries", href: "#industries" },
    { label: "Quality Systems", href: "#quality" },
  ],
  Standards: [
    { label: "ISO 9001:2015", href: "#quality" },
    { label: "AS9100D Certified", href: "#quality" },
    { label: "Military Specs", href: "#quality" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
};

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
                className="block text-gray-400 hover:text-secondary underline decoration-secondary underline-offset-4 text-sm transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-[1920px] mx-auto mt-20 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Gould Southern. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer3;
