import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const isExternal = project.href?.startsWith("http");

  const card = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          animate={{ scale: isHovered ? 1.04 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-stone-950/10 to-transparent" />
        <motion.div
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/90 text-stone-900 shadow-lg shadow-stone-950/10"
          animate={{ opacity: isHovered ? 1 : 0.9, scale: isHovered ? 1 : 0.94 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>

      <div className="flex h-full flex-col p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">
            {project.name}
          </h3>
        </div>

        <p className="mt-4 text-sm leading-7 text-stone-600">{project.description}</p>
        <p className="mt-4 text-sm font-medium leading-7 text-stone-800">
          {project.outcome}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-stone-950">
          <span>Discuss this direction</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-1 origin-left bg-gradient-to-r from-[#27535b] via-[#8c5c3e] to-[#d9b15b]"
        animate={{ scaleX: isHovered ? 1 : 0.18 }}
        transition={{ duration: 0.35 }}
      />
    </>
  );

  const commonProps = {
    className:
      "group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white/90 shadow-sm shadow-stone-950/5",
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] },
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
    whileHover: { y: -6 },
  };

  if (project.href) {
    return (
      <motion.a
        {...commonProps}
        href={project.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {card}
      </motion.a>
    );
  }

  return <motion.article {...commonProps}>{card}</motion.article>;
}
