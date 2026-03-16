import { motion } from "framer-motion";

export default function StackSection({ eyebrow, title, description, groups }) {
  return (
    <section id="stack" className="relative overflow-hidden px-6 py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[20, 40, 60, 80].map((top) => (
          <div
            key={top}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${top}%`,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(94,86,76,0.05) 20%, rgba(94,86,76,0.08) 50%, rgba(94,86,76,0.05) 80%, transparent 100%)",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.article
              key={group.category}
              className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-sm shadow-stone-950/5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    className="cursor-default rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-700"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
