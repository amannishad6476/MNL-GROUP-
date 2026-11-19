/**
 * MNL GROUP - Clean API Integration Layer
 * 
 * In production with a real backend, these mock asynchronous calls can be replaced
 * directly with fetch or axios calls to your REST/GraphQL API server endpoints.
 */

import { Storage } from './storage';

// Simulated latency helper to mimic asynchronous network requests
const simulateNetwork = (data, delay = 150) =>
  new Promise((resolve) => setTimeout(() => resolve({ success: true, data }), delay));

export const ApiService = {
  // Services
  getServices: async () => simulateNetwork(Storage.getServices()),
  createService: async (service) => {
    const list = Storage.getServices();
    const newService = { ...service, id: `srv-${Date.now()}` };
    const updated = [newService, ...list];
    Storage.saveServices(updated);
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
    const updated = list.filter((s) => s.id !== id);
    Storage.saveServices(updated);
    return simulateNetwork({ deletedId: id });
  },

  // Projects
  getProjects: async () => simulateNetwork(Storage.getProjects()),
  createProject: async (project) => {
    const list = Storage.getProjects();
    const newProject = { ...project, id: `proj-${Date.now()}` };
    const updated = [newProject, ...list];
    Storage.saveProjects(updated);
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
    const updated = list.filter((p) => p.id !== id);
    Storage.saveProjects(updated);
    return simulateNetwork({ deletedId: id });
  },

  // Gallery
  getGallery: async () => simulateNetwork(Storage.getGallery()),
  createGalleryItem: async (item) => {
    const list = Storage.getGallery();
    const newItem = { ...item, id: `gal-${Date.now()}` };
    const updated = [newItem, ...list];
    Storage.saveGallery(updated);
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
    const updated = list.filter((g) => g.id !== id);
    Storage.saveGallery(updated);
    return simulateNetwork({ deletedId: id });
  },

  // Categories
  getCategories: async () => simulateNetwork(Storage.getCategories()),
  createCategory: async (category) => {
    const list = Storage.getCategories();
    const newCat = { ...category, id: `cat-${Date.now()}`, count: 0 };
    const updated = [...list, newCat];
    Storage.saveCategories(updated);
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
    const updated = list.filter((c) => c.id !== id);
    Storage.saveCategories(updated);
    return simulateNetwork({ deletedId: id });
  },

  // Enquiries (Customer submission)
  submitEnquiry: async (enquiryData) => {
    const list = Storage.getEnquiries();
    const newEnquiry = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    Storage.saveEnquiries([newEnquiry, ...list]);
    return simulateNetwork(newEnquiry);
  },
  updateEnquiryStatus: async (id, status) => {
    const list = Storage.getEnquiries();
    const updated = list.map((e) => (e.id === id ? { ...e, status } : e));
    Storage.saveEnquiries(updated);
    return simulateNetwork({ id, status });
  },
  deleteEnquiry: async (id) => {
    const list = Storage.getEnquiries();
    const updated = list.filter((e) => e.id !== id);
    Storage.saveEnquiries(updated);
    return simulateNetwork({ deletedId: id });
  },

  // Reviews
  getReviews: async () => simulateNetwork(Storage.getReviews()),
  createReview: async (review) => {
    const list = Storage.getReviews();
    const newReview = { ...review, id: `rev-${Date.now()}`, isDemoPlaceholder: false };
    const updated = [newReview, ...list];
    Storage.saveReviews(updated);
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
    const updated = list.filter((r) => r.id !== id);
    Storage.saveReviews(updated);
    return simulateNetwork({ deletedId: id });
  },

  // Team
  getTeam: async () => simulateNetwork(Storage.getTeam()),
  createTeamMember: async (member) => {
    const list = Storage.getTeam();
    const newMember = { ...member, id: `team-${Date.now()}` };
    const updated = [...list, newMember];
    Storage.saveTeam(updated);
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
    const updated = list.filter((m) => m.id !== id);
    Storage.saveTeam(updated);
    return simulateNetwork({ deletedId: id });
  },

  // Website Content & Info
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
