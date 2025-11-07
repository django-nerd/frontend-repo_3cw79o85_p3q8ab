import React from 'react';

const rooms = [
  {
    name: 'Standard',
    price: 79,
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop',
    perks: ['Cozy queen bed', 'Smart lock', '30Mbps WiFi'],
  },
  {
    name: 'Deluxe',
    price: 119,
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop',
    perks: ['King bed', 'Ambient lighting', '80Mbps WiFi'],
  },
  {
    name: 'Suite',
    price: 199,
    img: 'https://images.unsplash.com/photo-1616596874265-9e1d16ddd9bf?q=80&w=1600&auto=format&fit=crop',
    perks: ['Separate lounge', 'Mini bar', '120Mbps WiFi'],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-[#070912]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Rooms</h2>
          <p className="text-white/70 text-sm">Glow up your stay — pick your vibe.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.name} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#3F00FF]/60 transition relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={room.img} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-xl font-semibold">{room.name}</h3>
                  <span className="text-[#89CFF0] font-bold">${room.price}<span className="text-white/70 text-sm font-normal">/night</span></span>
                </div>
                <ul className="text-white/70 text-sm space-y-1 mb-4">
                  {room.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
                <a href="#booking" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#0F52BA] via-[#3F00FF] to-[#89CFF0] shadow-[0_0_20px_rgba(79,70,229,0.5)]">
                  View Details
                </a>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F52BA]/20 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
