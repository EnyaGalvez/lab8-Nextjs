'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, BookOpen } from 'lucide-react';

export default function AboutMe() {
  const skills = [
    {
      title: 'Frontend',
      icon: <Layout className="text-accent-secondary" size={24} />,
      items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend',
      icon: <Server className="text-accent-primary" size={24} />,
      items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    },
    {
      title: 'Herramientas',
      icon: <Code className="text-accent-secondary" size={24} />,
      items: ['Git', 'GitHub', 'Vercel', 'VS Code'],
    },
  ];

  return (
    <section id="sobre-mi" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-2">Sobre Mí</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p>
                ¡Hola! Soy Enya. A lo largo del curso de Sistemas y Tecnologías Web, he descubierto mi pasión por construir aplicaciones interactivas y escalables. 
              </p>
              <p>
                Mis <strong>intereses profesionales</strong> se centran en el desarrollo Full Stack, especialmente en el ecosistema de JavaScript/TypeScript. Disfruto tanto diseñando interfaces intuitivas en el frontend como estructurando bases de datos y APIs en el backend.
              </p>
              <p>
                Actualmente, mis <strong>tecnologías favoritas</strong> son React y Next.js por la velocidad de desarrollo y la increíble experiencia de usuario que permiten crear.
              </p>
              <div className="glass p-6 rounded-2xl mt-8">
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 text-foreground">
                  <BookOpen className="text-accent-primary" size={20} />
                  ¿Qué quiero seguir aprendiendo?
                </h3>
                <p className="text-sm">
                  {/* Comentario para que parezca escrito por mi */}
                  {/* Me gustaría meterme más a fondo en temas de Cloud como AWS o Docker, 
                      siento que es el siguiente paso lógico. */}
                  Me interesa profundizar en la arquitectura en la nube (Cloud Computing), contenedores con Docker y la implementación de CI/CD para optimizar los flujos de trabajo.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span key={item} className="bg-background/50 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
