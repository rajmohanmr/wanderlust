# 🌍 Wanderlust Travel - Modern Travel Booking Website

A beautifully designed, fully responsive travel booking website built with React, TypeScript, and Tailwind CSS. Features stunning animations, parallax effects, and a complete booking system.

![Travel Website](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80)

## ✨ Features

### 🏠 Homepage
- **Dynamic Hero Section** - Parallax scrolling effect with animated background elements
- **Smart Search Bar** - Search destinations with date picker and guest selector
- **Popular Destinations** - Interactive grid with hover effects and instant booking
- **Customer Testimonials** - Social proof with ratings and reviews
- **Blog Preview** - Latest travel articles and guides
- **Newsletter Signup** - Email subscription with toast notifications

### 🗺️ Destinations Page
- **Advanced Filtering** - Filter by continent, price range, and season
- **Search Functionality** - Real-time search across all destinations
- **Responsive Grid** - Beautiful destination cards with ratings and pricing
- **Booking Integration** - Direct booking from any destination card

### 📖 About Page
- **Company Story** - Engaging narrative with statistics
- **Team Section** - Meet the team with social links
- **Value Proposition** - Why choose us section with icons

### 📞 Contact Page
- **Contact Form** - Name, email, subject, and message fields
- **Office Locations** - Multiple office cards with addresses
- **Social Media Links** - Connect on all platforms
- **FAQ Section** - Common questions answered

### 🎫 Booking System
- **Modal Booking** - Elegant popup with destination details
- **Date Selection** - Interactive calendar for check-in/check-out
- **Guest Management** - Increment/decrement traveler count
- **Price Calculator** - Real-time total with breakdown
- **Confirmation Toast** - Success feedback on booking

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling |
| **Vite** | Build Tool |
| **React Router** | Navigation |
| **Lucide Icons** | Icon Library |
| **Shadcn/ui** | UI Components |
| **date-fns** | Date Formatting |

## 🎨 Design System

### Color Palette
- **Ocean** - Primary blue tones (`hsl(200, 80%, 50%)`)
- **Coral** - Accent warm tones (`hsl(16, 100%, 66%)`)
- **Sand** - Neutral backgrounds (`hsl(39, 77%, 83%)`)

### Typography
- **Display Font** - Playfair Display (headings)
- **Body Font** - DM Sans (content)

### Animations
- Fade up/in effects
- Scale transitions
- Parallax scrolling
- Hover lift effects

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images)
├── components/
│   ├── home/           # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── DestinationsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BlogSection.tsx
│   │   ├── NewsletterSection.tsx
│   │   └── BookingModal.tsx
│   ├── layout/         # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
│   ├── useParallax.ts
│   └── use-toast.ts
├── pages/              # Page components
│   ├── Index.tsx
│   ├── Destinations.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── lib/                # Utilities
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles & design tokens
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd wanderlust-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Responsive Design

The website is fully responsive across all devices:

| Breakpoint | Description |
|------------|-------------|
| `< 640px` | Mobile phones |
| `640px - 768px` | Tablets (portrait) |
| `768px - 1024px` | Tablets (landscape) |
| `> 1024px` | Desktops |

## 🔧 Configuration

### Tailwind Config
Custom theme settings are in `tailwind.config.ts`:
- Custom colors (ocean, coral, sand)
- Font families
- Animations and keyframes
- Shadows

### CSS Variables
Design tokens are defined in `src/index.css`:
- Color palette
- Gradients
- Shadow presets
- Animation timings

## 📄 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- UI Components from [shadcn/ui](https://ui.shadcn.com)

---

Built with ❤️ using [Lovable](https://lovable.dev)
