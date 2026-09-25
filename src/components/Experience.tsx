import { motion } from 'framer-motion';
import { experiences } from '@/data';

export default function Experience() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-cyan-400">Work Experience</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            My journey as a MERN Stack Developer, building modern web applications and continuously
            improving my technical skills.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-cyan-400/30" />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20" />
              <div className="w-full md:w-1/2 pl-12 md:px-12">
                <div className="relative bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-300">
                  {exp.current && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-cyan-400 text-black">
                      Current
                    </span>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-cyan-400 font-bold">{exp.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{exp.role}</h3>
                  <p className="text-gray-400 mb-4">{exp.company}</p>
                  <p className="text-gray-300 leading-8 mb-6">{exp.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-sm text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
