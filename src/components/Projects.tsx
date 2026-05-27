'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Image as ImageIcon } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Lab 1: Caring for a Normal Pet',
      description: 'Página web estática sobre el cuidado de una mascota, aplicando conceptos básicos de estructura semántica.',
      tech: ['HTML5'],
      repo: 'https://github.com/EnyaGalvez/Lab1SistemasWeb.git',
      demo: null,
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 2,
      title: 'Caring for a Normal Pet 2',
      description: 'Mejora visual de la página de cuidado de mascotas utilizando CSS puro, implementando estilos, colores y diseño responsivo.',
      tech: ['HTML5', 'CSS3'],
      repo: 'https://github.com/EnyaGalvez/LabSistemasWeb2-CSS.git',
      demo: null,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 3,
      title: 'Lab 4: Intro a JavaScript',
      description: 'Introducción a la interactividad web mediante JavaScript, manipulando el DOM y añadiendo lógica del lado del cliente.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      repo: 'https://github.com/EnyaGalvez/LabSistemasWeb4.git',
      demo: null,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 4,
      title: 'Lab 6: Node JS',
      description: 'Desarrollo de un servidor backend básico utilizando Node.js para manejar rutas y peticiones HTTP.',
      tech: ['Node.js', 'Express'],
      repo: 'https://github.com/EnyaGalvez/Lab6Web-NodeJS.git',
      demo: null,
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 5,
      title: 'Lab 7: Express.js y React',
      description: 'Integración de una interfaz de usuario en React con un backend en Express.js, demostrando la comunicación cliente-servidor.',
      tech: ['React', 'Node.js', 'Express'],
      repo: 'https://github.com/EnyaGalvez/Lab7Web-Express-React.git',
      demo: null,
      color: 'from-cyan-400 to-blue-500'
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
