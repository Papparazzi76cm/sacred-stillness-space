import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ClosingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 md:py-44 px-6 bg-foreground overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-10">{t("closing.label")}</motion.p>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-12" />
        <motion.a href="#book" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, backgroundColor: "hsla(40,50%,62%,0.15)" }} whileTap={{ scale: 0.97 }}
          className="inline-block border border-gold text-primary-foreground font-body text-xs tracking-[0.3em] uppercase px-10 py-4 transition-colors duration-500">
          {t("closing.cta")}
        </motion.a>
      </div>
    </section>
  );
};

export default ClosingSection;
