# Obsidian Arc

A modern React application built with Vite, featuring a dark cosmic theme and lightning-fast development experience.

## 🚀 Features

- **React 18** - Latest React with modern hooks and features
- **Vite** - Lightning fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework with custom cosmic theme
- **React Router** - Client-side routing for seamless navigation
- **Responsive Design** - Mobile-first approach with responsive layouts
- **Dark Cosmic Theme** - Beautiful dark theme with cosmic black, obsidian gray, and radiant blue accents

## 🎨 Theme Colors

- **Cosmic Black**: `#000000` - Primary background
- **Obsidian Gray**: `#1A1A1A` - Secondary elements and accents
- **Radiant Blue**: `#00BFFF` - Highlights and interactive elements

## 🛠️ Development

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd obsidian-arc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## 📁 Project Structure

```
obsidian-arc/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🌟 Getting Started

The application starts with a beautiful welcome page showcasing the cosmic theme. You can:

1. Explore the responsive design on different screen sizes
2. See the cosmic color scheme in action
3. Experience the smooth animations and transitions
4. Build upon the existing component structure

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/components/`
2. Add the route in `src/App.jsx`
3. Use the existing cosmic theme classes for consistency

### Theme Customization

The cosmic theme is defined in:
- `tailwind.config.js` - Tailwind custom colors
- `src/index.css` - Global CSS variables and base styles
- `src/App.css` - Component-specific styles

## 📱 Mobile Responsive

The application is built mobile-first with responsive breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using React, Vite, and Tailwind CSS