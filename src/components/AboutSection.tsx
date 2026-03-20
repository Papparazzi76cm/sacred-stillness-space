import aboutImg from "@/assets/about-portrait.jpg";

const AboutSection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="aspect-[3/4] overflow-hidden">
        <img src={aboutImg} alt="Acompañante en postura de presencia" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">
          Sobre quién acompaña
        </p>
        <div className="space-y-6 font-body text-base text-foreground/80 font-light leading-relaxed">
          <p>No enseño desde teoría.</p>
          <p>
            He vivido estados de supervivencia, desconexión y exigencia interna.
          </p>
          <p>
            Y también he experimentado lo que ocurre cuando el cuerpo, por fin, se regula.
          </p>
        </div>
        <div className="gold-line !mx-0 my-10" />
        <p className="font-body text-sm text-muted-foreground tracking-wide mb-2">
          Mi trabajo no es hacerte entender.
        </p>
        <p className="font-display text-2xl font-light italic text-foreground">
          Es acompañarte a sentir.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
