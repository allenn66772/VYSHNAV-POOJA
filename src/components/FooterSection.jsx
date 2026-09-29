import React from 'react';
import { CornerFoliage } from './BotanicalIcons';

export default function FooterSection() {
  return (
    <footer className="bg-[#eae4d6] py-14 px-4 relative overflow-hidden border-t border-[#dbd3c2]">
      
      {/* Corner leaf sprigs */}
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-25">
        <CornerFoliage className="w-40 h-40 text-[#495744] transform rotate-90" />
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none opacity-25">
        <CornerFoliage className="w-40 h-40 text-[#495744] transform -rotate-90 scale-x-[-1]" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10 space-y-3">
        
        <p className="font-outfit uppercase tracking-[0.3em] text-[10px] sm:text-xs text-[#63725d] font-semibold">
          WITH LOVE AND BLESSINGS
        </p>

        {/* Elegant Handwritten Cursive Signature */}
        <h2 className="font-cursive text-4xl sm:text-6xl text-[#2f392b] pt-1 leading-none">
          Vyshnav & Pooja
        </h2>

        {/* Heart icon accent */}
        <div className="text-[#64745e] text-lg font-light pt-1">
          ♡
        </div>

        <p className="font-cormorant text-xs text-[#687663] italic pt-4">
          Dec 13, 2026 • Guruvayoor, Kerala
        </p>

      </div>
    </footer>
  );
}
