import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
  Grid,
  Hammer,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { ServiceIcon } from './ServiceDetailPage';
import { useSite } from '../context/SiteContext';

export default function ServicesPage() {
  const { services, serviceCategories, company } = useSite();
  const [searchParams] = useSearchParams();
  const initialCategoryParam = searchParams.get('cat') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategoryParam);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Comprehensive Services & Categories | ${company.name}`;
  }, [company]);

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.categoryName.toLowerCase() === selectedCategory.toLowerCase() || s.categoryId === selectedCategory);

  const cleanPhone = company.phone ? company.phone.replace(/[^0-9+]/g, '') : '+919876543210';

  return (
    <div className="pt-28 pb-24 bg-charcoal-950 min-h-screen">
      {/* Header Banner */}
      <div className="relative py-16 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Complete Home Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-50">
            Our <span className="gold-gradient-text">13 Service Categories</span>
          </h1>
          <p className="mt-4 text-warm-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            From plot soil testing and 3D architectural blueprints to turnkey civil construction, modular kitchens, and custom woodwork — engage our services individually or as an integrated complete home solution.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/#build-your-home"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-gold-glow transition"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Build Your Home (Choose Multiple Services)</span>
            </Link>
            <a
              href={`tel:${cleanPhone}`}
              className="px-6 py-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 text-warm-100 font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>Call For Consultation</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Category Pills Filter */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-warm-400 border-b border-charcoal-800 pb-3">
            <span>Filter by Category ({serviceCategories.length} Specialized Disciplines):</span>
            <span className="text-gold-400 font-semibold">{filteredServices.length} Services Displayed</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === 'All'
                  ? 'bg-gold-500 text-charcoal-950 shadow-gold-glow'
                  : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
              }`}
            >
              All Categories ({services.length})
            </button>

            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  selectedCategory.toLowerCase() === cat.name.toLowerCase() || selectedCategory === cat.id
                    ? 'bg-gold-500 text-charcoal-950 shadow-gold-glow'
                    : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
                }`}
              >
                <span className="font-serif font-black text-[11px] opacity-70">{cat.code}.</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Master Categories Overview Carousel / Cards if 'All' is selected */}
        {selectedCategory === 'All' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  Disciplines Overview
                </span>
                <h2 className="text-2xl font-serif font-bold text-warm-50 mt-0.5">
                  13 Specialized Category Pillars (A through M)
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {serviceCategories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-charcoal-850 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-colors shadow-sm">
                        <ServiceIcon name={cat.icon} className="w-6 h-6" />
                      </div>
                      <span className="font-serif font-black text-2xl text-charcoal-700 group-hover:text-gold-400/30 transition-colors">
                        {cat.code}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-warm-50 group-hover:text-gold-400 transition">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-warm-400 mt-2 line-clamp-2 leading-relaxed">
                      {cat.shortDesc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-charcoal-800/80">
                      <span className="text-[11px] text-warm-400 uppercase tracking-wider block mb-2 font-medium">
                        Sub-services ({cat.subServices.length}):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.subServices.slice(0, 3).map((sub, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-charcoal-850 text-[10px] text-warm-300 border border-charcoal-800"
                          >
                            {sub}
                          </span>
                        ))}
                        {cat.subServices.length > 3 && (
                          <span className="text-[10px] text-gold-400 self-center">
                            +{cat.subServices.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs text-gold-400 font-semibold pt-2">
                    <span>View Category Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Service Cards Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-charcoal-800 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                Service Directory
              </span>
              <h2 className="text-2xl font-serif font-bold text-warm-50">
                {selectedCategory === 'All' ? 'Detailed Service Pages' : `${selectedCategory} Services`}
              </h2>
            </div>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-xs text-gold-400 hover:underline"
              >
                Clear filter (Show All)
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-charcoal-900 rounded-2xl border border-charcoal-800 hover:border-gold-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Service Image Header */}
                  <div className="relative h-52 w-full overflow-hidden bg-charcoal-850">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider">
                        Category {service.categoryCode} • {service.categoryName}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-gold-500 text-charcoal-950 flex items-center justify-center shadow-gold-glow">
                        <ServiceIcon name={service.icon} className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-warm-50 group-hover:text-gold-400 transition">
                        {service.title}
                      </h3>
                      <p className="text-xs text-warm-300 line-clamp-3 mt-2 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Deliverables snippet */}
                    <div className="space-y-1.5 pt-2 border-t border-charcoal-800">
                      <span className="text-[11px] uppercase tracking-wider text-warm-400 font-semibold block">
                        Deliverables:
                      </span>
                      {(service.deliverables || service.features).slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-warm-300 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full py-3 rounded-xl bg-charcoal-800 hover:bg-gold-500 text-warm-200 hover:text-charcoal-950 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition duration-200"
                  >
                    <span>View Service Details & Process</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Service Banner Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-gold-500/30 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Multi-Service Convenience</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-50">
              Need Multiple Services or Turnkey Home Construction?
            </h2>
            <p className="text-warm-300 text-sm leading-relaxed">
              Don't juggle multiple local vendors. Use our "Build Your Home" selector to choose any combination of services—from plot architecture to modular kitchen and deep polish—and receive a unified itemized estimate.
            </p>
          </div>

          <Link
            to="/#build-your-home"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-bold text-xs tracking-wider uppercase shrink-0 shadow-gold-glow flex items-center gap-2.5 transition"
          >
            <span>Launch Multi-Service Selector</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
