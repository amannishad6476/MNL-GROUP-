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
  initialEnquiries,
  initialSeo,
} from './initialData';

const STORAGE_KEYS = {
  COMPANY: 'mnl_company_info',
  SOCIAL: 'mnl_social_links',
  BANNERS: 'mnl_banners',
  SERVICES: 'mnl_services',
  CATEGORIES: 'mnl_categories',
  GALLERY: 'mnl_gallery',
  PROJECTS: 'mnl_projects',
  WHY_US: 'mnl_why_us',
  PROCESS: 'mnl_process',
  REVIEWS: 'mnl_reviews',
  TEAM: 'mnl_team',
  ENQUIRIES: 'mnl_enquiries',
  SEO: 'mnl_seo',
};

// Safe localStorage getter
function load(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn(`Error reading localStorage for key ${key}:`, e);
    return fallback;
  }
}

// Safe localStorage setter with broadcast event
function save(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('mnl_data_updated', { detail: { key, data } }));
  } catch (e) {
    console.warn(`Error saving to localStorage for key ${key}:`, e);
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

  getWhyChooseUs: () => load(STORAGE_KEYS.WHY_US, initialWhyChooseUs),
  saveWhyChooseUs: (data) => save(STORAGE_KEYS.WHY_US, data),

  getProcess: () => load(STORAGE_KEYS.PROCESS, initialProcessSteps),
  saveProcess: (data) => save(STORAGE_KEYS.PROCESS, data),

  getReviews: () => load(STORAGE_KEYS.REVIEWS, initialReviews),
  saveReviews: (data) => save(STORAGE_KEYS.REVIEWS, data),

  getTeam: () => load(STORAGE_KEYS.TEAM, initialTeam),
  saveTeam: (data) => save(STORAGE_KEYS.TEAM, data),

  getEnquiries: () => load(STORAGE_KEYS.ENQUIRIES, initialEnquiries),
  saveEnquiries: (data) => save(STORAGE_KEYS.ENQUIRIES, data),

  getSeo: () => load(STORAGE_KEYS.SEO, initialSeo),
  saveSeo: (data) => save(STORAGE_KEYS.SEO, data),

  resetToDefaults: () => {
    localStorage.clear();
    window.dispatchEvent(new CustomEvent('mnl_data_updated', { detail: { reset: true } }));
  }
};
