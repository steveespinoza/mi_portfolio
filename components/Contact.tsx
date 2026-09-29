"use client";

import { MessageCircleMore, Send, Quote } from "lucide-react";
import Image from "next/image";
import type { Dictionary } from "@/dictionaries";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log("Formulario prevenido. Listo para integrar lógica de envío (Server Action).");
  };

  return (
    <section className="py-12 md:py-16 border-b border-[var(--border)] overflow-hidden relative" id="contacto">
      <style dangerouslySetInnerHTML={{
        __html: `
        .image-mask {
          -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%);
          mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%);
        }
      `}} />

      <div className="shell relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* COLUMNA 1: Formulario de Contacto */}
          <div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 w-full relative z-20">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 mb-8 md:mb-10">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/5 text-blue-500 shadow-[0_12px_32px_rgba(52,92,242,0.18)]">
                <MessageCircleMore size={25} strokeWidth={1.8} aria-hidden="true" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-[var(--bg)] bg-cyan-400" aria-hidden="true" />
              </div>
              <h2 className="m-0 font-[family-name:var(--font-retro)] text-3xl font-normal tracking-normal text-[var(--text)]">
                {dict.title}
              </h2>
              <p className="text-[var(--muted)] text-sm sm:text-base max-w-md mt-2">
                {dict.subtitle}
              </p>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-lg p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-[var(--text)]">{dict.form.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={dict.form.namePlaceholder}
                    required
                    className="w-full bg-[var(--bg-deep)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--muted)]/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[var(--text)]">{dict.form.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={dict.form.emailPlaceholder}
                    required
                    className="w-full bg-[var(--bg-deep)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--muted)]/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-[var(--text)]">{dict.form.messageLabel}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={dict.form.messagePlaceholder}
                    required
                    className="w-full bg-[var(--bg-deep)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--muted)]/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-y min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit mt-2 inline-flex items-center justify-center gap-2 w-full sm:w-auto lg:self-start min-h-[46px] px-6 py-2.5 rounded-lg font-bold text-sm bg-gradient-to-br from-[#3e67f8] to-[#5a8aff] shadow-[0_12px_32px_rgba(56,91,236,0.24)] hover:-translate-y-1 transition-transform duration-160"
                >
                  <Send size={16} />
                  {dict.form.submit}
                </button>
              </form>
            </div>
          </div>

          {/* COLUMNA 2: Imagen y Frase Encuadrada (Absolute Positioning) */}
          <div className="relative w-full min-h-[450px] lg:h-full flex items-center justify-center pointer-events-none">
            <div className="contact-visual-media absolute inset-0 z-0 overflow-hidden image-mask">
              <Image 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
                alt={dict.quote.imgAlt} 
                fill 
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="contact-visual-tint absolute inset-0 z-10" />
            </div>

            {/* Contenedor centralizado y enmarcado con padding para no chocar con las comillas */}
            <div className="contact-quote-panel relative z-20 w-full max-w-lg px-6 py-8 sm:px-10 sm:py-10 flex flex-col items-center justify-center">
              
              {/* Comilla de apertura: Anclada estrictamente a la esquina superior izquierda */}
              <Quote size={45} className="text-[var(--accent)] rotate-180 opacity-50 absolute top-0 left-0" />
              
              <blockquote className="relative z-10 w-full text-center">
                <p className="text-2xl sm:text-3xl font-medium text-[var(--text)] leading-relaxed tracking-wide drop-shadow-md">
                  {dict.quote.part1} <span className="text-[var(--accent-light)] font-bold">{dict.quote.highlight1}</span> {dict.quote.part2} <span className="text-[var(--accent-light)] font-bold">{dict.quote.highlight2}</span>.
                </p>
              </blockquote>

              {/* Comilla de cierre: Anclada estrictamente a la esquina inferior derecha */}
              <Quote size={45} className="text-[var(--accent)] opacity-50 absolute bottom-0 right-0" />
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}