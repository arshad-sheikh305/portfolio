
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAME_SHORT } from '@/data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#timeline', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const linkClass =
    'hover:text-cyan-400 transition relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full';

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/profile.jpeg.jpeg"
            alt="profile"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover object-top border-2 border-cyan-400"
          />
          <span className="text-lg md:text-xl font-bold text-cyan-400">{NAME_SHORT}</span>
        </div>
        <nav className="hidden md:flex gap-8 text-white">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-cyan-400 text-2xl"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-black border-t border-cyan-400/20 flex flex-col text-center">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="py-4 hover:bg-cyan-400 hover:text-black transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
