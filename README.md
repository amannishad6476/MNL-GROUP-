# MNL GROUP - Building Dreams. Creating Futures.

Modern architecture and construction company web platform, structured as two completely decoupled frontend applications within a unified repository.

---

## 🏛️ Project Architecture

```
MNL GROUP/
├── customer-website/             # Public Customer-Facing Web Application
│   ├── public/                   # Public static assets
│   ├── src/
│   │   ├── components/           # Navbar, Footer, WhatsAppFloat, Sections
│   │   ├── context/              # SiteContext (dynamic public data)
│   │   ├── data/                 # initialData.js, apiService.js
│   │   ├── pages/                # Home, About, Services, Gallery, Projects, Contact
│   │   ├── App.jsx               # Customer routing (Strictly NO admin routes)
│   │   ├── main.jsx              # Customer entry point
│   │   └── index.css             # Tailwind + Brand theme
│   ├── index.html
│   ├── package.json              # Independent dependencies & scripts
│   ├── tailwind.config.js
│   └── vite.config.js            # Runs on Port 3000
│
├── admin-dashboard/              # Private Administrative Management Portal
│   ├── public/                   # Admin static assets
│   ├── src/
│   │   ├── components/           # AdminLayout, ConfirmDialog, ImageUploadField
│   │   ├── context/              # AdminAuthContext (secure session), AdminDataContext
│   │   ├── data/                 # initialData.js, storage.js, apiService.js
│   │   ├── pages/                # 15 Isolated Management Sections
│   │   │   ├── AdminLoginPage.jsx
│   │   │   ├── DashboardOverview.jsx
│   │   │   ├── ManageServices.jsx
│   │   │   ├── ManageGallery.jsx
│   │   │   ├── ManageProjects.jsx
│   │   │   ├── ManageCategories.jsx
│   │   │   ├── CustomerEnquiries.jsx
│   │   │   ├── ManageReviews.jsx
│   │   │   ├── ManageTeam.jsx
│   │   │   ├── WebsiteContent.jsx
│   │   │   ├── HomepageBanners.jsx
│   │   │   ├── ContactInfo.jsx
│   │   │   ├── SocialMediaLinks.jsx
│   │   │   ├── SeoSettings.jsx
│   │   │   └── AdminProfile.jsx
│   │   ├── App.jsx               # Protected Admin routing
│   │   ├── main.jsx              # Admin entry point
│   │   └── index.css             # Dark theme + Gold accents
│   ├── index.html
│   ├── package.json              # Independent dependencies & scripts
│   ├── tailwind.config.js
│   └── vite.config.js            # Runs on Port 3001
│
├── .gitignore                    # Excludes node_modules, dist, .env from both apps
├── package.json                  # Root monorepo workspace scripts
└── README.md                     # Platform documentation
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### Method A: Run From Sub-Directories

**1. Customer Website (Public Portal):**
```bash
cd customer-website
npm install
npm run dev
# Opens at: http://localhost:3000
```

**2. Admin Dashboard (Management Console):**
```bash
cd admin-dashboard
npm install
npm run dev
# Opens at: http://localhost:3001
```

### Method B: Run From Root Workspace

```bash
# Start Customer Website
npm run dev:customer

# Start Admin Dashboard (in another terminal)
npm run dev:admin
```

---

## 🛠️ Production Build & Verification

Each application builds completely independently into its own isolated `dist/` directory:

```bash
# Build Customer Website
cd customer-website
npm run build

# Build Admin Dashboard
cd admin-dashboard
npm run build
```

Or from the workspace root:
```bash
# Build both simultaneously
npm run build
```

---

## 🔐 Administrative Access (Demo Session)

- **Login URL**: `http://localhost:3001/login`
- **Email**: `admin@mnlgroup.com`
- **Password**: `admin123`

*Note: In accordance with security best practices, credentials are validated strictly in-memory during active sessions and are never stored in `localStorage`.*

---

## ☁️ Deployment Guide

Both applications are configured for deployment on **Vercel** as two separate projects:

### 1. Customer Website Deployment (Vercel Project 1)
- **Git Repository**: `https://github.com/amannishad6476/MNL-GROUP-.git`
- **Root Directory**: `customer-website`
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Environment Variables**:
  - `VITE_API_URL`: Backend URL (optional until backend is deployed)

### 2. Admin Dashboard Deployment (Vercel Project 2)
- **Git Repository**: `https://github.com/amannishad6476/MNL-GROUP-.git`
- **Root Directory**: `admin-dashboard`
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Environment Variables**:
  - `VITE_API_URL`: Backend URL (optional until backend is deployed)

### 3. Future Backend & Database Integration
Both applications already feature dedicated `apiService.js` adapters (`src/data/apiService.js`):
- **Backend API**: Node.js + Express (Deployable on Render)
- **Database**: Neon PostgreSQL
- **Media Storage**: Cloudinary (for direct image/video CDN uploads)

---

## 🎨 Brand Identity & Style Tokens

- **Company**: MNL GROUP
- **Tagline**: Building Dreams. Creating Futures.
- **Palette**:
  - Charcoal Black: `#0a0b0d` / `#121316`
  - Elegant Gold: `#c5a059` / `#d4af37`
  - Warm White / Sand: `#faf8f5` / `#f0ece1`
- **Typography**:
  - Headings: Cinzel (Luxury Serif)
  - Body: Plus Jakarta Sans (Clean Modern Sans)
