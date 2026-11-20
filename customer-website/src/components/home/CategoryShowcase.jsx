import React from 'react';
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
  Grid,
  Hammer,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { useSite } from '../../context/SiteContext';
import { ServiceIcon } from '../../pages/ServiceDetailPage';

export default function CategoryShowcase() {
  const { serviceCategories } = useSite();

  return (
    <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden" id="categories">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="13 Master Disciplines"
          title="Explore Our Core Service Categories"
          subtitle="Organized into 13 engineering and architectural disciplines (A through M), covering every phase of your property from ground foundation to bespoke interior furnishing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/services?cat=${encodeURIComponent(cat.name)}`}
              className="p-6 rounded-2xl bg-charcoal-850/90 border border-charcoal-700/80 hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-card-dark"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-colors shadow-sm">
                    <ServiceIcon name={cat.icon} className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-black text-2xl text-charcoal-700 group-hover:text-gold-400/40 transition-colors">
                    {cat.code}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-warm-50 group-hover:text-gold-400 transition">
                  {cat.name}
                </h3>
                <p className="text-xs text-warm-300 mt-2 line-clamp-2 leading-relaxed">
                  {cat.shortDesc}
                </p>

                <div className="mt-4 pt-3 border-t border-charcoal-750">
                  <span className="text-[10px] text-warm-400 uppercase tracking-wider block mb-2 font-medium">
                    Includes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.subServices.slice(0, 3).map((sub, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-charcoal-900 text-[10px] text-warm-300 border border-charcoal-750"
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
                <span>View Category Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-charcoal-800 hover:bg-gold-500 text-warm-200 hover:text-charcoal-950 font-semibold text-xs tracking-wider uppercase border border-charcoal-700 transition duration-300"
          >
            <span>View All Detailed Services Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
