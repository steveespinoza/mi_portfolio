// Ubicación: lib/data/projects.ts
// Renombramos la interfaz para ser más precisos: ahora solo guarda datos base
import type { Dictionary } from "@/dictionaries";

export interface ProjectBaseData {
  id: keyof Dictionary["projects"]["items"];
  imageUrl: string;
  technologies: string[];
  caseStudySlug?: string;
  codeUrl?: string;
  releaseUrl?: string;
}

export const PROJECTS: ProjectBaseData[] = [
  {
    id: "i-manager",
    imageUrl: "/projects/vivo.png",
    technologies: ["React", "FastAPI", "PostgreSQL", "AWS"],
    caseStudySlug: "gestion-inmobiliaria",
    codeUrl: "https://github.com/jymcode/JYM_VIVO",
  },
  {
    id: "kardex-erp",
    imageUrl: "/projects/kardex.png",
    technologies: ["React", "Flask", "PostgreSQL"],
    caseStudySlug: "kardex-inventario",
    codeUrl: "https://github.com/jymcode/JYM_KARDEX",
  },
  {
    id: "gestion-de-inventario",
    imageUrl: "/projects/gestion-de-inventario.png",
    technologies: ["React", "Flask", "PostgreSQL"],
    codeUrl: "https://github.com/steveespinoza/GESTION-DE-INVENTARIO",
    releaseUrl: "https://github.com/steveespinoza/GESTION-DE-INVENTARIO/releases/tag/v0.2.0",
  },
  {
    id: "jym-asistencia",
    imageUrl: "/projects/asistencia.png",
    technologies: ["React", "Flask", "PostgreSQL", "AWS"],
    caseStudySlug: "control-asistencia",
    codeUrl: "https://github.com/jymcode/JYM_ASISTENCIA",
  },
  {
    id: "project-tracker",
    imageUrl: "/projects/seguimiento.png",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "AWS"],
    caseStudySlug: "seguimiento-proyectos",
    codeUrl: "https://github.com/jymcode/JYM_ToDo",
  }
];
