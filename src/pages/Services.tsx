import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Receipt, 
  Calculator, 
  Factory, 
  Handshake,
  ArrowRight,
  CheckCircle2,
  Phone,
  FileText,
  Shield,
  TrendingUp,
  BarChart3,
  Settings,
  Zap
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Building2,
      title: "Company Registration in India",
      description: "Complete company registration services including Private Limited Company (PLC) setup with legal entity benefits, DSC, DIN, MCA registration, and Certificate of Practice requirements.",
      features: [
        "Digital Signature Certificate (DSC)",
        "Director Identification Number (DIN)",
        "MCA Registration & Compliance",
        "Certificate of Practice (COP)",
        "Legal Entity Formation",
        "Board Resolutions & MOA/AOA"
      ],
      benefits: [
        "Limited Liability Protection",
        "Separate Legal Entity",
        "Easy Transfer of Ownership",
        "Tax Benefits & Incentives",
        "Access to Government Schemes",
        "Enhanced Credibility"
      ],
      link: "/services/company-registration",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "LLP Registration",
      description: "Limited Liability Partnership registration with comprehensive legal explanation, features, benefits, and complete registration process guidance.",
      features: [
        "LLP Agreement Drafting",
        "Digital Signature for Partners",
        "Name Reservation",
        "Incorporation Certificate",
        "PAN & TAN Registration",
        "Bank Account Opening"
      ],
      benefits: [
        "Limited Liability for Partners",
        "Flexible Management Structure",
        "No Minimum Capital Required",
        "Tax Pass-through Benefits",
        "Easy Compliance Requirements",
        "Professional Recognition"
      ],
      link: "/services/llp-registration",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Receipt,
      title: "GST Related Services",
      description: "Complete GST solutions including registration, monthly/annual returns, compliance management, and audit support with detailed process explanation.",
      features: [
        "GST Registration Process",
        "Monthly GST Returns (GSTR-1, GSTR-3B)",
        "Annual GST Returns (GSTR-9)",
        "GST Compliance Management",
        "GST Audit Support",
        "Input Tax Credit Optimization"
      ],
      benefits: [
        "Legal Compliance Assurance",
        "Penalty Avoidance",
        "ITC Maximization",
        "Timely Return Filing",
        "Expert Advisory Support",
        "Document Management"
      ],
      link: "/services/gst-services",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Calculator,
      title: "Income Tax Services",
      description: "Comprehensive income tax services including PAN services, ITR filing for individuals/firms/companies, tax planning, and refund assistance.",
      features: [
        "PAN Card Services",
        "ITR Filing (ITR-1, ITR-2, ITR-3, ITR-4)",
        "Income Tax Planning",
        "TDS Return Filing",
        "Tax Refund Processing",
        "Income Tax Audit"
      ],
      benefits: [
        "Maximum Tax Savings",
        "Timely Return Filing",
        "Quick Refund Processing",
        "Expert Tax Planning",
        "Penalty Avoidance",
        "Complete Documentation"
      ],
      link: "/services/income-tax",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Factory,
      title: "MSME Services",
      description: "MSME registration, returns filing, advisory services, and loan benefits with eligibility criteria for Micro, Small, and Medium enterprises.",
      features: [
        "MSME Registration (Udyam)",
        "MSME Returns Filing",
        "Advisory Services",
        "Loan Documentation",
        "Subsidy Applications",
        "Compliance Management"
      ],
      benefits: [
        "Government Scheme Access",
        "Loan Benefits & Subsidies",
        "Tax Exemptions",
        "Priority Sector Lending",
        "Market Development Assistance",
        "Technology Support"
      ],
      link: "/services/msme-services",
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Handshake,
      title: "Partnership & Proprietorship Services",
      description: "Complete registration services for Partnership and Proprietorship firms with legal explanations, differences, advantages, and governing acts.",
      features: [
        "Proprietorship Registration",
        "Partnership Deed Drafting",
        "Registration with ROF",
        "PAN & TAN Registration",
        "Bank Account Opening",
        "License & Registrations"
      ],
      benefits: [
        "Easy Setup Process",
        "Minimal Compliance",
        "Direct Tax Benefits",
        "Full Business Control",
        "Quick Decision Making",
        "Cost Effective Structure"
      ],
      link: "/services/partnership-proprietorship",
      gradient: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-50"
    }
  ];

  const specializedServices = [
    {
      icon: BarChart3,
      title: "Ind AS Advisory",
      description: "Impact Assessment and Implementation for corporates transitioning to Indian Accounting Standards",
      features: [
        "Gap Analysis & Impact Assessment",
        "Implementation Roadmap",
        "Training & Capacity Building",
        "Ongoing Compliance Support"
      ],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Internal Financial Controls (IFC)",
      description: "Audit & Compliance under Companies Act for robust internal control systems",
      features: [
        "IFC Framework Design",
        "Control Testing & Evaluation",
        "Compliance Monitoring",
        "Remediation Support"
      ],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Settings,
      title: "Process Audit & Optimization",
      description: "Efficiency improvement, risk reduction & control enhancement for business processes",
      features: [
        "Process Mapping & Analysis",
        "Risk Assessment",
        "Control Optimization",
        "Performance Monitoring"
      ],
      gradient: "from-amber-500 to-orange-500"
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
              Our Professional Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive Chartered Accountant solutions for all your business needs. 
              Expert guidance, complete compliance, and professional support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core CA Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential chartered accountant services for business registration, compliance, and growth
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${service.bgColor} rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-500`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <Link
                        to={service.link}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg`}
                      >
                        For More Details and Consultation Click Here
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                      
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-white transition-all duration-300"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Get Consultation
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FileText className="w-6 h-6 mr-2 text-blue-600" />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                        Benefits
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced advisory and compliance services for complex business requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient process to get your business services completed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Free consultation to understand your requirements and provide expert guidance",
                icon: Phone
              },
              {
                step: "02", 
                title: "Documentation",
                description: "Preparation and collection of all required documents for your service",
                icon: FileText
              },
              {
                step: "03",
                title: "Processing",
                description: "Filing applications and handling all government procedures on your behalf",
                icon: Settings
              },
              {
                step: "04",
                title: "Completion",
                description: "Delivery of certificates and ongoing support for compliance requirements",
                icon: Zap
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  <item.icon className="w-8 h-8" />
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 transform translate-x-1/2"></div>
                )}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-sm font-bold text-blue-600 mb-2">Step {item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Professional CA Services?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get expert chartered accountant services tailored to your business needs. 
              Contact us today for professional consultation and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center"
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

export default Services;