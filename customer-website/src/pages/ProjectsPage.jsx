import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { useSite } from '../context/SiteContext';

export default function ProjectsPage() {
  const { projects, company } = useSite();
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Our Projects | ${company.name}`;
  }, [company]);

  const filtered = activeTab === 'All'
    ? projects
    : projects.filter(p => p.status.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="pt-28 pb-20 bg-charcoal-950 min-h-screen">
      <div className="relative py-16 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Physical Construction Track Record
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-50">
            Our <span className="gold-gradient-text">Projects</span>
          </h1>
          <p className="mt-4 text-warm-300 text-base md:text-lg max-w-2xl mx-auto">
            Explore our finished landmarks and active residential construction sites across prime developments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="flex items-center justify-center gap-3">
          {['All', 'Completed', 'Ongoing'].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setActiveTab(status)}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === status
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 shadow-gold-glow'
                  : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
              }`}
            >
              {status === 'All' ? `All Projects (${projects.length})` : `${status} Developments`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="bg-charcoal-900 rounded-2xl border border-charcoal-800 hover:border-gold-500/40 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <ImageWithFallback
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md border ${
                      proj.status.toLowerCase() === 'completed'
                        ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                        : 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                    }`}
                  >
                    {proj.status.toLowerCase() === 'completed' ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                    )}
                    <span>{proj.status}</span>
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-charcoal-950/80 border border-gold-500/30 text-[10px] font-semibold uppercase tracking-wider text-gold-400 backdrop-blur-md">
                    {proj.category}
                  </span>
                </div>

                {proj.area && (
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-charcoal-950/80 border border-charcoal-700 text-xs text-warm-200 backdrop-blur-sm">
                    {proj.area}
                  </div>
                )}
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-warm-50 mb-2">
                    {proj.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-warm-300 mb-3">
                    <div className="flex items-center gap-1.5 text-gold-400">
                      <MapPin className="w-4 h-4" />
                      <span>{proj.location}</span>
                    </div>
                    {proj.timeline && (
                      <div className="flex items-center gap-1.5 text-warm-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Duration: {proj.timeline}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-warm-300 text-sm leading-relaxed">
                    {proj.description}
                  </p>

                  {proj.gallery && proj.gallery.length > 1 && (
                    <div className="mt-4 pt-3 border-t border-charcoal-800">
                      <span className="text-[10px] uppercase tracking-wider text-warm-400 font-semibold block mb-2">
                        Project Site Views
                      </span>
                      <div className="flex items-center gap-2">
                        {proj.gallery.map((thumb, idx) => (
                          <div key={idx} className="w-16 h-12 rounded-lg overflow-hidden border border-charcoal-700">
                            <ImageWithFallback src={thumb} alt={proj.title} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between">
                  <Link
                    to={`/contact?service=${encodeURIComponent(proj.title)}`}
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider flex items-center gap-1.5 group"
                  >
                    <span>Request Similar Project Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[10px] text-warm-400 bg-charcoal-800 px-2.5 py-1 rounded">
                    Sample Project Blueprint
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
