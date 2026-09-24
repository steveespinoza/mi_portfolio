// Ubicación: app/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Mail,
  Moon,
  Sun,
  Folder,
  ArrowRight
} from "lucide-react";
import { Icon } from "@iconify/react";
import reactLogo from "@iconify-icons/logos/react";
import nextjsLogo from "@iconify-icons/logos/nextjs-icon";
import tailwindLogo from "@iconify-icons/logos/tailwindcss-icon";
import pythonLogo from "@iconify-icons/logos/python";
import fastapiLogo from "@iconify-icons/logos/fastapi-icon";
import postgresqlLogo from "@iconify-icons/logos/postgresql";
import awsS3Logo from "@iconify-icons/logos/aws-s3";
import gitLogo from "@iconify-icons/logos/git-icon";
import powerBiLogo from "@iconify-icons/logos/microsoft-power-bi";
import excelLogo from "@iconify-icons/vscode-icons/file-type-excel";
import { SiFlask, SiSqlalchemy } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import heroPhoto from "./hero.jpg";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Contact } from "@/components/Contact"; 
import { Footer } from "@/components/Footer"; // <-- IMPORTACIÓN DEL FOOTER

const NAV_LINKS = ["Inicio", "Tecnologías", "Proyectos", "Experiencia", "Contacto"];

const MOBILE_NAV_LINKS = [
  { label: "Inicio", id: "inicio" },
  { label: "Tecnologías", id: "tecnologias" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Contacto", id: "contacto" },
];

const TECHNOLOGIES = [
  { name: "React", icon: reactLogo },
  { name: "Next.js", icon: nextjsLogo },
  { name: "Tailwind CSS", icon: tailwindLogo },
  { name: "Python", icon: pythonLogo },
  { name: "FastAPI", icon: fastapiLogo },
  { name: "Flask", icon: null },
  { name: "PostgreSQL", icon: postgresqlLogo },
  { name: "SQLAlchemy", icon: null },
  { name: "AWS S3", icon: awsS3Logo },
  { name: "Git", icon: gitLogo },
  { name: "Excel", icon: excelLogo },
  { name: "Power BI", icon: powerBiLogo },
];

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Ir al inicio">
      <span className="brand-mark" aria-hidden="true">
        <span>S</span>E
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [lightMode, setLightMode] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = lightMode ? "light" : "dark";
  }, [lightMode]);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.5;
      const visibleSection = MOBILE_NAV_LINKS.reduce((current, link) => {
        const section = document.getElementById(link.id);
        const top = section ? section.getBoundingClientRect().top + window.scrollY : Infinity;
        return top <= marker ? link.id : current;
      }, "inicio");

      setActiveSection(visibleSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!mobileNavRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const currentSectionLabel = MOBILE_NAV_LINKS.find((link) => link.id === activeSection)?.label ?? "Inicio";

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />

          <nav className="desktop-nav" aria-label="Navegación principal">
            {NAV_LINKS.map((link, index) => (
              <a className={index === 0 ? "active" : ""} href={`#${slugify(link)}`} key={link}>
                {link}
              </a>
            ))}
          </nav>

          <div className="mobile-section-nav" ref={mobileNavRef}>
            <button
              className="mobile-section-trigger"
              type="button"
              aria-label={`Sección actual: ${currentSectionLabel}. ${menuOpen ? "Cerrar" : "Abrir"} navegación`}
              aria-expanded={menuOpen}
              aria-controls="mobile-section-menu"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span>{currentSectionLabel}</span>
              <ChevronDown className={menuOpen ? "rotated" : ""} size={16} aria-hidden="true" />
            </button>
            {menuOpen && (
              <nav id="mobile-section-menu" className="mobile-section-menu" aria-label="Ir a una sección">
                {MOBILE_NAV_LINKS.map((link) => (
                  <a
                    href={`#${link.id}`}
                    key={link.id}
                    aria-current={activeSection === link.id ? "location" : undefined}
                    onClick={() => {
                      setActiveSection(link.id);
                      setMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}
          </div>

          <div className="header-actions">
            <div className="theme-switch" aria-label="Selector de tema">
              <button
                className={!lightMode ? "selected" : ""}
                aria-label="Usar tema oscuro"
                onClick={() => setLightMode(false)}
              >
                <Moon size={15} />
              </button>
              <button
                className={lightMode ? "selected" : ""}
                aria-label="Usar tema claro"
                onClick={() => setLightMode(true)}
              >
                <Sun size={15} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="shell hero-grid">
          
          <div className="hero-copy">
            <p className="eyebrow">Hola, soy</p>
            <h1>
              Steve
              <span>Espinoza</span>
            </h1>
            <h2>Egresado de Ingeniería en Informática y de Sistemas</h2>
            <p className="hero-description">
              Me interesa desarrollar software e integrar sistemas para el entorno empresarial. Me enfoco en
              automatizar procesos y consolidar datos, aplicando análisis, resolución de problemas y buenas prácticas
              de ingeniería para crear soluciones eficientes, seguras y confiables. Aprendo continuamente para generar
              valor con tecnología.
            </p>

            <div className="hero-ctas">
              <a className="button button-primary" href="#proyectos">
                <BriefcaseBusiness size={17} /> Ver proyectos
              </a>
              <a className="button button-secondary" href="/CV_Steve_Espinoza_Avila.pdf" download="CV_Steve_Espinoza_Avila.pdf">
                <Download size={17} /> Descargar CV
              </a>
            </div>

            <div className="social-links" aria-label="Redes y contacto">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="mailto:steve.espinoza@usil.pe" aria-label="Correo electrónico">
                <Mail />
              </a>
            </div>
          </div>

          <div className="hero-photo" aria-label="Fotografía principal del portafolio">
            <Image
              className="reference-crop"
              src={heroPhoto}
              alt="Un cachorro recostado mirando a la cámara"
              fill
              priority 
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="photo-vignette" />
          </div>

        </div>
      </section>

      <section className="technology-section" id="tecnologias">
        <div className="shell">
          <article className="technology-block">
            <div className="section-title">
              <span className="title-icon code-icon"><Code2 size={20} /></span>
              <h2>Tecnologías</h2>
            </div>
            <div className="technology-grid">
              {TECHNOLOGIES.map(({ name, icon }) => (
                <div className="technology-card" key={name}>
                  {icon ? (
                    <Icon icon={icon} className="technology-icon" aria-hidden="true" />
                  ) : name === "Flask" ? (
                    <SiFlask className="technology-icon" style={{ color: "var(--text)" }} aria-hidden="true" />
                  ) : (
                    <SiSqlalchemy className="technology-icon" style={{ color: "#e31d2d" }} aria-hidden="true" />
                  )}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b border-[var(--border)]" id="proyectos">
        <div className="shell">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#345cf2]/10 text-blue-500">
                <Folder size={20} className="fill-current bg-blend-soft-light" />
              </div>
              <h2 className="m-0 font-[family-name:var(--font-retro)] text-2xl font-normal tracking-normal text-[var(--text)]">
                Proyectos
              </h2>
            </div>

            <a 
              href="#todos-los-proyectos" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Ver todos los proyectos <ArrowRight size={16} />
            </a>
          </div>

          <ProjectCarousel />

          <div className="mt-4 flex justify-center sm:hidden">
            <a 
              href="#todos-los-proyectos" 
              className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Ver todos los proyectos <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      <Contact />

      <a className="skip-next" href="#inicio">
        Primera etapa del portafolio <ExternalLink size={14} />
      </a>

      {/* <-- RENDERIZACIÓN DEL FOOTER --> */}
      <Footer />
      
    </main>
  );
}