import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  Maximize2,
  X,
  Eye,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Info,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { useSite } from '../context/SiteContext';

export default function GalleryPage() {
  const { gallery, categories, company } = useSite();
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Curated Design Gallery | ${company.name}`;
  }, [company]);

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredGallery = gallery.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  const currentLightboxItem = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  const cleanWhatsApp = company.whatsapp ? company.whatsapp.replace(/[^0-9]/g, '') : '919876543210';
  const getWhatsAppEnquiry = (title, category) => {
    return encodeURIComponent(`Hello MNL GROUP! I saw the "${title}" (${category}) in your Design Gallery. I would like to discuss a similar concept for my project.`);
  };

  return (
    <div className="pt-28 pb-24 bg-charcoal-950 min-h-screen">
      {/* Banner */}
      <div className="relative py-16 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Visual Portfolio & 3D Blueprints
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-50">
            Curated Design <span className="gold-gradient-text">Gallery</span>
          </h1>
          <p className="mt-4 text-warm-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Browse our spatial blueprints, photorealistic 3D elevations, construction sites, and bespoke interiors spanning 12 specialized architectural categories.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-warm-400">
            <Info className="w-3.5 h-3.5 text-gold-400" />
            <span>Sample designs and conceptual visualizations are clearly identified to maintain absolute professional transparency.</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-warm-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search concepts, elevations, materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-900 border border-charcoal-800 focus:border-gold-500 focus:outline-none text-warm-100 text-xs transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-400 hover:text-warm-100"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-xs text-warm-400">
            Showing <span className="text-gold-400 font-bold">{filteredGallery.length}</span> curated visuals
          </div>
        </div>

        {/* Category Pills */}
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
            All Designs ({gallery.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat.name
                  ? 'bg-gold-500 text-charcoal-950 shadow-gold-glow'
                  : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        {filteredGallery.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-charcoal-900/50 rounded-2xl border border-charcoal-800">
            <Sparkles className="w-8 h-8 text-gold-400 mx-auto opacity-60" />
            <h3 className="text-lg font-serif font-bold text-warm-100">No designs match your criteria</h3>
            <p className="text-xs text-warm-400">Try selecting a different category or clearing your search keywords.</p>
            <button
              type="button"
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-2 px-5 py-2.5 rounded-xl bg-charcoal-800 text-xs font-semibold uppercase text-gold-400 hover:bg-gold-500 hover:text-charcoal-950 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group cursor-pointer relative h-80 rounded-2xl overflow-hidden border border-charcoal-800 hover:border-gold-500/50 transition-all duration-500 shadow-xl bg-charcoal-900"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-charcoal-900/90 border border-gold-500/30 text-[10px] font-semibold uppercase tracking-widest text-gold-400 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal-900/80 border border-gold-500/40 text-gold-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] uppercase tracking-wider text-charcoal-400 bg-charcoal-950/70 px-2 py-0.5 rounded">
                      Sample Format
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-warm-50 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-warm-300 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                  <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-gold-400 uppercase tracking-wider">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click for Fullscreen Lightbox</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Lightbox */}
      {currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/95 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-charcoal-900/80 hover:bg-gold-500 text-warm-200 hover:text-charcoal-950 border border-charcoal-700 flex items-center justify-center transition shadow-xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-charcoal-900/80 hover:bg-gold-500 text-warm-200 hover:text-charcoal-950 border border-charcoal-700 flex items-center justify-center transition shadow-xl"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full bg-charcoal-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-charcoal-950/80 text-warm-200 hover:text-gold-400 flex items-center justify-center border border-charcoal-700 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative flex-1 bg-charcoal-950 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[60vh]">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="w-full h-full object-contain max-h-[60vh]"
              />
              <span className="absolute bottom-3 right-3 text-[10px] text-charcoal-400 bg-charcoal-950/80 px-2.5 py-1 rounded">
                Item {lightboxIndex + 1} of {filteredGallery.length}
              </span>
            </div>

            <div className="p-6 bg-charcoal-900 border-t border-charcoal-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold">
                    {currentLightboxItem.category}
                  </span>
                  <span className="text-[10px] text-warm-400 bg-charcoal-850 px-2 py-0.5 rounded">
                    Sample Conceptual Design
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-warm-50">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-xs text-warm-300 max-w-xl leading-relaxed">
                  {currentLightboxItem.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <a
                  href={`https://wa.me/${cleanWhatsApp}?text=${getWhatsAppEnquiry(currentLightboxItem.title, currentLightboxItem.category)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 transition"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <Link
                  to={`/contact?service=${encodeURIComponent(currentLightboxItem.category)}`}
                  onClick={closeLightbox}
                  className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 transition"
                >
                  <span>Request Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
