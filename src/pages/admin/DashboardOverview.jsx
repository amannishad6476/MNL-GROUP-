import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Image as GalleryIcon,
  Briefcase,
  Inbox,
  Star,
  Users,
  Sliders,
  ArrowUpRight,
  PlusCircle,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { useAdminAuth } from '../../context/AdminAuthContext';

export default function DashboardOverview() {
  const { services, gallery, projects, enquiries, reviews, banners } = useSite();
  const { adminUser } = useAdminAuth();

  const newEnquiries = enquiries.filter(e => e.status === 'New');

  const stats = [
    {
      title: 'Active Services',
      value: services.length,
      icon: Layers,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/30',
      link: '/admin/services'
    },
    {
      title: 'Gallery Designs',
      value: gallery.length,
      icon: GalleryIcon,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10 border-sky-500/30',
      link: '/admin/gallery'
    },
    {
      title: 'Total Projects',
      value: projects.length,
      icon: Briefcase,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30',
      link: '/admin/projects'
    },
    {
      title: 'Customer Enquiries',
      value: enquiries.length,
      badge: newEnquiries.length > 0 ? `${newEnquiries.length} New` : null,
      icon: Inbox,
      color: 'text-gold-400',
      bgColor: 'bg-gold-500/10 border-gold-500/30',
      link: '/admin/enquiries'
    },
    {
      title: 'Client Reviews',
      value: reviews.length,
      icon: Star,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/30',
      link: '/admin/reviews'
    },
    {
      title: 'Active Banners',
      value: banners.filter(b => b.active).length,
      icon: Sliders,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10 border-rose-500/30',
      link: '/admin/banners'
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Bar */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-gold-500/30 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-gold-400 font-semibold block mb-1">
            MNL GROUP Administration Console
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-warm-50">
            Welcome back, {adminUser.name}
          </h1>
          <p className="text-xs text-warm-300 mt-1">
            Manage public website content, architectural portfolios, client inquiries, and SEO settings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin/enquiries"
            className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs uppercase tracking-wider transition shadow-gold-glow flex items-center gap-2"
          >
            <Inbox className="w-4 h-4" />
            <span>Review Inquiries ({newEnquiries.length})</span>
          </Link>
        </div>
      </div>

      {/* 6 Key Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.title}
              to={stat.link}
              className="p-5 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 group shadow-lg flex items-center justify-between"
            >
              <div className="space-y-1">
                <span className="text-xs text-warm-400 font-medium block">
                  {stat.title}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-warm-50">
                    {stat.value}
                  </span>
                  {stat.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {stat.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${stat.bgColor} ${stat.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions Bar */}
      <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800">
        <h2 className="text-sm uppercase tracking-wider text-warm-300 font-semibold mb-4">
          Quick Management Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            to="/admin/services"
            className="p-3.5 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700/80 hover:border-gold-500/30 transition text-center group"
          >
            <PlusCircle className="w-5 h-5 text-gold-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-warm-200 block">Add New Service</span>
          </Link>

          <Link
            to="/admin/gallery"
            className="p-3.5 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700/80 hover:border-gold-500/30 transition text-center group"
          >
            <PlusCircle className="w-5 h-5 text-gold-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-warm-200 block">Upload Design Image</span>
          </Link>

          <Link
            to="/admin/projects"
            className="p-3.5 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700/80 hover:border-gold-500/30 transition text-center group"
          >
            <PlusCircle className="w-5 h-5 text-gold-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-warm-200 block">Add New Project</span>
          </Link>

          <Link
            to="/admin/banners"
            className="p-3.5 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-charcoal-700/80 hover:border-gold-500/30 transition text-center group"
          >
            <PlusCircle className="w-5 h-5 text-gold-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-warm-200 block">Configure Banner</span>
          </Link>
        </div>
      </div>

      {/* Recent Customer Inquiries Table */}
      <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-serif font-bold text-warm-50">
              Recent Customer Enquiries
            </h2>
            <p className="text-xs text-warm-400">
              Inquiries received directly from the website contact forms.
            </p>
          </div>
          <Link
            to="/admin/enquiries"
            className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider flex items-center gap-1"
          >
            <span>View All ({enquiries.length})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-charcoal-800 text-warm-400 uppercase tracking-wider">
                <th className="py-3 px-4">Client Name</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800/60">
              {enquiries.slice(0, 5).map((enq) => (
                <tr key={enq.id} className="hover:bg-charcoal-850/60 transition">
                  <td className="py-3.5 px-4 font-semibold text-warm-100">
                    {enq.name}
                  </td>
                  <td className="py-3.5 px-4 text-warm-300">
                    {enq.phone}
                  </td>
                  <td className="py-3.5 px-4 text-gold-400">
                    {enq.service}
                  </td>
                  <td className="py-3.5 px-4 text-warm-400">
                    {enq.location || "Not specified"}
                  </td>
                  <td className="py-3.5 px-4 text-warm-400">
                    {enq.date}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                        enq.status === 'New'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : enq.status === 'Contacted'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-charcoal-800 text-warm-300'
                      }`}
                    >
                      {enq.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Backend Integration Points Notice */}
      <div className="p-5 rounded-xl bg-charcoal-900/60 border border-gold-500/20 text-xs text-warm-300 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-warm-100 block mb-0.5">
            Architecture Ready for Backend Integration
          </span>
          <p className="text-warm-400 text-[11px] leading-relaxed">
            All dashboard state mutations flow through standard asynchronous CRUD contracts in <code className="text-gold-400">src/data/apiService.js</code> with reactive broadcasts to the customer portal. Future integration with Node.js/Express, Python, or Go REST endpoints can be plugged in directly with zero UI refactoring.
          </p>
        </div>
      </div>
    </div>
  );
}
