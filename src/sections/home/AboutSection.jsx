import { motion } from "framer-motion";

export default function AboutSection({ about }) {
  return (
    <section id="about" className="px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
            {about.eyebrow}
          </span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-5xl">
            {about.title}
          </h2>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-stone-600 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
        {about.highlights.map((item, index) => (
          <motion.article
            key={item.label}
            className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-sm shadow-stone-950/5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
              {item.label}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
              {item.value}
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
