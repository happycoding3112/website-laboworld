

# Developer Portfolio — Colorful & Playful

## Overview
A four-page developer portfolio with vibrant colors, fun interactions, and a playful personality. Separate routes for Hero/Home, About, Projects, and Contact.

## Pages & Content

**Home (/)** — Hero section with animated greeting, colorful gradient text, a brief tagline, and CTA buttons to Projects and Contact. Fun floating/animated emoji or geometric shapes in the background.

**About (/about)** — Bio section with photo placeholder, tech stack with colorful skill badges/pills, timeline or highlights of experience. Playful card layout.

**Projects (/projects)** — Grid of project cards with colorful borders/gradients, hover animations (scale, glow), tags for technologies, links to GitHub/live demo. 4-6 placeholder projects.

**Contact (/contact)** — Contact form (name, email, message) with playful styling, plus social links (GitHub, LinkedIn, Twitter). Animated submit button.

## Shared Layout
- Sticky nav header in `__root.tsx` with colorful accent, site name/logo, nav links with active state highlighting
- Footer with social links and copyright
- Mobile-responsive hamburger menu

## Visual Style
- Light background with vibrant accent colors (purple, pink, cyan, yellow gradients)
- Rounded cards with colored shadows and borders
- Playful hover animations (scale, color shifts)
- Gradient text for headings
- Emoji accents throughout
- Custom color palette via CSS variables in `styles.css`

## Technical Plan

1. **Update `styles.css`** — Add custom colorful theme variables (vibrant primary, accent colors, gradient utilities)
2. **Update `__root.tsx`** — Add shared Header component with nav links and mobile menu, Footer component
3. **Replace `index.tsx`** — Hero page with gradient text, animated elements, CTA buttons
4. **Create `about.tsx`** — About page with bio, skill badges, experience highlights
5. **Create `projects.tsx`** — Projects grid with colorful cards and hover effects
6. **Create `contact.tsx`** — Contact form with validation and playful styling
7. Each route gets unique `head()` metadata for SEO

## Files Changed/Created
- `src/styles.css` (modify)
- `src/routes/__root.tsx` (modify — add Header/Footer)
- `src/routes/index.tsx` (replace)
- `src/routes/about.tsx` (create)
- `src/routes/projects.tsx` (create)
- `src/routes/contact.tsx` (create)

