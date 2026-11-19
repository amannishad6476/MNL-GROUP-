import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter
} from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export default function Footer() {
  const { company, services, socialLinks } = useSite();

  const getSocialIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'facebook': return <Facebook className="w-4 h-4" />;
      case 'instagram': return <Instagram className="w-4 h-4" />;
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'youtube': return <Youtube className="w-4 h-4" />;
      case 'twitter': return <Twitter className="w-4 h-4" />;
      default: return null;
    }
  };

  const cleanPhone = company.phone ? company.phone.replace(/[^0-9+]/g, '') : '+919876543210';

  return (
    <footer className="relative bg-charcoal-950 border-t border-gold-500/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 p-0.5 shadow-gold-glow flex items-center justify-center">
                <div className="w-full h-full bg-charcoal-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-serif font-black text-lg gold-gradient-text tracking-wider">M</span>
                </div>
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-warm-50 tracking-wider">
                  MNL <span className="gold-gradient-text">GROUP</span>
                </span>
                <p className="text-[10px] tracking-widest uppercase text-gold-400/80 font-medium">
                  {company.tagline || "Building Dreams. Creating Futures."}
                </p>
              </div>
            </Link>

            <p className="text-warm-300 text-sm leading-relaxed pt-2">
              {company.shortDescription}
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-warm-400 block mb-3 font-semibold">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.filter(s => s.active).map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-charcoal-900 border border-charcoal-700 hover:border-gold-500/60 text-warm-300 hover:text-gold-400 flex items-center justify-center transition-all hover:-translate-y-1"
                    title={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-serif font-semibold text-warm-50 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home Page', path: '/' },
                { label: 'About MNL GROUP', path: '/about' },
                { label: 'Our Services', path: '/services' },
                { label: 'Design Gallery', path: '/gallery' },
                { label: 'Our Projects', path: '/projects' },
                { label: 'Get in Touch', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-warm-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gold-500/50 group-hover:text-gold-400 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div>
            <h3 className="text-base font-serif font-semibold text-warm-50 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-warm-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gold-500/50 group-hover:text-gold-400 group-hover:translate-x-1 transition-transform" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-gold-400 text-xs font-semibold uppercase tracking-wider hover:underline inline-block pt-1"
                >
                  View All 12 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div>
            <h3 className="text-base font-serif font-semibold text-warm-50 uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Headquarters
            </h3>
            <ul className="space-y-3.5 text-sm text-warm-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${cleanPhone}`} className="hover:text-gold-400 transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-gold-400 transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs">{company.workingHours}</span>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-lg bg-charcoal-900 border border-gold-500/20 text-[11px] text-warm-400 flex items-center justify-between">
              <span>{company.licenseNumber}</span>
              <span className="px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 font-semibold uppercase">Verified</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-400">
          <div>
            © {new Date().getFullYear()} <span className="text-warm-200 font-medium">{company.name}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-warm-400 italic font-serif">
              "{company.tagline}"
            </span>
            <Link
              to="/admin"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-charcoal-850 hover:bg-gold-500/10 border border-charcoal-700 hover:border-gold-500/30 text-warm-300 hover:text-gold-300 transition-all font-medium text-[11px]"
            >
              <Shield className="w-3.5 h-3.5 text-gold-400" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
