import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

const translations: Record<string, Record<Lang, string>> = {
  // Hero
  "hero.title": { es: "The Sacred Stillness", en: "The Sacred Stillness" },
  "hero.subtitle": { es: "Recalibración profunda del sistema nervioso", en: "Deep nervous system recalibration" },
  "hero.desc1": { es: "Para personas con alta exigencia mental que necesitan claridad, energía estable y descanso real.", en: "For people with high mental demands who need clarity, stable energy, and real rest." },
  "hero.desc2": { es: "Un espacio donde tu cuerpo deja de sostener tensión innecesaria y recupera eficiencia, calma y precisión, incluso en medio del caos diario.", en: "A space where your body stops holding unnecessary tension and recovers efficiency, calm, and precision — even in the middle of daily chaos." },
  "hero.quote": { es: "\"Tu mente nunca para, tu cuerpo siempre tenso… descansar parecía imposible. Sacred Stillness es la pausa que tu cuerpo necesita para recuperar claridad, energía estable y descanso profundo.\"", en: "\"Your mind never stops, your body always tense… resting seemed impossible. Sacred Stillness is the pause your body needs to recover clarity, stable energy, and deep rest.\"" },
  "hero.individual": { es: "Sesión individual: 400€", en: "Individual session: €400" },
  "hero.group": { es: "Sesión grupal: 150€ por persona", en: "Group session: €150/person" },
  "hero.cta": { es: "Asegura tu sesión exclusiva", en: "Secure your exclusive session" },

  // What is
  "what.label": { es: "Qué es", en: "What it is" },
  "what.title": { es: "Qué es Sacred Stillness", en: "What is Sacred Stillness" },
  "what.not1": { es: "No es meditación tradicional.", en: "It's not traditional meditation." },
  "what.not2": { es: "No es coaching.", en: "It's not coaching." },
  "what.not3": { es: "No es terapia psicológica.", en: "It's not psychological therapy." },
  "what.body1": { es: "Es un trabajo directo sobre tu sistema nervioso, diseñado para quienes exigen mucho de sí mismos y buscan resultados inmediatos, visibles y sostenibles.", en: "It's direct work on your nervous system, designed for those who demand a lot from themselves and seek immediate, visible, and sustainable results." },
  "what.body2": { es: "A través de respiración guiada, movimiento suave y activación corporal sutil, tu cuerpo libera tensión acumulada, reorganiza su estado interno y recupera eficiencia, claridad y descanso profundo.", en: "Through guided breathwork, gentle movement, and subtle body activation, your body releases accumulated tension, reorganizes its internal state, and recovers efficiency, clarity, and deep rest." },
  "what.quote": { es: "\"Después de la primera sesión, mi cuerpo respiró por fin. Dormí profundo, me concentré mejor y sentí ligereza otra vez.\"", en: "\"After the first session, my body finally breathed. I slept deeply, focused better, and felt lightness again.\"" },

  // Experience
  "exp.label": { es: "La experiencia", en: "The experience" },
  "exp.title": { es: "Cómo se siente durante la sesión", en: "How it feels during the session" },
  "exp.item1": { es: "Cada respiración relaja mandíbula, hombros y espalda.", en: "Each breath relaxes your jaw, shoulders, and back." },
  "exp.item2": { es: "Movimientos suaves alivian tensión que ni sabías que tenías.", en: "Gentle movements relieve tension you didn't even know you had." },
  "exp.item3": { es: "Tu cuerpo aprende a responder con calma y precisión, incluso en días exigentes.", en: "Your body learns to respond with calm and precision, even on demanding days." },

  // Filter / Who it's for
  "filter.label": { es: "Para quién está diseñado", en: "Who it's for" },
  "filter.title": { es: "Sacred Stillness es para quienes:", en: "Sacred Stillness is for those who:" },
  "filter.item1": { es: "Sostienen alta responsabilidad mental (empresarios, ejecutivos, profesionales creativos).", en: "Carry high mental responsibility (entrepreneurs, executives, creative professionals)." },
  "filter.item2": { es: "Viven bajo presión constante y agenda cargada.", en: "Live under constant pressure and a packed schedule." },
  "filter.item3": { es: "Se sienten saturados incluso cuando \"paran\".", en: "Feel overwhelmed even when they \"stop.\"" },
  "filter.item4": { es: "Buscan claridad y energía sin sacrificar rendimiento.", en: "Seek clarity and energy without sacrificing performance." },
  "filter.quote": { es: "\"Nunca había sentido que descansar realmente pudiera coexistir con rendimiento máximo. Sacred Stillness lo hizo posible.\"", en: "\"I never thought real rest could coexist with peak performance. Sacred Stillness made it possible.\"" },

  // Results
  "results.label": { es: "Efectos y beneficios", en: "Effects & benefits" },
  "results.title": { es: "Después de una sesión notarás", en: "After a session you'll notice" },
  "results.b1.title": { es: "Mente despejada", en: "Clear mind" },
  "results.b1.desc": { es: "Tu mente se aquieta y tus ideas fluyen con claridad.", en: "Your mind quiets and ideas flow with clarity." },
  "results.b2.title": { es: "Respiración eficiente", en: "Efficient breathing" },
  "results.b2.desc": { es: "Tu cuerpo se oxigena mejor y libera tensión acumulada.", en: "Your body oxygenates better and releases accumulated tension." },
  "results.b3.title": { es: "Claridad y rapidez", en: "Clarity & speed" },
  "results.b3.desc": { es: "Tomas decisiones estratégicas con precisión.", en: "You make strategic decisions with precision." },
  "results.b4.title": { es: "Descanso profundo", en: "Deep rest" },
  "results.b4.desc": { es: "Cuerpo y mente descansan de verdad, y el sueño se vuelve reparador.", en: "Body and mind truly rest, and sleep becomes restorative." },
  "results.b5.title": { es: "Energía estable", en: "Stable energy" },
  "results.b5.desc": { es: "Mantienes rendimiento alto todo el día sin agotarte.", en: "You maintain high performance all day without burning out." },
  "results.note": { es: "No es emoción pasajera. Es regulación real del sistema nervioso, comprobable y sostenible.", en: "It's not a fleeting emotion. It's real nervous system regulation — measurable and sustainable." },
  "results.testimonialLabel": { es: "Testimonio premium", en: "Premium testimonial" },
  "results.testimonial": { es: "\"Después de 3 sesiones, duermo profundo, tomo decisiones estratégicas más rápido y mi energía se mantiene estable todo el día. Mi productividad se duplicó y mi mente se siente tranquila, incluso en semanas de alta presión. Fue transformador.\"", en: "\"After 3 sessions, I sleep deeply, make strategic decisions faster, and my energy stays stable all day. My productivity doubled and my mind feels calm, even during high-pressure weeks. It was transformative.\"" },

  // Pricing
  "pricing.label": { es: "🧘‍♀️ Experiencia de la sesión", en: "🧘‍♀️ Session experience" },
  "pricing.title": { es: "Sesiones y precios", en: "Sessions & pricing" },
  "pricing.individual": { es: "Individual", en: "Individual" },
  "pricing.individualDetails": { es: "2 horas de trabajo + 1 hora de llegada/acompañamiento opcional", en: "2 hours of work + 1 hour arrival/optional guidance" },
  "pricing.individualPrice": { es: "400€", en: "€400" },
  "pricing.individualNote": { es: "por sesión", en: "per session" },
  "pricing.group": { es: "Grupal", en: "Group" },
  "pricing.groupDetails": { es: "2 horas de trabajo + 1 hora de llegada/compartir (máx. 10 personas)", en: "2 hours of work + 1 hour arrival/sharing (max. 10 people)" },
  "pricing.groupPrice": { es: "150€", en: "€150" },
  "pricing.groupNote": { es: "por persona", en: "per person" },
  "pricing.frequency": { es: "Frecuencia: 2 veces al mes en Marbella", en: "Frequency: twice a month in Marbella" },
  "pricing.combineTitle": { es: "Durante la sesión combinamos:", en: "During the session we combine:" },
  "pricing.c1": { es: "Respiración guiada enfocada en regulación", en: "Guided breathwork focused on regulation" },
  "pricing.c2": { es: "Movimientos suaves que reducen tensión", en: "Gentle movements that reduce tension" },
  "pricing.c3": { es: "Activación corporal sutil", en: "Subtle body activation" },
  "pricing.c4": { es: "Contacto respetuoso (opcional)", en: "Respectful touch (optional)" },
  "pricing.noGoal": { es: "No hay objetivo que alcanzar. Tu sistema nervioso responde cuando recibe el entorno adecuado.", en: "There's no goal to reach. Your nervous system responds when it receives the right environment." },
  "pricing.personalized": { es: "Cada sesión es personalizada y exclusiva, diseñada para que tu cuerpo recupere precisión y energía máxima.", en: "Each session is personalized and exclusive, designed for your body to recover precision and peak energy." },

  // Not section
  "not.label": { es: "🚫 Lo que no es", en: "🚫 What it's not" },
  "not.title": { es: "Lo que Sacred Stillness no es", en: "What Sacred Stillness is not" },
  "not.item1": { es: "No es terapia psicológica", en: "It's not psychological therapy" },
  "not.item2": { es: "No es trabajo emocional", en: "It's not emotional work" },
  "not.item3": { es: "No es experiencia espiritual guiada", en: "It's not a guided spiritual experience" },
  "not.body": { es: "Es un trabajo fisiológico aplicado al cuerpo y sistema nervioso, pensado para quienes buscan claridad, precisión y descanso real, sin rodeos ni experiencias superficiales.", en: "It's applied physiological work on the body and nervous system, designed for those who seek clarity, precision, and real rest — no detours, no superficial experiences." },

  // About
  "about.label": { es: "Sobre quién te acompaña", en: "About your guide" },
  "about.quote": { es: "\"He vivido estados de tensión extrema y sé lo que tu cuerpo necesita para rendir al máximo y descansar de verdad.\"", en: "\"I've lived through states of extreme tension, and I know what your body needs to perform at its best and truly rest.\"" },

  // Booking / Premium pack
  "booking.label": { es: "🔓 Continuidad y packs premium", en: "🔓 Continuity & premium packs" },
  "booking.title": { es: "Sostén el estado", en: "Sustain the state" },
  "booking.body": { es: "Después de experimentar Sacred Stillness, muchas personas descubren que su cuerpo y mente funcionan con más claridad y eficiencia. Para sostener este estado:", en: "After experiencing Sacred Stillness, many people discover that their body and mind function with greater clarity and efficiency. To sustain this state:" },
  "booking.packLabel": { es: "✨ Pack individual personalizado", en: "✨ Personalized individual pack" },
  "booking.packTitle": { es: "6 sesiones al mes", en: "6 sessions / month" },
  "booking.packDesc": { es: "Trabajo profundo y exclusivo, con seguimiento constante", en: "Deep, exclusive work with constant follow-up" },
  "booking.packPrice": { es: "2.300€", en: "€2,300" },
  "booking.packNote": { es: "al mes", en: "per month" },
  "booking.packLimit": { es: "Plazas limitadas a 6 personas por mes → máxima atención y resultados sostenibles.", en: "Limited to 6 people per month → maximum attention and sustainable results." },

  // Closing
  "closing.label": { es: "✅ Exclusivo, limitado y transformador", en: "✅ Exclusive, limited & transformative" },
  "closing.cta": { es: "Reserva tu espacio limitado ahora", en: "Reserve your limited spot now" },

  // Language switcher
  "lang.es": { es: "ES", en: "ES" },
  "lang.en": { es: "EN", en: "EN" },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
