import { services } from '@/data';

export default function Services() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-cyan-400 mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative backdrop-blur-lg rounded-3xl p-8 transition duration-300 hover:scale-105 ${
                service.featured
                  ? 'border-2 border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20'
                  : 'border border-cyan-400/20 bg-white/5'
              }`}
            >
              {service.featured && (
                <span className="absolute top-4 right-4 bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Best
                </span>
              )}
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
