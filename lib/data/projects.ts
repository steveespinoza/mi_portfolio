// Ubicación: lib/data/projects.ts
// Renombramos la interfaz para ser más precisos: ahora solo guarda datos base
import type { Dictionary } from "@/dictionaries";

export interface ProjectBaseData {
  id: keyof Dictionary["projects"]["items"];
  imageUrl: string;
  technologies: string[];
}

export const PROJECTS: ProjectBaseData[] = [
  {
    id: "i-manager",
    imageUrl: "/projects/vivo.png",
    technologies: ["React", "FastAPI", "PostgreSQL", "AWS"],
  },
  {
    id: "kardex-erp",
    imageUrl: "/projects/kardex.png",
    technologies: ["Flask", "Python", "PostgreSQL"],
  },
  {
    id: "jym-asistencia",
    imageUrl: "/projects/asistencia.png",
    technologies: ["React", "FastAPI", "PostgreSQL"],
  }
];
