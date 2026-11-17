import React from 'react';
import { LeafDivider } from './BotanicalIcons';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-[#f2eee5] py-12 md:py-20 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Soft Shadow / Lighting gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ebe5d8]/40 via-transparent to-[#f2eee5] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Image: Flatlay Wedding Rings on Sage Linen */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="relative group max-w-sm lg:max-w-none">
            {/* Subtle soft backdrop glow */}
            <div className="absolute -inset-2 bg-[#d7cfbd]/40 rounded-2xl blur-lg transition duration-500 group-hover:bg-[#cbbfab]/50" />
            
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#ded5c5]">
              <img 
                src="/images/hero_rings.jpg" 
                alt="Wedding Rings on Linen Flatlay"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Center Invitation Text */}
        <div className="lg:col-span-5 text-center px-2 sm:px-4">
          
          <p className="font-outfit uppercase tracking-[0.28em] text-[11px] sm:text-xs text-[#6e7d69] font-medium mb-1">
            TOGETHER WITH THEIR FAMILIES
          </p>
          
          <p className="font-cormorant italic text-sm sm:text-base text-[#5d6856] mb-6 font-normal">
            you are warmly invited to the wedding of
          </p>

          <div className="space-y-1 mb-4">
            <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl tracking-[0.2em] font-light text-[#2d3629] uppercase leading-none">
              VYSHNAV
            </h1>
            <p className="font-cormorant text-3xl sm:text-4xl text-[#5a6854] font-light italic my-1">
              &
            </p>
            <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl tracking-[0.2em] font-light text-[#2d3629] uppercase leading-none">
              POOJA
            </h1>
          </div>

          {/* Botanical Divider */}
          <LeafDivider className="w-28 h-6 text-[#5c6a56] mx-auto my-4 opacity-80" />

          {/* Event Metadata */}
          <div className="space-y-1.5 mt-4">
            <p className="font-cormorant text-lg sm:text-2xl tracking-[0.25em] text-[#3d4838] font-medium">
              13 . 12 . 2026
            </p>
            <p className="font-outfit uppercase tracking-[0.2em] text-[10px] sm:text-xs text-[#697764]">
              6:00 AM – 7:00 AM
            </p>
            <p className="font-cormorant tracking-[0.2em] text-xs sm:text-sm text-[#485544] font-semibold uppercase pt-1">
              GURUVAYOOR AMBALAM
            </p>
          </div>

        </div>

        {/* Right Section: Soft Leaves Backdrop & Handwritten Cursive Quote */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center text-center lg:text-right relative">
          
          {/* Handwritten Quote Banner */}
          <div className="relative p-6 max-w-xs">
            <p className="font-cursive text-3xl sm:text-4xl lg:text-5xl text-[#3b4737] leading-snug transform lg:rotate-[-4deg]">
              Two souls,
              <br />
              One journey,
              <br />
              Forever ♡
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
