import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import { LeafLogo } from './BotanicalIcons';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenRsvp, onOpenGallery, autoStartSignal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f2eee5]/90 backdrop-blur-md border-b border-[#e2dacb] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <LeafLogo className="w-5 h-5 text-[#4e5c48] group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-cormorant text-lg sm:text-xl tracking-[0.25em] font-semibold text-[#3a4435] uppercase">
            Vyshnav <span className="font-light text-[#63725d]">&</span> Pooja
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-outfit uppercase tracking-[0.2em] font-medium text-[#53624e]">
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:text-[#252e22] transition-colors py-1 border-b-2 border-transparent hover:border-[#53624e] focus:outline-none"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('story')}
            className="hover:text-[#252e22] transition-colors py-1 border-b-2 border-transparent hover:border-[#53624e] focus:outline-none"
          >
            Our Story
          </button>
          <button 
            onClick={() => scrollToSection('details')}
            className="hover:text-[#252e22] transition-colors py-1 border-b-2 border-transparent hover:border-[#53624e] focus:outline-none"
          >
            Details
          </button>
          <button 
            onClick={onOpenGallery}
            className="hover:text-[#252e22] transition-colors py-1 border-b-2 border-transparent hover:border-[#53624e] focus:outline-none"
          >
            Gallery
          </button>
          <button 
            onClick={onOpenRsvp}
            className="hover:text-[#252e22] transition-colors py-1 border-b-2 border-transparent hover:border-[#53624e] focus:outline-none"
          >
            RSVP
          </button>
        </nav>

        {/* Right Action: Music Toggle & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <AudioPlayer autoStartSignal={autoStartSignal} />

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4e5c48] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#eae4d7] border-b border-[#dcd3c3] px-6 py-4 space-y-4 animate-fadeIn">
          <button 
            onClick={() => scrollToSection('home')}
            className="block w-full text-left font-outfit uppercase tracking-widest text-xs py-2 text-[#465441]"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('story')}
            className="block w-full text-left font-outfit uppercase tracking-widest text-xs py-2 text-[#465441]"
          >
            Our Story
          </button>
          <button 
            onClick={() => scrollToSection('details')}
            className="block w-full text-left font-outfit uppercase tracking-widest text-xs py-2 text-[#465441]"
          >
            Details
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenGallery(); }}
            className="block w-full text-left font-outfit uppercase tracking-widest text-xs py-2 text-[#465441]"
          >
            Gallery
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenRsvp(); }}
            className="block w-full text-left font-outfit uppercase tracking-widest text-xs py-2 text-[#465441]"
          >
            RSVP
          </button>
        </div>
      )}
    </header>
  );
}
