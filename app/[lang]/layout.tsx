import type { Metadata } from "next";
import { Exo_2, Racing_Sans_One } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";

// Importamos nuestro sistema de diccionarios
import { getDictionary, Locale } from "@/dictionaries";

const racingSans = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-retro",
  display: "swap",
});

const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const themeInitializer = `
  (() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      const theme = storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

      document.documentElement.dataset.theme = theme;
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

// ¡NUEVO! Función asíncrona para generar SEO dinámico
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  
  // Cargamos el diccionario para el SEO
  const dict = await getDictionary(lang as Locale);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${racingSans.variable} ${exo.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <Script id="theme-initializer" strategy="beforeInteractive">
          {themeInitializer}
        </Script>
      </body>
    </html>
  );
}
