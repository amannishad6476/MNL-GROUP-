import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, PhoneCall } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { useSite } from '../../context/SiteContext';

export default function FaqSection() {
  const { faqs, company } = useSite();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(prev => (prev === idx ? -1 : idx));
  };

  const cleanWhatsApp = company.whatsapp ? company.whatsapp.replace(/[^0-9]/g, '') : '919876543210';
  const cleanPhone = company.phone ? company.phone.replace(/[^0-9+]/g, '') : '+919876543210';

  return (
    <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden" id="faqs">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Clarity, Pricing & Working Standards"
          subtitle="Everything you need to know about our turnkey execution, single-service engagements, locked BOQ contracts, and architectural milestones."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id || idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-charcoal-850 border-gold-500/60 shadow-lg'
                    : 'bg-charcoal-850/60 border-charcoal-800 hover:border-charcoal-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className={`text-sm sm:text-base font-serif font-bold transition-colors ${
                    isOpen ? 'text-gold-400' : 'text-warm-100 hover:text-warm-50'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'bg-gold-500 text-charcoal-950 rotate-180'
                      : 'bg-charcoal-800 text-warm-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-warm-300 leading-relaxed border-t border-charcoal-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-charcoal-950 border border-charcoal-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-serif font-bold text-warm-50">
              Have a specific architectural or site query?
            </h4>
            <p className="text-xs text-warm-400 mt-0.5">
              Our engineering advisory desk is available for direct calls and instant WhatsApp discussions.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <a
              href={`tel:${cleanPhone}`}
              className="px-4 py-2.5 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 text-warm-200 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${cleanWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
