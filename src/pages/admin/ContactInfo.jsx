import React, { useState } from 'react';
import { Save, CheckCircle2, Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';

export default function ContactInfo() {
  const { company } = useSite();
  const [formData, setFormData] = useState({ ...company });
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await ApiService.updateCompanyInfo(formData);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-warm-50">
            11. Contact Information
          </h1>
          <p className="text-xs text-warm-400">
            Configure phone numbers, WhatsApp links, direct emails, studio address, and hours displayed across the website.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Contacts Synced Live!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-6 shadow-xl">
        {/* Phone & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Primary Phone Number *</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone || ''}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
            />
            <p className="text-[11px] text-warm-400 mt-1">Used for "Call Now" buttons and headers.</p>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Alternate / Landline Phone</span>
            </label>
            <input
              type="text"
              name="altPhone"
              value={formData.altPhone || ''}
              onChange={handleChange}
              placeholder="+91 98765 43211"
              className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
            />
          </div>
        </div>

        {/* WhatsApp & Message */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5 flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Direct Number *</span>
            </label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp || ''}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
              Default WhatsApp Greeting Text
            </label>
            <input
              type="text"
              name="whatsappMessage"
              value={formData.whatsappMessage || ''}
              onChange={handleChange}
              placeholder="Hello MNL GROUP! I'd like to consult on my upcoming project."
              className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Emails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>Official Enquiries Email *</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              required
              placeholder="contact@mnlgroup.com"
              className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>Customer Support Email</span>
            </label>
            <input
              type="email"
              name="supportEmail"
              value={formData.supportEmail || ''}
              onChange={handleChange}
              placeholder="support@mnlgroup.com"
              className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Office Address */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Corporate Headquarters & Experience Center Address *</span>
          </label>
          <textarea
            rows={2}
            name="address"
            value={formData.address || ''}
            onChange={handleChange}
            required
            placeholder="MNL Corporate Tower, Level 4, Prestige Avenue, Landmark City, India"
            className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none resize-none"
          />
        </div>

        {/* Working Hours */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>Studio Working Hours & Visiting Schedule</span>
          </label>
          <input
            type="text"
            name="workingHours"
            value={formData.workingHours || ''}
            onChange={handleChange}
            placeholder="Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: By Appointment"
            className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 text-xs text-warm-100 focus:border-gold-500 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-charcoal-800 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Contact Details'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
