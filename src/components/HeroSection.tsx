import heroBg from "@/assets/hero-bg.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img src={heroBg} alt="Serene space with natural light" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </motion.div>
      <motion.div className="relative z-10 text-center px-6 max-w-3xl mx-auto" style={{ opacity: textOpacity, y: textY }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground mb-6 leading-[1.1]">
          {t("hero.title")}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-base md:text-lg text-primary-foreground/80 tracking-wide max-w-xl mx-auto leading-relaxed mb-8">
          {t("hero.punch")}
        </motion.p>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} className="gold-line mb-8" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-sm md:text-base text-primary-foreground/70 tracking-wide max-w-xl mx-auto leading-relaxed mb-12">
          {t("hero.desc1")}
        </motion.p>
        <motion.a href="https://wa.me/34658733347" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          className="inline-block bg-gold text-foreground font-body text-xs tracking-[0.3em] uppercase px-12 py-5 transition-all duration-500 hover:bg-gold-light">
          {t("hero.cta")}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
