import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  Key,
  FolderGit2
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function CompleteHomeSolutions() {
  const pathways = [
    {
      id: 'path-single',
      number: '01',
      badge: 'Flexible Engagement',
      title: 'Individual Specialized Services',
      description: 'Need only architectural 3D elevations, waterproofing, modular kitchen, or painting? Engage our specialized divisions independently with full engineering accountability.',
      icon: Layers,
      features: [
        'Hire for any single trade without turnkey overhead',
        'Direct supervision by certified discipline specialists',
        'Itemized estimate with zero hidden extras'
      ],
      ctaText: 'Browse 13 Service Categories',
      ctaLink: '/services'
    },
    {
      id: 'path-combo',
      number: '02',
      badge: 'Popular Choice',
      title: 'Multiple Combined Services',
      description: 'Combine two, three, or more services—such as Architectural Planning + Civil Construction + Modular Kitchen—with synchronized milestone coordination.',
      icon: SlidersHorizontal,
      featured: true,
      features: [
        'Zero trade conflicts between civil team and interior carpenters',
        'Unified 3D BIM coordination prevents on-site clashes',
        'Consolidated milestone schedule and single point of contact'
      ],
      ctaText: 'Use "Build Your Home" Selector',
      ctaLink: '#build-your-home'
    },
    {
      id: 'path-turnkey',
      number: '03',
      badge: 'Ultimate Peace of Mind',
      title: 'Complete Turnkey Home Solution',
      description: 'From empty plot soil testing and architectural sanction drawings to structural framing, luxury interior styling, and lock-and-key handover.',
      icon: Key,
      features: [
        'Single contract covering architecture, civil, MEP & interiors',
        'Dedicated senior project manager on site daily',
        'Locked itemized BOQ protects against market inflation'
      ],
      ctaText: 'Explore Turnkey Package',
      ctaLink: '/services/turnkey-construction'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-charcoal-950 relative overflow-hidden" id="complete-solutions">
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Complete Home Solutions"
          title="How You Can Work With MNL GROUP"
          subtitle="We are NOT just a painting or interior firm. We are a complete home building partner engineered so you can choose individual disciplines, multi-service bundles, or complete plot-to-key turnkey construction."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.id}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
                  path.featured
                    ? 'bg-gradient-to-b from-charcoal-900 to-charcoal-850 border-gold-500/60 shadow-gold-glow/20 relative'
                    : 'bg-charcoal-900/90 border-charcoal-800 hover:border-gold-500/40 shadow-xl'
                }`}
              >
                {path.featured && (
                  <span className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-gold-500 text-charcoal-950 text-[10px] font-black uppercase tracking-widest shadow-md">
                    Most Popular Pathway
                  </span>
                )}

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-charcoal-850 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif font-black text-3xl text-charcoal-700/60 group-hover:text-gold-500/20 transition-colors">
                      {path.number}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                      {path.badge}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-warm-50 group-hover:text-gold-400 transition">
                      {path.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-300 mt-2 leading-relaxed">
                      {path.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-charcoal-800">
                    {path.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-warm-200">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  {path.ctaLink.startsWith('#') ? (
                    <a
                      href={path.ctaLink}
                      className={`w-full py-3 rounded-xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition duration-200 ${
                        path.featured
                          ? 'bg-gold-500 hover:bg-gold-400 text-charcoal-950 shadow-gold-glow'
                          : 'bg-charcoal-800 hover:bg-charcoal-750 text-warm-200 hover:text-white border border-charcoal-700'
                      }`}
                    >
                      <span>{path.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to={path.ctaLink}
                      className={`w-full py-3 rounded-xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition duration-200 ${
                        path.featured
                          ? 'bg-gold-500 hover:bg-gold-400 text-charcoal-950 shadow-gold-glow'
                          : 'bg-charcoal-800 hover:bg-charcoal-750 text-warm-200 hover:text-white border border-charcoal-700'
                      }`}
                    >
                      <span>{path.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
