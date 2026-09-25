import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { certificates } from '@/data';
import { SectionHeading } from './Loader';

export default function Certificates() {
  const [selected, setSelected] = useState<(typeof certificates)[0] | null>(null);

  return (
    <section id="certificates" className="py-28 px-6 bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My"
          highlight="Certificates"
          subtitle="Professional certifications that showcase my continuous learning, technical expertise, and commitment to becoming a better MERN Stack Developer."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition" />
                {cert.featured && (
                  <span className="absolute top-4 left-4 bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                )}
                <button
                  onClick={() => setSelected(cert)}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold"
                >
                  View Certificate
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{cert.title}</h3>
                <div className="flex justify-between text-gray-400 text-sm mb-4">
                  <span>🏢 {cert.issuer}</span>
                  <span>📅 {cert.year}</span>
                </div>
                <button
                  onClick={() => setSelected(cert)}
                  className="w-full py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-4">Continuous Learning 🚀</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-8">
            I believe in continuous improvement and regularly earn new certifications to stay updated
            with modern technologies.
          </p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
          >
            View LinkedIn Profile
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full rounded-2xl border border-cyan-400/30"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition"
              >
                <X size={20} />
              </button>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-cyan-400">{selected.title}</h3>
                <p className="text-gray-400 mt-1">
                  {selected.issuer} — {selected.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
