import React, { useState } from 'react';
import { Save, CheckCircle2, Share2, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';

export default function SocialMediaLinks() {
  const { socialLinks } = useSite();
  const [links, setLinks] = useState([...socialLinks]);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleUrlChange = (id, newUrl) => {
    setLinks(prev => prev.map(item => item.id === id ? { ...item, url: newUrl } : item));
    setSaved(false);
  };

  const handleToggle = (id) => {
    setLinks(prev => prev.map(item => item.id === id ? { ...item, active: !item.active } : item));
    setSaved(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await ApiService.updateSocialLinks(links);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const getIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'facebook': return <Facebook className="w-5 h-5" />;
      case 'instagram': return <Instagram className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'youtube': return <Youtube className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      default: return <Share2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            12. Social Media Links
          </h1>
          <p className="text-xs text-warm-400">
            Configure official brand social channels rendered on footer and customer inquiry sections.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Social Links Updated!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-4 shadow-xl">
        <div className="space-y-4">
          {links.map((link) => (
            <div
              key={link.id}
              className="p-4 rounded-xl bg-charcoal-850 border border-charcoal-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 w-40 shrink-0">
                <div className="w-9 h-9 rounded-lg bg-charcoal-800 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                  {getIcon(link.icon)}
                </div>
                <div>
                  <h3 className="font-semibold text-xs text-warm-100">{link.name}</h3>
                  <span className="text-[10px] text-warm-400">{link.active ? 'Active' : 'Disabled'}</span>
                </div>
              </div>

              <div className="flex-1">
                <input
                  type="url"
                  value={link.url}
                  onChange={(e) => handleUrlChange(link.id, e.target.value)}
                  placeholder={`https://${link.id}.com/mnlgroup`}
                  className="w-full px-3.5 py-2 rounded-xl bg-charcoal-900 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => handleToggle(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    link.active
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                      : 'bg-charcoal-800 text-warm-400'
                  }`}
                >
                  {link.active ? 'Active' : 'Hidden'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-charcoal-800 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Social Channels'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
