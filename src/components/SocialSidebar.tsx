import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const links = [
  { icon: <Github size={22} />, link: 'https://github.com/settings/profile' },
  { icon: <Linkedin size={22} />, link: 'https://www.linkedin.com/in/mohammad-arshad-a1b7b33a8?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { icon: <Instagram size={22} />, link: 'https://www.instagram.com/as1_4.3?stkn=MXZneTZobmw3emtqMw==' },
  { icon: <Mail size={22} />, link: 'mailto:arshadsheikh7037@gmail.com' },
];

export default function SocialSidebar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex-row md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2 z-50 flex md:flex-col gap-4">
      {links.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-cyan-400 hover:text-black transition"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
