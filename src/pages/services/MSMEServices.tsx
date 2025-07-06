import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Phone,
  Download,
  AlertCircle,
  DollarSign,
  Building2,
  Users,
  Award
} from 'lucide-react';

const MSMEServices = () => {
  const services = [
    {
      title: "MSME Registration (Udyam)",
      description: "Complete MSME registration under Udyam portal",
      features: ["Online Registration", "Udyam Certificate", "Government Recognition", "Instant Processing"],
      icon: Factory
    },
    {
      title: "MSME Returns Filing",
      description: "Annual returns and compliance filing services",
      features: ["Annual Returns", "Compliance Management", "Document Support", "Timely Filing"],
      icon: FileText
    },
    {
      title: "Advisory Services",
      description: "Expert advisory for MSME growth and compliance",
      features: ["Business Advisory", "Scheme Guidance", "Compliance Support", "Growth Planning"],
      icon: TrendingUp
    },
    {
      title: "Loan & Subsidy Support",
      description: "Assistance with MSME loans and government subsidies",
      features: ["Loan Documentation", "Subsidy Applications", "Scheme Benefits", "Financial Support"],
      icon: DollarSign
    }
  ];

  const categories = [
    {
      type: "Micro Enterprise",
      investment: "Up to ₹1 Crore",
      turnover: "Up to ₹5 Crore",
      benefits: ["Priority Sector Lending", "Collateral-free Loans", "Lower Interest Rates", "Government Schemes"],
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "Small Enterprise", 
      investment: "₹1 Crore - ₹10 Crore",
      turnover: "₹5 Crore - ₹50 Crore",
      benefits: ["Credit Guarantee Scheme", "Technology Support", "Market Development", "Export Promotion"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "Medium Enterprise",
      investment: "₹10 Crore - ₹50 Crore", 
      turnover: "₹50 Crore - ₹250 Crore",
      benefits: ["Infrastructure Support", "R&D Assistance", "Quality Certification", "International Market Access"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Financial Benefits",
      items: [
        "Priority Sector Lending",
        "Collateral-free Loans up to ₹1 Crore",
        "Lower Interest Rates",
        "Credit Guarantee Fund Support",
        "Subsidy on Technology Upgradation",
        "Working Capital Support"
      ]
    },
    {
      title: "Government Schemes",
      items: [
        "Prime Minister Employment Generation Programme",
        "Credit Linked Capital Subsidy Scheme",
        "Technology Upgradation Fund Scheme",
        "Market Development Assistance",
        "Export Promotion Schemes",
        "Skill Development Programs"
      ]
    },
    {
      title: "Business Support",
      items: [
        "Tender Preference in Government Procurement",
        "Protection against Delayed Payments",
        "Exemption from Direct Tax Audit",
        "Reduced Patent Filing Fees",
        "Quality Certification Support",
        "Technology Incubation Support"
      ]
    }
  ];

  const registrationProcess = [
    {
      step: "01",
      title: "Aadhaar Verification",
      description: "Verify Aadhaar number of the entrepreneur/authorized signatory",
      timeline: "Instant"
    },
    {
      step: "02",
      title: "PAN Validation", 
      description: "Validate PAN details and link with business information",
      timeline: "Instant"
    },
    {
      step: "03",
      title: "Business Details",
      description: "Fill business details, investment, turnover, and activity information",
      timeline: "30 minutes"
    },
    {
      step: "04",
      title: "Bank Details",
      description: "Provide bank account details for verification and future transactions",
      timeline: "5 minutes"
    },
    {
      step: "05",
      title: "Certificate Generation",
      description: "Instant generation of Udyam Registration Certificate",
      timeline: "Instant"
    }
  ];

  const documents = [
    "Aadhaar Card of Proprietor/Partners/Directors",
    "PAN Card of Business Entity",
    "Bank Account Details",
    "Business Address Proof",
    "Investment Details/Bills",
    "Turnover Details (if applicable)",
    "Partnership Deed (for Partnership)",
    "MOA/AOA (for Companies)"
  ];

  const schemes = [
    {
      name: "PMEGP",
      fullName: "Prime Minister Employment Generation Programme",
      subsidy: "15-35%",
      maxLoan: "₹25 Lakh - ₹1 Crore",
      sector: "Manufacturing & Service"
    },
    {
      name: "CLCSS",
      fullName: "Credit Linked Capital Subsidy Scheme", 
      subsidy: "15%",
      maxLoan: "₹15 Lakh",
      sector: "Technology Upgradation"
    },
    {
      name: "TUFS",
      fullName: "Technology Upgradation Fund Scheme",
      subsidy: "10-15%",
      maxLoan: "₹20 Crore",
      sector: "Textile Industry"
    },
    {
      name: "MDA",
      fullName: "Market Development Assistance",
      subsidy: "Up to 75%",
      maxLoan: "Varies",
      sector: "Export Promotion"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Factory className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MSME Services & Registration
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed mb-8">
              MSME registration, returns filing, advisory services, and loan benefits with 
              eligibility criteria for Micro, Small, and Medium enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download MSME Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MSME Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              MSME Categories & Eligibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Classification based on investment and turnover criteria as per MSME Act
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Factory className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.type}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Investment Limit</p>
                    <p className="text-lg font-bold text-indigo-600">{category.investment}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Turnover Limit</p>
                    <p className="text-lg font-bold text-purple-600">{category.turnover}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our MSME Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete MSME solutions from registration to growth support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
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

      {/* Registration Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Udyam Registration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple online registration process for MSME certification
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
                <div className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-indigo-600 font-medium">{step.timeline}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
                
                <div className="hidden lg:block w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <ArrowRight className={`w-6 h-6 text-white ${index % 2 === 1 ? 'rotate-180' : ''}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              MSME Benefits & Schemes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive benefits available to registered MSME enterprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular MSME Schemes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Government schemes providing financial support and subsidies to MSMEs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schemes.map((scheme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{scheme.name}</h3>
                    <p className="text-sm text-gray-600">{scheme.fullName}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs text-gray-600 mb-1">Subsidy</p>
                    <p className="text-lg font-bold text-green-600">{scheme.subsidy}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs text-gray-600 mb-1">Max Loan</p>
                    <p className="text-lg font-bold text-indigo-600">{scheme.maxLoan}</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Applicable Sector</p>
                  <p className="text-sm font-semibold text-gray-900">{scheme.sector}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
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
              Documents needed for MSME registration and scheme applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium text-sm leading-relaxed">{document}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Register Your MSME?
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Get expert assistance for MSME registration, scheme applications, and business growth support. 
              Contact our professionals today for comprehensive MSME services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300 flex items-center"
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

export default MSMEServices;