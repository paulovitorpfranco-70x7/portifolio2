import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function SiteHeader({ brand, navigation, primaryAction }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border transition-all duration-300 ${
          isScrolled
            ? "border-stone-200/80 bg-[#f6efe5]/90 px-4 py-3 shadow-lg shadow-stone-950/5 backdrop-blur-xl"
            : "border-stone-200/40 bg-white/70 px-4 py-4 backdrop-blur-lg"
        }`}
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <a href="#" className="min-w-0">
          <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-stone-900">
            {brand.name}
          </span>
          <span className="hidden text-xs text-stone-500 sm:block">
            {brand.label}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition-colors duration-200 hover:text-stone-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={primaryAction.href}
            className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-stone-50 transition-transform duration-200 hover:-translate-y-0.5"
          >
            {primaryAction.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-700 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-stone-200 bg-[#f6efe5] p-4 shadow-xl shadow-stone-950/10 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-stone-700 transition-colors duration-200 hover:bg-white hover:text-stone-950"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={primaryAction.href}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-950 px-4 py-3 text-sm font-medium text-stone-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {primaryAction.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
