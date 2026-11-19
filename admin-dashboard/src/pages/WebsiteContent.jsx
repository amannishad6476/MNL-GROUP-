import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { Storage } from '../data/storage';
import { FileText, Save, CheckCircle2 } from 'lucide-react';

export default function WebsiteContent() {
  const { company } = useAdminData();
  const [formData, setFormData] = useState({ ...company });
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    Storage.saveCompany(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-white">Website Content Management</h1>
          <p className="text-sm text-gray-400 mt-1">
            Update core brand statements, mission, vision, and corporate disclosures.
          </p>
        </div>
      </div>

      {saved && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
          <CheckCircle2 size={18} />
          <span>Website content updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-serif font-semibold text-white flex items-center gap-2 border-b border-[#23262d] pb-4">
            <FileText className="text-[#c5a059]" size={20} />
            Brand Tagline & Short Bio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Official Tagline
              </label>
              <input
                type="text"
                value={formData.tagline || ''}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Hero Short Introduction
              </label>
              <textarea
                rows={3}
                value={formData.shortDescription || ''}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-serif font-semibold text-white border-b border-[#23262d] pb-4">
            About & Corporate Pillars
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                About MNL GROUP (Full Description)
              </label>
              <textarea
                rows={4}
                value={formData.about || ''}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                  Our Mission
                </label>
                <textarea
                  rows={4}
                  value={formData.mission || ''}
                  onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                  className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                  Our Vision
                </label>
                <textarea
                  rows={4}
                  value={formData.vision || ''}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                  Our Commitment
                </label>
                <textarea
                  rows={4}
                  value={formData.commitment || ''}
                  onChange={(e) => setFormData({ ...formData, commitment: e.target.value })}
                  className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Govt Registration / Corporate License Disclosure
              </label>
              <input
                type="text"
                value={formData.license || ''}
                onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                placeholder="e.g. Registered Architectural & Construction Firm"
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
            <span>Save Website Content</span>
          </button>
        </div>
      </form>
    </div>
  );
}
