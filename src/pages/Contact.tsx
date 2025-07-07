import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Award,
  Shield,
  Users
} from 'lucide-react';
import { ContactForm } from '../components/forms/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+91 9717366670"],
      action: "tel:+919717366670",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@camphormind.com"],
      action: "mailto:info@camphormind.com",
      description: "Send us your queries anytime"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Royal Residency", "Mandi, Delhi - 110047"],
      action: "#",
      description: "Visit us for personal consultation"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      action: "#",
      description: "We're here when you need us"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Proven expertise in CA services"
    },
    {
      icon: Shield,
      title: "100% Compliance",
      description: "Guaranteed legal compliance"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Trusted by businesses across India"
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Always available for assistance"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Our CA Experts
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Get professional consultation for all your chartered accountant needs. 
              We're here to help you with expert guidance and support.
            </p>
            
            {/* Contact Details Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-2xl font-bold mb-6">CA. Gaurav Singh | CA. Dimple Singh</h3>
              <p className="text-lg text-emerald-100 mb-6">Chartered Accountants</p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-300" />
                  <span className="text-lg">Mobile and WhatsApp: +91 9717366670</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-300" />
                  <span className="text-lg">Email: info@camphormind.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                </p>
              </div>

              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Reach out to our experienced CA professionals for personalized consultation 
                  and expert guidance on all your business and tax-related matters.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">{info.description}</p>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.action !== "#" && (
                        <a
                          href={info.action}
                          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium mt-2 transition-colors duration-200"
                        >
                          Contact Now
                          <Phone className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-2">WhatsApp Support</h3>
                <p className="mb-4 text-green-100">
                  For quick queries and instant support, message us on WhatsApp.
                </p>
                <a
                  href="https://wa.me/919717366670?text=Hello, I need assistance with CA services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp: +91 9717366670
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose CamphorMind?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with trusted CA professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
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

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in Royal Residency, Mandi, Delhi, our office is equipped with modern facilities for client consultations.
            </p>
          </motion.div>

          <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Office Location</h3>
              <p className="text-gray-500">
                Royal Residency<br />
                Mandi, Delhi - 110047<br />
                Contact us for exact address and directions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;