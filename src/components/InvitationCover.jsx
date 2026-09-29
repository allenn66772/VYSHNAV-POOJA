import React, { useState } from 'react';
import { LeafLogo, LeafDivider } from './BotanicalIcons';
import { Sparkles, Heart } from 'lucide-react';

export default function InvitationCover({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#e6dfd1] flex items-center justify-center p-4 transition-all duration-700 ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Texture & Lighting backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ded6c5] via-[#e8e2d4] to-[#f4eee4] pointer-events-none" />

      {/* Subtle corner foliage */}
      <div className="absolute top-6 left-6 text-[#52614e]/20 pointer-events-none hidden sm:block">
        <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 10 C40 30 70 50 90 90 Q50 60 10 10 Z" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 text-[#52614e]/20 pointer-events-none hidden sm:block transform scale-x-[-1] scale-y-[-1]">
        <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 10 C40 30 70 50 90 90 Q50 60 10 10 Z" />
        </svg>
      </div>

      {/* Main Envelope Card Container */}
      <div 
        onClick={handleOpen}
        className="relative max-w-md w-full bg-[#f3eee5] border-2 border-[#d6cbba] rounded-2xl shadow-2xl p-8 sm:p-12 text-center cursor-pointer group hover:border-[#586751] transition-all duration-500 transform hover:-translate-y-1"
      >
        
        {/* Envelope Top Flap Design Line */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#e3dbc9] border-b border-[#cca362]/40 rounded-b-full shadow-inner" />

        {/* Outer Wax Seal Badge */}
        <div className="my-6 relative flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#7a8a72] via-[#56654f] to-[#3a4736] text-[#f2eee5] flex flex-col items-center justify-center shadow-xl border-4 border-[#ded4c1] group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
            <span className="font-cormorant text-2xl sm:text-3xl font-bold tracking-widest leading-none pt-1">
              V & P
            </span>
            <span className="text-[9px] uppercase font-outfit tracking-widest text-[#d5e2cf] opacity-90 mt-0.5">
              13.12.2026
            </span>
          </div>
          
          {/* Subtle glowing ring effect around seal */}
          <div className="absolute inset-0 rounded-full border border-[#56654f]/30 animate-ping pointer-events-none max-w-[96px] max-h-[96px] mx-auto" />
        </div>

        {/* Text Details */}
        <p className="font-outfit uppercase tracking-[0.3em] text-[10px] sm:text-xs text-[#62715d] font-semibold mb-2">
          WEDDING INVITATION
        </p>

        <h2 className="font-cormorant text-3xl sm:text-5xl font-light text-[#2d3629] uppercase tracking-wider">
          Vyshnav
        </h2>
        <p className="font-cormorant text-2xl text-[#586751] italic my-0.5">&</p>
        <h2 className="font-cormorant text-3xl sm:text-5xl font-light text-[#2d3629] uppercase tracking-wider">
          Pooja
        </h2>

        <LeafDivider className="w-28 h-6 text-[#5c6a56] mx-auto my-4 opacity-80" />

        <p className="font-cormorant text-sm sm:text-base text-[#576452] italic mb-8">
          "Together with their families, warmly invite you to share in their special day"
        </p>

        {/* Interactive Tap Prompt */}
        <div className="inline-flex items-center gap-2 bg-[#56654f] group-hover:bg-[#43503d] text-white px-7 py-3 rounded-full font-outfit text-xs uppercase tracking-[0.2em] font-medium shadow-md group-hover:shadow-lg transition-all duration-300">
          <Sparkles className="w-4 h-4 text-[#e2ebd9] animate-spin-slow" />
          <span>Tap to Open Invitation</span>
          <Heart className="w-3.5 h-3.5 text-[#e8a3a3] fill-current" />
        </div>

      </div>

    </div>
  );
}
