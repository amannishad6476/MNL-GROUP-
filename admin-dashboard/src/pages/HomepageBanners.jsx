import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { Storage } from '../data/storage';
import ImageUploadField from '../components/ImageUploadField';
import ConfirmDialog from '../components/ConfirmDialog';
import { Image as ImageIcon, Plus, Edit2, Trash2, CheckCircle2, Eye } from 'lucide-react';

export default function HomepageBanners() {
  const { banners } = useAdminData();
  const [editingBanner, setEditingBanner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [notification, setNotification] = useState('');

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleOpenAdd = () => {
    setEditingBanner({
      id: `banner-${Date.now()}`,
      title: '',
      subtitle: '',
      badge: 'MNL GROUP EXCLUSIVE',
      image: '',
      ctaText: 'Explore Our Work',
      ctaLink: '/services',
      secondaryCtaText: 'Contact Us',
      secondaryCtaLink: '/contact',
      active: true,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (banner) => {
    setEditingBanner({ ...banner });
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const existingIndex = banners.findIndex((b) => b.id === editingBanner.id);
    let updated;
    if (existingIndex >= 0) {
      updated = banners.map((b) => (b.id === editingBanner.id ? editingBanner : b));
    } else {
      updated = [...banners, editingBanner];
    }
    Storage.saveBanners(updated);
    setIsModalOpen(false);
    setEditingBanner(null);
    showNotification('Banner saved successfully!');
  };

  const handleDelete = () => {
    if (!deleteId) return;
    const updated = banners.filter((b) => b.id !== deleteId);
    Storage.saveBanners(updated);
    setDeleteId(null);
    showNotification('Banner deleted successfully!');
  };

  const handleToggleActive = (id) => {
    const updated = banners.map((b) => (b.id === id ? { ...b, active: !b.active } : b));
    Storage.saveBanners(updated);
    showNotification('Banner status updated!');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-white">Homepage Banners</h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage the carousel slides and hero banners displayed on the customer website homepage.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-black font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-[#c5a059]/20 w-fit"
        >
          <Plus size={18} />
          <span>Add New Slide</span>
        </button>
      </div>

      {notification && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
          <CheckCircle2 size={18} />
          <span>{notification}</span>
        </div>
      )}

      {/* Grid of Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className="bg-[#121316] border border-[#23262d] rounded-2xl overflow-hidden hover:border-[#c5a059]/40 transition group"
          >
            <div className="relative h-48 bg-[#181a1f] overflow-hidden">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/60 text-[#c5a059] border border-[#c5a059]/30 font-semibold backdrop-blur-sm">
                  Slide {index + 1}
                </span>
                <span
                  className={`text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full font-semibold ${
                    banner.active
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {banner.active ? 'Active' : 'Hidden'}
                </span>
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div>
                <p className="text-xs text-[#c5a059] font-medium tracking-wider uppercase">
                  {banner.badge || 'Headline'}
                </p>
                <h3 className="text-lg font-serif font-semibold text-white mt-0.5">{banner.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-2 mt-1">{banner.subtitle}</p>
              </div>

              <div className="pt-3 border-t border-[#23262d] flex items-center justify-between text-xs">
                <div className="text-gray-400">
                  CTA: <span className="text-gray-200">{banner.ctaText}</span> ({banner.ctaLink})
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleActive(banner.id)}
                    className="p-2 rounded-lg bg-[#181a1f] text-gray-400 hover:text-white transition"
                    title={banner.active ? 'Hide Banner' : 'Show Banner'}
                  >
                    <Eye size={15} />
                  </button>
                  <button
                    onClick={() => handleOpenEdit(banner)}
                    className="p-2 rounded-lg bg-[#181a1f] text-[#c5a059] hover:bg-[#c5a059]/10 transition"
                    title="Edit Banner"
                  >
                    <Edit2 size={15} />
                  </button>
                  <button
                    onClick={() => setDeleteId(banner.id)}
                    className="p-2 rounded-lg bg-[#181a1f] text-rose-400 hover:bg-rose-500/10 transition"
                    title="Delete Banner"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit/Add Modal */}
      {isModalOpen && editingBanner && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#121316] border border-[#23262d] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-5">
            <h2 className="text-xl font-serif font-bold text-white border-b border-[#23262d] pb-4">
              {editingBanner.title ? 'Edit Homepage Slide' : 'Add New Homepage Slide'}
            </h2>

            <form onSubmit={handleSave} className="space-y-4">
              <ImageUploadField
                label="Banner Background Image"
                value={editingBanner.image}
                onChange={(val) => setEditingBanner({ ...editingBanner, image: val })}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                    Top Badge Text
                  </label>
                  <input
                    type="text"
                    value={editingBanner.badge || ''}
                    onChange={(e) => setEditingBanner({ ...editingBanner, badge: e.target.value })}
                    placeholder="e.g. MNL GROUP EXCLUSIVE"
                    className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                    Slide Status
                  </label>
                  <select
                    value={editingBanner.active ? 'true' : 'false'}
                    onChange={(e) =>
                      setEditingBanner({ ...editingBanner, active: e.target.value === 'true' })
                    }
                    className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="true">Active (Visible)</option>
                    <option value="false">Hidden</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                    Headline Title
                  </label>
                  <input
                    type="text"
                    value={editingBanner.title}
                    onChange={(e) => setEditingBanner({ ...editingBanner, title: e.target.value })}
                    required
                    placeholder="e.g. Building Dreams. Creating Futures."
                    className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                    Subtitle / Description
                  </label>
                  <textarea
                    rows={2}
                    value={editingBanner.subtitle}
                    onChange={(e) =>
                      setEditingBanner({ ...editingBanner, subtitle: e.target.value })
                    }
                    className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                    Primary Button Text
                  </label>
                  <input
                    type="text"
                    value={editingBanner.ctaText || ''}
                    onChange={(e) =>
                      setEditingBanner({ ...editingBanner, ctaText: e.target.value })
                    }
                    className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                    Primary Button Link
                  </label>
                  <input
                    type="text"
                    value={editingBanner.ctaLink || ''}
                    onChange={(e) =>
                      setEditingBanner({ ...editingBanner, ctaLink: e.target.value })
                    }
                    className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#23262d]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-[#2b2e37] text-gray-400 hover:text-white transition text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-black font-semibold text-sm hover:opacity-90 transition"
                >
                  Save Slide
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Homepage Banner"
        message="Are you sure you want to remove this banner from the hero carousel?"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
