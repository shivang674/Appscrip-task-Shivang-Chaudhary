# Appscrip PLP Assignment

This is a Product Listing Page (PLP) implementation for the Appscrip assignment. It mimics the "mettā muse" design using Next.js (App Router) and plain CSS Modules.

## Features

- **Tech Stack**: Next.js 14, TypeScript, CSS Modules (No Tailwind/Bootstrap).
- **Data Source**: Fetches products from `fakestoreapi.com` via Server Side Rendering (SSR).
- **Responsive Design**:
  - Desktop: 4-column grid, Sidebar filters.
  - Mobile: 1-column grid, Overlay filters, Hamburger menu.
- **SEO Optimized**:
  - Dynamic Metadata (Title, Description, OpenGraph).
  - JSON-LD Structured Data for Products.
  - Semantic HTML.
  - Image Optimization using `next/image` with remote patterns.
- **Functionality**:
  - Filter Sidebar (Expandable categories).
  - Sort Dropdown (UI only).
  - Responsive Header/Footer.

## Setup Instructions

1.  **Prerequisites**: Node.js 18+ installed.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the app.

4.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Project Structure

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components (Header, Footer, ProductCard, etc.).
- `src/lib`: Utilities (API, Types).
- `src/app/globals.css`: Global styles and variables.

## Optimization Details

- **Images**: Configured `next.config.ts` to optimize images from `fakestoreapi.com`.
- **SSR**: Data is fetched on the server in `page.tsx` for fast initial load and SEO.
- **Modular CSS**: Styles are scoped to components to avoid conflicts.

## Deployment

The project is ready to be deployed on Vercel or Netlify.
