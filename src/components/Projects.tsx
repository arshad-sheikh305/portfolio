import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { projects } from '@/data';
import { SectionHeading } from './Loader';

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="My Work" title="Featured" highlight="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 hover:shadow-cyan-400/20 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <button
                  onClick={() => setSelected(project)}
                  className="w-full py-3 rounded-xl border border-cyan-400/40 hover:bg-cyan-400 hover:text-black font-bold transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-900 border border-cyan-400/30 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-cyan-400 mb-4">{selected.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{selected.details}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-sm text-cyan-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl bg-white/5 border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition flex items-center justify-center gap-2"
                  >
                    GitHub
                  </a>
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 transition flex items-center justify-center gap-2"
                  >
                    Live Demo
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
