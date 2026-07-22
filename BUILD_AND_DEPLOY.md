# Build & Deployment Guide

## Complete Commands Reference

### Development

```bash
# Install dependencies (one time)
pnpm install

# Start development server
pnpm dev

# Open browser
http://localhost:3000
```

### Testing

```bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Build production bundle
pnpm build

# Start production server
pnpm start
```

### Deployment to Vercel

#### Method 1: GitHub Integration (Recommended)

```bash
# 1. Initialize git repository
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit: DoExim Expo application"

# 4. Create repository on GitHub
# - Go to https://github.com/new
# - Create repository named "doexim-expo"

# 5. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/doexim-expo.git
git branch -M main
git push -u origin main

# 6. Connect to Vercel
# - Go to https://vercel.com/new
# - Select GitHub
# - Select your "doexim-expo" repository
# - Click Deploy
# - Done! (Auto-deploys on every push)
```

#### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

#### Method 3: Docker

```bash
# Build Docker image
docker build -t doexim-expo .

# Run container
docker run -p 3000:3000 doexim-expo

# Deploy to cloud (Google Cloud Run, AWS ECS, etc.)
```

---

## Environment Variables

### For Local Development
No environment variables required for basic functionality.

### For Production (Vercel)

Add in Vercel Project Settings > Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url          (optional)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key         (optional)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key     (optional)
RESEND_API_KEY=your_resend_api_key                  (optional)
```

---

## Database Setup (Optional)

### Option 1: JSON Files (Current - No Setup Needed)
Data is stored in JSON files. Ready to go!

### Option 2: Supabase Migration

```bash
# 1. Create Supabase account
# - Go to https://supabase.com
# - Sign up
# - Create new project

# 2. Get credentials from project settings
# - NEXT_PUBLIC_SUPABASE_URL
# - NEXT_PUBLIC_SUPABASE_ANON_KEY

# 3. Run migrations in Supabase SQL editor
# - Copy content from /supabase/migrations/001_initial_schema.sql
# - Paste in Supabase SQL editor
# - Run

# 4. Add environment variables (see above)

# 5. Update API routes to use Supabase
# - (Already configured, just needs env vars)
```

---

## Monitoring & Analytics

### Vercel Analytics (Built-in)
```bash
# Already included in app
# View in Vercel dashboard at https://vercel.com/dashboard
```

### Custom Analytics (Optional)

```bash
# Add Google Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

---

## Performance Optimization

### Current Optimizations
- ✅ Next.js Image optimization
- ✅ CSS minification
- ✅ JavaScript code splitting
- ✅ Responsive images
- ✅ Lazy loading

### Additional Optimizations (Optional)

```bash
# Enable React Compiler (experimental)
# Edit next.config.mjs:
export default {
  experimental: {
    reactCompiler: true,
  }
}
```

---

## Backup & Recovery

### GitHub Backup
```bash
# All code is automatically backed up on GitHub
# Restore: git clone https://github.com/YOUR_USERNAME/doexim-expo.git
```

### Database Backup (if using Supabase)
- Supabase automatically backs up daily
- Access backups in Supabase dashboard

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev --port 3001
```

### Dependency Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Fails
```bash
# Check for errors
pnpm build

# Type checking
pnpm type-check

# Linting
pnpm lint
```

### Vercel Deployment Issues

1. **Check build logs**
   - Go to Vercel dashboard
   - Select project
   - View build logs

2. **Common fixes**
   - Update Node version to 18+
   - Clear Vercel cache: Project Settings > Deployments
   - Re-deploy

---

## Scaling for Production

### When You Get Significant Traffic

1. **Enable Edge Caching**
   - Vercel automatically handles this

2. **Database Scaling**
   - Migrate to Supabase (included schema ready)
   - Or use AWS RDS, Google Cloud SQL

3. **Media Storage**
   - Upgrade Vercel Blob storage
   - Or use S3, Google Cloud Storage

4. **Email Service**
   - Already configured for Resend
   - Upgrade plan as needed

---

## Update & Maintenance

### Regular Updates
```bash
# Check for dependency updates
pnpm outdated

# Update dependencies
pnpm update

# Update Next.js
pnpm add next@latest react@latest react-dom@latest
```

### Security Updates
```bash
# Check for vulnerabilities
pnpm audit

# Fix vulnerabilities
pnpm audit --fix
```

---

## Monitoring Commands

```bash
# Check application health
curl http://localhost:3000

# Check API health
curl http://localhost:3000/api/stats

# View logs
pnpm dev --verbose

# Performance analysis
npm run build -- --analyze
```

---

## Continuous Deployment (CI/CD)

The application is already set up for:
- ✅ Automatic deployment on GitHub push
- ✅ Preview deployments for pull requests
- ✅ Automatic rollback on failure
- ✅ Zero-downtime deployments

No additional setup needed!

---

## Final Deployment Checklist

Before going live:

- [ ] Test application locally: `pnpm dev`
- [ ] Build production bundle: `pnpm build`
- [ ] Check types: `pnpm type-check`
- [ ] Test production build: `pnpm start`
- [ ] Commit and push to GitHub
- [ ] Verify Vercel deployment
- [ ] Test all forms in production
- [ ] Test admin dashboard
- [ ] Verify analytics loading
- [ ] Check mobile responsiveness
- [ ] Test PDF export
- [ ] Monitor error logs

---

## Going Live - Final Steps

```bash
# 1. Make final code changes and test locally
pnpm dev
# ... test everything ...

# 2. Commit changes
git add .
git commit -m "Ready for production"

# 3. Push to GitHub
git push origin main

# 4. Vercel automatically deploys
# Monitor at https://vercel.com/dashboard

# 5. Test live site
# https://doexim-expo.vercel.app (or your custom domain)

# 6. Monitor for errors
# Check Vercel dashboard and Sentry (if enabled)
```

---

## Support

For issues, visit:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: https://github.com/vercel/next.js/issues

---

**Everything is ready. Deploy with confidence!** 🚀
