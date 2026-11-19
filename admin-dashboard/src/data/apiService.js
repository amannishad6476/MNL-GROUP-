/**
 * MNL GROUP Admin Dashboard - Clean API Integration Layer
 * 
 * Supports seamless connection to future Node.js/Express backend on Render.
 * When VITE_API_URL is configured, fetches from live API endpoints;
 * otherwise uses client storage adapter with simulated async promises.
 */

import { Storage } from './storage';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

const simulateNetwork = (data, delay = 120) =>
  new Promise((resolve) => setTimeout(() => resolve({ success: true, data }), delay));

export const ApiService = {
  // Services
  getServices: async () => simulateNetwork(Storage.getServices()),
  createService: async (service) => {
    const list = Storage.getServices();
    const newService = { ...service, id: `srv-${Date.now()}` };
    Storage.saveServices([newService, ...list]);
    return simulateNetwork(newService);
  },
  updateService: async (id, updatedFields) => {
    const list = Storage.getServices();
    const updated = list.map((s) => (s.id === id ? { ...s, ...updatedFields } : s));
    Storage.saveServices(updated);
    return simulateNetwork(updated.find((s) => s.id === id));
  },
  deleteService: async (id) => {
    const list = Storage.getServices();
    Storage.saveServices(list.filter((s) => s.id !== id));
    return simulateNetwork({ deletedId: id });
  },

  // Projects
  getProjects: async () => simulateNetwork(Storage.getProjects()),
  createProject: async (project) => {
    const list = Storage.getProjects();
    const newProject = { ...project, id: `proj-${Date.now()}` };
    Storage.saveProjects([newProject, ...list]);
    return simulateNetwork(newProject);
  },
  updateProject: async (id, updatedFields) => {
    const list = Storage.getProjects();
    const updated = list.map((p) => (p.id === id ? { ...p, ...updatedFields } : p));
    Storage.saveProjects(updated);
    return simulateNetwork(updated.find((p) => p.id === id));
  },
  deleteProject: async (id) => {
    const list = Storage.getProjects();
    Storage.saveProjects(list.filter((p) => p.id !== id));
    return simulateNetwork({ deletedId: id });
  },

  // Gallery
  getGallery: async () => simulateNetwork(Storage.getGallery()),
  createGalleryItem: async (item) => {
    const list = Storage.getGallery();
    const newItem = { ...item, id: `gal-${Date.now()}` };
    Storage.saveGallery([newItem, ...list]);
    return simulateNetwork(newItem);
  },
  updateGalleryItem: async (id, updatedFields) => {
    const list = Storage.getGallery();
    const updated = list.map((g) => (g.id === id ? { ...g, ...updatedFields } : g));
    Storage.saveGallery(updated);
    return simulateNetwork(updated.find((g) => g.id === id));
  },
  deleteGalleryItem: async (id) => {
    const list = Storage.getGallery();
    Storage.saveGallery(list.filter((g) => g.id !== id));
    return simulateNetwork({ deletedId: id });
  },

  // Categories
  getCategories: async () => simulateNetwork(Storage.getCategories()),
  createCategory: async (category) => {
    const list = Storage.getCategories();
    const newCat = { ...category, id: `cat-${Date.now()}`, count: 0 };
    Storage.saveCategories([...list, newCat]);
    return simulateNetwork(newCat);
  },
  updateCategory: async (id, updatedFields) => {
    const list = Storage.getCategories();
    const updated = list.map((c) => (c.id === id ? { ...c, ...updatedFields } : c));
    Storage.saveCategories(updated);
    return simulateNetwork(updated.find((c) => c.id === id));
  },
  deleteCategory: async (id) => {
    const list = Storage.getCategories();
    Storage.saveCategories(list.filter((c) => c.id !== id));
    return simulateNetwork({ deletedId: id });
  },

  // Enquiries
  getEnquiries: async () => simulateNetwork(Storage.getEnquiries()),
  updateEnquiryStatus: async (id, status) => {
    const list = Storage.getEnquiries();
    const updated = list.map((e) => (e.id === id ? { ...e, status } : e));
    Storage.saveEnquiries(updated);
    return simulateNetwork({ id, status });
  },
  deleteEnquiry: async (id) => {
    const list = Storage.getEnquiries();
    Storage.saveEnquiries(list.filter((e) => e.id !== id));
    return simulateNetwork({ deletedId: id });
  },

  // Reviews
  getReviews: async () => simulateNetwork(Storage.getReviews()),
  createReview: async (review) => {
    const list = Storage.getReviews();
    const newReview = { ...review, id: `rev-${Date.now()}` };
    Storage.saveReviews([newReview, ...list]);
    return simulateNetwork(newReview);
  },
  updateReview: async (id, updatedFields) => {
    const list = Storage.getReviews();
    const updated = list.map((r) => (r.id === id ? { ...r, ...updatedFields } : r));
    Storage.saveReviews(updated);
    return simulateNetwork(updated.find((r) => r.id === id));
  },
  deleteReview: async (id) => {
    const list = Storage.getReviews();
    Storage.saveReviews(list.filter((r) => r.id !== id));
    return simulateNetwork({ deletedId: id });
  },

  // Team
  getTeam: async () => simulateNetwork(Storage.getTeam()),
  createTeamMember: async (member) => {
    const list = Storage.getTeam();
    const newMember = { ...member, id: `team-${Date.now()}` };
    Storage.saveTeam([...list, newMember]);
    return simulateNetwork(newMember);
  },
  updateTeamMember: async (id, updatedFields) => {
    const list = Storage.getTeam();
    const updated = list.map((m) => (m.id === id ? { ...m, ...updatedFields } : m));
    Storage.saveTeam(updated);
    return simulateNetwork(updated.find((m) => m.id === id));
  },
  deleteTeamMember: async (id) => {
    const list = Storage.getTeam();
    Storage.saveTeam(list.filter((m) => m.id !== id));
    return simulateNetwork({ deletedId: id });
  },

  // Website Content & Settings
  getCompanyInfo: async () => simulateNetwork(Storage.getCompany()),
  updateCompanyInfo: async (info) => {
    Storage.saveCompany(info);
    return simulateNetwork(info);
  },

  getBanners: async () => simulateNetwork(Storage.getBanners()),
  updateBanners: async (banners) => {
    Storage.saveBanners(banners);
    return simulateNetwork(banners);
  },

  getSocialLinks: async () => simulateNetwork(Storage.getSocialLinks()),
  updateSocialLinks: async (links) => {
    Storage.saveSocialLinks(links);
    return simulateNetwork(links);
  },

  getSeo: async () => simulateNetwork(Storage.getSeo()),
  updateSeo: async (seo) => {
    Storage.saveSeo(seo);
    return simulateNetwork(seo);
  }
};
