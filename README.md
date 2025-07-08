# Dead Tech Solutions Portfolio

A modern React portfolio website showcasing Dead Tech Solutions projects and expertise.

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern responsive styling
- **GitHub Pages** - Deployment platform

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js (v18 or later) installed:
- Download from: https://nodejs.org/
- Verify installation: `node --version` and `npm --version`

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Application styles
├── main.tsx         # Application entry point
└── index.css        # Global styles

public/              # Static assets
dist/               # Production build output
```

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Modern UI** - Clean, professional design
- **Project Showcase** - Highlight your best work
- **Contact Integration** - Easy ways to get in touch
- **Fast Performance** - Optimized for speed
- **SEO Ready** - Proper meta tags and structure

## 🚀 Deployment to GitHub Pages

1. **Set up repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/deadtechsolutions.git
   git push -u origin main
   ```

2. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Custom Domain** (Optional):
   - Add `CNAME` file with your domain
   - Configure DNS records:
     - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     - CNAME: `yourusername.github.io`

## 🔧 Customization

### Adding Projects

Edit `src/App.tsx` and add new project cards in the projects section:

```tsx
<div className="project-card">
  <div className="project-image">
    <div className="placeholder-image">🎯</div>
  </div>
  <div className="project-content">
    <h3>Your Project Name</h3>
    <p>Project description...</p>
    <div className="project-tech">
      <span className="tech-tag">Technology</span>
    </div>
    <div className="project-links">
      <a href="#" className="btn-small">View Code</a>
    </div>
  </div>
</div>
```

### Styling

- **Global styles**: `src/index.css`
- **Component styles**: `src/App.css`
- **Color scheme**: Update CSS custom properties in `:root`

### Contact Information

Update the contact section in `src/App.tsx` with your actual contact details.

## 🐛 Troubleshooting

### Node.js PATH Issues

If you get "node is not recognized" errors:

1. **Restart your terminal** after Node.js installation
2. **Add to PATH manually**:
   - Windows: Add `C:\Program Files\nodejs` to your PATH environment variable
   - Or use the temporary fix: `$env:PATH += ";C:\Program Files\nodejs"`

### Build Issues

- Clear node_modules: `rm -rf node_modules package-lock.json && npm install`
- Update dependencies: `npm update`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Dead Tech Solutions** - Bringing old technology back to life through innovative engineering.
