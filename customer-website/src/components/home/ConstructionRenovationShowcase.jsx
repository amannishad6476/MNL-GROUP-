import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Hammer, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export default function ConstructionRenovationShowcase() {
  const constructionPoints = [
    "Geotechnical soil investigation & customized foundation depth",
    "Certified Fe-550D TMT reinforcement & 43/53 grade concrete",
    "Continuous on-site supervision by certified civil engineers",
    "Non-destructive concrete cube compressive strength audits"
  ];

  const renovationPoints = [
    "Structural feasibility audit before non-load-bearing wall removal",
    "Complete replacement of outdated plumbing and electrical wiring",
    "Modern tile/marble overlays and contemporary facade remodeling",
    "Fast-track scheduled timeline minimizing household disruption"
  ];

  return (
    <section className="py-20 md:py-28 bg-charcoal-950 relative overflow-hidden" id="construction-showcase">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Structural Rigor & Rebirth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-warm-50 leading-tight">
            Civil Construction & Full Home Renovation
          </h2>
          <p className="mt-3 text-warm-300 text-sm sm:text-base leading-relaxed">
            Whether pouring fresh foundations for a bespoke multi-level villa or breathing contemporary luxury into an aging heritage property, we engineer structures to endure for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Construction Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-6">
              <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-charcoal-850">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1000&q=80"
                  alt="Civil House Construction"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-gold-400 bg-charcoal-950/80 px-2.5 py-1 rounded backdrop-blur-md border border-gold-500/30 font-semibold">
                  Category A • Ground-Up Construction
                </span>
                <span className="absolute bottom-2 right-2 text-[9px] uppercase tracking-wider text-charcoal-400 bg-charcoal-950/80 px-2 py-0.5 rounded">
                  Sample Site Representation
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-50 group-hover:text-gold-400 transition">
                  Ground-Up Residential Construction
                </h3>
                <p className="text-xs sm:text-sm text-warm-300 mt-2 leading-relaxed">
                  Engineered with seismic resistance, precision shuttering, vibrated concrete casting, and high-density red clay or autoclave aerated concrete (AAC) brickwork.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {constructionPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-warm-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Link
                to="/services/residential-house-construction"
                className="w-full py-3.5 rounded-xl bg-charcoal-800 hover:bg-gold-500 text-warm-200 hover:text-charcoal-950 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition"
              >
                <span>View Construction Specs & Milestone Process</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Renovation Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-6">
              <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-charcoal-850">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                  alt="Full Home Renovation"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-gold-400 bg-charcoal-950/80 px-2.5 py-1 rounded backdrop-blur-md border border-gold-500/30 font-semibold">
                  Category M • Turnkey Renovation
                </span>
                <span className="absolute bottom-2 right-2 text-[9px] uppercase tracking-wider text-charcoal-400 bg-charcoal-950/80 px-2 py-0.5 rounded">
                  Sample Remodel Representation
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-50 group-hover:text-gold-400 transition">
                  Comprehensive Home Renovation
                </h3>
                <p className="text-xs sm:text-sm text-warm-300 mt-2 leading-relaxed">
                  Transform compartmentalized older layouts into expansive open-plan luxury homes with upgraded MEP utilities, Italian marble floors, and modern facade elevation.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {renovationPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-warm-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Link
                to="/services/home-renovation"
                className="w-full py-3.5 rounded-xl bg-charcoal-800 hover:bg-gold-500 text-warm-200 hover:text-charcoal-950 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition"
              >
                <span>View Renovation Workflow & Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
