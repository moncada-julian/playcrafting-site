# PROJECT BRIEF

> This file helps Claude Code understand the project. Read this first when onboarding.

## What Is This?

A Next.js marketing site for **Playcrafting**, a company that:
- Builds games for brands (clients include Schick, Google Stadia, ASUS ROG)
- Runs game jams and developer events
- Hosts Play NYC, a gaming convention in New York
- Manages a network of indie game developers available for hire

This site was migrated from Bubble.io to Next.js for better performance and maintainability.

## Live URLs

- **Live site:** https://playcrafting-site.netlify.app
- **GitHub repo:** https://github.com/moncada-julian/playcrafting-site

## Current State

**Working:**
- All 12 pages render and build successfully
- Responsive design (mobile breakpoint at 768px)
- Header with scroll effect and mobile menu
- All images downloaded and serving from `/public/images/`

**Not implemented:**
- Form submission logic (contact form and developer registration have UI only)
- Analytics
- CMS integration (content is hardcoded)

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS** with custom theme

## Project Structure

```
app/                      # Pages (App Router)
├── page.tsx              # Home
├── work/page.tsx         # Case studies overview
├── work/schick/page.tsx  # Schick case study
├── work/stadia/page.tsx  # Google Stadia case study
├── work/asus/page.tsx    # ASUS ROG case study
├── contact/page.tsx      # Contact form (submission TODO)
├── contact/thanks/page.tsx
├── developers/page.tsx   # Dev network signup (submission TODO)
├── terms/page.tsx
├── code-of-conduct/page.tsx
├── summer-of-xr/page.tsx
└── not-found.tsx         # 404

components/               # Reusable components
├── Header.tsx            # Nav with scroll effect, uses MobileMenu
├── Footer.tsx            # Social links, copyright
├── MobileMenu.tsx        # Slide-out mobile nav
├── Button.tsx            # Primary/secondary/outline variants
├── CaseStudyCard.tsx     # Used on /work and home
├── ClientLogoGrid.tsx    # Client logo showcase
├── GameCard.tsx          # Game preview with GIF
├── SectionHeading.tsx
└── StatCard.tsx          # Metrics display

lib/constants.ts          # Nav links, social links, client logos, case studies array

public/images/            # Static assets
├── clients/              # Client logos
├── case-studies/         # Banner images
├── games/                # Game GIFs
├── social/               # Social media icons
└── misc/                 # Backgrounds, etc.
```

## Key Files to Know

| File | What it controls |
|------|------------------|
| `app/layout.tsx` | Root layout, wraps all pages with Header/Footer |
| `lib/constants.ts` | Navigation links, social links, client logos array, case studies data |
| `tailwind.config.ts` | Brand colors (`pc-dark`, `pc-pink`, etc.) and font config |
| `components/Header.tsx` | Main navigation - has scroll-triggered background change |

## Brand Colors

Defined in Tailwind config as:
- `pc-dark`: #000123 (dark blue background)
- `pc-light`: #F3FCF8 (light text)
- `pc-pink`: #FF0F7B (primary accent)
- `pc-orange`: #F96D49 (secondary accent)
- `pc-teal`: #33B1AB (tertiary accent)

## Running Locally

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## Open Questions

Things the project owner would appreciate input on:

1. **Form backend** - Contact (`/contact`) and developer registration (`/developers`) need submission handling. Options: Next.js API routes, Formspree, Netlify Forms, or other?

2. **CMS** - Content is hardcoded. Worth adding a headless CMS for easier updates, or keep it simple?

3. **Image optimization** - Some game GIFs are large. Convert to video? Use a CDN?

## Areas to Work On

**Proposed next steps (discuss with collaborator):**

1. **Add newsletter signup** - The existing Playcrafting site has a newsletter signup. We should add one here, likely in the footer or as a section on the home page. Could use Mailchimp, ConvertKit, or similar.

2. **Add videos** - The existing site has video content that we didn't migrate. Review the current playcrafting.com site and add any videos that should be included here.

3. **Remove unwanted content** - Review all pages with the collaborator and remove anything that's outdated or shouldn't be included. This is a fresh start, so we can trim what's not needed.

4. **TODO: Audit content for removal** - Go through each page and identify what content should be removed or updated. Make a checklist of sections/pages to review.

**Technical tasks:**
- Implement form submissions (see `app/contact/page.tsx` and `app/developers/page.tsx` - both have TODO comments)
- Add `metadataBase` to `app/layout.tsx` for proper OG image URLs
- Form validation and loading states

**If time allows:**
- Page transition animations
- Blog/news section
- More case studies

## Gotchas

1. **Header is a client component** - Uses `useState`/`useEffect` for scroll detection. The `"use client"` directive is required.

2. **Forms are UI-only** - The contact and developer forms render but don't submit anywhere. Look for `// TODO` comments in those files.

3. **Some ASUS game images may be missing** - The case study references GIFs that might not have downloaded. Check `/public/images/games/` and `/public/images/misc/` if images appear broken.

4. **Play NYC links externally** - By design, Play NYC links go to https://play-nyc.com, not a local page.

5. **Original source** - The Bubble.io export file is at `../playcrafting.bubble` if you need to reference original content or find missing data.
