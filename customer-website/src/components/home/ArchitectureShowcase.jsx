import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, CheckCircle2, ArrowRight, Eye, Sparkles } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export default function ArchitectureShowcase() {
  const architecturalFeatures = [
    {
      title: "2D Vastu Floor Plans",
      desc: "Optimized spatial circulation maximizing usable carpet area, natural cross-ventilation, and directional Vastu harmony."
    },
    {
      title: "Photorealistic 3D Elevations",
      desc: "Daytime and twilight exterior renderings showcasing actual stone textures, timber louvers, and architectural lighting."
    },
    {
      title: "BIM Structural Coordination",
      desc: "Detailed reinforcement schedules and MEP layout integration preventing costly on-site structural clashes."
    },
    {
      title: "Virtual Walkthrough Tours",
      desc: "Experience room volumes, ceiling heights, and view angles digitally before breaking ground on your plot."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-charcoal-950 relative overflow-hidden" id="architecture-showcase">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Gallery Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-charcoal-700 shadow-2xl group">
              <div className="aspect-[16/10] w-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="3D Architectural Facade Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-warm-300">
                <span className="px-3 py-1 rounded-full bg-charcoal-900/80 border border-gold-500/30 text-gold-400 font-semibold backdrop-blur-md">
                  3D Villa Exterior Concept
                </span>
                <span className="text-[10px] uppercase tracking-wider text-charcoal-400 bg-charcoal-950/70 px-2 py-0.5 rounded">
                  Sample Design Representation
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-charcoal-800 aspect-[4/3] group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                  alt="2D Architectural Blueprint"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] uppercase tracking-wider text-gold-400 bg-charcoal-900/90 px-2 py-0.5 rounded font-semibold">
                  2D Floor Blueprints
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-charcoal-800 aspect-[4/3] group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                  alt="3D Walkthrough View"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] uppercase tracking-wider text-gold-400 bg-charcoal-900/90 px-2 py-0.5 rounded font-semibold">
                  Photorealistic 3D Renders
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>Category B • Architecture & Planning</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-warm-50 leading-tight">
              Architectural Mastery Before Breaking Ground
            </h2>

            <p className="text-warm-300 text-sm sm:text-base leading-relaxed">
              Every landmark starts on our drafting tables. We merge cutting-edge 3D CAD modeling with environmental orientation so you can test spatial layouts, window sunlight orientations, and facade materials digitally before construction commences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {architecturalFeatures.map((feat, i) => (
                <div key={i} className="p-4 rounded-xl bg-charcoal-900 border border-charcoal-800 space-y-1.5">
                  <h4 className="text-sm font-serif font-bold text-warm-50 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{feat.title}</span>
                  </h4>
                  <p className="text-xs text-warm-400 leading-relaxed pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4 flex-wrap">
              <Link
                to="/services/architecture-and-design"
                className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-gold-glow transition"
              >
                <span>Explore Architectural Planning</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/gallery?cat=3D%20Designs"
                className="px-6 py-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 text-warm-200 text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition"
              >
                <Eye className="w-4 h-4 text-gold-400" />
                <span>View 3D Designs</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
