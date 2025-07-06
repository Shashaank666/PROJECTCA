import { supabase, Query } from './supabase'
import { sendEmailNotification } from './emailService'
import toast from 'react-hot-toast'

// Unified Query Submission (replaces contact form and service inquiry)
export const submitQuery = async (data: Omit<Query, 'id' | 'created_at' | 'updated_at' | 'is_read'>) => {
  try {
    const { error } = await supabase
      .from('queries')
      .insert([{ ...data, status: 'new', is_read: false }])

    if (error) throw error

    // Send email notification to admin
    await sendEmailNotification({
      name: data.name,
      email: data.email,
      phone: data.phone,
      serviceType: data.service,
      message: data.message,
      submissionType: 'contact',
      submittedAt: new Date().toISOString()
    });

    toast.success('Thank you for your inquiry! We will contact you within 24 hours.')
    return { success: true }
  } catch (error) {
    console.error('Error submitting query:', error)
    toast.error('Failed to submit form. Please try again or call us directly.')
    return { success: false, error }
  }
}

// Legacy function for backward compatibility
export const submitContactForm = async (data: { name: string; email: string; phone: string; service_type: string; message: string }) => {
  return submitQuery({
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service_type,
    message: data.message,
    status: 'new'
  });
}

// Legacy function for backward compatibility
export const submitServiceInquiry = async (data: any) => {
  return submitQuery({
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.specific_service || data.service_category,
    message: data.message,
    status: 'new'
  });
}

// Newsletter Subscription
export const subscribeToNewsletter = async (email: string, name?: string) => {
  try {
    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_subscriptions')
      .select('id')
      .eq('email', email)
      .single()

    if (existing) {
      toast.info('You are already subscribed to our newsletter!')
      return { success: true, alreadySubscribed: true }
    }

    const { error } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email, name, status: 'active' }])

    if (error) throw error

    toast.success('Successfully subscribed to our newsletter!')
    return { success: true }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    toast.error('Failed to subscribe. Please try again.')
    return { success: false, error }
  }
}

// Get Blog Posts
export const getBlogPosts = async (limit?: number) => {
  try {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })

    if (limit) {
      query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return { success: false, error }
  }
}

// Analytics tracking
export const trackPageView = async (page: string) => {
  try {
    const { error } = await supabase
      .from('page_views')
      .insert([{ 
        page, 
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent 
      }])

    if (error) throw error
  } catch (error) {
    // Silently fail for analytics to not disrupt user experience
    console.log('Page view tracking skipped:', error)
  }
}

// Lead scoring
export const updateLeadScore = async (email: string, action: string, points: number) => {
  try {
    const { data: existing } = await supabase
      .from('lead_scores')
      .select('*')
      .eq('email', email)
      .single()

    if (existing) {
      const { error } = await supabase
        .from('lead_scores')
        .update({ 
          score: existing.score + points,
          last_activity: new Date().toISOString(),
          activities: [...existing.activities, { action, points, timestamp: new Date().toISOString() }]
        })
        .eq('email', email)

      if (error) throw error
    } else {
      const { error } = await supabase
        .from('lead_scores')
        .insert([{
          email,
          score: points,
          last_activity: new Date().toISOString(),
          activities: [{ action, points, timestamp: new Date().toISOString() }]
        }])

      if (error) throw error
    }
  } catch (error) {
    console.error('Error updating lead score:', error)
  }
}