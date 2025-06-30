# Energeia - Energy Drink Tracking App Landing Page

A modern, responsive landing page for the Energeia iOS app, designed to help users track their energy drink consumption (caffeine and sugar). Built with vanilla HTML, CSS, and JavaScript.

## 🚀 Features

### Design & UX
- **Minimalist Design**: Clean, modern interface inspired by the KOSM app website
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Dark/Light Theme**: Automatic theme switching with user preference persistence
- **Smooth Animations**: Fade-in effects, hover animations, and smooth scrolling
- **Gradient Backgrounds**: Beautiful gradient effects in hero and CTA sections

### Sections
- **Hero Section**: App name, tagline, description, and interactive iPhone mockup
- **Features Section**: 5 key features with icons and descriptions
- **Screenshots Gallery**: Placeholder images for app screenshots
- **Call-to-Action**: Download buttons with interactive notifications
- **Footer**: Links, social media, and copyright information

### Technical Features
- **Theme Management**: Automatic dark/light mode switching
- **Smooth Scrolling**: Navigation links with smooth scroll behavior
- **Intersection Observer**: Scroll-triggered animations
- **Performance Optimized**: Efficient event handling and lazy loading support
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript**: ES6+ classes and modern browser APIs
- **Inter Font**: Clean, readable typography from Google Fonts
- **SVG Icons**: Scalable vector icons for consistent quality

## 📁 Project Structure

```
energy_drink_website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3b82f6` (Light) / `#60a5fa` (Dark)
- **Secondary Blue**: `#1e40af` (Light) / `#3b82f6` (Dark)
- **Background**: `#ffffff` (Light) / `#0f172a` (Dark)
- **Text**: `#0f172a` (Light) / `#f8fafc` (Dark)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive Sizing**: Using `clamp()` for fluid typography

### Spacing
- **Container Max Width**: 1200px
- **Section Padding**: 6rem (desktop), 4rem (mobile)
- **Grid Gaps**: 2rem (desktop), 1.5rem (mobile)

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. **No build process required** - it's ready to use!

### Local Development
```bash
# If you have a local server (optional)
python -m http.server 8000
# or
npx serve .
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎯 Key Features Explained

### Theme Switching
The app automatically detects and applies the user's preferred theme, with a toggle button in the navigation. Theme preference is saved in localStorage.

### Smooth Scrolling
Navigation links use smooth scrolling with proper offset calculation to account for the fixed header.

### Animation System
Uses Intersection Observer API for performance-optimized scroll-triggered animations.

### Interactive Elements
- Hover effects on feature cards
- Ripple effects on button clicks
- Progress bar animations
- Notification system for button interactions

## 🔧 Customization

### Changing Colors
Update the CSS variables in `:root` and `[data-theme="dark"]` selectors in `styles.css`.

### Adding Content
- **Features**: Add new feature cards in the features section
- **Screenshots**: Replace placeholder content with actual app screenshots
- **Links**: Update navigation and footer links

### Modifying Animations
Adjust animation timing and effects in the `AnimationObserver` class in `script.js`.

## 🌟 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

## 📄 License

This project is created for the Energeia app landing page. Feel free to modify and use for your own projects.

## 🤝 Contributing

This is a standalone project, but suggestions and improvements are welcome!

## 📞 Support

For questions or support, please refer to the project documentation or create an issue.

---

**Built with ❤️ for the Energeia app** 