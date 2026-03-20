const ResultsSection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary">
    <div className="max-w-2xl mx-auto text-center">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">
        Resultados
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-6 leading-tight">
        Lo que vive el cliente
      </h2>
      <p className="font-body text-base text-foreground/70 font-light mb-12">
        Después de una sesión, muchas personas experimentan:
      </p>
      <div className="gold-line mb-14" />
      <div className="space-y-8 max-w-md mx-auto mb-14">
        {[
          "Calma real (no mental, corporal)",
          "Claridad en decisiones",
          "Sensación de \"volver a sí mismas\"",
          "Liberación de tensión acumulada",
        ].map((item, i) => (
          <p key={i} className="font-display text-xl md:text-2xl font-light text-foreground/85 italic">
            {item}
          </p>
        ))}
      </div>
      <p className="font-body text-sm text-muted-foreground tracking-wide">
        No es inmediato para todos, pero es profundo para quienes están listos.
      </p>
    </div>
  </section>
);

export default ResultsSection;
