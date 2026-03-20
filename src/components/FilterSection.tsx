const FilterSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">
        Un espacio exclusivo
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-12 leading-tight">
        Este espacio no es para todo el mundo.
      </h2>
      <div className="gold-line mb-12" />
      <p className="font-display text-xl md:text-2xl font-light italic text-foreground/80 mb-12">
        Es para ti si:
      </p>
      <ul className="space-y-6 text-left max-w-lg mx-auto mb-16">
        {[
          "Vives bajo alta presión o responsabilidad",
          "Tu mente no se detiene, incluso cuando todo parece \"bien\"",
          "Has probado otras cosas, pero sigues sintiendo tensión interna",
          "Sabes que necesitas algo más profundo, no más información",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-4 font-body text-base md:text-lg text-foreground/80 font-light">
            <span className="text-gold mt-1.5 text-xs">◆</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="space-y-2 font-body text-sm text-muted-foreground tracking-wide">
        <p>No es terapia tradicional.</p>
        <p>No es coaching.</p>
        <p>No es espiritualidad superficial.</p>
      </div>
      <p className="font-display text-2xl md:text-3xl font-light italic text-foreground mt-10">
        Es experiencia directa.
      </p>
    </div>
  </section>
);

export default FilterSection;
