import { motion } from 'framer-motion';
import { journeyItems } from '@/data';

export default function Journey() {
  return (
    <section id="timeline" className="py-20 md:py-32 px-4 md:px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-cyan-400">Career Timeline</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            My journey as a MERN Stack Developer, continuously learning, building modern
            applications, and delivering scalable solutions.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-cyan-400 to-cyan-400 rounded-full" />
          {journeyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-20">
                <div className="w-6 h-6 rounded-full bg-cyan-400 border-4 border-black shadow-[0_0_25px_rgba(34,211,238,0.8)]" />
              </div>
              <div className="w-full md:w-1/2 pl-14 md:px-12">
                <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8 transition duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:-translate-y-2">
                  <span className="absolute top-4 right-6 text-6xl font-black text-cyan-400/10">
                    0{i + 1}
                  </span>
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-5 ${
                      item.badge === 'Current'
                        ? 'bg-cyan-400 text-black'
                        : 'bg-zinc-800 text-cyan-400 border border-cyan-400/30'
                    }`}
                  >
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">📅</span>
                    <span className="text-cyan-400 font-bold">{item.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-5">
                    <span>🏢</span>
                    <span>{item.company}</span>
                  </div>
                  <p className="text-gray-400 leading-8 mb-6">{item.description}</p>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-sm text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 text-center"
        >
          <h3 className="text-4xl font-bold mb-5">Let's Build Something Amazing 🚀</h3>
          <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-8">
            Passionate about creating fast, scalable, and modern web applications. Always open to
            exciting projects, collaborations, freelance work, and new opportunities.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
