# Supabase Setup Guide - DoExim Expo

This guide walks you through setting up Supabase for the DoExim Expo enterprise application. Follow these steps carefully.

## Phase 2 - Complete Setup Instructions

### Step 1: Create a Supabase Account & Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Sign Up"** button in the top right
3. Choose your sign-up method (Google, GitHub, or Email)
4. Verify your email if needed
5. You'll land on the **Supabase Dashboard**

### Step 2: Create a New Project

1. Click **"New Project"** button (or go to https://app.supabase.com)
2. Fill in the form:
   - **Name**: `doexim-expo` or any name you prefer
   - **Database Password**: Create a STRONG password (save this safely!)
   - **Region**: Choose closest to your users
     - India: `ap-southeast-1` (Singapore - closest)
     - US: `us-east-1`
     - Europe: `eu-central-1`
   - **Pricing Plan**: Click **"Free"** (includes 500MB database + 1GB storage)
3. Click **"Create new project"**
4. Wait 2-3 minutes for the project to initialize

### Step 3: Get Your Credentials

Once the project is created:

1. Go to **Settings** → **API** in the left sidebar
2. You'll see three important keys:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**IMPORTANT:**
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are **PUBLIC** (safe to share)
- `SUPABASE_SERVICE_ROLE_KEY` is **SECRET** (never commit to Git, never share)

3. Copy these three values and save them

### Step 4: Run Database Migrations

1. In your Supabase project, go to **SQL Editor** in the left sidebar
2. Click **"New Query"**
3. Copy the entire content from `/supabase/migrations/001_initial_schema.sql`
4. Paste it into the SQL editor
5. Click **"Run"** button (⌘+Enter or Ctrl+Enter)
6. Wait for it to complete (should show green checkmark)
7. You should see all tables created in the **"Table Editor"** section

### Step 5: Create Storage Buckets

Storage buckets are where files (logos, brochures, images) are stored.

1. Go to **Storage** in the left sidebar
2. Click **"Create a new bucket"** for each of these:
   - **Bucket name**: `logos` → Click Create
   - **Bucket name**: `brochures` → Click Create
   - **Bucket name**: `gallery` → Click Create
   - **Bucket name**: `speakers` → Click Create
   - **Bucket name**: `documents` → Click Create

For each bucket:
- Keep **"Public bucket"** toggled OFF (for security)
- Click **"Create bucket"**

### Step 6: Enable Authentication

1. Go to **Authentication** → **Providers** in the left sidebar
2. Scroll down to **Email**
3. Make sure it's **Enabled** (you should see a green toggle)
4. Settings should be:
   - Confirm email: **Enabled**
   - Double confirm changes: **Disabled**
   - Auto-confirm users: **Disabled**

### Step 7: Create Admin Super Admin User

This is the first admin account. You'll use this to log in to the admin panel.

1. Go to **SQL Editor** → **New Query**
2. Run this SQL query (replace with your email and set a password hash):

```sql
-- First, create a default admin user through Supabase Auth
-- Then run this to add them to the admins table:

INSERT INTO admins (
  email,
  full_name,
  role,
  permissions
) VALUES (
  'your-email@example.com',
  'Super Admin',
  'super_admin',
  '{
    "can_manage_admins": true,
    "can_manage_expos": true,
    "can_view_all_registrations": true,
    "can_export_data": true,
    "can_manage_content": true
  }'::jsonb
);
```

Replace `your-email@example.com` with your actual email.

3. Click **"Run"**

### Step 8: Create First Expo Event

1. Go to **SQL Editor** → **New Query**
2. Run this SQL:

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
  'International trade show connecting global businesses',
  '2025-03-15T09:00:00Z',
  '2025-03-17T18:00:00Z',
  'International Convention Center, City',
  'draft',
  (SELECT id FROM admins LIMIT 1)
);
```

3. Click **"Run"**

### Step 9: Configure Environment Variables

Now you need to tell your Next.js application about Supabase.

**For Local Development:**

1. Create a `.env.local` file in your project root (copy from `.env.example`)
2. Add these values:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**For Vercel Deployment:**

1. Go to your Vercel project: https://vercel.com/dashboard
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - **Key**: `NEXT_PUBLIC_SUPABASE_URL` → **Value**: (your Supabase URL)
   - **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY` → **Value**: (your anon key)
   - **Key**: `SUPABASE_SERVICE_ROLE_KEY` → **Value**: (your service role key)
   - **Key**: `RESEND_API_KEY` → **Value**: (your Resend API key)
   - **Key**: `NEXT_PUBLIC_APP_URL` → **Value**: (your production URL)

5. For each variable, make sure to select:
   - Environments: **Production, Preview, Development**
6. Click **"Save"**

### Step 10: Test Everything

1. **Local Test:**
   ```bash
   cd /vercel/share/v0-project
   pnpm dev
   ```
   
   Navigate to `http://localhost:3000` and:
   - Try the registration forms
   - Go to `/admin` (should redirect to login)

2. **Production Deployment:**
   ```bash
   git push
   ```
   Your Vercel deployment should automatically rebuild with the environment variables.

### Step 11: Create Admin Login Page

The admin panel will use email/password authentication. To set up your admin account:

1. Go to your app and navigate to `/auth/login`
2. Sign up with your email
3. Check your email for confirmation link
4. After confirming, you should be able to log in
5. The app will check if your email is in the `admins` table

---

## Troubleshooting

### "NEXT_PUBLIC_SUPABASE_URL is not defined"
- Make sure you added the environment variables to `.env.local`
- Restart your dev server: `Ctrl+C` then `pnpm dev`

### "Permission denied" when accessing admin panel
- Make sure your email is in the `admins` table
- Run the SQL insert query again
- Clear your browser cookies and log in again

### Storage files not uploading
- Make sure all buckets are created (logos, brochures, gallery, speakers, documents)
- Verify bucket permissions in Storage → Policies

### Database migrations failed
- Make sure you're using the complete SQL from `/supabase/migrations/001_initial_schema.sql`
- Try running smaller chunks if it times out
- Check Supabase status page for any outages

---

## Security Checklist

- [ ] Never commit `.env.local` to Git (add to `.gitignore`)
- [ ] Service role key is kept secret (never share, never expose in frontend)
- [ ] Use HTTPS in production (Vercel provides this automatically)
- [ ] Enable 2FA on your Supabase account
- [ ] Regularly review admin accounts in the admins table
- [ ] Set up Supabase backups (in Settings → Backup)

---

## What's Next?

After setup, the application includes:

- ✅ Enterprise database with all tables
- ✅ Authentication system
- ✅ Admin panel structure
- ✅ Storage for files
- ✅ Email service (Resend)
- ✅ Row Level Security policies

The Phase 1 preparation is complete. Now you can start accepting registrations, managing content, and running your expo!

---

## Helpful Resources

- Supabase Docs: https://supabase.com/docs
- Supabase SQL Editor: https://app.supabase.com/project/{project-id}/sql
- Resend Setup: https://resend.com/docs
- Vercel Environment Variables: https://vercel.com/docs/projects/environment-variables

---

## Support

If you encounter issues:
1. Check Supabase status: https://status.supabase.com
2. Visit Supabase Discord: https://discord.supabase.com
3. Check application logs in Vercel
4. Review error messages in browser console
