import { useEffect, useRef, useState } from 'react';
import { defaultTestimonials, type Testimonial } from '@/data';

export default function Testimonials() {
  const [reviews, setReviews] = useState<Testimonial[]>(() => {
    const stored = localStorage.getItem('portfolioReviews');
    return stored ? JSON.parse(stored) : defaultTestimonials;
  });
  const [form, setForm] = useState({ name: '', imageFile: null as File | null, text: '', rating: 5 });
  const [showSuccess, setShowSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem('portfolioReviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleDelete = (index: number) => {
    const pwd = prompt('Enter Admin Password to delete:');
    if (pwd === 'admin123') {
      setReviews(reviews.filter((_, i) => i !== index));
    } else if (pwd !== null) {
      alert('Invalid Password!');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    setUploading(true);
    const image = form.imageFile
      ? URL.createObjectURL(form.imageFile)
      : `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 50)}.jpg`;
    setTimeout(() => {
      setReviews([...reviews, { name: form.name, image, rating: form.rating, text: form.text }]);
      setForm({ name: '', imageFile: null, text: '', rating: 5 });
      if (fileRef.current) fileRef.current.value = '';
      setUploading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2500);
    }, 600);
  };

  return (
    <section className="py-20 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 text-center mb-10 md:mb-16">
          Testimonials
        </h2>

        {/* Scrolling reviews */}
        <div className="relative flex overflow-hidden mb-16 py-4">
          <div className="flex gap-4 md:gap-8 animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="group relative min-w-[260px] md:min-w-[350px] bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-6 text-center shrink-0"
              >
                <button
                  onClick={() => handleDelete(i % reviews.length)}
                  className="absolute top-4 right-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 hover:bg-red-900 p-2 rounded-full text-xs z-50"
                >
                  ✕
                </button>
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto border-4 border-cyan-400 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-bold text-white">{review.name}</h3>
                <p className="text-cyan-400 text-base md:text-lg">{'⭐'.repeat(review.rating)}</p>
                <p className="text-gray-300 mt-2 text-xs md:text-sm italic line-clamp-3">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Add review form */}
        <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 text-center">
            Add Your Review
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 md:p-4 rounded-xl bg-black border border-cyan-400/30 text-white"
              required
            />
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={(e) => setForm({ ...form, imageFile: e.target.files?.[0] ?? null })}
              className="w-full p-2 md:p-3 rounded-xl bg-black border border-cyan-400/30 text-white text-sm"
            />
            <div className="flex justify-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setForm({ ...form, rating: star })}
                  className={`text-3xl transition ${star <= form.rating ? 'text-cyan-400' : 'text-gray-600'}`}
                >
                  ★
                </button>
              ))}
            </div>
            <textarea
              placeholder="Your Review"
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              rows={3}
              className="w-full p-3 md:p-4 rounded-xl bg-black border border-cyan-400/30 text-white"
              required
            />
            <button
              type="submit"
              className="w-full py-3 md:py-4 bg-cyan-400 text-black font-bold rounded-xl hover:scale-105 transition"
            >
              {uploading ? 'Uploading...' : 'Submit Review'}
            </button>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] border border-green-500 rounded-3xl p-8 text-center text-white shadow-2xl">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-500">Success!</h3>
            <p className="text-gray-300 mt-2">Your review has been added.</p>
          </div>
        </div>
      )}
    </section>
  );
}
