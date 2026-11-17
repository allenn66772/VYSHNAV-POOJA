import React from 'react';
import { LeafDivider } from './BotanicalIcons';

export default function StorySection({ onOpenGallery }) {
  return (
    <section id="story" className="bg-[#f2eee5] py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Tilted Polaroid Photo Container */}
        <div className="md:col-span-6 flex justify-center">
          <div className="relative cursor-pointer group" onClick={onOpenGallery}>
            
            {/* Top translucent tape sticker */}
            <div className="tape-sticker" />

            {/* Polaroid frame */}
            <div className="polaroid-frame rounded-sm max-w-sm sm:max-w-md">
              <div className="overflow-hidden rounded-sm relative aspect-[4/3]">
                <img 
                  src="/images/couple_sunset.jpg" 
                  alt="Vyshnav and Pooja at Sunset"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-outfit uppercase tracking-widest bg-black/40 px-3 py-1 rounded backdrop-blur-sm">
                    View Gallery ↗
                  </span>
                </div>
              </div>
            </div>

            {/* Small leaf branch accent sticking out */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 text-[#56654f]/50 pointer-events-none transform rotate-45">
              <svg viewBox="0 0 50 50" fill="currentColor">
                <path d="M25 5 Q20 25 10 35 C15 30 20 25 25 25 C30 25 35 30 40 35 Q30 25 25 5 Z" />
              </svg>
            </div>

          </div>
        </div>

        {/* Right Column: Story Text Content */}
        <div className="md:col-span-6 text-center md:text-left space-y-4">
          
          <p className="font-outfit uppercase tracking-[0.3em] text-[11px] sm:text-xs text-[#6e7d69] font-semibold">
            OUR STORY
          </p>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-light text-[#2e372a] leading-tight">
            Two Hearts, One Path
          </h2>

          <div className="space-y-4 font-cormorant text-base sm:text-lg md:text-xl text-[#4c5747] leading-relaxed font-normal pt-1">
            <p>
              From the first moment we met, life felt a little more beautiful. Through every laugh, lesson and little moment, we found something rare — a best friend, a partner, and a home in each other.
            </p>
            <p>
              Now, we step into a new chapter, with your blessings and love.
            </p>
          </div>

          <div className="pt-2 flex justify-center md:justify-start">
            <LeafDivider className="w-24 h-6 text-[#5c6a56] opacity-80" />
          </div>

        </div>

      </div>
    </section>
  );
}
