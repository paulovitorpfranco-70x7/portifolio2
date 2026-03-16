import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4eee5] px-6">
      <div className="w-full max-w-xl rounded-[2rem] border border-stone-200 bg-white/90 p-10 text-center shadow-xl shadow-stone-950/5">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
          This route is not part of the portfolio.
        </h1>
        <p className="mt-4 text-base leading-8 text-stone-600">
          The path <span className="font-medium text-stone-900">{location.pathname}</span> does
          not exist in the current public experience.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
