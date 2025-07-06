import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Building2, 
  TrendingUp, 
  Shield, 
  Clock,
  CheckCircle2,
  Star,
  Target,
  Eye,
  Heart
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "1000+", label: "Happy Clients", icon: Users },
    { number: "500+", label: "Companies Registered", icon: Building2 },
    { number: "98%", label: "Success Rate", icon: TrendingUp }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our professional dealings and client relationships."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering superior quality services that exceed client expectations consistently."
    },
    {
      icon: Clock,
      title: "Timeliness",
      description: "We understand the importance of deadlines and ensure timely completion of all deliverables."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Our clients' success is our priority. We provide personalized solutions for each unique requirement."
    }
  ];

  const team = [
    {
      name: "CA Gaurav Singh",
      position: "Senior Partner & Founder",
      experience: "15+ Years",
      specialization: "Corporate Law, Tax Planning, Company Registration",
      image: "/WhatsApp Image 2025-06-20 at 10.39.20_44bf162f.jpg",
      achievements: "500+ Companies Registered",
      certifications: ["FCA", "DISA", "Tax Expert"],
      expertise: [
        "Company Registration & Compliance",
        "Corporate Law & Governance", 
        "Tax Planning & Advisory",
        "MSME Registration & Benefits",
        "GST Registration & Compliance",
        "Financial Consulting"
      ]
    },
    {
      name: "CA Dimple Singh",
      position: "Partner - Tax & Compliance Services",
      experience: "13+ Years", 
      specialization: "GST Services, Income Tax, Audit & Compliance",
      image: "/WhatsApp Image 2025-06-20 at 10.01.39_fff339d4.jpg",
      achievements: "1000+ Tax Returns Filed",
      certifications: ["ACA", "GST Expert", "Audit Specialist"],
      expertise: [
        "Income Tax Planning & Filing",
        "GST Registration & Returns",
        "Tax Audit & Compliance",
        "Financial Statement Preparation",
        "TDS & Advance Tax Management",
        "Business Advisory Services"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About CamphorMind CA Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner for comprehensive chartered accountant services, 
              providing expert solutions for businesses and individuals across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
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

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009, CamphorMind CA Services began with a simple mission: 
                  to provide reliable, professional chartered accountant services that help 
                  businesses thrive in India's dynamic economic landscape.
                </p>
                <p>
                  Over the past 15+ years, we have grown from a small practice to a 
                  comprehensive CA firm, serving over 1000 clients across various industries. 
                  Our expertise spans company registration, tax compliance, GST services, 
                  and financial advisory.
                </p>
                <p>
                  Today, we are proud to be recognized as one of the leading CA firms in 
                  Delhi, with a team of qualified professionals who bring decades of 
                  combined experience to every client engagement.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional office environment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-sm font-semibold text-gray-900">5.0 Rating</p>
                <p className="text-xs text-gray-600">From 200+ Reviews</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower businesses and individuals with professional chartered accountant 
                services that ensure compliance, optimize financial performance, and support 
                sustainable growth. We are committed to delivering excellence through integrity, 
                expertise, and personalized attention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the most trusted and preferred chartered accountant firm in India, 
                recognized for our professional excellence, innovative solutions, and 
                unwavering commitment to client success. We envision a future where every 
                business has access to world-class CA services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Qualified chartered accountants with extensive experience and specialized expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2">
                  {/* 3D Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Profile Section */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-2">
                          {member.position}
                        </p>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{member.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold text-gray-900">5.0</span>
                          </div>
                        </div>
                        
                        {/* Certifications */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.certifications.map((cert, idx) => (
                            <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Specialization */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Core Specialization
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {member.specialization}
                      </p>
                    </div>

                    {/* Expertise Areas */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Areas of Expertise
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {member.expertise.map((area, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Key Achievement</span>
                        <span className="text-sm font-bold text-blue-600">{member.achievements}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose CamphorMind CA Services?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the difference of working with a trusted, professional CA firm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "15+ years of proven experience in CA services",
              "1000+ satisfied clients across various industries",
              "100% compliance with government regulations",
              "Quick turnaround times for all services",
              "Transparent pricing with no hidden costs",
              "24/7 customer support and consultation",
              "Expert team of qualified chartered accountants",
              "Comprehensive range of services under one roof",
              "Personalized solutions for each client's needs"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;