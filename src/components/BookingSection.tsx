import { motion } from "framer-motion";

const BookingSection = () => (
  <section className="py-24 md:py-32 px-6 overflow-hidden">
    <div className="max-w-xl mx-auto text-center">
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">Proceso de reserva</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-3xl md:text-4xl font-light text-foreground mb-6 leading-tight">Este espacio es limitado y exclusivo.</motion.h2>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="gold-line mb-14" />
      <div className="space-y-10 mb-16">
        {[
          { step: "01", text: "Solicitas tu sesión" },
          { step: "02", text: "Confirmamos disponibilidad" },
          { step: "03", text: "Recibes indicaciones previas" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-6"
          >
            <span className="font-display text-3xl text-gold/60 font-light">{item.step}</span>
            <span className="font-body text-base text-foreground/80 font-light">{item.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.a
        href="#reservar"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        whileHover={{ scale: 1.05, backgroundColor: "hsla(40,50%,62%,0.15)" }}
        whileTap={{ scale: 0.97 }}
        className="inline-block border border-gold text-foreground font-body text-xs tracking-[0.3em] uppercase px-10 py-4 transition-colors duration-500"
      >
        Aplicar ahora
      </motion.a>
    </div>
  </section>
);

export default BookingSection;
