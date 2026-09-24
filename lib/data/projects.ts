// Ubicación: lib/data/projects.ts
// Renombramos la interfaz para ser más precisos: ahora solo guarda datos base
export interface ProjectBaseData {
  id: string;
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