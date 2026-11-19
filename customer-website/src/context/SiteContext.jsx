import React, { createContext, useContext, useState } from 'react';
import {
  initialCompanyInfo,
  initialSocialLinks,
  initialBanners,
  initialServices,
  initialCategories,
  initialGallery,
  initialProjects,
  initialWhyChooseUs,
  initialProcessSteps,
  initialReviews,
  initialTeam,
  initialSeo
} from '../data/initialData';

const SiteContext = createContext();

export function SiteProvider({ children }) {
  const [company] = useState(initialCompanyInfo);
  const [socialLinks] = useState(initialSocialLinks);
  const [banners] = useState(initialBanners);
  const [services] = useState(initialServices);
  const [categories] = useState(initialCategories);
  const [gallery] = useState(initialGallery);
  const [projects] = useState(initialProjects);
  const [whyChooseUs] = useState(initialWhyChooseUs);
  const [processSteps] = useState(initialProcessSteps);
  const [reviews] = useState(initialReviews);
  const [team] = useState(initialTeam);
  const [seo] = useState(initialSeo);

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
        seo,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
