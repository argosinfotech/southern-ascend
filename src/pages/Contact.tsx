import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Printer, Mail, ArrowRight, Map as MapIcon } from "lucide-react";
import HeaderLight from "@/components/home4/HeaderLight";
import Footer from "@/components/home4/Footer4";
import earthBg from "@/assets/earth-horizon-bg.jpg";

const inquirySchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  title: z.string().trim().max(120).optional().or(z.literal("")),
  company: z.string().trim().min(1, "Company is required").max(160),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  state: z.string().trim().max(40).optional().or(z.literal("")),
  zip: z.string().trim().max(20).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(40),
  fax: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const inquiryOptions = [
  { value: "kitting", label: "Custom Kitting & Toolkits" },
  { value: "packaging", label: "Packaging Solutions" },
  { value: "fod", label: "RFID / FOD Solutions" },
  { value: "government", label: "Government Contracting" },
  { value: "logistics", label: "Logistics & Distribution" },
  { value: "general", label: "General Inquiry" },
];

const hours = [
  { day: "Monday", time: "8:00 AM - 5:00 PM EST" },
  { day: "Tuesday", time: "8:00 AM - 5:00 PM EST" },
  { day: "Wednesday", time: "8:00 AM - 5:00 PM EST" },
  { day: "Thursday", time: "8:00 AM - 5:00 PM EST" },
  { day: "Friday", time: "8:00 AM - 5:00 PM EST" },
  { day: "Sat / Sun", time: "Closed" },
];

const inputCls =
  "w-full px-4 py-3 bg-white border border-[#E8E2D9] rounded-md text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition";
const labelCls =
  "block text-xs font-headline font-bold uppercase tracking-widest text-[#1E3448] mb-2";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = inquirySchema.safeParse(data);
    if (!result.success) {
      const first = result.error.issues[0];
      toast.error(first?.message || "Please review the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — we'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-900">
      <HeaderLight />
      <main>
        {/* HERO */}
        <section className="relative min-h-[480px] flex items-center px-6 md:px-12 pt-32 pb-16 overflow-hidden bg-[#FAF8F5]">
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
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-4xl md:text-[4.5rem] leading-[1.05] font-extrabold tracking-tighter mb-8 uppercase text-[#1E3448] max-w-5xl"
            >
              Let's Talk About<br />
              <span className="text-secondary">Your Project.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-3xl font-body leading-relaxed"
            >
              Whether you need a custom kitting solution, a packaging consultation, or government procurement support, our technical sales team is ready to help scope your requirements.
            </motion.p>
          </div>
        </section>

        {/* CONTACT FORM + SIDEBAR */}
        <section className="px-6 md:px-12 py-16 md:py-20 bg-[#FAF8F5]">
          <div className="max-w-[1920px] mx-auto grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#E8E2D9] rounded-lg p-6 md:p-10"
            >
              <span className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-3">
                Inquiry Form
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tighter uppercase text-[#1E3448] mb-3">
                Send Us A <span className="text-secondary">Message.</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Fill out the form below and a member of our team will respond within one business day.
              </p>

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>First Name <span className="text-secondary">*</span></label>
                    <input name="firstName" maxLength={80} required placeholder="First name" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Last Name <span className="text-secondary">*</span></label>
                    <input name="lastName" maxLength={80} required placeholder="Last name" className={inputCls} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Title</label>
                    <input name="title" maxLength={120} placeholder="Job title" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Company <span className="text-secondary">*</span></label>
                    <input name="company" maxLength={160} required placeholder="Company name" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Inquiry Type <span className="text-secondary">*</span></label>
                  <select name="inquiryType" required defaultValue="" className={inputCls}>
                    <option value="" disabled>Please select an option</option>
                    {inquiryOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Street Address</label>
                  <input name="address" maxLength={200} placeholder="Street address" className={inputCls} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className={labelCls}>City</label>
                    <input name="city" maxLength={80} placeholder="City" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>State</label>
                    <input name="state" maxLength={40} placeholder="State" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>ZIP</label>
                    <input name="zip" maxLength={20} placeholder="ZIP code" className={inputCls} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Email <span className="text-secondary">*</span></label>
                    <input name="email" type="email" maxLength={255} required placeholder="Email address" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Phone <span className="text-secondary">*</span></label>
                    <input name="phone" type="tel" maxLength={40} required placeholder="Phone number" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Fax</label>
                  <input name="fax" maxLength={40} placeholder="Fax number (optional)" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Additional Information</label>
                  <textarea
                    name="message"
                    maxLength={2000}
                    rows={5}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs."
                    className={`${inputCls} resize-y min-h-[120px]`}
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-md font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit Inquiry"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* SIDEBAR */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white border border-[#E8E2D9] rounded-lg overflow-hidden shadow-sm">
                <div className="h-1.5 bg-secondary" />
                <div className="p-8">
                  <h3 className="font-headline text-2xl font-extrabold uppercase tracking-tight text-[#1E3448] mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-5">
                    <InfoItem icon={MapPin} label="Headquarters">
                      Gould Southern<br />2940 Old Norcross Road<br />Duluth, GA 30096
                    </InfoItem>
                    <InfoItem icon={Phone} label="Customer Service">
                      <a href="tel:8005489085" className="hover:text-secondary transition-colors">800.548.9085</a>
                    </InfoItem>
                    <InfoItem icon={Phone} label="Local">
                      <a href="tel:7704761860" className="hover:text-secondary transition-colors">(770) 476-1860</a>
                    </InfoItem>
                    <InfoItem icon={Printer} label="Fax">
                      (770) 921-9477
                    </InfoItem>
                    <InfoItem icon={Mail} label="Email">
                      <a href="mailto:info@gouldsouthern.com" className="hover:text-secondary transition-colors break-all">info@gouldsouthern.com</a>
                    </InfoItem>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E2D9] rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[#0E3A55] aspect-[4/3] flex items-center justify-center relative">
                  <iframe
                    title="Gould Southern Headquarters Map"
                    src="https://maps.google.com/maps?q=2940+Old+Norcross+Road+Duluth+GA+30096&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="text-gray-600 text-sm leading-relaxed">
                    2940 Old Norcross Road<br />Duluth, GA 30096
                  </div>
                  <a
                    href="https://maps.google.com/?q=2940+Old+Norcross+Road+Duluth+GA+30096"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-secondary font-headline font-bold uppercase text-xs tracking-widest hover:brightness-110 whitespace-nowrap"
                  >
                    <MapIcon className="w-3.5 h-3.5" /> Directions
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* HOURS BAND */}
        <section className="relative px-6 md:px-12 py-20 bg-[#061E2E] text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-secondary" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <span className="text-secondary font-label text-[0.6875rem] uppercase tracking-[0.3em] block mb-4">
              Availability
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-white mb-6">
              Customer Service Hours.
            </h2>
            <p className="text-white/60 leading-relaxed text-base max-w-2xl mx-auto mb-10">
              Our team is available during regular business hours to discuss your requirements, provide quotes, and support active projects.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 max-w-3xl mx-auto text-left">
              {hours.map((h) => (
                <div key={h.day} className="flex flex-col">
                  <span className="text-white/50 text-[0.6875rem] font-headline font-bold uppercase tracking-widest">
                    {h.day}
                  </span>
                  <span className="text-white text-sm font-medium mt-0.5">{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const InfoItem = ({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center">
      <Icon className="w-4 h-4 text-secondary" strokeWidth={2} />
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-gray-500 font-label text-[0.6875rem] uppercase tracking-widest mb-1">
        {label}
      </div>
      <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

export default Contact;