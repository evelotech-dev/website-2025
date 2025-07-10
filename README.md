# eveloTech Website

A professional website for eveloTech, specializing in Shopify backend solutions and QuickBooks integration services.

## Features

- **Shopify Backend Solutions**: Custom app configuration, platform integration, and workflow automation
- **QuickBooks Integration**: Custom integrations for accurate, up-to-date accounting
- **Data Structure & Insights**: Data organization and normalization for reliable reporting
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Performance Optimized**: Production-ready Tailwind CSS build

## Development Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd evelotech-website_2025-07-02
```

2. Install dependencies:
```bash
npm install
```

### Development Commands

- **Development mode** (with file watching):
```bash
npm run dev
```

- **Production build**:
```bash
npm run build:prod
```

- **Development build** (with file watching):
```bash
npm run build
```

## Project Structure

```
evelotech-website_2025-07-02/
├── assets/
│   ├── images/          # Website images
│   ├── js/             # JavaScript files
│   └── styles/
│       ├── input.css   # Tailwind CSS input file
│       └── styles.css  # Compiled CSS (generated)
├── index.html          # Homepage
├── services.html       # Services page
├── about-us.html       # About page
├── contact.html        # Contact page
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Project dependencies
└── README.md          # This file
```

## Tailwind CSS Setup

This project uses Tailwind CSS with a production build setup to avoid the CDN warning in production environments.

### Key Files:

- `assets/styles/input.css`: Contains Tailwind directives and custom styles
- `tailwind.config.js`: Tailwind configuration with custom theme settings
- `postcss.config.js`: PostCSS configuration for processing
- `assets/styles/styles.css`: Generated CSS file (do not edit directly)

### Custom Theme:

The project includes custom theme configurations:
- Custom green color palette (`#4e8f30`, `#3a6b24`)
- Custom font families (Orbitron, Inter)
- Custom max-width settings
- Responsive design optimizations

## Deployment

1. Build the production CSS:
```bash
npm run build:prod
```

2. Upload all files to your web server

3. Ensure the compiled `assets/styles/styles.css` file is accessible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS with Tailwind's purge functionality
- Minified production builds
- Optimized images and assets
- Fast loading times

## Support

For technical support or questions about the website setup, please contact the development team.

---

© 2025 eveloTech. All rights reserved. 