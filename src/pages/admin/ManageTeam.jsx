import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Users, UserCheck } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';
import ImageUploadField from '../../components/admin/ImageUploadField';
import ConfirmDialog from '../../components/admin/ConfirmDialog';

export default function ManageTeam() {
  const { team } = useSite();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    experience: '',
    image: '',
    bio: '',
    active: true,
  });

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      role: '',
      experience: '',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
      bio: '',
      active: true,
    });
    setModalOpen(true);
  };

  const openEditModal = (member) => {
    setEditingItem(member);
    setFormData({
      name: member.name,
      role: member.role,
      experience: member.experience || '',
      image: member.image || '',
      bio: member.bio || '',
      active: member.active !== false,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await ApiService.updateTeamMember(editingItem.id, formData);
    } else {
      await ApiService.createTeamMember(formData);
    }
    setModalOpen(false);
  };

  const handleDelete = async () => {
    if (deleteId) {
      await ApiService.deleteTeamMember(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            8. Manage Team Members ({team.length})
          </h1>
          <p className="text-xs text-warm-400">
            Manage certified structural engineers, architects, and project managers displayed on the About page.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Team Member</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <div
            key={m.id}
            className="rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 bg-charcoal-950">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                <span className={`absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${m.active ? 'bg-emerald-500/90 text-charcoal-950' : 'bg-charcoal-800 text-warm-400'}`}>
                  {m.active ? 'Active' : 'Inactive'}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold block">
                  {m.experience}
                </span>
                <h3 className="font-serif font-bold text-base text-warm-50">{m.name}</h3>
                <p className="text-xs text-warm-300 font-medium">{m.role}</p>
                <p className="text-[11px] text-warm-400 line-clamp-2 pt-1">{m.bio}</p>
              </div>
            </div>

            <div className="p-3 border-t border-charcoal-800 flex items-center justify-end gap-1.5 bg-charcoal-850/40">
              <button
                type="button"
                onClick={() => openEditModal(m)}
                className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-200 hover:text-gold-400 transition"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setDeleteId(m.id)}
                className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-red-950/60 text-warm-200 hover:text-red-400 transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-charcoal-900 border border-gold-500/40 rounded-2xl max-w-md w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-warm-400 hover:text-warm-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-serif font-bold text-warm-50 mb-4">
              {editingItem ? 'Edit Team Member' : 'Add Team Member'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Full Name & Title *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="e.g. Er. Mukund N. Lal"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Role / Position *
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                  placeholder="e.g. Chief Structural Consultant"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Specialization / Domain
                </label>
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="e.g. Structural Engineering & Turnkey Quality"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                />
              </div>

              <ImageUploadField
                label="Profile Photograph"
                value={formData.image}
                onChange={(img) => setFormData({ ...formData, image: img })}
              />

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Short Professional Biography
                </label>
                <textarea
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Technical background, engineering rigor, credentials..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
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
                  {editingItem ? 'Save Changes' : 'Save Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Dialog */}
      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Team Member"
        message="Are you sure you want to remove this member profile?"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
