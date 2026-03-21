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
        className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">🧬 What it is</motion.p>
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
        className="font-display text-3xl md:text-5xl font-light text-foreground mb-10 leading-tight">What is Sacred Stillness</motion.h2>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-12" />

      <div className="space-y-2 mb-10">
        {[
          "It's not traditional meditation.",
          "It's not coaching.",
          "It's not psychological therapy.",
        ].map((text, i) => (
          <motion.p key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2 + i}
            className="font-body text-sm text-muted-foreground tracking-wide">{text}</motion.p>
        ))}
      </div>

      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
        className="font-body text-base md:text-lg text-foreground/80 font-light leading-relaxed mb-8">
        It's direct work on your nervous system, designed for those who demand a lot from themselves and seek immediate, visible, and sustainable results.
      </motion.p>

      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={6}
        className="font-body text-base md:text-lg text-foreground/70 font-light leading-relaxed mb-10">
        Through guided breathwork, gentle movement, and subtle body activation, your body releases accumulated tension, reorganizes its internal state, and recovers efficiency, clarity, and deep rest.
      </motion.p>

      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-display text-lg md:text-xl font-light italic text-foreground/80 border-l-2 border-gold/40 pl-6 text-left max-w-lg mx-auto"
      >
        "After the first session, my body finally breathed. I slept deeply, focused better, and felt lightness again."
      </motion.blockquote>
    </div>
  </section>
);

export default WhatIsSection;
