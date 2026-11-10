// Ubicación: lib/data/projects.ts
// Renombramos la interfaz para ser más precisos: ahora solo guarda datos base
import type { Dictionary } from "@/dictionaries";

export interface ProjectBaseData {
  id: keyof Dictionary["projects"]["items"];
  imageUrl: string;
  technologies: string[];
  caseStudySlug?: string;
}

export const PROJECTS: ProjectBaseData[] = [
  {
    id: "i-manager",
    imageUrl: "/projects/vivo.png",
    technologies: ["React", "FastAPI", "PostgreSQL", "AWS"],
    caseStudySlug: "gestion-inmobiliaria",
  },
  {
    id: "kardex-erp",
    imageUrl: "/projects/kardex.png",
    technologies: ["React", "Flask", "PostgreSQL"],
    caseStudySlug: "kardex-inventario",
  },
  {
    id: "jym-asistencia",
    imageUrl: "/projects/asistencia.png",
    technologies: ["React", "Flask", "PostgreSQL", "AWS"],
    caseStudySlug: "control-asistencia",
  }
];
