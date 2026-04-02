import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/gouldsouthern-logo.png";

const capabilitiesItems = [
  { label: "Kitting & Toolkits", href: "#capabilities" },
  { label: "Packaging & Logistics", href: "#capabilities" },
  { label: "RFID/FOD Solutions", href: "#capabilities" },
  { label: "Turnkey Integration", href: "#capabilities" },
  { label: "Government Contracting", href: "#capabilities" },
];

const navItems = [
  { label: "Industries", href: "#industries" },
  { label: "Certifications", href: "#quality" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const HeaderLight = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [capOpen, setCapOpen] = useState(false);
  const [mobileCapOpen, setMobileCapOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCapOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 bg-[#F5EFE6]/95 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? "shadow-sm border-b border-[#E8DFD1]" : ""}`}>
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Gould Southern logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-black tracking-tighter text-gray-900 font-headline uppercase">
            GOULD SOUTHERN
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCapOpen(!capOpen)}
              className="font-headline font-bold tracking-tight uppercase text-sm text-gray-900 hover:text-secondary transition-colors duration-300 flex items-center gap-1"
            >
              Capabilities
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${capOpen ? "rotate-180" : ""}`} />
            </button>
            {capOpen && (
              <div className="absolute top-full left-0 mt-3 min-w-[220px] bg-white border border-gray-200 shadow-lg py-2 z-50">
                {capabilitiesItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setCapOpen(false)}
                    className="block px-5 py-2.5 text-sm font-headline font-semibold text-gray-700 hover:text-secondary hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-headline font-bold tracking-tight uppercase text-sm text-gray-900 hover:text-secondary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-secondary text-white px-6 py-3 font-headline font-bold uppercase text-xs tracking-widest hover:brightness-110 active:scale-95 transition-all"
          >
            Talk to Our Team
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F5EFE6] border-t border-[#E8DFD1]">
          <div className="px-6 py-6 flex flex-col gap-4">
            <button
              onClick={() => setMobileCapOpen(!mobileCapOpen)}
              className="font-headline font-bold tracking-tight uppercase text-sm text-gray-900 hover:text-secondary py-2 flex items-center gap-1 text-left"
            >
              Capabilities
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileCapOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileCapOpen && (
              <div className="pl-4 flex flex-col gap-2">
                {capabilitiesItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => { setMobileOpen(false); setMobileCapOpen(false); }}
                    className="font-headline font-semibold text-sm text-gray-600 hover:text-secondary py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-headline font-bold tracking-tight uppercase text-sm text-gray-900 hover:text-secondary py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-secondary text-white px-6 py-3 font-headline font-bold uppercase text-xs tracking-widest text-center mt-2"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderLight;
