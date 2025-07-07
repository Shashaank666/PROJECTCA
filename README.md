# CamphorMind - Professional CA Services Website

A modern, responsive website for chartered accountant services built with React, TypeScript, and Supabase.

## 🚀 Features

### Frontend
- **Modern React Application** with TypeScript
- **Responsive Design** with Tailwind CSS
- **Smooth Animations** with Framer Motion
- **Professional UI Components** with custom design system
- **SEO Optimized** with proper meta tags and structured data
- **Mobile-First Design** ensuring perfect mobile experience
- **Dark/Light Theme Support**

### Backend & Database
- **Supabase Backend** for real-time database and authentication
- **Contact Form Management** with lead tracking
- **Newsletter Subscription System**
- **Blog Management System**
- **Analytics & Page Tracking**
- **Lead Scoring System**
- **Admin Panel** with secure authentication

### Services Covered
1. **Company Registration** - Complete PLC registration services
2. **LLP Registration** - Limited Liability Partnership setup
3. **GST Services** - Registration, filing, and compliance (₹5000/Onwards)
4. **Income Tax Services** - ITR filing and tax planning (ITR-1: ₹1000/Onwards, ITR-4: ₹1,499/)
5. **MSME Services** - Registration and government schemes
6. **Partnership & Proprietorship** - Business registration services

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Supabase (PostgreSQL)
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd camphormind-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database**
   - Create a new Supabase project
   - Run the migration files in `supabase/migrations/`
   - This will create all necessary tables with proper RLS policies

5. **Start development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Schema

### Tables Created:
- `contact_submissions` - Contact form submissions
- `service_inquiries` - Detailed service inquiries
- `newsletter_subscriptions` - Newsletter subscribers
- `blog_posts` - Blog articles and content
- `page_views` - Analytics and page tracking
- `lead_scores` - Lead scoring and activity tracking
- `meetings` - Admin-managed meetings
- `admin_replies` - Email reply tracking

### Security:
- Row Level Security (RLS) enabled on all tables
- Public access for form submissions and newsletter
- Authenticated access for admin functions
- Proper indexes for performance optimization

## 🔐 Admin Panel

### Access:
- **URL**: `/admin/login`
- **Email**: `admin@camphormind.com`
- **Password**: `CAsingh@2010`

### Features:
- Secure authentication with session management
- View and manage all contact submissions
- Reply to queries directly from dashboard
- Meeting management system
- Real-time notifications for new submissions
- Search and filter functionality

## 📧 Email Notifications

The system automatically sends email notifications to `info@camphormind.com` when:
- Contact forms are submitted
- Service inquiries are received
- Consultation requests are made

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Set environment variables in your hosting dashboard

### Backend Setup (Supabase)
1. Create a Supabase project
2. Run the database migrations
3. Configure authentication if needed
4. Set up any additional edge functions

## 📱 Features Overview

### Contact Management
- Professional contact forms with validation
- Lead scoring and tracking
- WhatsApp integration
- Email notifications

### Service Pages
- Detailed service descriptions
- Updated pricing information
- Process explanations
- Document requirements
- Compliance information

### Blog System
- Content management
- Category and tag system
- SEO optimization
- Social sharing

### Analytics
- Page view tracking
- User behavior analysis
- Lead conversion tracking
- Performance metrics

## 🎨 Design Features

- **Professional Logo** with camphor leaf design representing clarity and focus
- **Emerald/Teal Color Scheme** for a fresh, professional look
- **3D Visual Effects** with CSS transforms and animations
- **Gradient Backgrounds** for modern aesthetic
- **Micro-interactions** for enhanced user experience
- **Professional Typography** with Inter font family
- **Mobile-Responsive** design for all screen sizes

## 📞 Contact Information

- **Phone & WhatsApp**: +91 9717366670
- **Email**: info@camphormind.com
- **Address**: Royal Residency, Mandi, Delhi - 110047
- **CAs**: CA Gaurav Singh (15+ Years) & CA Dimple Singh (13+ Years)

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── lib/                # Utilities and API functions
├── data/               # Static data and configurations
└── assets/             # Images and static assets
```

## 📄 License

This project is proprietary software for CamphorMind CA Services.

## 🤝 Support

For technical support or business inquiries, contact:
- Email: info@camphormind.com
- Phone: +91 9717366670