import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/7037712898"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={35} color="white" />
    </a>
  );
}
