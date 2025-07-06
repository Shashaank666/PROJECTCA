import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Phone,
  Download,
  AlertCircle,
  User,
  Building2,
  Users,
  Scale
} from 'lucide-react';

const PartnershipServices = () => {
  const services = [
    {
      title: "Proprietorship Registration",
      description: "Complete proprietorship firm setup and registration",
      features: ["Business Registration", "PAN & TAN", "Bank Account", "License Support"],
      icon: User
    },
    {
      title: "Partnership Formation",
      description: "Partnership firm registration with legal documentation",
      features: ["Partnership Deed", "Registration with ROF", "Partner Documentation", "Compliance Setup"],
      icon: Handshake
    },
    {
      title: "Legal Documentation",
      description: "Complete legal documentation and agreement drafting",
      features: ["Partnership Deed", "MOUs", "Legal Agreements", "Amendment Support"],
      icon: FileText
    },
    {
      title: "Compliance Support",
      description: "Ongoing compliance and regulatory support",
      features: ["Tax Compliance", "ROF Filings", "Annual Returns", "Legal Updates"],
      icon: Shield
    }
  ];

  const comparison = [
    {
      aspect: "Formation",
      proprietorship: "Single person business",
      partnership: "2 or more persons",
      advantages: ["Simple setup", "Shared responsibility"]
    },
    {
      aspect: "Liability",
      proprietorship: "Unlimited personal liability",
      partnership: "Unlimited joint liability",
      advantages: ["Full control", "Shared risks"]
    },
    {
      aspect: "Capital",
      proprietorship: "Owner's capital only",
      partnership: "Combined capital of partners",
      advantages: ["No external dependency", "Higher capital base"]
    },
    {
      aspect: "Management",
      proprietorship: "Sole management",
      partnership: "Joint management",
      advantages: ["Quick decisions", "Diverse expertise"]
    },
    {
      aspect: "Taxation",
      proprietorship: "Individual tax rates",
      partnership: "Pass-through taxation",
      advantages: ["Simple tax filing", "No double taxation"]
    },
    {
      aspect: "Continuity",
      proprietorship: "Ends with owner's death",
      partnership: "Affected by partner changes",
      advantages: ["Simple succession", "Succession planning possible"]
    }
  ];

  const proprietorshipFeatures = [
    {
      title: "Easy Formation",
      description: "Simple and quick setup process with minimal documentation",
      icon: Clock
    },
    {
      title: "Full Control",
      description: "Complete control over business decisions and operations",
      icon: User
    },
    {
      title: "Tax Benefits",
      description: "Individual tax rates and various deduction benefits",
      icon: TrendingUp
    },
    {
      title: "Minimal Compliance",
      description: "Lower compliance requirements compared to companies",
      icon: Shield
    }
  ];

  const partnershipFeatures = [
    {
      title: "Shared Resources",
      description: "Combined capital, skills, and expertise of multiple partners",
      icon: Users
    },
    {
      title: "Risk Distribution",
      description: "Business risks and liabilities shared among partners",
      icon: Scale
    },
    {
      title: "Flexible Structure",
      description: "Flexible profit sharing and management structure",
      icon: Building2
    },
    {
      title: "Easy Expansion",
      description: "Easier business expansion with partner contributions",
      icon: TrendingUp
    }
  ];

  const documents = {
    proprietorship: [
      "PAN Card of Proprietor",
      "Aadhaar Card",
      "Address Proof",
      "Bank Account Details",
      "Business Address Proof",
      "Passport Size Photos"
    ],
    partnership: [
      "PAN Cards of All Partners",
      "Aadhaar Cards of All Partners",
      "Address Proofs",
      "Partnership Deed",
      "Bank Account Details",
      "Business Registration Certificate"
    ]
  };

  const governingActs = [
    {
      type: "Proprietorship",
      act: "Indian Contract Act, 1872",
      keyPoints: [
        "No separate legal entity",
        "Governed by contract law",
        "Simple regulatory framework",
        "Individual liability provisions"
      ]
    },
    {
      type: "Partnership",
      act: "Indian Partnership Act, 1932",
      keyPoints: [
        "Defines partnership relations",
        "Rights and duties of partners",
        "Partnership dissolution rules",
        "Registration procedures"
      ]
    }
  ];

  const registrationProcess = [
    {
      step: "01",
      title: "Business Structure Decision",
      description: "Choose between proprietorship and partnership based on business needs",
      timeline: "1 day"
    },
    {
      step: "02",
      title: "Documentation",
      description: "Prepare and collect all required documents for registration",
      timeline: "2-3 days"
    },
    {
      step: "03",
      title: "Registration Process",
      description: "File applications with appropriate authorities and obtain registrations",
      timeline: "7-15 days"
    },
    {
      step: "04",
      title: "Compliance Setup",
      description: "Setup tax registrations, bank accounts, and compliance systems",
      timeline: "5-7 days"
    },
    {
      step: "05",
      title: "Business Commencement",
      description: "Complete all formalities and commence business operations",
      timeline: "1-2 days"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partnership & Proprietorship Services
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Complete registration services for Partnership and Proprietorship firms with 
              legal explanations, differences, advantages, and governing acts guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-teal-600 transform hover:scale-105 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Business Guide
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
              Our Business Registration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete business setup solutions for proprietorship and partnership firms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proprietorship vs Partnership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed comparison to help you choose the right business structure
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 shadow-xl overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Aspect</th>
                  <th className="text-left py-4 px-6 font-bold text-teal-600">Proprietorship</th>
                  <th className="text-left py-4 px-6 font-bold text-blue-600">Partnership</th>
                  <th className="text-left py-4 px-6 font-bold text-green-600">Key Advantages</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">{item.aspect}</td>
                    <td className="py-4 px-6 text-teal-700">{item.proprietorship}</td>
                    <td className="py-4 px-6 text-blue-700">{item.partnership}</td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        {item.advantages.map((advantage, idx) => (
                          <span key={idx} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md mr-1">
                            {advantage}
                          </span>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Proprietorship Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Proprietorship Advantages
              </h3>
              <div className="space-y-6">
                {proprietorshipFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Partnership Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Partnership Advantages
              </h3>
              <div className="space-y-6">
                {partnershipFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Registration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step process for business registration and setup
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
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-teal-600 font-medium">{step.timeline}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
                
                <div className="hidden lg:block w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center">
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
              Documents needed for proprietorship and partnership registration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Proprietorship Documents
              </h3>
              <div className="space-y-4">
                {documents.proprietorship.map((document, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                    <FileText className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Partnership Documents
              </h3>
              <div className="space-y-4">
                {documents.partnership.map((document, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                    <FileText className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governing Acts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Governing Acts & Legal Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Legal acts governing proprietorship and partnership businesses in India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {governingActs.map((act, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{act.type}</h3>
                  <p className="text-lg text-teal-600 font-semibold">{act.act}</p>
                </div>
                
                <ul className="space-y-4">
                  {act.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Business?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Get expert assistance for proprietorship or partnership registration with complete legal support. 
              Contact our professionals today for comprehensive business setup services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-teal-600 transform hover:scale-105 transition-all duration-300 flex items-center"
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

export default PartnershipServices;