import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, FolderTree } from 'lucide-react';
import { useAdminData } from '../context/AdminDataContext';
import { ApiService } from '../data/apiService';
import ConfirmDialog from '../components/ConfirmDialog';

export default function ManageCategories() {
  const { categories, gallery, refresh } = useAdminData();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [name, setName] = useState('');

  const openCreateModal = () => {
    setEditingItem(null);
    setName('');
    setModalOpen(true);
  };

  const openEditModal = (cat) => {
    setEditingItem(cat);
    setName(cat.name);
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const payload = {
      name: name.trim(),
      slug: name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    };

    if (editingItem) {
      await ApiService.updateCategory(editingItem.id, payload);
    } else {
      await ApiService.createCategory(payload);
    }
    refresh();
    setModalOpen(false);
  };

  const handleDelete = async () => {
    if (deleteId) {
      await ApiService.deleteCategory(deleteId);
      refresh();
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            5. Manage Categories ({categories.length})
          </h1>
          <p className="text-xs text-warm-400">
            Define classification taxonomies for design gallery items and project blueprints.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const linkedCount = gallery.filter(g => g.category === cat.name).length;
          return (
            <div
              key={cat.id}
              className="p-5 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 transition flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                  <FolderTree className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-warm-50">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-warm-400">
                    {linkedCount} linked visual{linkedCount !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => openEditModal(cat)}
                  className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-300 hover:text-gold-400 transition"
                  title="Edit category"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeleteId(cat.id)}
                  className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-red-950/60 text-warm-300 hover:text-red-400 transition"
                  title="Delete category"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-charcoal-900 border border-gold-500/40 rounded-2xl max-w-sm w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-warm-400 hover:text-warm-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-serif font-bold text-warm-50 mb-4">
              {editingItem ? 'Edit Category' : 'Create Category'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Category Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="e.g. Modern Residential Facades"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
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
                  {editingItem ? 'Save Changes' : 'Create Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Category"
        message="Are you sure you want to delete this category?"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
