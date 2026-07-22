# Quick Start Guide - DoExim Expo Enterprise

**⏱️ Time to Production: 45 minutes**

## The Essential Steps

### 1️⃣ Create Supabase Project (5 min)

```bash
1. Go to https://supabase.com
2. Click "Sign Up"
3. Create new project named "doexim-expo"
4. Choose region: ap-southeast-1 (Singapore)
5. Create STRONG database password
6. Wait for project to initialize
```

### 2️⃣ Get Your Credentials (3 min)

```bash
Go to Settings → API → Copy these three:

NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

### 3️⃣ Run Database Setup (5 min)

```bash
1. In Supabase: SQL Editor → New Query
2. Copy ENTIRE content from:
   /supabase/migrations/001_initial_schema.sql
3. Paste into Supabase SQL editor
4. Click "Run" (⌘+Enter or Ctrl+Enter)
5. Wait for ✅ green checkmark
```

### 4️⃣ Create Storage Buckets (3 min)

```bash
In Supabase: Storage → Create new bucket

1. logos
2. brochures
3. gallery
4. speakers
5. documents

Keep all PRIVATE (toggle OFF)
```

### 5️⃣ Set Environment Variables (5 min)

**Local Development:**
```bash
1. Copy: .env.example → .env.local
2. Add your 3 Supabase credentials
3. Add RESEND_API_KEY (from resend.com)
4. Save file
5. Restart: Ctrl+C then pnpm dev
```

**Vercel Production:**
```bash
1. https://vercel.com/dashboard
2. Your project → Settings → Environment Variables
3. Add each variable
4. Select: Production, Preview, Development
5. Click Save → Auto-deploys
```

### 6️⃣ Create Admin Account (5 min)

**In Supabase SQL Editor:**

```sql
INSERT INTO admins (
  email,
  full_name,
  role,
  permissions
) VALUES (
  'your-email@example.com',
  'Super Admin',
  'super_admin',
  '{"can_manage_admins": true, 
    "can_manage_expos": true, 
    "can_view_all_registrations": true,
    "can_export_data": true,
    "can_manage_content": true}'::jsonb
);
```

Replace `your-email@example.com` with YOUR email
Click "Run"

### 7️⃣ Create First Expo (3 min)

```sql
INSERT INTO expos (
  name,
  slug,
  description,
  start_date,
  end_date,
  location,
  status,
  created_by
) VALUES (
  'DoExim Expo 2025',
  'doexim-expo-2025',
  'International trade show',
  '2025-03-15T09:00:00Z',
  '2025-03-17T18:00:00Z',
  'Convention Center, City',
  'draft',
  (SELECT id FROM admins LIMIT 1)
);
```

Click "Run"

### 8️⃣ Test Everything (5 min)

```bash
# Start dev server
pnpm dev

# Test endpoints
1. Open http://localhost:3000
2. Try registration form
3. Go to /admin (should redirect to login)
4. Check Supabase - data should be there
```

### 9️⃣ Deploy to Vercel (2 min)

```bash
# Push to GitHub
git add .
git commit -m "Production ready enterprise setup"
git push

# Vercel auto-deploys
# Check: https://vercel.com/dashboard
# Your domain goes live automatically
```

---

## What You Get NOW

- ✅ Production database (500MB free)
- ✅ Admin authentication
- ✅ 5 secure storage buckets (1GB free)
- ✅ Email service ready (100/day free)
- ✅ All registration tables created
- ✅ Row-level security active
- ✅ Middleware protecting admin routes
- ✅ TypeScript type safety
- ✅ Fully deployed to Vercel

---

## Credentials Safe Checklist

- [ ] `.env.local` is in `.gitignore`
- [ ] Never commit `.env.local`
- [ ] Service Role Key = SECRET (never share)
- [ ] Anon Key = safe to expose
- [ ] All keys stored only in environment variables
- [ ] Vercel has all required variables

---

## Common Issues & Fixes

### "Cannot find environment variables"
```bash
Solution: Restart dev server
Ctrl+C
pnpm dev
```

### "Permission denied" in admin panel
```bash
Solution: Admin email must be in admins table
Run SQL INSERT query again with YOUR email
Clear browser cookies and refresh
```

### "File upload not working"
```bash
Solution: Verify buckets created
- Supabase → Storage
- Check all 5 buckets exist
- Make sure they're PRIVATE
```

### "Emails not sending"
```bash
Solution: 
1. Get API key from resend.com
2. Add to RESEND_API_KEY
3. Verify sender email correct
4. Check rate limit: 100/day
```

---

## File Reference

| File | Purpose |
|------|---------|
| `/supabase/migrations/001_initial_schema.sql` | Database creation |
| `.env.example` | Environment variables template |
| `/SUPABASE_SETUP.md` | Detailed setup guide |
| `/ARCHITECTURE.md` | Technical architecture |
| `/DEPLOYMENT_CHECKLIST.md` | Pre-launch checklist |

---

## Architecture at a Glance

```
Your Application (Next.js)
        ↓
   [Vercel] ← Hosting
        ↓
   [Middleware] ← Route Protection
        ↓
    [API Routes]
        ↓
  [Supabase] ← Database (PostgreSQL)
  ├─ Auth (Email/Password)
  ├─ Database (14 tables)
  ├─ Storage (5 buckets)
  └─ RLS (Security)
        ↓
  [Resend] ← Email Service
```

---

## Next: Premium UI Redesign

After setup, we'll redesign the entire application with:
- Luxury, minimal, corporate aesthetic
- Bento grids and advanced animations
- Glassmorphism and premium effects
- World-class UI/UX
- Target: Apple/Stripe/Linear quality

---

## Support

- **Setup Help**: `SUPABASE_SETUP.md` (detailed)
- **Technical Docs**: `ARCHITECTURE.md`
- **Pre-Launch**: `DEPLOYMENT_CHECKLIST.md`
- **Supabase**: https://supabase.com/docs
- **Vercel**: https://vercel.com/docs

---

## You're Ready! 🚀

After these 9 steps, you'll have:
- ✅ Production database running
- ✅ Admin authentication working
- ✅ Storage buckets functional
- ✅ Email service active
- ✅ Application deployed
- ✅ Live on your domain

**Expected time**: 45 minutes start to finish

**Next step**: Begin Phase 2 - Premium UI/UX Redesign

---

Created: January 22, 2025
Status: ✅ Ready to Deploy
Time to Production: ~45 minutes
