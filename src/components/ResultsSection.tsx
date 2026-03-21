import { motion } from "framer-motion";

const benefits = [
  { title: "Clear mind", description: "Your mind quiets and ideas flow with clarity." },
  { title: "Efficient breathing", description: "Your body oxygenates better and releases accumulated tension." },
  { title: "Clarity & speed", description: "You make strategic decisions with precision." },
  { title: "Deep rest", description: "Body and mind truly rest, and sleep becomes restorative." },
  { title: "Stable energy", description: "You maintain high performance all day without burning out." },
];

const ResultsSection = () => (
  <section className="py-24 md:py-32 px-6 overflow-hidden">
    <div className="max-w-3xl mx-auto text-center">
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">⚡ Effects & benefits</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-3xl md:text-5xl font-light text-foreground mb-6 leading-tight">After a session you'll notice</motion.h2>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-14" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14 text-left">
        {benefits.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="border border-border p-6 cursor-default"
          >
            <h3 className="font-display text-lg font-light text-foreground mb-2">{item.title}</h3>
            <p className="font-body text-sm text-foreground/70 font-light">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
        className="font-body text-sm text-muted-foreground tracking-wide mb-14">
        It's not a fleeting emotion. It's real nervous system regulation — measurable and sustainable.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="border border-gold/20 p-8 md:p-12 max-w-xl mx-auto"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">Premium testimonial</p>
        <blockquote className="font-display text-lg md:text-xl font-light italic text-foreground/85 leading-relaxed">
          "After 3 sessions, I sleep deeply, make strategic decisions faster, and my energy stays stable all day. My productivity doubled and my mind feels calm, even during high-pressure weeks. It was transformative."
        </blockquote>
      </motion.div>
    </div>
  </section>
);

export default ResultsSection;
