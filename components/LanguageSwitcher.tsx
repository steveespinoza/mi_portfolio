"use client";

import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitcher({ dict }: { dict: any }) {
  const pathname = usePathname();
  const router = useRouter();

  // Si no hay ruta (estado de carga inicial profundo), no renderizamos nada
  if (!pathname) return null;

  // Extraemos el idioma actual (el primer segmento de la URL, ej: "es" o "en")
  const currentLocale = pathname.split("/")[1] || "es";
  // Definimos el idioma contrario para el botón
  const targetLocale = currentLocale === "es" ? "en" : "es";

  const switchLanguage = () => {
    // Reemplazamos la porción del idioma en la URL
    // Ejemplo: /es/#proyectos -> /en/#proyectos
    const newPath = pathname.replace(`/${currentLocale}`, `/${targetLocale}`);
    
    // Usamos el router de Next.js para una transición instantánea
    router.push(newPath);
  };

  // Determinamos dinámicamente el texto del tooltip usando el diccionario
  const tooltipText = targetLocale === "en" ? dict.switchToEn : dict.switchToEs;

  return (
    // Reutilizamos la clase theme-switch para mantener la coherencia visual del UI
    <div className="theme-switch" aria-label="Selector de idioma">
      <button
        onClick={switchLanguage}
        className="selected font-bold text-xs tracking-wider"
        title={tooltipText}
      >
        {targetLocale.toUpperCase()}
      </button>
    </div>
  );
}