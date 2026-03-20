import { motion } from "framer-motion";

const ClosingSection = () => (
  <section className="py-32 md:py-44 px-6 bg-foreground overflow-hidden">
    <div className="max-w-2xl mx-auto text-center">
      <div className="space-y-4 mb-12">
        <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl md:text-4xl font-light text-primary-foreground/90 italic">No necesitas hacer más.</motion.p>
        <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl md:text-4xl font-light text-primary-foreground italic">Necesitas parar.</motion.p>
      </div>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="gold-line mb-12" />
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }} className="font-body text-sm text-primary-foreground/50 tracking-wide mb-2">Y en ese espacio…</motion.p>
      <motion.p initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-3xl md:text-5xl font-light text-primary-foreground italic mb-14">todo empieza a cambiar.</motion.p>
      <motion.a
        href="#reservar"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.05, backgroundColor: "hsla(40,50%,62%,0.15)" }}
        whileTap={{ scale: 0.97 }}
        className="inline-block border border-gold text-primary-foreground font-body text-xs tracking-[0.3em] uppercase px-10 py-4 transition-colors duration-500"
      >
        Reservar experiencia
      </motion.a>
    </div>
  </section>
);

export default ClosingSection;
