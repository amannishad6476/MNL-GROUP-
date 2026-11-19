import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, X, ArrowRight, Eye } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ImageWithFallback from '../common/ImageWithFallback';
import { useSite } from '../../context/SiteContext';

export default function GalleryPreview() {
  const { gallery, categories } = useSite();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden" id="gallery">
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Design Gallery"
          title="Architectural Masterpieces & Interior Elegance"
          subtitle="Explore modern villas, lavish bedrooms, bespoke kitchens, and contemporary house elevations engineered to inspire."
        />

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start lg:justify-center">
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
              activeCategory === 'All'
                ? 'bg-gold-500 text-charcoal-950 shadow-gold-glow'
                : 'bg-charcoal-800 text-warm-300 hover:text-gold-400 hover:bg-charcoal-700 border border-charcoal-700'
            }`}
          >
            All Designs ({gallery.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.name
                  ? 'bg-gold-500 text-charcoal-950 shadow-gold-glow'
                  : 'bg-charcoal-800 text-warm-300 hover:text-gold-400 hover:bg-charcoal-700 border border-charcoal-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.slice(0, 9).map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group cursor-pointer relative h-80 rounded-2xl overflow-hidden border border-charcoal-700/60 hover:border-gold-500/50 transition-all duration-500 shadow-lg"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-charcoal-900/90 border border-gold-500/30 text-[10px] font-semibold uppercase tracking-widest text-gold-400 backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal-900/80 border border-gold-500/40 text-gold-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="font-serif font-bold text-lg text-warm-50 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-warm-300 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
                <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-gold-400 uppercase tracking-wider">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to view larger</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 border border-gold-500/40 text-warm-100 hover:text-gold-400 font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group"
          >
            <span>Explore Complete Design Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-charcoal-900 border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-charcoal-950/80 text-warm-200 hover:text-gold-400 flex items-center justify-center border border-charcoal-700 transition"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-charcoal-950 flex items-center justify-center">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain max-h-[65vh]"
              />
            </div>

            <div className="p-6 bg-charcoal-900 border-t border-charcoal-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold">
                  {lightboxItem.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-warm-50 mt-0.5">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-warm-300 mt-1 max-w-xl">
                  {lightboxItem.description}
                </p>
              </div>

              <Link
                to={`/contact?service=${encodeURIComponent(lightboxItem.category)}`}
                onClick={() => setLightboxItem(null)}
                className="px-5 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs tracking-wider uppercase shrink-0 transition-colors"
              >
                Inquire This Style &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
