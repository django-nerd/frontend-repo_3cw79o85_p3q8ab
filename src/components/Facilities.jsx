import React from 'react';
import { Wifi, Lock, Headphones, Martini, Briefcase } from 'lucide-react';

const facilities = [
  { icon: Wifi, title: 'Fast WiFi', desc: 'Stream, game, upload — zero lag.' },
  { icon: Lock, title: 'Smart Lock', desc: 'Tap in, no keys, no stress.' },
  { icon: Headphones, title: 'VR Lounge', desc: 'Future fun, right downstairs.' },
  { icon: Martini, title: 'Rooftop Bar', desc: 'Sky views + neon hues.' },
  { icon: Briefcase, title: 'Cowork Zone', desc: 'Deep focus meets cool vibes.' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">Facilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {facilities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0F52BA]/60 transition overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0F52BA] via-[#3F00FF] to-[#89CFF0] opacity-0 group-hover:opacity-20 blur-2xl transition pointer-events-none" />
              <Icon className="h-8 w-8 text-[#89CFF0] mb-4" />
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
