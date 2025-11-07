import React, { useEffect, useState } from 'react';

const items = [
  {
    name: 'Kai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    text: 'Aesthetic on point. WiFi is fast. Vibes immaculate. 10/10 would crash again.',
  },
  {
    name: 'Mina',
    avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop',
    text: 'Loved the VR lounge and rooftop sunsets. Totally Instagrammable.',
  },
  {
    name: 'Jules',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop',
    text: 'Smart locks + cloud beds = instant yes. Staff was super friendly too!',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const current = items[index];

  return (
    <section className="py-20 bg-[#070912]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">What guests say</h2>
        <div className="relative">
          <div className="relative mx-auto max-w-xl p-8 rounded-2xl bg-white/5 border border-white/10">
            <img src={current.avatar} alt={current.name} className="mx-auto h-16 w-16 rounded-full object-cover mb-4" />
            <p className="text-white/80 text-lg mb-2">“{current.text}”</p>
            <p className="text-white/60 text-sm">— {current.name}</p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button aria-label="Previous" onClick={prev} className="h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/20">‹</button>
            <button aria-label="Next" onClick={next} className="h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/20">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
