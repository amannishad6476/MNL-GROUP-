import React, { createContext, useContext, useState, useEffect } from 'react';
import { Storage } from '../data/storage';
import { ApiService } from '../data/apiService';

const SiteContext = createContext();

export function SiteProvider({ children }) {
  const [company, setCompany] = useState(Storage.getCompany);
  const [socialLinks, setSocialLinks] = useState(Storage.getSocialLinks);
  const [banners, setBanners] = useState(Storage.getBanners);
  const [services, setServices] = useState(Storage.getServices);
  const [categories, setCategories] = useState(Storage.getCategories);
  const [gallery, setGallery] = useState(Storage.getGallery);
  const [projects, setProjects] = useState(Storage.getProjects);
  const [whyChooseUs, setWhyChooseUs] = useState(Storage.getWhyChooseUs);
  const [processSteps, setProcessSteps] = useState(Storage.getProcess);
  const [reviews, setReviews] = useState(Storage.getReviews);
  const [team, setTeam] = useState(Storage.getTeam);
  const [enquiries, setEnquiries] = useState(Storage.getEnquiries);
  const [seo, setSeo] = useState(Storage.getSeo);

  // Sync state whenever Storage updates
  useEffect(() => {
    const handleUpdate = () => {
      setCompany(Storage.getCompany());
      setSocialLinks(Storage.getSocialLinks());
      setBanners(Storage.getBanners());
      setServices(Storage.getServices());
      setCategories(Storage.getCategories());
      setGallery(Storage.getGallery());
      setProjects(Storage.getProjects());
      setWhyChooseUs(Storage.getWhyChooseUs());
      setProcessSteps(Storage.getProcess());
      setReviews(Storage.getReviews());
      setTeam(Storage.getTeam());
      setEnquiries(Storage.getEnquiries());
      setSeo(Storage.getSeo());
    };

    window.addEventListener('mnl_data_updated', handleUpdate);
    return () => window.removeEventListener('mnl_data_updated', handleUpdate);
  }, []);

  return (
    <SiteContext.Provider
      value={{
        company,
        socialLinks,
        banners,
        services,
        categories,
        gallery,
        projects,
        whyChooseUs,
        processSteps,
        reviews,
        team,
        enquiries,
        seo,
        // Helper refresh
        refreshData: () => {
          setCompany(Storage.getCompany());
          setServices(Storage.getServices());
          setProjects(Storage.getProjects());
        }
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
