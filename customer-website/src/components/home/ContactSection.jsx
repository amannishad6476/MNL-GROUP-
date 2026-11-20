import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Paperclip,
  X,
  FileText,
  Check
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';

const popularServices = [
  "Turnkey House Construction",
  "Architecture & 2D/3D Design",
  "Interior Design",
  "Exterior Design & Facade",
  "Modular Kitchen",
  "Painting & Finishing",
  "POP & False Ceiling",
  "Custom Furniture",
  "Waterproofing",
  "Flooring & Marble",
  "Complete Home Renovation",
  "Plumbing & Electrical"
];

export default function ContactSection() {
  const { company, services } = useSite();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    selectedServices: ['Turnkey House Construction'],
    message: ''
  });

  const [attachment, setAttachment] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const decoded = decodeURIComponent(serviceParam);
      setFormData(prev => ({
        ...prev,
        selectedServices: [decoded]
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (srv) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(srv);
      const updated = exists
        ? prev.selectedServices.filter(s => s !== srv)
        : [...prev.selectedServices, srv];
      return { ...prev, selectedServices: updated };
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('Attachment must be smaller than 10MB.');
        return;
      }
      setAttachment({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        type: file.type
      });
      setErrorMsg('');
    }
  };

  const removeAttachment = () => {
    setAttachment(null);
  };

  const cleanPhone = company.phone ? company.phone.replace(/[^0-9+]/g, '') : '+919876543210';
  const cleanWhatsApp = company.whatsapp ? company.whatsapp.replace(/[^0-9]/g, '') : '919876543210';

  const generateWhatsAppMessage = () => {
    const srvText = formData.selectedServices.length > 0 ? formData.selectedServices.join(', ') : 'General Consultation';
    const text = `Hello MNL GROUP!
I would like to request an architectural & construction consultation.

*Client Details:*
- Name: ${formData.name || 'Not provided'}
- Phone: ${formData.phone || 'Not provided'}
- Location: ${formData.location || 'Not provided'}
- Services Required: ${srvText}
${attachment ? `- Attachment: ${attachment.name}` : ''}
- Notes: ${formData.message || 'None'}

Please schedule an estimate / discussion.`;

    return encodeURIComponent(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setErrorMsg('Please provide your name, phone number, and project location.');
      return;
    }
    if (formData.selectedServices.length === 0) {
      setErrorMsg('Please select at least one service required.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      await ApiService.submitEnquiry({
        ...formData,
        attachmentName: attachment ? attachment.name : null
      });
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        selectedServices: ['Turnkey House Construction'],
        message: ''
      });
      setAttachment(null);
    } catch (err) {
      setSubmitting(false);
      setErrorMsg('Something went wrong submitting your enquiry. Please call or WhatsApp us directly.');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-charcoal-950 relative overflow-hidden" id="contact">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Get in Touch"
          title="Begin Your Architectural Journey"
          subtitle="Request a complimentary architectural consultation, site feasibility review, or customized turnkey estimate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Channels & Credentials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-6 shadow-xl">
              <h3 className="font-serif font-bold text-2xl text-warm-50">
                Contact Information
              </h3>
              <p className="text-warm-300 text-sm leading-relaxed">
                Connect directly with our senior project management office for initial floor plan reviews, site inspections, and turnkey quotations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://wa.me/${cleanWhatsApp}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition-all hover:scale-102"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${cleanPhone}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-750 border border-gold-500/40 text-warm-100 hover:text-gold-400 font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call Us Now</span>
                </a>
              </div>

              <div className="space-y-4 pt-4 border-t border-charcoal-800 text-sm text-warm-200">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-warm-400 block font-semibold">Corporate Office</span>
                    <span className="text-warm-100">{company.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-warm-400 block font-semibold">Phone Inquiries</span>
                    <a href={`tel:${cleanPhone}`} className="text-warm-100 hover:text-gold-400 transition-colors">
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-warm-400 block font-semibold">Official Email</span>
                    <a href={`mailto:${company.email}`} className="text-warm-100 hover:text-gold-400 transition-colors">
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-warm-400 block font-semibold">Working Hours</span>
                    <span className="text-xs text-warm-300">{company.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-charcoal-900/60 border border-gold-500/20 text-xs text-warm-300 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-gold-400 shrink-0" />
              <span>
                All inquiries are routed directly to qualified engineers and architects with locked BOQ transparency.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & File Attachment Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-charcoal-900 border border-charcoal-800 shadow-2xl relative">
              <h3 className="font-serif font-bold text-2xl text-warm-50 mb-2">
                Send an Enquiry
              </h3>
              <p className="text-warm-300 text-sm mb-6">
                Select your required services, attach optional site blueprints, and our team will get in touch.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-warm-50">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-xs text-warm-200 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to MNL GROUP. An architect or senior project consultant has received your details and will contact you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-xs font-semibold uppercase tracking-wider text-warm-100"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Vikram Malhotra"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. vikram@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
                        Project Location / City *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Sector 42, Green Meadows"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
                      />
                    </div>
                  </div>

                  {/* Multi-Service Pill Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold">
                        Select Services Required ({formData.selectedServices.length} Selected) *
                      </label>
                      <span className="text-[11px] text-gold-400">Select single or multiple</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {popularServices.map((srv) => {
                        const isSelected = formData.selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
                              isSelected
                                ? 'bg-gold-500 text-charcoal-950 font-semibold shadow-sm'
                                : 'bg-charcoal-850 text-warm-300 hover:text-white border border-charcoal-700'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            <span>{srv}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
                      Project Notes / Dimensions
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your plot size, floor count, preferred style, or specific timelines..."
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition resize-none"
                    />
                  </div>

                  {/* Optional File Attachment Interface */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
                      Optional: Attach Site Photo or Floor Plan Blueprint
                    </label>

                    {attachment ? (
                      <div className="p-3 rounded-xl bg-charcoal-850 border border-gold-500/40 flex items-center justify-between">
                        <div className="flex items-center gap-2.5 truncate">
                          <FileText className="w-4 h-4 text-gold-400 shrink-0" />
                          <span className="text-xs text-warm-100 truncate font-medium">{attachment.name}</span>
                          <span className="text-[11px] text-warm-400 shrink-0">({attachment.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={removeAttachment}
                          className="p-1 rounded text-warm-400 hover:text-rose-400 transition"
                          title="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-dashed border-charcoal-700 hover:border-gold-500/50 bg-charcoal-850/50 hover:bg-charcoal-850 transition cursor-pointer text-xs text-warm-300">
                        <Paperclip className="w-4 h-4 text-gold-400" />
                        <span>Upload PDF, JPG, PNG or CAD Drawing (Max 10MB)</span>
                        <input
                          type="file"
                          accept=".pdf,.png,.jpg,.jpeg,.dwg"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 gold-glow-btn transition-all duration-300 disabled:opacity-50"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                          Submitting Enquiry...
                        </span>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/${cleanWhatsApp}?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>WhatsApp Directly</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
