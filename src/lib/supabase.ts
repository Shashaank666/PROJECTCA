import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Query {
  id?: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: 'new' | 'contacted' | 'converted' | 'closed'
  is_read?: boolean
  created_at?: string
  updated_at?: string
}

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone: string
  service_type: string
  message: string
  status: 'new' | 'contacted' | 'converted' | 'closed'
  created_at?: string
  updated_at?: string
}

export interface ServiceInquiry {
  id?: string
  name: string
  email: string
  phone: string
  company_name?: string
  service_category: string
  specific_service: string
  urgency: 'low' | 'medium' | 'high'
  budget_range?: string
  preferred_contact_time?: string
  message: string
  status: 'new' | 'quoted' | 'in_progress' | 'completed'
  created_at?: string
  updated_at?: string
}

export interface NewsletterSubscription {
  id?: string
  email: string
  name?: string
  subscribed_at?: string
  status: 'active' | 'unsubscribed'
}

export interface BlogPost {
  id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  category: string
  tags: string[]
  featured_image?: string
  published: boolean
  published_at?: string
  created_at?: string
  updated_at?: string
}