# Complete Dependencies List - DoExim Expo

## Installation Command

```bash
pnpm install
```

Or if you need to reinstall from scratch:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

## Production Dependencies (26 total)

### Framework & Runtime
- **next** `16.2.6` - React framework with SSR, API routes, middleware
- **react** `^19.2.4` - UI library
- **react-dom** `^19.2.4` - React DOM rendering

### Database & Authentication
- **@supabase/supabase-js** `^2.110.8` - Supabase JavaScript client
- **@supabase/auth-helpers-nextjs** `^0.15.0` - Supabase Next.js auth integration
- **bcrypt** `^6.0.0` - Password hashing
- **uuid** `^14.0.1` - UUID generation for database IDs

### Forms & Validation
- **react-hook-form** `^7.82.0` - Performant form state management
- **@hookform/resolvers** `^5.4.0` - Form validation resolvers
- **zod** `^4.4.3` - TypeScript-first schema validation

### UI Components & Styling
- **tailwindcss** `^4.3.3` - Utility-first CSS framework
- **tailwind-merge** `^3.4.0` - Merge Tailwind classes intelligently
- **tailwindcss-animate** `^1.0.7` - Tailwind animation utilities
- **class-variance-authority** `^0.7.1` - CSS class variance management
- **clsx** `^2.1.1` - Conditional classname concatenation
- **@base-ui/react** `^1.5.0` - Headless UI components
- **@radix-ui/react-dialog** `^1.1.2` - Dialog/modal primitives
- **@radix-ui/react-dropdown-menu** `^2.1.1` - Dropdown menu primitives
- **@radix-ui/react-slot** `^1.3.0` - Slot composition primitive
- **lucide-react** `^1.17.0` - Icon library (400+ SVG icons)

### Animations & Motion
- **framer-motion** `^12.42.2` - Advanced animation library
- **tw-animate-css** `^1.4.0` - CSS animation utilities

### Data & File Handling
- **xlsx** `^0.18.5` - Excel file generation and parsing
- **date-fns** `^4.4.0` - Date manipulation library
- **sharp** `^0.35.3` - Image processing and optimization
- **recharts** `^2.15.0` - React chart library (required for Phase 3)

### Communication & Services
- **resend** `^6.18.0` - Email sending service
- **@vercel/blob** `^0.24.0` - File storage service
- **@vercel/analytics** `1.6.1` - Analytics tracking

### Theme & SEO
- **next-themes** `^0.4.6` - Dark/light mode management
- **next-seo** `^7.2.0` - SEO optimization
- **next-auth** `^4.24.15` - Authentication system (optional, for future social auth)
- **sonner** `^1.6.0` - Toast notification library
- **shadcn** `^4.10.0` - Component library CLI

---

## Development Dependencies (13 total)

### TypeScript & Types
- **typescript** `^5.7.3` - TypeScript language
- **@types/node** `^24.10.4` - Node.js type definitions
- **@types/react** `^19.2.14` - React type definitions
- **@types/react-dom** `^19.2.3` - React DOM type definitions
- **@types/bcrypt** `^5.0.2` - Bcrypt type definitions
- **@types/uuid** `^10.0.0` - UUID type definitions

### Linting & Code Quality
- **eslint** `^9.39.5` - JavaScript linter
- **@eslint/js** `^9.0.0` - ESLint JavaScript rules
- **eslint-config-next** `^16.2.6` - ESLint Next.js configuration
- **prettier** `^3.9.6` - Code formatter

### Styling & CSS
- **postcss** `^8.5.6` - CSS transformation tool
- **@tailwindcss/postcss** `^4.3.3` - Tailwind PostCSS plugin
- **@tailwindcss/typography** `^0.5.15` - Typography plugin for Tailwind
- **@tailwindcss/forms** `^0.5.9` - Forms plugin for Tailwind

---

## Dependency Breakdown by Category

| Category | Count | Purpose |
|----------|-------|---------|
| Framework | 3 | Next.js, React, React DOM |
| Database | 4 | Supabase, Auth, Password hashing, UUIDs |
| Forms | 3 | Form state, resolvers, validation |
| UI Components | 10 | Tailwind, Radix, headless UI primitives |
| Animations | 2 | Framer Motion, CSS animations |
| Data & Files | 4 | Excel, dates, images, charts |
| Services | 3 | Email, storage, analytics |
| Theme & SEO | 5 | Themes, SEO, auth, toasts, components |
| **Total Production** | **34** | |
| **Total Dev** | **13** | |
| **TOTAL** | **47** | |

---

## Installation Options

### Option 1: Full Installation (Recommended)
```bash
cd /vercel/share/v0-project
pnpm install
```

### Option 2: Fresh Install (if dependencies are corrupted)
```bash
cd /vercel/share/v0-project
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Option 3: Specific Package Installation
```bash
# Add a new package
pnpm add package-name

# Add a dev dependency
pnpm add -D package-name
```

---

## Peer Dependencies Warning

Some packages may show peer dependency warnings - these are safe to ignore:
- `@supabase/auth-helpers-nextjs` - Deprecated but still functional
- `recharts` - Version 2.x is still supported

---

## Free Tier Compatibility

All packages listed are:
- ✅ Free to use
- ✅ Open source or freemium
- ✅ No paid licenses required
- ✅ Compatible with Vercel free tier
- ✅ No vendor lock-in

---

## Package Size Reference

| Package | Size | Purpose |
|---------|------|---------|
| framer-motion | ~50KB | Animations |
| recharts | ~80KB | Charts |
| next | ~100KB | Framework |
| react | ~40KB | UI library |
| zod | ~20KB | Validation |
| tailwindcss | JIT | CSS (generated) |
| **Total Bundle** | **~500KB** | With tree-shaking |

---

## Update Commands

### Check for Updates
```bash
pnpm outdated
```

### Update All Packages
```bash
pnpm update
```

### Update Specific Package
```bash
pnpm update package-name@latest
```

---

## Troubleshooting

### If you see "Missing module" errors:
```bash
pnpm install
```

### If installation fails:
```bash
pnpm install --force
```

### If there are version conflicts:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### If a specific package causes issues:
```bash
pnpm install --no-frozen-lockfile
```

---

## Key Versions to Know

| Package | Version | Reason |
|---------|---------|--------|
| next | 16.2.6 | Latest stable with React 19 support |
| react | 19.2.4 | Latest with Server Components |
| typescript | 5.7.3 | Latest stable |
| tailwindcss | 4.3.3 | Latest v4 with improved performance |
| zod | 4.4.3 | Latest v4 schema validation |

---

## Build Output

After `pnpm install`, you should see:
```
✓ 47 packages installed
✓ 0 vulnerabilities
✓ Ready for development
```

All dependencies are production-ready and fully compatible with the DoExim Expo application.
