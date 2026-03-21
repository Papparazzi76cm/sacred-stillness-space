import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const cards = [
    { title: t("pricing.individual"), details: t("pricing.individualDetails"), price: t("pricing.individualPrice"), note: t("pricing.individualNote") },
    { title: t("pricing.group"), details: t("pricing.groupDetails"), price: t("pricing.groupPrice"), note: t("pricing.groupNote") },
  ];

  const combine = [t("pricing.c1"), t("pricing.c2"), t("pricing.c3"), t("pricing.c4")];

  return (
    <section id="book" className="py-24 md:py-32 px-6 bg-secondary overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">{t("pricing.label")}</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-3xl md:text-5xl font-light text-foreground mb-14 leading-tight">{t("pricing.title")}</motion.h2>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cards.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40, scale: 0.92 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsla(40,50%,62%,0.15)", transition: { duration: 0.35 } }}
              className="border border-border p-8 md:p-10 flex flex-col items-center text-center cursor-default">
              <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-foreground/70 font-light mb-8 flex-1">{item.details}</p>
              <p className="font-display text-3xl md:text-4xl font-light text-foreground">{item.price}</p>
              <p className="font-body text-xs text-muted-foreground mt-1">{item.note}</p>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-10">{t("pricing.frequency")}</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }} className="max-w-md mx-auto text-left mb-16">
          <p className="font-display text-lg font-light italic text-foreground/80 mb-6 text-center">{t("pricing.combineTitle")}</p>
          {combine.map((item, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="flex items-start gap-3 font-body text-sm text-foreground/70 font-light mb-3">
              <span className="text-gold text-xs mt-1">—</span>
              <span>{item}</span>
            </motion.p>
          ))}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-sm text-muted-foreground tracking-wide mb-4">{t("pricing.noGoal")}</motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 }}
          className="font-display text-lg font-light italic text-foreground">{t("pricing.personalized")}</motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
