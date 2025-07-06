import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send } from 'lucide-react'
import { subscribeToNewsletter, updateLeadScore } from '../../lib/api'

interface NewsletterFormData {
  email: string
  name?: string
}

export const NewsletterForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NewsletterFormData>()

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true)
    
    try {
      const result = await subscribeToNewsletter(data.email, data.name)
      
      if (result.success && !result.alreadySubscribed) {
        reset()
        await updateLeadScore(data.email, 'newsletter_subscription', 5)
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto flex gap-4">
      <input
        type="email"
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
        placeholder="Enter your email address"
        className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-emerald-300 focus:outline-none"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-600"></div>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Subscribe
          </>
        )}
      </button>
    </form>
  )
}