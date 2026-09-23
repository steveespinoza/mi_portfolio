import type { Metadata } from "next";
import { Exo_2, Racing_Sans_One } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Steve Alberto Espinoza | Ingeniero de Software",
  description:
    "Portafolio de Steve Alberto Espinoza, Ingeniero en Informática y de Sistemas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${racingSans.variable} ${exo.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
