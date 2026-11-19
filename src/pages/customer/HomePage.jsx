import React, { useEffect } from 'react';
import HeroSection from '../../components/home/HeroSection';
import AboutPreview from '../../components/home/AboutPreview';
import ServicesGrid from '../../components/home/ServicesGrid';
import GalleryPreview from '../../components/home/GalleryPreview';
import ProjectsSection from '../../components/home/ProjectsSection';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import WorkingProcess from '../../components/home/WorkingProcess';
import CustomerReviews from '../../components/home/CustomerReviews';
import ContactSection from '../../components/home/ContactSection';
import { useSite } from '../../context/SiteContext';

export default function HomePage() {
  const { seo } = useSite();

  // Dynamically set document title & meta tags from SiteContext / SEO settings
  useEffect(() => {
    if (seo?.metaTitle) {
      document.title = seo.metaTitle;
    }
  }, [seo]);

  return (
    <div className="space-y-0">
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. About MNL GROUP */}
      <AboutPreview />

      {/* 4. Our Services */}
      <ServicesGrid />

      {/* 5. Design Gallery */}
      <GalleryPreview />

      {/* 6. Our Projects */}
      <ProjectsSection />

      {/* 7. Why Choose MNL GROUP? */}
      <WhyChooseUs />

      {/* 8. Our Working Process */}
      <WorkingProcess />

      {/* 9. Customer Reviews */}
      <CustomerReviews />

      {/* 10. Contact Section */}
      <ContactSection />
    </div>
  );
}
