"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  CakeSlice,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import {
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiLinux,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiTailwindcss,
} from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import heroPhoto from "./hero.jpg";

const links = ["Inicio", "Sobre mí", "Proyectos", "Experiencia", "Contacto"];

const technologies = [
  { name: "React", icon: SiReact, color: "#20d9f5" },
  { name: "Next.js", icon: SiNextdotjs, color: "var(--text)" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#32c7e8" },
  { name: "Python", icon: SiPython, color: "#f5ce45" },
  { name: "FastAPI", icon: SiFastapi, color: "#10b79d" },
  { name: "Flask", icon: SiFlask, color: "var(--text)" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#5c92d1" },
  { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#e31d2d" },
  { name: "AWS S3", icon: Cloud, color: "#f59e0b" },
  { name: "Git", icon: SiGit, color: "#f05236" },
  { name: "Docker", icon: SiDocker, color: "#2aa9f0" },
  { name: "Linux", icon: SiLinux, color: "#f2c94c" },
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Ir al inicio">
      <span className="brand-mark" aria-hidden="true">
        <span>S</span>A
      </span>
      <span className="brand-name">Steve Alberto Espinoza</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = lightMode ? "light" : "dark";
  }, [lightMode]);

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />

          <nav className="desktop-nav" aria-label="Navegación principal">
            {links.map((link, index) => (
              <a className={index === 0 ? "active" : ""} href={`#${slugify(link)}`} key={link}>
                {link}
              </a>
            ))}
          </nav>

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
            <button
              className="menu-button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <nav id="mobile-menu" className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Navegación móvil">
          {links.map((link) => (
            <a href={`#${slugify(link)}`} key={link} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Hola, soy</p>
            <h1>
              Steve Alberto
              <span>Espinoza Avila</span>
            </h1>
            <h2>Ingeniero en Informática y de Sistemas</h2>
            <p className="hero-description">
              Apasionado por la tecnología, el desarrollo de software y la creación de soluciones que generen un
              impacto real. Me gusta aprender, construir y mejorar constantemente.
            </p>

            <div className="hero-ctas">
              <a className="button button-primary" href="#proyectos">
                <BriefcaseBusiness size={17} /> Ver proyectos
              </a>
              <a className="button button-secondary" href="/cv-steve-espinoza.pdf" download>
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
              <a href="mailto:steve@example.com" aria-label="Correo electrónico">
                <Mail />
              </a>
            </div>
          </div>

          <div className="hero-photo" aria-label="Fotografía principal del portafolio">
            <Image
              className="reference-crop"
              src={heroPhoto}
              alt="Cachorro golden retriever"
              fill
              preload
              sizes="(min-width: 900px) 58vw, 100vw"
            />
            <div className="photo-vignette" />
          </div>
        </div>
      </section>

      <section className="profile-section" id="sobre-mi">
        <div className="shell profile-grid">
          <article className="about-block">
            <div className="section-title">
              <span className="title-icon"><UserRound size={19} /></span>
              <h2>Sobre mí</h2>
            </div>
            <p>
              Soy Ingeniero en Informática y de Sistemas, con experiencia en desarrollo de aplicaciones web, tanto en
              el frontend como en el backend. Me enfoco en construir soluciones eficientes, escalables y fáciles de
              mantener.
            </p>

            <div className="facts">
              <div className="fact">
                <CakeSlice />
                <span><strong>26 años</strong><small>Edad</small></span>
              </div>
              <div className="fact">
                <MapPin />
                <span><strong>Perú</strong><small>Ubicación</small></span>
              </div>
              <div className="fact">
                <GraduationCap />
                <span><strong>Ingeniero</strong><small>Titulación</small></span>
              </div>
            </div>
          </article>

          <article className="technology-block" id="tecnologias">
            <div className="section-title">
              <span className="title-icon code-icon"><Code2 size={20} /></span>
              <h2>Tecnologías</h2>
            </div>
            <div className="technology-grid">
              {technologies.map(({ name, icon: Icon, color }) => (
                <div className="technology-card" key={name}>
                  <Icon className="technology-icon" style={{ color }} aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <a className="skip-next" href="#inicio">
        Primera etapa del portafolio <ExternalLink size={14} />
      </a>
    </main>
  );
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}
