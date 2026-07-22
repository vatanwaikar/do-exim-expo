// Supabase Generated Types - DO NOT MODIFY MANUALLY
// These will be auto-generated after connecting Supabase

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: 'super_admin' | 'admin' | 'moderator'
          permissions: Json
          avatar_url: string | null
          created_at: string
          updated_at: string
          last_login: string | null
        }
        Insert: {
          id?: string
          email: string
          full_name?: string | null
          role?: 'super_admin' | 'admin' | 'moderator'
          permissions?: Json
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          last_login?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: 'super_admin' | 'admin' | 'moderator'
          permissions?: Json
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          last_login?: string | null
        }
      }
      expos: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          start_date: string
          end_date: string
          location: string | null
          status: 'draft' | 'live' | 'completed'
          image_url: string | null
          created_at: string
          updated_at: string
          deleted_at: string | null
          created_by: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          start_date: string
          end_date: string
          location?: string | null
          status?: 'draft' | 'live' | 'completed'
          image_url?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
          created_by: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          start_date?: string
          end_date?: string
          location?: string | null
          status?: 'draft' | 'live' | 'completed'
          image_url?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
          created_by?: string
        }
      }
      exhibitors: {
        Row: {
          id: string
          expo_id: string
          company_name: string
          email: string
          phone: string
          country: string
          industry: string
          booth_size: 'small' | 'medium' | 'large' | 'premium'
          website: string | null
          description: string | null
          logo_url: string | null
          brochure_url: string | null
          employee_count: number | null
          registration_date: string
          payment_status: 'pending' | 'completed' | 'failed'
          qr_code: string | null
          notes: string | null
          created_at: string
          updated_at: string
          deleted_at: string | null
          created_by: string | null
        }
        Insert: {
          id?: string
          expo_id: string
          company_name: string
          email: string
          phone: string
          country: string
          industry: string
          booth_size?: 'small' | 'medium' | 'large' | 'premium'
          website?: string | null
          description?: string | null
          logo_url?: string | null
          brochure_url?: string | null
          employee_count?: number | null
          registration_date?: string
          payment_status?: 'pending' | 'completed' | 'failed'
          qr_code?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
          created_by?: string | null
        }
        Update: {
          id?: string
          expo_id?: string
          company_name?: string
          email?: string
          phone?: string
          country?: string
          industry?: string
          booth_size?: 'small' | 'medium' | 'large' | 'premium'
          website?: string | null
          description?: string | null
          logo_url?: string | null
          brochure_url?: string | null
          employee_count?: number | null
          registration_date?: string
          payment_status?: 'pending' | 'completed' | 'failed'
          qr_code?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
          created_by?: string | null
        }
      }
      visitors: {
        Row: {
          id: string
          expo_id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          country: string
          company: string
          job_title: string
          industry: string
          interests: string[] | null
          visit_reason: string | null
          registration_date: string
          check_in_at: string | null
          pass_type: 'standard' | 'vip' | 'premium'
          qr_code: string | null
          notes: string | null
          created_at: string
          updated_at: string
          deleted_at: string | null
          created_by: string | null
        }
        Insert: {
          id?: string
          expo_id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          country: string
          company: string
          job_title: string
          industry: string
          interests?: string[] | null
          visit_reason?: string | null
          registration_date?: string
          check_in_at?: string | null
          pass_type?: 'standard' | 'vip' | 'premium'
          qr_code?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
          created_by?: string | null
        }
        Update: {
          id?: string
          expo_id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          country?: string
          company?: string
          job_title?: string
          industry?: string
          interests?: string[] | null
          visit_reason?: string | null
          registration_date?: string
          check_in_at?: string | null
          pass_type?: 'standard' | 'vip' | 'premium'
          qr_code?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
          created_by?: string | null
        }
      }
      sponsors: {
        Row: {
          id: string
          expo_id: string
          company_name: string
          email: string
          phone: string
          level: 'platinum' | 'gold' | 'silver' | 'bronze'
          website: string | null
          description: string | null
          logo_url: string | null
          booth_included: boolean
          payment_status: 'pending' | 'completed' | 'failed'
          benefits: string[] | null
          contact_person: string | null
          contact_title: string | null
          created_at: string
          updated_at: string
          deleted_at: string | null
          created_by: string | null
        }
        Insert: {
          id?: string
          expo_id: string
          company_name: string
          email: string
          phone: string
          level?: 'platinum' | 'gold' | 'silver' | 'bronze'
          website?: string | null
          description?: string | null
          logo_url?: string | null
          booth_included?: boolean
          payment_status?: 'pending' | 'completed' | 'failed'
          benefits?: string[] | null
          contact_person?: string | null
          contact_title?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
          created_by?: string | null
        }
        Update: {
          id?: string
          expo_id?: string
          company_name?: string
          email?: string
          phone?: string
          level?: 'platinum' | 'gold' | 'silver' | 'bronze'
          website?: string | null
          description?: string | null
          logo_url?: string | null
          booth_included?: boolean
          payment_status?: 'pending' | 'completed' | 'failed'
          benefits?: string[] | null
          contact_person?: string | null
          contact_title?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
          created_by?: string | null
        }
      }
      buyers: {
        Row: {
          id: string
          expo_id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          company: string
          country: string
          product_interests: string[] | null
          budget_range: string | null
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          expo_id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          company: string
          country: string
          product_interests?: string[] | null
          budget_range?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          expo_id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          company?: string
          country?: string
          product_interests?: string[] | null
          budget_range?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      workshops: {
        Row: {
          id: string
          expo_id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          company: string
          job_title: string
          experience_level: 'beginner' | 'intermediate' | 'advanced'
          workshop_selections: string[] | null
          special_requests: string | null
          dietary_restrictions: string | null
          registration_date: string
          payment_status: 'pending' | 'completed' | 'failed'
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          expo_id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          company: string
          job_title: string
          experience_level?: 'beginner' | 'intermediate' | 'advanced'
          workshop_selections?: string[] | null
          special_requests?: string | null
          dietary_restrictions?: string | null
          registration_date?: string
          payment_status?: 'pending' | 'completed' | 'failed'
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          expo_id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          company?: string
          job_title?: string
          experience_level?: 'beginner' | 'intermediate' | 'advanced'
          workshop_selections?: string[] | null
          special_requests?: string | null
          dietary_restrictions?: string | null
          registration_date?: string
          payment_status?: 'pending' | 'completed' | 'failed'
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      speakers: {
        Row: {
          id: string
          expo_id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          company: string
          job_title: string
          bio: string | null
          photo_url: string | null
          expertise: string[] | null
          social_linkedin: string | null
          social_twitter: string | null
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          expo_id: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          company: string
          job_title: string
          bio?: string | null
          photo_url?: string | null
          expertise?: string[] | null
          social_linkedin?: string | null
          social_twitter?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          expo_id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          company?: string
          job_title?: string
          bio?: string | null
          photo_url?: string | null
          expertise?: string[] | null
          social_linkedin?: string | null
          social_twitter?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      events: {
        Row: {
          id: string
          expo_id: string
          title: string
          description: string | null
          start_time: string
          end_time: string
          location: string | null
          speaker_id: string | null
          event_type: 'keynote' | 'panel' | 'workshop' | 'networking' | 'seminar'
          capacity: number | null
          registered_count: number
          image_url: string | null
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          expo_id: string
          title: string
          description?: string | null
          start_time: string
          end_time: string
          location?: string | null
          speaker_id?: string | null
          event_type?: 'keynote' | 'panel' | 'workshop' | 'networking' | 'seminar'
          capacity?: number | null
          registered_count?: number
          image_url?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          expo_id?: string
          title?: string
          description?: string | null
          start_time?: string
          end_time?: string
          location?: string | null
          speaker_id?: string | null
          event_type?: 'keynote' | 'panel' | 'workshop' | 'networking' | 'seminar'
          capacity?: number | null
          registered_count?: number
          image_url?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      gallery: {
        Row: {
          id: string
          expo_id: string
          title: string
          description: string | null
          image_url: string
          category: string
          order: number | null
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          expo_id: string
          title: string
          description?: string | null
          image_url: string
          category: string
          order?: number | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          expo_id?: string
          title?: string
          description?: string | null
          image_url?: string
          category?: string
          order?: number | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      blog_posts: {
        Row: {
          id: string
          expo_id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          featured_image_url: string | null
          author_id: string
          category: string
          status: 'draft' | 'published' | 'archived'
          published_at: string | null
          view_count: number
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          expo_id: string
          title: string
          slug: string
          content: string
          excerpt?: string | null
          featured_image_url?: string | null
          author_id: string
          category: string
          status?: 'draft' | 'published' | 'archived'
          published_at?: string | null
          view_count?: number
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          expo_id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string | null
          featured_image_url?: string | null
          author_id?: string
          category?: string
          status?: 'draft' | 'published' | 'archived'
          published_at?: string | null
          view_count?: number
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          expo_id: string | null
          email: string
          name: string | null
          status: 'subscribed' | 'unsubscribed' | 'bounced'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          expo_id?: string | null
          email: string
          name?: string | null
          status?: 'subscribed' | 'unsubscribed' | 'bounced'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          expo_id?: string | null
          email?: string
          name?: string | null
          status?: 'subscribed' | 'unsubscribed' | 'bounced'
          created_at?: string
          updated_at?: string
        }
      }
      contact_enquiries: {
        Row: {
          id: string
          expo_id: string | null
          name: string
          email: string
          phone: string | null
          company: string | null
          subject: string
          message: string
          status: 'new' | 'in_progress' | 'resolved'
          assigned_to: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          expo_id?: string | null
          name: string
          email: string
          phone?: string | null
          company?: string | null
          subject: string
          message: string
          status?: 'new' | 'in_progress' | 'resolved'
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          expo_id?: string | null
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          subject?: string
          message?: string
          status?: 'new' | 'in_progress' | 'resolved'
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      audit_logs: {
        Row: {
          id: string
          admin_id: string | null
          action: string
          table_name: string | null
          record_id: string | null
          old_values: Json | null
          new_values: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          admin_id?: string | null
          action: string
          table_name?: string | null
          record_id?: string | null
          old_values?: Json | null
          new_values?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          admin_id?: string | null
          action?: string
          table_name?: string | null
          record_id?: string | null
          old_values?: Json | null
          new_values?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
    CompositeTypes: {}
  }
}
