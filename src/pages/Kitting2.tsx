import { motion } from "framer-motion";
import { Check, Layers, Tag, ScanLine, QrCode, Package, Boxes, ArrowRight, Image as ImageIcon } from "lucide-react";
import HeaderLight from "@/components/home4/HeaderLight";
import Footer from "@/components/home4/Footer4";
import earthBg from "@/assets/earth-horizon-bg.jpg";
import drillsShadowboard from "@/assets/gs-drills-shadowboard.jpg.asset.json";
import wrenchesKit from "@/assets/gs-kitting-wrenches.jpg.asset.json";
import rfidSockets from "@/assets/gs-rfid-sockets.jpg.asset.json";
import kittingShadowBoard from "@/assets/kitting-shadow-board.jpg";
import kittingMobileCrib from "@/assets/kitting-mobile-crib.jpg";
import capPackaging from "@/assets/cap-packaging.jpg";
import capRfid from "@/assets/cap-rfid.jpg";

type SplitProps = {
  id: string;
  eyebrow: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: React.ReactNode;
  body: string;
  items: string[];
  tags: string[];
  photoSrc: string;
  photoLabel: string;
  reversed?: boolean;
};

const DarkSplit = ({ id, eyebrow, icon: Icon, title, body, items, tags, photoSrc, photoLabel, reversed }: SplitProps) => (
  <section id={id} className="bg-[#082A40]">
    <div className={`grid lg:grid-cols-2 min-h-[520px] ${reversed ? "lg:[direction:rtl]" : ""}`}>
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative bg-[#0E3A55] min-h-[320px] flex items-center justify-center lg:[direction:ltr] overflow-hidden"
      >
        <img src={photoSrc} alt={photoLabel} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
        className="px-6 md:px-16 py-16 md:py-20 flex flex-col justify-center lg:[direction:ltr]"
      >
        <div className="flex items-center gap-3 mb-5">
          <Icon className="w-6 h-6 text-secondary" strokeWidth={1.75} />
          <span className="text-white/50 font-label text-[0.6875rem] uppercase tracking-[0.3em]">{eyebrow}</span>
        </div>
        <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white leading-[1.05] mb-6">
          {title}
        </h2>
        <p className="text-white/70 leading-relaxed text-base mb-6">{body}</p>
        <ul className="space-y-2.5 mb-6">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
              <Check className="w-4 h-4 text-secondary mt-1 shrink-0" strokeWidth={3} />
              <span>{it}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((t) => (
            <span key={t} className="text-secondary text-[0.6875rem] font-bold uppercase tracking-wider bg-secondary/10 border border-secondary/30 rounded px-3 py-1.5">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const capabilities: SplitProps[] = [
  {
    id: "shadow-boards",
    eyebrow: "Shadow Boards",
    icon: Layers,
    title: <>Shadow Boards For <span className="text-secondary">Cases & Cabinets.</span></>,
    body: "Precision-cut foam inserts engineered around your exact tool inventory. Every pocket is sized for instant visual accountability — empty slots become impossible to miss.",
    items: ["Water jet cutting", "CNC routing", "Precision backfilling"],
    tags: ["FOD Control", "Visual Audit", "Custom Foam"],
    photoSrc: drillsShadowboard.url,
    photoLabel: "Drill shadowboard",
  },
  {
    id: "layout",
    eyebrow: "Layout & Identification",
    icon: Tag,
    title: <>Custom Layout & <span className="text-secondary">Identification.</span></>,
    body: "Part numbers, color coding, and layered foam designed for the way your team actually works — not catalog presets repurposed for your program.",
    items: ["Part number in-pocket", "Part number adjacent to pocket", "Foam-on-foam layering", "Foam on acrylic backing"],
    tags: ["Part Marking", "Layered Foam", "Acrylic Backing"],
    photoSrc: wrenchesKit.url,
    photoLabel: "Wrench kit layout",
    reversed: true,
  },
  {
    id: "tool-imaging",
    eyebrow: "Tool Imaging",
    icon: ScanLine,
    title: <>2-D and 3-D <span className="text-secondary">Tool Imaging.</span></>,
    body: "An in-house imaging library that accelerates layout verification and shortens the path from spec to fabricated kit — with continuous additions for fast turnaround.",
    items: ["2-D and 3-D imaging", "In-house layout verification", "Extensive and growing tool library"],
    tags: ["In-House Imaging", "Fast Turnaround"],
    photoSrc: kittingShadowBoard,
    photoLabel: "Tool imaging layout",
  },
  {
    id: "laser-etching",
    eyebrow: "Laser Etching & Tracking",
    icon: QrCode,
    title: <>Laser Etching & <span className="text-secondary">RFID Tracking.</span></>,
    body: "Permanent identification and digital accountability layered onto every kit — sequential numbering, bar-coding, and RFID access control by user or by item.",
    items: ["Sequential numbering", "Bar-coding", "2-D data matrix", "RFID access control"],
    tags: ["RFID", "Bar-Code", "Data Matrix"],
    photoSrc: rfidSockets.url,
    photoLabel: "RFID socket tracking",
    reversed: true,
  },
  {
    id: "crating",
    eyebrow: "Custom Cabinet Crating",
    icon: Package,
    title: <>Built To Ship. <span className="text-secondary">Ready To Deploy.</span></>,
    body: "Skid-mounted, crated, and protected for transport into any environment — including the harsh ones where commercial cases fail.",
    items: ["Skid-mounted with crate", "Pallet-mounted with HSC cover", "Water-resistant, dustproof, chemical-resistant cases"],
    tags: ["Rugged Cases", "Export Crating", "MIL-Spec"],
    photoSrc: capPackaging,
    photoLabel: "Custom crating",
  },
  {
    id: "fulfillment",
    eyebrow: "Kit Fulfillment & Assembly",
    icon: Boxes,
    title: <>Sourced, Assembled, <span className="text-secondary">Turnkey.</span></>,
    body: "We source from 300+ supplier partners, assemble, inspect, and ship ready-to-use kits — backed by daily manifest reporting for real-time project visibility.",
    items: ["Complete tool sourcing", "Fully assembled and inspected", "Daily manifest reports"],
    tags: ["Turnkey", "Manifest Reporting", "300+ Suppliers"],
    photoSrc: kittingMobileCrib,
    photoLabel: "Mobile tool crib",
    reversed: true,
  },
];

const stats = [
  { number: "300+", label: "Supplier Partners" },
  { number: "40+", label: "Fulfillment Locations" },
  { number: "50+", label: "Years of Kitting Expertise" },
  { number: "GSA", label: "Schedule Contract Holder" },
];

const advantages = [
  "Kits range from hand-held units to stationary cabinets to fully equipped mobile tool cribs.",
  "Built to exacting weight and space specifications for transport and deployment constraints.",
  "300+ supplier partners means virtually any tool or component can be sourced and kitted.",
  "Standardize across multiple locations — or customize per task, per team.",
  "RFID-enabled access control limits kit use to authorized personnel.",
  "Turnkey delivery: sourced, assembled, inspected, shipped ready-to-use.",
  "Daily manifest reporting gives full project visibility.",
  "GSA Schedule contract holder (GS-06F-0047S) with 250,000+ line offerings.",
];

const Kitting2 = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-900">
      <HeaderLight />
      <main>
        {/* HERO */}
        <section className="relative min-h-[560px] flex items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-[#FAF8F5]">
          <div className="absolute inset-0 z-0">
            <img src={earthBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]/40" />
          </div>
          <div className="relative z-10 max-w-[1920px] mx-auto w-full">
            <motion.span
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-block text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] mb-6"
            >
              Custom Kitting & Toolkit Engineering
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-4xl md:text-[4.5rem] leading-[1.05] font-extrabold tracking-tighter mb-8 uppercase text-[#1E3448] max-w-5xl"
            >
              Every Tool. Every Time. <span className="text-secondary italic">Accounted For.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-3xl font-body leading-relaxed mb-8"
            >
              Gould Southern engineers custom tool kits and shadow-board systems that eliminate FOD risk, enforce lean workflows, and keep your teams audit-ready — from single hand-held kits to fully equipped mobile tool cribs.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-md font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all"
            >
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </section>

        {/* STAT STRIP */}
        <section className="px-6 md:px-12 py-14 bg-[#0A1F2E] border-y border-white/5">
          <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-start"
              >
                <div className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-secondary mb-2">{s.number}</div>
                <div className="text-white/60 font-label text-[0.6875rem] uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CAPABILITIES — ALTERNATING BLUE SPLITS */}
        {capabilities.map((c) => (
          <DarkSplit key={c.id} {...c} />
        ))}

        {/* ADVANTAGE — TWO-COLUMN CHECKS ON WHITE */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-white border-y border-[#E8E2D9]">
          <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">Why Gould Southern</span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                The Gould Southern <span className="text-secondary">Advantage.</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                You work directly with a focused engineering team that knows your program inside and out — with the procurement scale, logistics network, and financial stability of the Stephen Gould organization behind every project.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-y-4">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: i * 0.04 }}
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

        {/* DARK CTA BAND */}
        <section className="relative px-6 md:px-12 py-20 bg-[#061E2E] text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-secondary" />
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <span className="text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">Engineer Your Kit</span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-6">
              Tell Us About <span className="text-secondary">Your Program.</span>
            </h2>
            <p className="text-white/70 leading-relaxed text-lg mb-10 max-w-xl mx-auto">
              Share your tooling requirements, compliance standards, and deployment environment. We'll design a solution around them.
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

export default Kitting2;