import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = ["es", "en"];
export const defaultLocale = "es";

function getLocale(request: NextRequest): string | undefined {
  // Convertimos los headers de la solicitud al formato que espera Negotiator
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Extraemos los idiomas preferidos por el navegador del usuario
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // Comparamos los idiomas del usuario con los que soportamos
  return matchLocale(languages, locales, defaultLocale);
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