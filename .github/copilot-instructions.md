# HabitMeister Website AI Development Guide

This guide provides essential context for AI agents working with the HabitMeister website codebase.

## Project Overview

HabitMeister is a habit tracking app's landing page built with Next.js 15.2 using the App Router pattern. The website showcases the mobile app and provides information about its features.

## Key Architecture Points

### Tech Stack

- Next.js 15.2 with App Router
- TypeScript
- Tailwind CSS for styling
- React 19.0.0

### Project Structure

```
src/
  app/                    # Next.js App Router pages
    page.tsx             # Landing page
    layout.tsx           # Root layout
    blog/
    feature-requests/
    pricing/
    privacy-policy/
public/
  images/               # App screenshots and assets
```

### Development Workflow

1. **Local Development**

   ```bash
   npm run dev
   ```

   - Uses Turbopack for faster development builds
   - Access the site at http://localhost:3000

2. **Production Build**
   ```bash
   npm run build
   npm start
   ```

### Key Conventions

1. **Styling**

   - Use Tailwind CSS classes for styling
   - Custom animations are defined using animate-\* classes
   - Responsive design uses Tailwind breakpoints (sm:, md:, etc.)

2. **Images**

   - Always use Next.js `Image` component for optimized images
   - Store images in `/public/images/`
   - Include alt text for accessibility

3. **TypeScript**
   - Strict type checking is enabled
   - React component props should be explicitly typed
   - Project uses specific React type versions (19.0.12)

### Common Tasks

1. **Adding a New Page**

   - Create a new directory in `src/app/`
   - Add a `page.tsx` file
   - Layout will be inherited from root layout.tsx

2. **Adding Images**
   - Place new images in `/public/images/`
   - Use the Next.js Image component with width and height props
   ```tsx
   import Image from "next/image";
   <Image
     src="/images/example.png"
     alt="Description"
     width={300}
     height={100}
   />;
   ```

## Best Practices

1. Keep all page components in the appropriate `app/` subdirectories
2. Follow the existing responsive design patterns using Tailwind breakpoints
3. Maintain consistent animation timings with existing transitions
4. Use TypeScript strictly - avoid any types when possible
