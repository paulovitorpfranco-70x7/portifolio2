import HeroComposition from "@/components/portfolio/HeroComposition";
import { abstractLandingPieces } from "@/content/abstract-landing";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f4ef]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-0 h-80 w-80 rounded-full bg-[#ece6da] blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-10%] h-96 w-96 rounded-full bg-[#efeadf] blur-3xl" />
      </div>

      <Link
        to="/about"
        className="absolute left-6 top-6 z-10 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-stone-500 transition-colors hover:text-stone-950"
      >
        Paulo Vitor
      </Link>

      <div className="absolute bottom-6 right-6 z-10 flex gap-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-stone-500">
        <Link to="/projects" className="transition-colors hover:text-stone-950">
          Projects
        </Link>
        <Link to="/about" className="transition-colors hover:text-stone-950">
          About
        </Link>
        <Link to="/contact" className="transition-colors hover:text-stone-950">
          Contact
        </Link>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-start justify-center px-4 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <HeroComposition pieces={abstractLandingPieces} />
      </div>
    </main>
  );
}
