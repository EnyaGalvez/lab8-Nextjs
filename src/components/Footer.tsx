import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-20 text-center text-sm text-foreground/60">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Enya Ayleen Gálvez Hernández. Todos los derechos reservados.</p>
        <p className="mt-2 text-xs">
          {/* Un pequeño toque personal que el profe puede notar */}
          Desarrollado con Next.js y Tailwind CSS para el Laboratorio 8.
        </p>
      </div>
    </footer>
  );
}
