import {
  initialCompanyInfo,
  initialSocialLinks,
  initialBanners,
  initialServices,
  initialCategories,
  initialGallery,
  initialProjects,
  initialReviews,
  initialTeam,
  initialEnquiries,
  initialSeo,
} from './initialData';

const STORAGE_KEYS = {
  COMPANY: 'mnl_admin_company',
  SOCIAL: 'mnl_admin_social',
  BANNERS: 'mnl_admin_banners',
  SERVICES: 'mnl_admin_services',
  CATEGORIES: 'mnl_admin_categories',
  GALLERY: 'mnl_admin_gallery',
  PROJECTS: 'mnl_admin_projects',
  REVIEWS: 'mnl_admin_reviews',
  TEAM: 'mnl_admin_team',
  ENQUIRIES: 'mnl_admin_enquiries',
  SEO: 'mnl_admin_seo',
};

function load(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

function save(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('mnl_admin_data_updated', { detail: { key, data } }));
  } catch (e) {
    console.warn(`Error saving key ${key}:`, e);
  }
}

export const Storage = {
  getCompany: () => load(STORAGE_KEYS.COMPANY, initialCompanyInfo),
  saveCompany: (data) => save(STORAGE_KEYS.COMPANY, data),

  getSocialLinks: () => load(STORAGE_KEYS.SOCIAL, initialSocialLinks),
  saveSocialLinks: (data) => save(STORAGE_KEYS.SOCIAL, data),

  getBanners: () => load(STORAGE_KEYS.BANNERS, initialBanners),
  saveBanners: (data) => save(STORAGE_KEYS.BANNERS, data),

  getServices: () => load(STORAGE_KEYS.SERVICES, initialServices),
  saveServices: (data) => save(STORAGE_KEYS.SERVICES, data),

  getCategories: () => load(STORAGE_KEYS.CATEGORIES, initialCategories),
  saveCategories: (data) => save(STORAGE_KEYS.CATEGORIES, data),

  getGallery: () => load(STORAGE_KEYS.GALLERY, initialGallery),
  saveGallery: (data) => save(STORAGE_KEYS.GALLERY, data),

  getProjects: () => load(STORAGE_KEYS.PROJECTS, initialProjects),
  saveProjects: (data) => save(STORAGE_KEYS.PROJECTS, data),

  getReviews: () => load(STORAGE_KEYS.REVIEWS, initialReviews),
  saveReviews: (data) => save(STORAGE_KEYS.REVIEWS, data),

  getTeam: () => load(STORAGE_KEYS.TEAM, initialTeam),
  saveTeam: (data) => save(STORAGE_KEYS.TEAM, data),

  getEnquiries: () => load(STORAGE_KEYS.ENQUIRIES, initialEnquiries),
  saveEnquiries: (data) => save(STORAGE_KEYS.ENQUIRIES, data),

  getSeo: () => load(STORAGE_KEYS.SEO, initialSeo),
  saveSeo: (data) => save(STORAGE_KEYS.SEO, data),

  resetToDefaults: () => {
    Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k));
    window.dispatchEvent(new CustomEvent('mnl_admin_data_updated', { detail: { reset: true } }));
  }
};
