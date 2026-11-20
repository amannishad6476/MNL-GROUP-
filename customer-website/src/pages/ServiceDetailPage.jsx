import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Building2,
  Compass,
  Palette,
  Home,
  Brush,
  ShieldCheck,
  Layers,
  CookingPot,
  Armchair,
  Zap,
  Wrench,
  Grid,
  Hammer,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Sparkles,
  Check,
  ChevronRight,
  Info
} from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { useSite } from '../context/SiteContext';

export const ServiceIcon = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'Building2': return <Building2 className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Brush': return <Brush className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'CookingPot': return <CookingPot className={className} />;
    case 'Armchair': return <Armchair className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Wrench': return <Wrench className={className} />;
    case 'Grid': return <Grid className={className} />;
    case 'Hammer': return <Hammer className={className} />;
    default: return <Building2 className={className} />;
  }
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { services, company } = useSite();

  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | ${company.name}`;
    }
  }, [service, company]);

  if (!service) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif font-bold text-warm-50 mb-4">Service Not Found</h1>
        <p className="text-warm-300 text-sm max-w-md mb-8">
          The requested service page does not exist or has been restructured. Browse our complete master service directory.
        </p>
        <Link
          to="/services"
          className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Services</span>
        </Link>
      </div>
    );
  }

  const cleanPhone = company.phone ? company.phone.replace(/[^0-9+]/g, '') : '+919876543210';
  const cleanWhatsApp = company.whatsapp ? company.whatsapp.replace(/[^0-9]/g, '') : '919876543210';
  const encodedWaMsg = encodeURIComponent(
    `Hello MNL GROUP! I am interested in discussing your ${service.title} service (${service.categoryName}). Could you provide more details and consultation scheduling?`
  );

  const related = services.filter(s =>
    (service.relatedServices || []).includes(s.slug) ||
    (s.categoryId === service.categoryId && s.id !== service.id)
  ).slice(0, 3);

  return (
    <div className="pt-28 pb-24 bg-charcoal-950 min-h-screen">
      {/* Top Breadcrumb Header */}
      <div className="relative py-14 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-warm-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-gold-400 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
            <Link to="/services" className="hover:text-gold-400 transition">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
            <span className="text-gold-400">{service.categoryName}</span>
            <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
            <span className="text-warm-200 font-medium truncate max-w-xs">{service.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">
                <ServiceIcon name={service.icon} className="w-3.5 h-3.5" />
                <span>Category {service.categoryCode} • {service.categoryName}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-warm-50 leading-tight">
                {service.title}
              </h1>
              <p className="mt-3 text-warm-300 text-base md:text-lg leading-relaxed">
                {service.tagline || service.shortDesc}
              </p>
            </div>

            {/* Header Direct Actions */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-gold-glow transition-all"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${cleanWhatsApp}?text=${encodedWaMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Main Hero Visual & Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="relative rounded-3xl overflow-hidden border border-charcoal-700 shadow-2xl group">
              <div className="aspect-[16/10] w-full">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-warm-300">
                <span className="px-3 py-1 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-gold-500/30 text-gold-400 font-medium">
                  {service.title}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-charcoal-400 bg-charcoal-950/70 px-2.5 py-1 rounded">
                  Sample Design Representation
                </span>
              </div>
            </div>

            {/* In-depth Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-warm-50 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-gold-400" />
                <span>Service Overview & Standards</span>
              </h2>
              <p className="text-warm-300 text-base leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Deliverables Checklist (What is Included) */}
            <div className="p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-5">
              <h3 className="text-lg font-serif font-bold text-warm-50 border-b border-charcoal-800 pb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gold-400" />
                <span>What is Included in This Service</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {(service.deliverables || service.features).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-warm-200">
                    <span className="w-5 h-5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Key Benefits, Contact Callout & Process */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Consultation Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-charcoal-900 to-charcoal-850 border border-gold-500/30 shadow-xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                  Ready to Start?
                </span>
                <h3 className="text-xl font-serif font-bold text-warm-50">
                  Book a Consultation
                </h3>
                <p className="text-xs text-warm-300 mt-1.5 leading-relaxed">
                  Discuss site requirements, material preferences, and obtain an itemized estimate with our project specialists.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition shadow-gold-glow"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Request Free Estimation</span>
                </Link>

                <a
                  href={`https://wa.me/${cleanWhatsApp}?text=${encodedWaMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Instant WhatsApp Chat</span>
                </a>

                <a
                  href={`tel:${cleanPhone}`}
                  className="w-full py-3 rounded-xl bg-charcoal-800 border border-charcoal-700 hover:border-gold-500/40 text-warm-200 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition"
                >
                  <PhoneCall className="w-4 h-4 text-gold-400" />
                  <span>Call: {company.phone}</span>
                </a>
              </div>

              <div className="p-3 rounded-xl bg-charcoal-950/60 border border-charcoal-800 text-[11px] text-warm-400 flex items-start gap-2">
                <Info className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  Transparent BOQ guaranteed. We provide stage-wise payment schedules linked strictly to physical milestones.
                </span>
              </div>
            </div>

            {/* Architectural & Engineering Benefits */}
            <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-4">
              <h3 className="text-base font-serif font-bold text-warm-50 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Key Engineering Advantages</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-warm-300">
                {(service.benefits || service.features).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modular Options Callout */}
            <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-3">
              <h4 className="text-sm font-serif font-bold text-warm-50">
                Combine with Other Services
              </h4>
              <p className="text-xs text-warm-300 leading-relaxed">
                Need this service as part of a complete house build or paired with modular kitchen and interiors? Use our multi-service selector to tailor your package.
              </p>
              <Link
                to="/#build-your-home"
                className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 font-semibold"
              >
                <span>Launch "Build Your Home" Configurator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4-Stage Working Process for this Service */}
        {service.workingProcess && (
          <div className="p-8 md:p-12 rounded-3xl bg-charcoal-900 border border-charcoal-800 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-50 mt-1">
                Our 4-Stage Execution Process
              </h2>
              <p className="text-warm-300 text-xs sm:text-sm mt-2">
                A structured, transparent workflow designed to guarantee precision and eliminate delays.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.workingProcess.map((proc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-charcoal-850 border border-charcoal-700/80 hover:border-gold-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif font-bold text-2xl gold-gradient-text tracking-wider">
                      {proc.step}
                    </span>
                    <h3 className="text-sm font-serif font-bold text-warm-50 mt-2">{proc.title}</h3>
                    <p className="text-xs text-warm-300 mt-1.5 leading-relaxed">{proc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Services */}
        {related.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  Complementary Solutions
                </span>
                <h2 className="text-2xl font-serif font-bold text-warm-50 mt-0.5">
                  Frequently Paired Services
                </h2>
              </div>
              <Link
                to="/services"
                className="text-xs text-gold-400 hover:text-gold-300 flex items-center gap-1 font-semibold"
              >
                <span>View All 13 Categories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="group p-5 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="h-36 rounded-xl overflow-hidden bg-charcoal-850">
                      <ImageWithFallback
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-wider uppercase text-gold-400 font-semibold">
                        {rel.categoryName}
                      </span>
                      <h4 className="text-base font-serif font-bold text-warm-50 group-hover:text-gold-400 transition">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-warm-400 line-clamp-2 mt-1">{rel.shortDesc}</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-charcoal-800 flex items-center justify-between text-xs text-gold-400 font-semibold">
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
