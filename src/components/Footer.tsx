import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import {
  NAME,
  footerLinks,
  footerServices,
  socialLinks,
  contactInfo,
} from '@/data';

const socialIcons = [
  <Github size={20} />,
  <Linkedin size={20} />,
  <Instagram size={20} />,
  <Mail size={20} />,
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-5">{NAME}</h2>
            <p className="text-gray-400 leading-8">
              Passionate MERN Stack Developer dedicated to building modern, responsive and scalable
              web applications with clean code and exceptional user experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">Services</h3>
            <ul className="space-y-4">
              {footerServices.map((service) => (
                <li key={service} className="text-gray-400 hover:text-cyan-400 transition">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <p>📍 {contactInfo.location}</p>
              <p>📧 {contactInfo.email}</p>
              <p>📱 {contactInfo.phone}</p>
            </div>
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center text-xl hover:bg-cyan-400 hover:text-black transition duration-300"
                >
                  {socialIcons[i]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cyan-400/10 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} {NAME}. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:scale-110 transition"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
