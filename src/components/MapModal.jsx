import React from 'react';
import { X, MapPin, Navigation, ExternalLink, Utensils, Sparkles } from 'lucide-react';

export default function MapModal({ isOpen, onClose, venueType = 'temple' }) {
  if (!isOpen) return null;

  const isReception = venueType === 'reception';

  const venueInfo = isReception
    ? {
        title: "Baburaj Auditorium",
        subtitle: "Santhi Nagar, Chengaloor",
        timing: "December 13, 2026 • 11:30 AM Onwards",
        badge: "Reception Venue",
        icon: Utensils,
        searchQuery: "Baburaj+Auditorium+Santhi+Nagar+Chengaloor",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.3!2d76.28!3d10.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7e63b65555555%3A0x1!2sBaburaj%20Auditorium%20Chengaloor!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      }
    : {
        title: "Guruvayoor Sree Krishna Temple",
        subtitle: "Guruvayoor, Thrissur District, Kerala",
        timing: "December 13, 2026 • 6:00 AM – 7:00 AM",
        badge: "Wedding Ceremony Venue",
        icon: Sparkles,
        searchQuery: "Guruvayoor+Sree+Krishna+Temple+Thrissur+Kerala",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.7302488812674!2d76.0378036!3d10.5956965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba79541a7f0e0c1%3A0x6ec0c5112fa5ee11!2sGuruvayur%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${venueInfo.searchQuery}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#f5f1e8] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#ded5c5] relative overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#5a6755] hover:text-black rounded-full hover:bg-[#e4ddd0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-[#56654f] text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
            <MapPin className="w-6 h-6" />
          </div>

          <p className="font-outfit uppercase tracking-[0.25em] text-[10px] text-[#63725d] font-semibold">
            {venueInfo.badge}
          </p>

          <h3 className="font-cormorant text-3xl text-[#2e372a] font-medium mt-1">
            {venueInfo.title}
          </h3>

          <p className="font-cormorant text-base text-[#5c6956] italic">
            {venueInfo.subtitle}
          </p>
        </div>

        {/* Map Frame */}
        <div className="rounded-xl overflow-hidden border border-[#d2c7b5] shadow-inner mb-6 bg-[#eae3d5] h-64 sm:h-72 relative">
          <iframe
            title={venueInfo.title}
            src={venueInfo.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#eae4d5] p-4 rounded-xl border border-[#d8cdbc]">
          <div>
            <p className="font-outfit text-xs font-semibold uppercase text-[#3e4a39]">
              Event Schedule
            </p>
            <p className="font-cormorant text-base text-[#56654f] font-medium">
              {venueInfo.timing}
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#56654f] hover:bg-[#43503d] text-white px-5 py-2.5 rounded-full font-outfit text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open Directions in Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
