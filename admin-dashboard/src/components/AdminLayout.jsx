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
  Menu,
  X,
  Bell
} from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { useAdminData } from '../context/AdminDataContext';

export default function AdminLayout() {
  const { isAuthenticated, adminUser, logout } = useAdminAuth();
  const { enquiries } = useAdminData();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const pendingEnquiriesCount = enquiries.filter(e => e.status === 'New').length;

  const navItems = [
    { name: '1. Dashboard Overview', path: '/', icon: LayoutDashboard, exact: true },
    { name: '2. Manage Services', path: '/services', icon: Layers },
    { name: '3. Manage Design Gallery', path: '/gallery', icon: GalleryIcon },
    { name: '4. Manage Projects', path: '/projects', icon: Briefcase },
    { name: '5. Manage Categories', path: '/categories', icon: FolderTree },
    {
      name: '6. Customer Enquiries',
      path: '/enquiries',
      icon: Inbox,
      badge: pendingEnquiriesCount > 0 ? pendingEnquiriesCount : null,
      badgeColor: 'bg-emerald-500 text-charcoal-950'
    },
    { name: '7. Manage Customer Reviews', path: '/reviews', icon: Star },
    { name: '8. Manage Team Members', path: '/team', icon: Users },
    { name: '9. Website Content Management', path: '/content', icon: FileText },
    { name: '10. Homepage Banner Management', path: '/banners', icon: Sliders },
    { name: '11. Contact Information', path: '/contact', icon: Phone },
    { name: '12. Social Media Links', path: '/social', icon: Share2 },
    { name: '13. SEO Settings', path: '/seo', icon: Search },
    { name: '14. Admin Profile', path: '/profile', icon: User },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-warm-100 flex flex-col lg:flex-row antialiased">
      {/* Mobile Top Header */}
      <div className="lg:hidden bg-charcoal-900 border-b border-charcoal-800 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center font-serif font-black text-charcoal-950 text-sm">
            M
          </div>
          <span className="font-serif font-bold text-lg text-warm-50">
            MNL <span className="gold-gradient-text">ADMIN</span>
          </span>
        </Link>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-charcoal-800 text-gold-400"
          aria-label="Toggle menu"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-72 bg-charcoal-900 border-r border-charcoal-800 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          <div className="p-6 border-b border-charcoal-800 hidden lg:flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
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
                  Management Console
                </span>
              </div>
            </Link>
          </div>

          <div className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-170px)]">
            <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-charcoal-500">
              Admin Sections (15)
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.exact
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path) && (item.path !== '/' || location.pathname === '/');

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

        {/* User profile footer */}
        <div className="p-4 border-t border-charcoal-800">
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="hidden lg:flex items-center justify-between px-8 py-4 bg-charcoal-900 border-b border-charcoal-800">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-warm-400">
              Stand-Alone Admin Architecture • Ready for Render Backend & Cloudinary
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/enquiries"
              className="relative p-2 rounded-lg bg-charcoal-850 border border-charcoal-700 text-warm-300 hover:text-gold-400 transition"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {pendingEnquiriesCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gold-400" />
              )}
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-2.5 pl-2 border-l border-charcoal-800 hover:opacity-80 transition"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gold-500/40">
                <img src={adminUser.avatar} alt={adminUser.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-semibold text-warm-100">{adminUser.name}</span>
            </Link>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 flex-1">
          <Outlet />
        </div>
      </main>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-charcoal-950/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
