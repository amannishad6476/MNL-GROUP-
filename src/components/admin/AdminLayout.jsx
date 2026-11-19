import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Layers,
  Image as GalleryIcon,
  Briefcase,
  FolderTree,
  Inbox,
  Star,
  Users,
  FileText,
  Sliders,
  Phone,
  Share2,
  Search,
  User,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Bell,
  Shield,
  CheckCircle2
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useSite } from '../../context/SiteContext';

export default function AdminLayout() {
  const { isAuthenticated, adminUser, logout } = useAdminAuth();
  const { enquiries } = useSite();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If not authenticated, redirect to login page UI
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const pendingEnquiriesCount = enquiries.filter(e => e.status === 'New').length;

  const navItems = [
    { name: 'Dashboard Overview', path: '/admin', icon: LayoutDashboard, exact: true },
    { name: 'Manage Services', path: '/admin/services', icon: Layers },
    { name: 'Manage Design Gallery', path: '/admin/gallery', icon: GalleryIcon },
    { name: 'Manage Projects', path: '/admin/projects', icon: Briefcase },
    { name: 'Manage Categories', path: '/admin/categories', icon: FolderTree },
    {
      name: 'Customer Enquiries',
      path: '/admin/enquiries',
      icon: Inbox,
      badge: pendingEnquiriesCount > 0 ? pendingEnquiriesCount : null,
      badgeColor: 'bg-emerald-500 text-charcoal-950'
    },
    { name: 'Manage Customer Reviews', path: '/admin/reviews', icon: Star },
    { name: 'Manage Team Members', path: '/admin/team', icon: Users },
    { name: 'Website Content Management', path: '/admin/content', icon: FileText },
    { name: 'Homepage Banner Management', path: '/admin/banners', icon: Sliders },
    { name: 'Contact Information', path: '/admin/contact', icon: Phone },
    { name: 'Social Media Links', path: '/admin/social', icon: Share2 },
    { name: 'SEO Settings', path: '/admin/seo', icon: Search },
    { name: 'Admin Profile', path: '/admin/profile', icon: User },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-warm-100 flex flex-col lg:flex-row antialiased">
      {/* Mobile Top Header */}
      <div className="lg:hidden bg-charcoal-900 border-b border-charcoal-800 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link to="/admin" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center font-serif font-black text-charcoal-950 text-sm">
            M
          </div>
          <span className="font-serif font-bold text-lg text-warm-50">
            MNL <span className="gold-gradient-text">ADMIN</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-charcoal-800 text-warm-300 hover:text-gold-400"
            title="Visit public website"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-charcoal-800 text-gold-400"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-72 bg-charcoal-900 border-r border-charcoal-800 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Brand header */}
          <div className="p-6 border-b border-charcoal-800 hidden lg:flex items-center justify-between">
            <Link to="/admin" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 p-0.5 shadow-gold-glow flex items-center justify-center">
                <div className="w-full h-full bg-charcoal-950 rounded-[9px] flex items-center justify-center">
                  <span className="font-serif font-black text-base gold-gradient-text">M</span>
                </div>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-warm-50 block leading-tight">
                  MNL GROUP
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
                  Admin Portal
                </span>
              </div>
            </Link>
          </div>

          {/* Nav Items List */}
          <div className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-210px)]">
            <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-charcoal-500">
              Content & Management
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.exact
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path) && (item.path !== '/admin' || location.pathname === '/admin');

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition ${
                    isActive
                      ? 'bg-gold-500/15 text-gold-400 font-semibold border border-gold-500/30 shadow-sm'
                      : 'text-warm-300 hover:bg-charcoal-800 hover:text-warm-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-warm-400'}`} />
                    <span>{item.name}</span>
                  </div>

                  {item.badge && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.badgeColor || 'bg-gold-500 text-charcoal-950'}`}>
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}

            {/* Logout button (Section 15) */}
            <div className="pt-3 border-t border-charcoal-800">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-red-400 hover:bg-red-950/40 hover:text-red-300 transition"
              >
                <LogOut className="w-4 h-4" />
                <span>15. Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* User Card & Public Website CTA in Sidebar */}
        <div className="p-4 border-t border-charcoal-800 space-y-3">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider transition"
          >
            <span>Visit Customer Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-3 px-2 py-1">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-gold-500/40 shrink-0">
              <img src={adminUser.avatar} alt={adminUser.name} className="w-full h-full object-cover" />
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-warm-100 truncate">{adminUser.name}</p>
              <p className="text-[10px] text-warm-400 truncate">{adminUser.role}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header Bar for Desktop */}
        <div className="hidden lg:flex items-center justify-between px-8 py-4 bg-charcoal-900 border-b border-charcoal-800">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-warm-400">
              Live Production Store Synced • Ready for API Integration
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700 hover:border-gold-500/40 text-xs font-semibold text-warm-200 hover:text-gold-400 transition"
            >
              <span>Live Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
            </Link>

            <Link
              to="/admin/enquiries"
              className="relative p-2 rounded-lg bg-charcoal-850 border border-charcoal-700 text-warm-300 hover:text-gold-400 transition"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {pendingEnquiriesCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gold-400" />
              )}
            </Link>

            <Link
              to="/admin/profile"
              className="flex items-center gap-2.5 pl-2 border-l border-charcoal-800 hover:opacity-80 transition"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gold-500/40">
                <img src={adminUser.avatar} alt={adminUser.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-semibold text-warm-100">{adminUser.name}</span>
            </Link>
          </div>
        </div>

        {/* Dynamic Page Outlet */}
        <div className="p-4 sm:p-6 lg:p-8 flex-1">
          <Outlet />
        </div>
      </main>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-charcoal-950/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
