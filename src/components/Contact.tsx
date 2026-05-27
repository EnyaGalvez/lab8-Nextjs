'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 mb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-2">Contacto</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">¡Hablemos!</h3>
              <p className="text-foreground/70 mb-8">
                Actualmente estoy abierta a nuevas oportunidades. Si tienes una pregunta o simplemente quieres saludar, intentaré responder lo antes posible.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:enya.galvez@ejemplo.com"
                  className="flex items-center gap-4 text-foreground/80 hover:text-accent-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50">Email</p>
                    <p className="font-medium">galvezenya@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/EnyaGalvez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground/80 hover:text-accent-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50">GitHub</p>
                    <p className="font-medium">@EnyaGalvez</p>
                  </div>
                </a>


              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">Correo</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="tu@correo.com"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">Mensaje</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-primary/50 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full bg-foreground text-background font-semibold py-3 rounded-xl hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
