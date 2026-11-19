// MNL GROUP Initial Configurable Data Store
// All company details, contacts, services, gallery, projects, and content are fully configurable.

export const initialCompanyInfo = {
  name: "MNL GROUP",
  tagline: "Building Dreams. Creating Futures.",
  shortDescription: "Premier architectural design, modern residential construction, luxury interiors, and turnkey renovation services crafted with uncompromising precision.",
  about: "MNL GROUP is a multidisciplinary construction and architecture company dedicated to transforming visions into enduring architectural landmarks. We integrate cutting-edge 2D/3D spatial planning, structural engineering excellence, and bespoke interior styling to deliver residential and commercial spaces of timeless sophistication.",
  mission: "To deliver world-class construction and architectural solutions through relentless craftsmanship, transparent practices, and engineering innovation that exceeds client aspirations.",
  vision: "To be the most respected and trusted construction and luxury design partner, shaping future-ready communities and modern architectural standards.",
  commitment: "We stand firmly on quality integrity, adhering to rigorous safety standards, premium grade materials, timely milestones, and clear transparent communication at every step.",
  phone: "+91 98765 43210",
  altPhone: "+91 98765 43211",
  whatsapp: "+91 98765 43210",
  whatsappMessage: "Hello MNL GROUP! I am interested in discussing a construction/design project with you.",
  email: "contact@mnlgroup.com",
  supportEmail: "support@mnlgroup.com",
  address: "MNL Corporate Tower, Level 4, Prestige Avenue, Landmark City, India",
  workingHours: "Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: By Appointment",
  licenseNumber: "ISO 9001:2015 Certified Builders",
};

export const initialSocialLinks = [
  { id: "facebook", name: "Facebook", url: "https://facebook.com/mnlgroup", icon: "Facebook", active: true },
  { id: "instagram", name: "Instagram", url: "https://instagram.com/mnlgroup", icon: "Instagram", active: true },
  { id: "linkedin", name: "LinkedIn", url: "https://linkedin.com/company/mnlgroup", icon: "Linkedin", active: true },
  { id: "youtube", name: "YouTube", url: "https://youtube.com/@mnlgroup", icon: "Youtube", active: true },
  { id: "twitter", name: "X (Twitter)", url: "https://twitter.com/mnlgroup", icon: "Twitter", active: true },
];

export const initialBanners = [
  {
    id: "banner-1",
    title: "Building Dreams. Creating Futures.",
    subtitle: "Turnkey Residential Construction & High-End Architecture",
    description: "From conceptual 3D architectural blueprints to seamless turnkey execution, we craft luxurious living spaces designed to inspire generations.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    primaryButtonText: "Explore Services",
    primaryButtonLink: "/services",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/contact",
    active: true,
  },
  {
    id: "banner-2",
    title: "Mastercrafted Luxury & Architectural Elegance",
    subtitle: "Bespoke Interiors & Intelligent Spatial Planning",
    description: "Elevate your everyday living with Italian modular kitchens, artisan woodwork, and bespoke false ceilings engineered for distinction.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
    primaryButtonText: "View Gallery",
    primaryButtonLink: "/gallery",
    secondaryButtonText: "Get an Estimate",
    secondaryButtonLink: "/contact",
    active: true,
  },
  {
    id: "banner-3",
    title: "End-to-End Precision Engineering",
    subtitle: "Turnkey Execution • Structural Integrity • On-Time Handover",
    description: "Complete peace of mind with vetted structural workflows, rigorous material audits, and dedicated project managers.",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
    primaryButtonText: "Our Projects",
    primaryButtonLink: "/projects",
    secondaryButtonText: "Speak with Architect",
    secondaryButtonLink: "/contact",
    active: true,
  }
];

export const initialServices = [
  {
    id: "srv-1",
    title: "House Construction",
    slug: "house-construction",
    category: "Structural",
    icon: "Building2",
    shortDesc: "Complete turnkey residential construction from robust foundation to flawless lock-and-key handover.",
    fullDesc: "We provide end-to-end house construction services backed by structural engineers, certified masons, and rigorous material testing. From soil testing and foundation to super-structure framing, brickwork, and plastering, we guarantee structural longevity and impeccable workmanship.",
    features: ["Soil testing & structural engineering", "Premium grade steel & certified concrete", "Supervised on-site construction management", "Transparent stage-wise payment schedules"],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: "srv-2",
    title: "Architecture & 2D/3D Design",
    slug: "architecture-design",
    category: "Design",
    icon: "Compass",
    shortDesc: "Comprehensive architectural blueprints, municipal sanction drawings, and photorealistic 3D walkthroughs.",
    fullDesc: "Our architectural wing crafts human-centric spaces that merge natural light, ventilation, and contemporary aesthetics. Experience your dream residence before breaking ground through hyper-realistic 3D elevations and virtual walk-throughs.",
    features: ["Detailed 2D floor plans & elevations", "Vastu-compliant spatial planning", "Photorealistic 3D exterior & interior rendering", "Municipal sanction & regulatory drawings"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: "srv-3",
    title: "Interior Design",
    slug: "interior-design",
    category: "Design",
    icon: "Palette",
    shortDesc: "Curated residential interiors balancing sophisticated palette, functional luxury, and custom decor.",
    fullDesc: "Our bespoke interior design service transforms blank interiors into warm, luxurious sanctuaries. We meticulously curate color schemes, ambient lighting layouts, wall textures, soft furnishings, and high-end accents aligned with your lifestyle.",
    features: ["Moodboards & 3D visualization", "Custom furniture layout & curation", "Layered architectural lighting schemes", "Premium wall paneling & finishes"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: "srv-4",
    title: "Exterior Design",
    slug: "exterior-design",
    category: "Design",
    icon: "Home",
    shortDesc: "Modern facade elevations, louvers, exterior cladding, landscaping, and night illumination styling.",
    fullDesc: "Create an unforgettable first impression. We design state-of-the-art exterior facades incorporating stone cladding, HPL sheets, terracotta tiles, sleek louvers, and weather-resistant landscape illumination.",
    features: ["Contemporary facade architecture", "Weather-resistant cladding solutions", "Architectural exterior lighting design", "Terrace gardens & compound landscape"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: "srv-5",
    title: "House Painting",
    slug: "house-painting",
    category: "Finishing",
    icon: "Brush",
    shortDesc: "Flawless mechanized interior & exterior painting with luxury emulsions, textures, and protective coatings.",
    fullDesc: "Using dust-free mechanized sanding and precision spray technology, our master painters deliver blemish-free walls. We apply premium anti-fungal, washable emulsions and weatherproof exterior shields that stand the test of time.",
    features: ["Mechanized dustless wall preparation", "Luxury royal emulsions & designer textures", "Weather-shield exterior protective paints", "Surface dampness checks prior to application"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: "srv-6",
    title: "Waterproofing",
    slug: "waterproofing",
    category: "Protection",
    icon: "ShieldCheck",
    shortDesc: "Multi-layered scientific waterproofing for roofs, basements, sunken slabs, and exterior walls.",
    fullDesc: "Water ingress destroys structural value. We provide scientific waterproofing solutions using elastomeric membranes, crystalline treatments, and polyurethane injections to keep your home completely leak-free.",
    features: ["Terrace and parapet membrane coatings", "Sunken slab and bathroom waterproofing", "Basement retaining wall protection", "Pressure grouting for concrete crack sealing"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: "srv-7",
    title: "POP & False Ceiling",
    slug: "false-ceiling",
    category: "Interiors",
    icon: "Layers",
    shortDesc: "Designer gypsum false ceilings, cove illumination, acoustic treatments, and architectural POP mouldings.",
    fullDesc: "Transform flat overheads into architectural features. We design seamless false ceilings with concealed perimeter cove lighting, magnetic track lights, wooden rafters, and sound-dampening acoustic details.",
    features: ["Moisture-resistant Saint-Gobain gypsum boards", "Concealed LED cove & spotlight integration", "CNC cut patterns and wooden louver rafters", "Precision anti-sag metal framing"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: "srv-8",
    title: "Modular Kitchen",
    slug: "modular-kitchen",
    category: "Interiors",
    icon: "CookingPot",
    shortDesc: "Ergonomic German-hardware modular kitchens, quartz countertops, and smart corner storage solutions.",
    fullDesc: "The heart of every home. We engineer modular kitchens in acrylic, PU lacquer, and anti-scratch laminates paired with Blum or Hafele soft-close fittings, granite/quartz countertops, and integrated appliance tall units.",
    features: ["BWP marine-grade boiling waterproof ply", "Imported soft-close channels & hinges", "Custom cutlery organizers & tandem drawers", "Anti-stain quartz & nano-stone countertops"],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: "srv-9",
    title: "Furniture & Woodwork",
    slug: "furniture-woodwork",
    category: "Interiors",
    icon: "Armchair",
    shortDesc: "Bespoke wardrobes, TV media consoles, vanity units, and artisanal solid wood craftmanship.",
    fullDesc: "From floor-to-ceiling sliding wardrobes to acoustic TV feature walls and ergonomic study consoles, our carpenters and factory-finish edge banders ensure smooth finishes and durable utility.",
    features: ["Factory pressed finishes with zero edge peeling", "Teak, oak, and premium veneer polishes", "Walk-in wardrobe systems with sensors", "Custom dining tables and accent consoles"],
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: "srv-10",
    title: "Electrical Work",
    slug: "electrical-work",
    category: "Utility",
    icon: "Zap",
    shortDesc: "Smart concealed electrical conduit wiring, MCB distribution, home automation, and safety earthing.",
    fullDesc: "Safe, load-balanced, and modern. Our certified electrical engineers execute conduit channel laying, fire-retardant copper wiring, modular touch switches, generator changeover panels, and smart IoT lighting controls.",
    features: ["FR-LSH flame retardant copper wiring", "Circuit balanced MCB & RCCB distribution", "Smart home automation & app controls", "Dedicated earthing and surge protection"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: "srv-11",
    title: "Plumbing",
    slug: "plumbing",
    category: "Utility",
    icon: "Wrench",
    shortDesc: "Concealed CPVC/UPVC water piping, drainage gradient planning, pressure pumps, and luxury CP fittings.",
    fullDesc: "Reliable plumbing is vital for hygiene and peace of mind. We handle high-pressure water supply lines, leak-proof acoustic drainage systems, concealed thermostatic diverters, pressure booster pumps, and solar water heaters.",
    features: ["Pressure-tested CPVC & UPVC pipelines", "Concealed wall mixer & diverter installation", "Acoustic drainage soil waste piping", "Rainwater harvesting & filtration setup"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: "srv-12",
    title: "Home Renovation",
    slug: "home-renovation",
    category: "Turnkey",
    icon: "Hammer",
    shortDesc: "Comprehensive remodeling, structural redesign, spatial reconfiguration, and contemporary upgrades.",
    fullDesc: "Give your aged property a lavish rebirth. We undertake structural modifications, bathroom overhauls, balcony expansions, flooring replacements with Italian marble/vitrified tiles, and energy-efficient retrofitting.",
    features: ["Structural safety audits & wall removals", "Turnkey bathroom & kitchen overhaul", "Italian marble polishing & tile laying", "Rapid scheduled timeline with minimal disruption"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
];

export const initialCategories = [
  { id: "cat-1", name: "Modern Houses", slug: "modern-houses", count: 8 },
  { id: "cat-2", name: "Luxury Villas", slug: "luxury-villas", count: 7 },
  { id: "cat-3", name: "Bedroom Designs", slug: "bedroom-designs", count: 6 },
  { id: "cat-4", name: "Living Room Designs", slug: "living-room-designs", count: 6 },
  { id: "cat-5", name: "Modular Kitchens", slug: "modular-kitchens", count: 5 },
  { id: "cat-6", name: "Bathroom Designs", slug: "bathroom-designs", count: 4 },
  { id: "cat-7", name: "Ceiling Designs", slug: "ceiling-designs", count: 5 },
  { id: "cat-8", name: "Furniture Designs", slug: "furniture-designs", count: 5 },
  { id: "cat-9", name: "House Elevation", slug: "house-elevation", count: 6 },
];

export const initialGallery = [
  {
    id: "gal-1",
    title: "Contemporary Cantilever Villa",
    category: "Modern Houses",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Multi-level contemporary residential architecture featuring floor-to-ceiling glass and geometric cantilever forms.",
    featured: true,
  },
  {
    id: "gal-2",
    title: "Grand Estate Villa with Reflecting Pool",
    category: "Luxury Villas",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "Opulent private villa with integrated water bodies, expansive patios, and teak wood louvers.",
    featured: true,
  },
  {
    id: "gal-3",
    title: "Minimalist Master Bedroom Suite",
    category: "Bedroom Designs",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "Warm neutral tones, upholstered fluted headboard, ambient cove illumination, and chevron wood flooring.",
    featured: true,
  },
  {
    id: "gal-4",
    title: "Double-Height Luxury Living Room",
    category: "Living Room Designs",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "Soaring double-height ceilings with custom brass chandelier, bookmatched Italian marble wall, and plush seating.",
    featured: true,
  },
  {
    id: "gal-5",
    title: "Charcoal & Gold Island Kitchen",
    category: "Modular Kitchens",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    description: "Matte charcoal soft-touch cabinetry accented with brushed gold handles, waterfall quartz island, and hidden prep pantry.",
    featured: true,
  },
  {
    id: "gal-6",
    title: "Spa-Inspired Marble Bathroom",
    category: "Bathroom Designs",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    description: "Freestanding soaking tub, rain shower cubicle, concealed gold fittings, and backlit vanity mirrors.",
    featured: false,
  },
  {
    id: "gal-7",
    title: "Architectural Cove False Ceiling",
    category: "Ceiling Designs",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    description: "Multi-tiered gypsum ceiling with integrated magnetic magnetic light tracks and warm indirect illumination.",
    featured: false,
  },
  {
    id: "gal-8",
    title: "Custom Fluted TV Console & Bar Unit",
    category: "Furniture Designs",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    description: "Handcrafted smoked oak console with bronze metal trims, integrated LED strip channels, and hidden acoustic cabling.",
    featured: false,
  },
  {
    id: "gal-9",
    title: "Modern Cubic Front Elevation",
    category: "House Elevation",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    description: "Sleek combination of warm timber slats, textured grey stone cladding, and framed glass balconies.",
    featured: true,
  },
  {
    id: "gal-10",
    title: "Warm Minimalist Villa Living",
    category: "Luxury Villas",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "Seamless indoor-outdoor courtyard integration with floor-to-ceiling sliding glass portals.",
    featured: false,
  },
  {
    id: "gal-11",
    title: "Serene Japandi Master Bedroom",
    category: "Bedroom Designs",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    description: "Low-profile platform bed, natural rattan accents, and warm diffused lighting for restful sanctuary.",
    featured: false,
  },
  {
    id: "gal-12",
    title: "Nordic Minimalist Kitchen",
    category: "Modular Kitchens",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
    description: "Natural oak veneers paired with pure white solid surfaces and integrated induction down-draft extractor.",
    featured: false,
  }
];

export const initialProjects = [
  {
    id: "proj-1",
    title: "The Golden Horizon Villa",
    category: "Residential Architecture",
    status: "Completed",
    location: "Green Meadows, Sector 42",
    area: "6,500 sq.ft",
    timeline: "14 Months",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description: "A sprawling private luxury residence featuring cantilevered steel framing, smart home integration, infinity plunge pool, and bespoke interior woodwork.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80"
    ],
    featured: true,
  },
  {
    id: "proj-2",
    title: "Emerald Heights Penthouse",
    category: "Interior Design & Renovation",
    status: "Completed",
    location: "Skyline Avenue, Financial District",
    area: "4,200 sq.ft",
    timeline: "6 Months",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    description: "Complete turnkey overhaul of a high-floor penthouse, featuring open-concept kitchen, custom acoustic media lounge, and Italian marble flooring throughout.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
    ],
    featured: true,
  },
  {
    id: "proj-3",
    title: "The Urban Courtyard Residence",
    category: "House Construction",
    status: "Ongoing",
    location: "Palm Grove Enclave, Phase 2",
    area: "5,800 sq.ft",
    timeline: "Expected Q4 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Currently in structural finishing and exterior cladding phase. Features an internal bioclimatic open courtyard, double-glazed facades, and rainwater harvesting.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
    ],
    featured: true,
  },
  {
    id: "proj-4",
    title: "Vasant Vihar Modern Bungalow",
    category: "Architecture & 2D/3D Design",
    status: "Ongoing",
    location: "Vasant Vihar, Civil Lines",
    area: "7,100 sq.ft",
    timeline: "Expected Q1 2027",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "Foundation and lower column casting completed. Architectural design emphasizes solar passive orientation, private terrace landscaped zones, and 4-car basement parking.",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80"
    ],
    featured: false,
  },
  {
    id: "proj-5",
    title: "Serenade Row Houses",
    category: "Turnkey Construction",
    status: "Completed",
    location: "Lakeview Boulevard",
    area: "12,000 sq.ft total",
    timeline: "18 Months",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "A prestigious row house development of 4 bespoke luxury residences with uniform modern facade elevation and private rooftop terrace pergolas.",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
    ],
    featured: false,
  }
];

export const initialWhyChooseUs = [
  {
    id: "why-1",
    title: "Turnkey Execution",
    description: "From structural soil testing to the final handover key, we oversee every single trade in-house with zero contractor disputes.",
    icon: "Key"
  },
  {
    id: "why-2",
    title: "Architectural Precision",
    description: "Engineered 2D/3D blueprints backed by BIM modelling and structural sanity audits that prevent costly on-site revisions.",
    icon: "Ruler"
  },
  {
    id: "why-3",
    title: "Transparent Costing",
    description: "Itemized Bill of Quantities (BOQ) with locked material grades. No hidden surcharges, no surprise escalations.",
    icon: "FileCheck"
  },
  {
    id: "why-4",
    title: "Certified Structural Quality",
    description: "Strict adherence to national building codes, high-grade steel, and certified batch-tested concrete mixtures.",
    icon: "Award"
  },
  {
    id: "why-5",
    title: "Dedicated Project Manager",
    description: "A single certified technical point of contact who coordinates daily logs, material inspections, and milestones for you.",
    icon: "UserCheck"
  },
  {
    id: "why-6",
    title: "Guaranteed Milestone Delivery",
    description: "Rigorous Gantt scheduling with clearly defined milestone sign-offs ensuring on-schedule completion and delivery.",
    icon: "Clock"
  }
];

export const initialProcessSteps = [
  {
    step: "01",
    title: "Consultation & Briefing",
    tagline: "Understanding Your Vision",
    description: "We initiate an in-depth discovery session to understand your site parameters, lifestyle requirements, aesthetic aspirations, and budget boundaries.",
    icon: "MessagesSquare",
    deliverable: "Initial project charter & site feasibility assessment"
  },
  {
    step: "02",
    title: "Planning & 3D Design",
    tagline: "Architectural Precision",
    description: "Our architects draft tailored 2D spatial layouts, structural schemes, and photorealistic 3D external and interior walkthroughs for your approval.",
    icon: "Compass",
    deliverable: "Approved 2D architectural drawings & 3D renders"
  },
  {
    step: "03",
    title: "Estimation & BOQ Sign-Off",
    tagline: "100% Financial Clarity",
    description: "We compile an itemized Bill of Quantities (BOQ) covering every specification, brand choice, timeline milestone, and payment stage.",
    icon: "Calculator",
    deliverable: "Locked specification contract & schedule"
  },
  {
    step: "04",
    title: "Work Execution & QC",
    tagline: "Craftsmanship in Action",
    description: "Construction and interior fabrication commence under the vigilant supervision of our on-site engineers, with weekly progress logs shared with you.",
    icon: "HardHat",
    deliverable: "Weekly digital quality audit reports"
  },
  {
    step: "05",
    title: "Final Handover & Warranty",
    tagline: "Stepping into Perfection",
    description: "After a comprehensive 120-point quality snag check and deep cleaning, we ceremoniously hand over your dream property with complete warranty documentation.",
    icon: "Sparkles",
    deliverable: "Handover folder, warranties & as-built drawings"
  }
];

// IMPORTANT: As requested, clearly marked demo placeholders until genuine reviews are available.
export const initialReviews = [
  {
    id: "rev-1",
    name: "Vikram & Ananya Malhotra",
    role: "Homeowners",
    projectType: "Complete Turnkey Villa Construction",
    rating: 5,
    date: "Demo Placeholder",
    comment: "From the initial 3D walkthrough to the final key handover, MNL GROUP demonstrated unmatched professionalism. Their transparent BOQ meant zero surprise costs, and the structural quality is truly world-class.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    isDemoPlaceholder: true,
    published: true,
  },
  {
    id: "rev-2",
    name: "Rajesh Singhania",
    role: "Property Owner",
    projectType: "Luxury Penthouse Interior & Renovation",
    rating: 5,
    date: "Demo Placeholder",
    comment: "The attention to detail in their modular kitchen engineering and acoustic false ceilings was phenomenal. The dedicated project manager kept us updated every weekend without us having to chase anyone.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    isDemoPlaceholder: true,
    published: true,
  },
  {
    id: "rev-3",
    name: "Dr. Shalini Raman",
    role: "Bungalow Owner",
    projectType: "Modern Architecture & Elevation",
    rating: 5,
    date: "Demo Placeholder",
    comment: "We wanted a contemporary residence that maximized natural sunlight and ventilation while maintaining privacy. MNL GROUP's architects delivered a design that surpassed all our expectations.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    isDemoPlaceholder: true,
    published: true,
  }
];

export const initialTeam = [
  {
    id: "team-1",
    name: "Er. Mukund N. Lal",
    role: "Founder & Chief Structural Consultant",
    experience: "Leadership & Civil Engineering",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
    bio: "Guiding the architectural vision, structural compliance, and turnkey execution standards of MNL GROUP.",
    active: true,
  },
  {
    id: "team-2",
    name: "Ar. Priya Sharma",
    role: "Head of Architecture & 3D Spatial Design",
    experience: "Contemporary Architecture & BIM",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
    bio: "Specializing in luxury residential elevations, passive solar layouts, and bespoke architectural aesthetics.",
    active: true,
  },
  {
    id: "team-3",
    name: "Sameer Verma",
    role: "Senior Interior & Modular Systems Lead",
    experience: "Luxury Interiors & Materials",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    bio: "Pioneering ergonomic kitchen design, luxury woodwork crafting, and ambient architectural illumination.",
    active: true,
  },
  {
    id: "team-4",
    name: "Rohan Kapoor",
    role: "Lead Project Manager & Site Quality Auditor",
    experience: "On-site Turnkey Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    bio: "Ensuring zero-deviation quality checks, stringent safety adherence, and guaranteed milestone deliveries.",
    active: true,
  }
];

export const initialEnquiries = [
  {
    id: "enq-101",
    name: "Arvind Mehta",
    email: "arvind.mehta@example.com",
    phone: "+91 98112 33445",
    location: "Green Meadows, Sector 45",
    service: "House Construction",
    message: "Planning to construct a 4,000 sq ft G+2 villa. Looking for complete turnkey design and construction quotes.",
    status: "New",
    date: "2026-11-18",
  },
  {
    id: "enq-102",
    name: "Kavita Chawla",
    email: "kavita.c@example.com",
    phone: "+91 97223 88990",
    location: "Royal Palms Residency",
    service: "Modular Kitchen",
    message: "Need German hardware modular kitchen with quartz countertop for newly acquired 3BHK apartment.",
    status: "Contacted",
    date: "2026-11-17",
  },
  {
    id: "enq-103",
    name: "Deepak Grover",
    email: "d.grover@example.com",
    phone: "+91 99001 22334",
    location: "DLF Phase 4",
    service: "Home Renovation",
    message: "Looking for full interior renovation including false ceiling, plumbing revamp, and Italian marble laying.",
    status: "In Discussion",
    date: "2026-11-15",
  }
];

export const initialSeo = {
  metaTitle: "MNL GROUP | Turnkey House Construction & Architecture Excellence",
  metaDescription: "MNL GROUP offers modern architecture, 2D/3D design, luxury residential construction, modular kitchens, and premium interior execution.",
  metaKeywords: "MNL GROUP, house construction, architecture 3d design, interior design, luxury villa construction, turnkey contractor, modular kitchen, home renovation",
  ogTitle: "MNL GROUP - Building Dreams. Creating Futures.",
  ogDescription: "Turnkey residential construction and high-end architecture crafted with uncompromising precision.",
  ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  robotsTxt: "User-agent: *\nAllow: /\nDisallow: /admin",
};
