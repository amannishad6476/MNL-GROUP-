import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { Storage } from '../data/storage';
import { Share2, Save, CheckCircle2, Globe } from 'lucide-react';

export default function SocialMediaLinks() {
  const { socialLinks } = useAdminData();
  const [formData, setFormData] = useState({ ...socialLinks });
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    Storage.saveSocialLinks(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const platforms = [
    { key: 'facebook', label: 'Facebook Page URL', placeholder: 'https://facebook.com/mnlgroup' },
    { key: 'instagram', label: 'Instagram Profile URL', placeholder: 'https://instagram.com/mnlgroup' },
    { key: 'linkedin', label: 'LinkedIn Company URL', placeholder: 'https://linkedin.com/company/mnlgroup' },
    { key: 'youtube', label: 'YouTube Channel URL', placeholder: 'https://youtube.com/@mnlgroup' },
    { key: 'twitter', label: 'X (Twitter) URL', placeholder: 'https://x.com/mnlgroup' },
    { key: 'pinterest', label: 'Pinterest Portfolio URL', placeholder: 'https://pinterest.com/mnlgroup' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-white">Social Media Links</h1>
          <p className="text-sm text-gray-400 mt-1">
            Configure the public social media profile links rendered in header, footer, and contact pages.
          </p>
        </div>
      </div>

      {saved && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
          <CheckCircle2 size={18} />
          <span>Social media links updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-serif font-semibold text-white flex items-center gap-2 border-b border-[#23262d] pb-4">
            <Share2 className="text-[#c5a059]" size={20} />
            Connected Platforms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {platforms.map((platform) => (
              <div key={platform.key}>
                <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                  {platform.label}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <Globe size={16} />
                  </div>
                  <input
                    type="url"
                    value={formData[platform.key] || ''}
                    onChange={(e) => setFormData({ ...formData, [platform.key]: e.target.value })}
                    placeholder={platform.placeholder}
                    className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-black font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-[#c5a059]/20"
          >
            <Save size={18} />
            <span>Save Social Links</span>
          </button>
        </div>
      </form>
    </div>
  );
}
