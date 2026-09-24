// Ubicación: components/Contact.tsx
"use client";

import { Mail, Send, Quote } from "lucide-react";
import Image from "next/image";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log("Formulario prevenido. Listo para integrar lógica de envío.");
  };

  return (
    <section className="py-12 md:py-16 border-b border-[var(--border)] overflow-hidden relative" id="contacto">
      {/* Estilos inyectados para las animaciones dinámicas del viento, paisaje y MÁSCARA */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slowPan {
          0% { transform: scale(1.05) translate(0, 0); }
          50% { transform: scale(1.1) translate(-1.5%, 1.5%); }
          100% { transform: scale(1.05) translate(0, 0); }
        }
        @keyframes windFlow {
          0% { transform: translateX(-150%) skewX(-15deg); opacity: 0; }
          20% { opacity: 0.15; }
          80% { opacity: 0.15; }
          100% { transform: translateX(250%) skewX(-15deg); opacity: 0; }
        }
        .animate-slow-pan {
          animation: slowPan 35s ease-in-out infinite alternate;
        }
        .animate-wind {
          animation: windFlow 8s linear infinite;
        }
        .animate-wind-delayed {
          animation: windFlow 12s linear infinite;
          animation-delay: 4s;
        }
        /* MÁSCARA DE DESVANECIMIENTO: Hace que los bordes del contenedor sean 100% transparentes */
        .image-mask {
          -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%);
          mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%);
        }
      `}} />

      <div className="shell relative z-10">
        {/* Layout en Grid: 1 columna en móvil, 2 columnas en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* COLUMNA 1: Formulario de Contacto */}
          <div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 w-full relative z-20">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 mb-8 md:mb-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#345cf2]/10 text-blue-500">
                <Mail size={24} className="fill-current bg-blend-soft-light" aria-hidden="true" />
              </div>
              <h2 className="m-0 font-[family-name:var(--font-retro)] text-3xl font-normal tracking-normal text-[var(--text)]">
                Contacto
              </h2>
              <p className="text-[var(--muted)] text-sm sm:text-base max-w-md mt-2">
                ¿Tienes un proyecto en mente o quieres conocer más sobre mi trabajo? ¡Hablemos!
              </p>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-lg p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-[var(--text)]">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    required
                    className="w-full bg-[var(--bg-deep)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--muted)]/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[var(--text)]">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tucorreo@ejemplo.com"
                    required
                    className="w-full bg-[var(--bg-deep)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--muted)]/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-[var(--text)]">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                    className="w-full bg-[var(--bg-deep)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--muted)]/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-y min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 w-full sm:w-auto lg:self-start min-h-[46px] px-6 py-2.5 rounded-lg text-white font-bold text-sm bg-gradient-to-br from-[#3e67f8] to-[#5a8aff] shadow-[0_12px_32px_rgba(56,91,236,0.24)] hover:-translate-y-1 transition-transform duration-160"
                >
                  <Send size={16} />
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          {/* COLUMNA 2: Imagen Dinámica y Versículo (Fundido con Máscara) */}
          <div className="relative w-full min-h-[450px] lg:h-full flex items-center justify-center pointer-events-none">
            
            {/* Contenedor enmascarado: Corta los bordes rectos y deja ver el fondo nativo de la página */}
            <div className="absolute inset-0 z-0 overflow-hidden image-mask opacity-80 dark:opacity-60 transition-opacity duration-300">
              
              {/* Imagen de fondo con efecto de paneo (Machu Picchu) */}
              <Image 
                src="https://images.unsplash.com/photo-1509216242873-7786f446f465?q=80&w=1200&auto=format&fit=crop" 
                alt="Ruinas de Machu Picchu entre la niebla" 
                fill 
                className="object-cover object-center animate-slow-pan"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Efectos de Viento (Franjas translúcidas que reaccionan al tema actual) */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-[var(--text)]/20 to-transparent animate-wind blur-xl"></div>
                <div className="absolute top-2/3 left-0 w-full h-48 bg-gradient-to-r from-transparent via-[var(--text)]/15 to-transparent animate-wind-delayed blur-2xl"></div>
              </div>

            </div>

            {/* Contenedor del Texto (Flotando sobre la imagen difuminada) */}
            <div className="relative z-20 p-4 sm:p-6 lg:p-8 w-full max-w-lg flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
              <Quote size={40} className="text-[var(--accent)] mb-2 rotate-180 opacity-80" />
              
              <blockquote className="space-y-4">
                <p className="text-2xl sm:text-3xl font-medium text-[var(--text)] leading-relaxed tracking-wide drop-shadow-md">
                  "Una casa se edifica con <span className="text-[var(--accent-light)] font-bold">sabiduría</span> y se fortalece por medio del <span className="text-[var(--accent-light)] font-bold">buen juicio</span>."
                </p>
                <footer className="flex items-center justify-center lg:justify-start gap-3 text-[var(--muted)] font-bold text-sm sm:text-base tracking-widest uppercase mt-4">
                  <span className="w-10 h-[2px] bg-[var(--muted)] opacity-60"></span>
                  Proverbios 24:3
                </footer>
              </blockquote>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}