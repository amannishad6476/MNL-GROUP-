import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesGrid from '../components/home/ServicesGrid';
import GalleryPreview from '../components/home/GalleryPreview';
import ProjectsSection from '../components/home/ProjectsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import WorkingProcess from '../components/home/WorkingProcess';
import CustomerReviews from '../components/home/CustomerReviews';
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
      <HeroSection />
      <AboutPreview />
      <ServicesGrid />
      <GalleryPreview />
      <ProjectsSection />
      <WhyChooseUs />
      <WorkingProcess />
      <CustomerReviews />
      <ContactSection />
    </div>
  );
}
