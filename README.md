# robbeach.com

Personal website, portfolio, and research log of **Robert Beach** — Staff Engineer at Rheia LLC, former Situ Studio computational designer, and M.Arch graduate from Pratt Institute.

Built with [Astro](https://astro.build/) for minimalist, lightning-fast static delivery, styled with custom CSS tokens inspired by technical monographs and Bell Labs research papers.

---

## 🏛️ Site Architecture

- **`src/pages/index.astro`**: Bio, current focus in Phoenix, AZ, contact links, and personal context.
- **`src/pages/projects.astro` & `[slug].astro`**: Curated archive of work spanning two decades — from 25,000+ home HVAC engineering engines to Guggenheim exhibitions, Princeton geoscience 3D fossil reconstructions, and parametric art.
- **`src/pages/resume.astro`**: Full CV with print-optimized styling (`window.print()`).
- **`src/pages/blog/`**: Technical treatises, design essays, and personal writing.
- **`src/pages/home.astro`**: Private draft dashboard for telemetry (including Penelope the crested gecko's automated vivarium controller).

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📋 Roadmap & Future Ideas

See [TODO.md](./TODO.md) for the active task roadmap, including Penelope's vivarium telemetry integration, multi-image gallery staging, and LaTeX math rendering.

---

### Copyright & Credits

© 2026 Rob, Jeralyn, Julian, Owen, Ranch, Freddie, and Penelope Beach. All rights reserved.
