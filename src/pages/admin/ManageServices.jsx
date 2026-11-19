import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Check, X, Search, Sparkles } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';
import ImageUploadField from '../../components/admin/ImageUploadField';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import { ServiceIcon } from '../../components/home/ServicesGrid';

export default function ManageServices() {
  const { services } = useSite();
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Structural',
    icon: 'Building2',
    shortDesc: '',
    fullDesc: '',
    image: '',
    featuresText: '',
    featured: false,
  });

  const categories = ['Structural', 'Design', 'Finishing', 'Protection', 'Interiors', 'Utility', 'Turnkey'];

  const filteredServices = services.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      category: 'Structural',
      icon: 'Building2',
      shortDesc: '',
      fullDesc: '',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1000&q=80',
      featuresText: '',
      featured: false,
    });
    setModalOpen(true);
  };

  const openEditModal = (service) => {
    setEditingItem(service);
    setFormData({
      title: service.title,
      category: service.category || 'Structural',
      icon: service.icon || 'Building2',
      shortDesc: service.shortDesc || '',
      fullDesc: service.fullDesc || '',
      image: service.image || '',
      featuresText: service.features ? service.features.join('\n') : '',
      featured: !!service.featured,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const features = formData.featuresText
      .split('\n')
      .map(f => f.trim())
      .filter(Boolean);

    const payload = {
      title: formData.title,
      category: formData.category,
      icon: formData.icon,
      shortDesc: formData.shortDesc,
      fullDesc: formData.fullDesc,
      image: formData.image,
      features,
      featured: formData.featured,
      slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    };

    if (editingItem) {
      await ApiService.updateService(editingItem.id, payload);
    } else {
      await ApiService.createService(payload);
    }
    setModalOpen(false);
  };

  const handleDelete = async () => {
    if (deleteId) {
      await ApiService.deleteService(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            2. Manage Services ({services.length})
          </h1>
          <p className="text-xs text-warm-400">
            Add, update, or remove architectural and construction services showcased on the customer website.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-sm">
        <Search className="w-4 h-4 text-warm-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-charcoal-900 border border-charcoal-800 text-xs text-warm-100 focus:border-gold-500 focus:outline-none transition"
        />
      </div>

      {/* Services Table / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="p-5 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 transition flex flex-col justify-between shadow-lg"
          >
            <div>
              {/* Thumbnail */}
              <div className="relative h-40 rounded-xl overflow-hidden mb-4 border border-charcoal-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-charcoal-950/90 border border-gold-500/30 text-[10px] font-semibold uppercase text-gold-400">
                  {service.category}
                </span>
                <div className="absolute bottom-2.5 left-2.5 w-8 h-8 rounded-lg bg-charcoal-950/90 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                  <ServiceIcon name={service.icon} className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-serif font-bold text-base text-warm-50 mb-1">
                {service.title}
              </h3>
              <p className="text-xs text-warm-300 line-clamp-2 mb-3">
                {service.shortDesc}
              </p>

              {service.features && (
                <div className="text-[11px] text-warm-400 space-y-1 mb-4">
                  <span className="font-semibold text-gold-400 block text-[10px] uppercase tracking-wider">Features ({service.features.length}):</span>
                  <p className="line-clamp-2">{service.features.join(' • ')}</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-charcoal-800 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => openEditModal(service)}
                className="p-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-200 hover:text-gold-400 transition"
                title="Edit service"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setDeleteId(service.id)}
                className="p-2 rounded-lg bg-charcoal-800 hover:bg-red-950/60 text-warm-200 hover:text-red-400 transition"
                title="Delete service"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-charcoal-900 border border-gold-500/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-warm-400 hover:text-warm-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-serif font-bold text-warm-50 mb-4">
              {editingItem ? 'Edit Service' : 'Add New Service'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Service Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="e.g. Turnkey Villa Construction"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Image Upload Interface */}
              <ImageUploadField
                label="Service Representative Image"
                value={formData.image}
                onChange={(img) => setFormData({ ...formData, image: img })}
              />

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Short Summary *
                </label>
                <textarea
                  rows={2}
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  required
                  placeholder="Brief 1-2 sentence overview shown on preview cards..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Full Scope of Work Description *
                </label>
                <textarea
                  rows={4}
                  value={formData.fullDesc}
                  onChange={(e) => setFormData({ ...formData, fullDesc: e.target.value })}
                  required
                  placeholder="Detailed technical description, materials, standards and warranties..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Key Deliverables / Features (One per line)
                </label>
                <textarea
                  rows={3}
                  value={formData.featuresText}
                  onChange={(e) => setFormData({ ...formData, featuresText: e.target.value })}
                  placeholder="Reinforced soil and footing testing&#10;Saint-Gobain certified materials&#10;Weekly digital inspection logs"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
                />
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
                  {editingItem ? 'Save Changes' : 'Create Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Service"
        message="Are you sure you want to delete this service? It will no longer appear on the customer website."
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
