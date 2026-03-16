import SiteNav from "@/components/site/SiteNav";
import { siteMeta } from "@/content/site-content";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <SiteNav />

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
              Contact
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-stone-950 sm:text-6xl">
              Available for product design, frontend architecture and software execution.
            </h1>
            <p className="mt-8 text-lg leading-9 text-stone-600">
              If you are building a new digital product, validating a concept or refining an
              existing software experience, this is the best place to start a conversation.
            </p>
            <p className="mt-6 text-lg leading-9 text-stone-600">
              I am especially interested in projects that combine product ambition, technical
              clarity and strong commercial intent.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-stone-200 bg-white/82 p-8 shadow-sm shadow-stone-950/5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
              Reach out
            </p>
            <a
              href={`mailto:${siteMeta.email}`}
              className="mt-5 block text-2xl font-semibold tracking-tight text-stone-950 transition-colors hover:text-stone-700"
            >
              {siteMeta.email}
            </a>
            <p className="mt-4 text-sm leading-7 text-stone-600">{siteMeta.role}</p>

            <div className="mt-10 flex flex-col gap-4 text-sm font-medium text-stone-700">
              <a href="mailto:hello@paulovitor.dev" className="transition-colors hover:text-stone-950">
                Email
              </a>
              <span className="text-stone-400">LinkedIn</span>
              <span className="text-stone-400">GitHub</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
