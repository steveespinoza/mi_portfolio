import "server-only";

// Importaciones dinámicas: Next.js solo empaquetará en memoria el idioma solicitado
const dictionaries = {
  es: () => import("./es.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
};

// Tipo para autocompletado en los parámetros
export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  // Patrón de diseño de fallback: si por alguna razón llega un locale no soportado,
  // devolvemos el diccionario en español como medida de seguridad para evitar caídas.
  const loadDictionary = dictionaries[locale] ?? dictionaries.es;
  return loadDictionary();
};