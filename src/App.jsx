import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Providers
import { SiteProvider } from './context/SiteContext';
import { AdminAuthProvider } from './context/AdminAuthContext';

// Customer Layout & Pages
import CustomerLayout from './components/common/CustomerLayout';
import HomePage from './pages/customer/HomePage';
import AboutPage from './pages/customer/AboutPage';
import ServicesPage from './pages/customer/ServicesPage';
import GalleryPage from './pages/customer/GalleryPage';
import ProjectsPage from './pages/customer/ProjectsPage';
import ContactPage from './pages/customer/ContactPage';

// Admin Layout & Pages
import AdminLayout from './components/admin/AdminLayout';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import DashboardOverview from './pages/admin/DashboardOverview';
import ManageServices from './pages/admin/ManageServices';
import ManageGallery from './pages/admin/ManageGallery';
import ManageProjects from './pages/admin/ManageProjects';
import ManageCategories from './pages/admin/ManageCategories';
import CustomerEnquiries from './pages/admin/CustomerEnquiries';
import ManageReviews from './pages/admin/ManageReviews';
import ManageTeam from './pages/admin/ManageTeam';
import WebsiteContent from './pages/admin/WebsiteContent';
import HomepageBanners from './pages/admin/HomepageBanners';
import ContactInfo from './pages/admin/ContactInfo';
import SocialMediaLinks from './pages/admin/SocialMediaLinks';
import SeoSettings from './pages/admin/SeoSettings';
import AdminProfile from './pages/admin/AdminProfile';

export default function App() {
  return (
    <SiteProvider>
      <AdminAuthProvider>
        <Routes>
          {/* Customer Website Routes */}
          <Route element={<CustomerLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Admin Login UI Route */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Admin Dashboard Protected Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="services" element={<ManageServices />} />
            <Route path="gallery" element={<ManageGallery />} />
            <Route path="projects" element={<ManageProjects />} />
            <Route path="categories" element={<ManageCategories />} />
            <Route path="enquiries" element={<CustomerEnquiries />} />
            <Route path="reviews" element={<ManageReviews />} />
            <Route path="team" element={<ManageTeam />} />
            <Route path="content" element={<WebsiteContent />} />
            <Route path="banners" element={<HomepageBanners />} />
            <Route path="contact" element={<ContactInfo />} />
            <Route path="social" element={<SocialMediaLinks />} />
            <Route path="seo" element={<SeoSettings />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AdminAuthProvider>
    </SiteProvider>
  );
}
