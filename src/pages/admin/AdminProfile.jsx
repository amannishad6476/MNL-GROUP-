import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Shield, Key, LogOut, CheckCircle2, RotateCcw } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { Storage } from '../../data/storage';
import ImageUploadField from '../../components/admin/ImageUploadField';
import ConfirmDialog from '../../components/admin/ConfirmDialog';

export default function AdminProfile() {
  const { adminUser, updateProfile, logout } = useAdminAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ ...adminUser });
  const [saved, setSaved] = useState(false);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleResetData = () => {
    Storage.resetToDefaults();
    setResetDialogOpen(false);
    window.location.reload();
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            14. Administrator Profile
          </h1>
          <p className="text-xs text-warm-400">
            Manage your credentials, session controls, and administrative privileges.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Profile Updated!</span>
          </div>
        )}
      </div>

      {/* Profile Card & Form */}
      <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 shadow-xl space-y-6">
        <div className="flex items-center gap-4 pb-6 border-b border-charcoal-800">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-gold-500/40 shrink-0">
            <img src={formData.avatar} alt={formData.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-lg font-serif font-bold text-warm-50">{formData.name}</h2>
            <p className="text-xs text-gold-400 font-semibold">{formData.role}</p>
            <p className="text-[11px] text-warm-400 mt-0.5">Session active since {adminUser.lastLogin}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                Display Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1">
                Admin Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
              />
            </div>
          </div>

          <ImageUploadField
            label="Avatar Photo"
            value={formData.avatar}
            onChange={(img) => setFormData({ ...formData, avatar: img })}
          />

          <div className="pt-3 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition shadow-gold-glow"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>

      {/* Session Security & Reset Data */}
      <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-4 shadow-xl">
        <h3 className="text-sm uppercase tracking-wider text-warm-200 font-semibold">
          System Management & Session Controls
        </h3>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-charcoal-850 border border-charcoal-800">
          <div>
            <span className="font-semibold text-xs text-warm-100 block">Reset Website to Initial Preset</span>
            <span className="text-[11px] text-warm-400">Clears all custom localStorage edits and resets all 12 services, gallery items, and banners to factory defaults.</span>
          </div>
          <button
            type="button"
            onClick={() => setResetDialogOpen(true)}
            className="px-4 py-2 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-amber-400 text-xs font-semibold uppercase tracking-wider transition flex items-center gap-2 shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Data</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-charcoal-850 border border-charcoal-800">
          <div>
            <span className="font-semibold text-xs text-warm-100 block">End Administrative Session</span>
            <span className="text-[11px] text-warm-400">Section 15: Terminates current session token and redirects to login screen.</span>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-500/40 text-xs font-semibold uppercase tracking-wider transition flex items-center gap-2 shrink-0"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>15. Logout</span>
          </button>
        </div>
      </div>

      <ConfirmDialog
        isOpen={resetDialogOpen}
        title="Reset All Website Data"
        message="Are you sure you want to reset all website content, gallery items, and projects to initial presets?"
        confirmText="Reset Now"
        onConfirm={handleResetData}
        onCancel={() => setResetDialogOpen(false)}
      />
    </div>
  );
}
