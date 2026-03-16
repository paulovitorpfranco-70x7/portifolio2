export const siteMeta = {
  name: "Paulo Vitor",
  role: "Product-focused frontend designer and builder",
  email: "hello@paulovitor.dev",
};

export const aboutContent = {
  headline: "I shape digital products with a quiet interface language and strong structural thinking.",
  paragraphs: [
    "My work sits between interface design, frontend execution and product architecture. I care about how a surface feels, but also about how it is organized behind the scenes so it can evolve without friction.",
    "This portfolio is intentionally restrained. The home acts like a visual index and the case studies carry the context, the reasoning and the design choices. That balance keeps the work central and the interface calm.",
    "I am especially interested in projects that need clarity, systems thinking and a visual direction that feels precise instead of generic.",
  ],
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Email", href: "mailto:hello@paulovitor.dev" },
  ],
};

export const projectCases = [
  {
    slug: "silabala-plus",
    title: "Silabala+",
    label: "Educational SaaS Platform",
    year: "2026",
    intro:
      "A modular learning platform designed to make educational journeys feel structured, calm and easy to navigate across teachers, students and administrators.",
    challenge:
      "The challenge was balancing content density with emotional clarity. The product needed to feel trustworthy for institutions while staying welcoming for day-to-day learners.",
    outcome:
      "The direction focused on clear content rhythm, modular section behavior and a system flexible enough to support new learning formats without redesigning the full surface.",
    role: ["Product direction", "Interface design", "Frontend architecture"],
    credits: ["Independent concept", "React system study", "Portfolio case adaptation"],
    palette: {
      base: "#69b987",
      soft: "#dcefe3",
      deep: "#2c4d3a",
      accent: "#a9d7ba",
    },
    piece: {
      shape: "rounded-rect",
      x: 19.5,
      y: 41.5,
      width: "clamp(176px, 19vw, 220px)",
      height: "clamp(165px, 18vw, 205px)",
      color: "#69b987",
      hoverColor: "#59aa77",
    },
    sections: [
      {
        title: "Clarifying the first interaction",
        body:
          "The opening experience was designed to explain the system without a long onboarding layer. Navigation, hierarchy and spacing do most of the explanatory work.",
      },
      {
        title: "Building a reusable structure",
        body:
          "Modules were treated as composable blocks so new curriculum views and engagement surfaces could be introduced without breaking the overall rhythm of the product.",
      },
    ],
    panels: [
      {
        title: "Learning overview",
        caption: "A wide composition focused on progression, sections and momentum.",
        variant: "cards",
      },
      {
        title: "Lesson flow",
        caption: "A tighter layout exploring stacked content and guided actions.",
        variant: "grid",
      },
      {
        title: "Progress states",
        caption: "A visual system for completion, focus and next-step cues.",
        variant: "tracks",
      },
    ],
  },
  {
    slug: "datacheck",
    title: "DataCheck",
    label: "Data Validation System",
    year: "2025",
    intro:
      "A monitoring surface for validation pipelines, quality checks and operational confidence across complex data flows.",
    challenge:
      "The experience needed to expose a lot of signal quickly without collapsing into dashboard noise. Users had to understand status, exceptions and action paths almost instantly.",
    outcome:
      "The solution leaned into a cleaner presentation language: grouped states, steady visual anchors and a deliberate use of motion to signal active systems instead of decorative activity.",
    role: ["UX direction", "System mapping", "Design language"],
    credits: ["Concept build", "Monitoring study", "Portfolio narrative"],
    palette: {
      base: "#ffd541",
      soft: "#f8efbe",
      deep: "#4d4317",
      accent: "#f1e18d",
    },
    piece: {
      shape: "circle",
      x: 57,
      y: 25,
      size: "clamp(178px, 20vw, 220px)",
      color: "#ffd541",
      hoverColor: "#f3ca31",
    },
    sections: [
      {
        title: "Reducing monitoring fatigue",
        body:
          "Instead of filling the screen with equal-weight widgets, the interface emphasizes operational priority. Critical states surface first and secondary detail unfolds progressively.",
      },
      {
        title: "Motion as status language",
        body:
          "Movement was used sparingly to communicate system liveness and directionality, helping users read active processes without relying only on color or text.",
      },
    ],
    panels: [
      {
        title: "Pipeline pulse",
        caption: "Circular indicators and nested states suggesting continuous validation.",
        variant: "rings",
      },
      {
        title: "Alerts matrix",
        caption: "A compressed grid showing severity and ownership paths.",
        variant: "grid",
      },
      {
        title: "Live sequence",
        caption: "A running state panel with event tracks and progressive updates.",
        variant: "tracks",
      },
    ],
  },
  {
    slug: "crystal-flow",
    title: "Crystal Flow",
    label: "Workflow Automation",
    year: "2025",
    intro:
      "A workflow builder for business operations where complex branching logic had to remain legible and approachable.",
    challenge:
      "Workflow systems often become visually heavy very quickly. The goal was to keep the product feeling calm while still exposing the logic and depth behind each sequence.",
    outcome:
      "The concept used stronger containers, quieter supporting detail and more room around decision points, so the flow itself became the primary visual story.",
    role: ["Experience design", "Visual system", "Interaction direction"],
    credits: ["Independent exploration", "Workflow UX study", "Frontend concept"],
    palette: {
      base: "#2f2f2f",
      soft: "#dfdfdf",
      deep: "#171717",
      accent: "#737373",
    },
    piece: {
      shape: "rounded-rect",
      x: 80,
      y: 47,
      width: "clamp(188px, 21vw, 232px)",
      height: "clamp(176px, 19vw, 220px)",
      color: "#2f2f2f",
      hoverColor: "#1f1f1f",
    },
    sections: [
      {
        title: "Letting the sequence breathe",
        body:
          "Rather than compressing the full workflow into a dense canvas, the interaction system privileges the active branch and lets adjacent branches fade into a secondary layer.",
      },
      {
        title: "Establishing a control rhythm",
        body:
          "Every control group follows the same pacing: trigger, condition, action, review. That repetition reduces cognitive load even when the underlying logic is complex.",
      },
    ],
    panels: [
      {
        title: "Flowboard",
        caption: "An abstracted arrangement of stacked nodes, lanes and checkpoints.",
        variant: "stack",
      },
      {
        title: "Decision states",
        caption: "Dark surfaces with strong hierarchy and lighter connective detail.",
        variant: "cards",
      },
      {
        title: "Execution path",
        caption: "Directional lines emphasizing progression and branch control.",
        variant: "map",
      },
    ],
  },
  {
    slug: "ai-lab",
    title: "AI Lab",
    label: "Experimental AI Tools",
    year: "2026",
    intro:
      "A concept space for AI-assisted workflows where prompts, generated outputs and human review all needed to coexist clearly.",
    challenge:
      "Emerging AI products tend to swing between sterile utility and visual overload. The question here was how to give the system character while keeping trust and readability intact.",
    outcome:
      "The interface direction treated AI behavior as an evolving layer inside a grounded product shell. The result is more human-scaled, with abstract motion used to imply intelligence without theatrics.",
    role: ["Concept direction", "Visual experiments", "Interaction studies"],
    credits: ["Independent concept", "Prompt UX exploration", "Portfolio adaptation"],
    palette: {
      base: "#5d8dbc",
      soft: "#d7e4f1",
      deep: "#2f4b67",
      accent: "#8fb0d3",
    },
    piece: {
      shape: "half-circle",
      x: 42,
      y: 77,
      size: "clamp(188px, 21vw, 238px)",
      color: "#5d8dbc",
      hoverColor: "#4e7ca8",
    },
    sections: [
      {
        title: "Creating a stable shell",
        body:
          "The product shell was intentionally strict so generated content could vary without making the experience feel unstable or improvised.",
      },
      {
        title: "Using abstract motion carefully",
        body:
          "The motion language suggests active inference and evolving states, but it stays restrained. The interface should still feel like a tool, not a demo reel.",
      },
    ],
    panels: [
      {
        title: "Prompt surface",
        caption: "A broad workspace with layered input, output and context regions.",
        variant: "wave",
      },
      {
        title: "Review stack",
        caption: "Panels for comparison, revision and approval flow.",
        variant: "stack",
      },
      {
        title: "Inference trace",
        caption: "Directional hints and soft signals for background processing.",
        variant: "tracks",
      },
    ],
  },
];

export function getProjectCaseBySlug(slug) {
  return projectCases.find((project) => project.slug === slug);
}
