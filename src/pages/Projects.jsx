import SiteNav from "@/components/site/SiteNav";
import { Link } from "react-router-dom";
import { projectCases } from "@/content/site-content";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <SiteNav />

        <div className="mt-20 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
            Projects
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-stone-950 sm:text-6xl">
            Selected case studies shaped with a quieter, more editorial product language.
          </h1>
        </div>

        <div className="mt-16 border-t border-stone-200">
          {projectCases.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="grid gap-6 border-b border-stone-200 py-8 transition-colors hover:text-stone-950 md:grid-cols-[1fr_auto]"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                  {project.year}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-stone-500">{project.label}</p>
                <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">
                  {project.intro}
                </p>
              </div>

              <div className="self-center text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                Open
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
