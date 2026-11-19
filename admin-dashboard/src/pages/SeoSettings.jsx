import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { Storage } from '../data/storage';
import ImageUploadField from '../components/ImageUploadField';
import { Globe2, Save, CheckCircle2, Search } from 'lucide-react';

export default function SeoSettings() {
  const { seo } = useAdminData();
  const [formData, setFormData] = useState({ ...seo });
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    Storage.saveSeo(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-white">SEO & Search Engine Optimization</h1>
          <p className="text-sm text-gray-400 mt-1">
            Configure site metadata, Open Graph sharing cards, and indexation controls.
          </p>
        </div>
      </div>

      {saved && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
          <CheckCircle2 size={18} />
          <span>SEO settings updated successfully!</span>
        </div>
      )}

      {/* Google Search Preview Card */}
      <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-3">
        <h2 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <Search className="text-[#c5a059]" size={16} />
          Search Result Preview (Google Snippet)
        </h2>
        <div className="bg-[#181a1f] p-4 rounded-xl border border-[#2b2e37] space-y-1 max-w-2xl font-sans">
          <div className="text-xs text-gray-400">https://mnlgroup.in ›</div>
          <div className="text-base text-[#8ab4f8] hover:underline cursor-pointer truncate font-medium">
            {formData.title || 'MNL GROUP | Building Dreams. Creating Futures.'}
          </div>
          <div className="text-xs text-gray-300 line-clamp-2">
            {formData.description || 'Premier architectural design and turnkey construction services.'}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-serif font-semibold text-white flex items-center gap-2 border-b border-[#23262d] pb-4">
            <Globe2 className="text-[#c5a059]" size={20} />
            Primary Metadata
          </h2>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Default Page Meta Title
                </label>
                <span className="text-[11px] text-gray-500">
                  {(formData.title || '').length} / 60 characters
                </span>
              </div>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Meta Description
                </label>
                <span className="text-[11px] text-gray-500">
                  {(formData.description || '').length} / 160 characters
                </span>
              </div>
              <textarea
                rows={3}
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Keywords (Comma Separated)
              </label>
              <input
                type="text"
                value={formData.keywords || ''}
                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                placeholder="construction, architecture, interior design, renovation, modular kitchen"
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                  Canonical URL
                </label>
                <input
                  type="url"
                  value={formData.canonicalUrl || 'https://mnlgroup.in'}
                  onChange={(e) => setFormData({ ...formData, canonicalUrl: e.target.value })}
                  className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                  Robots Indexing Tag
                </label>
                <select
                  value={formData.robots || 'index, follow'}
                  onChange={(e) => setFormData({ ...formData, robots: e.target.value })}
                  className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="index, follow">index, follow (Recommended for production)</option>
                  <option value="noindex, nofollow">noindex, nofollow (Staging / Private)</option>
                  <option value="noindex, follow">noindex, follow</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* OpenGraph & Social Sharing Card */}
        <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-serif font-semibold text-white border-b border-[#23262d] pb-4">
            Social Share Cards (OpenGraph / Twitter Card)
          </h2>

          <div className="space-y-5">
            <ImageUploadField
              label="OpenGraph Share Banner (1200x630 px recommended)"
              value={formData.ogImage || ''}
              onChange={(val) => setFormData({ ...formData, ogImage: val })}
            />

            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                OpenGraph Title
              </label>
              <input
                type="text"
                value={formData.ogTitle || ''}
                onChange={(e) => setFormData({ ...formData, ogTitle: e.target.value })}
                placeholder="Leave blank to use Meta Title"
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                OpenGraph Description
              </label>
              <textarea
                rows={2}
                value={formData.ogDescription || ''}
                onChange={(e) => setFormData({ ...formData, ogDescription: e.target.value })}
                placeholder="Leave blank to use Meta Description"
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-black font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-[#c5a059]/20"
          >
            <Save size={18} />
            <span>Save SEO Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}
