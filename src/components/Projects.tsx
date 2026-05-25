'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Image as ImageIcon } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Vida Sana - Dashboard Nutricional',
      description: 'Plataforma web para gestión de pacientes y planes nutricionales, desarrollada como proyecto principal del curso.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      repo: 'https://github.com/enya-galvez/vidasana-web',
      demo: 'https://vidasana.vercel.app',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Vida Sana - API Backend',
      description: 'API RESTful para el manejo de datos de usuarios, métricas de salud y autenticación JWT del proyecto Vida Sana.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
      repo: 'https://github.com/enya-galvez/vidasana-api',
      demo: null,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Laboratorio 7 - Todo App en React',
      description: 'Aplicación de lista de tareas interactiva utilizando React Hooks, estado global y persistencia en LocalStorage.',
      tech: ['React', 'JavaScript', 'CSS Modules'],
      repo: 'https://github.com/enya-galvez/lab7-react',
      demo: 'https://lab7-react.vercel.app',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 4,
      title: 'Laboratorio 6 - Pokédex API',
      description: 'Implementación de un servidor proxy en Node.js para consumir la PokeAPI con caché y rate limiting.',
      tech: ['Node.js', 'Express', 'Axios'],
      repo: 'https://github.com/enya-galvez/lab6-api',
      demo: null,
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 5,
      title: 'Laboratorio 5 - Calculadora JS',
      description: 'Calculadora funcional en el navegador con diseño neomorfista utilizando Vanilla JS y manipulación del DOM.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      repo: 'https://github.com/enya-galvez/lab5-calculadora',
      demo: 'https://enya-galvez.github.io/lab5-calculadora',
      color: 'from-red-500 to-rose-600'
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-2">Mis Proyectos</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden flex flex-col hover:border-accent-primary/50 transition-colors group"
              >
                {/* Mocked Screenshot */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <ImageIcon size={48} className="text-white/50" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium text-accent-secondary bg-accent-secondary/10 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-accent-primary transition-colors"
                    >
                      <Code2 size={18} />
                      Repo
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium hover:text-accent-primary transition-colors"
                      >
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
