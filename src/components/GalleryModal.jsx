import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function GalleryModal({ isOpen, onClose }) {
  const [activeIdx, setActiveIdx] = useState(null);

  const images = [
    {
      src: '/images/hero_rings.jpg',
      title: 'Golden Rings & Eucalyptus Flatlay',
      caption: 'Two golden rings resting on draped sage green silk and eucalyptus foliage.'
    },
    {
      src: '/images/couple_sunset.jpg',
      title: 'Two Hearts at Sunset',
      caption: 'Vyshnav and Pooja sitting along the calm riverbank at golden sunset.'
    },
    {
      src: '/images/guruvayoor_temple.jpg',
      title: 'Guruvayoor Ambalam Architecture',
      caption: 'The majestic traditional Kerala temple venue with golden lamp post.'
    },
    {
      src: '/images/wedding_ceremony.jpg',
      title: 'Traditional Garland Rituals',
      caption: 'Joyful smiles amidst marigold flowers, jasmine garlands, and gold ornaments.'
    }
  ];

  if (!isOpen) return null;

  const handleNext = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#f5f1e8] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-[#ded5c5] relative flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#ded5c5]">
          <div>
            <p className="font-outfit uppercase tracking-[0.25em] text-[10px] text-[#63725d] font-semibold">
              PHOTO GALLERY
            </p>
            <h3 className="font-cormorant text-2xl sm:text-3xl text-[#2e372a] font-light">
              Moments of Love & Blessings
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5a6755] hover:text-black rounded-full hover:bg-[#e4ddd0] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-[#ded5c5] shadow-sm bg-[#eae3d5] aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white flex items-center justify-between w-full">
                  <div>
                    <p className="font-cormorant text-lg font-medium">{img.title}</p>
                    <p className="font-outfit text-[10px] text-white/80 uppercase tracking-wider">Click to Expand</p>
                  </div>
                  <Maximize2 className="w-4 h-4 text-white/90" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox View */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4">
          
          <button
            onClick={() => setActiveIdx(null)}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 rounded-full focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 text-white/80 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl text-center space-y-3">
            <img
              src={images[activeIdx].src}
              alt={images[activeIdx].title}
              className="max-h-[75vh] max-w-full object-contain mx-auto rounded-lg shadow-2xl"
            />
            <h4 className="font-cormorant text-2xl text-white font-medium pt-2">
              {images[activeIdx].title}
            </h4>
            <p className="font-outfit text-xs text-stone-300 max-w-lg mx-auto">
              {images[activeIdx].caption}
            </p>
            <p className="font-outfit text-[10px] text-stone-500 tracking-widest uppercase">
              {activeIdx + 1} OF {images.length}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 p-3 text-white/80 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      )}

    </div>
  );
}
