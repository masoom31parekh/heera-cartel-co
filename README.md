# Heera Cartel Co - Frontend

Premium loose diamonds wholesale platform built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Premium design with animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔍 Advanced diamond filtering
- 📄 Comprehensive educational content
- 🛒 Shopping cart ready
- 📊 B2B wholesale program
- 🔐 Secure contact forms
- ⚡ Fast performance (Vite)

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/masoom31parekh/heera-cartel-co.git
cd heera-cartel-co

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your API URL
# VITE_API_URL=http://localhost:8000
```

### Development

```bash
npm run dev
```

Application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── DiamondPreloader.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── KnowYourDiamonds.jsx
│   ├── KnowYourDiamonds/  # Subpages
│   ├── ForRetailers.jsx
│   ├── OurStory.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Shipping.jsx
│   ├── VerifyCertification.jsx
│   ├── Terms.jsx
│   └── Privacy.jsx
├── App.jsx             # Main app component
├── main.jsx            # Entry point
├── index.css           # Global styles
└── index.html          # HTML template
```

## Environment Variables

```env
VITE_API_URL=http://localhost:8000
```

## Pages

### Public Pages
- **Home** - Hero section, collections, trust badges
- **Shop** - Diamond browser with filters
- **Know Your Diamonds** - Educational hub
  - Buying Guide
  - The Four Cs
  - Cut Grades
  - Natural vs Lab Grown
  - Certifications
  - Diamond Shapes
  - Price Guide
- **For Retailers** - B2B program, wholesale pricing
- **Our Story** - Company mission and founder info
- **Blog** - Articles and insights
- **Contact** - Inquiry form and contact info
- **FAQ** - Common questions
- **Shipping** - Delivery information
- **Certificate Verification** - Verify diamond certificates
- **Terms of Service** - Legal terms
- **Privacy Policy** - Privacy information

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set `VITE_API_URL` environment variable
4. Deploy

### Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set environment variables
6. Deploy

## Performance

- Code splitting with Vite
- Lazy loading for pages
- Optimized images
- Framer Motion animations
- <100KB main bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions welcome. Please follow React best practices and use functional components.

## License

Private - Heera Cartel Co
