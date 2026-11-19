import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle2, Clock, ArrowRight, Layers } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ImageWithFallback from '../common/ImageWithFallback';
import { useSite } from '../../context/SiteContext';

export default function ProjectsSection() {
  const { projects } = useSite();
  const [filter, setFilter] = useState('All'); // 'All', 'Completed', 'Ongoing'

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.status.toLowerCase() === filter.toLowerCase());

  return (
    <section className="py-20 md:py-28 bg-charcoal-950 relative overflow-hidden" id="projects">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Our Projects"
          title="Landmark Constructions & Turnkey Living"
          subtitle="A showcase of our completed architectural residences and actively monitored ongoing developments with precise status and locations."
        />

        {/* Filter Buttons: All, Completed, Ongoing */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {['All', 'Completed', 'Ongoing'].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setFilter(status)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === status
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 shadow-gold-glow'
                  : 'bg-charcoal-850 text-warm-300 hover:text-gold-400 border border-charcoal-700'
              }`}
            >
              {status === 'All' ? 'All Developments' : `${status} Projects`}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-charcoal-900 rounded-2xl border border-charcoal-800 hover:border-gold-500/40 overflow-hidden transition-all duration-300 hover:shadow-card-dark flex flex-col justify-between"
            >
              {/* Project Image & Status Badge */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md border ${
                      project.status.toLowerCase() === 'completed'
                        ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                        : 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                    }`}
                  >
                    {project.status.toLowerCase() === 'completed' ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                    )}
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-charcoal-950/80 border border-gold-500/30 text-[10px] font-semibold uppercase tracking-wider text-gold-400 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Area / Size Indicator */}
                {project.area && (
                  <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded bg-charcoal-900/90 border border-charcoal-700 text-xs text-warm-300 backdrop-blur-sm">
                    {project.area}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-warm-50 group-hover:text-gold-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Location & Timeline */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-warm-300 mb-3">
                    <div className="flex items-center gap-1.5 text-gold-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                    {project.timeline && (
                      <div className="flex items-center gap-1.5 text-warm-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.timeline}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-warm-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Footer CTA */}
                <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between">
                  <Link
                    to={`/contact?service=${encodeURIComponent(project.title)}`}
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider flex items-center gap-1.5 group/btn"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-warm-500">
                    MNL Turnkey Specification
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 border border-gold-500/40 text-warm-100 hover:text-gold-400 font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group"
          >
            <span>View All Projects & Construction Archives</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
