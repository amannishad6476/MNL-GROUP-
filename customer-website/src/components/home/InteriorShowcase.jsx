import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, CookingPot, Armchair, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

const interiorPillars = [
  {
    id: 'int-living',
    title: 'Double-Height Living Rooms',
    category: 'Category C • Interior Design',
    desc: 'Bookmatched Italian marble feature walls, smarthome ambient cove lighting, and custom bespoke sofas.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    link: '/services/living-room-interior'
  },
  {
    id: 'int-kitchen',
    title: 'German-Hardware Modular Kitchens',
    category: 'Category F • Kitchen Solutions',
    desc: 'BWP marine-grade plywood carcasses, soft-close Blum runners, quartz islands, and corner carousel units.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    link: '/services/modular-kitchen'
  },
  {
    id: 'int-bedroom',
    title: 'Master Suites & Walk-In Wardrobes',
    category: 'Category G • Furniture & Woodwork',
    desc: 'Fluted glass sliding wardrobes, sensor lighting, acoustic headboard paneling, and chevron wood flooring.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
    link: '/services/furniture-and-woodwork'
  },
  {
    id: 'int-ceiling',
    title: 'Architectural False Ceilings',
    category: 'Category H • Ceiling and Lighting',
    desc: 'Seamless Saint-Gobain gypsum ceilings with magnetic track lights, perimeter reveals, and acoustic rafters.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    link: '/services/ceiling-and-lighting'
  }
];

export default function InteriorShowcase() {
  return (
    <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden" id="interior-showcase">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">
              <Palette className="w-3.5 h-3.5" />
              <span>Bespoke Interior Craftsmanship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-warm-50 leading-tight">
              Interior Elegance & Modular Mastery
            </h2>
            <p className="mt-2 text-warm-300 text-xs sm:text-sm max-w-xl">
              From Italian marble floors and magnetic track ceilings to factory-pressed modular kitchens and custom wardrobes — experience interior luxury crafted without compromises.
            </p>
          </div>

          <Link
            to="/services?cat=Interior%20Design"
            className="text-xs text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1.5 shrink-0"
          >
            <span>Explore All Interior Disciplines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interiorPillars.map((item) => (
            <div
              key={item.id}
              className="group bg-charcoal-850 rounded-2xl border border-charcoal-700/80 hover:border-gold-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-charcoal-800">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-gold-400 bg-charcoal-950/80 px-2.5 py-1 rounded backdrop-blur-md border border-gold-500/30 font-semibold">
                    {item.category}
                  </span>
                  <span className="absolute bottom-2 right-2 text-[9px] uppercase tracking-wider text-charcoal-400 bg-charcoal-950/80 px-2 py-0.5 rounded">
                    Sample Format
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-serif font-bold text-warm-50 group-hover:text-gold-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-warm-300 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to={item.link}
                  className="w-full py-2.5 rounded-xl bg-charcoal-800 hover:bg-gold-500 text-warm-200 hover:text-charcoal-950 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition"
                >
                  <span>Details & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
