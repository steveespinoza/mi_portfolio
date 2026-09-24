import Image from "next/image";
import { BriefcaseBusiness, Code2, Download, ExternalLink, Mail, Folder, ArrowRight } from "lucide-react";
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

// Importaciones internas
import heroPhoto from "../hero.jpg";
import { Header } from "@/components/Header";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getDictionary, Locale } from "@/dictionaries";

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

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // 1. Extraemos el idioma de la URL de forma asíncrona (Requisito de Next.js 15+)
  const { lang } = await params;
  
  // 2. Cargamos el diccionario desde el servidor
  const dict = await getDictionary(lang as Locale);

  return (
    <main>
      {/* Pasamos estrictamente la sección "nav" del diccionario al Header */}
      <Header dict={dict.nav} />

      <section className="hero" id="inicio">
        <div className="shell hero-grid">
          
          <div className="hero-copy">
            <p className="eyebrow">{dict.hero.eyebrow}</p>
            <h1>
              {dict.hero.nameFirst}
              <span>{dict.hero.nameLast}</span>
            </h1>
            <h2>{dict.hero.subtitle}</h2>
            <p className="hero-description">
              {dict.hero.description}
            </p>

            <div className="hero-ctas">
              <a className="button button-primary" href="#proyectos">
                <BriefcaseBusiness size={17} /> {dict.hero.ctaProjects}
              </a>
              <a className="button button-secondary" href="/CV_Steve_Espinoza_Avila.pdf" download="CV_Steve_Espinoza_Avila.pdf">
                <Download size={17} /> {dict.hero.ctaResume}
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

          <div className="hero-photo" aria-label={dict.hero.photoAlt}>
            <Image
              className="reference-crop"
              src={heroPhoto}
              alt={dict.hero.photoAlt}
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
              <h2>{dict.tech.title}</h2>
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
                {dict.projects.title}
              </h2>
            </div>

            <a 
              href="#todos-los-proyectos" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              {dict.projects.viewAll} <ArrowRight size={16} />
            </a>
          </div>

          <ProjectCarousel dict={dict.projects} />

          <div className="mt-4 flex justify-center sm:hidden">
            <a 
              href="#todos-los-proyectos" 
              className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              {dict.projects.viewAll} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Contact dict={dict.contact} />

      <a className="skip-next" href="#inicio">
        {dict.footer.skipNext} <ExternalLink size={14} />
      </a>

      <Footer dict={dict.footer} />
      
    </main>
  );
}