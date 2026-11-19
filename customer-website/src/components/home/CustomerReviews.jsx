import React from 'react';
import { Star, Quote, Info, CheckCircle } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ImageWithFallback from '../common/ImageWithFallback';
import { useSite } from '../../context/SiteContext';

export default function CustomerReviews() {
  const { reviews } = useSite();

  const publishedReviews = reviews.filter(r => r.published !== false);

  return (
    <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden" id="reviews">
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Client Testimonials"
          title="What Our Clients Say"
          subtitle="Real experiences from homeowners and property developers who entrusted their dream spaces to MNL GROUP."
        />

        {/* Editorial Notice as required */}
        <div className="max-w-2xl mx-auto mb-10 p-4 rounded-xl bg-charcoal-850/90 border border-gold-500/30 text-center flex items-center justify-center gap-2.5 text-xs text-warm-300">
          <Info className="w-4 h-4 text-gold-400 shrink-0" />
          <span>
            <strong>Editorial Notice:</strong> Sample representative formats shown below. Client review verification is managed transparently via our admin audit portal.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publishedReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-charcoal-850 border border-charcoal-700/80 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between relative shadow-lg group hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-charcoal-700/40 group-hover:text-gold-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  {rev.isDemoPlaceholder ? (
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                      Sample Format
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified Client
                    </span>
                  )}

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < (rev.rating || 5)
                            ? 'text-gold-400 fill-gold-400'
                            : 'text-charcoal-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs font-semibold text-gold-400 mb-3">
                  {rev.projectType}
                </p>

                <p className="text-warm-200 text-sm italic leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-800 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-gold-500/40 shrink-0">
                  <ImageWithFallback
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-warm-50">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-warm-400">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
