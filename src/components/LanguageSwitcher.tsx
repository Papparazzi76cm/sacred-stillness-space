import { useLanguage, Lang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-1 bg-foreground/80 backdrop-blur-sm border border-border/30 px-1 py-1"
    >
      {(["es", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`font-body text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 transition-all duration-300 ${
            lang === l
              ? "bg-gold/20 text-primary-foreground"
              : "text-primary-foreground/50 hover:text-primary-foreground/80"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </motion.div>
  );
};

export default LanguageSwitcher;
