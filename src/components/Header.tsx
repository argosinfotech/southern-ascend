import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/gouldsouthern-logo.png";

const navItems = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Quality", href: "#quality" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-header shadow-2xl shadow-background/50">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
        <div className="text-xl font-black tracking-tighter text-primary font-headline uppercase">
          GOULD SOUTHERN
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-headline font-bold tracking-tight uppercase text-sm text-primary hover:text-secondary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-secondary text-on-secondary-container px-6 py-3 font-headline font-bold uppercase text-xs tracking-widest hover:brightness-110 active:scale-95 transition-all"
          >
            Talk to Our Team
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="bg-gradient-to-b from-primary-container to-transparent h-px w-full absolute bottom-0" />

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-headline font-bold tracking-tight uppercase text-sm text-primary hover:text-secondary py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-secondary text-on-secondary-container px-6 py-3 font-headline font-bold uppercase text-xs tracking-widest text-center mt-2"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
