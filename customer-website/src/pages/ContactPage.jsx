import React, { useEffect } from 'react';
import ContactSection from '../components/home/ContactSection';
import { useSite } from '../context/SiteContext';
import { MapPin, Navigation } from 'lucide-react';

export default function ContactPage() {
  const { company } = useSite();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Contact Us | ${company.name}`;
  }, [company]);

  return (
    <div className="pt-28 pb-16 bg-charcoal-950 min-h-screen">
      <div className="relative py-16 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Consultation & Estimations
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-50">
            Contact <span className="gold-gradient-text">{company.name}</span>
          </h1>
          <p className="mt-4 text-warm-300 text-base md:text-lg max-w-2xl mx-auto">
            Schedule an architectural consultation, request an itemized BOQ estimate, or discuss your upcoming turnkey project.
          </p>
        </div>
      </div>

      <ContactSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl bg-charcoal-900 border border-charcoal-800 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-charcoal-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                Corporate Headquarters
              </span>
              <h3 className="text-xl font-serif font-bold text-warm-50">
                {company.name} Experience Center & Studio
              </h3>
              <p className="text-xs text-warm-300 mt-1">
                {company.address}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-charcoal-850 border border-gold-500/30 text-gold-400 text-xs font-medium flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5" />
                <span>Visitor Parking Available</span>
              </span>
            </div>
          </div>

          <div className="relative h-80 w-full bg-charcoal-850 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 text-center p-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-gold-500/20 border-2 border-gold-400 text-gold-400 flex items-center justify-center mx-auto shadow-gold-glow animate-bounce">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="text-base font-serif font-bold text-warm-50">
                {company.name} Corporate Center
              </h4>
              <p className="text-xs text-warm-300 max-w-md mx-auto">
                {company.address} • {company.workingHours}
              </p>
              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(company.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
