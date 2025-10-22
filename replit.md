# Overview

This is a Next.js-based marketing website for Arivana (formerly "WindMill"), a software development agency. The site serves as a landing page showcasing the company's services, pricing, testimonials, and features. It's designed to attract potential clients and facilitate consultation requests through email. The website is built with modern web technologies including React, Next.js 14, TailwindCSS, Radix UI components, and Framer Motion for animations.

# Recent Changes

**October 22, 2025**: Integrated Aceternity UI Timeline component with scroll-triggered animations
- Added Framer Motion library for advanced scroll animations
- Implemented timeline section showcasing Arivana's journey (2022-2024)
- Timeline features sticky headers, animated progress beam, and rich content cards
- Positioned above testimonials section as a key storytelling element

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: Next.js 14 (Pages Router)
- Uses the traditional Pages Router architecture (`src/pages/` directory)
- Single-page application with sections rendered on the home page
- Server-side rendering (SSR) capabilities for SEO optimization

**Styling System**: TailwindCSS with custom theming
- Custom color scheme using `base` (stone) and `primary` (purple) color palettes
- Dark mode support via `next-themes` with manual theme switching
- Custom utility classes for common patterns (text-title, text-base, border-base, etc.)
- Path aliases configured for cleaner imports (`@/*` for src, `#/*` for components)

**Component Architecture**:
- **Base Components**: Reusable UI primitives (Button, Badge, Tabs, Accordion) built on Radix UI
- **Card Components**: Specialized display components (FeatureCard, PricingCard, TestimonialCard)
- **Section Components**: Full-width page sections (Hero, Features, Pricing, Testimonials, FAQ, CTA, Timeline)
- **Utility Components**: Theme switching, social links, brand showcase
- **Animated Components**: Timeline with Framer Motion scroll animations
- Separation of concerns with components organized by type and responsibility

**State Management**:
- Minimal client-side state using React hooks
- Theme state managed by `next-themes` library
- Local component state for UI interactions (mobile menu, pricing tenure selection)

**Design Patterns**:
- Component composition for flexibility
- Props spreading for extensibility
- Utility-first CSS with `clsx` and `tailwind-merge` for dynamic styling
- Consistent prop interfaces across similar component types

## Data Architecture

**Static Content Management**:
- All content stored in JavaScript modules under `src/data/`
- Centralized data exports from `src/data/index.js`
- Content includes: clients, features, FAQs, testimonials, pricing, header, footer, timeline data
- Timeline data stored separately in `src/data/timeline.js` with rich JSX content
- No database or CMS - purely static content approach

**Content Structure**:
- Array-based data for lists (features, testimonials, pricing tiers)
- Object-based configuration for sections (header, footer)
- Scalable structure allows easy content updates without touching components

## Routing & Navigation

**Single-Page Navigation**:
- Anchor-based navigation with smooth scrolling (`scroll-behavior: smooth`)
- Hash-based section targeting (#features, #pricing, #testimonials, #faqs)
- Fixed header with scroll-margin compensation
- No multi-page routing - entire site on single page

## Email Integration

**Contact System**:
- `mailto:` protocol for consultation requests (no backend required)
- Configurable email template in `src/config/email.js`
- Pre-populated email body with structured form fields
- Email address: `pawankumar9aa@gmail.com`
- Helper function `generateConsultationMailto()` for URL generation

**Rationale**: Chose mailto over forms to eliminate need for backend email service, reduce complexity, and ensure immediate delivery through user's email client.

## Theming System

**Dark Mode Implementation**:
- Class-based theme switching (`dark:` prefix in Tailwind)
- Persistent theme selection via `next-themes`
- Manual toggle button in header
- System preference detection with override capability
- Disabled transitions on theme change for smooth UX

**Custom Fonts**:
- Display font: Syne (for headings)
- Body font: Inter (for content)
- Loaded via Next.js font optimization
- CSS custom properties for font family references

## Performance Optimizations

**Image Handling**:
- Next.js Image component NOT used (using standard `<img>` tags)
- Images served from public directory
- Placeholder avatar service (pravatar.cc) for testimonials
- Logo and brand images stored statically

**Code Splitting**:
- Automatic code splitting via Next.js
- Client-only components marked with "use client" directive
- Minimal client-side JavaScript footprint

**Bundle Optimization**:
- TailwindCSS purging via content configuration
- Tree-shaking of unused Radix UI components
- PostCSS with Autoprefixer for browser compatibility

# External Dependencies

## UI Component Library
- **Radix UI** (`@radix-ui/react-accordion`): Accessible, unstyled accordion component
  - Used for FAQ section
  - Provides keyboard navigation and ARIA compliance out of the box

## Animation Library
- **Framer Motion** (`framer-motion`): Production-ready motion library for React
  - Used for scroll-triggered animations in Timeline component
  - Provides `useScroll`, `useTransform`, and `motion` components
  - Enables smooth, performant animations tied to scroll position

## Icon System
- **Iconify React** (`@iconify/react`): Universal icon framework
  - Tabler Icons set used throughout
  - Dynamic icon loading
  - Used in buttons, badges, features, and social links

## Styling Utilities
- **clsx**: Conditional className composition
- **tailwind-merge**: Intelligent Tailwind class merging to resolve conflicts

## Theme Management
- **next-themes**: Dark mode state management
  - Handles system preferences
  - Prevents flash of unstyled content (FOUC)
  - Provides theme persistence

## Development Tools
- **ESLint**: Code linting with Next.js core web vitals preset
- **Autoprefixer**: CSS vendor prefix automation
- **PostCSS**: CSS transformation pipeline

## Note on Database
No database is currently integrated. The application is fully static with content managed through JavaScript files. If dynamic content management is required in the future, a database (e.g., PostgreSQL with Drizzle ORM) could be added.

## Hosting Considerations
- Configured for custom port (5000) and network binding (0.0.0.0)
- Ready for containerization or VPS deployment
- Static export capability if needed (`next export`)