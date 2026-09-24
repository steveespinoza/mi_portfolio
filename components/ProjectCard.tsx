// Ubicación: components/ProjectCard.tsx
import Image from "next/image";
import { Project } from "@/lib/data/projects";
import { Icon } from "@iconify/react";
import reactLogo from "@iconify-icons/logos/react";
import nextjsLogo from "@iconify-icons/logos/nextjs-icon";
import tailwindLogo from "@iconify-icons/logos/tailwindcss-icon";
import pythonLogo from "@iconify-icons/logos/python";
import fastapiLogo from "@iconify-icons/logos/fastapi-icon";
import postgresqlLogo from "@iconify-icons/logos/postgresql";
import awsS3Logo from "@iconify-icons/logos/aws-s3";
import { SiFlask } from "react-icons/si";

interface ProjectCardProps {
  project: Project;
}

// Diccionario exclusivo para los iconos de Iconify
const iconifyMap: Record<string, any> = {
  React: reactLogo,
  "Next.js": nextjsLogo,
  "Tailwind CSS": tailwindLogo,
  Python: pythonLogo,
  FastAPI: fastapiLogo,
  PostgreSQL: postgresqlLogo,
  AWS: awsS3Logo,
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-lg transition-transform duration-160 hover:-translate-y-1 hover:border-blue-500/30 group">
      {/* Contenedor superior para la imagen con proporción controlada y viñeta sutil */}
      <div className="relative w-full h-[200px] sm:h-[220px] bg-[#071222] overflow-hidden border-b border-[var(--border)]">
        <Image
          src={project.imageUrl}
          alt={`Captura de pantalla de ${project.title}`}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" />
      </div>

      {/* Contenedor inferior de información */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between gap-4">
        <div className="flex flex-col gap-2">
          {/* Cabecera con título en negrita y la etiqueta de estado */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-[var(--text)] tracking-tight">
              {project.title}
            </h3>
            <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
              {project.badge}
            </span>
          </div>

          {/* Descripción estructurada con color de texto mutado */}
          <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Fila inferior de tecnologías con flexbox e iconos alineados */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--border)]">
          {project.technologies.map((tech) => {
            const iconifyIcon = iconifyMap[tech];
            
            return (
              <div
                key={tech}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[var(--muted)] bg-[var(--bg-deep)] border border-[var(--border)] rounded-md"
              >
                {/* Lógica segura: Si existe en Iconify se usa <Icon/>, si es Flask se usa el componente directo */}
                {iconifyIcon ? (
                  <Icon icon={iconifyIcon} className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                ) : tech === "Flask" ? (
                  <SiFlask className="w-3.5 h-3.5 flex-shrink-0 text-[var(--text)]" aria-hidden="true" />
                ) : null}
                
                <span>{tech}</span>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}