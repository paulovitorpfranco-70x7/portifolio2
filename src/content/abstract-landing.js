import { projectCases } from "@/content/site-content";

export const abstractLandingPieces = projectCases.map((project, index) => ({
  id: project.slug,
  name: project.title,
  description: project.label,
  href: `/projects/${project.slug}`,
  delay: 0.18 + index * 0.12,
  ...project.piece,
}));
