import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Gen Z hotel vibes, IRL.
            </h2>
            <p className="text-white/80 leading-relaxed">
              Welcome to BlueFlame Stay — a digital-first hotel with cozy smart rooms,
              mood-lit hallways, and Instagrammable corners at every turn. Tap in with
              keyless entry, crash into cloud beds, and stream everything at warp speed.
              It&apos;s futuristic, minimalist, and 100% photo-ready.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0F52BA] via-[#3F00FF] to-[#89CFF0] opacity-40 blur-2xl" />
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0b1020] to-[#0d0f1a] border border-white/10 p-6">
              <ul className="grid grid-cols-2 gap-4 text-white/90">
                <li className="p-4 rounded-xl bg-white/5">Smart Rooms</li>
                <li className="p-4 rounded-xl bg-white/5">Aesthetic Corners</li>
                <li className="p-4 rounded-xl bg-white/5">24/7 Fast WiFi</li>
                <li className="p-4 rounded-xl bg-white/5">Community Vibes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
