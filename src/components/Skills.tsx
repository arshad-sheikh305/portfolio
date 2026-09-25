import { motion } from 'framer-motion';
import { skills } from '@/data';

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-cyan-400 mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-cyan-400">{skill.icon}</span>
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
                <span className="text-cyan-400">
                  {skill.value}%
                </span>
              </div>
              <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="h-3 bg-cyan-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
