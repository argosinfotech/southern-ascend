import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center px-6 md:px-12 pt-32 pb-24 overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src={heroBg}
          alt="High-tech manufacturing facility"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic multi-layer overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#1E3448]/90 via-[#1E3448]/70 to-[#1E3448]/30" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#1E3448]/80 via-transparent to-[#1E3448]/20" />
      <motion.div
        className="absolute inset-0 z-[3] bg-[#1E3448]"
        style={{ opacity: overlayOpacity }}
      />
      {/* Subtle vignette */}
      <div className="absolute inset-0 z-[4]" style={{
        background: "radial-gradient(ellipse at 30% 50%, transparent 0%, rgba(30,52,72,0.4) 100%)"
      }} />

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[5] bg-gradient-to-t from-[#FAF8F5] to-transparent" />

      <div className="relative z-10 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block border border-white/20 text-white/80 font-label text-[0.6875rem] uppercase tracking-[0.3em] px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          Industrial Excellence
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-headline text-4xl md:text-[3.75rem] leading-[1.05] font-extrabold tracking-tighter mb-8 uppercase text-white"
        >
          Mission-Critical{" "}
          <span className="text-secondary">Kitting & Packaging</span> for
          High-Consequence Industries.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white/70 text-lg max-w-2xl mb-14 font-body leading-relaxed"
        >
          Where precision meets protection. Gould Southern delivers engineered
          logistics and specialized kitting solutions designed for the
          zero-failure environments of Aerospace, Defense, and Global
          Infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap gap-6"
        >
          <a
            href="#contact"
            className="bg-secondary text-white px-8 py-4 font-headline font-bold uppercase text-sm tracking-widest hover:brightness-110 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300"
          >
            Request a Consultation
          </a>
          <a
            href="#capabilities"
            className="border border-white/30 text-white px-8 py-4 font-headline font-bold uppercase text-sm tracking-widest hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
          >
            Explore Our Capabilities
          </a>
        </motion.div>
      </div>

      {/* Decorative accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute right-12 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-secondary/40 to-transparent z-10 hidden lg:block origin-top"
      />
    </section>
  );
};

export default HeroSection;
