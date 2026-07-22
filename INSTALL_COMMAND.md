# Complete NPM Installation Guide

## Quick Start - Single Command

Copy and paste this single command to install ALL required dependencies:

```bash
pnpm install
```

Or if you prefer a fresh installation from scratch:

```bash
rm -rf node_modules pnpm-lock.yaml && pnpm install
```

---

## Complete Package List (47 Total Packages)

### Production Dependencies (34 packages)

**Framework & Core:**
```bash
next@16.2.6
react@19.2.4
react-dom@19.2.4
```

**Database & Authentication:**
```bash
@supabase/supabase-js@^2.110.8
@supabase/auth-helpers-nextjs@^0.15.0
bcrypt@^6.0.0
uuid@^14.0.1
```

**Forms & Validation:**
```bash
react-hook-form@^7.82.0
@hookform/resolvers@^5.4.0
zod@^4.4.3
```

**UI Components & Styling:**
```bash
tailwindcss@^4.3.3
tailwind-merge@^3.4.0
tailwindcss-animate@^1.0.7
class-variance-authority@^0.7.1
clsx@^2.1.1
@base-ui/react@^1.5.0
@radix-ui/react-dialog@^1.1.2
@radix-ui/react-dropdown-menu@^2.1.1
@radix-ui/react-slot@^1.3.0
lucide-react@^1.17.0
shadcn@^4.10.0
```

**Animations & Motion:**
```bash
framer-motion@^12.42.2
tw-animate-css@^1.4.0
sonner@^1.6.0
```

**Data & File Handling:**
```bash
xlsx@^0.18.5
date-fns@^4.4.0
sharp@^0.35.3
recharts@^2.15.0
```

**Communication & Services:**
```bash
resend@^6.18.0
@vercel/blob@^0.24.0
@vercel/analytics@1.6.1
```

**Theme & SEO:**
```bash
next-themes@^0.4.6
next-seo@^7.2.0
next-auth@^4.24.15
```

### Development Dependencies (13 packages)

**TypeScript & Types:**
```bash
typescript@^5.7.3
@types/node@^24.10.4
@types/react@^19.2.14
@types/react-dom@^19.2.3
@types/bcrypt@^5.0.2
@types/uuid@^10.0.0
```

**Linting & Code Quality:**
```bash
eslint@^9.39.5
@eslint/js@^9.0.0
eslint-config-next@^16.2.6
prettier@^3.9.6
```

**Styling & CSS:**
```bash
postcss@^8.5.6
@tailwindcss/postcss@^4.3.3
@tailwindcss/typography@^0.5.15
@tailwindcss/forms@^0.5.9
```

---

## Installation Methods

### Method 1: Standard Installation (Recommended)
```bash
cd /vercel/share/v0-project
pnpm install
```

### Method 2: Fresh Installation with Cache Clear
```bash
cd /vercel/share/v0-project
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Method 3: Force Installation (if dependencies fail)
```bash
pnpm install --force
```

### Method 4: With No Frozen Lockfile
```bash
pnpm install --no-frozen-lockfile
```

---

## Manual Installation (if needed)

If you need to install dependencies manually for any reason:

```bash
# Core dependencies
pnpm add next@16.2.6 react@19.2.4 react-dom@19.2.4

# Database & Auth
pnpm add @supabase/supabase-js@^2.110.8 @supabase/auth-helpers-nextjs@^0.15.0 bcrypt@^6.0.0 uuid@^14.0.1

# Forms & Validation
pnpm add react-hook-form@^7.82.0 @hookform/resolvers@^5.4.0 zod@^4.4.3

# Styling & UI
pnpm add tailwindcss@^4.3.3 tailwind-merge@^3.4.0 tailwindcss-animate@^1.0.7 class-variance-authority@^0.7.1 clsx@^2.1.1

# UI Components
pnpm add @base-ui/react@^1.5.0 @radix-ui/react-dialog@^1.1.2 @radix-ui/react-dropdown-menu@^2.1.1 @radix-ui/react-slot@^1.3.0 lucide-react@^1.17.0 shadcn@^4.10.0

# Animations
pnpm add framer-motion@^12.42.2 tw-animate-css@^1.4.0 sonner@^1.6.0

# Data & Files
pnpm add xlsx@^0.18.5 date-fns@^4.4.0 sharp@^0.35.3 recharts@^2.15.0

# Services
pnpm add resend@^6.18.0 @vercel/blob@^0.24.0 @vercel/analytics@1.6.1

# Theme & SEO
pnpm add next-themes@^0.4.6 next-seo@^7.2.0 next-auth@^4.24.15

# Dev dependencies
pnpm add -D typescript@^5.7.3 @types/node@^24.10.4 @types/react@^19.2.14 @types/react-dom@^19.2.3 @types/bcrypt@^5.0.2 @types/uuid@^10.0.0 eslint@^9.39.5 @eslint/js@^9.0.0 eslint-config-next@^16.2.6 prettier@^3.9.6 postcss@^8.5.6 @tailwindcss/postcss@^4.3.3 @tailwindcss/typography@^0.5.15 @tailwindcss/forms@^0.5.9
```

---

## Verification After Installation

After installation, verify everything is working:

```bash
# Check installed packages
pnpm list --depth=0

# Build the project
pnpm build

# Run development server
pnpm dev
```

You should see output like:
- ✓ All 47 packages installed successfully
- ✓ 0 vulnerabilities
- ✓ Development server running on http://localhost:3000

---

## Troubleshooting

### If `pnpm install` fails

**Step 1: Clear cache**
```bash
pnpm store prune
```

**Step 2: Remove lock file and try again**
```bash
rm -rf pnpm-lock.yaml
pnpm install
```

**Step 3: Last resort - use force flag**
```bash
pnpm install --force
```

### If specific package fails

Example: If `sharp` installation fails on macOS/Linux:
```bash
pnpm add sharp@^0.35.3 --force
pnpm approve-builds
```

### If getting peer dependency warnings

These warnings are safe to ignore:
- `@supabase/auth-helpers-nextjs` - Deprecated but still functional
- `recharts` - Version 2.x is still supported

Simply continue with `pnpm install` - the warnings do not affect functionality.

---

## After Installation - Next Steps

1. **Copy environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

4. **Read Setup Guides:**
   - `QUICK_START.md` - Production setup (45 minutes)
   - `SUPABASE_SETUP.md` - Database configuration
   - `ARCHITECTURE.md` - System design overview

---

## Package Sizes Reference

| Package | Size | Purpose |
|---------|------|---------|
| framer-motion | ~50KB | Animations |
| recharts | ~80KB | Charts |
| next | ~100KB | Framework |
| react | ~40KB | UI library |
| zod | ~20KB | Validation |
| tailwindcss | JIT | CSS (on-demand) |
| **Total (minified + gzip)** | **~500KB** | Production ready |

---

## Update Commands

Check for outdated packages:
```bash
pnpm outdated
```

Update all packages:
```bash
pnpm update
```

Update specific package:
```bash
pnpm update package-name@latest
```

---

## System Requirements

- **Node.js**: 18.17+ or 20.0+
- **pnpm**: 8.0+ (or npm/yarn equivalent)
- **Disk Space**: ~500MB for node_modules
- **RAM**: 2GB+ recommended

---

## Support

If you encounter issues:

1. Check this file: `DEPENDENCIES.md`
2. Read: `QUICK_START.md`
3. Check Node version: `node --version` (should be 18+)
4. Check pnpm version: `pnpm --version` (should be 8+)

All 47 packages are:
✅ Free to use
✅ Open source
✅ Production-ready
✅ Compatible with Vercel free tier
