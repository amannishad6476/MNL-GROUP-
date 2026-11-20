import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import ScrollToTop from './ScrollToTop';

export default function CustomerLayout() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-warm-100 flex flex-col selection:bg-gold-500 selection:text-charcoal-950">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
