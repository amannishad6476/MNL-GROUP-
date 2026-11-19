import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Compass,
  Palette,
  Home,
  Brush,
  ShieldCheck,
  Layers,
  CookingPot,
  Armchair,
  Zap,
  Wrench,
  Hammer,
  ArrowRight,
  CheckCircle,
  X,
  PhoneCall
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ImageWithFallback from '../common/ImageWithFallback';
import { useSite } from '../../context/SiteContext';

export const ServiceIcon = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'Building2': return <Building2 className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Brush': return <Brush className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'CookingPot': return <CookingPot className={className} />;
    case 'Armchair': return <Armchair className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Wrench': return <Wrench className={className} />;
    case 'Hammer': return <Hammer className={className} />;
    default: return <Building2 className={className} />;
  }
};

export default function ServicesGrid({ limit = 12 }) {
  const { services, company } = useSite();
  const [selectedService, setSelectedService] = useState(null);

  const displayedServices = limit ? services.slice(0, limit) : services;
  const cleanPhone = company.phone ? company.phone.replace(/[^0-9+]/g, '') : '+919876543210';

  return (
    <section className="py-20 md:py-28 bg-charcoal-950 relative overflow-hidden" id="services">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Our Services"
          title="Turnkey Solutions Crafted with Mastery"
          subtitle="From foundation engineering to bespoke interior styling, explore our complete suite of 12 specialized architectural and construction services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="group bg-charcoal-900/90 rounded-2xl border border-charcoal-800 hover:border-gold-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-dark relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-5 border border-charcoal-700/60">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
                  
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-charcoal-900/90 border border-gold-500/30 text-[10px] font-semibold uppercase tracking-wider text-gold-400 backdrop-blur-md">
                    {service.category}
                  </span>

                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-charcoal-900/95 border border-gold-500/40 text-gold-400 flex items-center justify-center shadow-lg">
                    <ServiceIcon name={service.icon} className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-warm-50 group-hover:text-gold-400 transition-colors mb-2.5">
                  {service.title}
                </h3>

                <p className="text-warm-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.shortDesc}
                </p>

                {service.features && (
                  <ul className="space-y-1.5 mb-5 text-xs text-warm-300">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-500/80 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="text-xs text-warm-400 hover:text-warm-100 transition-colors"
                >
                  Enquire &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-md animate-fade-in">
            <div className="bg-charcoal-900 border border-gold-500/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-charcoal-800 text-warm-300 hover:text-gold-400 flex items-center justify-center border border-charcoal-700 transition"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-60 w-full overflow-hidden">
                <ImageWithFallback
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-2.5 py-1 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-warm-50 mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">
                    Scope of Work & Specification
                  </h4>
                  <p className="text-warm-200 text-sm md:text-base leading-relaxed">
                    {selectedService.fullDesc}
                  </p>
                </div>

                {selectedService.features && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
                      Key Highlights & Quality Standards
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.features.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-warm-200 p-2.5 rounded-lg bg-charcoal-850 border border-charcoal-800">
                          <CheckCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-charcoal-800 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-warm-300 hover:text-gold-400"
                  >
                    <PhoneCall className="w-4 h-4 text-gold-400" />
                    <span>Call Architect: {company.phone}</span>
                  </a>

                  <Link
                    to={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    Request Custom Quote &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
