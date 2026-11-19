import React, { useState } from 'react';
import { Save, CheckCircle2, Search, Globe, Eye } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';

export default function SeoSettings() {
  const { seo } = useSite();
  const [formData, setFormData] = useState({ ...seo });
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
    await ApiService.updateSeo(formData);
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
            13. SEO Settings
          </h1>
          <p className="text-xs text-warm-400">
            Configure organic search metadata, OpenGraph social cards, and crawler indexing rules.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>SEO Settings Applied!</span>
          </div>
        )}
      </div>

      {/* Google SERP Preview Box */}
      <div className="p-5 rounded-2xl bg-charcoal-900 border border-charcoal-800 shadow-xl space-y-2">
        <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5" />
          <span>Live Google Search Snippet Preview</span>
        </span>
        <div className="p-4 rounded-xl bg-charcoal-950 border border-charcoal-850 space-y-1">
          <p className="text-xs text-emerald-400 font-mono truncate">https://mnlgroup.com</p>
          <h3 className="text-base text-sky-400 font-medium hover:underline cursor-pointer truncate">
            {formData.metaTitle || "MNL GROUP | Turnkey House Construction & Architecture"}
          </h3>
          <p className="text-xs text-warm-300 line-clamp-2 leading-relaxed">
            {formData.metaDescription || "MNL GROUP offers modern architecture, 2D/3D design, luxury residential construction, modular kitchens, and premium interior execution."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-5 shadow-xl">
        {/* Meta Title */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
            Meta Title (Recommended &lt; 60 chars) *
          </label>
          <input
            type="text"
            name="metaTitle"
            value={formData.metaTitle || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
          />
          <span className="text-[10px] text-warm-400 mt-1 block">
            Length: {(formData.metaTitle || '').length} characters
          </span>
        </div>

        {/* Meta Description */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
            Meta Description (Recommended 140 - 160 chars) *
          </label>
          <textarea
            rows={3}
            name="metaDescription"
            value={formData.metaDescription || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
          />
          <span className="text-[10px] text-warm-400 mt-1 block">
            Length: {(formData.metaDescription || '').length} characters
          </span>
        </div>

        {/* Keywords */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
            Target Keywords (comma separated)
          </label>
          <input
            type="text"
            name="metaKeywords"
            value={formData.metaKeywords || ''}
            onChange={handleChange}
            placeholder="house construction, modern architecture, turnkey contractors, luxury villa, interior design"
            className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
          />
        </div>

        {/* OpenGraph Properties */}
        <div className="pt-3 border-t border-charcoal-800 space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Social Share Cards (OpenGraph / Facebook / LinkedIn / WhatsApp)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                OG Social Title
              </label>
              <input
                type="text"
                name="ogTitle"
                value={formData.ogTitle || ''}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                OG Social Image URL
              </label>
              <input
                type="url"
                name="ogImage"
                value={formData.ogImage || ''}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100"
              />
            </div>
          </div>
        </div>

        {/* Robots.txt */}
        <div className="pt-3 border-t border-charcoal-800">
          <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
            Robots.txt Directive Rules
          </label>
          <textarea
            rows={3}
            name="robotsTxt"
            value={formData.robotsTxt || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2 rounded-xl bg-charcoal-850 border border-charcoal-700 font-mono text-xs text-warm-200 resize-none"
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
            <span>{saving ? 'Saving...' : 'Save SEO Configuration'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
