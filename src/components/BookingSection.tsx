const BookingSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-xl mx-auto text-center">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">
        Proceso de reserva
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6 leading-tight">
        Este espacio es limitado y exclusivo.
      </h2>
      <div className="gold-line mb-14" />
      <div className="space-y-10 mb-16">
        {[
          { step: "01", text: "Solicitas tu sesión" },
          { step: "02", text: "Confirmamos disponibilidad" },
          { step: "03", text: "Recibes indicaciones previas" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="font-display text-3xl text-gold/60 font-light">{item.step}</span>
            <span className="font-body text-base text-foreground/80 font-light">{item.text}</span>
          </div>
        ))}
      </div>
      <a
        href="#reservar"
        className="inline-block border border-gold text-foreground font-body text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold/20 transition-all duration-500"
      >
        Aplicar ahora
      </a>
    </div>
  </section>
);

export default BookingSection;
