# Jared Cervantes - Personal Website (Hugo)

A Hugo clone of the Astro personal website with identical features and design.

## Development

```bash
# Start development server
hugo server -D

# Build for production
hugo build
```

## Features

- Responsive design
- Dark/light mode toggle
- SVG-based JC logo with hover animations
- Social media links (Bluesky, GitHub, LinkedIn)
- Blog with sidebar navigation
- Code syntax highlighting with copy buttons
- Identical styling and functionality to the Astro version

## Structure

- `layouts/` - Hugo templates and partials
- `content/blog/` - Blog posts in Markdown
- `static/` - Static assets (favicon, etc.)
- `hugo.toml` - Site configuration

## Redirects

The following redirects are configured (need to be handled by hosting provider):

- `/win` → Windows setup script
- `/mac` → Mac setup script  
- `/linux` → Linux setup script
- `/debian` → Debian preseed configuration

## Deployment

This Hugo site is a direct clone of the Astro website and should provide identical functionality and appearance.
