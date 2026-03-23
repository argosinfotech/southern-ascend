import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-md border-b border-surface-slate">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-accent-warm flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="hsl(0 0% 100%)" stroke="none" />
              <path d="M2 17l10 5 10-5" stroke="hsl(0 0% 100%)" />
              <path d="M2 12l10 5 10-5" stroke="hsl(0 0% 100%)" />
            </svg>
          </div>
          <div>
            <span className="text-lg font-display font-bold text-primary-foreground tracking-tight">
              Gould Southern
            </span>
            <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-surface-dark-fg/60">
              A Stephen Gould Company
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-surface-dark-fg/80 hover:text-primary-foreground transition-colors duration-200 tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <Button variant="accent" size="sm" asChild>
            <a href="#contact">Talk to Our Team</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-dark border-t border-surface-slate">
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-surface-dark-fg/80 hover:text-primary-foreground py-2 uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <Button variant="accent" asChild className="mt-2">
              <a href="#contact" onClick={() => setMobileOpen(false)}>Talk to Our Team</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
