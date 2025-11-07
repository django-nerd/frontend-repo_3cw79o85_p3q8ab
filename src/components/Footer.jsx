import React from 'react';
import { Instagram, Send, Music2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-white font-extrabold text-xl mb-2">BlueFlame Stay</h3>
            <p className="text-white/70 text-sm">123 Neon Ave, Sky City • Open 24/7</p>
          </div>
          <form id="booking" onSubmit={(e) => e.preventDefault()} className="md:col-span-2 flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="Drop your email — join the club" className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3F00FF]" />
            <button type="submit" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#0F52BA] via-[#3F00FF] to-[#89CFF0] shadow-[0_0_20px_rgba(79,70,229,0.5)]">
              <Send className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p className="text-white/50 text-xs">© {new Date().getFullYear()} BlueFlame Stay. All vibes reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="TikTok" className="text-white/70 hover:text-white">
              <Music2 className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Threads" className="text-white/70 hover:text-white">
              T
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
