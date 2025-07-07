import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeroGeometric } from '../components/ui/shape-landing-hero';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { PricingSection } from '../components/sections/PricingSection';
import { 
  Building2, 
  Users, 
  Receipt, 
  Calculator, 
  Factory, 
  Handshake,
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Phone,
  Search,
  FileText,
  Target,
  Zap,
  Quote,
  GraduationCap,
  Briefcase,
  MapPin,
  Mail
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Calculator,
      title: "Income Tax Return Filing by CA",
      description: "Professional ITR filing services by qualified chartered accountants in Delhi with expert tax planning and compliance",
      features: ["ITR-1: ₹1,000/Onwards", "ITR-4: ₹1,499/", "Tax Planning & Advisory", "Quick Refund Processing"],
      link: "/services/income-tax",
      gradient: "from-orange-500 to-red-500",
      price: "Starting from ₹1,000",
      seoKeywords: "income tax return filing by CA, ITR filing delhi, tax consultant near me"
    },
    {
      icon: Receipt,
      title: "GST Registration & Compliance",
      description: "Complete GST registration and monthly return filing services by experienced CA in Delhi with full compliance support",
      features: ["GST Registration: ₹5,000/Onwards", "Monthly/Annual Returns", "Compliance Management", "Audit Support"],
      link: "/services/gst-services",
      gradient: "from-green-500 to-emerald-500",
      price: "GST Registration: ₹5,000/Onwards",
      seoKeywords: "GST registration delhi, GST compliance, CA near me"
    },
    {
      icon: Building2,
      title: "Company Registration Services",
      description: "Complete company registration services in Delhi including PLC registration with DSC, DIN, and MCA compliance by expert CA",
      features: ["Digital Signature Certificate", "Director Identification Number", "MCA Registration", "Certificate of Practice"],
      link: "/services/company-registration",
      gradient: "from-emerald-500 to-teal-500",
      price: "Starting from ₹6,999",
      seoKeywords: "company registration delhi, private limited company registration, CA services"
    },
    {
      icon: Users,
      title: "Business Consultancy & Advisory",
      description: "Expert business consultancy and financial advisory services by top chartered accountants in Delhi for business growth",
      features: ["Financial Planning", "Business Strategy", "Compliance Advisory", "Growth Consulting"],
      link: "/services/llp-registration",
      gradient: "from-purple-500 to-pink-500",
      price: "Starting from ₹5,999",
      seoKeywords: "business consultancy delhi, financial advisory, chartered accountant near me"
    },
    {
      icon: Factory,
      title: "MSME Registration & Benefits",
      description: "MSME registration services with loan benefits and government scheme assistance by qualified CA in Delhi",
      features: ["MSME Registration", "Loan Documentation", "Government Schemes", "Subsidy Applications"],
      link: "/services/msme-services",
      gradient: "from-indigo-500 to-purple-500",
      price: "Starting from ₹1,999",
      seoKeywords: "MSME registration delhi, small business registration, CA services near me"
    },
    {
      icon: Handshake,
      title: "Partnership & Proprietorship",
      description: "Partnership and proprietorship firm registration services with complete legal documentation by expert CA",
      features: ["Proprietorship Setup", "Partnership Formation", "Legal Compliance", "Registration Process"],
      link: "/services/partnership-proprietorship",
      gradient: "from-teal-500 to-emerald-500",
      price: "Starting from ₹2,999",
      seoKeywords: "partnership registration delhi, proprietorship registration, business setup"
    }
  ];

  const workingProcess = [
    {
      step: "01",
      title: "Free Consultation & Requirement Analysis",
      description: "Book a free consultation with our expert chartered accountants to understand your business needs and get personalized advice",
      icon: Search,
      features: ["Free Initial Consultation", "Requirement Assessment", "Expert Guidance", "Customized Solutions"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      step: "02",
      title: "Documentation & Planning",
      description: "Our CA team prepares all necessary documents and creates a comprehensive plan for your business requirements",
      icon: Target,
      features: ["Document Preparation", "Compliance Planning", "Timeline Creation", "Cost Estimation"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Professional Execution & Filing",
      description: "Expert execution of all processes with government authorities ensuring 100% compliance and timely completion",
      icon: FileText,
      features: ["Government Filing", "Compliance Monitoring", "Status Updates", "Quality Assurance"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Ongoing Support & Advisory",
      description: "Continuous support and advisory services to ensure your business remains compliant and grows successfully",
      icon: Zap,
      features: ["24/7 Support", "Regular Updates", "Advisory Services", "Compliance Reminders"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "1000+", label: "Satisfied Clients", icon: Users },
    { number: "500+", label: "Companies Registered", icon: Building2 },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Success Rate", icon: TrendingUp }
  ];

  const expertTeam = [
    {
      name: "CA Gaurav Singh",
      position: "Senior Partner & Founder",
      experience: "15+ Years",
      rating: 4.9,
      certifications: ["FCA", "DISA", "CPA"],
      specialization: "Corporate Law, Tax Planning, Financial Advisory, Company Registration",
      image: "/WhatsApp Image 2025-06-20 at 10.39.20_44bf162f.jpg",
      badges: ["Top CA in Delhi", "Company Law Expert", "Tax Planning Specialist"],
      achievements: "500+ Companies Registered",
      location: "Delhi, India"
    },
    {
      name: "CA Dimple Singh",
      position: "Partner - Tax & Compliance",
      experience: "13+ Years",
      rating: 4.8,
      certifications: ["ACA", "ACMA", "DISA"],
      specialization: "GST Compliance, Income Tax Filing, Audit & Assurance, Business Advisory",
      image: "/WhatsApp Image 2025-06-20 at 10.01.39_fff339d4.jpg",
      badges: ["GST Expert", "ITR Filing Specialist", "Compliance Pro"],
      achievements: "1000+ Tax Returns Filed",
      location: "Delhi, India"
    }
  ];

  const localSEOContent = {
    tagline: "Delhi's Most Trusted Chartered Accountants - Your Success, Our Expertise!",
    headline: "Top Chartered Accountant in Delhi | CA Gaurav Singh & CA Dimple Singh",
    subheadline: "Expert CA Services Near You - ITR Filing, GST Registration, Company Registration & Business Consultancy",
    description: "Looking for the best chartered accountant near you in Delhi? CamphorMind offers professional CA services including Income Tax Return Filing, GST Registration, Company Registration, and Business Consultancy. With 15+ years of experience and 1000+ satisfied clients, we are your trusted CA partners in Delhi.",
    cta: "Book Your FREE Consultation Today!"
  };

  return (
    <div className="min-h-screen">
      {/* SEO-Optimized Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-teal-500/[0.08] blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.15] mb-8 md:mb-12 backdrop-blur-sm"
            >
              <MapPin className="h-4 w-4 fill-emerald-400/80 text-emerald-400" />
              <span className="text-sm text-white/80 tracking-wide font-medium">
                {localSEOContent.tagline}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                  {localSEOContent.headline.split('|')[0]}
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white/95 to-teal-300">
                  {localSEOContent.headline.split('|')[1]}
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl text-emerald-100 mb-4 leading-relaxed font-medium">
                {localSEOContent.subheadline}
              </h2>
              <p className="text-base sm:text-lg text-white/70 mb-10 leading-relaxed font-light max-w-4xl mx-auto px-4">
                {localSEOContent.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm border border-white/10"
              >
                <span className="flex items-center gap-2">
                  {localSEOContent.cta}
                  <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              <a
                href="tel:+919717366670"
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/30 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: +91 9717366670
                </span>
              </a>
            </motion.div>

            {/* Local Business Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">Royal Residency, Mandi, Delhi - 110047</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">info@camphormind.com</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30 pointer-events-none" />
      </section>

      {/* Trust Indicators with SEO Keywords */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why We Are the Top Chartered Accountant Choice in Delhi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by 1000+ clients across Delhi for professional CA services with proven expertise and results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-Optimized Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional CA Services in Delhi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive chartered accountant services by qualified CAs near you in Delhi with expert guidance and compliance support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {service.price}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:translate-x-2 transition-all duration-300"
                  >
                    Learn More & Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>

                  {/* SEO Keywords (hidden) */}
                  <div className="sr-only">{service.seoKeywords}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team Section with Local SEO */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Delhi's Top Chartered Accountants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified CA professionals bring decades of combined experience in accounting, taxation, and business advisory services in Delhi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {expertTeam.map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 hover:rotate-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-6 mb-8">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={expert.image}
                            alt={`${expert.name} - Top Chartered Accountant in Delhi`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {expert.name}
                        </h3>
                        <p className="text-emerald-600 font-semibold mb-2">
                          {expert.position}
                        </p>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{expert.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold text-gray-900">{expert.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm text-gray-600">{expert.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {expert.certifications.map((cert, idx) => (
                            <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800">
                              <GraduationCap className="w-3 h-3 mr-1" />
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-emerald-600" />
                        Areas of Expertise
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {expert.specialization}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {expert.badges.map((badge, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs font-medium rounded-full">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Key Achievement</span>
                        <span className="text-sm font-bold text-emerald-600">{expert.achievements}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Work - Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures efficient service delivery with complete transparency and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {workingProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-emerald-200">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${process.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <process.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl font-bold text-gray-300 mr-4">{process.step}</span>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                          {process.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {process.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {process.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Local SEO CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work with Delhi's Top CA?
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Get professional chartered accountant services from qualified CAs near you in Delhi. 
              Contact CA Gaurav Singh & CA Dimple Singh today for expert guidance and support.
            </p>
            
            {/* Local Business Schema in CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-emerald-100">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+91 9717366670</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>info@camphormind.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 md:col-span-2">
                  <MapPin className="w-5 h-5" />
                  <span>Royal Residency, Mandi, Delhi - 110047</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Free Consultation Now
              </Link>
              <a
                href="tel:+919717366670"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 9717366670
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-emerald-100 text-sm mb-4">
                ⭐ Rated 4.9/5 by 200+ clients | 🏆 15+ Years Experience | 📍 Serving Delhi & NCR
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-emerald-200">
                <span>✓ Licensed Chartered Accountants</span>
                <span>✓ 100% Compliance Guarantee</span>
                <span>✓ Quick Turnaround Time</span>
                <span>✓ Transparent Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;