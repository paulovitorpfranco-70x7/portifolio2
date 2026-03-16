import { motion } from "framer-motion";
import { Compass, Layers, Monitor, TrendingUp } from "lucide-react";

const iconMap = {
  Compass,
  Layers,
  Monitor,
  TrendingUp,
};

export default function ProcessSection({ eyebrow, title, description, steps }) {
  return (
    <section id="process" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] ?? Layers;
            const accent = index % 2 === 0 ? "#27535b" : "#8c5c3e";

            return (
              <motion.article
                key={step.title}
                className="relative rounded-[2rem] border border-stone-200 bg-white/85 p-6 shadow-sm shadow-stone-950/5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <span className="absolute right-5 top-5 text-5xl font-semibold text-stone-200">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: `${accent}14`,
                    border: `1px solid ${accent}26`,
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: accent }} />
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-stone-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
