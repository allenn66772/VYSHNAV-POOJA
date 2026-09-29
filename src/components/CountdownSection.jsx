import React, { useState, useEffect } from 'react';
import { SideLeafBranch } from './BotanicalIcons';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 77,
    hours: 18,
    minutes: 42,
    seconds: 36
  });

  useEffect(() => {
    // Target date: December 13, 2026, 06:00:00 AM
    const targetDate = new Date('2026-12-13T06:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#56654f] text-[#f2eee5] py-8 sm:py-10 px-4 relative overflow-hidden shadow-inner">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        
        {/* Left Branch Graphic */}
        <div className="hidden sm:block opacity-60 transform -rotate-12">
          <SideLeafBranch className="w-10 h-16 text-[#c6d4bf]" />
        </div>

        {/* Center Countdown Unit */}
        <div className="w-full sm:w-auto text-center">
          <p className="font-outfit uppercase tracking-[0.3em] text-[11px] sm:text-xs text-[#dce7d6] font-medium mb-6">
            THE BIG DAY
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-8 items-center max-w-lg mx-auto">
            
            {/* Days */}
            <div className="flex flex-col items-center">
              <span className="font-cormorant text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="font-outfit uppercase tracking-[0.25em] text-[9px] sm:text-[10px] text-[#c7d5c0] mt-1">
                DAYS
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center border-l border-[#788871]/50 pl-2 sm:pl-8">
              <span className="font-cormorant text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-outfit uppercase tracking-[0.25em] text-[9px] sm:text-[10px] text-[#c7d5c0] mt-1">
                HOURS
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center border-l border-[#788871]/50 pl-2 sm:pl-8">
              <span className="font-cormorant text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-outfit uppercase tracking-[0.25em] text-[9px] sm:text-[10px] text-[#c7d5c0] mt-1">
                MINUTES
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center border-l border-[#788871]/50 pl-2 sm:pl-8">
              <span className="font-cormorant text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-outfit uppercase tracking-[0.25em] text-[9px] sm:text-[10px] text-[#c7d5c0] mt-1">
                SECONDS
              </span>
            </div>

          </div>
        </div>

        {/* Right Branch Graphic */}
        <div className="hidden sm:block opacity-60 transform scale-x-[-1] rotate-12">
          <SideLeafBranch className="w-10 h-16 text-[#c6d4bf]" />
        </div>

      </div>
    </section>
  );
}
