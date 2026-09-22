import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steve Alberto Espinoza | Ingeniero de Software",
  description:
    "Portafolio de Steve Alberto Espinoza, Ingeniero en Informática y de Sistemas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
