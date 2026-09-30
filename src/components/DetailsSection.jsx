import React from 'react';
import { Calendar, MapPin, ExternalLink, Sparkles, Utensils } from 'lucide-react';
import { TempleIcon, SideLeafBranch } from './BotanicalIcons';

export default function DetailsSection({ onOpenMap }) {
  return (
    <section id="details" className="bg-[#e8e4d8] py-16 sm:py-24 px-4 sm:px-6 border-y border-[#dad3c3] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-outfit uppercase tracking-[0.3em] text-[11px] sm:text-xs text-[#596854] font-semibold">
            WEDDING DETAILS & CELEBRATIONS
          </p>
          <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2e372a] font-light mt-1">
            Events & Locations
          </h2>
        </div>

        {/* 2 Main Event Cards Grid: Wedding Ceremony & Reception */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          
          {/* Decorative left foliage */}
          <div className="hidden xl:block absolute -left-12 top-1/2 -translate-y-1/2 opacity-30 transform -rotate-45 pointer-events-none">
            <SideLeafBranch className="w-10 h-20 text-[#4d5b47]" />
          </div>

          {/* Card 1: Marriage Ceremony */}
          <div className="bg-[#f3eee5] rounded-2xl p-6 sm:p-8 shadow-md border border-[#d6ccb9] hover:border-[#677761] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3dccf] text-[#4d5b48] font-outfit text-[11px] font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#586751]" />
                  Wedding Ceremony
                </span>
                <span className="font-outfit text-xs text-[#63725d] font-medium uppercase tracking-widest">
                  Thali Kettu
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#e3dccf] flex items-center justify-center shrink-0 text-[#495644] shadow-sm">
                  <TempleIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl sm:text-3xl text-[#2f382a] font-medium">
                    Guruvayoor Ambalam
                  </h3>
                  <p className="font-cormorant text-sm sm:text-base text-[#5d6b58] italic mt-0.5">
                    Guruvayoor, Thrissur, Kerala
                  </p>
                </div>
              </div>

              <div className="space-y-2 py-4 border-t border-b border-[#e2d8c6] my-4 font-outfit text-xs text-[#4b5946]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#56654f]" />
                  <span className="font-semibold text-[#2f382a]">Date:</span>
                  <span>December 13, 2026 (Sunday)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 text-center font-bold text-[#56654f]">⏰</span>
                  <span className="font-semibold text-[#2f382a]">Muhurtham:</span>
                  <span>6:00 AM – 7:00 AM</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenMap('temple')}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#56654f] hover:bg-[#42503d] text-white py-3 rounded-xl font-outfit text-xs tracking-wider uppercase transition-all shadow-sm focus:outline-none"
            >
              <MapPin className="w-4 h-4" />
              <span>View Temple Location</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Card 2: Reception Venue */}
          <div className="bg-[#f3eee5] rounded-2xl p-6 sm:p-8 shadow-md border border-[#d6ccb9] hover:border-[#677761] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3dccf] text-[#4d5b48] font-outfit text-[11px] font-semibold uppercase tracking-wider">
                  <Utensils className="w-3.5 h-3.5 text-[#586751]" />
                  Wedding Reception
                </span>
                <span className="font-outfit text-xs text-[#63725d] font-medium uppercase tracking-widest">
                  Feast & Blessings
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#e3dccf] flex items-center justify-center shrink-0 text-[#495644] shadow-sm">
                  <MapPin className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl sm:text-3xl text-[#2f382a] font-medium">
                    Rak Plaza
                  </h3>
                  <p className="font-cormorant text-sm sm:text-base text-[#5d6b58] italic mt-0.5">
                    Punnakuru
                  </p>
                </div>
              </div>

              <div className="space-y-2 py-4 border-t border-b border-[#e2d8c6] my-4 font-outfit text-xs text-[#4b5946]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#56654f]" />
                  <span className="font-semibold text-[#2f382a]">Date:</span>
                  <span>December 13, 2026 (Sunday)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 text-center font-bold text-[#56654f]">🥂</span>
                  <span className="font-semibold text-[#2f382a]">Timing:</span>
                  <span>5:00 PM – 9:00 PM</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenMap('reception')}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 border border-[#677761] text-[#3f4b3a] hover:bg-[#56654f] hover:text-white py-3 rounded-xl font-outfit text-xs tracking-wider uppercase transition-all duration-300 shadow-sm focus:outline-none"
            >
              <MapPin className="w-4 h-4" />
              <span>View Reception Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Decorative right foliage */}
          <div className="hidden xl:block absolute -right-12 top-1/2 -translate-y-1/2 opacity-30 transform rotate-45 scale-x-[-1] pointer-events-none">
            <SideLeafBranch className="w-10 h-20 text-[#4d5b47]" />
          </div>

        </div>

      </div>
    </section>
  );
}
