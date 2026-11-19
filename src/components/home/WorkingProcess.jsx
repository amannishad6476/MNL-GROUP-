import React from 'react';
import {
  MessagesSquare,
  Compass,
  Calculator,
  HardHat,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { useSite } from '../../context/SiteContext';

const stepIcons = {
  '01': MessagesSquare,
  '02': Compass,
  '03': Calculator,
  '04': HardHat,
  '05': Sparkles,
};

export default function WorkingProcess() {
  const { processSteps } = useSite();

  return (
    <section className="py-20 md:py-28 bg-charcoal-950 relative overflow-hidden" id="process">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Our Working Process"
          title="From Concept to Key Handover in 5 Stages"
          subtitle="A systematic, milestone-driven framework engineered to eliminate construction delays, budget overruns, and on-site uncertainties."
        />

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/4 left-10 right-10 h-[2px] bg-gradient-to-r from-gold-500/20 via-gold-500/50 to-gold-500/20 z-0" />

          {processSteps.map((step, idx) => {
            const Icon = stepIcons[step.step] || MessagesSquare;
            return (
              <div
                key={step.step || idx}
                className="relative z-10 flex flex-col justify-between p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-2 group shadow-lg"
              >
                <div>
                  {/* Step Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif font-black text-2xl gold-gradient-text tracking-wider">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-charcoal-850 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Tagline */}
                  <h3 className="text-lg font-serif font-bold text-warm-50 group-hover:text-gold-300 transition-colors mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-gold-400 uppercase tracking-widest mb-3">
                    {step.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-warm-300 text-xs leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Milestone Deliverable Box */}
                {step.deliverable && (
                  <div className="pt-3 border-t border-charcoal-800 text-[11px] text-warm-400 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                    <span>{step.deliverable}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-charcoal-900 border border-gold-500/30 text-xs text-warm-200 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-medium">
              Every phase is backed by physical sign-off documents and scheduled site inspections.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
