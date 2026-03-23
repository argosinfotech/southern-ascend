const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-surface-slate">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded bg-accent-warm flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="hsl(0 0% 100%)" />
                  <path d="M2 17l10 5 10-5" stroke="hsl(0 0% 100%)" strokeWidth="2" />
                  <path d="M2 12l10 5 10-5" stroke="hsl(0 0% 100%)" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-base font-display font-bold text-primary-foreground">
                Gould Southern
              </span>
            </div>
            <p className="text-sm text-surface-dark-fg/60 leading-relaxed max-w-sm mb-4">
              A wholly owned subsidiary of Stephen Gould Corporation. Specializing in
              custom packaging, kitting, and turnkey solutions for aerospace, defense,
              and industrial programs.
            </p>
            <p className="text-xs text-surface-dark-fg/40">
              AS9100:D & ISO 9001:2015 Certified · Duluth, Georgia
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-display font-semibold uppercase tracking-[0.15em] text-surface-dark-fg/50 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["Capabilities", "Industries", "About", "Certifications", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-surface-dark-fg/70 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-display font-semibold uppercase tracking-[0.15em] text-surface-dark-fg/50 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-surface-dark-fg/70">
              <li>Duluth, Georgia</li>
              <li>(770) 476-1860</li>
              <li>info@gouldsouthern.com</li>
              <li className="pt-2">
                <a
                  href="https://www.stephengould.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-warm hover:text-accent-warm-hover text-xs uppercase tracking-[0.1em] font-semibold transition-colors"
                >
                  Stephen Gould Corporation →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-slate mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-dark-fg/40">
            © {new Date().getFullYear()} Gould Southern. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-surface-dark-fg/40 hover:text-surface-dark-fg/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-surface-dark-fg/40 hover:text-surface-dark-fg/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
