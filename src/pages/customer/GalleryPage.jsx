import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Maximize2, X, ArrowRight, Eye, Sparkles } from 'lucide-react';
import ImageWithFallback from '../../components/common/ImageWithFallback';
import { useSite } from '../../context/SiteContext';

export default function GalleryPage() {
  const { gallery, categories, company } = useSite();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Design Gallery | ${company.name}`;
  }, [company]);

  // Filter gallery by category and search keyword
  const filteredGallery = gallery.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-charcoal-950 min-h-screen">
      {/* Page Header */}
      <div className="relative py-16 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Curated Architectural Visuals
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-50">
            Design <span className="gold-gradient-text">Gallery</span>
          </h1>
          <p className="mt-4 text-warm-300 text-base md:text-lg max-w-2xl mx-auto">
            Browse our curated spatial blueprints, modern elevations, and high-end residential interiors spanning 9 bespoke categories.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        {/* Search and Filters Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-warm-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search designs or styles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-charcoal-900 border border-charcoal-800 focus:border-gold-500 focus:outline-none text-warm-100 text-xs transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-400 hover:text-warm-100"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Result counter */}
          <span className="text-xs text-warm-400">
            Showing <strong className="text-gold-400">{filteredGallery.length}</strong> architectural designs
          </span>
        </div>

        {/* Categories Tab Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'All'
                ? 'bg-gold-500 text-charcoal-950 shadow-gold-glow'
                : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
            }`}
          >
            All Categories ({gallery.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.name
                  ? 'bg-gold-500 text-charcoal-950 shadow-gold-glow'
                  : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredGallery.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-charcoal-900/50 rounded-2xl border border-charcoal-800">
            <Sparkles className="w-8 h-8 text-gold-400 mx-auto opacity-60" />
            <h3 className="text-lg font-serif font-bold text-warm-100">No designs match your criteria</h3>
            <p className="text-xs text-warm-400">Try selecting a different category or clearing your search keywords.</p>
            <button
              type="button"
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-2 px-4 py-2 rounded-lg bg-charcoal-800 text-xs font-semibold uppercase text-gold-400"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group cursor-pointer relative h-80 rounded-2xl overflow-hidden border border-charcoal-800 hover:border-gold-500/50 transition-all duration-500 shadow-xl bg-charcoal-900"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-charcoal-900/90 border border-gold-500/30 text-[10px] font-semibold uppercase tracking-widest text-gold-400 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal-900/80 border border-gold-500/40 text-gold-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif font-bold text-lg text-warm-50 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-warm-300 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                  <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-gold-400 uppercase tracking-wider">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Inspection Lightbox</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
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
              aria-label="Close"
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
                Inquire For This Style &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
