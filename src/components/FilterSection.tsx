import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const FilterSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}
          className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">{t("filter.label")}</motion.p>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={1}
          className="font-display text-3xl md:text-5xl font-light text-foreground mb-6 leading-tight">{t("filter.title")}</motion.h2>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="gold-line mb-12" />
        <ul className="space-y-6 text-left max-w-lg mx-auto mb-16">
          {[t("filter.item1"), t("filter.item2"), t("filter.item3"), t("filter.item4")].map((item, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: "easeOut" }}
              className="flex items-start gap-4 font-body text-base md:text-lg text-foreground/80 font-light">
              <span className="text-gold mt-1.5 text-xs">◆</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-lg md:text-xl font-light italic text-foreground/80 border-l-2 border-gold/40 pl-6 text-left max-w-lg mx-auto">
          {t("filter.quote")}
        </motion.blockquote>
      </div>
    </section>
  );
};

export default FilterSection;
