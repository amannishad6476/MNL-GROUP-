import React, { useState } from 'react';
import {
  Inbox,
  Phone,
  MessageCircle,
  Eye,
  Trash2,
  Search,
  X
} from 'lucide-react';
import { useAdminData } from '../context/AdminDataContext';
import { ApiService } from '../data/apiService';
import ConfirmDialog from '../components/ConfirmDialog';

export default function CustomerEnquiries() {
  const { enquiries, refresh } = useAdminData();
  const [statusFilter, setStatusFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const statuses = ['All', 'New', 'Contacted', 'In Discussion', 'Resolved'];

  const filtered = enquiries.filter((e) => {
    const matchesStatus = statusFilter === 'All' || e.status === statusFilter;
    const matchesSearch = !search ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.phone.toLowerCase().includes(search.toLowerCase()) ||
      e.service.toLowerCase().includes(search.toLowerCase()) ||
      (e.location && e.location.toLowerCase().includes(search.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = async (id, newStatus) => {
    await ApiService.updateEnquiryStatus(id, newStatus);
    refresh();
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
    }
  };

  const handleDelete = async () => {
    if (deleteId) {
      await ApiService.deleteEnquiry(deleteId);
      refresh();
      if (selectedEnquiry && selectedEnquiry.id === deleteId) {
        setSelectedEnquiry(null);
      }
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            6. Customer Enquiries ({enquiries.length})
          </h1>
          <p className="text-xs text-warm-400">
            Incoming inquiries submitted through customer website consultation and estimate forms.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
          {statuses.map((st) => {
            const count = st === 'All' ? enquiries.length : enquiries.filter(e => e.status === st).length;
            return (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition whitespace-nowrap ${
                  statusFilter === st
                    ? 'bg-gold-500 text-charcoal-950 font-bold'
                    : 'bg-charcoal-900 text-warm-300 hover:text-gold-400 border border-charcoal-800'
                }`}
              >
                {st} ({count})
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-warm-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search enquiries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-charcoal-900 border border-charcoal-800 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-charcoal-900 rounded-2xl border border-charcoal-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-charcoal-800 bg-charcoal-850/60 text-warm-400 uppercase tracking-wider">
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-warm-400">
                    No inquiries found matching your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((enq) => (
                  <tr key={enq.id} className="hover:bg-charcoal-850/50 transition">
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-warm-100 text-sm">{enq.name}</div>
                      <div className="text-warm-400 text-[11px] flex items-center gap-3 mt-0.5">
                        <span>{enq.phone}</span>
                        {enq.email && <span>• {enq.email}</span>}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-gold-400">
                      {enq.service}
                    </td>
                    <td className="py-3.5 px-4 text-warm-300">
                      {enq.location || "N/A"}
                    </td>
                    <td className="py-3.5 px-4 text-warm-400">
                      {enq.date}
                    </td>
                    <td className="py-3.5 px-4">
                      <select
                        value={enq.status}
                        onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider border focus:outline-none transition ${
                          enq.status === 'New'
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                            : enq.status === 'Contacted'
                            ? 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                            : enq.status === 'In Discussion'
                            ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                            : 'bg-charcoal-800 text-warm-300 border-charcoal-700'
                        }`}
                      >
                        <option value="New" className="bg-charcoal-900 text-warm-100">New</option>
                        <option value="Contacted" className="bg-charcoal-900 text-warm-100">Contacted</option>
                        <option value="In Discussion" className="bg-charcoal-900 text-warm-100">In Discussion</option>
                        <option value="Resolved" className="bg-charcoal-900 text-warm-100">Resolved</option>
                      </select>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => setSelectedEnquiry(enq)}
                          className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-200 hover:text-gold-400 transition"
                          title="View message details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${enq.name}, this is MNL GROUP following up on your ${enq.service} enquiry.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 transition"
                          title="Reply on WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        </a>

                        <a
                          href={`tel:${enq.phone.replace(/[^0-9+]/g, '')}`}
                          className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-warm-200 hover:text-gold-400 transition"
                          title="Call client"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>

                        <button
                          type="button"
                          onClick={() => setDeleteId(enq.id)}
                          className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-red-950/60 text-warm-200 hover:text-red-400 transition"
                          title="Delete enquiry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-charcoal-900 border border-gold-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setSelectedEnquiry(null)}
              className="absolute top-4 right-4 text-warm-400 hover:text-warm-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-0.5">
                Enquiry Details • {selectedEnquiry.date}
              </span>
              <h2 className="text-xl font-serif font-bold text-warm-50">
                {selectedEnquiry.name}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-charcoal-850 p-3.5 rounded-xl border border-charcoal-800">
              <div>
                <span className="text-warm-400 block text-[10px] uppercase">Service:</span>
                <span className="font-semibold text-gold-400">{selectedEnquiry.service}</span>
              </div>
              <div>
                <span className="text-warm-400 block text-[10px] uppercase">Phone:</span>
                <span className="font-semibold text-warm-100">{selectedEnquiry.phone}</span>
              </div>
              <div>
                <span className="text-warm-400 block text-[10px] uppercase">Location:</span>
                <span className="text-warm-200">{selectedEnquiry.location || "Not specified"}</span>
              </div>
              <div>
                <span className="text-warm-400 block text-[10px] uppercase">Email:</span>
                <span className="text-warm-200">{selectedEnquiry.email || "Not specified"}</span>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-warm-400 font-semibold block mb-1.5">
                Client Project Message:
              </label>
              <div className="p-3.5 rounded-xl bg-charcoal-850 border border-charcoal-800 text-xs text-warm-200 leading-relaxed max-h-48 overflow-y-auto">
                {selectedEnquiry.message || "No specific message provided. Client requested direct callback."}
              </div>
            </div>

            <div className="pt-3 border-t border-charcoal-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-warm-400">Status:</span>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) => handleStatusChange(selectedEnquiry.id, e.target.value)}
                  className="px-2.5 py-1 rounded-lg text-xs bg-charcoal-850 border border-charcoal-700 text-warm-100"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="In Discussion">In Discussion</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="px-4 py-2 rounded-xl bg-charcoal-800 text-xs uppercase font-semibold text-warm-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Enquiry Record"
        message="Are you sure you want to permanently delete this customer enquiry?"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
