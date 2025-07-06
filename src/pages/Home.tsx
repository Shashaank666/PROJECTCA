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
  Briefcase
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Company Registration",
      description: "Complete PLC registration with DSC, DIN, MCA compliance and COP requirements",
      features: ["Digital Signature Certificate", "Director Identification Number", "MCA Registration", "Certificate of Practice"],
      link: "/services/company-registration",
      gradient: "from-emerald-500 to-teal-500",
      price: "Starting from ₹6,999"
    },
    {
      icon: Users,
      title: "LLP Registration",
      description: "Limited Liability Partnership registration with legal entity benefits and features",
      features: ["Legal Entity Formation", "Partnership Benefits", "Compliance Support", "Registration Process"],
      link: "/services/llp-registration",
      gradient: "from-purple-500 to-pink-500",
      price: "Starting from ₹5,999"
    },
    {
      icon: Receipt,
      title: "GST Services",
      description: "Complete GST solutions including registration, returns, compliance and audit support",
      features: ["GST Registration: ₹5000/Onwards", "Monthly/Annual Returns", "Compliance Management", "Audit Support"],
      link: "/services/gst-services",
      gradient: "from-green-500 to-emerald-500",
      price: "GST Registration: ₹5000/Onwards"
    },
    {
      icon: Calculator,
      title: "Income Tax Services",
      description: "Comprehensive income tax services for individuals, firms and companies",
      features: ["ITR-1: ₹1000/Onwards", "ITR-4: ₹1,499/", "Tax Planning", "Refund Assistance"],
      link: "/services/income-tax",
      gradient: "from-orange-500 to-red-500",
      price: "ITR-1: ₹1000/Onwards"
    },
    {
      icon: Factory,
      title: "MSME Services",
      description: "MSME registration, returns, advisory services and loan benefits",
      features: ["MSME Registration", "Returns Filing", "Advisory Services", "Loan Benefits"],
      link: "/services/msme-services",
      gradient: "from-indigo-500 to-purple-500",
      price: "Starting from ₹1,999"
    },
    {
      icon: Handshake,
      title: "Partnership Services",
      description: "Partnership and Proprietorship firm registration with complete legal guidance",
      features: ["Proprietorship Setup", "Partnership Formation", "Legal Compliance", "Registration Process"],
      link: "/services/partnership-proprietorship",
      gradient: "from-teal-500 to-emerald-500",
      price: "Starting from ₹2,999"
    }
  ];

  const workingProcess = [
    {
      step: "01",
      title: "Understanding Your Business Needs",
      description: "Deep dive into client's business requirements, current structure, and future goals to create a comprehensive understanding of your specific needs.",
      icon: Search,
      features: ["Business Analysis", "Requirement Assessment", "Goal Identification", "Risk Evaluation"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      step: "02",
      title: "Planning & Preparation",
      description: "Custom roadmap development with detailed timelines, compliance checklists, and strategic planning for optimal implementation.",
      icon: Target,
      features: ["Custom Roadmap", "Timeline Planning", "Compliance Checklists", "Resource Allocation"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Execution & Review",
      description: "Systematic execution of planned activities with regular audits, compliance checks, and comprehensive reporting throughout the process.",
      icon: FileText,
      features: ["Process Execution", "Regular Audits", "Compliance Monitoring", "Progress Reporting"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Implementation & Support",
      description: "Continuous support post-implementation with long-term process improvements, monitoring, and ongoing advisory services.",
      icon: Zap,
      features: ["Ongoing Support", "Process Optimization", "Performance Monitoring", "Advisory Services"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "300+", label: "Companies Registered", icon: Building2 },
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
      specialization: "Corporate Law, Tax Planning, Financial Advisory",
      image: "/WhatsApp Image 2025-06-20 at 10.39.20_44bf162f.jpg",
      badges: ["Expert in GST", "Company Law Specialist", "Tax Planning Expert"],
      achievements: "300+ Companies Registered"
    },
    {
      name: "CA Dimple Singh",
      position: "Partner - Tax & Compliance",
      experience: "13+ Years",
      rating: 4.8,
      certifications: ["ACA", "ACMA", "DISA"],
      specialization: "GST Compliance, Income Tax, Audit & Assurance",
      image: "/WhatsApp Image 2025-06-20 at 10.01.39_fff339d4.jpg",
      badges: ["GST Expert", "Audit Specialist", "Compliance Pro"],
      achievements: "500+ Tax Returns Filed"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with New Component */}
      <HeroGeometric 
        badge="Professional CA Services Since 2009"
        title1="Expert Chartered Accountant"
        title2="Solutions for Your Business"
        description="Comprehensive CA services including Company Registration, GST Compliance, Income Tax Filing, MSME Services, and Financial Advisory for businesses across India"
      />

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive CA solutions tailored for your business needs with expert guidance and compliance support
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
                {/* 3D Card Effect */}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
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
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals bring decades of combined experience in accounting, taxation, and business advisory services
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
                  {/* 3D Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Profile Section */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={expert.image}
                            alt={expert.name}
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
                        </div>
                        
                        {/* Certifications */}
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

                    {/* Specialization */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-emerald-600" />
                        Specialization
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {expert.specialization}
                      </p>
                    </div>

                    {/* Badges */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {expert.badges.map((badge, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs font-medium rounded-full">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
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
              Our Working Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deliver exceptional results with transparency and efficiency
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
                
                {/* Connection Line */}
                {index < workingProcess.length - 1 && index % 2 === 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our CA Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional expertise, reliable service, and comprehensive solutions for all your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "15+ Years Experience",
                description: "Proven track record of serving businesses across various industries with expert CA services"
              },
              {
                icon: Shield,
                title: "100% Compliance",
                description: "Ensuring complete legal compliance with all government regulations and requirements"
              },
              {
                icon: Clock,
                title: "Quick Turnaround",
                description: "Fast processing times with efficient documentation and submission processes"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Qualified chartered accountants and tax professionals with specialized expertise"
              },
              {
                icon: TrendingUp,
                title: "Cost Effective",
                description: "Competitive pricing with transparent fee structure and no hidden charges"
              },
              {
                icon: Phone,
                title: "24/7 Support",
                description: "Round-the-clock customer support for all your queries and assistance needs"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Get professional CA services tailored to your business needs. 
              Contact us today for a free consultation and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;