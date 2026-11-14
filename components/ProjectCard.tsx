// Ubicación: components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ProjectBaseData } from "@/lib/data/projects";
import { Icon, type IconifyIcon } from "@iconify/react";
import reactLogo from "@iconify-icons/logos/react";
import nextjsLogo from "@iconify-icons/logos/nextjs-icon";
import tailwindLogo from "@iconify-icons/logos/tailwindcss-icon";
import pythonLogo from "@iconify-icons/logos/python";
import fastapiLogo from "@iconify-icons/logos/fastapi-icon";
import postgresqlLogo from "@iconify-icons/logos/postgresql";
import awsS3Logo from "@iconify-icons/logos/aws-s3";
import { SiFlask } from "react-icons/si";
import { ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";

// Creamos una nueva interfaz que combina la base de datos con los textos
export interface ProjectCombined extends ProjectBaseData {
  title: string;
  badge: string;
  description: string;
  href?: string;
  detailLabel?: string;
  codeLabel?: string;
}

interface ProjectCardProps {
  project: ProjectCombined;
  eagerImage?: boolean;
}

const iconifyMap: Record<string, IconifyIcon> = {
  React: reactLogo,
  "Next.js": nextjsLogo,
  "Tailwind CSS": tailwindLogo,
  Python: pythonLogo,
  FastAPI: fastapiLogo,
  PostgreSQL: postgresqlLogo,
  AWS: awsS3Logo,
};

function AttendancePreview() {
  return (
    <div className="absolute inset-0 flex bg-[#eef3f9] text-[#152033]" aria-hidden="true">
      <div className="w-[18%] bg-[#0b172a] p-3 sm:p-4">
        <div className="h-5 w-5 rounded-md bg-blue-500" />
        <div className="mt-6 space-y-2.5">
          {[72, 55, 64, 48].map((width, index) => (
            <div className="flex items-center gap-2" key={width}>
              <span className={`h-2.5 w-2.5 rounded-sm ${index === 0 ? "bg-blue-400" : "bg-slate-600"}`} />
              <span className="h-1.5 rounded-full bg-slate-500/70" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 w-20 rounded-full bg-slate-300" />
            <div className="mt-2 h-3 w-28 rounded-full bg-slate-700" />
          </div>
          <div className="h-7 w-7 rounded-full bg-blue-100 ring-2 ring-white" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["94%", "08:24", "03"].map((value, index) => (
            <div className="rounded-lg bg-white p-2 shadow-sm" key={value}>
              <div className={`h-1.5 w-8 rounded-full ${index === 0 ? "bg-emerald-400" : index === 1 ? "bg-blue-400" : "bg-amber-400"}`} />
              <div className="mt-2 text-[10px] font-black sm:text-xs">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-[1.35fr_.65fr] gap-2">
          <div className="rounded-lg bg-white p-2 shadow-sm">
            <div className="flex h-14 items-end gap-1.5">
              {[38, 64, 48, 78, 58, 86, 70].map((height) => (
                <span className="flex-1 rounded-t-sm bg-blue-400/80" key={height} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1.5 rounded-lg bg-white p-2 shadow-sm">
            {[0, 1, 2].map((item) => (
              <div className="flex items-center gap-1.5" key={item}>
                <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                <span className="h-1.5 flex-1 rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KardexPreview() {
  return (
    <div className="absolute inset-0 flex bg-[#edf4f7] text-[#12212d]" aria-hidden="true">
      <div className="w-[18%] bg-[#0d2530] p-3 sm:p-4">
        <div className="grid h-6 w-6 place-items-center rounded-md bg-emerald-400/20 ring-1 ring-emerald-300/30">
          <span className="h-3 w-3 rounded-sm bg-emerald-400" />
        </div>
        <div className="mt-6 space-y-2.5">
          {[70, 54, 62, 46].map((width, index) => (
            <div className="flex items-center gap-2" key={width}>
              <span className={`h-2.5 w-2.5 rounded-sm ${index === 0 ? "bg-emerald-400" : "bg-slate-600"}`} />
              <span className="h-1.5 rounded-full bg-slate-500/70" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 w-20 rounded-full bg-slate-300" />
            <div className="mt-2 h-3 w-32 rounded-full bg-slate-700" />
          </div>
          <div className="h-7 w-7 rounded-full bg-emerald-100 ring-2 ring-white" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["S/ 184K", "S/ 42K", "328"].map((value, index) => (
            <div className="rounded-lg bg-white p-2 shadow-sm" key={value}>
              <div className={`h-1.5 w-8 rounded-full ${index === 0 ? "bg-emerald-400" : index === 1 ? "bg-blue-400" : "bg-amber-400"}`} />
              <div className="mt-2 text-[9px] font-black sm:text-xs">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-white p-2 shadow-sm">
          {[64, 80, 54, 72].map((width, index) => (
            <div className="grid grid-cols-[1.2fr_.6fr_.5fr] items-center gap-2 border-b border-slate-100 py-1.5 last:border-0" key={width}>
              <span className="h-1.5 rounded-full bg-slate-300" style={{ width: `${width}%` }} />
              <span className="h-1.5 rounded-full bg-slate-200" />
              <span className={`h-4 rounded-full ${index === 2 ? "bg-amber-100" : "bg-emerald-100"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PropertyManagementPreview() {
  return (
    <div className="absolute inset-0 flex bg-[#eef3f8] text-[#172033]" aria-hidden="true">
      <div className="w-[18%] bg-[#102348] p-3 sm:p-4">
        <div className="grid h-6 w-6 place-items-center rounded-md bg-blue-400/20 ring-1 ring-blue-300/30">
          <span className="h-3 w-3 rounded-sm bg-blue-400" />
        </div>
        <div className="mt-6 space-y-2.5">
          {[70, 58, 64, 45, 54].map((width, index) => (
            <div className="flex items-center gap-2" key={width}>
              <span className={`h-2.5 w-2.5 rounded-sm ${index === 0 ? "bg-blue-400" : "bg-slate-600"}`} />
              <span className="h-1.5 rounded-full bg-slate-500/70" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 w-20 rounded-full bg-slate-300" />
            <div className="mt-2 h-3 w-28 rounded-full bg-slate-700" />
          </div>
          <div className="h-7 w-7 rounded-full bg-blue-100 ring-2 ring-white" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[["S/ 12.4K", "bg-blue-400"], ["79%", "bg-emerald-400"], ["04", "bg-amber-400"]].map(([value, color]) => (
            <div className="rounded-lg bg-white p-2 shadow-sm" key={value}>
              <div className={`h-1.5 w-8 rounded-full ${color}`} />
              <div className="mt-2 text-[9px] font-black sm:text-xs">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-white p-2 shadow-sm">
          {[0, 1, 2, 3].map((item) => (
            <div className="grid grid-cols-[1fr_.75fr_.55fr] items-center gap-2 border-b border-slate-100 py-1.5 last:border-0" key={item}>
              <span className="h-1.5 rounded-full bg-slate-300" style={{ width: `${72 - item * 7}%` }} />
              <span className="h-1.5 rounded-full bg-slate-200" />
              <span className={`h-4 rounded-full ${item === 1 ? "bg-amber-100" : "bg-emerald-100"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArchitectureTrackingPreview() {
  const columns = [
    { color: "bg-slate-300", cards: ["Proyecto Lumina"] },
    { color: "bg-[#df765d]", cards: ["Proyecto Apolo", "Proyecto Lumina"] },
    { color: "bg-emerald-400", cards: ["Informe final"] },
  ];

  return (
    <div className="absolute inset-0 flex bg-[#edf0f3] text-[#1f2937]" aria-hidden="true">
      <div className="w-[18%] bg-[#18212e] p-3 sm:p-4">
        <div className="grid h-6 w-6 place-items-center rounded-md bg-[#df765d] text-[7px] font-black text-white">ST</div>
        <div className="mt-6 space-y-2.5">
          {[68, 52, 61, 46].map((width, index) => (
            <div className="flex items-center gap-2" key={width}>
              <span className={`h-2.5 w-2.5 rounded-sm ${index === 0 ? "bg-[#df765d]" : "bg-slate-600"}`} />
              <span className="h-1.5 rounded-full bg-slate-500/70" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 w-24 rounded-full bg-slate-300" />
            <div className="mt-2 h-3 w-32 rounded-full bg-slate-700" />
          </div>
          <div className="h-7 w-7 rounded-full bg-[#fff0eb] ring-2 ring-white" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {columns.map((column, columnIndex) => (
            <div className="rounded-lg bg-slate-200/70 p-1.5" key={columnIndex}>
              <div className="mb-2 flex items-center justify-between">
                <span className={`h-1.5 w-8 rounded-full ${column.color}`} />
                <span className="grid h-4 w-4 place-items-center rounded bg-white text-[7px] font-bold">{column.cards.length}</span>
              </div>
              {column.cards.map((card, cardIndex) => (
                <div className="mb-1.5 rounded-md border-l-2 border-[#df765d] bg-white p-2 shadow-sm last:mb-0" key={`${card}-${cardIndex}`}>
                  <div className="h-1.5 w-9 rounded-full bg-[#fff0eb]" />
                  <div className="mt-2 h-1.5 rounded-full bg-slate-500" style={{ width: `${78 - cardIndex * 12}%` }} />
                  <div className="mt-2 flex items-center justify-between">
                    <span className="h-1 w-8 rounded-full bg-slate-200" />
                    <span className="h-4 w-4 rounded-full bg-[#df765d]" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, eagerImage = false }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-lg transition-all duration-200 hover:border-blue-500/30 hover:shadow-xl">
      <div className="relative w-full h-[200px] sm:h-[220px] bg-[#071222] overflow-hidden border-b border-[var(--border)]">
        {project.id === "i-manager" ? (
          <PropertyManagementPreview />
        ) : project.id === "project-tracker" ? (
          <ArchitectureTrackingPreview />
        ) : project.id === "jym-asistencia" ? (
          <AttendancePreview />
        ) : project.id === "kardex-erp" ? (
          <KardexPreview />
        ) : (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={eagerImage ? "eager" : "lazy"}
          />
        )}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" />
      </div>

      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-[var(--text)] tracking-tight">
              {project.title}
            </h3>
            <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
              {project.badge}
            </span>
          </div>
          <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--border)]">
          {project.technologies.map((tech) => {
            const iconifyIcon = iconifyMap[tech];
            return (
              <div
                key={tech}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[var(--muted)] bg-[var(--bg-deep)] border border-[var(--border)] rounded-md"
              >
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

        <div className="flex flex-wrap items-center gap-2">
          {project.href && project.detailLabel && (
            <Link
              href={project.href}
              className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              aria-label={`${project.detailLabel}: ${project.title}`}
            >
              {project.detailLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
          {project.codeUrl && project.codeLabel && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-deep)] px-3 py-2 text-sm font-semibold text-[var(--text)] transition-colors hover:border-blue-500/50 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              aria-label={`${project.codeLabel}: ${project.title}`}
            >
              <Code2 className="h-4 w-4" aria-hidden="true" />
              {project.codeLabel}
            </a>
          )}
          {!project.href && !project.codeUrl && (
            <span className="text-sm text-[var(--muted)]">—</span>
          )}
        </div>
      </div>
    </article>
  );
}
