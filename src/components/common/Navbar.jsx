import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Shield } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export default function Navbar() {
  const { company } = useSite();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const cleanPhone = company.phone ? company.phone.replace(/[^0-9+]/g, '') : '+919876543210';
  const cleanWhatsApp = company.whatsapp ? company.whatsapp.replace(/[^0-9]/g, '') : '919876543210';
  const encodedWaMsg = encodeURIComponent(company.whatsappMessage || "Hello MNL GROUP! I'd like to enquire about construction services.");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 p-0.5 shadow-gold-glow flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-charcoal-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-serif font-black text-lg gold-gradient-text tracking-wider">M</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl md:text-2xl text-warm-50 tracking-wider">
                  MNL <span className="gold-gradient-text">GROUP</span>
                </span>
                <span className="text-[9px] tracking-widest uppercase text-gold-400/80 font-medium -mt-1 hidden sm:block">
                  Building Dreams. Creating Futures.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-2 text-sm font-medium tracking-wide transition-all rounded-md relative ${
                      isActive
                        ? 'text-gold-400 font-semibold'
                        : 'text-warm-200 hover:text-gold-300 hover:bg-charcoal-800/40'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: Call Now, WhatsApp, Admin Portal */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Call Now */}
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-charcoal-800/80 border border-gold-500/25 text-warm-100 hover:border-gold-400 hover:text-gold-400 text-xs font-semibold tracking-wider uppercase transition-all duration-200"
                title="Call MNL GROUP"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="hidden xl:inline">Call Now</span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${cleanWhatsApp}?text=${encodedWaMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wider uppercase shadow-lg shadow-emerald-950/40 transition-all duration-200 hover:scale-105"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              {/* Admin Portal Shortcut */}
              <Link
                to="/admin"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-medium transition-all"
                title="MNL Admin Management Dashboard"
              >
                <Shield className="w-3.5 h-3.5 text-gold-400" />
                <span className="hidden 2xl:inline">Admin</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-charcoal-800 border border-gold-500/30 text-gold-400 hover:bg-charcoal-700 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal-950/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-[70px] right-0 bottom-0 w-full max-w-sm bg-charcoal-900 border-l border-gold-500/25 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="pb-4 border-b border-charcoal-800">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  Navigation
                </span>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition ${
                        isActive
                          ? 'bg-gold-500/15 text-gold-400 font-semibold border-l-4 border-gold-500'
                          : 'text-warm-200 hover:bg-charcoal-800 hover:text-gold-300'
                      }`}
                    >
                      {link.name}
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-charcoal-800 space-y-3">
                <a
                  href={`tel:${cleanPhone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-charcoal-800 border border-gold-500/40 text-warm-100 font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  Call: {company.phone}
                </a>

                <a
                  href={`https://wa.me/${cleanWhatsApp}?text=${encodedWaMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  WhatsApp Direct Chat
                </a>

                <Link
                  to="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-300 font-medium text-xs mt-2"
                >
                  <Shield className="w-3.5 h-3.5 text-gold-400" />
                  Open Admin Dashboard
                </Link>
              </div>
            </div>

            <div className="text-center text-xs text-charcoal-500 pt-6">
              © {new Date().getFullYear()} MNL GROUP. All Rights Reserved.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
