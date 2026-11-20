import React, { useState } from 'react';
import {
  Building2,
  Compass,
  Palette,
  Home,
  Brush,
  ShieldCheck,
  Layers,
  CookingPot,
  Armchair,
  Zap,
  Wrench,
  Grid,
  Hammer,
  CheckCircle2,
  Check,
  MessageCircle,
  Send,
  AlertCircle,
  Sparkles,
  SlidersHorizontal,
  RefreshCw
} from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';
import SectionTitle from '../common/SectionTitle';

const serviceOptions = [
  { id: 'opt-construction', name: 'Construction', icon: Building2, desc: 'Civil superstructure, foundation, brickwork & complete building' },
  { id: 'opt-architecture', name: 'Architecture and Design', icon: Compass, desc: '2D floor plans, 3D elevations, space & structural planning' },
  { id: 'opt-interior', name: 'Interior Design', icon: Palette, desc: 'Living room, master bedroom, luxury aesthetics & space styling' },
  { id: 'opt-exterior', name: 'Exterior Design', icon: Home, desc: 'Modern facade elevation, louvers, stone cladding & exterior accents' },
  { id: 'opt-painting', name: 'Painting', icon: Brush, desc: 'Mechanized wall sanding, royal emulsions, textures & weather coat' },
  { id: 'opt-kitchen', name: 'Modular Kitchen', icon: CookingPot, desc: 'BWP marine ply, German soft-close fittings & quartz countertops' },
  { id: 'opt-furniture', name: 'Furniture', icon: Armchair, desc: 'Custom built-in wardrobes, study consoles, solid wood carpentry' },
  { id: 'opt-ceiling', name: 'Ceiling and Lighting', icon: Layers, desc: 'Gypsum false ceilings, cove ambient lighting & magnetic tracks' },
  { id: 'opt-electrical', name: 'Electrical', icon: Zap, desc: 'Concealed conduit wiring, load balancing, MCBs & smart automation' },
  { id: 'opt-plumbing', name: 'Plumbing', icon: Wrench, desc: 'High-pressure CPVC/UPVC lines, diverters & drainage systems' },
  { id: 'opt-waterproofing', name: 'Waterproofing', icon: ShieldCheck, desc: 'Scientific elastomeric roof, terrace, bathroom & basement defense' },
  { id: 'opt-flooring', name: 'Flooring', icon: Grid, desc: 'Italian marble diamond polishing, vitrified tiles & granite stairs' },
  { id: 'opt-renovation', name: 'Renovation', icon: Hammer, desc: 'Complete structural remodeling, room additions & full overhauls' },
];

export default function BuildYourHome() {
  const { company } = useSite();

  const [selectedServices, setSelectedServices] = useState([
    'Construction',
    'Architecture and Design',
    'Interior Design'
  ]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    description: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const toggleService = (serviceName) => {
    setSelectedServices(prev =>
      prev.includes(serviceName)
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const selectAll = () => {
    setSelectedServices(serviceOptions.map(s => s.name));
  };

  const clearAll = () => {
    setSelectedServices([]);
  };

  const cleanWhatsApp = company.whatsapp ? company.whatsapp.replace(/[^0-9]/g, '') : '919876543210';

  const generateWhatsAppMessage = () => {
    const servicesList = selectedServices.length > 0 ? selectedServices.join(', ') : 'Not selected yet';
    const text = `Hello MNL GROUP!
I would like to enquire through the "Build Your Home" custom configurator.

*Selected Services (${selectedServices.length}):*
${servicesList}

*Client Details:*
- Name: ${formData.name || 'Not provided'}
- Phone: ${formData.phone || 'Not provided'}
- Project Location: ${formData.location || 'Not provided'}
- Project Notes: ${formData.description || 'None'}

Please provide an estimate and consultation slot.`;

    return encodeURIComponent(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      setErrorMsg('Please select at least one service requirement above.');
      return;
    }
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setErrorMsg('Please enter your Name, Phone Number, and Project Location.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      await ApiService.submitEnquiry({
        ...formData,
        services: selectedServices,
        type: selectedServices.length >= 8 ? 'Complete Turnkey Home Solution' : 'Multi-Service Package'
      });
      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      setSubmitting(false);
      setErrorMsg('Could not submit enquiry. Please try again or reach us directly on WhatsApp.');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden" id="build-your-home">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Interactive Service Configurator"
          title="Build Your Home With MNL GROUP"
          subtitle="Select only one specialized discipline, multiple combined services, or complete turnkey construction. Tailor your requirements and connect directly with our engineering advisory."
        />

        {/* Step 1: Service Multi-Select Matrix */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-charcoal-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-gold-500 text-charcoal-950 font-serif font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="text-lg font-serif font-bold text-warm-50">
                Choose Your Project Requirements ({selectedServices.length} Selected)
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={selectAll}
                className="px-3.5 py-1.5 rounded-lg bg-charcoal-800 border border-charcoal-700 hover:border-gold-500/40 text-warm-300 hover:text-gold-400 text-xs font-semibold transition"
              >
                Select All (Complete Turnkey)
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="px-3.5 py-1.5 rounded-lg bg-charcoal-800 border border-charcoal-700 hover:border-rose-500/40 text-warm-300 hover:text-rose-400 text-xs font-semibold transition"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedServices.includes(opt.name);

              return (
                <div
                  key={opt.id}
                  onClick={() => toggleService(opt.name)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group relative select-none ${
                    isSelected
                      ? 'bg-charcoal-850 border-gold-500 shadow-gold-glow/20'
                      : 'bg-charcoal-950/70 border-charcoal-800 hover:border-charcoal-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-gold-500 text-charcoal-950'
                          : 'bg-charcoal-850 text-gold-400 group-hover:bg-charcoal-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-gold-500 border-gold-500 text-charcoal-950'
                          : 'border-charcoal-700 bg-charcoal-900 group-hover:border-gold-500/40'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <div>
                    <h4
                      className={`text-sm font-serif font-bold transition-colors ${
                        isSelected ? 'text-gold-400' : 'text-warm-100 group-hover:text-warm-50'
                      }`}
                    >
                      {opt.name}
                    </h4>
                    <p className="text-[11px] text-warm-400 mt-1 line-clamp-2 leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Customer Details & Lead Submission */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-charcoal-950 border border-charcoal-800 shadow-2xl relative">
          <div className="flex items-center gap-3 border-b border-charcoal-800 pb-4 mb-8">
            <span className="w-7 h-7 rounded-full bg-gold-500 text-charcoal-950 font-serif font-bold text-xs flex items-center justify-center">
              2
            </span>
            <div>
              <h3 className="text-lg font-serif font-bold text-warm-50">
                Your Project Details & Location
              </h3>
              <p className="text-xs text-warm-400 mt-0.5">
                Our architecture & civil planning desk will review your selected disciplines and provide consultation.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 max-w-xl mx-auto">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-warm-50">
                Project Requirements Received!
              </h4>
              <p className="text-xs sm:text-sm text-warm-300 leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. We have logged your request for:
                <br />
                <span className="text-gold-400 font-semibold">{selectedServices.join(', ')}</span>
                <br />
                in <strong>{formData.location}</strong>. Our senior advisory engineer will get in touch shortly.
              </p>

              <div className="pt-4 flex items-center justify-center gap-3 flex-wrap">
                <a
                  href={`https://wa.me/${cleanWhatsApp}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Also Send on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', location: '', description: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 text-warm-300 text-xs font-semibold"
                >
                  Configure Another Project
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Selected Services Pill Preview */}
              <div className="p-4 rounded-xl bg-charcoal-900 border border-charcoal-850 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-warm-400 font-medium">Included in this enquiry:</span>
                  <span className="text-gold-400 font-bold">{selectedServices.length} Selected</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedServices.length === 0 ? (
                    <span className="text-xs text-rose-400 italic">No services selected. Please select at least one above.</span>
                  ) : (
                    selectedServices.map(name => (
                      <span
                        key={name}
                        className="px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3" />
                        <span>{name}</span>
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-warm-300 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Verma"
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-charcoal-800 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-warm-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-charcoal-800 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-warm-300 mb-2">
                    Project Location / City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Sector 45, Gurugram"
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-charcoal-800 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-warm-300 mb-2">
                  Project Scope & Specific Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="e.g. 240 sq.yard plot, looking for 3-floor residential construction with architectural drawings, modular kitchen, and luxury false ceiling."
                  className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-charcoal-800 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
                />
              </div>

              {/* Action Buttons: Submit Form & WhatsApp Direct */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-4">
                <a
                  href={`https://wa.me/${cleanWhatsApp}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp</span>
                </a>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-gold-glow transition disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting...' : 'Submit Multi-Service Enquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
