import { motion } from "framer-motion";
import heroImage from "@/assets/hero.jpg";

const brandEase = [0.19, 1, 0.22, 1] as const;

const Hero = () => {
  return (
    <section className="relative h-screen grid grid-cols-12 gap-6 px-6 md:px-12 pt-16">
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 0.8, ease: brandEase }}
        className="col-span-12 md:col-span-8 relative overflow-hidden"
      >
        <img
          src={heroImage}
          alt="Flagship architectural project — brutalist concrete structure"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: brandEase }}
        className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-end pb-12 md:pb-24 -mt-24 md:mt-0"
      >
        <h1 className="font-display italic text-fluid-hero tracking-tighter leading-none text-foreground">
          Visualizing<br />the unbuilt.
        </h1>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-8">
          Est. 2024 — 148 Projects Delivered — 0.01mm Precision
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
