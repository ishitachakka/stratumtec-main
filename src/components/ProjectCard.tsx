import { motion } from "framer-motion";

const brandEase = [0.19, 1, 0.22, 1] as const;

interface ProjectCardProps {
  index: string;
  category: string;
  title: string[];
  image: string;
  alt: string;
  reversed?: boolean;
}

const ProjectCard = ({ index, category, title, image, alt, reversed = false }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: brandEase }}
      className="grid grid-cols-12 gap-6 py-[10vh] border-t border-border"
    >
      <div
        className={`col-span-12 md:col-span-7 aspect-[4/5] bg-muted overflow-hidden cursor-pointer ${
          reversed ? "md:col-start-6 md:order-2" : ""
        }`}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: brandEase }}
          src={image}
          alt={alt}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div
        className={`col-span-12 md:col-span-5 flex flex-col justify-end pb-12 ${
          reversed ? "md:order-1" : ""
        }`}
      >
        <span className="font-mono text-xs mb-4 text-primary uppercase tracking-widest">
          {index} / {category}
        </span>
        <h2 className="font-display italic text-fluid-section tracking-tighter leading-none text-foreground">
          {title.map((line, i) => (
            <span key={i}>
              {line}
              {i < title.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
