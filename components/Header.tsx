"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Moon, Sun } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Theme = "dark" | "light";
const THEME_CHANGE_EVENT = "portfolio-theme-change";

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

function subscribeToTheme(onStoreChange: () => void) {
  const handleThemeChange = () => onStoreChange();
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== "theme" || (event.newValue !== "dark" && event.newValue !== "light")) return;

    document.documentElement.dataset.theme = event.newValue;
    onStoreChange();
  };

  window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    window.removeEventListener("storage", handleStorage);
  };
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

export function Header({ dict }: { dict: Dictionary["nav"] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    let persistedTheme: Theme;

    try {
      const storedTheme = localStorage.getItem("theme");
      persistedTheme = storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    } catch {
      persistedTheme = "dark";
    }

    if (document.documentElement.dataset.theme !== persistedTheme) {
      document.documentElement.dataset.theme = persistedTheme;
      window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    }
  }, [pathname]);

  const NAV_LINKS = [
    { label: dict.home, id: "inicio" },
    { label: dict.tech, id: "tecnologias" },
    { label: dict.projects, id: "proyectos" },
    { label: dict.experience, id: "experiencia" },
    { label: dict.contact, id: "contacto" },
  ];

  const MOBILE_NAV_LINKS = useMemo(
    () => [
      { label: dict.home, id: "inicio" },
      { label: dict.tech, id: "tecnologias" },
      { label: dict.projects, id: "proyectos" },
      { label: dict.contact, id: "contacto" },
    ],
    [dict.contact, dict.home, dict.projects, dict.tech],
  );

  const updateTheme = (nextTheme: Theme) => {
    document.documentElement.dataset.theme = nextTheme;

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // El tema sigue funcionando durante la sesión aunque el almacenamiento no esté disponible.
    }

    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

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
              className={theme === "dark" ? "selected" : ""}
              aria-label={dict.themeDark}
              aria-pressed={theme === "dark"}
              onClick={() => updateTheme("dark")}
            >
              <Moon size={15} />
            </button>
            <button
              className={theme === "light" ? "selected" : ""}
              aria-label={dict.themeLight}
              aria-pressed={theme === "light"}
              onClick={() => updateTheme("light")}
            >
              <Sun size={15} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
