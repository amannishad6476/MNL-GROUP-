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
  AlertCircle
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { useSite } from '../../context/SiteContext';
import { ApiService } from '../../data/apiService';

export default function ContactSection() {
  const { company, services } = useSite();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: decodeURIComponent(serviceParam) }));
    } else if (services.length > 0 && !formData.service) {
      setFormData(prev => ({ ...prev, service: services[0].title }));
    }
  }, [searchParams, services]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      setErrorMsg('Please provide your name, phone number, and service required.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      await ApiService.submitEnquiry(formData);
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        service: services[0]?.title || 'House Construction',
        message: ''
      });
    } catch (err) {
      setSubmitting(false);
      setErrorMsg('Something went wrong submitting your enquiry. Please call or WhatsApp us directly.');
    }
  };

  const cleanPhone = company.phone ? company.phone.replace(/[^0-9+]/g, '') : '+919876543210';
  const cleanWhatsApp = company.whatsapp ? company.whatsapp.replace(/[^0-9]/g, '') : '919876543210';
  const encodedWaMsg = encodeURIComponent(company.whatsappMessage || "Hello MNL GROUP! I'd like to consult on my upcoming project.");

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
                  href={`https://wa.me/${cleanWhatsApp}?text=${encodedWaMsg}`}
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
                All enquiries are routed directly to qualified engineers and architects with complete privacy confidentiality.
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-charcoal-900 border border-charcoal-800 shadow-2xl relative">
              <h3 className="font-serif font-bold text-2xl text-warm-50 mb-2">
                Send an Enquiry
              </h3>
              <p className="text-warm-300 text-sm mb-6">
                Fill in the parameters of your project and our project management team will connect with you within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-warm-50">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-xs text-warm-200 max-w-md mx-auto">
                    Thank you for reaching out to MNL GROUP. An architect or senior project consultant has received your details and will contact you shortly.
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
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        Email Address
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
                        placeholder="e.g. Sector 42, Green Meadows"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
                    >
                      {services.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-charcoal-900 text-warm-100">
                          {srv.title} ({srv.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
                      Project Specifications / Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your plot size, preferred architectural style, estimated start timeline, or any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 gold-glow-btn transition-all duration-300 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                        Transmitting Enquiry...
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
