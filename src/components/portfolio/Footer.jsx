export default function Footer({ brand, footer, navigation }) {
  return (
    <footer className="border-t border-stone-200 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-900">
            {brand.name}
          </p>
          <p className="mt-2 text-xs text-stone-500">{footer.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-4 text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-stone-950">
              {item.label}
            </a>
          ))}
        </nav>

        <span className="text-xs text-stone-400">
          (c) {new Date().getFullYear()} {brand.name}
        </span>
      </div>
    </footer>
  );
}
