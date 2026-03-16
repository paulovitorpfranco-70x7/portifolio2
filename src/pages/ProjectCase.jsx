import CaseVisualPanel from "@/components/site/CaseVisualPanel";
import SiteNav from "@/components/site/SiteNav";
import { getProjectCaseBySlug } from "@/content/site-content";
import PageNotFound from "@/lib/PageNotFound";
import { useParams } from "react-router-dom";

export default function ProjectCase() {
  const { slug } = useParams();
  const project = getProjectCaseBySlug(slug);

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <main className="min-h-screen bg-[#f8f6f1] px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <SiteNav />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
              {project.year} / {project.label}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-stone-950 sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-stone-600">
              {project.intro}
            </p>
          </div>

          <aside className="rounded-[2rem] border border-stone-200 bg-white/82 p-8 shadow-sm shadow-stone-950/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
              Role
            </p>
            <div className="mt-4 space-y-2">
              {project.role.map((item) => (
                <p key={item} className="text-sm font-medium text-stone-700">
                  {item}
                </p>
              ))}
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
              Outcome
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-600">{project.outcome}</p>
          </aside>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {project.panels.map((panel) => (
            <CaseVisualPanel key={panel.title} panel={panel} palette={project.palette} />
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-stone-200 pt-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
              Challenge
            </p>
            <p className="mt-4 text-base leading-8 text-stone-600">{project.challenge}</p>
          </div>

          <div className="space-y-10">
            {project.sections.map((section) => (
              <section key={section.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                  {section.title}
                </p>
                <p className="mt-4 text-base leading-8 text-stone-600">{section.body}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-stone-200 py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
            Credits
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.credits.map((credit) => (
              <span
                key={credit}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600"
              >
                {credit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
