import { useState } from 'react';
import { LOGO_IMAGE, NAME_SHORT } from '@/data';

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: `Hello! Ask me about ${NAME_SHORT}'s skills, projects, experience or contact details.` },
  ]);
  const [input, setInput] = useState('');

  const getResponse = (text: string): string => {
    const t = text.toLowerCase();
    if (t.includes('skill'))
      return `${NAME_SHORT} is skilled in React.js, Node.js, Express.js, MongoDB, JavaScript and Tailwind CSS.`;
    if (t.includes('project'))
      return `${NAME_SHORT} has built Investment Hub, University ERP, E-Commerce Platform and Dadi Ki Rasoi.`;
    if (t.includes('contact'))
      return `You can contact ${NAME_SHORT} through the Contact section of this portfolio.`;
    if (t.includes('experience'))
      return `${NAME_SHORT} has experience building modern MERN stack applications and responsive web interfaces.`;
    if (t.includes('resume'))
      return `You can download ${NAME_SHORT}'s resume from the Hero section.`;
    if (t.includes('about'))
      return `Hi there! 👋 I'm a MERN Stack Developer dedicated to building seamless digital experiences. How can I help you explore my work today?`;
    return `I can answer questions about skills, projects, experience, resume and contact information.`;
  };

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    const botMsg = { sender: 'bot', text: getResponse(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full overflow-hidden shadow-2xl z-50 border-2 border-cyan-400"
        aria-label="AI Assistant"
      >
        <img src={LOGO_IMAGE} alt="AI Assistant" className="w-full h-full object-cover" />
      </button>
      {open && (
        <div className="fixed bottom-24 right-4 md:right-6 w-[92vw] max-w-[380px] h-[500px] bg-[#111] border border-cyan-400 rounded-3xl flex flex-col z-[100] shadow-2xl">
          <div className="p-4 border-b border-cyan-400 flex justify-between items-center">
            <h3 className="text-cyan-400 font-bold text-lg">AI Assistant</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-xl hover:text-cyan-400 transition"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[80%] break-words ${
                  msg.sender === 'user'
                    ? 'bg-cyan-400 text-black ml-auto'
                    : 'bg-white/10 text-white'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-4 flex gap-2 border-t border-cyan-400/20">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              className="flex-1 p-3 rounded-xl bg-black border border-cyan-400/30 outline-none text-white"
            />
            <button
              onClick={send}
              className="px-4 bg-cyan-400 text-black rounded-xl font-bold hover:scale-105 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
