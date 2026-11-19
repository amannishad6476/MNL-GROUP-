import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, PhoneCall, ArrowRight } from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { ServiceIcon } from '../components/home/ServicesGrid';
import { useSite } from '../context/SiteContext';

export default function ServicesPage() {
  const { services, company } = useSite();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Our Services | ${company.name}`;
  }, [company]);

  const categories = ['All', ...new Set(services.map(s => s.category))];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory);

  const cleanPhone = company.phone ? company.phone.replace(/[^0-9+]/g, '') : '+919876543210';

  return (
    <div className="pt-28 pb-20 bg-charcoal-950">
      <div className="relative py-16 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            End-To-End Architecture & Construction
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-50">
            Our <span className="gold-gradient-text">Specialized Services</span>
          </h1>
          <p className="mt-4 text-warm-300 text-base md:text-lg max-w-2xl mx-auto">
            12 integrated architectural, civil, and interior disciplines delivered with engineering precision and turnkey accountability.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-gold-500 text-charcoal-950 shadow-gold-glow'
                  : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
              }`}
            >
              {cat === 'All' ? `All Services (${services.length})` : cat}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {filteredServices.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="p-8 sm:p-10 rounded-3xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 shadow-xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-charcoal-700/80 shadow-2xl">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-900/90 border border-gold-500/30 text-[10px] font-semibold uppercase tracking-wider text-gold-400 backdrop-blur-md">
                        {service.category}
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-warm-200">
                        <div className="w-8 h-8 rounded-lg bg-charcoal-900/90 border border-gold-500/40 text-gold-400 flex items-center justify-center">
                          <ServiceIcon name={service.icon} className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-warm-50">{service.title}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                        Discipline #{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-50">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-warm-300 text-sm leading-relaxed">
                      {service.fullDesc || service.shortDesc}
                    </p>

                    {service.features && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-warm-200 p-2.5 rounded-xl bg-charcoal-850 border border-charcoal-800">
                            <CheckCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-gold-glow flex items-center gap-2"
                      >
                        <span>Enquire for {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={`tel:${cleanPhone}`}
                        className="px-5 py-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 hover:border-gold-500/40 text-warm-200 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
                      >
                        <PhoneCall className="w-4 h-4 text-gold-400" />
                        <span>Direct Architect Query</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
