export const servicesData = {
  companyRegistration: {
    title: "Company Registration",
    subtitle: "Private Limited Company Registration",
    description: "Complete company registration services with legal compliance and expert guidance",
    features: [
      "Digital Signature Certificate (DSC)",
      "Director Identification Number (DIN)",
      "Name Reservation & Approval",
      "MOA & AOA Drafting",
      "MCA Filing & Registration",
      "Certificate of Incorporation",
      "PAN & TAN Registration",
      "Bank Account Opening Support"
    ],
    benefits: [
      "Limited Liability Protection",
      "Separate Legal Entity",
      "Easy Transfer of Ownership",
      "Access to Government Schemes",
      "Enhanced Business Credibility",
      "Tax Benefits & Incentives"
    ],
    documents: [
      "PAN Card of Directors",
      "Aadhaar Card of Directors",
      "Passport Size Photographs",
      "Address Proof of Directors",
      "Registered Office Address Proof",
      "Rent Agreement/NOC",
      "Utility Bills",
      "Bank Statement"
    ],
    pricing: {
      basic: {
        price: "₹6,999",
        features: [
          "DSC for 2 Directors",
          "DIN for 2 Directors",
          "Name Reservation",
          "MOA & AOA Drafting",
          "MCA Filing",
          "Certificate of Incorporation"
        ]
      },
      premium: {
        price: "₹9,999",
        features: [
          "Everything in Basic",
          "PAN & TAN Registration",
          "Bank Account Opening",
          "Current Account Setup",
          "Compliance Calendar",
          "1 Year Support"
        ]
      }
    },
    timeline: "15-20 Working Days",
    compliance: [
      "Annual Return Filing",
      "Board Meetings (Minimum 4 per year)",
      "Annual General Meeting",
      "Income Tax Returns",
      "GST Compliance (if applicable)"
    ]
  },
  
  llpRegistration: {
    title: "LLP Registration",
    subtitle: "Limited Liability Partnership Registration",
    description: "Professional LLP registration with complete legal documentation and compliance support",
    features: [
      "LLP Agreement Drafting",
      "Digital Signature for Partners",
      "Name Reservation",
      "Incorporation Certificate",
      "PAN & TAN Registration",
      "Bank Account Opening Support"
    ],
    benefits: [
      "Limited Liability for Partners",
      "Flexible Management Structure",
      "No Minimum Capital Required",
      "Tax Pass-through Benefits",
      "Easy Compliance Requirements",
      "Professional Recognition"
    ],
    documents: [
      "PAN Card of All Partners",
      "Aadhaar Card of All Partners",
      "Passport Size Photographs",
      "Address Proof of Partners",
      "Registered Office Address Proof",
      "Rent Agreement/NOC",
      "Utility Bills"
    ],
    pricing: {
      basic: {
        price: "₹5,999",
        features: [
          "DSC for 2 Partners",
          "Name Reservation",
          "LLP Agreement",
          "Incorporation Filing",
          "Certificate of Incorporation"
        ]
      },
      premium: {
        price: "₹8,999",
        features: [
          "Everything in Basic",
          "PAN & TAN Registration",
          "Bank Account Opening",
          "Compliance Support",
          "1 Year Advisory"
        ]
      }
    },
    timeline: "15-20 Working Days"
  },

  gstServices: {
    title: "GST Services",
    subtitle: "Complete GST Registration & Compliance",
    description: "End-to-end GST services including registration, filing, and compliance management",
    services: [
      {
        name: "GST Registration",
        price: "₹2,999",
        features: [
          "GST Registration Application",
          "Document Verification",
          "GSTIN Certificate",
          "GST Portal Setup"
        ]
      },
      {
        name: "GST Return Filing",
        price: "₹1,500/month",
        features: [
          "GSTR-1 Filing",
          "GSTR-3B Filing",
          "Input Tax Credit Reconciliation",
          "Monthly Compliance"
        ]
      },
      {
        name: "Annual GST Return",
        price: "₹5,999",
        features: [
          "GSTR-9 Preparation",
          "Annual Return Filing",
          "Reconciliation Support",
          "Audit Assistance"
        ]
      }
    ],
    documents: [
      "PAN Card of Business",
      "Aadhaar Card of Authorized Signatory",
      "Business Registration Certificate",
      "Address Proof of Business",
      "Bank Account Statement",
      "Rent Agreement/Property Documents"
    ],
    benefits: [
      "Legal Compliance",
      "Input Tax Credit Benefits",
      "Nationwide Business Operations",
      "Enhanced Credibility",
      "Government Scheme Access"
    ]
  },

  incomeTax: {
    title: "Income Tax Services",
    subtitle: "Complete Tax Filing & Planning Solutions",
    description: "Professional income tax services for individuals, businesses, and professionals",
    services: [
      {
        name: "Individual ITR Filing",
        price: "₹999 - ₹2,999",
        features: [
          "ITR-1, ITR-2, ITR-3, ITR-4",
          "Tax Calculation",
          "Deduction Optimization",
          "E-filing & E-verification"
        ]
      },
      {
        name: "Business ITR Filing",
        price: "₹3,999 - ₹9,999",
        features: [
          "Business Income Tax Returns",
          "P&L Statement Preparation",
          "Balance Sheet",
          "Tax Planning Advisory"
        ]
      },
      {
        name: "TDS Services",
        price: "₹1,999/quarter",
        features: [
          "TDS Return Filing",
          "TDS Reconciliation",
          "Form 16 Preparation",
          "TDS Refund Processing"
        ]
      }
    ],
    taxSlabs: [
      { income: "Up to ₹2.5 Lakh", rate: "Nil" },
      { income: "₹2.5L - ₹5L", rate: "5%" },
      { income: "₹5L - ₹10L", rate: "20%" },
      { income: "Above ₹10L", rate: "30%" }
    ],
    deductions: [
      { section: "80C", description: "Life Insurance, PPF, ELSS", limit: "₹1.5 Lakh" },
      { section: "80D", description: "Health Insurance Premium", limit: "₹25,000" },
      { section: "80E", description: "Education Loan Interest", limit: "No Limit" },
      { section: "80G", description: "Donations to Charity", limit: "50%-100%" }
    ]
  },

  msmeServices: {
    title: "MSME Services",
    subtitle: "MSME Registration & Government Scheme Benefits",
    description: "Complete MSME registration and advisory services for small and medium enterprises",
    categories: [
      {
        type: "Micro Enterprise",
        investment: "Up to ₹1 Crore",
        turnover: "Up to ₹5 Crore"
      },
      {
        type: "Small Enterprise",
        investment: "₹1 Crore - ₹10 Crore",
        turnover: "₹5 Crore - ₹50 Crore"
      },
      {
        type: "Medium Enterprise",
        investment: "₹10 Crore - ₹50 Crore",
        turnover: "₹50 Crore - ₹250 Crore"
      }
    ],
    services: [
      {
        name: "MSME Registration",
        price: "₹1,999",
        features: [
          "Udyam Registration",
          "MSME Certificate",
          "Government Portal Setup",
          "Compliance Support"
        ]
      },
      {
        name: "Loan Documentation",
        price: "₹4,999",
        features: [
          "Project Report Preparation",
          "Financial Projections",
          "Loan Application Support",
          "Bank Liaison"
        ]
      }
    ],
    benefits: [
      "Priority Sector Lending",
      "Collateral-free Loans",
      "Lower Interest Rates",
      "Government Subsidies",
      "Tax Benefits",
      "Market Development Assistance"
    ]
  },

  partnershipServices: {
    title: "Partnership & Proprietorship",
    subtitle: "Business Registration for Partnerships & Sole Proprietorships",
    description: "Complete registration services for partnership firms and proprietorship businesses",
    services: [
      {
        name: "Proprietorship Registration",
        price: "₹2,999",
        features: [
          "Business Registration",
          "PAN & TAN Registration",
          "Bank Account Opening",
          "License Support"
        ]
      },
      {
        name: "Partnership Registration",
        price: "₹4,999",
        features: [
          "Partnership Deed Drafting",
          "Registration with ROF",
          "PAN & TAN Registration",
          "Bank Account Opening"
        ]
      }
    ],
    comparison: [
      {
        aspect: "Formation",
        proprietorship: "Single person business",
        partnership: "2 or more persons"
      },
      {
        aspect: "Liability",
        proprietorship: "Unlimited personal liability",
        partnership: "Unlimited joint liability"
      },
      {
        aspect: "Capital",
        proprietorship: "Owner's capital only",
        partnership: "Combined capital of partners"
      }
    ]
  }
}

export const pricingPlans = {
  startup: {
    name: "Startup Package",
    price: "₹15,999",
    duration: "One-time",
    features: [
      "Company Registration",
      "GST Registration",
      "PAN & TAN Registration",
      "Bank Account Opening",
      "Digital Signature Certificate",
      "Basic Compliance Support"
    ],
    popular: false
  },
  business: {
    name: "Business Package",
    price: "₹25,999",
    duration: "One-time",
    features: [
      "Everything in Startup",
      "MSME Registration",
      "Trademark Search & Filing",
      "Website Development",
      "1 Year Tax Filing Support",
      "Monthly GST Filing (6 months)"
    ],
    popular: true
  },
  enterprise: {
    name: "Enterprise Package",
    price: "₹45,999",
    duration: "One-time",
    features: [
      "Everything in Business",
      "ISO Certification Support",
      "Import Export Code",
      "Professional Tax Registration",
      "Dedicated Account Manager",
      "Priority Support"
    ],
    popular: false
  }
}