import { motion } from "framer-motion";
import {
  Warehouse,
  ShieldCheck,
  Boxes,
  Truck,
  Radio,
  Eye,
  Layers,
  ArrowRight,
  Check,
} from "lucide-react";
import HeaderLight from "@/components/home4/HeaderLight";
import Footer from "@/components/home4/Footer4";
import earthBg from "@/assets/earth-horizon-bg.jpg";
import heroImg from "@/assets/compliance-logistics-hero.jpg";


const capabilityBlocks = [
  {
    icon: Warehouse,
    title: "Smart Warehousing & Asset Control",
    description:
      "RFID- and barcode-enabled warehouse solutions designed to improve storage, movement, and tracking of mission-critical inventory.",
  },
  {
    icon: Eye,
    title: "Digital Asset Management & Traceability",
    description:
      "Real-time asset visibility that supports auditability, accountability, and readiness decisions.",
  },
  {
    icon: Layers,
    title: "Vertical Lift Modules & Warehouse Modernization",
    description:
      "Turnkey VLM solutions that increase storage density, reduce retrieval time, and modernize warehouse operations.",
  },
  {
    icon: Radio,
    title: "RFID-Enabled Tracking Infrastructure",
    description:
      "Lifecycle visibility supported by RFID systems, including Positive Fusion™ for facility-wide asset movement visualization.",
  },
  {
    icon: Boxes,
    title: "Controlled Kitting, Packaging & Deployment Support",
    description:
      "Integrated kitting, packaging, and deployment-ready systems designed for secure handling, organization, and lifecycle traceability.",
  },
  {
    icon: Truck,
    title: "Secure, Surge-Ready Supply Chain Support",
    description:
      "Responsive U.S.-based logistics and fulfillment support for time-sensitive and regulated programs.",
  },
];

const outcomes = [
  "Improve inventory visibility",
  "Strengthen traceability",
  "Support secure audit trails",
  "Reduce retrieval delays",
  "Improve control of sensitive assets",
  "Support operational readiness",
];

const industries = [
  {
    title: "Aerospace",
    description:
      "Support for high-value tools, components, kits, and operational assets in precision-driven environments.",
  },
  {
    title: "Defense & Government Support",
    description:
      "Integrated logistics and asset-control solutions built for accountability, readiness, and secure oversight.",
  },
  {
    title: "Industrial Operations",
    description:
      "Structured logistics support for sensitive equipment, complex inventory, and controlled workflows.",
  },
  {
    title: "Mission-Critical Equipment Programs",
    description:
      "Scalable support for organized storage, deployment readiness, and equipment traceability.",
  },
];

const standards = [
  "AS9100:D",
  "ISO 9001:2015",
  "ITAR",
  "DDTC Registered",
  "CMMC Level 1",
  "CMMC Level 2 targeted Q1 2027",
];

const ComplianceLogistics = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-900">
      <HeaderLight />
      <main>
        {/* HERO */}
        <section className="relative min-h-[600px] flex items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImg}
              alt="Compliance-driven warehouse with RFID-tracked aerospace and defense inventory"
              width={1920}
              height={1080}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]/40" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-[#FAF8F5] text-gray-700 font-label text-[0.6875rem] uppercase tracking-[0.2em] px-3 py-1 mb-8"
            >
              Mission-Critical Logistics
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tighter mb-8 uppercase text-[#1E3448] max-w-4xl"
            >
              Compliance-Driven Logistics for{" "}
              <span className="text-secondary">Mission-Critical Programs</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl font-body leading-relaxed mb-8"
            >
              Gould Southern helps defense, aerospace, and federal partners
              maintain visibility, traceability, and control across
              warehousing, asset tracking, packaging, kitting, and fulfillment
              operations. Built for regulated environments, our logistics
              capabilities support readiness, accountability, and operational
              discipline.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-7 py-3.5 rounded-md font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 transition-all"
              >
                Talk to Our Team <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* CAPABILITY DETAILS */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-[#082A40] border-t border-white/5">
          <div className="max-w-[1920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-14"
            >
              <span className="text-white/50 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Capabilities
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-6">
                What This Capability <span className="text-secondary">Includes</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-white/70 leading-relaxed text-lg">
                In regulated environments, logistics is about more than storage
                and transport. Gould Southern delivers integrated logistics
                support that brings warehousing, asset management, packaging,
                kitting, sourcing, and fulfillment into a more disciplined
                operating model.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilityBlocks.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  className="bg-white/[0.04] border border-white/10 rounded-lg p-7 hover:border-secondary/50 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <cap.icon className="text-secondary w-7 h-7 mb-5" strokeWidth={1.75} />
                  <h3 className="font-headline font-extrabold text-white text-lg uppercase tracking-tight mb-3 leading-tight">
                    {cap.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-white border-t border-[#E8E2D9]">
          <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Why It Matters
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                Why compliance <span className="text-secondary">logistics matters</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-8" />
              <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  In aerospace, defense, and other regulated environments,
                  logistics gaps can create real operational risk. Weak
                  visibility, inconsistent records, and inefficient storage
                  systems can slow readiness and reduce control.
                </p>
                <p>
                  Gould Southern's compliance-focused approach helps strengthen
                  asset accountability, improve traceability, and support more
                  organized logistics execution.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#FAF8F5] border-l-4 border-secondary rounded-r-lg p-8 md:p-10 shadow-sm"
            >
              <h3 className="font-headline text-xl md:text-2xl font-extrabold uppercase tracking-tight text-[#1E3448] mb-6">
                Operational Outcomes
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* INDUSTRIES */}
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
                Industries
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                Built for regulated and <span className="text-secondary">high-precision environments</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                This capability is designed for organizations where control,
                documentation, and readiness are critical.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  className="bg-white border border-[#E8E2D9] rounded-lg p-7 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-headline font-extrabold text-[#1E3448] text-lg uppercase tracking-tight mb-3 leading-tight">
                    {ind.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STANDARDS & COMPLIANCE */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-white border-t border-[#E8E2D9]">
          <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="w-full aspect-video bg-[#E8E2D9] rounded-lg shadow-2xl overflow-hidden relative">
                <img
                  src={heroImg}
                  alt="Compliance-driven warehouse with RFID-tracked aerospace and defense inventory"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
                <div className="absolute inset-0 ring-1 ring-[#1E3448]/10 rounded-lg pointer-events-none" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Quality & Regulatory Alignment
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                Supported by disciplined <span className="text-secondary">quality systems</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-8" />
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                Gould Southern's compliance logistics capability is supported
                by quality and regulatory frameworks that reinforce disciplined
                execution in regulated environments, including AS9100:D, ISO
                9001:2015, DDTC registration, ITAR compliance, and CMMC Level 1
                certification, with advancement to CMMC Level 2 targeted by Q1
                2027.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {standards.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-[#1E3448] font-label uppercase tracking-[0.12em] text-sm"
                  >
                    <ShieldCheck className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
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
              Strengthen Your <span className="text-secondary">Logistics Posture</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg mb-10 max-w-xl mx-auto">
              Tell us about your regulated logistics requirements. We'll help
              you build a more disciplined, traceable operating model.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-md font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all"
            >
              Talk to Our Team <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComplianceLogistics;