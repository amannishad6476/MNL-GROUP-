import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Star, Info } from 'lucide-react';
import { useAdminData } from '../context/AdminDataContext';
import { ApiService } from '../data/apiService';
import ImageUploadField from '../components/ImageUploadField';
import ConfirmDialog from '../components/ConfirmDialog';

export default function ManageReviews() {
  const { reviews, refresh } = useAdminData();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    role: 'Homeowner',
    projectType: 'Turnkey Villa Construction',
    rating: 5,
    comment: '',
    avatar: '',
    isDemoPlaceholder: true,
    published: true,
  });

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      role: 'Homeowner',
      projectType: 'Turnkey Villa Construction',
      rating: 5,
      comment: '',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      isDemoPlaceholder: false,
      published: true,
    });
    setModalOpen(true);
  };

  const openEditModal = (rev) => {
    setEditingItem(rev);
    setFormData({
      name: rev.name,
      role: rev.role,
      projectType: rev.projectType,
      rating: rev.rating || 5,
      comment: rev.comment,
      avatar: rev.avatar || '',
      isDemoPlaceholder: !!rev.isDemoPlaceholder,
      published: rev.published !== false,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await ApiService.updateReview(editingItem.id, formData);
    } else {
      await ApiService.createReview(formData);
    }
    refresh();
    setModalOpen(false);
  };

  const handleDelete = async () => {
    if (deleteId) {
      await ApiService.deleteReview(deleteId);
      refresh();
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            7. Manage Customer Reviews ({reviews.length})
          </h1>
          <p className="text-xs text-warm-400">
            Manage client testimonials displayed on the customer website.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Review</span>
        </button>
      </div>

      <div className="p-4 rounded-xl bg-charcoal-900 border border-gold-500/25 flex items-center gap-3 text-xs text-warm-300">
        <Info className="w-4 h-4 text-gold-400 shrink-0" />
        <span>
          <strong>Transparency Control:</strong> Each testimonial can be flagged as "Demo Placeholder" until genuine client reviews are collected and verified.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 transition flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                {rev.isDemoPlaceholder ? (
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-semibold text-amber-300 uppercase">
                    Demo Placeholder
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-semibold text-emerald-300 uppercase">
                    Verified Review
                  </span>
                )}

                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < (rev.rating || 5) ? 'fill-gold-400' : 'text-charcoal-600'}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-xs font-semibold text-gold-400 mb-2">
                {rev.projectType}
              </p>

              <p className="text-xs text-warm-200 italic leading-relaxed mb-4 line-clamp-4">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-gold-500/30 shrink-0">
                  <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs text-warm-50">{rev.name}</h4>
                  <p className="text-[10px] text-warm-400">{rev.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => openEditModal(rev)}
                  className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-200 hover:text-gold-400 transition"
                  title="Edit review"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeleteId(rev.id)}
                  className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-red-950/60 text-warm-200 hover:text-red-400 transition"
                  title="Delete review"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

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
              {editingItem ? 'Edit Review' : 'Add Customer Review'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Role / Title
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Homeowner"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Project Undertaken
                  </label>
                  <input
                    type="text"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    placeholder="e.g. Turnkey Villa Construction"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Rating (1 - 5)
                  </label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  >
                    {[5, 4, 3, 2, 1].map((r) => (
                      <option key={r} value={r}>{r} Stars</option>
                    ))}
                  </select>
                </div>
              </div>

              <ImageUploadField
                label="Client Avatar Photo"
                value={formData.avatar}
                onChange={(img) => setFormData({ ...formData, avatar: img })}
              />

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Testimonial Comment *
                </label>
                <textarea
                  rows={3}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  required
                  placeholder="Client feedback on structural quality, milestones..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
                />
              </div>

              <div className="space-y-2 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isDemoPlaceholder}
                    onChange={(e) => setFormData({ ...formData, isDemoPlaceholder: e.target.checked })}
                    className="w-4 h-4 rounded accent-gold-500"
                  />
                  <span className="text-xs text-warm-200">
                    Mark as Demo Placeholder (shows demo tag on customer site)
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-4 h-4 rounded accent-gold-500"
                  />
                  <span className="text-xs text-warm-200">
                    Publish publicly on customer website
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
                  {editingItem ? 'Save Changes' : 'Create Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Review"
        message="Are you sure you want to delete this testimonial?"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
