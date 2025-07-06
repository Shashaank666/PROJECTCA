import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Phone,
  Download,
  AlertCircle,
  Briefcase,
  Scale
} from 'lucide-react';

const LLPRegistration = () => {
  const features = [
    "LLP Agreement Drafting",
    "Digital Signature for Partners", 
    "Name Reservation Process",
    "Incorporation Certificate",
    "PAN & TAN Registration",
    "Bank Account Opening Support",
    "Compliance Calendar Setup",
    "Annual Filing Support"
  ];

  const benefits = [
    "Limited Liability for Partners",
    "Flexible Management Structure",
    "No Minimum Capital Required",
    "Tax Pass-through Benefits",
    "Easy Compliance Requirements",
    "Professional Recognition",
    "Perpetual Succession",
    "Separate Legal Entity"
  ];

  const documents = [
    "PAN Card of All Partners",
    "Aadhaar Card of All Partners", 
    "Passport Size Photographs",
    "Proof of Identity & Address",
    "Registered Office Address Proof",
    "Rent Agreement/NOC",
    "Utility Bills",
    "Bank Statement/Passbook"
  ];

  const process = [
    {
      step: "01",
      title: "DSC & Name Reservation",
      description: "Obtain Digital Signature Certificate for partners and reserve unique LLP name",
      timeline: "2-3 days"
    },
    {
      step: "02", 
      title: "LLP Agreement Drafting",
      description: "Prepare comprehensive LLP agreement defining roles, responsibilities and profit sharing",
      timeline: "3-4 days"
    },
    {
      step: "03",
      title: "Form Filing",
      description: "File Form FiLLiP with MCA along with required documents and registration fees",
      timeline: "1-2 days"
    },
    {
      step: "04",
      title: "Certificate Issuance",
      description: "Receive Certificate of Incorporation and LLPIN from MCA",
      timeline: "15-20 days"
    },
    {
      step: "05",
      title: "Post-Incorporation",
      description: "Complete PAN, TAN registration and bank account opening procedures",
      timeline: "5-7 days"
    }
  ];

  const compliance = [
    {
      title: "Annual Compliance",
      items: ["Annual Return Filing", "Statement of Account & Solvency", "Income Tax Returns", "ROC Filings"]
    },
    {
      title: "Event-based Filings", 
      items: ["Change in Partners", "Change in Registered Office", "Alteration in LLP Agreement", "Winding Up Procedures"]
    },
    {
      title: "Tax Compliance",
      items: ["Income Tax Filing", "GST Registration (if applicable)", "TDS Compliance", "Professional Tax"]
    }
  ];

  const comparison = [
    {
      aspect: "Liability",
      llp: "Limited to contribution",
      partnership: "Unlimited personal liability",
      company: "Limited to shares"
    },
    {
      aspect: "Legal Status",
      llp: "Separate legal entity",
      partnership: "Not separate entity",
      company: "Separate legal entity"
    },
    {
      aspect: "Minimum Members",
      llp: "2 Partners",
      partnership: "2 Partners",
      company: "2 Shareholders"
    },
    {
      aspect: "Compliance",
      llp: "Moderate",
      partnership: "Minimal",
      company: "High"
    },
    {
      aspect: "Taxation",
      llp: "Pass-through taxation",
      partnership: "Pass-through taxation",
      company: "Double taxation"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              LLP Registration Services
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Complete Limited Liability Partnership registration with legal explanation, 
              features, benefits, and comprehensive registration process guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download LLP Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What is a Limited Liability Partnership?
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  A Limited Liability Partnership (LLP) is a hybrid business structure that combines 
                  the flexibility of a partnership with the limited liability protection of a company. 
                  It's governed by the Limited Liability Partnership Act, 2008.
                </p>
                <p>
                  In an LLP, partners have limited liability protection, meaning their personal assets 
                  are protected from business debts and liabilities. It requires a minimum of 2 partners 
                  with no maximum limit, making it ideal for professional services.
                </p>
                <p>
                  LLP offers operational flexibility, tax benefits through pass-through taxation, 
                  and easier compliance requirements compared to companies, making it popular among 
                  professionals like CAs, lawyers, and consultants.
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
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="LLP registration process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Scale className="w-5 h-5" />
                  <span className="font-semibold">Legal Protection</span>
                </div>
                <p className="text-sm text-purple-100">Limited liability for all partners</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              LLP Features & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive LLP registration services with complete legal compliance and ongoing support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
              </div>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Benefits</h3>
              </div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Shield className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
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
              LLP Registration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step LLP registration process with clear timelines and requirements
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-purple-600 font-medium">{step.timeline}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
                
                <div className="hidden lg:block w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <ArrowRight className={`w-6 h-6 text-white ${index % 2 === 1 ? 'rotate-180' : ''}`} />
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
              Complete list of documents needed for LLP registration process
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium text-sm leading-relaxed">{document}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLP vs Partnership vs Company Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              LLP vs Partnership vs Company
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed comparison to help you choose the right business structure
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 shadow-xl overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Aspect</th>
                  <th className="text-left py-4 px-6 font-bold text-purple-600">LLP</th>
                  <th className="text-left py-4 px-6 font-bold text-blue-600">Partnership</th>
                  <th className="text-left py-4 px-6 font-bold text-green-600">Company</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-white/50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">{item.aspect}</td>
                    <td className="py-4 px-6 text-purple-700">{item.llp}</td>
                    <td className="py-4 px-6 text-blue-700">{item.partnership}</td>
                    <td className="py-4 px-6 text-green-700">{item.company}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              LLP Compliance Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ongoing compliance obligations for Limited Liability Partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {compliance.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Register Your LLP?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Get expert assistance for complete LLP registration with full compliance support. 
              Contact our CA professionals today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 flex items-center"
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

export default LLPRegistration;