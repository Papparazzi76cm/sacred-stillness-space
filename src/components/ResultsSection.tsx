import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ResultsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { title: t("results.b1.title"), description: t("results.b1.desc") },
    { title: t("results.b2.title"), description: t("results.b2.desc") },
    { title: t("results.b3.title"), description: t("results.b3.desc") },
    { title: t("results.b4.title"), description: t("results.b4.desc") },
    { title: t("results.b5.title"), description: t("results.b5.desc") },
  ];

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">{t("results.label")}</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-3xl md:text-5xl font-light text-foreground mb-6 leading-tight">{t("results.title")}</motion.h2>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14 text-left">
          {benefits.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="border border-border p-6 cursor-default">
              <h3 className="font-display text-lg font-light text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-foreground/70 font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-sm text-muted-foreground tracking-wide mb-14">{t("results.note")}</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }} className="border border-gold/20 p-8 md:p-12 max-w-xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">{t("results.testimonialLabel")}</p>
          <blockquote className="font-display text-lg md:text-xl font-light italic text-foreground/85 leading-relaxed">
            {t("results.testimonial")}
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
