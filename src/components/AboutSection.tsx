import aboutImg from "@/assets/about-portrait.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-secondary overflow-hidden">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div className="aspect-[3/4] overflow-hidden">
          <motion.img
            src={aboutImg}
            alt="Your guide"
            className="w-full h-full object-cover"
            style={{ scale: imgScale, y: imgY }}
          />
        </motion.div>
        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">About your guide</motion.p>
          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-xl md:text-2xl font-light italic text-foreground leading-relaxed"
          >
            "I've lived through states of extreme tension, and I know what your body needs to perform at its best and truly rest."
          </motion.blockquote>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }} className="gold-line !mx-0 my-10" style={{ originX: 0 }} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
