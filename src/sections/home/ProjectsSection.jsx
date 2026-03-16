import { motion } from "framer-motion";
import ProjectCard from "@/components/portfolio/ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
            {projects.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-5xl">
            {projects.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            {projects.description}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.items.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
