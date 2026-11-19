import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';
import ImageUploadField from '../../components/admin/ImageUploadField';
import ConfirmDialog from '../../components/admin/ConfirmDialog';

export default function HomepageBanners() {
  const { banners } = useSite();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    imageUrl: '',
    primaryButtonText: 'Explore Services',
    primaryButtonLink: '/services',
    secondaryButtonText: 'Contact Us',
    secondaryButtonLink: '/contact',
    active: true,
  });

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      title: 'Building Dreams. Creating Futures.',
      subtitle: 'Turnkey Residential Construction & High-End Architecture',
      description: 'From conceptual 3D architectural blueprints to seamless turnkey execution, we craft luxurious living spaces designed to inspire generations.',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
      primaryButtonText: 'Explore Services',
      primaryButtonLink: '/services',
      secondaryButtonText: 'Contact Us',
      secondaryButtonLink: '/contact',
      active: true,
    });
    setModalOpen(true);
  };

  const openEditModal = (banner) => {
    setEditingItem(banner);
    setFormData({
      title: banner.title,
      subtitle: banner.subtitle || '',
      description: banner.description || '',
      imageUrl: banner.imageUrl || '',
      primaryButtonText: banner.primaryButtonText || 'Explore Services',
      primaryButtonLink: banner.primaryButtonLink || '/services',
      secondaryButtonText: banner.secondaryButtonText || 'Contact Us',
      secondaryButtonLink: banner.secondaryButtonLink || '/contact',
      active: banner.active !== false,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      const updated = banners.map(b => b.id === editingItem.id ? { ...b, ...formData } : b);
      await ApiService.updateBanners(updated);
    } else {
      const newBanner = { ...formData, id: `banner-${Date.now()}` };
      await ApiService.updateBanners([...banners, newBanner]);
    }
    setModalOpen(false);
  };

  const handleDelete = async () => {
    if (deleteId) {
      const updated = banners.filter(b => b.id !== deleteId);
      await ApiService.updateBanners(updated);
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            10. Homepage Banner Management ({banners.length})
          </h1>
          <p className="text-xs text-warm-400">
            Manage high-impact hero carousel slides, headlines, and call-to-action buttons.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Slide</span>
        </button>
      </div>

      {/* Banners List */}
      <div className="space-y-4">
        {banners.map((b, idx) => (
          <div
            key={b.id}
            className="p-5 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 transition flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg"
          >
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative w-32 h-20 rounded-xl overflow-hidden bg-charcoal-950 shrink-0 border border-charcoal-800">
                <img src={b.imageUrl} alt={b.title} className="w-full h-full object-cover" />
                <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-charcoal-950/80 text-[9px] font-mono text-gold-400">
                  #{idx + 1}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-sm text-warm-50">
                    {b.title}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${b.active ? 'bg-emerald-500/20 text-emerald-400' : 'bg-charcoal-800 text-warm-400'}`}>
                    {b.active ? 'Active' : 'Draft'}
                  </span>
                </div>
                <p className="text-xs text-gold-400 font-medium">
                  {b.subtitle}
                </p>
                <p className="text-[11px] text-warm-400 line-clamp-1 max-w-xl">
                  {b.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
              <button
                type="button"
                onClick={() => openEditModal(b)}
                className="p-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-200 hover:text-gold-400 transition"
                title="Edit slide"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setDeleteId(b.id)}
                className="p-2 rounded-lg bg-charcoal-800 hover:bg-red-950/60 text-warm-200 hover:text-red-400 transition"
                title="Delete slide"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-charcoal-900 border border-gold-500/40 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-warm-400 hover:text-warm-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-serif font-bold text-warm-50 mb-4">
              {editingItem ? 'Edit Hero Banner' : 'Add Hero Banner Slide'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Headline Text *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  placeholder="e.g. Building Dreams. Creating Futures."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Tagline / Subtitle Badge
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="e.g. Turnkey Residential Construction & High-End Architecture"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                />
              </div>

              {/* Background visual upload interface */}
              <ImageUploadField
                label="Full Bleed Architecture Background Image"
                value={formData.imageUrl}
                onChange={(img) => setFormData({ ...formData, imageUrl: img })}
              />

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Introductory Paragraph
                </label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Short engaging paragraph displayed below the headline..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Primary Button Label
                  </label>
                  <input
                    type="text"
                    value={formData.primaryButtonText}
                    onChange={(e) => setFormData({ ...formData, primaryButtonText: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Primary Button Link
                  </label>
                  <input
                    type="text"
                    value={formData.primaryButtonLink}
                    onChange={(e) => setFormData({ ...formData, primaryButtonLink: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100"
                  />
                </div>
              </div>

              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    className="w-4 h-4 rounded accent-gold-500"
                  />
                  <span className="text-xs text-warm-200">
                    Slide is Active and visible on Homepage
                  </span>
                </label>
              </div>

              <div className="pt-3 border-t border-charcoal-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-charcoal-800 text-xs uppercase font-semibold text-warm-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs uppercase font-bold"
                >
                  {editingItem ? 'Save Slide' : 'Add Slide'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Dialog */}
      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Banner Slide"
        message="Are you sure you want to delete this hero banner slide?"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
