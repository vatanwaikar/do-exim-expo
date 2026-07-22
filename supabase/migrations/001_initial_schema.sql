-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- ENUMS
-- ============================================

CREATE TYPE admin_role AS ENUM ('super_admin', 'admin', 'moderator');
CREATE TYPE booth_size AS ENUM ('small', 'medium', 'large', 'premium');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed');
CREATE TYPE pass_type AS ENUM ('standard', 'vip', 'premium');
CREATE TYPE sponsor_level AS ENUM ('platinum', 'gold', 'silver', 'bronze');
CREATE TYPE expo_status AS ENUM ('draft', 'live', 'completed');
CREATE TYPE event_type AS ENUM ('keynote', 'panel', 'workshop', 'networking', 'seminar');
CREATE TYPE experience_level AS ENUM ('beginner', 'intermediate', 'advanced');
CREATE TYPE blog_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE newsletter_status AS ENUM ('subscribed', 'unsubscribed', 'bounced');
CREATE TYPE contact_status AS ENUM ('new', 'in_progress', 'resolved');

-- ============================================
-- ADMINS TABLE
-- ============================================

CREATE TABLE admins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role admin_role DEFAULT 'moderator',
  permissions JSONB DEFAULT '{}',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP WITH TIME ZONE,
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_admins_email ON admins(email);
CREATE INDEX idx_admins_role ON admins(role);
CREATE INDEX idx_admins_deleted_at ON admins(deleted_at);

-- ============================================
-- EXPOS TABLE
-- ============================================

CREATE TABLE expos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  status expo_status DEFAULT 'draft',
  image_url TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE,
  created_by UUID NOT NULL REFERENCES admins(id)
);

CREATE INDEX idx_expos_slug ON expos(slug);
CREATE INDEX idx_expos_status ON expos(status);
CREATE INDEX idx_expos_deleted_at ON expos(deleted_at);

-- ============================================
-- EXHIBITORS TABLE
-- ============================================

CREATE TABLE exhibitors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID NOT NULL REFERENCES expos(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  industry TEXT NOT NULL,
  booth_size booth_size DEFAULT 'small',
  website TEXT,
  description TEXT,
  logo_url TEXT,
  brochure_url TEXT,
  employee_count INTEGER,
  registration_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  payment_status payment_status DEFAULT 'pending',
  qr_code TEXT UNIQUE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE,
  created_by TEXT
);

CREATE INDEX idx_exhibitors_expo_id ON exhibitors(expo_id);
CREATE INDEX idx_exhibitors_email ON exhibitors(email);
CREATE INDEX idx_exhibitors_country ON exhibitors(country);
CREATE INDEX idx_exhibitors_industry ON exhibitors(industry);
CREATE INDEX idx_exhibitors_payment_status ON exhibitors(payment_status);
CREATE INDEX idx_exhibitors_deleted_at ON exhibitors(deleted_at);

-- ============================================
-- VISITORS TABLE
-- ============================================

CREATE TABLE visitors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID NOT NULL REFERENCES expos(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  company TEXT NOT NULL,
  job_title TEXT NOT NULL,
  industry TEXT NOT NULL,
  interests TEXT[] DEFAULT '{}',
  visit_reason TEXT,
  registration_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  check_in_at TIMESTAMP WITH TIME ZONE,
  pass_type pass_type DEFAULT 'standard',
  qr_code TEXT UNIQUE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE,
  created_by TEXT
);

CREATE INDEX idx_visitors_expo_id ON visitors(expo_id);
CREATE INDEX idx_visitors_email ON visitors(email);
CREATE INDEX idx_visitors_country ON visitors(country);
CREATE INDEX idx_visitors_industry ON visitors(industry);
CREATE INDEX idx_visitors_deleted_at ON visitors(deleted_at);

-- ============================================
-- SPONSORS TABLE
-- ============================================

CREATE TABLE sponsors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID NOT NULL REFERENCES expos(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  level sponsor_level DEFAULT 'bronze',
  website TEXT,
  description TEXT,
  logo_url TEXT,
  booth_included BOOLEAN DEFAULT FALSE,
  payment_status payment_status DEFAULT 'pending',
  benefits TEXT[] DEFAULT '{}',
  contact_person TEXT,
  contact_title TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE,
  created_by TEXT
);

CREATE INDEX idx_sponsors_expo_id ON sponsors(expo_id);
CREATE INDEX idx_sponsors_email ON sponsors(email);
CREATE INDEX idx_sponsors_level ON sponsors(level);
CREATE INDEX idx_sponsors_deleted_at ON sponsors(deleted_at);

-- ============================================
-- BUYERS TABLE
-- ============================================

CREATE TABLE buyers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID NOT NULL REFERENCES expos(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  country TEXT NOT NULL,
  product_interests TEXT[] DEFAULT '{}',
  budget_range TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_buyers_expo_id ON buyers(expo_id);
CREATE INDEX idx_buyers_email ON buyers(email);
CREATE INDEX idx_buyers_deleted_at ON buyers(deleted_at);

-- ============================================
-- WORKSHOPS TABLE
-- ============================================

CREATE TABLE workshops (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID NOT NULL REFERENCES expos(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  job_title TEXT NOT NULL,
  experience_level experience_level DEFAULT 'beginner',
  workshop_selections TEXT[] DEFAULT '{}',
  special_requests TEXT,
  dietary_restrictions TEXT,
  registration_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  payment_status payment_status DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_workshops_expo_id ON workshops(expo_id);
CREATE INDEX idx_workshops_email ON workshops(email);
CREATE INDEX idx_workshops_deleted_at ON workshops(deleted_at);

-- ============================================
-- SPEAKERS TABLE
-- ============================================

CREATE TABLE speakers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID NOT NULL REFERENCES expos(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  job_title TEXT NOT NULL,
  bio TEXT,
  photo_url TEXT,
  expertise TEXT[] DEFAULT '{}',
  social_linkedin TEXT,
  social_twitter TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_speakers_expo_id ON speakers(expo_id);
CREATE INDEX idx_speakers_email ON speakers(email);
CREATE INDEX idx_speakers_deleted_at ON speakers(deleted_at);

-- ============================================
-- EVENTS TABLE
-- ============================================

CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID NOT NULL REFERENCES expos(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  speaker_id UUID REFERENCES speakers(id) ON DELETE SET NULL,
  event_type event_type DEFAULT 'seminar',
  capacity INTEGER,
  registered_count INTEGER DEFAULT 0,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_events_expo_id ON events(expo_id);
CREATE INDEX idx_events_speaker_id ON events(speaker_id);
CREATE INDEX idx_events_start_time ON events(start_time);
CREATE INDEX idx_events_deleted_at ON events(deleted_at);

-- ============================================
-- GALLERY TABLE
-- ============================================

CREATE TABLE gallery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID NOT NULL REFERENCES expos(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL,
  "order" INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_gallery_expo_id ON gallery(expo_id);
CREATE INDEX idx_gallery_category ON gallery(category);
CREATE INDEX idx_gallery_deleted_at ON gallery(deleted_at);

-- ============================================
-- BLOG_POSTS TABLE
-- ============================================

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID NOT NULL REFERENCES expos(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image_url TEXT,
  author_id UUID NOT NULL REFERENCES admins(id),
  category TEXT NOT NULL,
  status blog_status DEFAULT 'draft',
  published_at TIMESTAMP WITH TIME ZONE,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(expo_id, slug)
);

CREATE INDEX idx_blog_posts_expo_id ON blog_posts(expo_id);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_author_id ON blog_posts(author_id);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX idx_blog_posts_deleted_at ON blog_posts(deleted_at);

-- ============================================
-- NEWSLETTER_SUBSCRIBERS TABLE
-- ============================================

CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID REFERENCES expos(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  name TEXT,
  status newsletter_status DEFAULT 'subscribed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(email, expo_id)
);

CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_subscribers_status ON newsletter_subscribers(status);
CREATE INDEX idx_newsletter_subscribers_expo_id ON newsletter_subscribers(expo_id);

-- ============================================
-- CONTACT_ENQUIRIES TABLE
-- ============================================

CREATE TABLE contact_enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expo_id UUID REFERENCES expos(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status contact_status DEFAULT 'new',
  assigned_to UUID REFERENCES admins(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contact_enquiries_email ON contact_enquiries(email);
CREATE INDEX idx_contact_enquiries_status ON contact_enquiries(status);
CREATE INDEX idx_contact_enquiries_assigned_to ON contact_enquiries(assigned_to);
CREATE INDEX idx_contact_enquiries_expo_id ON contact_enquiries(expo_id);

-- ============================================
-- AUDIT_LOGS TABLE
-- ============================================

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_id UUID REFERENCES admins(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  table_name TEXT,
  record_id TEXT,
  old_values JSONB,
  new_values JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_logs_admin_id ON audit_logs(admin_id);
CREATE INDEX idx_audit_logs_table_name ON audit_logs(table_name);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);

-- ============================================
-- UPDATE TIMESTAMP TRIGGERS
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_admins_updated_at BEFORE UPDATE ON admins
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_expos_updated_at BEFORE UPDATE ON expos
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_exhibitors_updated_at BEFORE UPDATE ON exhibitors
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_visitors_updated_at BEFORE UPDATE ON visitors
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sponsors_updated_at BEFORE UPDATE ON sponsors
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_buyers_updated_at BEFORE UPDATE ON buyers
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_workshops_updated_at BEFORE UPDATE ON workshops
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_speakers_updated_at BEFORE UPDATE ON speakers
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_gallery_updated_at BEFORE UPDATE ON gallery
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_newsletter_subscribers_updated_at BEFORE UPDATE ON newsletter_subscribers
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_enquiries_updated_at BEFORE UPDATE ON contact_enquiries
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================

-- Enable RLS
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE expos ENABLE ROW LEVEL SECURITY;
ALTER TABLE exhibitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE buyers ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshops ENABLE ROW LEVEL SECURITY;
ALTER TABLE speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Admins: Only accessible to super_admin or the admin themselves
CREATE POLICY "admins_select_policy" ON admins
  FOR SELECT
  USING (auth.jwt() ->> 'role' = 'super_admin' OR auth.uid()::text = id::text);

CREATE POLICY "admins_insert_policy" ON admins
  FOR INSERT
  WITH CHECK (auth.jwt() ->> 'role' = 'super_admin');

CREATE POLICY "admins_update_policy" ON admins
  FOR UPDATE
  USING (auth.jwt() ->> 'role' = 'super_admin')
  WITH CHECK (auth.jwt() ->> 'role' = 'super_admin');

-- Expos: Everyone can select, only admins can insert/update/delete
CREATE POLICY "expos_select_policy" ON expos
  FOR SELECT
  USING (status = 'live' OR auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

CREATE POLICY "expos_admin_all_policy" ON expos
  FOR ALL
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

-- Registrations: Everyone can insert, admins can select/update
CREATE POLICY "exhibitors_select_policy" ON exhibitors
  FOR SELECT
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin', 'moderator'));

CREATE POLICY "exhibitors_insert_policy" ON exhibitors
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "exhibitors_update_policy" ON exhibitors
  FOR UPDATE
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

CREATE POLICY "visitors_select_policy" ON visitors
  FOR SELECT
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin', 'moderator'));

CREATE POLICY "visitors_insert_policy" ON visitors
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "visitors_update_policy" ON visitors
  FOR UPDATE
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

CREATE POLICY "sponsors_select_policy" ON sponsors
  FOR SELECT
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin', 'moderator'));

CREATE POLICY "sponsors_insert_policy" ON sponsors
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "sponsors_update_policy" ON sponsors
  FOR UPDATE
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

CREATE POLICY "buyers_select_policy" ON buyers
  FOR SELECT
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin', 'moderator'));

CREATE POLICY "buyers_insert_policy" ON buyers
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "workshops_select_policy" ON workshops
  FOR SELECT
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin', 'moderator'));

CREATE POLICY "workshops_insert_policy" ON workshops
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "workshops_update_policy" ON workshops
  FOR UPDATE
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

-- Speakers, Events, Gallery: Admins can manage, public can view
CREATE POLICY "speakers_select_policy" ON speakers
  FOR SELECT
  USING (true);

CREATE POLICY "speakers_admin_policy" ON speakers
  FOR ALL
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

CREATE POLICY "events_select_policy" ON events
  FOR SELECT
  USING (true);

CREATE POLICY "events_admin_policy" ON events
  FOR ALL
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

CREATE POLICY "gallery_select_policy" ON gallery
  FOR SELECT
  USING (true);

CREATE POLICY "gallery_admin_policy" ON gallery
  FOR ALL
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

-- Blog Posts: Everyone can view published, admins can manage
CREATE POLICY "blog_posts_select_policy" ON blog_posts
  FOR SELECT
  USING (status = 'published' OR auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

CREATE POLICY "blog_posts_admin_policy" ON blog_posts
  FOR ALL
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

-- Newsletter: Anyone can subscribe, admins can manage
CREATE POLICY "newsletter_subscribers_select_policy" ON newsletter_subscribers
  FOR SELECT
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin', 'moderator'));

CREATE POLICY "newsletter_subscribers_insert_policy" ON newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);

-- Contact Enquiries: Anyone can insert, admins can view/update
CREATE POLICY "contact_enquiries_select_policy" ON contact_enquiries
  FOR SELECT
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin', 'moderator'));

CREATE POLICY "contact_enquiries_insert_policy" ON contact_enquiries
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "contact_enquiries_update_policy" ON contact_enquiries
  FOR UPDATE
  USING (auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

-- Audit Logs: Only super_admin can view
CREATE POLICY "audit_logs_select_policy" ON audit_logs
  FOR SELECT
  USING (auth.jwt() ->> 'role' = 'super_admin');

-- ============================================
-- STORAGE POLICIES
-- ============================================

-- Logos bucket
CREATE POLICY "logos_select" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'logos' AND (auth.jwt() ->> 'role' IN ('super_admin', 'admin') OR auth.role() = 'anon'));

CREATE POLICY "logos_insert" ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'logos' AND auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

-- Brochures bucket
CREATE POLICY "brochures_select" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'brochures' AND (auth.jwt() ->> 'role' IN ('super_admin', 'admin') OR auth.role() = 'anon'));

CREATE POLICY "brochures_insert" ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'brochures' AND auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

-- Gallery bucket
CREATE POLICY "gallery_select" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'gallery' AND (auth.jwt() ->> 'role' IN ('super_admin', 'admin') OR auth.role() = 'anon'));

CREATE POLICY "gallery_insert" ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'gallery' AND auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

-- Speakers bucket
CREATE POLICY "speakers_select" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'speakers' AND (auth.jwt() ->> 'role' IN ('super_admin', 'admin') OR auth.role() = 'anon'));

CREATE POLICY "speakers_insert" ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'speakers' AND auth.jwt() ->> 'role' IN ('super_admin', 'admin'));

-- Documents bucket
CREATE POLICY "documents_select" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'documents' AND auth.jwt() ->> 'role' IN ('super_admin', 'admin', 'moderator'));

CREATE POLICY "documents_insert" ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'documents' AND auth.jwt() ->> 'role' IN ('super_admin', 'admin'));
