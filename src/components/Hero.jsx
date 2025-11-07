import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-white/70 mb-3">Your vibes, our space</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.05]">
            <span className="block">Stay Cool,</span>
            <span className="block bg-gradient-to-r from-[#0F52BA] via-[#3F00FF] to-[#89CFF0] bg-clip-text text-transparent">Stay Blue.</span>
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            Crash here, chill hard. Smart stay, no boring days.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#booking"
              className="rounded-full px-6 py-3 font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#0F52BA] via-[#3F00FF] to-[#89CFF0] shadow-[0_0_25px_rgba(79,70,229,0.55)] hover:opacity-95 transition"
            >
              Book Now
            </a>
            <a href="#about" className="text-white/80 hover:text-white text-sm sm:text-base">Why BlueFlame?</a>
          </div>
        </div>
      </div>
    </section>
  );
}
