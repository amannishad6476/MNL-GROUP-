import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export default function WhatsAppFloat() {
  const { company } = useSite();
  const [showTooltip, setShowTooltip] = useState(false);

  const cleanPhone = company.phone ? company.phone.replace(/[^0-9+]/g, '') : '+919876543210';
  const cleanWhatsApp = company.whatsapp ? company.whatsapp.replace(/[^0-9]/g, '') : '919876543210';
  const encodedWaMsg = encodeURIComponent(company.whatsappMessage || "Hello MNL GROUP! I'd like to get an estimate for my construction project.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Tooltip banner */}
      {showTooltip && (
        <div className="bg-charcoal-900 border border-gold-500/30 text-warm-100 p-3 rounded-xl shadow-2xl max-w-xs mb-1 animate-fade-in text-xs relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-charcoal-500 hover:text-warm-200"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-gold-400 mb-1">Direct Architect Consultation</p>
          <p className="text-warm-300">Message our senior project team instantly on WhatsApp for floor plans, BOQ, and site visits.</p>
        </div>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${cleanPhone}`}
        className="w-12 h-12 rounded-full bg-charcoal-850 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-charcoal-950 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        title="Call MNL GROUP"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 group-hover:animate-bounce" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${cleanWhatsApp}?text=${encodedWaMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-950/60 transition-all duration-300 hover:scale-110 group"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-75" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
