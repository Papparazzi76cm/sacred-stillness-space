import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const BookingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">{t("booking.label")}</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-3xl md:text-4xl font-light text-foreground mb-6 leading-tight">{t("booking.title")}</motion.h2>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-10" />
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-base text-foreground/70 font-light leading-relaxed mb-14 max-w-xl mx-auto">
          {t("booking.body")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 40, scale: 0.92 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsla(40,50%,62%,0.15)", transition: { duration: 0.35 } }}
          className="border border-gold/30 p-8 md:p-12 max-w-md mx-auto cursor-default mb-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">{t("booking.packLabel")}</p>
          <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">{t("booking.packTitle")}</h3>
          <p className="font-body text-sm text-foreground/70 font-light mb-6">{t("booking.packDesc")}</p>
          <p className="font-display text-3xl md:text-4xl font-light text-foreground mb-2">{t("booking.packPrice")}</p>
          <p className="font-body text-xs text-muted-foreground">{t("booking.packNote")}</p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-sm text-muted-foreground tracking-wide">
          {t("booking.packLimit")}
        </motion.p>
      </div>
    </section>
  );
};

export default BookingSection;
