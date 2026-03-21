import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const WhatIsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">{t("what.label")}</motion.p>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          className="font-display text-3xl md:text-5xl font-light text-foreground mb-10 leading-tight">{t("what.title")}</motion.h2>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-12" />

        <div className="space-y-2 mb-10">
          {[t("what.not1"), t("what.not2"), t("what.not3")].map((text, i) => (
            <motion.p key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2 + i}
              className="font-body text-sm text-muted-foreground tracking-wide">{text}</motion.p>
          ))}
        </div>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
          className="font-body text-base md:text-lg text-foreground/80 font-light leading-relaxed mb-8">
          {t("what.body1")}
        </motion.p>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={6}
          className="font-body text-base md:text-lg text-foreground/70 font-light leading-relaxed mb-10">
          {t("what.body2")}
        </motion.p>

        <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-lg md:text-xl font-light italic text-foreground/80 border-l-2 border-gold/40 pl-6 text-left max-w-lg mx-auto">
          {t("what.quote")}
        </motion.blockquote>
      </div>
    </section>
  );
};

export default WhatIsSection;
