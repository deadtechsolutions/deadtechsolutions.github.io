# .github/copilot-instructions.md

You are working on a React portfolio website for Dead Tech Solutions. This is a professional portfolio showcasing electronics projects and programming expertise.

## Project Overview

- **Tech Stack**: React 18, TypeScript, Vite, CSS3
- **Purpose**: Portfolio website for Dead Tech Solutions
- **Deployment**: GitHub Pages with custom domain (deadtechsolutions.com)
- **Design**: Modern, responsive, dark theme with tech-focused aesthetic

## Key Components

### 1. Navigation (`src/App.tsx`)
- Fixed header with smooth scrolling navigation
- Active section highlighting
- Mobile-responsive hamburger menu

### 2. Hero Section
- Compelling introduction to Dead Tech Solutions
- Call-to-action buttons
- Gradient text effects

### 3. Projects Section
- Grid layout for project cards
- Featured project: IR Remote Decoder
- Technology tags for each project
- Links to code and demos

### 4. About Section
- Company/personal background
- Skills grid with hover effects
- Professional story

### 5. Contact Section
- Contact methods
- Professional presentation

## Design Principles

- **Dark theme** with accent color `#646cff`
- **Responsive design** for all screen sizes
- **Modern animations** and hover effects
- **Professional typography** with clear hierarchy
- **Tech-focused** color scheme and imagery

## Development Guidelines

1. **TypeScript**: Use proper types for all components and props
2. **Responsive**: Test on mobile, tablet, and desktop
3. **Performance**: Optimize images and minimize bundle size
4. **Accessibility**: Include proper ARIA labels and semantic HTML
5. **SEO**: Use proper meta tags and heading structure

## Deployment Notes

- Configured for GitHub Pages deployment
- Custom domain: deadtechsolutions.com
- Build command: `npm run build`
- Deploy command: `npm run deploy`

## Common Tasks

- Adding new projects: Update project cards in the projects section
- Updating skills: Modify the skills grid in the about section
- Changing colors: Update CSS custom properties in `:root`
- Contact info: Update contact section with real contact details

## File Structure

```
src/
├── App.tsx          # Main component with all sections
├── App.css          # Component-specific styles
├── main.tsx         # React app entry point
└── index.css        # Global styles and CSS reset
```

When making changes, ensure:
- Responsive design is maintained
- TypeScript types are correct
- Performance is optimized
- Code follows React best practices
