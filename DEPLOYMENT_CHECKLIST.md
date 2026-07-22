# DoExim Expo - Deployment Checklist

Complete this checklist before deploying to production.

## Phase 1: Supabase Setup ✓

- [ ] Create Supabase account at https://supabase.com
- [ ] Create new project (region: ap-southeast-1 for India)
- [ ] Get NEXT_PUBLIC_SUPABASE_URL
- [ ] Get NEXT_PUBLIC_SUPABASE_ANON_KEY
- [ ] Get SUPABASE_SERVICE_ROLE_KEY
- [ ] Run SQL migrations from `/supabase/migrations/001_initial_schema.sql`
- [ ] Create 5 storage buckets: logos, brochures, gallery, speakers, documents
- [ ] Enable Email Authentication
- [ ] Create super_admin user in admins table
- [ ] Create first expo event in expos table
- [ ] Verify RLS policies are active

## Phase 2: Resend Email Setup ✓

- [ ] Create account at https://resend.com
- [ ] Get RESEND_API_KEY
- [ ] Verify sender domain (optional but recommended)
- [ ] Test email sending from dashboard
- [ ] Add domain DKIM records for authentication

## Phase 3: Environment Variables ✓

### Local Development

- [ ] Copy `.env.example` to `.env.local`
- [ ] Add NEXT_PUBLIC_SUPABASE_URL
- [ ] Add NEXT_PUBLIC_SUPABASE_ANON_KEY
- [ ] Add SUPABASE_SERVICE_ROLE_KEY
- [ ] Add RESEND_API_KEY
- [ ] Add NEXT_PUBLIC_APP_URL=http://localhost:3000
- [ ] Restart dev server: `Ctrl+C` then `pnpm dev`
- [ ] Verify no environment variable errors

### Vercel Production

- [ ] Go to https://vercel.com/dashboard
- [ ] Select your project
- [ ] Go to Settings → Environment Variables
- [ ] Add NEXT_PUBLIC_SUPABASE_URL
- [ ] Add NEXT_PUBLIC_SUPABASE_ANON_KEY
- [ ] Add SUPABASE_SERVICE_ROLE_KEY
- [ ] Add RESEND_API_KEY
- [ ] Add NEXT_PUBLIC_APP_URL=https://yourdomain.com
- [ ] Select all environments: Production, Preview, Development
- [ ] Redeploy application

## Phase 4: Security Audit ✓

### Secrets & Credentials

- [ ] `.env.local` file is in `.gitignore`
- [ ] No secrets committed to GitHub
- [ ] Service role key never in frontend code
- [ ] API keys rotated from trusted environment
- [ ] No hardcoded passwords in code

### Database Security

- [ ] Row Level Security policies enabled
- [ ] All tables have RLS enabled
- [ ] Admin-only tables restricted
- [ ] Public tables allow appropriate access
- [ ] Storage policies configured
- [ ] Supabase backups enabled

### API Security

- [ ] Rate limiting configured (if using Redis)
- [ ] CSRF protection middleware active
- [ ] All admin routes protected
- [ ] Middleware checking user roles
- [ ] Error messages don't leak data
- [ ] Input validation on all forms

### Frontend Security

- [ ] No console.log of sensitive data
- [ ] API keys only in environment variables
- [ ] Secure cookie configuration
- [ ] CSP headers set in vercel.json
- [ ] X-Frame-Options header set
- [ ] X-Content-Type-Options header set

## Phase 5: Performance ✓

### Lighthouse Scores

- [ ] Performance score ≥ 90
- [ ] Accessibility score ≥ 90
- [ ] Best Practices score ≥ 90
- [ ] SEO score ≥ 95
- [ ] Target: 100/100 overall

### Core Web Vitals

- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] TTFB (Time to First Byte) < 200ms

### Optimization Checklist

- [ ] Images optimized (WebP format)
- [ ] Code splitting enabled
- [ ] Unused CSS removed
- [ ] Minification enabled
- [ ] Gzip compression enabled
- [ ] CDN caching configured
- [ ] Database query optimization reviewed
- [ ] n+1 query problems identified and fixed

## Phase 6: SEO & Analytics ✓

### Meta & Structured Data

- [ ] Dynamic meta titles on all pages
- [ ] Dynamic meta descriptions
- [ ] OpenGraph tags configured
- [ ] Twitter Card tags configured
- [ ] Canonical URLs set
- [ ] Schema.org organization schema added
- [ ] Schema.org event schema added
- [ ] Schema.org FAQ schema added
- [ ] robots.txt configured
- [ ] sitemap.xml generated and submitted

### Search Console

- [ ] Google Search Console account created
- [ ] Sitemap submitted
- [ ] Domain ownership verified
- [ ] No crawl errors
- [ ] Mobile usability check passed

### Analytics

- [ ] Google Analytics 4 configured
- [ ] Vercel Analytics enabled
- [ ] Goal tracking setup
- [ ] Conversion tracking configured
- [ ] Event tracking implemented

## Phase 7: Email Configuration ✓

### Resend Setup

- [ ] API key working
- [ ] Test email sent successfully
- [ ] Sender name configured
- [ ] From email correct
- [ ] Reply-to email configured
- [ ] Unsubscribe link working
- [ ] Email templates designed
- [ ] Email deliverability > 95%

### Email Types

- [ ] Registration confirmation emails working
- [ ] Admin notification emails working
- [ ] Newsletter subscription working
- [ ] Contact form email working
- [ ] Transactional email not marked as spam

## Phase 8: Admin Panel ✓

### Authentication

- [ ] Admin login page accessible
- [ ] Email/password authentication working
- [ ] Session persists across pages
- [ ] Logout functionality working
- [ ] Protected routes redirect to login
- [ ] Super admin can access all features
- [ ] Admin role has appropriate permissions
- [ ] Moderator role has read-only access

### Dashboard Features

- [ ] Statistics displaying correctly
- [ ] Charts rendering without errors
- [ ] Registration tables loading
- [ ] Search functionality working
- [ ] Filters working correctly
- [ ] Excel export downloading
- [ ] Pagination working
- [ ] Sorting working

### Admin Actions

- [ ] Can view registrations (all types)
- [ ] Can edit registration details
- [ ] Can soft delete registrations
- [ ] Can search registrations
- [ ] Can filter by country, industry, etc.
- [ ] Can manage events
- [ ] Can manage speakers
- [ ] Can manage sponsors
- [ ] Can manage gallery

## Phase 9: Registration Forms ✓

### Form Functionality

- [ ] Exhibitor registration form working
- [ ] Visitor registration form working
- [ ] Sponsor registration form working
- [ ] Workshop registration form working
- [ ] All required fields validate
- [ ] Form submission sends data to Supabase
- [ ] Confirmation message appears
- [ ] Email confirmation sent

### Form Validation

- [ ] Email validation working
- [ ] Phone validation working
- [ ] Required field validation
- [ ] Character limit validation
- [ ] File upload validation (if applicable)
- [ ] Error messages clear and helpful
- [ ] Success state indicates completion

### Data Storage

- [ ] Exhibitors stored in exhibitors table
- [ ] Visitors stored in visitors table
- [ ] Sponsors stored in sponsors table
- [ ] Workshops stored in workshops table
- [ ] Timestamps recorded correctly
- [ ] Data visible in admin panel

## Phase 10: File Storage ✓

### Storage Buckets

- [ ] logos bucket created and accessible
- [ ] brochures bucket created and accessible
- [ ] gallery bucket created and accessible
- [ ] speakers bucket created and accessible
- [ ] documents bucket created and accessible

### File Operations

- [ ] File upload working
- [ ] File size limits enforced
- [ ] File type validation working
- [ ] Files accessible via signed URLs
- [ ] Files downloadable
- [ ] Old files can be deleted
- [ ] Storage quota monitored

## Phase 11: Monitoring & Logging ✓

### Vercel Monitoring

- [ ] Build logs accessible
- [ ] Runtime errors showing
- [ ] Deployment history visible
- [ ] Rollback capability verified
- [ ] Performance metrics monitoring
- [ ] Error rate tracking

### Database Monitoring

- [ ] Supabase dashboard accessible
- [ ] Query performance monitored
- [ ] Database size tracked
- [ ] Backup status verified
- [ ] Connection limits checked

### Error Tracking

- [ ] Error notifications configured (optional: Sentry)
- [ ] Error logs reviewed regularly
- [ ] Critical errors trigger alerts
- [ ] Error stack traces captured
- [ ] User impact assessed

## Phase 12: DNS & Domain Setup ✓

### Domain Configuration

- [ ] Domain registered and accessible
- [ ] DNS records pointing to Vercel
- [ ] SSL certificate auto-renewed
- [ ] HTTPS enforced (redirect from HTTP)
- [ ] www subdomain redirects
- [ ] Email authentication records set (SPF, DKIM, DMARC)

### SSL/TLS

- [ ] Certificate valid and not expired
- [ ] Certificate covers all subdomains
- [ ] Mixed content warnings resolved
- [ ] TLS 1.2+ enforced
- [ ] Strong cipher suites configured

## Phase 13: Testing ✓

### Browser Compatibility

- [ ] Chrome (latest) - tested
- [ ] Firefox (latest) - tested
- [ ] Safari (latest) - tested
- [ ] Edge (latest) - tested
- [ ] Mobile browsers - tested
- [ ] Responsive design working on all devices

### Device Testing

- [ ] Desktop (1920x1080) - tested
- [ ] Laptop (1366x768) - tested
- [ ] Tablet (768x1024) - tested
- [ ] Mobile (375x667) - tested
- [ ] Ultra-wide (2560x1440) - tested
- [ ] Foldable devices - tested

### User Flows

- [ ] Homepage loads and displays correctly
- [ ] Navigation working on all pages
- [ ] Registration flow complete
- [ ] Form submission successful
- [ ] Confirmation email received
- [ ] Admin login successful
- [ ] Admin dashboard accessible
- [ ] Admin can manage data

### Accessibility

- [ ] WCAG 2.1 AA compliance checked
- [ ] Keyboard navigation working
- [ ] Screen reader tested
- [ ] Color contrast ratios sufficient
- [ ] Form labels properly associated
- [ ] ALT text on all images

## Phase 14: Documentation ✓

### Internal Docs

- [ ] Setup guide complete
- [ ] API documentation updated
- [ ] Database schema documented
- [ ] Environment variables listed
- [ ] Deployment process documented
- [ ] Troubleshooting guide created
- [ ] Architecture diagrams included

### User Docs

- [ ] Registration instructions provided
- [ ] Admin guide completed
- [ ] FAQ page created
- [ ] Contact support information provided
- [ ] Terms of service drafted
- [ ] Privacy policy drafted

## Phase 15: Launch Preparation ✓

### Pre-Launch

- [ ] All tests passing
- [ ] No console errors
- [ ] All features working
- [ ] Database backed up
- [ ] Code reviewed and approved
- [ ] Load testing completed (optional)
- [ ] Backup systems ready

### Launch

- [ ] Team notified
- [ ] Monitoring systems active
- [ ] Support team briefed
- [ ] Escalation procedures defined
- [ ] Rollback plan ready
- [ ] Marketing campaign ready

### Post-Launch

- [ ] Monitor error rates closely
- [ ] Check registration volume
- [ ] Verify email delivery
- [ ] Monitor database performance
- [ ] Track user feedback
- [ ] Be ready for quick fixes

## Phase 16: Post-Launch Monitoring ✓

### First 24 Hours

- [ ] Check every 2 hours
- [ ] Monitor error rates
- [ ] Check database size
- [ ] Verify registrations working
- [ ] Check email delivery
- [ ] Monitor API response times
- [ ] Check admin panel access
- [ ] Verify file uploads

### First Week

- [ ] Daily monitoring
- [ ] Check Lighthouse scores
- [ ] Review user feedback
- [ ] Monitor performance metrics
- [ ] Check database backups
- [ ] Verify email deliverability
- [ ] Check security logs
- [ ] Review admin activity

### Ongoing

- [ ] Weekly performance review
- [ ] Monthly security audit
- [ ] Quarterly dependency updates
- [ ] Quarterly database optimization
- [ ] Regular backup verification
- [ ] User feedback review
- [ ] Cost optimization review

## Rollback Plan

If critical issues arise:

1. **Immediate**: Rollback to previous Vercel deployment
2. **Database**: Restore from Supabase backup
3. **Files**: Restore from storage backup
4. **Communication**: Notify users of status
5. **Resolution**: Fix issue and test thoroughly
6. **Redeploy**: Only after full testing

---

## Sign-off

- [ ] Project Owner: _________________ Date: _______
- [ ] Tech Lead: _________________ Date: _______
- [ ] Security Officer: _________________ Date: _______
- [ ] QA Lead: _________________ Date: _______

**Status**: Ready for Production Deployment
**Date**: ________________
**Version**: 1.0.0
