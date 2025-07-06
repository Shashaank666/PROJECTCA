import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Phone,
  Download,
  AlertCircle,
  Calculator,
  Building2,
  Users
} from 'lucide-react';

const GSTServices = () => {
  const services = [
    {
      title: "GST Registration",
      description: "Complete GST registration process with expert guidance",
      features: ["Online Application", "Document Verification", "GSTIN Issuance", "Certificate Download"]
    },
    {
      title: "GST Returns Filing",
      description: "Monthly and annual GST returns filing services",
      features: ["GSTR-1 Filing", "GSTR-3B Filing", "GSTR-9 Annual Return", "Late Fee Calculation"]
    },
    {
      title: "GST Compliance",
      description: "Complete GST compliance management and advisory",
      features: ["ITC Reconciliation", "Tax Planning", "Notice Handling", "Refund Processing"]
    },
    {
      title: "GST Audit Support",
      description: "Professional GST audit and assessment support",
      features: ["Audit Preparation", "Documentation", "Representation", "Compliance Review"]
    }
  ];

  const registrationProcess = [
    {
      step: "01",
      title: "Eligibility Check",
      description: "Verify GST registration eligibility based on turnover and business type",
      timeline: "1 day"
    },
    {
      step: "02", 
      title: "Document Collection",
      description: "Gather all required documents including PAN, Aadhaar, business proof",
      timeline: "2-3 days"
    },
    {
      step: "03",
      title: "Online Application",
      description: "File GST registration application on GST portal with complete details",
      timeline: "1 day"
    },
    {
      step: "04",
      title: "Verification Process",
      description: "Document verification by GST department and query resolution",
      timeline: "7-15 days"
    },
    {
      step: "05",
      title: "GSTIN Issuance",
      description: "Receive GST registration certificate with unique GSTIN",
      timeline: "1-2 days"
    }
  ];

  const documents = [
    "PAN Card of Business/Proprietor",
    "Aadhaar Card of Authorized Signatory",
    "Business Registration Certificate",
    "Address Proof of Business Premises",
    "Bank Account Statement",
    "Rent Agreement/Property Documents",
    "Board Resolution (for Companies)",
    "Partnership Deed (for Partnerships)"
  ];

  const returnTypes = [
    {
      form: "GSTR-1",
      description: "Outward supplies return",
      frequency: "Monthly/Quarterly",
      dueDate: "11th of next month"
    },
    {
      form: "GSTR-3B",
      description: "Summary return with tax payment",
      frequency: "Monthly",
      dueDate: "20th of next month"
    },
    {
      form: "GSTR-9",
      description: "Annual return",
      frequency: "Yearly",
      dueDate: "31st December"
    },
    {
      form: "GSTR-4",
      description: "Composition scheme return",
      frequency: "Quarterly",
      dueDate: "18th of next month"
    }
  ];

  const penalties = [
    { violation: "Late Filing of GSTR-1", penalty: "₹200 per day (max ₹5,000)" },
    { violation: "Late Filing of GSTR-3B", penalty: "₹200 per day (max ₹5,000)" },
    { violation: "Late Payment of Tax", penalty: "18% interest per annum" },
    { violation: "Non-Registration despite liability", penalty: "10% of tax amount or ₹10,000" },
    { violation: "Wrong availment of ITC", penalty: "10% of tax + interest" },
    { violation: "Non-maintenance of records", penalty: "₹25,000" }
  ];

  const benefits = [
    "Legal Compliance Assurance",
    "Input Tax Credit Benefits",
    "Nationwide Business Operations",
    "Enhanced Business Credibility",
    "Government Scheme Access",
    "Seamless Interstate Trade",
    "Digital Tax Management",
    "Simplified Tax Structure"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Receipt className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GST Services & Compliance
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Complete GST solutions including registration, monthly/annual returns, 
              compliance management, and audit support with detailed process explanation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download GST Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our GST Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive GST solutions for businesses of all sizes with expert guidance and support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Receipt className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GST Registration Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GST Registration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step GST registration process with clear timelines and requirements
            </p>
          </motion.div>

          <div className="space-y-8">
            {registrationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-green-600 font-medium">{step.timeline}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
                
                <div className="hidden lg:block w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                  <ArrowRight className={`w-6 h-6 text-white ${index % 2 === 1 ? 'rotate-180' : ''}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Required Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete list of documents needed for GST registration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium text-sm leading-relaxed">{document}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GST Return Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GST Return Types & Due Dates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different types of GST returns with their filing frequencies and due dates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnTypes.map((returnType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{returnType.form}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{returnType.form}</h3>
                  <p className="text-gray-600 text-sm">{returnType.description}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Frequency:</span>
                    <span className="text-sm font-semibold text-gray-900">{returnType.frequency}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Due Date:</span>
                    <span className="text-sm font-semibold text-green-600">{returnType.dueDate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GST Registration Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key advantages of GST registration for your business growth and compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GST Non-Compliance Penalties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Penalties for non-compliance with GST regulations and requirements
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Violation</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Penalty Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {penalties.map((penalty, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6 text-gray-700">{penalty.violation}</td>
                      <td className="py-4 px-6 text-red-600 font-semibold">{penalty.penalty}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need GST Services?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Get expert GST registration, filing, and compliance services. 
              Contact our CA professionals today for comprehensive GST solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GSTServices;