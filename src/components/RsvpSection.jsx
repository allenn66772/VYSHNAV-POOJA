import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { LeafLogo, CornerFoliage } from './BotanicalIcons';

export default function RsvpSection({ onOpenRsvp, onOpenGallery }) {
  return (
    <section id="rsvp" className="bg-[#f2eee5] py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Bottom right decorative foliage */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-40">
        <CornerFoliage className="w-56 h-56 text-[#4d5c48]" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Column: Temple Photo */}
        <div className="md:col-span-6">
          <div className="relative group overflow-hidden rounded-xl shadow-lg border border-[#dfd6c6]">
            <img 
              src="/images/guruvayoor_temple.jpg" 
              alt="Guruvayoor Temple Kerala"
              className="w-full h-[300px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-cormorant text-xl font-semibold tracking-wide drop-shadow">
                Guruvayoor Sree Krishna Temple
              </p>
              <p className="font-outfit text-[11px] uppercase tracking-widest text-white/90">
                Thrissur, Kerala
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: RSVP Call to Action & Gallery Button */}
        <div className="md:col-span-6 text-center md:text-left space-y-6 px-2 sm:px-4">
          
          <div className="flex justify-center md:justify-start">
            <LeafLogo className="w-6 h-6 text-[#4d5c48]" />
          </div>

          <div>
            <h2 className="font-cormorant text-3xl sm:text-5xl tracking-[0.25em] font-light text-[#2d3728] uppercase mb-2">
              R S V P
            </h2>
            <p className="font-cormorant text-base sm:text-xl text-[#53614e] italic font-normal">
              Your presence will make our day even more special.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            
            {/* Dark Olive Primary Button */}
            <button
              onClick={onOpenRsvp}
              className="w-full sm:w-auto bg-[#56654f] hover:bg-[#45523f] text-white px-7 py-3 rounded-full font-outfit text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group focus:outline-none"
            >
              <span>Let Us Know</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Light Outline Gallery Button */}
            <button
              onClick={onOpenGallery}
              className="w-full sm:w-auto border border-[#768570] text-[#3f4b3a] hover:bg-[#e4ded0] px-6 py-3 rounded-full font-outfit text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none"
            >
              <span>View Gallery</span>
              <ImageIcon className="w-4 h-4 text-[#5c6b57]" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
