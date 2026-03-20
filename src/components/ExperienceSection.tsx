import { motion } from "framer-motion";

const ExperienceSection = () => (
  <section className="py-24 md:py-32 px-6 overflow-hidden">
    <div className="max-w-2xl mx-auto text-center">
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">La experiencia</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-3xl md:text-5xl font-light text-foreground mb-12 leading-tight">Qué pasa dentro</motion.h2>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-14" />
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }} className="font-display text-lg md:text-xl font-light italic text-foreground/80 mb-12">Durante la experiencia:</motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg mx-auto mb-14">
        {[
          "El cuerpo baja el ritmo",
          "La respiración se vuelve profunda y natural",
          "La mente se desacelera",
          "Las emociones se reorganizan",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            className="text-center py-6 border-b border-border cursor-default"
          >
            <p className="font-body text-base text-foreground/80 font-light">{item}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}>
        <p className="font-body text-sm text-muted-foreground tracking-wide mb-2">No necesitas entenderlo.</p>
        <p className="font-display text-2xl font-light italic text-foreground">Tu cuerpo sabe hacerlo.</p>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
