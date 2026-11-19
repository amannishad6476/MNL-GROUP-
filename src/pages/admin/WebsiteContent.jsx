import React, { useState } from 'react';
import { Save, CheckCircle2, FileText, Info } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';

export default function WebsiteContent() {
  const { company } = useSite();
  const [formData, setFormData] = useState({ ...company });
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await ApiService.updateCompanyInfo(formData);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            9. Website Content Management
          </h1>
          <p className="text-xs text-warm-400">
            Edit official brand messaging, company narrative, mission, vision, and quality policy.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Content Saved & Synced Live!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-6 shadow-xl">
        {/* Brand Tagline */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
            Official Tagline *
          </label>
          <input
            type="text"
            name="tagline"
            value={formData.tagline || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
          />
          <p className="text-[11px] text-warm-400 mt-1">Appears on header, hero sections, and footer.</p>
        </div>

        {/* Short Summary */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
            Short Introduction (Hero & Footer) *
          </label>
          <textarea
            rows={2}
            name="shortDescription"
            value={formData.shortDescription || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
          />
        </div>

        {/* Detailed About Narrative */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
            Full Company Overview (About Section) *
          </label>
          <textarea
            rows={4}
            name="about"
            value={formData.about || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
          />
        </div>

        {/* Core Statements Grid: Mission, Vision, Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1.5">
              Our Mission Statement *
            </label>
            <textarea
              rows={4}
              name="mission"
              value={formData.mission || ''}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1.5">
              Our Vision Statement *
            </label>
            <textarea
              rows={4}
              name="vision"
              value={formData.vision || ''}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1.5">
              Our Quality Commitment *
            </label>
            <textarea
              rows={4}
              name="commitment"
              value={formData.commitment || ''}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
            />
          </div>
        </div>

        {/* License & Certification */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
            Licensing & Certification Badge Text
          </label>
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber || ''}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-charcoal-800 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Publishing Updates...' : 'Publish Content Updates'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
