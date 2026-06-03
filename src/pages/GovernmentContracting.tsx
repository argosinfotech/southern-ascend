import { motion } from "framer-motion";
import {
  Check, Wrench, Package, ShieldCheck, ArrowRight, Mail, Phone, MapPin, Image,
} from "lucide-react";
import HeaderLight from "@/components/home4/HeaderLight";
import Footer from "@/components/home4/Footer4";
import earthBg from "@/assets/earth-horizon-bg.jpg";

const credentials = [
  { code: "GSA Schedule", label: "GS-06F-0047S" },
  { code: "DOD E-Mall", label: "Approved Vendor" },
  { code: "DLA", label: "Defense Logistics Agency" },
  { code: "Small Business", label: "CCR Registered" },
];

const capabilities = [
  {
    icon: Package,
    title: "MRO Distribution",
    body: "Traditional MRO distributor with over 250,000 industrial-grade products available through GSA Schedule, DOD E-Mall, and DLA contracts. Distributor agreements with major manufacturers ensure quality and availability for government end users.",
  },
  {
    icon: Wrench,
    title: "Custom Tool Kits",
    body: "Purpose-built kitting solutions engineered for FOD (Foreign Object Debris) control. Every kit is designed around your program's tooling requirements, compliance standards, and deployment environment.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Solutions",
    body: "Comprehensive safety product sourcing and custom solutions built to meet the specific requirements of defense and government facilities, adhering to Six Sigma and lean principles throughout.",
  },
];

const whyItems = [
  {
    num: "01",
    title: "Streamlined Ordering",
    body: "GSA Schedule contract holder with 250,000+ line offerings. Federal buyers can procure through established channels with pre-negotiated pricing and compliant processes.",
  },
  {
    num: "02",
    title: "Turnkey Delivery",
    body: "We source the components, assemble the kits, inspect to spec, and deliver a fully completed product. Your receiving team gets a ready-to-deploy solution, not a box of parts.",
  },
  {
    num: "03",
    title: "Certified Quality",
    body: "AS9100:D and ISO 9001:2015 certified quality management system. Full traceability from procurement through delivery on every order.",
  },
];

const manufacturers = [
  { name: "Apex Tool Group", category: "Hand Tools" },
  { name: "Apex Tool Group", category: "Cooper Power Tools" },
  { name: "Chicago Pneumatic", category: "Pneumatic Tools" },
  { name: "HP Wetmore", category: "Industrial Supply" },
  { name: "Lavallee & Ide", category: "Cutting Tools" },
  { name: "Regal Cutting Tools", category: "Cutting Tools" },
  { name: "Precision Dormer", category: "Drills & Cutting" },
  { name: "Lista", category: "Storage & Cabinets" },
  { name: "Lyon", category: "Storage & Workspace" },
  { name: "Carr Lane", category: "Tooling Components" },
  { name: "Channellock", category: "Pliers & Hand Tools" },
  { name: "General", category: "Precision Tools" },
  { name: "M.K. Morse", category: "Saws & Blades" },
  { name: "SPI", category: "Precision Measurement" },
  { name: "Stanley-Proto", category: "Industrial Hand Tools" },
  { name: "Streamlight", category: "Lighting Solutions" },
  { name: "Sturtevant Richmont", category: "Torque Tools" },
];

const advantages = [
  "GSA Schedule GS-06F-0047S with 250,000+ industrial-grade line offerings.",
  "Approved vendor for DOD E-Mall, DLA, and GSA procurement channels.",
  "CCR-registered small business adhering to Six Sigma and lean principles.",
  "Distributor agreements with 17+ major manufacturers on government contracts.",
  "AS9100:D and ISO 9001:2015 certified quality management with full traceability.",
  "Custom FOD control kits and safety solutions engineered for defense applications.",
];

const GovernmentContracting = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-900">
      <HeaderLight />
      <main>
        {/* HERO */}
        <section className="relative min-h-[600px] flex items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-[#FAF8F5]">
          <div className="absolute inset-0 z-0">
            <img src={earthBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]/40" />
          </div>
          <div className="relative z-10 max-w-[1920px] mx-auto w-full">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] mb-6"
            >
              Federal & Government Contracting
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-4xl md:text-[4.5rem] leading-[1.05] font-extrabold tracking-tighter mb-8 uppercase text-[#1E3448] max-w-5xl"
            >
              Your Mission-Critical<br />
              Supply Chain <span className="text-secondary">Partner.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-3xl font-body leading-relaxed mb-8"
            >
              Gould Southern is a trusted MRO distributor, custom tool kit provider, and FOD control specialist for federal agencies across DOD E-Mall, DLA, and GSA, with over 250,000 industrial-grade products available on contract.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-md font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all"
            >
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </section>

        {/* CREDENTIAL STRIP */}
        <section className="px-6 md:px-12 -mt-10 relative z-10">
          <div className="max-w-[1920px] mx-auto bg-white border border-[#E8E2D9] rounded-lg py-6 px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {credentials.map((c, i) => (
              <div key={i} className="text-center md:border-r md:last:border-r-0 border-[#E8E2D9]">
                <div className="font-headline font-extrabold text-[#1E3448] text-lg md:text-xl tracking-tight">
                  {c.code}
                </div>
                <div className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-widest mt-1">
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-[#FAF8F5]">
          <div className="max-w-[1920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-14"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Core Capabilities
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                What We Deliver To <span className="text-secondary">Federal Agencies.</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                Our government solutions are built on decades of experience serving defense and federal procurement programs with quality products, compliant processes, and responsive support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  className="bg-white border border-[#E8E2D9] rounded-lg p-7 hover:border-secondary/40 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                    <c.icon className="text-secondary w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-headline font-extrabold text-[#1E3448] text-lg uppercase tracking-tight mb-3 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{c.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DARK SPLIT: WHY AGENCIES CHOOSE US */}
        <section className="bg-[#082A40]">
          <div className="grid lg:grid-cols-2 min-h-[520px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0E3A55] min-h-[300px] flex items-center justify-center"
            >
              <div className="text-center">
                <Image className="w-12 h-12 text-white/30 mx-auto mb-3" strokeWidth={1.5} />
                <span className="text-white/40 font-label text-xs uppercase tracking-widest">
                  Warehouse / Fulfillment Photography
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="px-6 md:px-16 py-16 md:py-20 flex flex-col justify-center"
            >
              <span className="text-white/50 font-label text-[0.6875rem] uppercase tracking-[0.3em] mb-4">
                Why Agencies Choose Us
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-10">
                Built For <span className="text-secondary">Government Procurement.</span>
              </h2>
              <div className="space-y-8">
                {whyItems.map((p) => (
                  <div key={p.num} className="flex gap-5">
                    <div className="font-headline text-3xl font-extrabold text-secondary leading-none w-10 shrink-0">
                      {p.num}
                    </div>
                    <div>
                      <h4 className="font-headline font-extrabold uppercase tracking-tight text-white text-base mb-2">
                        {p.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed text-sm">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-5">
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-secondary to-[#c93a14] flex flex-col items-center justify-center shrink-0">
                  <div className="font-headline text-3xl font-extrabold text-white leading-none">250K+</div>
                  <div className="text-[0.625rem] font-bold uppercase tracking-widest text-white/80 mt-1">Products</div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Industrial-grade quality products available to federal customers through our GSA Schedule and direct contracts.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MANUFACTURER PARTNERS */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-white">
          <div className="max-w-[1920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-12"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Authorized Distributor
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                Manufacturer <span className="text-secondary">Partners.</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                These manufacturers maintain distributor agreements with Gould Southern on our government contracts, recognizing the value of providing quality products to federal end users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {manufacturers.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: (i % 8) * 0.03 }}
                  className="flex items-center gap-3 px-5 py-4 bg-[#FAF8F5] border border-[#E8E2D9] rounded-md hover:border-secondary hover:shadow-md hover:shadow-secondary/10 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <div>
                    <div className="font-headline font-bold text-[#1E3448] text-sm tracking-tight">{m.name}</div>
                    <div className="text-gray-500 text-[0.6875rem] mt-0.5">{m.category}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DARK BAND: TAILORED SOLUTIONS */}
        <section className="relative px-6 md:px-12 py-20 bg-[#061E2E] text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-secondary" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <span className="text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
              Agency-Specific Solutions
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-6">
              Tailored To Your Mission.
            </h2>
            <p className="text-white/60 leading-relaxed text-base">
              Every agency has unique requirements. Our solutions are configured to meet your specific procurement channels, compliance standards, and operational needs. Contact us to schedule a meeting with our local representatives.
            </p>
          </motion.div>
        </section>

        {/* ADVANTAGE + CONNECT */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-white border-t border-[#E8E2D9]">
          <div className="max-w-[1920px] mx-auto grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mb-10"
              >
                <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                  Strategic Partnership
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                  Specialized Service With <span className="text-secondary">Expanded Reach</span>
                </h2>
                <div className="w-12 h-[3px] bg-secondary mb-6" />
                <p className="text-gray-600 leading-relaxed text-lg">
                  You work directly with a dedicated team that understands government procurement, backed by the expanded sourcing, logistics, and fulfillment capabilities of the Stephen Gould network.
                </p>
              </motion.div>
              <div className="space-y-1">
                {advantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-4 py-3 border-b border-[#E8E2D9] last:border-b-0"
                  >
                    <div className="shrink-0 w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-secondary" strokeWidth={3} />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-[0.95rem]">{adv}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white border border-[#E8E2D9] rounded-lg overflow-hidden shadow-sm"
            >
              <div className="h-1.5 bg-secondary" />
              <div className="p-8">
                <h3 className="font-headline text-2xl font-extrabold uppercase tracking-tight text-[#1E3448] mb-3">
                  Connect With Us
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Discuss your agency's requirements with our government contracting team.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">sales@gouldsouthern.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">+1 (770) 476-1860</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">Duluth, Georgia</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="block text-center bg-secondary text-white px-6 py-3.5 rounded-md font-headline font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all"
                >
                  Request a Consultation
                </a>
              </div>
            </motion.aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GovernmentContracting;