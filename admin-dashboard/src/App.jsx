import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import AdminLoginPage from './pages/AdminLoginPage';
import DashboardOverview from './pages/DashboardOverview';
import ManageServices from './pages/ManageServices';
import ManageGallery from './pages/ManageGallery';
import ManageProjects from './pages/ManageProjects';
import ManageCategories from './pages/ManageCategories';
import CustomerEnquiries from './pages/CustomerEnquiries';
import ManageReviews from './pages/ManageReviews';
import ManageTeam from './pages/ManageTeam';
import WebsiteContent from './pages/WebsiteContent';
import HomepageBanners from './pages/HomepageBanners';
import ContactInfo from './pages/ContactInfo';
import SocialMediaLinks from './pages/SocialMediaLinks';
import SeoSettings from './pages/SeoSettings';
import AdminProfile from './pages/AdminProfile';

export default function App() {
  return (
    <Routes>
      {/* Standalone Login Route */}
      <Route path="/login" element={<AdminLoginPage />} />

      {/* Authenticated Admin Management Routes */}
      <Route element={<AdminLayout />}>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/services" element={<ManageServices />} />
        <Route path="/gallery" element={<ManageGallery />} />
        <Route path="/projects" element={<ManageProjects />} />
        <Route path="/categories" element={<ManageCategories />} />
        <Route path="/enquiries" element={<CustomerEnquiries />} />
        <Route path="/reviews" element={<ManageReviews />} />
        <Route path="/team" element={<ManageTeam />} />
        <Route path="/content" element={<WebsiteContent />} />
        <Route path="/banners" element={<HomepageBanners />} />
        <Route path="/contact" element={<ContactInfo />} />
        <Route path="/social" element={<SocialMediaLinks />} />
        <Route path="/seo" element={<SeoSettings />} />
        <Route path="/profile" element={<AdminProfile />} />
      </Route>

      {/* Fallback to Dashboard */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
