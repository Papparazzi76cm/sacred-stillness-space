const ClosingSection = () => (
  <section className="py-32 md:py-44 px-6 bg-foreground">
    <div className="max-w-2xl mx-auto text-center">
      <div className="space-y-4 mb-12">
        <p className="font-display text-2xl md:text-4xl font-light text-primary-foreground/90 italic">
          No necesitas hacer más.
        </p>
        <p className="font-display text-2xl md:text-4xl font-light text-primary-foreground italic">
          Necesitas parar.
        </p>
      </div>
      <div className="gold-line mb-12" />
      <p className="font-body text-sm text-primary-foreground/50 tracking-wide mb-2">
        Y en ese espacio…
      </p>
      <p className="font-display text-3xl md:text-5xl font-light text-primary-foreground italic mb-14">
        todo empieza a cambiar.
      </p>
      <a
        href="#reservar"
        className="inline-block border border-gold text-primary-foreground font-body text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold/20 transition-all duration-500"
      >
        Reservar experiencia
      </a>
    </div>
  </section>
);

export default ClosingSection;
