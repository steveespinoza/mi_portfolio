import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = ["es", "en"] as const;
export const defaultLocale = "es";

function getLocale(request: NextRequest): (typeof locales)[number] {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) return defaultLocale;

  try {
    const languages = new Negotiator({
      headers: { "accept-language": acceptLanguage },
    })
      .languages()
      .filter((language) => language !== "*");

    if (languages.length === 0) return defaultLocale;

    return matchLocale(languages, [...locales], defaultLocale) as (typeof locales)[number];
  } catch {
    return defaultLocale;
  }
}

// CAMBIO AQUÍ: Ahora la función se llama "proxy" en lugar de "middleware"
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificamos si la ruta actual ya incluye uno de nuestros idiomas (ej. /es/proyectos)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Si no tiene un idioma en la URL, lo calculamos y redirigimos
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // Retornamos la redirección a la nueva URL
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Ignoramos rutas de API, archivos internos de Next.js y archivos estáticos (.pdf, .jpg, etc.)
    // Esto asegura que tu CV y tus imágenes sigan funcionando sin ser redirigidas.
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|pdf|ico|webp)).*)',
  ],
};
