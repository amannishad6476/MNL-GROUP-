import React from 'react';
import {
  Key,
  Ruler,
  FileCheck,
  Award,
  UserCheck,
  Clock,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { useSite } from '../../context/SiteContext';

const iconMap = {
  Key,
  Ruler,
  FileCheck,
  Award,
  UserCheck,
  Clock,
};

export default function WhyChooseUs() {
  const { whyChooseUs } = useSite();

  return (
    <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden" id="why-choose-us">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Why Choose Us"
          title="The MNL Standard of Excellence"
          subtitle="Our integrated methodology replaces fragmented subcontractors with an uncompromising standard of accountability, engineering precision, and financial transparency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={pillar.id || idx}
                className="group p-8 rounded-2xl bg-charcoal-850/90 border border-charcoal-700/80 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-dark relative"
              >
                <span className="absolute top-6 right-6 font-serif font-black text-4xl text-charcoal-700/40 group-hover:text-gold-500/10 transition-colors pointer-events-none">
                  0{idx + 1}
                </span>

                <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all duration-300 shadow-gold-glow">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-serif font-bold text-warm-50 group-hover:text-gold-300 transition-colors mb-3">
                  {pillar.title}
                </h3>

                <p className="text-warm-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-6 pt-4 border-t border-charcoal-800 flex items-center gap-2 text-xs text-gold-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-charcoal-950 border border-gold-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-warm-50">
              Need a structural engineering audit or customized architectural proposal?
            </h4>
            <p className="text-xs sm:text-sm text-warm-300">
              Speak directly with our senior civil consultants and architects before making any commitment.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs tracking-wider uppercase whitespace-nowrap transition-colors shadow-gold-glow shrink-0"
          >
            Schedule Consultation &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
