import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Search, MapPin, Calendar } from 'lucide-react';
import { useAdminData } from '../context/AdminDataContext';
import { ApiService } from '../data/apiService';
import ImageUploadField from '../components/ImageUploadField';
import ConfirmDialog from '../components/ConfirmDialog';

export default function ManageProjects() {
  const { projects, refresh } = useAdminData();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    category: 'House Construction',
    status: 'Completed',
    location: '',
    area: '',
    timeline: '',
    image: '',
    description: '',
    featured: false,
  });

  const filtered = projects.filter((p) => {
    const matchesStatus = statusFilter === 'All' || p.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      category: 'Residential Architecture',
      status: 'Completed',
      location: '',
      area: '',
      timeline: '',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: '',
      featured: false,
    });
    setModalOpen(true);
  };

  const openEditModal = (p) => {
    setEditingItem(p);
    setFormData({
      title: p.title,
      category: p.category || 'Turnkey Construction',
      status: p.status || 'Completed',
      location: p.location || '',
      area: p.area || '',
      timeline: p.timeline || '',
      image: p.image || '',
      description: p.description || '',
      featured: !!p.featured,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await ApiService.updateProject(editingItem.id, formData);
    } else {
      await ApiService.createProject(formData);
    }
    refresh();
    setModalOpen(false);
  };

  const handleDelete = async () => {
    if (deleteId) {
      await ApiService.deleteProject(deleteId);
      refresh();
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            4. Manage Projects ({projects.length})
          </h1>
          <p className="text-xs text-warm-400">
            Monitor completed architectural residences and actively supervised ongoing developments.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {['All', 'Completed', 'Ongoing'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                statusFilter === st
                  ? 'bg-gold-500 text-charcoal-950'
                  : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
              }`}
            >
              {st} ({st === 'All' ? projects.length : projects.filter(p => p.status.toLowerCase() === st.toLowerCase()).length})
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-warm-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-charcoal-900 border border-charcoal-800 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 overflow-hidden bg-charcoal-950">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border backdrop-blur-md ${
                    proj.status.toLowerCase() === 'completed'
                      ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                      : 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                  }`}
                >
                  {proj.status}
                </span>

                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/90 border border-gold-500/30 text-[10px] font-semibold uppercase text-gold-400">
                  {proj.category}
                </span>

                {proj.area && (
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-charcoal-950/80 text-[11px] text-warm-300">
                    {proj.area}
                  </span>
                )}
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-serif font-bold text-lg text-warm-50">
                  {proj.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-warm-400">
                  <div className="flex items-center gap-1.5 text-gold-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  {proj.timeline && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{proj.timeline}</span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-warm-300 line-clamp-3 pt-1">
                  {proj.description}
                </p>
              </div>
            </div>

            <div className="p-3.5 border-t border-charcoal-800 flex items-center justify-between bg-charcoal-850/40">
              <span className="text-[11px] text-warm-400">
                ID: {proj.id}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openEditModal(proj)}
                  className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-200 hover:text-gold-400 transition"
                  title="Edit project"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeleteId(proj.id)}
                  className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-red-950/60 text-warm-200 hover:text-red-400 transition"
                  title="Delete project"
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
          <div className="bg-charcoal-900 border border-gold-500/40 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-warm-400 hover:text-warm-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-serif font-bold text-warm-50 mb-4">
              {editingItem ? 'Edit Project' : 'Add New Project'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="e.g. The Grand Courtyard Villa"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Status *
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  >
                    <option value="Completed">Completed</option>
                    <option value="Ongoing">Ongoing</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    placeholder="e.g. Sector 42, Green Meadows"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Built-up Area
                  </label>
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    placeholder="e.g. 5,400 sq.ft"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                    Timeline / Duration
                  </label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g. 14 Months"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
                  />
                </div>
              </div>

              <ImageUploadField
                label="Primary Project Visual"
                value={formData.image}
                onChange={(img) => setFormData({ ...formData, image: img })}
              />

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                  Project Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Architectural features, structural specifications..."
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
                  {editingItem ? 'Save Changes' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Project"
        message="Are you sure you want to remove this project?"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
