import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Search, Sparkles, Filter } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';
import ImageUploadField from '../../components/admin/ImageUploadField';
import ConfirmDialog from '../../components/admin/ConfirmDialog';

export default function ManageGallery() {
  const { gallery, categories } = useSite();
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    category: 'Modern Houses',
    image: '',
    description: '',
    featured: false,
  });

  const filtered = gallery.filter((item) => {
    const matchesCat = selectedCat === 'All' || item.category === selectedCat;
    const matchesSearch = !search ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      category: categories[0]?.name || 'Modern Houses',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: '',
      featured: false,
    });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      image: item.image,
      description: item.description || '',
      featured: !!item.featured,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await ApiService.updateGalleryItem(editingItem.id, formData);
    } else {
      await ApiService.createGalleryItem(formData);
    }
    setModalOpen(false);
  };

  const handleDelete = async () => {
    if (deleteId) {
      await ApiService.deleteGalleryItem(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            3. Manage Design Gallery ({gallery.length})
          </h1>
          <p className="text-xs text-warm-400">
            Upload, categorize, and organize architectural photos and 3D elevations.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Upload New Design</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
          <button
            onClick={() => setSelectedCat('All')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition whitespace-nowrap ${
              selectedCat === 'All'
                ? 'bg-gold-500 text-charcoal-950'
                : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
            }`}
          >
            All ({gallery.length})
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.name)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition whitespace-nowrap ${
                selectedCat === c.name
                  ? 'bg-gold-500 text-charcoal-950'
                  : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="w-4 h-4 text-warm-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search designs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-charcoal-900 border border-charcoal-800 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 overflow-hidden bg-charcoal-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-charcoal-950/90 border border-gold-500/30 text-[10px] font-semibold uppercase text-gold-400 backdrop-blur-md">
                  {item.category}
                </span>
                {item.featured && (
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-gold-500 text-charcoal-950 text-[10px] font-bold uppercase">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-4 space-y-1.5">
                <h3 className="font-serif font-bold text-sm text-warm-50 truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-warm-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="p-3 border-t border-charcoal-800 flex items-center justify-end gap-2 bg-charcoal-850/50">
              <button
                type="button"
                onClick={() => openEditModal(item)}
                className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-200 hover:text-gold-400 transition"
                title="Edit item"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setDeleteId(item.id)}
                className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-red-950/60 text-warm-200 hover:text-red-400 transition"
                title="Delete item"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-charcoal-900 border border-gold-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-warm-400 hover:text-warm-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-serif font-bold text-warm-50 mb-4">
              {editingItem ? 'Edit Gallery Item' : 'Upload Gallery Design'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Design Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  placeholder="e.g. Modern Minimalist Living Lounge"
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
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* Media Upload Component */}
              <ImageUploadField
                label="High Resolution Architectural Photo"
                value={formData.image}
                onChange={(img) => setFormData({ ...formData, image: img })}
              />

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Design Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Architectural style, color palette, lighting specifics..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="featuredCheck"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 rounded accent-gold-500"
                />
                <label htmlFor="featuredCheck" className="text-xs text-warm-200">
                  Feature on website homepage preview
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
                  {editingItem ? 'Save Changes' : 'Upload Design'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Dialog */}
      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Design Photo"
        message="Are you sure you want to delete this gallery item?"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
