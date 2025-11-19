# Kaifei Landscaping Website

A modern, professional landscaping business website built with Next.js, featuring interactive galleries, project maps, and contact forms.

## 🌿 About

**Kaifei Landscape Inc** is a professional landscaping company serving Markham, Ontario and the Greater Toronto Area. This website showcases their portfolio, services, and provides an easy way for customers to get in touch.

**Tagline:** *Customized design within budget*

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with custom green/earth tone color palette
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🖼️ **Interactive Gallery** - 141+ project photos organized in 8 categories with lightbox viewer
- 🗺️ **Project Map** - Interactive Mapbox integration showing 10 completed projects across Toronto/GTA
- 📝 **Contact Forms** - Multiple contact forms with validation and success feedback
- 🎯 **SEO Optimized** - Proper metadata and semantic HTML structure
- ⚡ **Performance** - Built with Next.js 16 for optimal loading speeds
- 🎭 **Smooth Animations** - Elegant transitions and hover effects

## 🛠️ Technology Stack

- **Framework:** [Next.js 16.0.1](https://nextjs.org/) (App Router)
- **React:** 19.2.0
- **TypeScript:** 5.x
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts:** Lato (Google Fonts) + Space Grotesk
- **Maps:** [Mapbox GL JS v3.1.0](https://www.mapbox.com/)
- **Linting:** ESLint with Next.js config

## 📂 Project Structure

```
kaifeilandscaping/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── contact/         # Contact page components
│   │       ├── ContactForm.tsx
│   │       ├── ContactHero.tsx
│   │       ├── ContactInfo.tsx
│   │       └── ContactMap.tsx
│   ├── constants/           # App constants
│   │   └── text.ts
│   ├── data/               # Data files
│   │   ├── galleryData.ts  # 141 gallery photos
│   │   ├── menuData.ts     # Navigation menu
│   │   └── projectsData.ts # 10 project locations
│   ├── contact/            # Contact page
│   ├── gallery/            # Gallery page
│   ├── projects/           # Projects map page
│   ├── free-quote/         # Quote request page
│   ├── globals.css         # Global styles & design system
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/
│   ├── gallery/            # 141 project images
│   │   ├── Backyard/       # 31 photos
│   │   ├── Deck/           # 22 photos
│   │   ├── Driveway/       # 29 photos
│   │   ├── Fence/          # 4 photos
│   │   ├── Front/          # 18 photos
│   │   ├── Natural Stone/  # 6 photos
│   │   ├── Sidewalk/       # 14 photos
│   │   └── Steps/          # 17 photos
│   ├── home/
│   └── logo.png
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kaifeilandscaping
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with about, hero, services, and gallery preview |
| Gallery | `/gallery` | Interactive photo gallery with 8 categories and 141+ images |
| Projects | `/projects` | Interactive map showing 10 completed projects with locations |
| Contact | `/contact` | Full contact page with form, info, and map |
| Free Quote | `/free-quote` | Quote request form for potential customers |

## 🎨 Design System

### Color Palette

- **Primary (Dark Green):** `#2d4a3e`
- **Primary Dark:** `#1a2f26`
- **Primary Light:** `#7a9085`
- **Primary Muted:** `#b8c9c1`
- **Accent (Brown/Tan):** `#8B6F47`
- **Accent Dark:** `#784C3B`

### Typography

- **Body Font:** Lato (300, 400 weights)
- **Display Font:** Space Grotesk

## 📞 Company Information

- **Company:** Kaifei Landscape Inc
- **Phone:** (647) 237-8666
- **Email:** kaifeilandscape@gmail.com
- **Location:** Markham, Ontario, L3R 7A9
- **Hours:** 
  - Monday - Friday: 8:00 AM - 6:00 PM
  - Saturday: 9:00 AM - 4:00 PM
  - Sunday: Closed

## 🌟 Services Offered

1. Landscape Design
2. Lawn Maintenance
3. Hardscaping
4. Garden Installation
5. Irrigation Systems
6. Seasonal Cleanup

## 📸 Gallery Categories

- **Backyard** - 31 photos
- **Deck** - 22 photos
- **Driveway** - 29 photos
- **Fence** - 4 photos
- **Front** - 18 photos
- **Natural Stone** - 6 photos
- **Sidewalk** - 14 photos
- **Steps** - 17 photos

## 🗺️ Service Area

Proudly serving Markham and surrounding areas in the Greater Toronto Area (GTA), including:
- Toronto
- North York
- Scarborough
- Etobicoke
- And more

## 📝 License

All rights reserved © 2024 Kaifei Landscape Inc

## 🤝 Contributing

This is a private commercial project. For inquiries, please contact the company directly.

---

Built with ❤️ using Next.js and Tailwind CSS
