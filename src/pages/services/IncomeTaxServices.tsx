import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Phone,
  Download,
  AlertCircle,
  CreditCard,
  Building2,
  Users,
  DollarSign
} from 'lucide-react';

const IncomeTaxServices = () => {
  const services = [
    {
      title: "PAN Services",
      description: "Complete PAN card services and related applications",
      features: ["New PAN Application", "PAN Correction", "Duplicate PAN", "PAN Verification"],
      icon: CreditCard
    },
    {
      title: "ITR Filing",
      description: "Income Tax Return filing for all categories",
      features: ["ITR-1 (Individuals)", "ITR-2 (Capital Gains)", "ITR-3 (Business)", "ITR-4 (Presumptive)"],
      icon: FileText
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning and advisory services",
      features: ["Investment Planning", "Tax Saving Schemes", "Deduction Optimization", "Tax Consultation"],
      icon: TrendingUp
    },
    {
      title: "TDS Services",
      description: "TDS compliance and return filing services",
      features: ["TDS Return Filing", "TDS Reconciliation", "Form 16 Issuance", "TDS Refund"],
      icon: Calculator
    }
  ];

  const itrTypes = [
    {
      form: "ITR-1 (Sahaj)",
      applicability: "Individuals with salary, pension, one house property",
      fees: "₹500 - ₹1,000",
      features: ["Simple Form", "Online Filing", "Quick Processing", "E-verification"]
    },
    {
      form: "ITR-2",
      applicability: "Individuals with capital gains, multiple properties",
      fees: "₹1,000 - ₹2,000", 
      features: ["Capital Gains", "Multiple Properties", "Foreign Income", "Detailed Schedules"]
    },
    {
      form: "ITR-3",
      applicability: "Individuals with business/professional income",
      fees: "₹2,000 - ₹5,000",
      features: ["Business Income", "P&L Statement", "Balance Sheet", "Audit Requirements"]
    },
    {
      form: "ITR-4 (Sugam)",
      applicability: "Presumptive taxation scheme taxpayers",
      fees: "₹1,000 - ₹2,000",
      features: ["Presumptive Income", "Simplified Filing", "Lower Compliance", "Small Business"]
    }
  ];

  const taxRates = [
    {
      category: "Individual (Below 60 years)",
      slabs: [
        { income: "Up to ₹2.5 Lakh", rate: "Nil" },
        { income: "₹2.5L - ₹5L", rate: "5%" },
        { income: "₹5L - ₹10L", rate: "20%" },
        { income: "Above ₹10L", rate: "30%" }
      ]
    },
    {
      category: "Senior Citizen (60-80 years)",
      slabs: [
        { income: "Up to ₹3 Lakh", rate: "Nil" },
        { income: "₹3L - ₹5L", rate: "5%" },
        { income: "₹5L - ₹10L", rate: "20%" },
        { income: "Above ₹10L", rate: "30%" }
      ]
    },
    {
      category: "Super Senior (Above 80 years)",
      slabs: [
        { income: "Up to ₹5 Lakh", rate: "Nil" },
        { income: "₹5L - ₹10L", rate: "20%" },
        { income: "Above ₹10L", rate: "30%" }
      ]
    }
  ];

  const documents = [
    "Form 16/16A (TDS Certificates)",
    "Salary Slips/Pension Slips",
    "Bank Interest Certificates",
    "Investment Proofs (80C, 80D)",
    "Property Documents",
    "Capital Gains Statements",
    "Business Books (for ITR-3)",
    "Previous Year ITR Copy"
  ];

  const deductions = [
    { section: "80C", description: "Life Insurance, PPF, ELSS, NSC", limit: "₹1.5 Lakh" },
    { section: "80D", description: "Health Insurance Premium", limit: "₹25,000 - ₹50,000" },
    { section: "80E", description: "Education Loan Interest", limit: "No Limit" },
    { section: "80G", description: "Donations to Charity", limit: "50% - 100%" },
    { section: "80TTA", description: "Savings Account Interest", limit: "₹10,000" },
    { section: "24(b)", description: "Home Loan Interest", limit: "₹2 Lakh" }
  ];

  const penalties = [
    { violation: "Late Filing of ITR", penalty: "₹5,000 (₹1,000 if income < ₹5L)" },
    { violation: "Non-Filing of ITR", penalty: "₹10,000 + Interest" },
    { violation: "Incorrect Information", penalty: "₹10,000" },
    { violation: "Late Payment of Tax", penalty: "1% per month" },
    { violation: "Non-maintenance of Books", penalty: "₹25,000" },
    { violation: "Tax Audit Non-compliance", penalty: "₹1.5 Lakh" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Income Tax Services
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive income tax services including PAN services, ITR filing for 
              individuals/firms/companies, tax planning, and refund assistance with expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Tax Guide
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
              Our Income Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete income tax solutions for individuals, businesses, and professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* ITR Types & Fees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ITR Types & Filing Fees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different ITR forms with applicability, features, and professional filing fees
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itrTypes.map((itr, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{itr.form}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{itr.applicability}</p>
                </div>
                
                <div className="mb-6">
                  <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                    <p className="text-sm text-gray-600 mb-1">Filing Fees</p>
                    <p className="text-2xl font-bold text-orange-600">{itr.fees}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {itr.features.map((feature, idx) => (
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

      {/* Tax Rates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Income Tax Rates 2024-25
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current income tax slabs and rates for different categories of taxpayers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {taxRates.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                <div className="space-y-4">
                  {category.slabs.map((slab, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-white rounded-xl">
                      <span className="text-sm font-medium text-gray-700">{slab.income}</span>
                      <span className="text-lg font-bold text-orange-600">{slab.rate}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Deductions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Tax Deductions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key tax deductions available to reduce your taxable income
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Section</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Description</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {deductions.map((deduction, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6 font-semibold text-orange-600">{deduction.section}</td>
                      <td className="py-4 px-6 text-gray-700">{deduction.description}</td>
                      <td className="py-4 px-6 font-semibold text-green-600">{deduction.limit}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              Documents needed for income tax return filing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium text-sm leading-relaxed">{document}</p>
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
              Income Tax Penalties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Penalties for non-compliance with income tax regulations
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Income Tax Services?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Get expert income tax filing, planning, and advisory services. 
              Contact our experienced tax consultants for comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300 flex items-center"
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

export default IncomeTaxServices;