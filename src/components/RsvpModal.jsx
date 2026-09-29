import React, { useState } from 'react';
import { X, CheckCircle2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RsvpModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guestCount: '1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Fire confetti effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#56654f', '#a4b49c', '#d5cbb8', '#ffffff']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', attending: 'yes', guestCount: '1', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#f5f1e8] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#ded5c5] relative overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#5a6755] hover:text-black rounded-full hover:bg-[#e4ddd0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <p className="font-outfit uppercase tracking-[0.25em] text-[10px] text-[#63725d] font-semibold">
                WEDDING CELEBRATION
              </p>
              <h3 className="font-cormorant text-3xl sm:text-4xl text-[#2e372a] font-light mt-1">
                RSVP Response
              </h3>
              <p className="font-cormorant text-sm text-[#5d6a57] italic mt-1">
                Please respond by November 15, 2026
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block font-outfit text-xs uppercase tracking-wider text-[#495644] font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Nair"
                  className="w-full bg-[#eae3d5] border border-[#d2c7b5] rounded-lg px-4 py-2.5 text-sm text-[#2d3728] focus:outline-none focus:border-[#56654f] focus:ring-1 focus:ring-[#56654f] font-cormorant text-base"
                />
              </div>

              <div>
                <label className="block font-outfit text-xs uppercase tracking-wider text-[#495644] font-medium mb-1">
                  Email / Phone (Optional)
                </label>
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="For event updates"
                  className="w-full bg-[#eae3d5] border border-[#d2c7b5] rounded-lg px-4 py-2.5 text-sm text-[#2d3728] focus:outline-none focus:border-[#56654f] focus:ring-1 focus:ring-[#56654f] font-cormorant text-base"
                />
              </div>

              <div>
                <label className="block font-outfit text-xs uppercase tracking-wider text-[#495644] font-medium mb-2">
                  Will You Be Attending? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'yes' })}
                    className={`py-2.5 px-4 rounded-lg font-outfit text-xs uppercase tracking-wider border transition-all ${
                      formData.attending === 'yes'
                        ? 'bg-[#56654f] text-white border-[#56654f] shadow-sm'
                        : 'bg-[#eae3d5] text-[#4a5745] border-[#d2c7b5] hover:bg-[#ded6c6]'
                    }`}
                  >
                    Joyfully Accept ♡
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'no' })}
                    className={`py-2.5 px-4 rounded-lg font-outfit text-xs uppercase tracking-wider border transition-all ${
                      formData.attending === 'no'
                        ? 'bg-[#8c4a4a] text-white border-[#8c4a4a] shadow-sm'
                        : 'bg-[#eae3d5] text-[#4a5745] border-[#d2c7b5] hover:bg-[#ded6c6]'
                    }`}
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              {formData.attending === 'yes' && (
                <div>
                  <label className="block font-outfit text-xs uppercase tracking-wider text-[#495644] font-medium mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full bg-[#eae3d5] border border-[#d2c7b5] rounded-lg px-4 py-2.5 text-sm text-[#2d3728] focus:outline-none focus:border-[#56654f]"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Family</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block font-outfit text-xs uppercase tracking-wider text-[#495644] font-medium mb-1">
                  Wishes for Vyshnav & Pooja
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Send your warm blessings & love..."
                  className="w-full bg-[#eae3d5] border border-[#d2c7b5] rounded-lg px-4 py-2.5 text-sm text-[#2d3728] focus:outline-none focus:border-[#56654f] font-cormorant text-base resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#56654f] hover:bg-[#43503d] text-white py-3 rounded-xl font-outfit text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-md mt-2"
              >
                Send RSVP Confirmation
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#56654f] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-cormorant text-3xl text-[#2e372a] font-semibold">
              Thank You, {formData.name}!
            </h3>

            <p className="font-cormorant text-lg text-[#52604d] max-w-xs mx-auto leading-relaxed">
              {formData.attending === 'yes'
                ? `We are overjoyed that you will join us for our special day at Guruvayoor Ambalam!`
                : `Thank you for letting us know. You will be missed in our celebration!`}
            </p>

            <button
              onClick={handleReset}
              className="mt-6 bg-[#56654f] text-white px-6 py-2.5 rounded-full font-outfit text-xs uppercase tracking-widest hover:bg-[#43503d] transition-colors"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
