import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_IMAGE, heroStats } from '@/data';
import { AnimatedBackground } from './Loader';
import CountUp from './CountUp';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-4 md:px-6 overflow-hidden"
    >
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl px-5 py-2 shadow-lg shadow-cyan-400/10"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-[4px] text-xs md:text-sm font-semibold text-cyan-300">
              Welcome To My Portfolio
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            className="mt-8"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-medium">Hello, I'm</p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              className="mt-3 text-6xl md:text-8xl font-black leading-none tracking-tight"
            >
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Er ARSHAD
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-6 min-h-[50px]"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'React Developer',
                1000,
                'Node.js Developer',
                1000,
                'MERN Stack Developer',
                1000,
              ]}
              speed={80}
              deletionSpeed={90}
              repeat={Infinity}
              cursor
              className="inline-block text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6, ease: 'easeOut' }}
            className="mt-7 max-w-2xl mx-auto lg:mx-0 text-gray-300 text-lg leading-9"
          >
            I build{' '}
            <span className="font-semibold text-cyan-400">
              premium, scalable and secure
            </span>{' '}
            web applications using{' '}
            <span className="font-semibold text-white">
              React.js, Node.js, Express.js and MongoDB
            </span>
            . Passionate about creating high-performance digital products, responsive user
            experiences and clean backend architectures that deliver real business value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap justify-center lg:justify-start gap-5 mt-9"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-black shadow-lg shadow-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
            >
              <span className="flex items-center gap-2">
                Hire Me
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl px-8 py-4 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <span className="flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.5 }}
            className="flex justify-center lg:justify-start gap-5 mt-10"
          >
            {[
              { icon: <Github size={22} />, link: 'https://github.com/settings/profile', label: 'GitHub' },
              {
                icon: <Linkedin size={22} />,
                link: 'https://www.linkedin.com/in/mohammad-arshad-a1b7b33a8?utm_source=share_via&utm_content=profile&utm_medium=member_android',
                label: 'LinkedIn',
              },
              {
                icon: <Mail size={22} />,
                link: 'mailto:arshadsheikh7037@gmail.com',
                label: 'Email',
              },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, scale: 0.7, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.15 + i * 0.1, duration: 0.4, ease: 'easeOut' }}
                whileHover={{ scale: 1.12, y: -6 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl text-white transition-all duration-300 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-3xl" />
            <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-xl" />
            <img
              src="/profile.jpeg.jpeg"
              alt="Mohammad Arshad"
              className="relative z-10 w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full object-cover object-top border-[6px] border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.35)]"
            />
            <div className="absolute left-12 top-20 w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <div className="absolute right-10 bottom-24 w-4 h-4 rounded-full bg-cyan-300 animate-ping" />
            <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-white" />
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
          {heroStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm tracking-wide text-gray-400">{s.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-xs md:text-sm tracking-[4px] uppercase text-gray-400 group-hover:text-cyan-400 transition">
          Scroll
        </span>
        <ChevronDown className="text-cyan-400 animate-bounce" size={24} />
      </motion.a>
    </section>
  );
}
