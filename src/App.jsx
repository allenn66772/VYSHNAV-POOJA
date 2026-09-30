import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import StorySection from './components/StorySection';
import DetailsSection from './components/DetailsSection';
import RsvpSection from './components/RsvpSection';
import FooterSection from './components/FooterSection';
import RsvpModal from './components/RsvpModal';
import GalleryModal from './components/GalleryModal';
import MapModal from './components/MapModal';
import InvitationCover from './components/InvitationCover';

export default function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [mapModalConfig, setMapModalConfig] = useState({ isOpen: false, venueType: 'temple' });

  const handleOpenMap = (venueType) => {
    setMapModalConfig({ isOpen: true, venueType });
  };

  return (
    <div className="min-h-screen bg-[#f2eee5] text-[#3d4637] flex flex-col font-cormorant selection:bg-[#56654f] selection:text-white relative">
      
      {/* Tap to Open Invitation Interactive Cover Envelope */}
      {!isCoverOpen && (
        <InvitationCover onOpen={() => setIsCoverOpen(true)} />
      )}

      {/* Navigation Header */}
      <Navbar 
        onOpenRsvp={() => setIsRsvpOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
        autoStartSignal={isCoverOpen}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <HeroSection />

        {/* Real-time Live Countdown Section */}
        <CountdownSection />

        {/* Our Story Polaroid & Narrative Section */}
        <StorySection 
          onOpenGallery={() => setIsGalleryOpen(true)} 
        />

        {/* Wedding Event Details Section (Ceremony & Reception at Rak Plaza Punnakuru) */}
        <DetailsSection 
          onOpenMap={handleOpenMap} 
        />

        {/* RSVP & Gallery Section */}
        <RsvpSection 
          onOpenRsvp={() => setIsRsvpOpen(true)}
          onOpenGallery={() => setIsGalleryOpen(true)}
        />
      </main>

      {/* Footer Section */}
      <FooterSection />

      {/* Re-seal Invitation Floating Action Button */}
      {isCoverOpen && (
        <button
          onClick={() => setIsCoverOpen(false)}
          className="fixed bottom-4 left-4 z-40 bg-[#56654f]/90 hover:bg-[#3d4937] text-[#f2eee5] px-4 py-2 rounded-full font-outfit text-[11px] uppercase tracking-wider backdrop-blur-sm shadow-lg border border-[#ded5c5] transition-all duration-300 flex items-center gap-1.5 focus:outline-none"
          title="Re-open Cover Envelope"
        >
          <span>✉ Seal Invitation</span>
        </button>
      )}

      {/* Modals */}
      <RsvpModal 
        isOpen={isRsvpOpen} 
        onClose={() => setIsRsvpOpen(false)} 
      />

      <GalleryModal 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
      />

      <MapModal 
        isOpen={mapModalConfig.isOpen} 
        venueType={mapModalConfig.venueType}
        onClose={() => setMapModalConfig({ ...mapModalConfig, isOpen: false })} 
      />

    </div>
  );
}
