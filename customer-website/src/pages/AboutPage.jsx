import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { useSite } from '../context/SiteContext';

export default function AboutPage() {
  const { company, team } = useSite();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `About Us | ${company.name}`;
  }, [company]);

  return (
    <div className="pt-28 pb-20 bg-charcoal-950">
      <div className="relative py-16 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Legacy of Structural Precision
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-50">
            About <span className="gold-gradient-text">{company.name}</span>
          </h1>
          <p className="mt-4 text-warm-300 text-base md:text-lg max-w-2xl mx-auto">
            {company.tagline}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-warm-50 leading-tight">
              A disciplined multidisciplinary architecture and turnkey construction firm.
            </h2>
            <p className="text-warm-300 text-base leading-relaxed">
              {company.about}
            </p>
            <p className="text-warm-300 text-sm leading-relaxed">
              Founded on the belief that enduring structures demand uncompromising harmony between architectural expression and civil engineering rigor, MNL GROUP bridges the divide between conceptual drawing boards and physical on-site delivery.
            </p>

            <div className="p-5 rounded-xl bg-charcoal-900 border border-gold-500/30">
              <h3 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">
                Our Architectural Philosophy
              </h3>
              <p className="text-xs text-warm-200 leading-relaxed">
                We reject shortcuts and ambiguous estimates. Every foundation depth, structural reinforcement schedule, and interior joinery detail is documented in transparent engineering drafts before physical work begins.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="MNL GROUP Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded bg-charcoal-900/90 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
                  {company.licenseNumber}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle
            badge="Guiding Principles"
            title="The Cornerstones of Our Practice"
            subtitle="Clear, unwavering commitments that direct every blueprint, site inspection, and key handover."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-warm-50">Our Mission</h3>
              <p className="text-warm-300 text-sm leading-relaxed">
                {company.mission}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-warm-50">Our Vision</h3>
              <p className="text-warm-300 text-sm leading-relaxed">
                {company.vision}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-warm-50">Our Commitment</h3>
              <p className="text-warm-300 text-sm leading-relaxed">
                {company.commitment}
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle
            badge="Engineering & Design Team"
            title="Leadership Behind the Structures"
            subtitle="Meet the certified structural consultants, architects, and site quality auditors guiding every MNL project."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.filter(m => m.active).map((member) => (
              <div
                key={member.id}
                className="bg-charcoal-900 rounded-2xl border border-charcoal-800 hover:border-gold-500/40 overflow-hidden transition-all duration-300 group shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                    {member.experience}
                  </span>
                  <h3 className="text-base font-serif font-bold text-warm-50">
                    {member.name}
                  </h3>
                  <p className="text-xs text-warm-300 font-medium">
                    {member.role}
                  </p>
                  <p className="text-xs text-warm-400 pt-1 line-clamp-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 sm:p-12 rounded-2xl bg-charcoal-900 border border-gold-500/30 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-50">
            Ready to discuss your architectural or construction vision?
          </h2>
          <p className="text-warm-300 text-sm max-w-xl mx-auto">
            Book a dedicated consultation session with our senior architects and structural engineers today.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs tracking-wider uppercase transition-colors shadow-gold-glow"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
