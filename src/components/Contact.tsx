import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/data';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    formRef.current.reset();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2500);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-cyan-400 mb-12 text-center">Contact Me</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 text-center">
            <MapPin className="text-cyan-400 mx-auto mb-3" size={28} />
            <p className="text-gray-400 text-sm">{contactInfo.location}</p>
          </div>
          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 text-center">
            <Mail className="text-cyan-400 mx-auto mb-3" size={28} />
            <p className="text-gray-400 text-sm break-all">{contactInfo.email}</p>
          </div>
          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 text-center">
            <Phone className="text-cyan-400 mx-auto mb-3" size={28} />
            <p className="text-gray-400 text-sm">{contactInfo.phone}</p>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 bg-white/5 border border-cyan-400/20 rounded-xl text-white outline-none focus:border-cyan-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 bg-white/5 border border-cyan-400/20 rounded-xl text-white outline-none focus:border-cyan-400 transition"
            required
          />
          <textarea
            rows={6}
            name="message"
            placeholder="Your Message"
            className="w-full p-4 bg-white/5 border border-cyan-400/20 rounded-xl text-white outline-none focus:border-cyan-400 transition"
            required
          />
          <button
            type="submit"
            className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-200 flex items-center gap-2 mx-auto"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#111] border border-green-500 rounded-3xl p-8 text-center text-white shadow-2xl"
            >
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-500">Success!</h3>
              <p className="text-gray-300 mt-2">Your message has been sent.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
