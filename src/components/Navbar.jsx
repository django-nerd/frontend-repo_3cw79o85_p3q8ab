import React from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-white font-extrabold tracking-tight text-lg sm:text-xl">
            <span className="bg-gradient-to-r from-[#0F52BA] via-[#3F00FF] to-[#89CFF0] bg-clip-text text-transparent">BlueFlame</span> <span className="text-white">Stay</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            className="ml-4 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.6)] bg-gradient-to-r from-[#0F52BA] via-[#3F00FF] to-[#89CFF0] hover:opacity-95 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
