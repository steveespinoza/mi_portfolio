"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  CakeSlice,
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

const NAV_LINKS = ["Inicio", "Sobre mí", "Proyectos", "Experiencia", "Contacto"];

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
            {NAV_LINKS.map((link, index) => (
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
          {NAV_LINKS.map((link) => (
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
              Steve
              <span>Espinoza</span>
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
              alt="Fotografía de Steve Espinoza"
              fill
              priority 
              sizes="(max-width: 900px) 100vw, 50vw"
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

      <a className="skip-next" href="#inicio">
        Primera etapa del portafolio <ExternalLink size={14} />
      </a>
    </main>
  );
}