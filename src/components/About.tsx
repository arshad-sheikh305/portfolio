import { motion } from 'framer-motion';
import { quickInfo, floatingTech, PROFILE_IMAGE } from '@/data';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 font-mono mb-2">Who I Am</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile image with floating tech */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-3xl" />
              <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-xl" />
              <img
                src={PROFILE_IMAGE}
                alt="Mohammad Arshad"
                className="relative z-10 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full object-cover object-top border-[5px] border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.3)]"
              />
              {floatingTech.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
                  viewport={{ once: true }}
                  className={`absolute ${tech.className} z-20 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-zinc-900/90 backdrop-blur-xl text-2xl md:text-3xl text-cyan-400 shadow-lg`}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-xl hover:border-cyan-400 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-6">Passionate MERN Stack Developer</h3>
              <p className="text-gray-300 text-lg leading-9">
                I specialize in building{' '}
                <span className="text-cyan-400 font-semibold">
                  {' '}scalable, secure, and high-performance{' '}
                </span>
                web applications using{' '}
                <span className="text-white font-semibold">
                  {' '}React.js, Node.js, Express.js, and MongoDB.
                </span>
                <br />
                <br />
                My passion lies in transforming ideas into elegant digital experiences with clean
                architecture, responsive interfaces, optimized APIs, and modern development practices.
                <br />
                <br />
                I continuously explore new technologies and enjoy creating products that deliver both
                exceptional user experience and business value.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="mt-6 rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-xl hover:border-cyan-400 transition-all duration-500"
            >
              <h3 className="text-3xl font-bold text-white mb-8">Quick Information</h3>
              <div className="space-y-6 text-gray-300">
                {quickInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <Icon className="text-cyan-400" size={22} />
                      <span>
                        <strong className="text-white">{info.label}</strong>
                        {info.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
