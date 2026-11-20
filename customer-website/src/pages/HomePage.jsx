import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import CompleteHomeSolutions from '../components/home/CompleteHomeSolutions';
import CategoryShowcase from '../components/home/CategoryShowcase';
import ProjectsSection from '../components/home/ProjectsSection';
import ArchitectureShowcase from '../components/home/ArchitectureShowcase';
import InteriorShowcase from '../components/home/InteriorShowcase';
import ConstructionRenovationShowcase from '../components/home/ConstructionRenovationShowcase';
import WhyChooseUs from '../components/home/WhyChooseUs';
import WorkingProcess from '../components/home/WorkingProcess';
import BuildYourHome from '../components/home/BuildYourHome';
import CustomerReviews from '../components/home/CustomerReviews';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';
import { useSite } from '../context/SiteContext';

export default function HomePage() {
  const { seo } = useSite();

  useEffect(() => {
    if (seo?.metaTitle) {
      document.title = seo.metaTitle;
    }
  }, [seo]);

  return (
    <div className="space-y-0">
      {/* 1. Hero Carousel & Tagline */}
      <HeroSection />

      {/* 2. Trust & Introduction */}
      <AboutPreview />

      {/* 3. Complete Home Solutions Section (Individual, Multiple, or Turnkey) */}
      <CompleteHomeSolutions />

      {/* 4. 13 Master Service Categories (A through M) */}
      <CategoryShowcase />

      {/* 5. Featured Projects Showcase */}
      <ProjectsSection />

      {/* 6. Architecture & 3D Design Deep Dive */}
      <ArchitectureShowcase />

      {/* 7. Interior Elegance & Modular Kitchens Showcase */}
      <InteriorShowcase />

      {/* 8. Civil Construction & Renovation Showcase */}
      <ConstructionRenovationShowcase />

      {/* 9. Why Choose MNL GROUP (Standards & Guarantees) */}
      <WhyChooseUs />

      {/* 10. Our Working Process (5 Milestone Stages) */}
      <WorkingProcess />

      {/* 11. "Build Your Home With MNL GROUP" Multi-Service Selector */}
      <BuildYourHome />

      {/* 12. Client Reviews (Clearly Marked Sample Formats) */}
      <CustomerReviews />

      {/* 13. Frequently Asked Questions */}
      <FaqSection />

      {/* 14. Contact & Consultation Section */}
      <ContactSection />
    </div>
  );
}
