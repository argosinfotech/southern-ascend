import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent-warm font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-6">
              Ready to Discuss{" "}
              <span className="text-accent-warm">Your Program?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Whether you're scoping a new kitting program, need certified packaging for
              aerospace components, or want to explore turnkey solutions—we're ready to talk.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent-warm flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm">Location</h4>
                  <p className="text-sm text-muted-foreground">Duluth, Georgia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent-warm flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm">Phone</h4>
                  <p className="text-sm text-muted-foreground">(770) 476-1860</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent-warm flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm">Email</h4>
                  <p className="text-sm text-muted-foreground">info@gouldsouthern.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-8 md:p-10"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
              Request a Consultation
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent-warm/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent-warm/40"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent-warm/40"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">How can we help?</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent-warm/40 resize-none"
                  placeholder="Tell us about your program or requirements..."
                />
              </div>
              <Button variant="accent" size="lg" className="w-full">
                Send Inquiry <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
