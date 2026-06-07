import { motion } from "framer-motion";
import {
  Check, ArrowRight, Mail, Phone, MapPin, Image,
  Plane, Shield, Landmark, Factory, Zap, Anchor,
} from "lucide-react";
import HeaderLight from "@/components/home4/HeaderLight";
import Footer from "@/components/home4/Footer4";
import earthBg from "@/assets/earth-horizon-bg.jpg";

const overview = [
  { icon: Plane, label: "Aerospace", desc: "Commercial aviation, aircraft manufacturing, MRO facilities", href: "#aerospace" },
  { icon: Shield, label: "Defense & Military", desc: "DOD programs, military bases, defense contractors", href: "#defense" },
  { icon: Landmark, label: "Government & Federal", desc: "GSA, DLA, DOD E-Mall, federal procurement", href: "#government" },
  { icon: Factory, label: "Industrial Manufacturing", desc: "Lean production, tool control, facility operations", href: "#manufacturing" },
  { icon: Zap, label: "Energy & Utilities", desc: "Power generation, oil & gas, nuclear maintenance", href: "#energy" },
  { icon: Anchor, label: "Shipbuilding & Marine", desc: "Naval construction, marine MRO, port operations", href: "#shipbuilding" },
];

const advantages = [
  "50+ years serving aerospace, defense, and industrial clients.",
  "AS9100:D and ISO 9001:2015 certified quality management.",
  "Access to 40+ fulfillment locations and 300+ supplier partners.",
  "GSA Schedule contract holder for streamlined federal procurement.",
  "Custom-engineered solutions, not catalog products repurposed.",
  "Turnkey delivery: sourced, assembled, inspected, and shipped ready to deploy.",
];

type SplitProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  paragraphs: string[];
  tags: string[];
  photoLabel: string;
  reversed?: boolean;
};

const DarkSplit = ({ id, eyebrow, title, paragraphs, tags, photoLabel, reversed }: SplitProps) => (
  <section id={id} className="bg-[#082A40]">
    <div className={`grid lg:grid-cols-2 min-h-[520px] ${reversed ? "lg:[direction:rtl]" : ""}`}>
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="bg-[#0E3A55] min-h-[300px] flex items-center justify-center lg:[direction:ltr]"
      >
        <div className="text-center px-6">
          <Image className="w-12 h-12 text-white/30 mx-auto mb-3" strokeWidth={1.5} />
          <span className="text-white/40 font-label text-xs uppercase tracking-widest">{photoLabel}</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
        className="px-6 md:px-16 py-16 md:py-20 flex flex-col justify-center lg:[direction:ltr]"
      >
        <span className="text-white/50 font-label text-[0.6875rem] uppercase tracking-[0.3em] mb-4">{eyebrow}</span>
        <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white leading-[1.05] mb-6">
          {title}
        </h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-white/70 leading-relaxed text-base mb-4">{p}</p>
        ))}
        <div className="flex flex-wrap gap-2 mt-2">
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

type WhiteProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  paragraphs: string[];
  tags: string[];
  photoLabel: string;
  reversed?: boolean;
};

const WhiteSplit = ({ id, eyebrow, title, paragraphs, tags, photoLabel, reversed }: WhiteProps) => (
  <section id={id} className="px-6 md:px-12 py-20 md:py-24 bg-white border-b border-[#E8E2D9]">
    <div className={`max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? "lg:[direction:rtl]" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
        className="lg:[direction:ltr]"
      >
        <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">{eyebrow}</span>
        <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] leading-[1.05] mb-6">
          {title}
        </h2>
        <div className="w-12 h-[3px] bg-secondary mb-6" />
        {paragraphs.map((p, i) => (
          <p key={i} className="text-gray-600 leading-relaxed text-base mb-4">{p}</p>
        ))}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((t) => (
            <span key={t} className="text-secondary text-[0.6875rem] font-bold uppercase tracking-wider bg-secondary/5 border border-secondary/20 rounded px-3 py-1.5">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg min-h-[340px] flex items-center justify-center lg:[direction:ltr]"
      >
        <div className="text-center px-6">
          <Image className="w-12 h-12 text-gray-300 mx-auto mb-3" strokeWidth={1.5} />
          <span className="text-gray-400 font-label text-xs uppercase tracking-widest">{photoLabel}</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Industries = () => {
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
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-block text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] mb-6"
            >
              Industries We Serve
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-4xl md:text-[4.5rem] leading-[1.05] font-extrabold tracking-tighter mb-8 uppercase text-[#1E3448] max-w-5xl"
            >
              Precision Built For Industries <span className="text-secondary italic">Where Failure Isn't An Option.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-3xl font-body leading-relaxed mb-8"
            >
              From aircraft hangars to naval shipyards, power plants to production floors, we engineer kitting and packaging solutions for the sectors where tool accountability, FOD prevention, and compliance are non-negotiable.
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

        {/* OVERVIEW GRID */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-white">
          <div className="max-w-[1920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
              className="max-w-3xl mb-14"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Deployed Expertise
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                Where We <span className="text-secondary">Operate.</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                Our kitting, packaging, and integrated supply capabilities are purpose-built for industries where precision, accountability, and compliance are non-negotiable.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {overview.map((o, i) => (
                <motion.a
                  key={o.label}
                  href={o.href}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05 }}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gradient-to-br from-[#0E3A55] to-[#082A40] hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <o.icon className="absolute top-6 right-6 w-8 h-8 text-secondary/80" strokeWidth={1.5} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-headline font-extrabold text-white text-xl uppercase tracking-tight mb-1.5 group-hover:text-secondary transition-colors">
                      {o.label}
                    </div>
                    <div className="text-white/70 text-sm leading-snug">{o.desc}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRY DETAILS */}
        <DarkSplit
          id="aerospace"
          eyebrow="Aerospace"
          title={<>Where FOD Prevention Isn't Optional. It's <span className="text-secondary">Everything.</span></>}
          paragraphs={[
            "Gould Southern has served the leading names in commercial aerospace since 1974. Our custom tool kitting systems are engineered around the strict FOD control requirements of aircraft manufacturing and MRO facilities, where a single unaccounted tool can ground a fleet.",
            "Every kit we build gives inspectors immediate visual confirmation that all tools are present and accounted for. Shadow boards, laser-etched identification, and RFID tracking ensure complete accountability from hangar floor to final sign-off.",
          ]}
          tags={["Custom Tool Kits", "Shadow Boards", "FOD Control", "RFID Tracking", "Laser Etching"]}
          photoLabel="Aerospace / Aircraft Photography"
        />

        <WhiteSplit
          id="defense"
          eyebrow="Defense & Military"
          title={<>Built To MIL-Spec. Delivered <span className="text-secondary">Turnkey.</span></>}
          paragraphs={[
            "From forward operating bases to stateside maintenance depots, our kitting solutions are built to the weight, space, and durability specifications that military deployments demand. Cases are water-resistant, dustproof, and chemical-resistant, designed to perform in environments where commercial alternatives fail.",
            "We source, assemble, inspect, and deliver fully completed kits so your receiving team gets a ready-to-deploy product, not a shipment of loose components. Kits can be standardized across multiple facilities or customized for task-specific missions.",
          ]}
          tags={["MIL-Spec Kitting", "Turnkey Assembly", "Rugged Cases", "Mobile Tool Cribs"]}
          photoLabel="Defense / Military Photography"
        />

        <DarkSplit
          id="government"
          eyebrow="Government & Federal"
          title={<>Your GSA-Compliant <span className="text-secondary">Supply Chain Partner.</span></>}
          paragraphs={[
            "Gould Southern is a GSA Schedule contract holder (GS-06F-0047S) with over 250,000 industrial-grade products available through DOD E-Mall, DLA, and GSA procurement channels. Registered as a small business with CCR, we adhere to Six Sigma and lean principles across every engagement.",
            "Federal buyers benefit from pre-negotiated pricing, compliant ordering processes, and distributor agreements with 17+ major manufacturers who recognize the value of providing quality products to government end users.",
          ]}
          tags={["GSA Schedule", "DOD E-Mall", "DLA", "MRO Distribution", "Small Business"]}
          photoLabel="Government / Federal Photography"
          reversed
        />

        <WhiteSplit
          id="manufacturing"
          eyebrow="Industrial Manufacturing"
          title={<>Lean Tool Control At <span className="text-secondary">Production Scale.</span></>}
          paragraphs={[
            "Manufacturing facilities running lean programs need tool control systems that reduce waste, eliminate search time, and give supervisors instant visibility into tool accountability. Our shadow board and kitting solutions are designed around these principles from the ground up.",
            "From stationary cabinet systems on the production floor to portable kits that move between work cells, we build solutions that integrate with your existing lean workflows rather than adding complexity to them.",
          ]}
          tags={["Shadow Boards", "Lean Integration", "Cabinet Systems", "Tool Accountability"]}
          photoLabel="Manufacturing Floor Photography"
          reversed
        />

        <DarkSplit
          id="energy"
          eyebrow="Energy & Utilities"
          title={<>FOD Control For <span className="text-secondary">Critical Infrastructure.</span></>}
          paragraphs={[
            "Power generation facilities, refineries, and nuclear maintenance operations face the same FOD risks as aerospace, with equally severe consequences. A foreign object left inside a turbine housing or reactor vessel can cause catastrophic damage and extended downtime measured in millions of dollars.",
            "Our kitting systems bring the same precision tool accountability used in aerospace programs to energy sector maintenance operations, with kits built to withstand industrial environments and designed for rapid inspection during outage windows.",
          ]}
          tags={["FOD Prevention", "Outage Kitting", "Rugged Systems", "Tool Imaging"]}
          photoLabel="Energy / Power Plant Photography"
        />

        <WhiteSplit
          id="shipbuilding"
          eyebrow="Shipbuilding & Marine"
          title={<>Tool Accountability From <span className="text-secondary">Keel To Bridge.</span></>}
          paragraphs={[
            "Naval construction and marine MRO programs operate in confined, complex environments where lost tools create real safety hazards. Our kitting solutions give shipyard crews the same level of tool accountability that aerospace programs require, adapted for the unique challenges of maritime operations.",
            "Water-resistant, chemical-resistant cases and purpose-built shadow boards ensure tools survive harsh marine environments. RFID tracking provides digital accountability that complements physical inspection, giving program managers full visibility across multiple work zones and shifts.",
          ]}
          tags={["Marine-Grade Cases", "RFID Tracking", "Multi-Zone Control", "FOD Prevention"]}
          photoLabel="Shipyard / Marine Photography"
        />

        {/* DARK BAND */}
        <section className="relative px-6 md:px-12 py-20 bg-[#061E2E] text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-secondary" />
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <span className="text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
              Your Industry, Your Requirements
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-6">
              Don't See Your Sector Listed?
            </h2>
            <p className="text-white/60 leading-relaxed text-base mb-8">
              If your operation requires precision tool control, specialized packaging, or FOD prevention, we can engineer a solution around your specific compliance standards and deployment environment. Let's talk about what you need.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-md font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 transition-all"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Industries;