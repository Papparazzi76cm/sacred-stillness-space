const PricingSection = () => (
  <section id="reservar" className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">
        Formato y precios
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-14 leading-tight">
        Espacios disponibles
      </h2>
      <div className="gold-line mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Experiencia individual",
            subtitle: "1:1",
            description: "Un espacio completamente personalizado.",
            price: "220€",
            priceNote: "por sesión privada",
          },
          {
            title: "Experiencia privada",
            subtitle: "Grupos reducidos",
            description: "Máximo 6–10 personas.",
            price: "desde 120€",
            priceNote: "",
          },
          {
            title: "Inmersiones exclusivas",
            subtitle: "",
            description: "Para procesos más profundos.",
            price: "Consultar",
            priceNote: "",
          },
        ].map((item, i) => (
          <div key={i} className="border border-border p-8 md:p-10 flex flex-col items-center text-center">
            <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-1">{item.title}</h3>
            {item.subtitle && (
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">{item.subtitle}</p>
            )}
            <p className="font-body text-sm text-foreground/70 font-light mb-8 flex-1">{item.description}</p>
            <p className="font-display text-2xl md:text-3xl font-light text-foreground">{item.price}</p>
            {item.priceNote && (
              <p className="font-body text-xs text-muted-foreground mt-1">{item.priceNote}</p>
            )}
          </div>
        ))}
      </div>
      <p className="font-body text-sm text-muted-foreground tracking-wide mb-10">
        Este es un espacio premium y limitado. Solo se reserva para quienes realmente buscan una transformación profunda y efectiva.
      </p>
      <a
        href="#reservar"
        className="inline-block border border-gold text-foreground font-body text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold/20 transition-all duration-500"
      >
        Aplicar / Reservar
      </a>
    </div>
  </section>
);

export default PricingSection;
