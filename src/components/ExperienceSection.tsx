const ExperienceSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">
        La experiencia
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-12 leading-tight">
        Qué pasa dentro
      </h2>
      <div className="gold-line mb-14" />
      <p className="font-display text-lg md:text-xl font-light italic text-foreground/80 mb-12">
        Durante la experiencia:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg mx-auto mb-14">
        {[
          "El cuerpo baja el ritmo",
          "La respiración se vuelve profunda y natural",
          "La mente se desacelera",
          "Las emociones se reorganizan",
        ].map((item, i) => (
          <div key={i} className="text-center py-6 border-b border-border">
            <p className="font-body text-base text-foreground/80 font-light">{item}</p>
          </div>
        ))}
      </div>
      <p className="font-body text-sm text-muted-foreground tracking-wide mb-2">
        No necesitas entenderlo.
      </p>
      <p className="font-display text-2xl font-light italic text-foreground">
        Tu cuerpo sabe hacerlo.
      </p>
    </div>
  </section>
);

export default ExperienceSection;
