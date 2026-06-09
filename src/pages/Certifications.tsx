import { motion } from "framer-motion";
import { Check, ShieldCheck, Globe2, Boxes, Award, FileCheck2, TrendingDown, Mail, Phone, MapPin, ArrowRight, Image } from "lucide-react";
import HeaderLight from "@/components/home4/HeaderLight";
import Footer from "@/components/home4/Footer4";
import earthBg from "@/assets/earth-horizon-bg.jpg";
import qualityBg from "@/assets/quality-bg.jpg";

const certs = [
  { code: "AS9100:D", label: "Certified Quality", icon: ShieldCheck },
  { code: "ISO 9001:2015", label: "Global Standards", icon: Globe2 },
  { code: "AS9120:B", label: "Distribution & Stockist", icon: Boxes },
  { code: "AS9100:D", label: "Aviation & Defense", icon: Award },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Aerospace-Grade QMS",
    body: "AS9100:D certification aligns our entire quality management system to the best practices of the global aerospace industry, as defined by the IAQG. Every process, from procurement through final delivery, is governed by this standard.",
  },
  {
    icon: FileCheck2,
    title: "Full Traceability",
    body: "Our quality system provides complete traceability from raw material sourcing to finished product delivery. Every component, every process step, and every inspection is documented and auditable.",
  },
  {
    icon: TrendingDown,
    title: "Reduced Risk",
    body: "Certified quality management means fewer defects, fewer surprises, and fewer disruptions. Our proactive approach to quality improvement reduces risk across your supply chain, not just at the point of delivery.",
  },
];

const policy = [
  {
    num: "01",
    title: "Customer-First Standard",
    body: "We provide products and distribution services that meet or exceed all customer specifications and regulatory requirements. Our primary goal is customer satisfaction through quality performance and on-time deliveries.",
  },
  {
    num: "02",
    title: "Continual Improvement",
    body: "We establish and regularly review quality objectives across the organization, ensuring the suitability and appropriateness of our policy. We are committed to continual improvement of our quality management system's effectiveness.",
  },
  {
    num: "03",
    title: "Organization-Wide Ownership",
    body: "Our quality policy is communicated to every employee at orientation and reviewed with all current staff. Every team member understands what quality means to their specific role.",
  },
];

const advantages = [
  "AS9100:D and ISO 9001:2015 certified quality management system audited to aerospace standards.",
  "AS9120:B certified distribution and stockist operations for controlled aerospace components.",
  "GSA Schedule GS-06F-0047S with 250,000+ industrial-grade line offerings for federal procurement.",
  "Registered small business with CCR, adhering to Six Sigma and lean principles.",
  "Distributor agreements with major manufacturers recognized by government end users.",
  "Full traceability from sourcing through delivery: documented, auditable, and compliant.",
];

const Certifications = () => {
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
              Compliance & Trust
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-4xl md:text-[4.5rem] leading-[1.05] font-extrabold tracking-tighter mb-8 uppercase text-[#1E3448] max-w-5xl"
            >
              Certified To The<br />
              Standards <span className="text-secondary">Your Industry Demands.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-3xl font-body leading-relaxed mb-8"
            >
              Gould Southern maintains AS9100:D, ISO 9001:2015, and AS9120:B certifications, aligning our quality management system to the global standards adopted by the aerospace industry and the International Aerospace Quality Group (IAQG).
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

        {/* CERT SHOWCASE */}
        <section className="px-6 md:px-12 -mt-10 relative z-10">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {certs.map((c, i) => (
              <motion.div
                key={c.code + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-[#E8E2D9] rounded-lg p-6 sm:p-7 text-center hover:border-secondary/40 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <c.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" strokeWidth={1.75} />
                </div>
                <div className="font-headline font-extrabold text-[#1E3448] text-lg sm:text-xl md:text-2xl tracking-tight mb-1">{c.code}</div>
                <div className="text-gray-500 font-label text-xs sm:text-[0.6875rem] uppercase tracking-widest">{c.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHAT THIS MEANS */}
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
                What This Means For You
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                Quality You Can <span className="text-secondary">Verify.</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                Our certifications aren't just credentials on a wall. They represent audited, continuously reviewed systems that govern how every product is sourced, built, inspected, and delivered.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  className="bg-white border border-[#E8E2D9] rounded-lg p-7 hover:border-secondary/40 hover:shadow-lg transition-all"
                >
                  <v.icon className="text-secondary w-7 h-7 mb-5" strokeWidth={1.75} />
                  <h3 className="font-headline font-extrabold text-[#1E3448] text-lg uppercase tracking-tight mb-3 leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DARK SPLIT: QUALITY POLICY */}
        <section className="bg-[#082A40]">
          <div className="grid lg:grid-cols-2 min-h-[520px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#0E3A55] min-h-[300px] flex items-center justify-center overflow-hidden"
            >
              <img src={qualityBg} alt="Facility inspection" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative text-center">
                <Image className="w-10 h-10 text-white/30 mx-auto mb-3" strokeWidth={1.5} />
                <span className="text-white/60 font-label text-xs uppercase tracking-widest">
                  Facility / Inspection Photography
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
                Our Commitment
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-10">
                Quality <span className="text-secondary">Policy.</span>
              </h2>
              <div className="space-y-8">
                {policy.map((p) => (
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
            </motion.div>
          </div>
        </section>

        {/* DARK BAND: GSA */}
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
              Federal & Government
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-6">
              GSA Schedule Contract Holder.
            </h2>
            <p className="text-white/60 leading-relaxed text-base mb-8">
              Registered as a small business with CCR, Gould Southern adheres to Six Sigma and lean principles. For DOD E-Mall, DLA, and GSA, we are a trusted source as a traditional MRO distributor, custom tool kit provider for FOD control, and safety solutions partner with over 250,000 industrial-grade products available to federal customers.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-md font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all"
            >
              View GSA Offerings <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Certifications;