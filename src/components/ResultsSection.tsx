import { motion } from "framer-motion";

const ResultsSection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary overflow-hidden">
    <div className="max-w-2xl mx-auto text-center">
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">Results</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-3xl md:text-5xl font-light text-foreground mb-6 leading-tight">What clients experience</motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }} className="font-body text-base text-foreground/70 font-light mb-12">
        After a session, many people experience:
      </motion.p>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-14" />
      <div className="space-y-8 max-w-md mx-auto mb-14">
        {[
          "Real calm (not mental — bodily)",
          "Clarity in decision-making",
          "A feeling of \"coming back to themselves\"",
          "Release of accumulated tension",
        ].map((item, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: "easeOut" }}
            className="font-display text-xl md:text-2xl font-light text-foreground/85 italic"
          >
            {item}
          </motion.p>
        ))}
      </div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }}
        className="font-body text-sm text-muted-foreground tracking-wide">
        It's not immediate for everyone, but it's profound for those who are ready.
      </motion.p>
    </div>
  </section>
);

export default ResultsSection;
