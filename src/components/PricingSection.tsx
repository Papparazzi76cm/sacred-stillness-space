import { motion } from "framer-motion";

const PricingSection = () => (
  <section id="book" className="py-24 md:py-32 px-6 overflow-hidden">
    <div className="max-w-3xl mx-auto text-center">
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">Format & pricing</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-3xl md:text-5xl font-light text-foreground mb-14 leading-tight">Available spaces</motion.h2>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { title: "Individual experience", subtitle: "1:1", description: "A fully personalized space.", price: "€220", priceNote: "per private session" },
          { title: "Private experience", subtitle: "Small groups", description: "Maximum 6–10 people.", price: "from €120", priceNote: "" },
          { title: "Exclusive immersions", subtitle: "", description: "For deeper processes.", price: "Inquire", priceNote: "" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsla(40,50%,62%,0.15)", transition: { duration: 0.35 } }}
            className="border border-border p-8 md:p-10 flex flex-col items-center text-center cursor-default"
          >
            <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-1">{item.title}</h3>
            {item.subtitle && <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">{item.subtitle}</p>}
            <p className="font-body text-sm text-foreground/70 font-light mb-8 flex-1">{item.description}</p>
            <p className="font-display text-2xl md:text-3xl font-light text-foreground">{item.price}</p>
            {item.priceNote && <p className="font-body text-xs text-muted-foreground mt-1">{item.priceNote}</p>}
          </motion.div>
        ))}
      </div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
        className="font-body text-sm text-muted-foreground tracking-wide mb-10">
        This is a premium, limited space. It's reserved only for those truly seeking deep, effective transformation.
      </motion.p>
      <motion.a
        href="#book"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.05, backgroundColor: "hsla(40,50%,62%,0.15)" }}
        whileTap={{ scale: 0.97 }}
        className="inline-block border border-gold text-foreground font-body text-xs tracking-[0.3em] uppercase px-10 py-4 transition-colors duration-500"
      >
        Apply / Book
      </motion.a>
    </div>
  </section>
);

export default PricingSection;
