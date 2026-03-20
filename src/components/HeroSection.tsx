import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Espacio sereno con luz natural" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-primary-foreground mb-8 leading-tight">
        The Sacred Stillness
      </h1>
      <div className="gold-line mb-8" />
      <p className="font-display text-xl md:text-2xl font-light text-primary-foreground/90 italic leading-relaxed mb-4">
        Donde tu sistema nervioso se regula,
        <br />y el ruido interno desaparece.
      </p>
      <p className="font-body text-sm md:text-base text-primary-foreground/70 tracking-widest uppercase mt-10 mb-8 max-w-md mx-auto">
        Para personas que sostienen mucho…
        <br />y necesitan un espacio donde, por fin, soltar.
      </p>
      <a
        href="#reservar"
        className="inline-block border border-gold text-primary-foreground font-body text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold/20 transition-all duration-500"
      >
        Aplicar / Reservar experiencia
      </a>
    </div>
  </section>
);

export default HeroSection;
