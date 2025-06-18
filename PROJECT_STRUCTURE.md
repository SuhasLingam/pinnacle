# Project Structure and Updates

## Project Overview

This is a Next.js project with TypeScript, Tailwind CSS, and various modern web development tools.

## File Structure

```
├── .next/                  # Next.js build output
├── node_modules/          # Dependencies
├── public/               # Static files
├── src/                  # Source code
│   ├── app/             # Next.js app directory
│   │   ├── page.tsx     # Main page component
│   │   ├── layout.tsx   # Root layout
│   │   ├── globals.css  # Global styles
│   │   └── favicon.ico  # Site favicon
│   └── components/      # React components
│       ├── About.tsx
│       ├── AnimatedBackground.tsx
│       ├── FAQ.tsx
│       ├── FeatureCards.tsx
│       ├── Navigation.tsx
│       ├── Sponsors.tsx
│       ├── Timeline.tsx
│       └── Tracks.tsx   # New AI tracks component
├── .eslintrc.js         # ESLint configuration
├── .eslintrc.json       # Additional ESLint config
├── .gitignore          # Git ignore rules
├── bun.lockb           # Bun lock file
├── eslint.config.mjs   # ESLint module config
├── next-env.d.ts       # Next.js TypeScript declarations
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── package-lock.json   # NPM lock file
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Key Components

1. **Main Page (`src/app/page.tsx`)**: The main landing page of the application
2. **Layout (`src/app/layout.tsx`)**: The root layout component
3. **Components**:
   - `About.tsx`: About section component
   - `AnimatedBackground.tsx`: Background animation component
   - `FAQ.tsx`: Frequently Asked Questions component
   - `FeatureCards.tsx`: Feature cards display component
   - `Navigation.tsx`: Navigation menu component
   - `Sponsors.tsx`: Sponsors section component
   - `Timeline.tsx`: Timeline display component
   - `Tracks.tsx`: AI tracks showcase component with 12 different AI application areas

## Technology Stack

- Next.js (React Framework)
- TypeScript
- Tailwind CSS
- ESLint
- Bun (Package Manager)

## Updates Log

### Initial Setup (Current)

- Project structure documented
- Initial file overview completed

### Latest Update

- Added new Tracks component with 12 AI application areas
- Implemented consistent styling with other components
- Added animations and hover effects
- Included descriptive text for each track
