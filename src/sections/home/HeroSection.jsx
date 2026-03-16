import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import HeroComposition from "@/components/portfolio/HeroComposition";

export default function HeroSection({ hero }) {
  const { scrollY } = useScroll();
  const compositionY = useTransform(scrollY, [0, 500], [0, 48]);

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-36">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-[#d8b567]/18 blur-3xl" />
        <div className="absolute right-[-6%] top-1/3 h-80 w-80 rounded-full bg-[#2f5c65]/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-stone-600">
            <Sparkles className="h-3.5 w-3.5 text-[#8c5c3e]" />
            {hero.eyebrow}
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-stone-950 sm:text-5xl lg:text-7xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-stone-50 transition-transform duration-200 hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-medium text-stone-700 transition-colors duration-200 hover:border-stone-950 hover:text-stone-950"
            >
              {hero.secondaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 text-sm text-stone-500">{hero.availability}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {hero.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-stone-200/80 bg-white/75 p-4 shadow-sm shadow-stone-950/5"
              >
                <p className="text-xl font-semibold tracking-tight text-stone-950">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          style={{ y: compositionY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="rounded-[2rem] border border-stone-200/80 bg-white/60 p-4 shadow-2xl shadow-stone-950/10 backdrop-blur-sm sm:p-6">
            <HeroComposition pieces={hero.compositionPieces} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
