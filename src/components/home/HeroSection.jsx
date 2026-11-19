import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ChevronLeft, ChevronRight, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export default function HeroSection() {
  const { banners, company } = useSite();
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeBanners = banners.filter(b => b.active);

  // Auto advance banner slides
  useEffect(() => {
    if (activeBanners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % activeBanners.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeBanners.length]);

  if (!activeBanners.length) return null;

  const current = activeBanners[currentSlide] || activeBanners[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-32">
      {/* Background Images with smooth fade */}
      {activeBanners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105"
          />
        </div>
      ))}

      {/* Luxury Charcoal & Gold Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-950 to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-charcoal-900/80 border border-gold-500/30 text-gold-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>{current.subtitle || "Architectural & Turnkey Construction"}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-warm-50 leading-[1.1] tracking-tight mb-6">
            Building Dreams.{' '}
            <span className="block gold-gradient-text mt-1">Creating Futures.</span>
          </h1>

          {/* Short Company Introduction */}
          <p className="text-warm-200 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 max-w-2xl">
            {current.description || company.shortDescription}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12">
            <Link
              to={current.primaryButtonLink || "/services"}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-semibold text-sm tracking-wider uppercase flex items-center gap-2.5 gold-glow-btn transition-all duration-300"
            >
              <span>{current.primaryButtonText || "Explore Services"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to={current.secondaryButtonLink || "/contact"}
              className="px-7 py-3.5 rounded-xl bg-charcoal-900/80 hover:bg-charcoal-850 border border-gold-500/40 hover:border-gold-400 text-warm-100 font-semibold text-sm tracking-wider uppercase flex items-center gap-2.5 backdrop-blur-md transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>{current.secondaryButtonText || "Contact Us"}</span>
            </Link>
          </div>

          {/* Trust Value Badges (Strictly factual standards without fake counts) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-gold-500/20 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 text-warm-200">
              <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
              <div>
                <p className="font-semibold text-warm-50">Turnkey Quality</p>
                <p className="text-xs text-warm-400">Structural integrity guarantee</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-warm-200">
              <Award className="w-5 h-5 text-gold-400 shrink-0" />
              <div>
                <p className="font-semibold text-warm-50">Precision Planning</p>
                <p className="text-xs text-warm-400">2D/3D BIM architectural design</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-warm-200 col-span-2 sm:col-span-1">
              <Sparkles className="w-5 h-5 text-gold-400 shrink-0" />
              <div>
                <p className="font-semibold text-warm-50">Locked BOQ</p>
                <p className="text-xs text-warm-400">Zero hidden cost surprises</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls if multiple banners */}
      {activeBanners.length > 1 && (
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + activeBanners.length) % activeBanners.length)}
            className="w-10 h-10 rounded-full bg-charcoal-900/80 border border-gold-500/30 text-warm-200 hover:text-gold-400 hover:border-gold-400 flex items-center justify-center transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 px-2">
            {activeBanners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSlide ? 'w-6 bg-gold-400' : 'w-2 bg-charcoal-700'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % activeBanners.length)}
            className="w-10 h-10 rounded-full bg-charcoal-900/80 border border-gold-500/30 text-warm-200 hover:text-gold-400 hover:border-gold-400 flex items-center justify-center transition"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
