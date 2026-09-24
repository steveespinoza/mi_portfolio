"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Ir al inicio">
      <span className="brand-mark" aria-hidden="true">
        <span>S</span>E
      </span>
    </a>
  );
}

export function Header({ dict }: { dict: any }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [lightMode, setLightMode] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const NAV_LINKS = [
    { label: dict.home, id: "inicio" },
    { label: dict.tech, id: "tecnologias" },
    { label: dict.projects, id: "proyectos" },
    { label: dict.experience, id: "experiencia" },
    { label: dict.contact, id: "contacto" },
  ];

  const MOBILE_NAV_LINKS = [
    { label: dict.home, id: "inicio" },
    { label: dict.tech, id: "tecnologias" },
    { label: dict.projects, id: "proyectos" },
    { label: dict.contact, id: "contacto" },
  ];

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
  }, [MOBILE_NAV_LINKS]);

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

  const currentSectionLabel = MOBILE_NAV_LINKS.find((link) => link.id === activeSection)?.label ?? dict.home;

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Navegación principal">
          {NAV_LINKS.map((link, index) => (
            <a className={index === 0 && activeSection === "inicio" ? "active" : ""} href={`#${link.id}`} key={link.id}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-section-nav" ref={mobileNavRef}>
          <button
            className="mobile-section-trigger"
            type="button"
            aria-label={`${dict.currentSection}: ${currentSectionLabel}. ${menuOpen ? dict.close : dict.open}`}
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
          {/* Pasamos estrictamente la sección 'nav' del diccionario al Switcher */}
          <LanguageSwitcher dict={dict} />

          <div className="theme-switch" aria-label="Selector de tema">
            <button
              className={!lightMode ? "selected" : ""}
              aria-label={dict.themeDark}
              onClick={() => setLightMode(false)}
            >
              <Moon size={15} />
            </button>
            <button
              className={lightMode ? "selected" : ""}
              aria-label={dict.themeLight}
              onClick={() => setLightMode(true)}
            >
              <Sun size={15} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}