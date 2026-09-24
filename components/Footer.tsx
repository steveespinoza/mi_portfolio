// Ubicación: components/Footer.tsx
"use client";

export function Footer({ dict }: { dict: any }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 border-t border-[var(--border)] bg-[var(--header)] relative z-20">
      <div className="shell flex items-center justify-center">
        <p className="text-[var(--muted)] text-sm text-center">
          © {currentYear} {dict.copyright}
        </p>
      </div>
    </footer>
  );
}