import React, { useState } from 'react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { Storage } from '../data/storage';
import ConfirmDialog from '../components/ConfirmDialog';
import { User, Shield, KeyRound, RefreshCw, LogOut, CheckCircle2, Server } from 'lucide-react';

export default function AdminProfile() {
  const { user, logout } = useAdminAuth();
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetData = () => {
    Storage.resetToDefaults();
    setResetConfirmOpen(false);
    setResetSuccess(true);
    setTimeout(() => setResetSuccess(false), 3000);
  };

  const apiUrl = import.meta.env.VITE_API_URL || 'Not Configured (Running in Mock/Client-Storage Mode)';

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-serif font-bold text-white">Administrator Profile & System</h1>
        <p className="text-sm text-gray-400 mt-1">
          Review your active administrative session, system endpoints, and manage local data.
        </p>
      </div>

      {resetSuccess && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
          <CheckCircle2 size={18} />
          <span>Application state successfully reset to original seed data!</span>
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#23262d] pb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c5a059] to-[#d4af37] flex items-center justify-center text-black font-bold text-2xl shadow-lg shadow-[#c5a059]/20 font-serif">
              {user?.name ? user.name.charAt(0) : 'A'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-serif font-semibold text-white">{user?.name || 'Admin'}</h2>
                <span className="text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30 font-semibold">
                  {user?.role || 'Super Admin'}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">{user?.email || 'admin@mnlgroup.in'}</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 hover:bg-rose-500/25 transition text-sm font-semibold w-fit"
          >
            <LogOut size={16} />
            <span>Sign Out Session</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#181a1f] border border-[#2b2e37] space-y-1">
            <div className="text-gray-400">Session ID</div>
            <div className="font-mono text-white text-xs break-all">
              {user?.sessionId || 'session_active_verified'}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#181a1f] border border-[#2b2e37] space-y-1">
            <div className="text-gray-400">Authenticated At</div>
            <div className="text-white text-xs">
              {user?.loginAt ? new Date(user.loginAt).toLocaleString() : 'Current Session'}
            </div>
          </div>
        </div>
      </div>

      {/* Backend Integration Ready Status */}
      <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-4">
        <h2 className="text-base font-serif font-semibold text-white flex items-center gap-2">
          <Server className="text-[#c5a059]" size={18} />
          Backend API Integration Point
        </h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          The admin dashboard is structured with an API service abstraction layer (<code className="text-[#c5a059]">src/data/apiService.js</code>). Once your Node.js + Express backend is deployed (e.g. on Render with Neon PostgreSQL), set the environment variable below in Vercel to switch from client simulation to live database operations without code changes.
        </p>

        <div className="p-4 rounded-xl bg-[#181a1f] border border-[#2b2e37] space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Target Endpoint (`VITE_API_URL`):</span>
            <span className="px-2 py-0.5 rounded bg-[#2b2e37] text-gray-300 font-mono text-[11px]">
              {import.meta.env.VITE_API_URL ? 'Connected' : 'Standalone Mode'}
            </span>
          </div>
          <div className="text-xs font-mono text-white break-all">{apiUrl}</div>
        </div>
      </div>

      {/* Data Management & Factory Reset */}
      <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-serif font-semibold text-white flex items-center gap-2">
              <RefreshCw className="text-[#c5a059]" size={18} />
              Reset Demo Data to Seed Factory Defaults
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              If you modified services, projects, or gallery items during testing, this will reset all local collections back to their initial seed state.
            </p>
          </div>
        </div>

        <button
          onClick={() => setResetConfirmOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 transition text-xs font-semibold"
        >
          <RefreshCw size={14} />
          <span>Reset All Data to Factory Default</span>
        </button>
      </div>

      <ConfirmDialog
        isOpen={resetConfirmOpen}
        title="Reset All Administrative Data"
        message="This will overwrite any customized services, gallery items, projects, reviews, banners, and content with the initial seed data. Are you sure?"
        onConfirm={handleResetData}
        onCancel={() => setResetConfirmOpen(false)}
      />
    </div>
  );
}
