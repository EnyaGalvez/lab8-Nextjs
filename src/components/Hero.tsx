'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal } from 'lucide-react';

export default function Hero() {
  const techStack = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript'];

  return (
    <section id="inicio" className="min-h-[80vh] flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent-secondary font-mono mb-4 flex items-center justify-center gap-2">
            <Terminal size={18} /> Hola, mundo. Soy
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Enya Ayleen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              Gálvez Hernández
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl text-foreground/80 font-medium mb-6">
            Ing. en Ciencias de la Computación y TI
          </h3>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            /* Apasionada por el desarrollo de software y la creación de experiencias web modernas y accesibles.
            Me encanta aprender nuevas tecnologías y enfrentar desafíos que me hagan crecer como profesional. */
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {techStack.map((tech) => (
            <span key={tech} className="px-4 py-2 glass rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/enya-galvez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors"
          >
            <Code2 size={20} />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
