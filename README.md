# Energeia - Energy Drink Tracking App Landing Page

A modern, responsive landing page for the Energeia iOS app, designed to help users track their energy drink consumption (caffeine and sugar). Built with vanilla HTML, CSS, and JavaScript.

## 🚀 Features

### Design & UX
- **Minimalist Design**: Clean, modern interface with customizable accent colors
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Dark/Light Theme**: Automatic theme switching with user preference persistence
- **Smooth Animations**: Fade-in effects, hover animations, and smooth scrolling
- **Interactive Elements**: Ripple effects, progress bars, and notification system
- **Accent Color System**: 6 customizable accent colors (Blue, Green, Orange, Red, Purple, Pink)

### Sections
- **Hero Section**: App name, tagline, description, and interactive iPhone mockup
- **Features Section**: 5 key features with icons and descriptions
- **Screenshots Gallery**: Dynamic screenshots that change based on selected accent color
- **Call-to-Action**: Download buttons with interactive notifications
- **Footer**: Links, social media, and copyright information

### Technical Features
- **Theme Management**: Automatic dark/light mode switching with localStorage persistence
- **Smooth Scrolling**: Navigation links with smooth scroll behavior and header offset
- **Intersection Observer**: Performance-optimized scroll-triggered animations
- **Accent Color Picker**: Modal-based color selection with real-time preview
- **Performance Optimized**: Efficient event handling, lazy loading support, and optimized scroll events
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation, and focus management

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with proper structure and accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, CSS Variables, and responsive design
- **Vanilla JavaScript**: ES6+ classes, modern browser APIs, and modular architecture
- **Montserrat Font**: Clean, readable typography from Google Fonts
- **SVG Icons**: Scalable vector icons for consistent quality across all devices

## 📁 Project Structure

```
energy_drink_website/
├── index.html              # Main landing page
├── help-center.html        # Help center page
├── privacy-policy.html     # Privacy policy page
├── terms-of-service.html   # Terms of service page
├── styles.css              # CSS styles and responsive design
├── script.js               # JavaScript functionality and interactions
├── assets/                 # Static assets (images, icons)
│   ├── app_icon.png        # App icon
│   └── portrait/           # App screenshots by accent color
│       ├── blue/           # Blue accent screenshots
│       ├── green/          # Green accent screenshots
│       ├── orange/         # Orange accent screenshots
│       ├── red/            # Red accent screenshots
│       ├── purple/         # Purple accent screenshots
│       └── pink/           # Pink accent screenshots
└── README.md               # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Colors**: Dynamic based on selected accent color
- **Background**: `#ffffff` (Light) / `#0f172a` (Dark)
- **Text**: `#0f172a` (Light) / `#f8fafc` (Dark)
- **Accent Colors**:
  - Blue: `#2979FF`
  - Green: `#32D74B`
  - Orange: `#FFA726`
  - Red: `#FF5252`
  - Purple: `#A259FF`
  - Pink: `#FF5CA7`

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Weights**: 400, 500, 700
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
# or
php -S localhost:8000
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎯 Key Features Explained

### Theme Management
The app automatically detects and applies the user's preferred theme (light/dark), with preference saved in localStorage. The theme persists across browser sessions.

### Accent Color System
Users can choose from 6 different accent colors through a modal interface. The selected color:
- Updates the entire UI color scheme
- Changes app screenshots to match the selected theme
- Persists in localStorage
- Provides real-time visual feedback

### Smooth Scrolling
Navigation links use smooth scrolling with proper offset calculation to account for the fixed header, ensuring content isn't hidden behind the navigation.

### Animation System
Uses Intersection Observer API for performance-optimized scroll-triggered animations. Elements fade in as they enter the viewport.

### Interactive Elements
- **Hover Effects**: Feature cards lift and scale on hover
- **Ripple Effects**: Button clicks create material design-style ripple animations
- **Progress Bars**: Animated progress bars for caffeine and sugar tracking
- **Notification System**: Toast notifications for button interactions
- **Modal Interactions**: Keyboard navigation (Escape key) and click-outside-to-close

## 🔧 Customization

### Changing Colors
Update the `ACCENT_COLORS` object in `script.js` to modify available accent colors:

```javascript
const ACCENT_COLORS = {
    yourColor: {
        primary: '#YOUR_COLOR',
        gradient: 'linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_SECONDARY 100%)'
    }
};
```

### Adding Content
- **Features**: Add new feature cards in the features section
- **Screenshots**: Add new screenshot images to the appropriate accent color folders
- **Pages**: Create additional HTML pages following the existing structure

### Modifying Animations
Adjust animation timing and effects in the respective classes in `script.js`:
- `AnimationObserver` for scroll-triggered animations
- `ButtonInteractions` for notification system
- `ProgressBarAnimation` for progress bar effects

## 🌟 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Fallbacks**: Graceful degradation for older browsers
- **Features**: Uses modern APIs with appropriate fallbacks

## 🔒 Security Features

- **No XSS Vulnerabilities**: Safe DOM manipulation practices
- **Secure External Resources**: All external resources use HTTPS
- **No Sensitive Data**: No API keys or sensitive information in the codebase
- **Input Validation**: Proper handling of user inputs and localStorage data

## 📄 License

This project is created for the Energeia app landing page. Feel free to modify and use for your own projects.

## 🤝 Contributing

This is a standalone project, but suggestions and improvements are welcome!

## 📞 Support

For questions or support, please refer to the project documentation or create an issue.

---

**Built with ❤️ for the Energeia app** 