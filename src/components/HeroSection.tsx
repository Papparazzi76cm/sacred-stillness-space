import heroBg from "@/assets/hero-bg.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img src={heroBg} alt="Serene space with natural light" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </motion.div>
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{ opacity: textOpacity, y: textY }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-primary-foreground mb-8 leading-tight"
        >
          The Sacred Stillness
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="gold-line mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display text-xl md:text-2xl font-light text-primary-foreground/90 italic leading-relaxed mb-4"
        >
          Where your nervous system finds regulation,
          <br />and the inner noise fades away.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-body text-sm md:text-base text-primary-foreground/70 tracking-widest uppercase mt-10 mb-8 max-w-md mx-auto"
        >
          For those who carry so much…
          <br />and need a space to finally let go.
        </motion.p>
        <motion.a
          href="#book"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          whileHover={{ scale: 1.05, backgroundColor: "hsla(40,50%,62%,0.15)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-block border border-gold text-primary-foreground font-body text-xs tracking-[0.3em] uppercase px-10 py-4 transition-colors duration-500"
        >
          Apply / Book Experience
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
