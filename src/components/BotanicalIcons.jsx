import React from 'react';

// Leaf motif logo (left side header)
export function LeafLogo({ className = "w-5 h-5 text-[#54624d]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8 7.5 9 1-.5 2-1.5 2.5-3 0 0 .5-1.5-1-2.5s-2.5-1-3-2c0 0-1-2.5 1-4.5s4.5-1 4.5-1 1 .5 2 2 1 2.5-1 3.5c-1 1-1.5 2.5-.5 3s2.5-1 3.5-2.5c1.5-2 1-5-1-6.5S12 2 12 2z"/>
      <path d="M12 22v-9"/>
    </svg>
  );
}

// Leaf motif divider line
export function LeafDivider({ className = "w-24 h-6 text-[#5c6a56] mx-auto opacity-80" }) {
  return (
    <div className="flex items-center justify-center gap-2 my-2">
      <span className="w-10 h-[1px] bg-[#667660]/40"></span>
      <svg className={className} viewBox="0 0 40 20" fill="currentColor">
        <path d="M20 2C16 6 13 12 11 18C13 16 17 14 20 14C23 14 27 16 29 18C27 12 24 6 20 2Z" opacity="0.85"/>
        <path d="M15 8C11 9 7 12 5 16C8 14 12 13 15 13" opacity="0.6"/>
        <path d="M25 8C29 9 33 12 35 16C32 14 28 13 25 13" opacity="0.6"/>
        <line x1="20" y1="2" x2="20" y2="18" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
      <span className="w-10 h-[1px] bg-[#667660]/40"></span>
    </div>
  );
}

// Side Leaf Branch (for Countdown Bar and Details Section)
export function SideLeafBranch({ className = "w-12 h-20 text-[#687862]" }) {
  return (
    <svg className={className} viewBox="0 0 60 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M30 10 Q25 50 30 90" />
      <path d="M28 25 C15 20 10 30 27 35" fill="currentColor" fillOpacity="0.15" />
      <path d="M31 35 C45 30 50 40 32 45" fill="currentColor" fillOpacity="0.15" />
      <path d="M29 48 C16 45 12 55 28 60" fill="currentColor" fillOpacity="0.15" />
      <path d="M31 62 C43 58 48 68 31 72" fill="currentColor" fillOpacity="0.15" />
      <path d="M29 78 C20 75 16 82 28 85" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

// Botanical Corner Sprig (Top/Bottom corner decoration)
export function CornerFoliage({ className = "w-40 h-40 text-[#4c5847]/40 pointer-events-none" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M10 10 C30 40 50 70 90 90" strokeWidth="1.5" />
      <path d="M25 28 C10 35 15 50 35 40 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M42 45 C25 55 30 70 52 58 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M58 62 C45 75 52 88 70 75 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M30 20 C45 10 55 25 40 32 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M48 38 C65 30 72 45 58 50 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M68 58 C82 48 90 62 76 68 Z" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}

// Temple Outline Icon (for Venue Detail)
export function TempleIcon({ className = "w-6 h-6 text-[#505f4a]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M5 21V11l7-6 7 6v10"/>
      <path d="M9 21v-6a3 3 0 0 1 6 0v6"/>
      <path d="M2 11l10-8 10 8"/>
      <path d="M12 3v2"/>
    </svg>
  );
}
