import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { Storage } from '../data/storage';
import { Phone, Mail, MapPin, Clock, Save, CheckCircle2 } from 'lucide-react';

export default function ContactInfo() {
  const { company } = useAdminData();
  const [formData, setFormData] = useState({ ...company });
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    Storage.saveCompany(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-white">Contact Information</h1>
          <p className="text-sm text-gray-400 mt-1">
            Update official company communication channels, office address, and hours.
          </p>
        </div>
      </div>

      {saved && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
          <CheckCircle2 size={18} />
          <span>Contact information saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Phone & WhatsApp */}
        <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-serif font-semibold text-white flex items-center gap-2 border-b border-[#23262d] pb-4">
            <Phone className="text-[#c5a059]" size={20} />
            Phone & Direct Lines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Primary Phone Number
              </label>
              <input
                type="text"
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Alternate Phone Number
              </label>
              <input
                type="text"
                value={formData.phoneAlt || ''}
                onChange={(e) => setFormData({ ...formData, phoneAlt: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                WhatsApp Business Number
              </label>
              <input
                type="text"
                value={formData.whatsapp || ''}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="+91..."
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                required
              />
            </div>
          </div>
        </div>

        {/* Email Addresses */}
        <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-serif font-semibold text-white flex items-center gap-2 border-b border-[#23262d] pb-4">
            <Mail className="text-[#c5a059]" size={20} />
            Official Email Channels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Primary Contact Email
              </label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Support / Projects Email
              </label>
              <input
                type="email"
                value={formData.supportEmail || ''}
                onChange={(e) => setFormData({ ...formData, supportEmail: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
              />
            </div>
          </div>
        </div>

        {/* Address & Timings */}
        <div className="bg-[#121316] border border-[#23262d] rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-serif font-semibold text-white flex items-center gap-2 border-b border-[#23262d] pb-4">
            <MapPin className="text-[#c5a059]" size={20} />
            Physical Office & Operation Hours
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Office Address (Full Postal)
              </label>
              <textarea
                rows={3}
                value={formData.address || ''}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                  Operating Hours
                </label>
                <input
                  type="text"
                  value={formData.workingHours || ''}
                  onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
                  placeholder="e.g. Mon - Sat: 9:00 AM - 7:00 PM"
                  className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                  Emergency Support Availability
                </label>
                <input
                  type="text"
                  value={formData.emergencySupport || 'Available on Call / WhatsApp'}
                  onChange={(e) => setFormData({ ...formData, emergencySupport: e.target.value })}
                  className="w-full bg-[#181a1f] border border-[#2b2e37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-black font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-[#c5a059]/20"
          >
            <Save size={18} />
            <span>Save Contact Info</span>
          </button>
        </div>
      </form>
    </div>
  );
}
