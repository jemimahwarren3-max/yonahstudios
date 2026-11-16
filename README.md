# Yonah Studios

Marketing website for **Yonah Studios** — a remote creative studio offering brand
design, websites and social media for businesses across Zimbabwe, South Africa
and beyond.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS 4 + shadcn
- [motion](https://motion.dev) for animation
- Fraunces + Inter typography

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm build      # production build
pnpm start      # serve the production build
```

## Notes

- Portfolio pieces are **studio concepts** — original demonstrations of the
  studio's work, not completed client projects.
- Reusable content lives in `src/lib/` (`site.ts`, `data/services.ts`,
  `data/pricing.ts`, `data/projects.ts`) so services, pricing and projects are
  easy to update.
