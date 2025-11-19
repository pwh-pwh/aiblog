# 🚀 Antigravity - Modern Personal Blog

A cutting-edge, high-performance personal blog built with **Astro**, **React**, **Tailwind CSS**, and **Framer Motion**. Features stunning animations, blazing-fast page loads, and a premium user experience.

![Antigravity Blog](https://img.shields.io/badge/Astro-5.15-blueviolet?style=for-the-badge&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react)

## ✨ Features

### 🎨 Design & UX
- **Avant-garde UI**: Dark mode with vibrant gradients and glassmorphism effects
- **View Transitions**: Smooth, app-like page transitions (no white flashes)
- **Responsive Design**: Pixel-perfect on all devices
- **Micro-animations**: Powered by Framer Motion for delightful interactions
- **Reading Progress Bar**: Visual indicator for article reading progress

### 🔍 SEO & Discovery
- **Automatic Sitemap**: Generated at `/sitemap-index.xml`
- **RSS Feed**: Subscribe at `/rss.xml`
- **Open Graph Tags**: Beautiful social media preview cards
- **Canonical URLs**: Prevent duplicate content issues

### ⚡ Performance
- **Local Fonts**: Self-hosted Inter & Outfit fonts (no Google Fonts dependency)
- **Optimized Images**: Ready for Astro's Image component
- **Zero JavaScript by Default**: Only interactive components load JS

### 🛠 Functionality
- **Cmd+K Search**: Fuzzy search across all articles
- **Tag System**: Organize posts by topics
- **MDX Support**: Embed React components in Markdown
- **Giscus Comments**: GitHub Discussions-powered comments
- **Custom 404 Page**: Space-themed error page

## 📦 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Astro 5.15 |
| **UI Library** | React 19.2 |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion 12.23 |
| **Content** | Markdown + MDX |
| **Search** | Fuse.js |
| **Comments** | Giscus |
| **Icons** | Lucide React |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mynewblog.git
cd mynewblog

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your blog in action!

## 📝 Usage

### Creating a New Blog Post

1. Create a new `.md` or `.mdx` file in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'A brief description of your post'
pubDate: '2025-11-19'
heroImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
category: 'Tutorial'
tags: ['React', 'TypeScript', 'Web Development']
---

## Your Content Here

Write your amazing content using Markdown or MDX!
```

2. The post will automatically appear on your blog.

### Customizing Colors

Edit `src/styles/global.css` to change the color scheme:

```css
:root {
  --primary: 263.4 70% 50.4%;  /* Purple */
  --background: 240 10% 3.9%;  /* Dark background */
  /* ... more variables */
}
```

### Configuring Comments

Update `src/components/Comments.tsx` with your GitHub repository details:

```tsx
<Giscus
  repo="yourusername/yourrepo"
  repoId="YOUR_REPO_ID"
  category="General"
  categoryId="YOUR_CATEGORY_ID"
  // ...
/>
```

Get your IDs from [giscus.app](https://giscus.app).

## 📂 Project Structure

```
mynewblog/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── SearchModal.tsx
│   │   └── ...
│   ├── content/         # Blog posts
│   │   └── blog/
│   │       ├── post-1.md
│   │       └── post-2.mdx
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Routes
│   │   ├── index.astro
│   │   ├── blog/
│   │   ├── projects.astro
│   │   └── about.astro
│   └── styles/          # Global styles
│       └── global.css
├── astro.config.mjs     # Astro configuration
└── tailwind.config.mjs  # Tailwind configuration
```

## 🎯 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## 🔧 Configuration

### Site URL

Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',  // Change this!
  // ...
});
```

### Social Links

Edit `src/components/Footer.astro` and `src/pages/about.astro` to add your social media links.

## 🎨 Customization Tips

### Adding a New Page

1. Create `src/pages/yourpage.astro`
2. Add link to `src/components/Navbar.tsx`
3. Use the existing Layout component for consistency

### Changing Fonts

Replace fonts in `src/layouts/Layout.astro`:

```javascript
import '@fontsource/your-font/400.css';
```

Update `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy! ✨

### Netlify

```bash
npm run build
# Upload ./dist/ folder to Netlify
```

### Other Platforms

Build the static site and deploy the `dist/` folder:

```bash
npm run build
```

## 📄 License

MIT License - feel free to use this for your own blog!

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Icons from [Lucide](https://lucide.dev)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Made with ❤️ by Antigravity**

If you found this helpful, consider giving it a ⭐ on GitHub!
