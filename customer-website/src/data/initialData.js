// MNL GROUP Initial Configurable Data Store (Customer Website)
// Complete Turnkey Home Construction, Architecture, Interiors & Renovation

export const initialCompanyInfo = {
  name: "MNL GROUP",
  tagline: "Building Dreams. Creating Futures.",
  shortDescription: "Complete Home Construction, Architecture, Interior Design, Exterior Design, Renovation and Turnkey Solutions crafted with engineering precision and artistic mastery.",
  about: "MNL GROUP is a multidisciplinary architecture, civil construction, and interior design company dedicated to transforming visions into enduring architectural landmarks. We provide complete end-to-end home solutions—from initial plot soil testing and 2D/3D architectural planning to foundation engineering, turnkey construction, bespoke interiors, modular kitchens, and final key handover. Clients can engage our expertise for single specialized services or full turnkey living spaces.",
  mission: "To deliver world-class construction, design, and renovation solutions through relentless craftsmanship, transparent practices, locked BOQ pricing, and engineering innovation that exceeds client aspirations.",
  vision: "To be the most respected and trusted construction and luxury design partner, shaping future-ready homes and setting modern architectural standards.",
  commitment: "We stand firmly on quality integrity, adhering to rigorous safety standards, premium-grade materials, stage-wise milestone deliveries, and transparent client communication at every step.",
  phone: "+91 98765 43210",
  altPhone: "+91 98765 43211",
  whatsapp: "+91 98765 43210",
  whatsappMessage: "Hello MNL GROUP! I am interested in discussing a construction/design project with you.",
  email: "contact@mnlgroup.com",
  supportEmail: "support@mnlgroup.com",
  address: "MNL Corporate Tower, Level 4, Prestige Avenue, Landmark City, India",
  workingHours: "Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: By Appointment",
  licenseNumber: "ISO 9001:2015 Certified Builders & Architectural Planners",
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
    subtitle: "Complete Home Construction, Design & Renovation Solutions",
    description: "From plot survey and 3D architectural blueprints to turnkey civil construction, luxury interiors, and lock-and-key handover — choose single services or complete living solutions.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    primaryButtonText: "Explore Services",
    primaryButtonLink: "/services",
    secondaryButtonText: "Get Free Consultation",
    secondaryButtonLink: "/contact",
    active: true,
  },
  {
    id: "banner-2",
    title: "Architectural Planning & 3D Designs",
    subtitle: "Vastu-Compliant Blueprints • 3D Elevations • Photorealistic Walkthroughs",
    description: "Visualize every inch of your luxury residence before breaking ground with engineering drawings, structural designs, and immersive 3D exterior-interior perspectives.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
    primaryButtonText: "View Design Gallery",
    primaryButtonLink: "/gallery",
    secondaryButtonText: "Build Your Home",
    secondaryButtonLink: "#build-your-home",
    active: true,
  },
  {
    id: "banner-3",
    title: "End-to-End Turnkey Execution",
    subtitle: "Civil Construction • Modular Kitchens • Luxury Interiors • Renovation",
    description: "Experience peace of mind with locked itemized estimates, certified engineering supervisors, premium branded materials, and on-schedule milestone delivery.",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
    primaryButtonText: "Our Projects",
    primaryButtonLink: "/projects",
    secondaryButtonText: "Speak with Architect",
    secondaryButtonLink: "/contact",
    active: true,
  }
];

// 13 MASTER SERVICE CATEGORIES (A through M)
export const initialServiceCategories = [
  {
    id: "cat-construction",
    code: "A",
    name: "Construction",
    title: "Civil & Turnkey Construction",
    slug: "construction",
    icon: "Building2",
    shortDesc: "Complete residential house, commercial, and turnkey structural construction from ground-up foundation to roof casting.",
    longDesc: "Our civil construction division handles complete structural engineering, certified concrete work, robust foundation systems, brick masonry, plastering, and turnkey lock-and-key buildings.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Residential House Construction",
      "Commercial Construction",
      "Turnkey Construction",
      "Foundation and Structural Work",
      "Brickwork and Masonry",
      "Plastering",
      "Complete Building Construction"
    ]
  },
  {
    id: "cat-architecture",
    code: "B",
    name: "Architecture and Design",
    title: "Architecture & 2D/3D Design",
    slug: "architecture-and-design",
    icon: "Compass",
    shortDesc: "Comprehensive architectural blueprints, 2D floor plans, 3D elevations, space optimization, and municipal sanction drawings.",
    longDesc: "Transform raw land into master-planned architectural marvels with functional spatial circulation, natural light orientation, Vastu compliance, and photorealistic 3D virtual walkthroughs.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "2D Floor Plans",
      "3D House Design",
      "Front Elevation Design",
      "Architectural Planning",
      "Space Planning",
      "Structural Planning"
    ]
  },
  {
    id: "cat-interior",
    code: "C",
    name: "Interior Design",
    title: "Luxury Interior Design",
    slug: "interior-design",
    icon: "Palette",
    shortDesc: "Bespoke interior styling for living rooms, master suites, dining areas, home offices, and luxury residential sanctuaries.",
    longDesc: "Curated residential interiors that merge ergonomic functionality with refined aesthetic luxury. We harmonize color palettes, architectural lighting, wall treatments, and custom bespoke furniture.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Living Room Interior",
      "Bedroom Interior",
      "Dining Room Interior",
      "Office Interior",
      "Luxury Interior Design",
      "Space Optimization"
    ]
  },
  {
    id: "cat-exterior",
    code: "D",
    name: "Exterior Design",
    title: "Exterior Design & Facade",
    slug: "exterior-design",
    icon: "Home",
    shortDesc: "Contemporary exterior facade designs, weather-resistant stone cladding, architectural louvers, and modern elevations.",
    longDesc: "Elevate your property's exterior identity. We craft dramatic modern facades integrating HPL panels, terracotta tiles, sleek louvers, glass balustrades, and architectural exterior lighting.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Exterior Painting",
      "Modern House Elevation",
      "Facade Design",
      "Outdoor Design"
    ]
  },
  {
    id: "cat-painting",
    code: "E",
    name: "Painting and Finishing",
    title: "Painting & Decorative Finishing",
    slug: "painting-and-finishing",
    icon: "Brush",
    shortDesc: "Flawless mechanized interior & exterior painting, texture wall coatings, smooth wall putty, and luxury wood polishing.",
    longDesc: "Dust-free mechanized sanding and precision spray technology delivering mirror-smooth wall finishes. We apply premium washable royal emulsions, textured feature walls, and weatherproof exterior protective shields.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Interior Painting",
      "Exterior Painting",
      "Texture Painting",
      "Wall Putty",
      "Wood Polish",
      "Decorative Finishing"
    ]
  },
  {
    id: "cat-kitchen",
    code: "F",
    name: "Kitchen Solutions",
    title: "Modular Kitchen & Cabinetry",
    slug: "kitchen-solutions",
    icon: "CookingPot",
    shortDesc: "Ergonomic German-hardware modular kitchens, acrylic & PU finishes, quartz countertops, and smart storage organizers.",
    longDesc: "The culinary heart of the home. Crafted using BWP marine-grade plywood, Blum/Hafele soft-close hardware, anti-stain quartz slabs, corner pull-out carousels, and built-in appliance cabinetry.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Modular Kitchen",
      "Kitchen Cabinets",
      "Kitchen Renovation",
      "Kitchen Interior"
    ]
  },
  {
    id: "cat-woodwork",
    code: "G",
    name: "Furniture and Woodwork",
    title: "Custom Furniture & Woodwork",
    slug: "furniture-and-woodwork",
    icon: "Armchair",
    shortDesc: "Custom built-in wardrobes, walk-in closets, designer TV media consoles, solid wood doors, and artisan carpentry.",
    longDesc: "Factory-pressed joinery and precision edge banding ensure zero peeling and lifetime durability. From teak wood main doors to floor-to-ceiling sliding wardrobes with integrated sensor lights.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Custom Furniture",
      "Wardrobes",
      "Carpentry",
      "Wooden Doors",
      "Woodwork and Polish"
    ]
  },
  {
    id: "cat-ceiling",
    code: "H",
    name: "Ceiling and Lighting",
    title: "POP & False Ceiling",
    slug: "ceiling-and-lighting",
    icon: "Layers",
    shortDesc: "Designer Saint-Gobain gypsum false ceilings, perimeter cove LED lighting, magnetic track lights, and architectural POP mouldings.",
    longDesc: "Transform overhead dimensions into architectural focal points. Precision anti-sag GI framing with moisture-resistant gypsum boards, wooden louver rafters, and smart dimmable ambient lighting.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "POP Work",
      "False Ceiling",
      "Gypsum Ceiling",
      "Decorative Ceiling",
      "Lighting Installation"
    ]
  },
  {
    id: "cat-electrical",
    code: "I",
    name: "Electrical Work",
    title: "Electrical & Home Automation",
    slug: "electrical-work",
    icon: "Zap",
    shortDesc: "Concealed conduit wiring, load-balanced MCB distribution boards, designer modular switches, and smart home automation.",
    longDesc: "Certified electrical engineering prioritizing fire safety and modern luxury. Flame-retardant copper wiring, dedicated copper earthing, surge protection, generator changeover, and app-controlled lighting.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Electrical Wiring",
      "Lighting Installation",
      "Switches and Fittings",
      "Electrical Maintenance"
    ]
  },
  {
    id: "cat-plumbing",
    code: "J",
    name: "Plumbing Work",
    title: "Plumbing & Sanitary Solutions",
    slug: "plumbing-work",
    icon: "Wrench",
    shortDesc: "Concealed CPVC/UPVC water distribution lines, acoustic drainage, thermostatic diverters, pressure booster pumps, and sanitary fixtures.",
    longDesc: "Hydrostatically pressure-tested plumbing infrastructure engineered for leak-free longevity. Includes concealed wall mixers, rainwater harvesting lines, overhead tanks, and solar water heater integration.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Water Supply Installation",
      "Pipe Fitting",
      "Bathroom Plumbing",
      "Plumbing Maintenance"
    ]
  },
  {
    id: "cat-waterproofing",
    code: "K",
    name: "Waterproofing",
    title: "Waterproofing & Moisture Defense",
    slug: "waterproofing",
    icon: "ShieldCheck",
    shortDesc: "Scientific elastomeric membrane waterproofing for terraces, bathrooms, sunken slabs, basements, and exterior walls.",
    longDesc: "Structural protection against water ingress, seepage, and efflorescence. We utilize multi-layer polymer-modified cementitious coatings, crystalline crack sealing, and PU injection grouting.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Roof Waterproofing",
      "Bathroom Waterproofing",
      "Terrace Waterproofing",
      "Wall Dampness Treatment"
    ]
  },
  {
    id: "cat-flooring",
    code: "L",
    name: "Flooring",
    title: "Tile, Marble & Granite Flooring",
    slug: "flooring",
    icon: "Grid",
    shortDesc: "Precision installation of Italian marble, large-format glazed vitrified tiles, granite treads, and hardwood flooring.",
    longDesc: "Flawless laser-aligned flooring with zero lippage. We handle subfloor leveling, mirror diamond marble polishing, anti-skid bathroom floor tiling, and exterior paving stones.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Tiles Installation",
      "Marble Flooring",
      "Granite Flooring",
      "Flooring Renovation"
    ]
  },
  {
    id: "cat-renovation",
    code: "M",
    name: "Renovation",
    title: "Turnkey Home Renovation",
    slug: "renovation",
    icon: "Hammer",
    shortDesc: "Complete structural remodeling, room additions, bathroom/kitchen modernizations, and full interior-exterior overhauls.",
    longDesc: "Breathe new life into aging spaces. Our renovation specialists execute wall reconfigurations, plumbing and electrical rewiring, modern tile overlays, and contemporary facade makeovers.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      "Complete Home Renovation",
      "Kitchen Renovation",
      "Bathroom Renovation",
      "Room Renovation",
      "Exterior Renovation"
    ]
  }
];

// INDIVIDUAL DEDICATED SERVICES FOR /services/:slug
export const initialServices = [
  // CATEGORY A - CONSTRUCTION
  {
    id: "srv-residential-construction",
    title: "Residential House Construction",
    slug: "residential-house-construction",
    categoryId: "cat-construction",
    categoryName: "Construction",
    categoryCode: "A",
    icon: "Building2",
    tagline: "Turnkey residential homes engineered for generational longevity.",
    shortDesc: "Complete ground-up home construction from soil testing and RCC framework to finishing and lock-and-key handover.",
    fullDesc: "Our residential construction service unites structural engineering excellence with high-grade certified materials. Every home is built with strict adherence to IS standards, earthquake-resistant design, and transparent stage-wise milestone reviews.",
    features: [
      "Comprehensive soil investigation & foundation design",
      "Certified Fe-550D TMT steel & 43/53 grade OPC/PPC cement",
      "On-site quality supervision by certified civil engineers",
      "Milestone-based stage-wise billing with locked BOQ"
    ],
    deliverables: [
      "Structural engineering & reinforcement drawings",
      "Excavation, anti-termite treatment & foundation casting",
      "Brick masonry & two-coat smooth cement plastering",
      "Complete utility piping & electrical conduit embedding",
      "Final lock-and-key quality inspection audit"
    ],
    benefits: [
      "Zero subcontracting hassle — single point of accountability",
      "Locked itemized BOQ eliminates budget surprises",
      "Strict material verification before casting",
      "Direct milestone status updates"
    ],
    workingProcess: [
      { step: "01", title: "Soil & Structural Audit", desc: "Detailed soil test and RCC framework calculations." },
      { step: "02", title: "Foundation & Plinth", desc: "Anti-termite treatment, column footings, and plinth beam." },
      { step: "03", title: "Superstructure & Slabs", desc: "Framed RCC columns, beams, slab casting, and masonry." },
      { step: "04", title: "Finishing & Handover", desc: "Plastering, utilities, flooring, and final handover." }
    ],
    relatedServices: ["architecture-and-design", "interior-design", "waterproofing"],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    isSample: true,
  },
  {
    id: "srv-turnkey-construction",
    title: "Turnkey Construction",
    slug: "turnkey-construction",
    categoryId: "cat-construction",
    categoryName: "Construction",
    categoryCode: "A",
    icon: "Building2",
    tagline: "From empty plot to fully furnished luxury residence under one contract.",
    shortDesc: "An all-inclusive building experience encompassing architectural design, civil construction, interiors, and utility installations.",
    fullDesc: "Turnkey construction is our signature offering for homeowners who demand world-class quality without the chaos of managing dozens of individual trades. We manage every single discipline—architecture, civil engineering, plumbing, electrical, modular kitchens, wardrobes, and painting—under one unified milestone timeline.",
    features: [
      "Single contract covering design through interior furnishing",
      "Dedicated senior project manager assigned to your site",
      "Comprehensive 3D BIM coordination eliminates site clashes",
      "Pre-negotiated material grades with quality certificates"
    ],
    deliverables: [
      "Complete architectural, structural & MEP drawings",
      "Full civil structural construction & waterproofing",
      "Designer electrical fixtures & sanitary installations",
      "Factory-finished modular kitchen and custom wardrobes",
      "Final clean-up, deep polishing, and key ceremony"
    ],
    benefits: [
      "Eliminates trade-to-trade blame games",
      "Guaranteed schedule with sequential trade coordination",
      "Unified aesthetic from facade to bedroom cabinetry"
    ],
    workingProcess: [
      { step: "01", title: "Master Architectural Plan", desc: "Finalize floor plans, elevations, and 3D renderings." },
      { step: "02", title: "Civil & Structural Build", desc: "Execute complete RCC framing and brickwork." },
      { step: "03", title: "Interiors & Joinery", desc: "Install ceilings, kitchen, wardrobes, and marble." },
      { step: "04", title: "Deep Polish & Delivery", desc: "Thorough testing of all fixtures and key handover." }
    ],
    relatedServices: ["residential-house-construction", "architecture-and-design", "kitchen-solutions"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    isSample: true,
  },
  {
    id: "srv-foundation-structural",
    title: "Foundation and Structural Work",
    slug: "foundation-and-structural-work",
    categoryId: "cat-construction",
    categoryName: "Construction",
    categoryCode: "A",
    icon: "Building2",
    tagline: "Unshakable engineering beneath your feet.",
    shortDesc: "Deep foundation footings, raft foundations, RCC column-beam framing, and load-bearing structural engineering.",
    fullDesc: "The integrity of your home relies on subterranean engineering. We design and construct column footings, pile caps, retaining walls, and seismic-resistant RCC frameworks to ensure decades of safety.",
    features: [
      "Geotechnical soil load-bearing capacity assessment",
      "Waterproofing additives integrated in foundation concrete",
      "Vibrated concrete casting with zero honeycomb voids",
      "M25/M30 grade concrete batching"
    ],
    deliverables: [
      "Foundation layout & column center-line marking",
      "Rebar cage fabrication with certified cover blocks",
      "Plinth beam casting and anti-damp DPC layer"
    ],
    benefits: [
      "Prevents structural settling and foundation cracks",
      "Stops ground moisture from capillary rising into walls"
    ],
    workingProcess: [
      { step: "01", title: "Excavation", desc: "Machine excavation to hard strata." },
      { step: "02", title: "PCC & Anti-Termite", desc: "Chemical barrier and plain cement concrete base." },
      { step: "03", title: "Footing & Columns", desc: "Steel rebar placement and monolithic concrete pour." },
      { step: "04", title: "Backfill & Plinth", desc: "Compaction and plinth beam tying." }
    ],
    relatedServices: ["residential-house-construction", "waterproofing"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    isSample: true,
  },

  // CATEGORY B - ARCHITECTURE AND DESIGN
  {
    id: "srv-architecture-design",
    title: "Architecture & 2D/3D Design",
    slug: "architecture-and-design",
    categoryId: "cat-architecture",
    categoryName: "Architecture and Design",
    categoryCode: "B",
    icon: "Compass",
    tagline: "Visionary blueprints merging human ergonomics and modern aesthetics.",
    shortDesc: "Vastu-compliant 2D floor plans, photorealistic 3D exterior elevations, structural designs, and sanction drawings.",
    fullDesc: "Before a single brick is laid, our architectural design studio crafts every angle of your home in digital 3D. We study sun paths, prevailing breezes, privacy zoning, and spatial flow to create homes that feel expansive, welcoming, and intrinsically elegant.",
    features: [
      "Detailed 2D furniture-layout floor plans",
      "Day/night photorealistic 3D facade elevations",
      "Vastu-harmonized spatial orientation",
      "Comprehensive structural and plumbing/electrical working drafts"
    ],
    deliverables: [
      "High-resolution 2D architectural blueprints",
      "4K photorealistic 3D exterior rendering views",
      "Detailed structural column-beam calculation sheets",
      "Material specification and finishes schedule"
    ],
    benefits: [
      "Prevents expensive on-site alterations and redesigns",
      "Enables accurate itemized BOQ estimation before construction",
      "Optimizes usable square footage with zero wasted corridors"
    ],
    workingProcess: [
      { step: "01", title: "Site & Lifestyle Brief", desc: "Analyze plot dimensions, bylaws, and family needs." },
      { step: "02", title: "Concept 2D Floor Plans", desc: "Draft spatial circulation and room layouts." },
      { step: "03", title: "3D Facade Modeling", desc: "Render textures, materials, and lighting." },
      { step: "04", title: "Working Drawings", desc: "Deliver civil, structural, and MEP sets for execution." }
    ],
    relatedServices: ["residential-house-construction", "interior-design", "exterior-design"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    isSample: true,
  },
  {
    id: "srv-3d-house-design",
    title: "3D House Design & Walkthroughs",
    slug: "3d-house-design",
    categoryId: "cat-architecture",
    categoryName: "Architecture and Design",
    categoryCode: "B",
    icon: "Compass",
    tagline: "Immerse yourself inside your home before construction begins.",
    shortDesc: "Cinematic 3D architectural rendering, video walkthroughs, and virtual material exploration.",
    fullDesc: "Step into your future living room, examine shadow patterns across your veranda, and preview exterior stone cladding under daytime and nighttime lighting through our advanced architectural rendering studio.",
    features: [
      "Photorealistic texture mapping with actual material replicas",
      "Day and warm evening architectural lighting simulations",
      "High-definition 3D video walkthrough fly-throughs",
      "Landscape and exterior boundary integration"
    ],
    deliverables: [
      "Multi-angle 4K architectural visual renders",
      "Animated 3D spatial tour video file",
      "Color and material palette selection board"
    ],
    benefits: [
      "Clear visualization for all family members",
      "Confident material and color decision-making",
      "Seamless communication between architect and site masons"
    ],
    workingProcess: [
      { step: "01", title: "CAD Import", desc: "Convert approved 2D CAD layouts into 3D geometry." },
      { step: "02", title: "Material Mapping", desc: "Apply stone, wood, glass, and metal textures." },
      { step: "03", title: "Lighting Setup", desc: "Simulate natural daylight and ambient warm luminaires." },
      { step: "04", title: "Render & Review", desc: "Produce high-res presentation imagery." }
    ],
    relatedServices: ["architecture-and-design", "exterior-design", "interior-design"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    isSample: true,
  },

  // CATEGORY C - INTERIOR DESIGN
  {
    id: "srv-interior-design",
    title: "Interior Design",
    slug: "interior-design",
    categoryId: "cat-interior",
    categoryName: "Interior Design",
    categoryCode: "C",
    icon: "Palette",
    tagline: "Curated sanctuaries balancing functional luxury and timeless elegance.",
    shortDesc: "Complete residential interiors covering living rooms, bedrooms, dining suites, and private entertainment lounges.",
    fullDesc: "Our interior design practice crafts refined living environments tailored to individual lifestyles. We orchestrate architectural ceiling lighting, bespoke wall paneling, acoustic veneers, custom upholstered furnishings, and curated art accents into a coherent aesthetic dialogue.",
    features: [
      "Bespoke 3D interior design mockups for each room",
      "Curated luxury color palettes, wallpapers, and marble veneers",
      "Architectural lighting layers: ambient, task, and accent glow",
      "Custom furniture sizing tailored to exact room dimensions"
    ],
    deliverables: [
      "3D interior perspective renders and moodboards",
      "Detailed ceiling, electrical, and furniture layout plans",
      "Full material schedule and fabric swatch approvals",
      "Complete on-site execution supervision and styling"
    ],
    benefits: [
      "Harmonious flow across all rooms without mismatched clutter",
      "Maximizes natural daylight and functional storage",
      "Premium materials tested for scratch and moisture resistance"
    ],
    workingProcess: [
      { step: "01", title: "Lifestyle Discovery", desc: "Understand your aesthetic tastes and storage needs." },
      { step: "02", title: "3D Space Concept", desc: "Present detailed room-by-room 3D visualizations." },
      { step: "03", title: "Material Finalization", desc: "Select laminates, veneers, fabrics, and marbles." },
      { step: "04", title: "Execution & Styling", desc: "Install joinery, lighting, and soft furnishings." }
    ],
    relatedServices: ["kitchen-solutions", "furniture-and-woodwork", "ceiling-and-lighting"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    isSample: true,
  },
  {
    id: "srv-living-room-interior",
    title: "Living Room Interior",
    slug: "living-room-interior",
    categoryId: "cat-interior",
    categoryName: "Interior Design",
    categoryCode: "C",
    icon: "Palette",
    tagline: "The centerpiece of hospitality and family leisure.",
    shortDesc: "Double-height lounges, bookmatched marble TV feature walls, fluted acoustic paneling, and curated seating.",
    fullDesc: "We design living rooms that leave a lasting impression while remaining supremely comfortable for everyday relaxation. From brass-accented chandeliers to concealed magnetic track lighting and bespoke sectional sofas.",
    features: [
      "Bookmatched Italian marble and veneer TV backdrops",
      "Acoustic fluted wooden wall cladding",
      "Integrated concealed LED profile lighting channels",
      "Custom coffee tables and bespoke armchairs"
    ],
    deliverables: [
      "Living room 3D elevation drawings",
      "Electrical switch and TV wiring concealment plan",
      "Custom furniture fabrication and on-site positioning"
    ],
    benefits: [
      "Clean clutter-free look with zero visible wires",
      "Sophisticated ambiance for entertaining guests"
    ],
    workingProcess: [
      { step: "01", title: "Spatial Flow", desc: "Plan seating arrangements and focal entertainment wall." },
      { step: "02", title: "Wall Panel Design", desc: "Select marble, veneer, and CNC fluted profiles." },
      { step: "03", title: "Lighting Scheme", desc: "Coordinate chandeliers, track lights, and cove LEDs." },
      { step: "04", title: "Installation", desc: "Assemble custom consoles and dress the space." }
    ],
    relatedServices: ["interior-design", "ceiling-and-lighting", "furniture-and-woodwork"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    isSample: true,
  },

  // CATEGORY D - EXTERIOR DESIGN
  {
    id: "srv-exterior-design",
    title: "Exterior Design & Elevation",
    slug: "exterior-design",
    categoryId: "cat-exterior",
    categoryName: "Exterior Design",
    categoryCode: "D",
    icon: "Home",
    tagline: "Distinguished facade architecture that turns heads.",
    shortDesc: "Modern front elevations, weather-resistant cladding, stone textures, louvers, and architectural facade lighting.",
    fullDesc: "Your home's exterior announces its character. We engineer facades that combine weather-shielding longevity with bold contemporary aesthetics—utilizing stone cladding, aluminum louvers, terracotta tiles, and warm night illumination.",
    features: [
      "Multi-layered facade geometry with cantilevered projections",
      "Weather-resistant exterior HPL and dry stone cladding",
      "Architectural facade wall-washer lighting design",
      "Terrace pergolas, glass railings, and entrance canopy styling"
    ],
    deliverables: [
      "Front and corner exterior elevation drafts",
      "Material specification schedule (cladding, paints, louvers)",
      "Exterior lighting conduit placement plan"
    ],
    benefits: [
      "Boosts curb appeal and market valuation",
      "Thermal insulation benefits from ventilated facade cladding"
    ],
    workingProcess: [
      { step: "01", title: "Facade Study", desc: "Evaluate building orientation and structural lines." },
      { step: "02", title: "Cladding & Louvers", desc: "Select weather-durable exterior materials." },
      { step: "03", title: "Lighting Simulation", desc: "Position exterior sconces and strip accents." },
      { step: "04", title: "Execution", desc: "Install metal subframe, cladding, and protective paint." }
    ],
    relatedServices: ["architecture-and-design", "painting-and-finishing", "residential-house-construction"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    isSample: true,
  },

  // CATEGORY E - PAINTING AND FINISHING
  {
    id: "srv-house-painting",
    title: "Painting and Finishing",
    slug: "painting-and-finishing",
    categoryId: "cat-painting",
    categoryName: "Painting and Finishing",
    categoryCode: "E",
    icon: "Brush",
    tagline: "Mechanized perfection on every wall surface.",
    shortDesc: "Dust-free mechanized wall sanding, luxury royal emulsions, designer texture finishes, and exterior weather-coat shields.",
    fullDesc: "Say goodbye to chalky surfaces and uneven brush streaks. We use mechanized sanding with vacuum extraction, acrylic wall putty, anti-fungal primer, and multi-coat premium emulsions to deliver walls with flawless satin or matte finishes.",
    features: [
      "Dustless mechanized wall preparation with HEPA filtration",
      "Moisture testing on wall surfaces before painting",
      "Luxury washable royal emulsions and designer metallic textures",
      "Heavy-duty exterior elastomeric weather-shield coatings"
    ],
    deliverables: [
      "Wall surface moisture audit and crack filling",
      "Two coats of polymer-modified acrylic putty application",
      "Two to three coats of certified branded emulsion paint",
      "Floor protection masking and comprehensive post-paint clean-up"
    ],
    benefits: [
      "Longer finish life with zero bubbling or peeling",
      "99% dust-free application protects your family's health"
    ],
    workingProcess: [
      { step: "01", title: "Surface Inspection", desc: "Check moisture levels and treat damp patches." },
      { step: "02", title: "Putty & Sanding", desc: "Apply acrylic putty and mechanized sanding." },
      { step: "03", title: "Priming & Base Coat", desc: "Seal surface with deep-penetrating primer." },
      { step: "04", title: "Topcoat & Texture", desc: "Roll luxury topcoats and designer texture accents." }
    ],
    relatedServices: ["waterproofing", "interior-design", "exterior-design"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    isSample: true,
  },

  // CATEGORY F - KITCHEN SOLUTIONS
  {
    id: "srv-modular-kitchen",
    title: "Modular Kitchen Solutions",
    slug: "modular-kitchen",
    categoryId: "cat-kitchen",
    categoryName: "Kitchen Solutions",
    categoryCode: "F",
    icon: "CookingPot",
    tagline: "Culinary ergonomic luxury engineered for Indian cooking.",
    shortDesc: "German soft-close hardware, BWP marine plywood cabinets, anti-stain quartz countertops, and smart storage units.",
    fullDesc: "We design modular kitchens that effortlessly resist spice stains, heavy steam, and daily rigorous use. Featuring 100% boiling-waterproof plywood carcasses, seamless acrylic or PU shutter finishes, tandem drawer systems, and customized spice pull-outs.",
    features: [
      "BWP 710-grade boiling waterproof marine plywood carcasses",
      "Blum / Hafele certified soft-close hinges and tandem boxes",
      "Heat-resistant, non-porous quartz and granite worktops",
      "Dedicated pantry tall units, rolling shutters, and corner carousels"
    ],
    deliverables: [
      "Detailed 3D kitchen layout following the golden work triangle",
      "Plumbing and electrical conduit placement plan for appliances",
      "Precision factory-edge-banded modular cabinetry units",
      "Sink, hob, chimney, and hardware installation"
    ],
    benefits: [
      "Termite and boiling-waterproof warranty-grade materials",
      "Smooth glide drawers holding up to 60kg load",
      "Optimized storage eliminates countertop clutter"
    ],
    workingProcess: [
      { step: "01", title: "Kitchen Ergonomics", desc: "Assess appliance dimensions and workflow triangle." },
      { step: "02", title: "3D Modular Design", desc: "Configure drawers, tall units, and finish shades." },
      { step: "03", title: "Factory Production", desc: "Precision CNC cutting and hot-melt edge banding." },
      { step: "04", title: "Site Installation", desc: "Level carcasses, mount quartz, and fit appliances." }
    ],
    relatedServices: ["interior-design", "plumbing-work", "furniture-and-woodwork"],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    isSample: true,
  },

  // CATEGORY G - FURNITURE AND WOODWORK
  {
    id: "srv-furniture-woodwork",
    title: "Custom Furniture & Woodwork",
    slug: "furniture-and-woodwork",
    categoryId: "cat-woodwork",
    categoryName: "Furniture and Woodwork",
    categoryCode: "G",
    icon: "Armchair",
    tagline: "Bespoke carpentry and artisan cabinetry made to measure.",
    shortDesc: "Floor-to-ceiling sliding wardrobes, walk-in closets, study desks, vanity cabinets, solid wood doors, and teak polish.",
    fullDesc: "Every piece of furniture is custom-measured to utilize every millimeter of your room. From hydraulic lift beds with massive storage to fluted glass wardrobe shutters and solid teak wood entrance doors.",
    features: [
      "Factory-pressed laminates, veneers, and anti-fingerprint acrylics",
      "Custom walk-in wardrobe configurations with profile LED lights",
      "Solid Burma teak and smoked oak decorative woodwork",
      "Concealed joinery and soft-close drawer runners"
    ],
    deliverables: [
      "Furniture fabrication drawings with internal compartment dimensions",
      "Sample laminate/veneer approval boards",
      "On-site assembly, alignment, and final polish touch-up"
    ],
    benefits: [
      "Zero dead space — exact fit for your ceiling heights",
      "Superior durability compared to ready-made flatpack furniture"
    ],
    workingProcess: [
      { step: "01", title: "Laser Measurement", desc: "Measure site dimensions with laser precision." },
      { step: "02", title: "Cabinet CAD", desc: "Design internal shelves, hanging rods, and drawers." },
      { step: "03", title: "Joinery Crafting", desc: "Fabricate using calibrated plywood and hardware." },
      { step: "04", title: "Finishing & Polish", desc: "Mount shutters and apply melamine or PU coats." }
    ],
    relatedServices: ["interior-design", "kitchen-solutions", "ceiling-and-lighting"],
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    isSample: true,
  },

  // CATEGORY H - CEILING AND LIGHTING
  {
    id: "srv-false-ceiling",
    title: "Ceiling and Architectural Lighting",
    slug: "ceiling-and-lighting",
    categoryId: "cat-ceiling",
    categoryName: "Ceiling and Lighting",
    categoryCode: "H",
    icon: "Layers",
    tagline: "Sculpted overhead dimensions with concealed ambient glow.",
    shortDesc: "Designer Saint-Gobain gypsum false ceilings, perimeter cove lights, magnetic track lighting, and POP ornamental mouldings.",
    fullDesc: "A thoughtfully designed false ceiling conceals unsightly AC pipes, wiring, and structural beams while creating warm layered lighting. We design minimalist negative reveals, acoustic wood slats, and magnetic track channels.",
    features: [
      "Saint-Gobain Gyproc moisture-resistant gypsum boards",
      "Heavy-duty galvanized iron framing preventing sagging or cracks",
      "Seamless integration of magnetic spot, flood, and linear lights",
      "Sound-dampening acoustic backing for media rooms"
    ],
    deliverables: [
      "Ceiling elevation design with section details",
      "Lighting circuit cut-out plan for electricians",
      "Sanded, primed, and painted finished ceiling"
    ],
    benefits: [
      "Thermal insulation lowers room temperatures",
      "Conceals AC copper piping and ambient wiring cleanly"
    ],
    workingProcess: [
      { step: "01", title: "Ceiling Grid Layout", desc: "Mark laser datum levels across all perimeter walls." },
      { step: "02", title: "GI Metal Framing", desc: "Anchor heavy gauge galvanized channels to slab." },
      { step: "03", title: "Boarding & Cut-outs", desc: "Screw gypsum boards and cut fixture holes." },
      { step: "04", title: "Joint Taping & Paint", desc: "Apply mesh joint tape, compound, and paint." }
    ],
    relatedServices: ["electrical-work", "interior-design", "painting-and-finishing"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    isSample: true,
  },

  // CATEGORY I - ELECTRICAL WORK
  {
    id: "srv-electrical-work",
    title: "Electrical Work & Smart Automation",
    slug: "electrical-work",
    categoryId: "cat-electrical",
    categoryName: "Electrical Work",
    categoryCode: "I",
    icon: "Zap",
    tagline: "Certified, load-balanced, and future-proof electrical engineering.",
    shortDesc: "Concealed conduit wiring, circuit-balanced MCB distribution boards, designer modular switches, and smart home automation.",
    fullDesc: "Electrical safety is non-negotiable. Our certified engineers design balanced load divisions across three phases, deploy flame-retardant low-smoke copper cables, execute dedicated chemical earthing pits, and install smart IoT touch switches.",
    features: [
      "FR-LSH flame retardant copper cables (Polycab / Havells)",
      "Dedicated RCB/RCCB protection to prevent electric shocks",
      "Smart Wi-Fi automation for voice and smartphone controls",
      "Heavy-load wiring for EV chargers, HVAC, and induction hobs"
    ],
    deliverables: [
      "Complete electrical single-line diagram (SLD)",
      "Concealed conduit wall chasing and backbox installation",
      "Modular switch plates, MCB dressing, and testing report"
    ],
    benefits: [
      "Prevents electrical fires, short-circuits, and voltage fluctuations",
      "Future-ready wiring for solar and electric vehicle charging"
    ],
    workingProcess: [
      { step: "01", title: "Load Calculation", desc: "Calculate power loads for all rooms and heavy appliances." },
      { step: "02", title: "Conduit Chasing", desc: "Chisel neat wall chases and embed PVC conduits." },
      { step: "03", title: "Wire Pulling", desc: "Draw color-coded FR-LSH wires and dress the DB." },
      { step: "04", title: "Switch Mounting", desc: "Fit modular plates, dimmers, and automate." }
    ],
    relatedServices: ["ceiling-and-lighting", "interior-design", "residential-house-construction"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    isSample: true,
  },

  // CATEGORY J - PLUMBING WORK
  {
    id: "srv-plumbing-work",
    title: "Plumbing & Sanitary Engineering",
    slug: "plumbing-work",
    categoryId: "cat-plumbing",
    categoryName: "Plumbing Work",
    categoryCode: "J",
    icon: "Wrench",
    tagline: "High-pressure, silent, and leak-proof hydraulic networks.",
    shortDesc: "Concealed CPVC/UPVC water piping, thermostatic wall diverters, acoustic drainage, and sanitaryware installations.",
    fullDesc: "Flawless plumbing prevents dampness and guarantees consistent water pressure. We execute pressure-tested hot and cold water distribution, silent acoustic SWR drainage, concealed wall-hung WC cisterns, and water pressure booster pumps.",
    features: [
      "Chlorinated Polyvinyl Chloride (CPVC) SDR-11 piping",
      "Pressure-tested up to 10 kg/cm² before wall plastering",
      "Concealed thermostatic shower diverters & wall mixers",
      "Acoustic rubber-ring drain pipes preventing gurgling noise"
    ],
    deliverables: [
      "Water supply and sanitary drainage isometric schematics",
      "Concealed pipe laying, pressure test certificate, and audit",
      "Luxury CP fittings, shower glass, and sanitaryware mounting"
    ],
    benefits: [
      "Zero hidden leaks behind tiled bathroom walls",
      "High shower pressure across all floors simultaneously"
    ],
    workingProcess: [
      { step: "01", title: "Plumbing Routing", desc: "Route supply and soil-waste stacks efficiently." },
      { step: "02", title: "Concealed Laying", desc: "Embed hot/cold CPVC pipes and drainage lines." },
      { step: "03", title: "Hydrostatic Test", desc: "Subject pipes to 24-hour high-pressure test." },
      { step: "04", title: "Sanitary Fitting", desc: "Mount faucets, diverters, and vanity basins." }
    ],
    relatedServices: ["waterproofing", "flooring", "modular-kitchen"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    isSample: true,
  },

  // CATEGORY K - WATERPROOFING
  {
    id: "srv-waterproofing",
    title: "Scientific Waterproofing Solutions",
    slug: "waterproofing",
    categoryId: "cat-waterproofing",
    categoryName: "Waterproofing",
    categoryCode: "K",
    icon: "ShieldCheck",
    tagline: "End-to-end defense against terrace leaks and wall efflorescence.",
    shortDesc: "Elastomeric membrane coatings, sunken bathroom waterproofing, basement retaining wall shields, and dampness treatment.",
    fullDesc: "Water ingress damages structural steel and ruins costly paint. Our scientific waterproofing involves polymer-modified cementitious coatings, polyurethane joint sealing, and crystalline treatments that penetrate concrete capillary pores.",
    features: [
      "Multi-coat fiber-mesh reinforced elastomeric terrace membranes",
      "Two-tier sunken slab waterproofing for bathrooms and balconies",
      "Crystalline chemical barrier against ground moisture",
      "Polyurethane pressure grouting for concrete crack repairs"
    ],
    deliverables: [
      "Surface preparation, pressure washing, and crack grouting",
      "Application of elastomeric waterproofing membrane layers",
      "Pond testing (48-hour standing water test) before tile laying",
      "Waterproofing audit and documentation"
    ],
    benefits: [
      "Permanently eliminates unsightly damp patches and peeled paint",
      "Protects internal structural rebar from corrosive rust"
    ],
    workingProcess: [
      { step: "01", title: "Surface Prep", desc: "Grind surface to sound concrete and chase cracks." },
      { step: "02", title: "Crack Grouting", desc: "Fill joints with non-shrink polymer grout." },
      { step: "03", title: "Membrane Coating", desc: "Apply 2 coats of elastomeric barrier with fiber mesh." },
      { step: "04", title: "Pond Testing", desc: "Fill water for 48 hours to confirm zero seepage." }
    ],
    relatedServices: ["residential-house-construction", "painting-and-finishing", "flooring"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    isSample: true,
  },

  // CATEGORY L - FLOORING
  {
    id: "srv-flooring",
    title: "Flooring, Marble & Tile Laying",
    slug: "flooring",
    categoryId: "cat-flooring",
    categoryName: "Flooring",
    categoryCode: "L",
    icon: "Grid",
    tagline: "Seamless surfaces polished to mirror perfection.",
    shortDesc: "Italian marble installation, large-format vitrified tiles, granite staircases, wooden flooring, and diamond polishing.",
    fullDesc: "Flooring sets the tactile luxury of your residence. Our skilled masons execute laser-leveled subfloors, thin-set polymer adhesive bonding, zero-lippage leveling clips, and multi-stage diamond disc marble polishing.",
    features: [
      "Laser level alignment for zero lippage between tiles",
      "Italian marble bookmatching and crystalline epoxy filling",
      "Anti-skid matte vitrified tiles for bathrooms and verandas",
      "Granite staircase nosing and chamfered edges"
    ],
    deliverables: [
      "Subfloor screed leveling and slope verification",
      "Tile/marble layout dry-run matching grain patterns",
      "Polymer modified adhesive bed and epoxy grouting",
      "Diamond pad mirror polishing for marble installations"
    ],
    benefits: [
      "Smooth, level walking surface without hollow sounds",
      "Stain-resistant epoxy joints that never discolour"
    ],
    workingProcess: [
      { step: "01", title: "Base Screeding", desc: "Level the base concrete and establish slopes." },
      { step: "02", title: "Dry-Run Layout", desc: "Pre-lay marble to align natural veining." },
      { step: "03", title: "Adhesive Laying", desc: "Bed tiles using vibrating suction cups." },
      { step: "04", title: "Epoxy & Polish", desc: "Grout joints and polish with diamond discs." }
    ],
    relatedServices: ["interior-design", "renovation", "residential-house-construction"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    isSample: true,
  },

  // CATEGORY M - RENOVATION
  {
    id: "srv-home-renovation",
    title: "Complete Home Renovation",
    slug: "home-renovation",
    categoryId: "cat-renovation",
    categoryName: "Renovation",
    categoryCode: "M",
    icon: "Hammer",
    tagline: "Revitalize your legacy home with modern luxury and open layouts.",
    shortDesc: "Complete structural remodeling, room layout reconfigurations, bathroom/kitchen overhauls, and modern facade upgrades.",
    fullDesc: "Transform an outdated house into a modern, energy-efficient masterpiece. We conduct structural load audits to remove non-load-bearing walls for open floor plans, replace aging utility pipes, install new designer flooring, and modernize the exterior elevation.",
    features: [
      "Structural safety feasibility audit before wall demolition",
      "Complete gut-and-rebuild for bathrooms and kitchens",
      "Replacement of obsolete electrical wiring and plumbing pipes",
      "Minimal disruption scheduled timeline with dust barriers"
    ],
    deliverables: [
      "Before-and-after architectural remodeling blueprint",
      "Demolition, debris removal, and structural steel reinforcement",
      "New electrical, plumbing, ceiling, and flooring execution",
      "Final handover of transformed residence"
    ],
    benefits: [
      "Achieve brand-new luxury home living without buying new land",
      "Substantially increases the rental and resale value of your property"
    ],
    workingProcess: [
      { step: "01", title: "Structural Audit", desc: "Inspect load-bearing columns and utility routes." },
      { step: "02", title: "Remodeling Plan", desc: "Draft open-concept layouts and 3D preview." },
      { step: "03", title: "Execution Phase", desc: "Demolish partitions, lay new utilities, and tile." },
      { step: "04", title: "Delivery", desc: "Install cabinetry, light fixtures, and final paint." }
    ],
    relatedServices: ["modular-kitchen", "flooring", "architecture-and-design"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    isSample: true,
  }
];

// GALLERY CATEGORIES & ITEMS
export const initialCategories = [
  { id: "cat-1", name: "Modern Houses", slug: "modern-houses", count: 8 },
  { id: "cat-2", name: "Luxury Villas", slug: "luxury-villas", count: 7 },
  { id: "cat-3", name: "House Elevation", slug: "house-elevation", count: 6 },
  { id: "cat-4", name: "3D Designs", slug: "3d-designs", count: 6 },
  { id: "cat-5", name: "Living Rooms", slug: "living-rooms", count: 6 },
  { id: "cat-6", name: "Bedrooms", slug: "bedrooms", count: 6 },
  { id: "cat-7", name: "Modular Kitchens", slug: "modular-kitchens", count: 5 },
  { id: "cat-8", name: "Bathrooms", slug: "bathrooms", count: 4 },
  { id: "cat-9", name: "False Ceilings", slug: "false-ceilings", count: 5 },
  { id: "cat-10", name: "Furniture", slug: "furniture", count: 5 },
  { id: "cat-11", name: "Construction Projects", slug: "construction-projects", count: 6 },
  { id: "cat-12", name: "Renovation Projects", slug: "renovation-projects", count: 5 },
];

export const initialGallery = [
  {
    id: "gal-1",
    title: "Contemporary Cantilever Villa",
    category: "Modern Houses",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Multi-level contemporary residential architecture featuring floor-to-ceiling glass and geometric cantilever forms.",
    featured: true,
    isSample: true,
  },
  {
    id: "gal-2",
    title: "Grand Estate Villa with Reflecting Pool",
    category: "Luxury Villas",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "Opulent private villa with integrated water bodies, expansive patios, and teak wood louvers.",
    featured: true,
    isSample: true,
  },
  {
    id: "gal-3",
    title: "Minimalist Master Bedroom Suite",
    category: "Bedrooms",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "Warm neutral tones, upholstered fluted headboard, ambient cove illumination, and chevron wood flooring.",
    featured: true,
    isSample: true,
  },
  {
    id: "gal-4",
    title: "Double-Height Luxury Living Room",
    category: "Living Rooms",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "Soaring double-height ceilings with custom brass chandelier, bookmatched Italian marble wall, and plush seating.",
    featured: true,
    isSample: true,
  },
  {
    id: "gal-5",
    title: "Charcoal & Gold Island Kitchen",
    category: "Modular Kitchens",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    description: "Matte charcoal soft-touch cabinetry accented with brushed gold handles, waterfall quartz island, and hidden prep pantry.",
    featured: true,
    isSample: true,
  },
  {
    id: "gal-6",
    title: "Spa-Inspired Marble Bathroom",
    category: "Bathrooms",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    description: "Freestanding soaking tub, rain shower cubicle, concealed gold fittings, and backlit vanity mirrors.",
    featured: false,
    isSample: true,
  },
  {
    id: "gal-7",
    title: "Architectural Cove False Ceiling",
    category: "False Ceilings",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    description: "Multi-tiered gypsum ceiling with integrated magnetic light tracks and warm indirect illumination.",
    featured: false,
    isSample: true,
  },
  {
    id: "gal-8",
    title: "Custom Fluted TV Console & Bar Unit",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    description: "Handcrafted smoked oak console with bronze metal trims, integrated LED strip channels, and hidden acoustic cabling.",
    featured: false,
    isSample: true,
  },
  {
    id: "gal-9",
    title: "Modern Cubic Front Elevation",
    category: "House Elevation",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    description: "Sleek combination of warm timber slats, textured grey stone cladding, and framed glass balconies.",
    featured: true,
    isSample: true,
  },
  {
    id: "gal-10",
    title: "Photorealistic 3D Villa Exterior Concept",
    category: "3D Designs",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description: "3D BIM architectural rendering showing night illumination, swimming pool reflections, and cantilevered veranda lines.",
    featured: true,
    isSample: true,
  },
  {
    id: "gal-11",
    title: "Precision Civil Superstructure Framing",
    category: "Construction Projects",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1200&q=80",
    description: "Multi-story residential RCC column and slab construction following rigorous quality control checks.",
    featured: true,
    isSample: true,
  },
  {
    id: "gal-12",
    title: "Full Duplex Structural Renovation",
    category: "Renovation Projects",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    description: "Before-and-after structural overhaul: converted fragmented rooms into an open-plan luxury living space.",
    featured: true,
    isSample: true,
  }
];

export const initialProjects = [
  {
    id: "proj-1",
    title: "The Golden Horizon Villa",
    category: "Residential Construction & Turnkey",
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
    scope: ["Soil testing & deep footings", "RCC superstructure framing", "Bespoke Italian modular kitchen", "Smart home electrical & plumbing"],
    featured: true,
    isSample: true,
  },
  {
    id: "proj-2",
    title: "Emerald Heights Penthouse",
    category: "Interior Design & Renovation",
    status: "Completed",
    location: "Skyline Avenue, Financial District",
    area: "4,200 sq.ft",
    timeline: "6 Months",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "Comprehensive penthouse interior transformation, including custom acoustic wall paneling, Italian marble flooring, and panoramic terrace louver pergola.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
    ],
    scope: ["Wall removal & open layout", "Imported marble diamond polishing", "Acoustic false ceiling & magnetic tracks"],
    featured: true,
    isSample: true,
  },
  {
    id: "proj-3",
    title: "Verdant Courtyard Residence",
    category: "Architecture & Construction",
    status: "Ongoing",
    location: "Royal Palms Enclave",
    area: "8,100 sq.ft",
    timeline: "In Progress (Month 9 of 16)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "An eco-luxe estate engineered around a central biophilic rain-tree courtyard with thermal-mass brick masonry and rainwater harvesting.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    ],
    scope: ["Vastu-compliant architectural plans", "Civil structural casting", "Multi-layer terrace waterproofing"],
    featured: true,
    isSample: true,
  },
  {
    id: "proj-4",
    title: "The Glass House Sanctuary",
    category: "Modern Architecture & Elevation",
    status: "Ongoing",
    location: "Hillsview Crest",
    area: "5,400 sq.ft",
    timeline: "In Progress (Month 4 of 12)",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "High-elevation residence featuring double-glazed curtain walls, cantilevered upper terraces, and integrated infinity edge swimming pool.",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80"
    ],
    scope: ["Deep rock excavation", "Cantilever structural engineering", "Facade lighting design"],
    featured: false,
    isSample: true,
  }
];

export const initialWhyChooseUs = [
  {
    id: "why-1",
    title: "Turnkey Accountability",
    subtitle: "One Unified Contract",
    description: "No fragmented subcontractors or finger-pointing. We manage architecture, engineering, civil construction, and interior craftsmanship under a single point of responsibility.",
    icon: "Key"
  },
  {
    id: "why-2",
    title: "Precision Engineering",
    subtitle: "2D/3D BIM Planning",
    description: "Every millimeter is planned on CAD and 3D modeling before breaking ground, preventing costly on-site demolition, structural clashes, and unexpected redesigns.",
    icon: "Ruler"
  },
  {
    id: "why-3",
    title: "Transparent Locked BOQ",
    subtitle: "Zero Hidden Escalations",
    description: "Itemized Bill of Quantities with clear brand, grade, and thickness specifications. Our contracts lock your costs so you stay firmly in control of your budget.",
    icon: "FileCheck"
  },
  {
    id: "why-4",
    title: "Certified Materials Only",
    subtitle: "Rigorous Quality Audits",
    description: "We use only tested, certified brand-name materials — Fe-550D TMT steel, Ultratech/Ambuja cement, BWP marine plywood, and Saint-Gobain gypsum boards.",
    icon: "Award"
  },
  {
    id: "why-5",
    title: "Expert Site Supervision",
    subtitle: "Qualified Civil Engineers",
    description: "Dedicated full-time civil supervisors and project managers monitor every concrete batch, rebar spacing, and waterproofing layer on-site every single day.",
    icon: "UserCheck"
  },
  {
    id: "why-6",
    title: "Milestone Timelines",
    subtitle: "Stage-Wise Delivery",
    description: "Work progresses according to documented schedule milestones with periodic status reports and stage-wise inspections before billing milestones.",
    icon: "Clock"
  }
];

export const initialProcessSteps = [
  {
    step: "01",
    title: "Consultation & Briefing",
    subtitle: "Understanding Your Vision",
    description: "We discuss your plot dimensions, family lifestyle needs, aesthetic preferences, and budget parameters to formulate the project scope."
  },
  {
    step: "02",
    title: "Architectural Planning & 3D",
    subtitle: "Visualizing the Blueprint",
    description: "Our studio drafts Vastu-compliant 2D layouts and photorealistic 3D walkthroughs, allowing you to experience your residence before physical work starts."
  },
  {
    step: "03",
    title: "Locked BOQ & Estimation",
    subtitle: "Complete Financial Clarity",
    description: "We deliver an itemized Bill of Quantities specifying material brands, rebar schedules, and finishes with clear milestone-linked payment schedules."
  },
  {
    step: "04",
    title: "Precision Construction",
    subtitle: "Engineering on Site",
    description: "Our certified civil engineers, masons, and trade specialists execute structural casting, plumbing, electrical, and bespoke interior installations."
  },
  {
    step: "05",
    title: "Quality Audit & Handover",
    subtitle: "Lock-and-Key Delivery",
    description: "Comprehensive 150-point quality audit, deep polishing, fixture testing, and joyful handover of your dream home with as-built drawings."
  }
];

export const initialReviews = [
  {
    id: "rev-1",
    name: "Vikram & Ananya Malhotra",
    role: "Homeowners",
    projectType: "Complete Turnkey Villa Construction",
    rating: 5,
    date: "Sample Client Format",
    comment: "From the initial 3D walkthrough to the final key handover, MNL GROUP demonstrated unmatched professionalism. Their transparent BOQ meant zero surprise costs, and the structural quality is truly world-class.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    isDemoPlaceholder: true,
    published: true,
  },
  {
    id: "rev-2",
    name: "Rajeshwar Rao",
    role: "Property Owner",
    projectType: "Architectural Design & Modern Elevation",
    rating: 5,
    date: "Sample Client Format",
    comment: "The architectural planning team optimized our corner plot beautifully. The natural light circulation and striking front elevation louvers have made our house the talk of the entire neighborhood.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    isDemoPlaceholder: true,
    published: true,
  },
  {
    id: "rev-3",
    name: "Dr. Sunita & Arvind Sharma",
    role: "Homeowners",
    projectType: "Full Duplex Renovation & Modular Kitchen",
    rating: 5,
    date: "Sample Client Format",
    comment: "Renovating our 20-year-old house felt daunting, but MNL GROUP made it seamless. They removed unnecessary walls, upgraded plumbing, and installed a stunning acrylic modular kitchen right on schedule.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    isDemoPlaceholder: true,
    published: true,
  }
];

export const initialTeam = [
  {
    id: "team-1",
    name: "Er. Mukund N. Lal",
    role: "Founder & Chief Structural Engineer",
    experience: "Leading Architectural & Civil Projects",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio: "Passionate about precision engineering, seismic-resilient RCC framing, and transparent builder-client relationships."
  },
  {
    id: "team-2",
    name: "Ar. Priya Nair",
    role: "Head of Architectural & 3D Design",
    experience: "Luxury Residential Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Specializing in contemporary spatial flow, biophilic integration, and photorealistic virtual walkthroughs."
  },
  {
    id: "team-3",
    name: "Karan Singhania",
    role: "Director of Turnkey Execution & Interiors",
    experience: "Turnkey Project Execution",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio: "Overseeing procurement of certified materials, master joinery, and on-time milestone handovers."
  }
];

// FAQS FOR HOMEPAGE & CONSULTATION
export const initialFaqs = [
  {
    id: "faq-1",
    question: "Can I hire MNL GROUP for only one service like Interior Design or Waterproofing?",
    answer: "Yes, absolutely! While we specialize in complete plot-to-key turnkey solutions, our services are modular. You can hire us for a single discipline (such as 3D Architectural Design, Modular Kitchen, Painting, or Waterproofing), any combination of services, or a complete ground-up turnkey house construction."
  },
  {
    id: "faq-2",
    question: "What makes MNL GROUP different from conventional contractors?",
    answer: "Traditional contractors often operate without engineering drawings, subcontract work carelessly, and escalate costs midway. MNL GROUP provides end-to-end accountability under one roof, backed by qualified civil engineers, locked itemized BOQ estimates, 3D visualization before construction, and milestone-linked payment schedules."
  },
  {
    id: "faq-3",
    question: "How does the 'Build Your Home With MNL GROUP' multi-service selector work?",
    answer: "Our interactive tool allows you to select the exact disciplines your project needs—whether it's Construction + Architecture, Interior Design + Modular Kitchen, or all 13 services. Once selected, you can enter your project location, submit an enquiry, or generate a formatted WhatsApp message instantly."
  },
  {
    id: "faq-4",
    question: "How do you ensure transparency in construction costs?",
    answer: "We prepare a detailed Bill of Quantities (BOQ) itemizing every raw material brand, cement grade (OPC/PPC), steel grade (Fe-550D), wood type, and fixture model. This locks the pricing before execution begins, protecting you against unexpected price escalations."
  },
  {
    id: "faq-5",
    question: "Can you help with 3D designs before I commit to construction?",
    answer: "Yes. Our architectural wing creates complete 2D floor plans, 3D elevation renderings, and virtual interior walkthroughs so your entire family can visualize the finished home and make confident decisions prior to breaking ground."
  },
  {
    id: "faq-6",
    question: "Do you undertake partial and full home renovations?",
    answer: "Yes. We handle structural remodeling, open-concept wall removals, bathroom and kitchen modernizations, flooring replacements, and complete exterior facade overhauls with minimal disruption to your routine."
  },
  {
    id: "faq-7",
    question: "How do I get an estimate or book a consultation?",
    answer: "You can click 'Get Free Consultation', use our 'Build Your Home' selector, call us directly at +91 98765 43210, or click our WhatsApp button to chat directly with our project advisory team."
  }
];

export const initialSeo = {
  metaTitle: "MNL GROUP | Complete Home Construction, Architecture, Interiors & Renovation",
  metaDescription: "Premier turnkey home construction, architectural 2D/3D design, luxury interior design, modular kitchens, and complete home renovation solutions.",
  keywords: "home construction, architecture, 2d floor plans, 3d elevation design, interior design, modular kitchen, house painting, waterproofing, turnkey builders",
  ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
};
