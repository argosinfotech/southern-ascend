import { motion } from "framer-motion";
import { Check, Layers, Tag, ScanLine, QrCode, Package, Boxes, ArrowRight, Image } from "lucide-react";
import HeaderLight from "@/components/home4/HeaderLight";
import Footer from "@/components/home4/Footer4";
import earthBg from "@/assets/earth-horizon-bg.jpg";

const capabilities = [
  {
    icon: Layers,
    title: "Shadow Boards for Cases & Cabinets",
    items: ["Water jet cutting", "CNC routing", "Precision backfilling"],
  },
  {
    icon: Tag,
    title: "Custom Layout & Identification",
    items: [
      "Part number in-pocket",
      "Part number adjacent to pocket",
      "Foam-on-foam layering",
      "Foam on acrylic backing",
    ],
  },
  {
    icon: ScanLine,
    title: "Tool Imaging",
    items: [
      "2-D and 3-D imaging",
      "In-house layout verification",
      "Extensive — and growing — tool library for fast turnaround",
    ],
  },
  {
    icon: QrCode,
    title: "Laser Etching & Tracking",
    items: [
      "Sequential numbering",
      "Bar-coding",
      "2-D data matrix",
      "RFID access control — by user or by item",
    ],
  },
  {
    icon: Package,
    title: "Custom Cabinet Crating",
    items: [
      "Skid-mounted with crate",
      "Pallet-mounted with HSC cover",
      "Durable, water-resistant, dustproof, chemical-resistant cases",
    ],
  },
  {
    icon: Boxes,
    title: "Kit Fulfillment & Assembly",
    items: [
      "Complete tool sourcing from 300+ supplier partners",
      "Fully assembled, inspected, and delivered turnkey",
      "Daily manifest reports for real-time project visibility",
    ],
  },
];

const stats = [
  { number: "300+", label: "Supplier Partners" },
  { number: "40+", label: "Fulfillment Locations" },
  { number: "50+", label: "Years of Kitting Expertise" },
  { number: "GSA", label: "Schedule Contract Holder" },
];

const advantages = [
  "Kits range from small hand-held units to stationary cabinets to fully equipped mobile tool cribs.",
  "Built to exacting weight and space specifications for transport and deployment constraints.",
  "Access to 300+ supplier partners means virtually any tool or component can be sourced and kitted.",
  "Standardize a single kit design across multiple locations — or customize per task, per team.",
  "RFID-enabled access control limits kit use to authorized personnel or tracks individual items.",
  "Turnkey delivery: we source the contents, assemble, inspect, and ship a ready-to-use product.",
  "Daily manifest reporting gives your team full visibility into project status and timelines.",
  "GSA Schedule contract holder (GS-06F-0047S) with 250,000+ line offerings for government procurement.",
];

const KittingToolkits = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-900">
      <HeaderLight />
      <main>
        {/* HERO */}
        <section className="relative min-h-[600px] flex items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-[#FAF8F5]">
          <div className="absolute inset-0 z-0">
            <img
              src={earthBg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-30"
            />
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
              Custom Kitting & Toolkit Engineering
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-4xl md:text-[4.5rem] leading-[1.05] font-extrabold tracking-tighter mb-8 uppercase text-[#1E3448] max-w-4xl"
            >
              Every Tool.<br />
              Every Time.<br />
              <span className="text-secondary">Accounted For.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl font-body leading-relaxed"
            >
              Gould Southern engineers custom tool kits and shadow-board systems
              that eliminate FOD risk, enforce lean workflows, and keep your
              teams audit-ready — from single hand-held kits to fully equipped
              mobile tool cribs.
            </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center relative bg-[#E8E2D9] rounded-lg shadow-2xl min-h-[400px]"
            >
              <div className="text-center">
                <Image className="w-12 h-12 text-gray-400 mx-auto mb-3" strokeWidth={1.5} />
                <span className="text-gray-400 font-label text-sm uppercase tracking-widest">Shadow Board Image</span>
              </div>
              <div className="absolute inset-0 rounded-lg ring-1 ring-[#1E3448]/10 pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-[#FAF8F5] border-t border-[#E8E2D9]">
          <div className="max-w-[1920px] mx-auto">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Capabilities
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                What We <span className="text-secondary">Build</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                Every kit is purpose-built around your tooling requirements,
                compliance standards, and workspace constraints. We handle
                layout, fabrication, imaging, and final assembly — delivering a
                fully inspected, ready-to-deploy product.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:flex w-[320px] h-[320px] bg-[#E8E2D9] rounded-lg shadow-lg items-center justify-center"
            >
              <div className="text-center">
                <Image className="w-10 h-10 text-gray-400 mx-auto mb-2" strokeWidth={1.5} />
                <span className="text-gray-400 font-label text-xs uppercase tracking-widest">Mobile Crib Image</span>
              </div>
            </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  className="bg-white border border-[#E8E2D9] rounded-lg p-7 hover:border-secondary/40 hover:shadow-lg transition-all duration-300 group"
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

        {/* STAT STRIP */}
        <div
          aria-hidden="true"
          className="w-full h-24 md:h-32 bg-[#E8E2D9] flex items-center justify-center"
        >
          <span className="text-gray-400 font-label text-xs uppercase tracking-widest">Banner Image</span>
        </div>
        <section className="px-6 md:px-12 py-16 bg-[#082A40]">
          <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-start"
              >
                <div className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-secondary mb-2">
                  {s.number}
                </div>
                <div className="text-white/60 font-label text-[0.6875rem] uppercase tracking-widest">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOD PREVENTION */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-[#FAF8F5]">
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
              <div className="w-full h-auto aspect-video bg-[#E8E2D9] rounded-lg shadow-2xl flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Image className="w-12 h-12 text-gray-400 mx-auto mb-3" strokeWidth={1.5} />
                  <span className="text-gray-400 font-label text-sm uppercase tracking-widest">Aerospace Engine Image</span>
                </div>
              </div>
              <div className="mt-8 bg-white border-l-4 border-secondary rounded-r-lg p-8 md:p-10 shadow-sm">
              <h3 className="font-headline text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#1E3448] mb-4">
                Aerospace & Military Applications
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gould Southern has served the leading names in aerospace and
                defense since 1974, delivering custom kitting and packaging
                solutions built to MIL-spec and commercial program requirements.
                Kits are built to exacting weight and space specifications and
                can be standardized across multiple facilities or customized for
                task-specific deployments.
              </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ADVANTAGE */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-white border-t border-[#E8E2D9]">
          <div className="max-w-[1920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-14"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Why Gould Southern
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                The Gould Southern <span className="text-secondary">Advantage</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                You work directly with a focused engineering team that knows
                your program inside and out — with the procurement scale,
                logistics network, and financial stability of the Stephen Gould
                organization behind every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-6xl">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-8 h-8 rounded-md bg-secondary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-secondary" strokeWidth={3} />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[0.95rem]">{adv}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
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
              Let's Engineer <span className="text-secondary">Your Kit</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg mb-10 max-w-xl mx-auto">
              Tell us about your tooling requirements, compliance standards, and
              deployment environment. We'll design a solution around them.
            </p>
            <a
              href="#contact"
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

export default KittingToolkits;