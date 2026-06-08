import { motion } from "framer-motion";
import { Radio, ShieldCheck, ScanLine, Workflow, ArrowRight, Check } from "lucide-react";
import HeaderLight from "@/components/home4/HeaderLight";
import Footer from "@/components/home4/Footer4";
import earthBg from "@/assets/earth-horizon-bg.jpg";
import rfidHero from "@/assets/rfid-hero.jpg.asset.json";
import rfidScanner from "@/assets/rfid-scanner.jpg.asset.json";

const capabilities = [
  {
    icon: Radio,
    title: "RFID Asset Tracking",
    items: [
      "Item- and user-level access control",
      "Automated check-in / check-out workflows",
      "Real-time visibility across distributed locations",
      "Integration with existing ERP and MES platforms",
    ],
  },
  {
    icon: ShieldCheck,
    title: "FOD-Prevention Systems",
    items: [
      "Shadowboards engineered around FOD elimination",
      "Tethered tool systems for high-risk environments",
      "Dedicated, marked location for every item",
      "Audit-ready trails your QA team can trust",
    ],
  },
  {
    icon: ScanLine,
    title: "Marking & Identification",
    items: [
      "Laser etching and sequential numbering",
      "Bar-coding and 2-D data matrix",
      "Part-number-in-pocket layouts",
      "Serialized traceability end-to-end",
    ],
  },
  {
    icon: Workflow,
    title: "Process Integration",
    items: [
      "AS9100D and ISO 9001 governed workflows",
      "MIL-SPEC compliant marking and reporting",
      "Daily manifest reports for full visibility",
      "Continuous monitoring of FOD standards",
    ],
  },
];

const RfidFod = () => {
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
          <div className="relative z-10 max-w-[1920px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] mb-6"
              >
                RFID & FOD Solutions
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-headline text-4xl md:text-[4.5rem] leading-[1.05] font-extrabold tracking-tighter mb-8 uppercase text-[#1E3448] max-w-4xl"
              >
                Tracked.<br />
                Controlled.<br />
                <span className="text-secondary">FOD-Free.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 text-lg max-w-2xl font-body leading-relaxed"
              >
                Automated asset tracking and Foreign Object Debris prevention,
                engineered into every kit and workflow — from RFID access
                control to shadowboards built around FOD elimination from day one.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center relative bg-[#E8E2D9] rounded-lg shadow-2xl min-h-[400px] overflow-hidden"
            >
              <img
                src={rfidHero.url}
                alt="RFID-tagged aerospace tools arranged in a FOD-controlled shadowboard"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-[#1E3448]/10 pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-[#FAF8F5] border-t border-[#E8E2D9]">
          <div className="max-w-[1920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-14"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Capabilities
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                What We <span className="text-secondary">Deliver</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                A complete tracking and FOD-prevention stack — hardware,
                software integration, and the kitting discipline that ties it
                all together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  className="bg-white border border-[#E8E2D9] rounded-lg p-7 hover:border-secondary/40 hover:shadow-lg transition-all duration-300"
                >
                  <cap.icon className="text-secondary w-7 h-7 mb-5" strokeWidth={1.75} />
                  <h3 className="font-headline font-extrabold text-[#1E3448] text-lg uppercase tracking-tight mb-4 leading-tight">
                    {cap.title}
                  </h3>
                  <ul className="space-y-2">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                        <span className="block w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOD PREVENTION */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-white border-t border-[#E8E2D9]">
          <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Why It Matters
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                Engineered For <span className="text-secondary">FOD Prevention</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-8" />
              <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Foreign Object Debris is one of the most costly risks in
                  aerospace and defense operations. Our kitting systems are
                  designed from the ground up around FOD elimination and lean
                  management principles — not adapted to them after the fact.
                </p>
                <p>
                  Every item in a kit has a dedicated, marked location. Missing
                  tools are visible at a glance. Extra items are immediately
                  flagged. The result: faster inspections, cleaner workspaces,
                  and audit trails your QA team can trust.
                </p>
                <p>
                  Our research team continuously monitors developments across
                  FOD standards and materials science to keep your solutions
                  current — not just compliant.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="w-full aspect-video bg-[#E8E2D9] rounded-lg shadow-2xl overflow-hidden relative">
                <img
                  src={rfidScanner.url}
                  alt="Handheld RFID scanner reading tagged tools in a mission-ready kit case"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-1 ring-[#1E3448]/10 rounded-lg pointer-events-none" />
              </div>
              <div className="mt-8 bg-[#FAF8F5] border-l-4 border-secondary rounded-r-lg p-8 md:p-10 shadow-sm">
                <h3 className="font-headline text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#1E3448] mb-4">
                  Aerospace & Military Applications
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gould Southern has served the leading names in aerospace and
                  defense since 1974, delivering RFID and FOD-prevention
                  solutions built to MIL-spec and commercial program
                  requirements — standardized across facilities or customized
                  for task-specific deployments.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 md:px-12 py-20 md:py-24 bg-[#082A40] overflow-hidden">
          <div className="absolute inset-0">
            <img src={earthBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-[#082A40]/80" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto text-center"
          >
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-5">
              Lock Down <span className="text-secondary">Every Asset</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg mb-10 max-w-xl mx-auto">
              Tell us about your tracking requirements and FOD-critical
              environments. We'll engineer a system around them.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-md font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all"
            >
              Initiate Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RfidFod;