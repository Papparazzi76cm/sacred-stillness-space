import aboutImg from "@/assets/about-portrait.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-secondary overflow-hidden">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div className="aspect-[3/4] overflow-hidden relative">
          <motion.img src={aboutImg} alt="Your guide" className="w-full h-full object-cover" style={{ scale: imgScale, y: imgY }} />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-6 pb-6 pt-16">
            <p className="font-display text-2xl md:text-3xl font-light tracking-[0.15em] text-white/90">
              Adelaida Irrasabal
            </p>
          </div>
        </motion.div>
        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">{t("about.label")}</motion.p>
          <motion.blockquote initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-xl md:text-2xl font-light italic text-foreground leading-relaxed">
            {t("about.quote")}
          </motion.blockquote>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }} className="gold-line !mx-0 my-10" style={{ originX: 0 }} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
