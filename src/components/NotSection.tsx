import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const NotSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">{t("not.label")}</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-3xl md:text-4xl font-light text-foreground mb-10 leading-tight">{t("not.title")}</motion.h2>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-12" />

        <div className="space-y-3 mb-12">
          {[t("not.item1"), t("not.item2"), t("not.item3")].map((text, i) => (
            <motion.p key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="font-body text-sm text-muted-foreground tracking-wide"
            >{text}</motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-body text-base md:text-lg text-foreground/80 font-light leading-relaxed max-w-lg mx-auto"
        >
          {t("not.body")}
        </motion.p>
      </div>
    </section>
  );
};

export default NotSection;
