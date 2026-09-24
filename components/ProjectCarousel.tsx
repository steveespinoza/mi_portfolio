// Ubicación: components/ProjectCarousel.tsx
"use client";

import { useRef } from "react";
import { PROJECTS } from "@/lib/data/projects";
import { ProjectCard, ProjectCombined } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectCarousel({ dict }: { dict: any }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Unimos la base de datos estática con los textos traducidos del diccionario
  const combinedProjects: ProjectCombined[] = PROJECTS.map((p) => ({
    ...p,
    title: dict.items[p.id].title,
    badge: dict.items[p.id].badge,
    description: dict.items[p.id].description,
  }));

  // Duplicamos para el efecto de carrusel continuo
  const displayProjects = [...combinedProjects, ...combinedProjects];

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const scrollAmount = clientWidth / 2; 

      if (direction === "right") {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        if (scrollLeft <= 10) {
          container.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="relative w-full group">
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Desplazar a la izquierda"
        className="absolute left-1 md:left-[-1.25rem] top-[40%] -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-lg text-[var(--muted)] transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:text-blue-500 opacity-100 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-4 lg:gap-6 pb-6 snap-x snap-mandatory 
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {displayProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="snap-start shrink-0 w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Desplazar a la derecha"
        className="absolute right-1 md:right-[-1.25rem] top-[40%] -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-lg text-[var(--muted)] transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:text-blue-500 opacity-100 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>
    </div>
  );
}