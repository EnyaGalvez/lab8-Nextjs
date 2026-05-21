import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
          EG.
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium hover:text-accent-primary transition-colors">
            Inicio
          </Link>
          <Link href="#sobre-mi" className="text-sm font-medium hover:text-accent-primary transition-colors">
            Sobre Mí
          </Link>
          <Link href="#proyectos" className="text-sm font-medium hover:text-accent-primary transition-colors">
            Proyectos
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-accent-primary transition-colors">
            Contacto
          </Link>
        </nav>
        {/* Mobile menu button could go here */}
      </div>
    </header>
  );
}
