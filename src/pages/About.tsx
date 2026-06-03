import { motion } from "framer-motion";
import {
  Check, Users, Globe2, Clock, ArrowRight, Mail, Phone, MapPin, Image,
} from "lucide-react";
import HeaderLight from "@/components/home4/HeaderLight";
import Footer from "@/components/home4/Footer4";
import earthBg from "@/assets/earth-horizon-bg.jpg";

const stats = [
  { num: "1974", label: "Year Founded" },
  { num: "50+", label: "Years of Expertise" },
  { num: "40+", label: "Locations Nationwide" },
  { num: "300+", label: "Supplier Partners" },
];

const milestones = [
  {
    year: "1939",
    title: "The Foundation",
    body: "Stephen Gould and David Golden establish the Stephen Gould Corporation, building a company around the principle that the customer comes first in every decision.",
  },
  {
    year: "1974",
    title: "Gould Southern Is Born",
    body: "Gould Southern launches in the Southeast, bringing specialized packaging and custom kitting capabilities to the growing aerospace and defense industries in the region.",
  },
  {
    year: "1990s",
    title: "FOD Control Pioneer",
    body: "Gould Southern establishes itself as a leader in Foreign Object Debris prevention, developing custom tool kitting systems that become standard practice across major aerospace programs.",
  },
  {
    year: "2000s",
    title: "Government Expansion",
    body: "Secures GSA Schedule contract and builds distributor agreements with 17+ major manufacturers, becoming a trusted MRO partner for DOD E-Mall, DLA, and federal procurement programs.",
  },
  {
    year: "Today",
    title: "50+ Years of Excellence",
    body: "AS9100:D and ISO 9001:2015 certified, serving the leading names in aerospace and defense from our Duluth, Georgia headquarters, with access to 40+ fulfillment locations and 300+ supplier partners through the Stephen Gould network.",
  },
];

const principles = [
  {
    num: "01",
    title: "Customer-First Engineering",
    body: "Every solution starts with your requirements, not our catalog. We design around your program's tooling needs, compliance standards, and deployment constraints.",
  },
  {
    num: "02",
    title: "Zero-Tolerance Quality",
    body: "Our AS9100:D and ISO 9001:2015 certifications are not credentials on a wall. They govern every process from procurement through final delivery, with full traceability at every step.",
  },
  {
    num: "03",
    title: "Continual Improvement",
    body: "Our research team monitors developments across FOD standards, materials science, and lean methodologies to keep your solutions current, not just compliant.",
  },
];

const differentiators = [
  {
    icon: Clock,
    title: "Decades of Domain Expertise",
    body: "Over 50 years specializing in tool control, FOD prevention, and industrial packaging for aerospace, defense, and government programs. We understand the standards because we helped shape them.",
  },
  {
    icon: Users,
    title: "Dedicated Team, Not a Call Center",
    body: "Your projects are managed by engineers and specialists who know your program inside and out. You get direct access to the people doing the work, not a rotating support queue.",
  },
  {
    icon: Globe2,
    title: "Network-Backed Scale",
    body: "Access to 40+ fulfillment locations and 300+ supplier partners through the Stephen Gould network. Boutique-level service with enterprise-level procurement power and logistics reach.",
  },
];

const advantages = [
  "50+ years of specialized expertise in industrial kitting and packaging.",
  "AS9100:D and ISO 9001:2015 certified quality management system.",
  "Access to 40+ fulfillment locations across North America.",
  "300+ supplier partners for virtually any tool or component requirement.",
  "GSA Schedule contract holder serving DOD E-Mall, DLA, and federal agencies.",
  "Privately held since 1939 with the financial stability of a half-billion-dollar organization.",
];

const About = () => {
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
              About Gould Southern
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-4xl md:text-[4.5rem] leading-[1.05] font-extrabold tracking-tighter mb-8 uppercase text-[#1E3448] max-w-5xl"
            >
              Built On Decades<br />
              Of <span className="text-secondary">Doing It Right.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-3xl font-body leading-relaxed mb-8"
            >
              Since 1974, Gould Southern has been engineering custom kitting, specialized packaging, and integrated supply solutions for the most demanding industries in the world. We solve problems that require precision, accountability, and zero margin for error.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-md font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all"
            >
              Talk to Our Team <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </section>

        {/* STAT STRIP */}
        <section className="px-6 md:px-12 -mt-10 relative z-10">
          <div className="max-w-[1920px] mx-auto bg-white border border-[#E8E2D9] rounded-lg py-6 px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {stats.map((s, i) => (
              <div key={i} className="text-center md:border-r md:last:border-r-0 border-[#E8E2D9]">
                <div className="font-headline font-extrabold text-[#1E3448] text-2xl md:text-3xl tracking-tight">
                  {s.num}
                </div>
                <div className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-widest mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-[#FAF8F5]">
          <div className="max-w-[1920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-12"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Who We Are
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                The Gould Southern <span className="text-secondary">Story.</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Gould Southern was built to solve a specific problem: high-consequence industries need packaging and kitting partners who understand that "close enough" is not an option. When a missing tool can ground an aircraft or a packaging failure can compromise a sensitive component, you need a team that treats every detail as mission-critical.
                </p>
                <p>
                  For over 50 years, that has been our focus. We consult, design, verify, and implement custom solutions for tool control, specialized packaging, distribution, and integrated supply across government and private-sector programs.
                </p>
                <p>
                  Based in Duluth, Georgia, our team brings deep domain expertise in aerospace, defense, and industrial operations, with direct access to the sourcing, logistics, and fulfillment capabilities of the broader Stephen Gould network.
                </p>
              </div>
              <div className="bg-[#E8E2D9] border border-[#DDD4C5] rounded-lg min-h-[360px] flex items-center justify-center">
                <div className="text-center">
                  <Image className="w-12 h-12 text-gray-400 mx-auto mb-3" strokeWidth={1.5} />
                  <span className="text-gray-500 font-label text-xs uppercase tracking-widest">
                    Facility / Team Photography
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="px-6 md:px-12 py-20 md:py-24 bg-white">
          <div className="max-w-[1920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-14"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
                Our Heritage
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                <span className="text-secondary">Milestones.</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary" />
            </motion.div>

            <div className="relative">
              <div className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-[#E8E2D9]" aria-hidden="true" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.05 + i * 0.05 }}
                    className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>div]:col-start-2"}`}
                  >
                    <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="absolute left-0 md:left-1/2 top-1 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-secondary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <div className="font-headline text-3xl md:text-4xl font-extrabold text-secondary leading-none mb-2 tracking-tight">
                        {m.year}
                      </div>
                      <h3 className="font-headline font-extrabold text-[#1E3448] text-lg uppercase tracking-tight mb-2">
                        {m.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{m.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DARK SPLIT: WHAT DRIVES US */}
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
                  Workshop / Production Photography
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
                What Drives Us
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-10">
                Principles, Not <span className="text-secondary">Just Processes.</span>
              </h2>
              <div className="space-y-8">
                {principles.map((p) => (
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

        {/* WHY CLIENTS CHOOSE US */}
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
                The Difference
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-6">
                Why Clients Choose <span className="text-secondary">Gould Southern.</span>
              </h2>
              <div className="w-12 h-[3px] bg-secondary mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                We combine the personal attention and specialized knowledge of a boutique engineering firm with the scale and stability of a half-billion-dollar organization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  className="bg-white border border-[#E8E2D9] rounded-lg p-7 hover:border-secondary/40 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                    <d.icon className="text-secondary w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-headline font-extrabold text-[#1E3448] text-lg uppercase tracking-tight mb-3 leading-tight">
                    {d.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{d.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DARK BAND: PRIVATELY HELD */}
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
              Stability You Can Count On
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-6">
              Privately Held. Family Led.
            </h2>
            <p className="text-white/60 leading-relaxed text-base">
              The Stephen Gould Corporation has been privately held by the same family since 1939. No outside investors. No quarterly pressure. Just a long-term commitment to doing right by customers, built over eight decades and counting.
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
                  Gould Southern combines the responsiveness of a specialized packaging partner with the advantages of a broader strategic network. Clients get direct access to a team focused on execution, backed by expanded sourcing, logistics, and operational support through the Stephen Gould network.
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
                  Discuss your project requirements with our technical sales team for a custom-engineered proposal.
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

export default About;