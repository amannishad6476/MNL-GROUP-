import React, { createContext, useContext, useState, useEffect } from 'react';
import { Storage } from '../data/storage';

const AdminDataContext = createContext();

export function AdminDataProvider({ children }) {
  const [company, setCompany] = useState(Storage.getCompany);
  const [socialLinks, setSocialLinks] = useState(Storage.getSocialLinks);
  const [banners, setBanners] = useState(Storage.getBanners);
  const [services, setServices] = useState(Storage.getServices);
  const [categories, setCategories] = useState(Storage.getCategories);
  const [gallery, setGallery] = useState(Storage.getGallery);
  const [projects, setProjects] = useState(Storage.getProjects);
  const [reviews, setReviews] = useState(Storage.getReviews);
  const [team, setTeam] = useState(Storage.getTeam);
  const [enquiries, setEnquiries] = useState(Storage.getEnquiries);
  const [seo, setSeo] = useState(Storage.getSeo);

  const sync = () => {
    setCompany(Storage.getCompany());
    setSocialLinks(Storage.getSocialLinks());
    setBanners(Storage.getBanners());
    setServices(Storage.getServices());
    setCategories(Storage.getCategories());
    setGallery(Storage.getGallery());
    setProjects(Storage.getProjects());
    setReviews(Storage.getReviews());
    setTeam(Storage.getTeam());
    setEnquiries(Storage.getEnquiries());
    setSeo(Storage.getSeo());
  };

  useEffect(() => {
    window.addEventListener('mnl_admin_data_updated', sync);
    return () => window.removeEventListener('mnl_admin_data_updated', sync);
  }, []);

  return (
    <AdminDataContext.Provider
      value={{
        company,
        socialLinks,
        banners,
        services,
        categories,
        gallery,
        projects,
        reviews,
        team,
        enquiries,
        seo,
        refresh: sync,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
}

export const useAdminData = () => useContext(AdminDataContext);
