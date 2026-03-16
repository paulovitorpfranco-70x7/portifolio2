// Replace placeholder links and contact details before publishing.
export const portfolioContent = {
  brand: {
    name: "Paulo Vitor",
    label: "Frontend engineer and product-focused architect",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "React, Tailwind and Supabase",
    title: "Interfaces that feel sharp, trustworthy and fast from the first scroll.",
    description:
      "I design and build portfolio-grade product surfaces with clear structure, strong visual rhythm and an architecture that stays easy to evolve.",
    availability: "Available for freelance builds, landing pages and product UI work.",
    primaryCta: {
      label: "Start a conversation",
      href: "#contact",
    },
    secondaryCta: {
      label: "View selected work",
      href: "#projects",
    },
    metrics: [
      { value: "Fast", label: "Static-first rendering for the public experience" },
      { value: "Clean", label: "Content, UI and services split by responsibility" },
      { value: "Ready", label: "Supabase reserved for real backend needs only" },
    ],
    compositionPieces: [
      {
        id: "portfolio",
        name: "Portfolio",
        description: "Conversion-minded landing surface",
        shape: "rounded-rect",
        x: 14,
        y: 34,
        width: 220,
        height: 190,
        color: "#27535B",
        hoverColor: "#1E444A",
        delay: 0.2,
      },
      {
        id: "system",
        name: "System",
        description: "Content layer and reusable sections",
        shape: "circle",
        x: 51,
        y: 18,
        size: 210,
        color: "#D9B15B",
        hoverColor: "#C59C43",
        delay: 0.35,
      },
      {
        id: "supabase",
        name: "Supabase",
        description: "Light backend for forms and published data",
        shape: "rounded-rect",
        x: 73,
        y: 38,
        width: 220,
        height: 210,
        color: "#1D1D1D",
        hoverColor: "#0F0F0F",
        delay: 0.5,
      },
      {
        id: "motion",
        name: "Motion",
        description: "Selective animation with purpose",
        shape: "half-circle",
        x: 27,
        y: 67,
        size: 220,
        color: "#8C5C3E",
        hoverColor: "#764A2E",
        delay: 0.65,
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "A portfolio should explain trust quickly, not just look polished.",
    paragraphs: [
      "This project is being shaped as a fast public-facing landing page with a clear content layer, focused sections and a backend that stays optional for the initial render.",
      "The goal is to keep the first impression lightweight while making room for future contact flows, project publishing and other Supabase-backed features without turning the whole app into a generic dashboard.",
    ],
    highlights: [
      {
        label: "Current focus",
        value: "Performance-first UI",
        description: "The public route should stay useful even when the backend is unavailable.",
      },
      {
        label: "Architecture",
        value: "Static-first + services",
        description: "Content lives locally first, services hydrate only where they add value.",
      },
      {
        label: "Delivery mode",
        value: "Fast iterations",
        description: "Clear sections, local content and limited providers reduce friction while building.",
      },
    ],
  },
  projects: {
    eyebrow: "Selected Work",
    title: "Projects framed around product clarity and delivery discipline.",
    description:
      "Each card below is sourced from a local content layer today and can later be promoted to Supabase-managed content without rewriting the page structure.",
    items: [
      {
        name: "Silabala+",
        category: "SaaS",
        description:
          "A modular education platform focused on content delivery, guided journeys and admin operations.",
        outcome: "Designed to balance strong visual storytelling with a scalable product surface.",
        tags: ["React", "Tailwind", "Supabase"],
        href: "#contact",
        image:
          "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b4fa28affe5a86a6eb21f7/3caa36b3e_generated_c3f0e496.png",
      },
      {
        name: "DataCheck",
        category: "Data",
        description:
          "A monitoring experience for validation pipelines, quality checks and operational visibility.",
        outcome: "Built around clear states, action visibility and confidence under high information density.",
        tags: ["React", "Charts", "Operations"],
        href: "#contact",
        image:
          "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b4fa28affe5a86a6eb21f7/dee92d59f_generated_dd0386f6.png",
      },
      {
        name: "Crystal Flow",
        category: "Product",
        description:
          "A workflow interface for business operations where complex logic needs to remain approachable.",
        outcome: "A good example of how structure and motion can make a technical product feel simpler.",
        tags: ["System Design", "UX", "Automation"],
        href: "#contact",
        image:
          "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b4fa28affe5a86a6eb21f7/4e2ef2a9d_generated_5498f56e.png",
      },
      {
        name: "AI Lab",
        category: "AI",
        description:
          "An exploratory product surface for AI-assisted workflows, document handling and smart actions.",
        outcome: "Shaped to keep emerging capabilities understandable without visual clutter.",
        tags: ["AI UX", "Prompt Systems", "FastAPI"],
        href: "#contact",
        image:
          "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b4fa28affe5a86a6eb21f7/1f2b7271f_generated_0e032223.png",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How I move from problem framing to a shippable interface.",
    description:
      "The first phase favors architecture that clarifies responsibilities early and keeps implementation momentum high.",
    steps: [
      {
        icon: "Compass",
        title: "Frame the brief",
        description:
          "Clarify audience, constraints, content hierarchy and the action the page needs to drive.",
      },
      {
        icon: "Layers",
        title: "Shape the system",
        description:
          "Split content, sections and services so the UI remains easy to reason about and extend.",
      },
      {
        icon: "Monitor",
        title: "Design the surface",
        description:
          "Build a visual language with intent instead of generic blocks and filler animations.",
      },
      {
        icon: "TrendingUp",
        title: "Prepare growth",
        description:
          "Add backend hooks only where needed so future features land without bloating the public route.",
      },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Tools selected for speed, clarity and maintainability.",
    description:
      "The point is not to stack more libraries. It is to keep the surface focused and only pay complexity where there is product value.",
    groups: [
      {
        category: "Frontend Core",
        items: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      },
      {
        category: "Backend Edge",
        items: ["Supabase", "Postgres", "Storage", "Edge Functions"],
      },
      {
        category: "Content Strategy",
        items: ["Local content modules", "Fallback rendering", "Section composition"],
      },
      {
        category: "Quality",
        items: ["ESLint", "Type-aware JS config", "Build validation", "Progressive cleanup"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Need a portfolio, landing page or product surface that feels deliberate?",
    description:
      "This project will soon use Supabase to persist contact leads. For phase one, the structure is already prepared and the public experience stays lightweight.",
    email: "hello@paulovitor.dev",
    location: "Based in Brazil, working remotely.",
    primaryActionLabel: "Send an email",
    socials: [
      { icon: "Github", label: "GitHub", href: "#" },
      { icon: "Linkedin", label: "LinkedIn", href: "#" },
    ],
  },
  footer: {
    tagline: "Built with React, Tailwind and a performance-first mindset.",
  },
};
