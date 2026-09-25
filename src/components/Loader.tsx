import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <h1 className="text-5xl font-bold text-cyan-400 mb-4">ARSHAD</h1>
      <p className="text-gray-300 text-xl">Portfolio Loading...</p>
      <div className="w-64 h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-cyan-400 animate-pulse w-full" />
      </div>
    </div>
  );
}

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[150px]" />
      <div className="absolute top-1/2 left-1/3 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#000_90%)]" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-cyan-400 font-mono mb-2"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold"
      >
        {title} {highlight && <span className="text-cyan-400">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-8">{subtitle}</p>
      )}
    </div>
  );
}
