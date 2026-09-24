// Ubicación: lib/data/projects.ts

export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "i-manager",
    title: "i-Manager",
    badge: "ADMINISTRACIÓN",
    description: "Sistema de gestión para condominios, con módulos de residentes, pagos y reportes.",
    imageUrl: "/projects/vivo.png", // Ruta placeholder: asegúrate de colocar la imagen real en la carpeta /public/projects/
    technologies: ["React", "FastAPI", "PostgreSQL", "AWS"],
  },
  {
    id: "kardex-erp",
    title: "Kardex ERP",
    badge: "LOGISTICA",
    description: "Sistema de control de inventario y kardex para empresas del rubro inmobiliario.",
    imageUrl: "/projects/kardex.png",
    technologies: ["Flask", "Python", "PostgreSQL"],
  },
  {
    id: "jym-asistencia",
    title: "JYM_ASISTENCIA",
    badge: "RR.HH",
    description: "Sistema de control de asistencia para empresas, con reportes y gestión de usuarios.",
    imageUrl: "/projects/asistencia.png",
    technologies: ["React", "FastAPI", "PostgreSQL"],
  }
];