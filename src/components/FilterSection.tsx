import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const FilterSection = () => (
  <section className="py-24 md:py-32 px-6 overflow-hidden">
    <div className="max-w-2xl mx-auto text-center">
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp} custom={0}
        className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8"
      >
        An exclusive space
      </motion.p>
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp} custom={1}
        className="font-display text-3xl md:text-5xl font-light text-foreground mb-12 leading-tight"
      >
        This space is not for everyone.
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        className="gold-line mb-12"
      />
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp} custom={2}
        className="font-display text-xl md:text-2xl font-light italic text-foreground/80 mb-12"
      >
        It's for you if:
      </motion.p>
      <ul className="space-y-6 text-left max-w-lg mx-auto mb-16">
        {[
          "You live under high pressure or responsibility",
          "Your mind won't stop, even when everything seems \"fine\"",
          "You've tried other things, but still feel inner tension",
          "You know you need something deeper, not more information",
        ].map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: "easeOut" }}
            className="flex items-start gap-4 font-body text-base md:text-lg text-foreground/80 font-light"
          >
            <span className="text-gold mt-1.5 text-xs">◆</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={4}
        className="space-y-2 font-body text-sm text-muted-foreground tracking-wide"
      >
        <p>It's not traditional therapy.</p>
        <p>It's not coaching.</p>
        <p>It's not superficial spirituality.</p>
      </motion.div>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={5}
        className="font-display text-2xl md:text-3xl font-light italic text-foreground mt-10"
      >
        It's direct experience.
      </motion.p>
    </div>
  </section>
);

export default FilterSection;
