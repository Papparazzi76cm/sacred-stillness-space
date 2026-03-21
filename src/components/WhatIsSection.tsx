import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const WhatIsSection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary overflow-hidden">
    <div className="max-w-2xl mx-auto text-center">
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
        className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">What it is</motion.p>
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
        className="font-display text-3xl md:text-5xl font-light text-foreground mb-10 leading-tight">Sacred Stillness</motion.h2>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-12" />
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
        className="font-body text-base md:text-lg text-foreground/80 font-light leading-relaxed mb-8">
        Sacred Stillness is a space designed for your nervous system to exit the state of constant alertness…
      </motion.p>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
        className="font-display text-xl md:text-2xl font-light italic text-foreground/90 mb-10">and enter deep regulation.</motion.p>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
        className="font-body text-base md:text-lg text-foreground/70 font-light leading-relaxed">
        Through presence, somatic work, and energy, your body begins to do something it may have forgotten:
      </motion.p>
      <motion.p initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-2xl md:text-3xl font-light italic text-foreground mt-8">feel safe.</motion.p>
    </div>
  </section>
);

export default WhatIsSection;
