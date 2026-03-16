import { useState } from "react";
import { Link } from "react-router-dom";
import SiteNav from "@/components/site/SiteNav";

const aboutCopy = {
  pt: {
    badge: "Sobre",
    button: "English Version",
    title: "SOU PAULO VITOR, UM ARQUITETO DE SOFTWARE BRASILEIRO CRIANDO PRODUTOS ESCALAVEIS COM IA.",
    paragraphs: [
      "Eu projeto e desenvolvo software com mentalidade de produto: arquitetura em primeiro lugar, execucao com precisao e decisoes guiadas por resultados reais de negocio. Meu objetivo nao e apenas entregar funcionalidades, mas construir sistemas confiaveis, escalaveis e comercialmente viaveis.",
      "Meu trabalho combina engenharia de software, desenvolvimento assistido por IA, automacao e estrategia de produto. Sou especialmente movido pelo desafio de transformar ideias brutas em produtos digitais refinados, da validacao do conceito e estrutura tecnica ate a experiencia do usuario e o potencial de crescimento.",
      "Acredito que grandes produtos de software nascem no encontro entre clareza, arquitetura e utilidade. Por isso, foco em sistemas limpos, bases sustentaveis e solucoes que resolvem problemas reais, em vez de apenas parecerem impressionantes.",
      "Hoje, estou construindo projetos que conectam tecnologia, inteligencia e oportunidade de mercado, com a ambicao de criar produtos com padrao global a partir do Brasil.",
    ],
    footer: "Me encontre em",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Contato", href: "/contact" },
    ],
  },
  en: {
    badge: "About",
    button: "Versao em Portugues",
    title: "I AM PAULO VITOR, A BRAZILIAN SOFTWARE ARCHITECT BUILDING SCALABLE PRODUCTS WITH AI.",
    paragraphs: [
      "I design and build software with a product mindset: architecture first, precise execution and decisions guided by real business outcomes. My goal is not only to ship features, but to create reliable, scalable and commercially viable systems.",
      "My work combines software engineering, AI-assisted development, automation and product strategy. I am especially driven by the challenge of turning raw ideas into refined digital products, from concept validation and technical structure to user experience and growth potential.",
      "I believe great software products emerge where clarity, architecture and usefulness meet. That is why I focus on clean systems, sustainable foundations and solutions that solve real problems instead of only looking impressive.",
      "Today, I am building projects that connect technology, intelligence and market opportunity, with the ambition of creating globally competitive products from Brazil.",
    ],
    footer: "Find me on",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export default function About() {
  const [language, setLanguage] = useState("pt");
  const copy = aboutCopy[language];

  return (
    <main className="min-h-screen bg-[#f6f4ef] px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <SiteNav />

        <div className="mt-20 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
              {copy.badge}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-stone-950 sm:text-6xl">
              {copy.title}
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setLanguage((current) => (current === "pt" ? "en" : "pt"))}
            className="inline-flex rounded-full border border-stone-300 bg-white/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 transition-colors hover:border-stone-950 hover:text-stone-950"
          >
            {copy.button}
          </button>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-7">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-9 text-stone-600">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm shadow-stone-950/5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
              {copy.footer}
            </p>

            <div className="mt-8 flex flex-col gap-4 text-base font-medium text-stone-700">
              {copy.links.map((link) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="transition-colors hover:text-stone-950"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-stone-950"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
