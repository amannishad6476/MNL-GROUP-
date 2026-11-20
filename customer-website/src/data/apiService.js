/**
 * MNL GROUP Customer Website - API Service Layer
 * 
 * Configured with VITE_API_URL for seamless connection to future Node.js/Express backend on Render.
 * Falls back to client-side data store when backend is not connected.
 */

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
} from './initialData';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const ApiService = {
  // Submit Customer Project Enquiry
  submitEnquiry: async (enquiryData) => {
    if (API_BASE_URL) {
      const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryData)
      });
      if (!response.ok) throw new Error('Failed to submit enquiry');
      return response.json();
    }

    // Client fallback simulation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            ...enquiryData,
            id: `enq-${Date.now()}`,
            date: new Date().toISOString().split('T')[0],
            status: 'New'
          }
        });
      }, 300);
    });
  },

  // Public Getters (ready to fetch from backend or fallback)
  getServiceCategories: async () => initialServiceCategories,
  getServices: async () => initialServices,
  getGallery: async () => initialGallery,
  getProjects: async () => initialProjects,
  getReviews: async () => initialReviews,
  getTeam: async () => initialTeam,
  getCompanyInfo: async () => initialCompanyInfo,
  getBanners: async () => initialBanners,
  getSocialLinks: async () => initialSocialLinks,
  getFaqs: async () => initialFaqs,
};
