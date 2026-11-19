import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ImageWithFallback from '../common/ImageWithFallback';
import { useSite } from '../../context/SiteContext';

export default function AboutPreview() {
  const { company } = useSite();

  const pillars = [
    {
      title: "Our Mission",
      desc: company.mission,
      icon: Target,
    },
    {
      title: "Our Vision",
      desc: company.vision,
      icon: Eye,
    },
    {
      title: "Our Commitment",
      desc: company.commitment,
      icon: ShieldCheck,
    },
  ];

  const highlights = [
    "Turnkey end-to-end design & build accountability",
    "Adherence to National Building Codes & structural audits",
    "Bespoke 3D photorealistic visualization before execution",
    "Itemized transparent Bill of Quantities (BOQ)",
  ];

  return (
    <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden" id="about">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="About MNL GROUP"
          title="Architectural Passion, Engineering Rigor"
          subtitle="Transforming ambitious concepts into timeless residential and commercial structures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl relative aspect-[4/5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="MNL GROUP Architectural Craftsmanship"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                    Quality Standard
                  </p>
                  <p className="text-warm-100 font-serif text-lg font-bold">
                    Precision in Every Centimeter
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 hidden sm:block p-5 rounded-xl bg-charcoal-850/95 border border-gold-500/40 shadow-2xl backdrop-blur-md max-w-[240px]">
                <span className="w-2 h-2 rounded-full bg-gold-400 inline-block mb-2" />
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  Turnkey Guarantee
                </p>
                <p className="text-xs text-warm-300 mt-1 leading-relaxed">
                  Design, approvals, civil structure & luxury interiors delivered in one unified contract.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-warm-50 leading-snug">
                Building spaces where aesthetics harmonize with structural integrity.
              </h3>
              <p className="text-warm-300 text-base leading-relaxed">
                {company.about}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-charcoal-850/80 border border-charcoal-700/80 hover:border-gold-500/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-serif font-bold text-warm-100 mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-warm-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-warm-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 tracking-wider uppercase group"
              >
                <span>Read Full Company Profile & Leadership</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
