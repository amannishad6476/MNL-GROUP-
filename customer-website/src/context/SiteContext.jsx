import React, { createContext, useContext, useState } from 'react';
import {
  initialCompanyInfo,
  initialSocialLinks,
  initialBanners,
  initialServiceCategories,
  initialServices,
  initialCategories,
  initialGallery,
  initialProjects,
  initialWhyChooseUs,
  initialProcessSteps,
  initialReviews,
  initialTeam,
  initialFaqs,
  initialSeo
} from '../data/initialData';

const SiteContext = createContext();

export function SiteProvider({ children }) {
  const [company] = useState(initialCompanyInfo);
  const [socialLinks] = useState(initialSocialLinks);
  const [banners] = useState(initialBanners);
  const [serviceCategories] = useState(initialServiceCategories);
  const [services] = useState(initialServices);
  const [categories] = useState(initialCategories);
  const [gallery] = useState(initialGallery);
  const [projects] = useState(initialProjects);
  const [whyChooseUs] = useState(initialWhyChooseUs);
  const [processSteps] = useState(initialProcessSteps);
  const [reviews] = useState(initialReviews);
  const [team] = useState(initialTeam);
  const [faqs] = useState(initialFaqs);
  const [seo] = useState(initialSeo);

  return (
    <SiteContext.Provider
      value={{
        company,
        socialLinks,
        banners,
        serviceCategories,
        services,
        categories,
        gallery,
        projects,
        whyChooseUs,
        processSteps,
        reviews,
        team,
        faqs,
        seo,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
