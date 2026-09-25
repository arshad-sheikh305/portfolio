import { motion } from 'framer-motion';
import { achievementStats } from '@/data';
import CountUp from './CountUp';

export default function Achievements() {
  return (
    <section className="py-20 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-cyan-400">My Achievements</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Numbers that represent my journey, dedication, and passion for building modern web
            applications.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievementStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 text-center hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-cyan-400 mb-3">
                <CountUp end={stat.number} suffix="+" />
              </h3>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
