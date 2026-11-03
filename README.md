# Md Sanwarul Islam — Research & Engineering Portfolio

A responsive academic and engineering portfolio for **Md Sanwarul Islam**, an AI researcher and machine-learning engineer working across medical AI, computer vision, data science, and production software.

## Highlights

- Reference-led, editorial home-page experience
- Responsive left navigation rail and expanded desktop menu
- Dedicated About, Research, Publications, Projects, and Games routes
- Repository-backed project catalogue with filtering and real thumbnails
- Automatic all-project carousel with touch, keyboard, and pointer controls
- Interactive research-domain and publication experiences
- Page-aware 3D visual stories before the footer
- Premium animated footer and route transitions
- Responsive layouts from 320px mobile to large desktop screens
- Reduced-motion and keyboard-accessibility support
- Lazy-loaded route chunks and media for faster initial rendering
- Vercel SPA routing configuration

## Technology

- React 18
- TypeScript
- Vite
- React Router
- Lucide React
- CSS and PostCSS

## Routes

| Route | Content |
| --- | --- |
| `/` | Portfolio overview, research, publications, projects, and capabilities |
| `/about` | Biography, education, leadership, skills, and professional journey |
| `/research` | Research domains, active streams, principles, and FAQs |
| `/publications` | Peer-reviewed papers, chapters, proceedings, and citations |
| `/projects` | Complete filterable engineering and research project catalogue |
| `/games` | Interactive browser-game collection |

## Local Development

Requirements:

- Node.js 18 or newer
- npm

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```text
public/                 Static images and project thumbnails
src/
  components/           Navigation, footer, transitions, and shared heroes
  data/                 Portfolio, publication, research, and project data
  pages/                Route-level page components and home styling
  App.tsx               Lazy-loaded application routes
  astra.css             Shared premium visual and responsive system
  index.css             Base and legacy component styles
index.html              Document metadata and font loading
vercel.json             SPA rewrite configuration
```

## Deployment

The project is ready for Vercel. The included `vercel.json` rewrites client-side routes to `index.html`, allowing direct access to pages such as `/about` and `/projects`.

For another static host, publish the generated `dist/` directory and configure all unmatched routes to fall back to `index.html`.

## Content Management

Portfolio content is maintained in [`src/data/portfolio.ts`](src/data/portfolio.ts). Adding a project there automatically updates both the Projects page and the home-page project carousel.

## Contact

- [GitHub](https://github.com/Sanwar021)
- [LinkedIn](https://www.linkedin.com/in/sanwarislam17/)
- [Google Scholar](https://scholar.google.com/citations?user=eqFfAEMAAAAJ&hl=en)

© 2026 Md Sanwarul Islam.
