# Law Firm Website

Production-ready React + TypeScript website for a law firm.

## Stack

- TanStack Start + TanStack Router
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn/Radix UI primitives
- Vite dev/build pipeline

## Project Structure

```text
docs/                     Project planning notes
src/
  components/
    site/                 Website-specific layout and content components
    ui/                   Reusable shadcn/Radix primitives
  content/                Typed editable firm, practice area, team, and article data
  hooks/                  Shared React hooks
  lib/                    Utilities, i18n, server functions, and error handling
  routes/                 TanStack file-based routes
  router.tsx              Router factory
  routeTree.gen.ts        Generated route tree
  server.ts               SSR server entry wrapper
  start.ts                TanStack Start middleware entry
  styles.css              Global theme and Tailwind styles
```

## Scripts

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

This project is not a Next.js App Router project; it uses TanStack Start, which is also a production SSR React framework.
# Law
