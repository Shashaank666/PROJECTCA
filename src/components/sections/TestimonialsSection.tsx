import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tech Innovations Pvt Ltd",
    rating: 5,
    text: "camphorMinds made our company registration process incredibly smooth. CA Gaurav Singh provided excellent guidance throughout the entire process. Highly recommended for their professional service and timely delivery.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "Company Registration"
  },
  {
    name: "Priya Sharma",
    company: "Retail Business Owner",
    rating: 5,
    text: "Their GST services are outstanding. CA Dimple Singh handles our monthly returns filing efficiently and provides great advisory support. The team is always available for queries and very responsive.",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "GST Services"
  },
  {
    name: "Amit Patel",
    company: "Manufacturing Unit",
    rating: 5,
    text: "MSME registration and loan assistance helped grow our business significantly. The team provided excellent support in documentation and government liaison. Very professional and knowledgeable.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "MSME Services"
  },
  {
    name: "Sunita Agarwal",
    company: "Consulting Services",
    rating: 5,
    text: "Excellent service for LLP registration. The team explained all legal aspects clearly and completed the registration within the promised timeframe. Very satisfied with their professional approach.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "LLP Registration"
  },
  {
    name: "Vikram Singh",
    company: "E-commerce Business",
    rating: 5,
    text: "Their income tax filing service is excellent. They helped optimize our tax savings and ensured timely filing. The team is very knowledgeable about latest tax regulations and deductions.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "Income Tax Services"
  },
  {
    name: "Meera Joshi",
    company: "Healthcare Services",
    rating: 5,
    text: "Partnership firm registration was handled very professionally. All documentation was prepared accurately and the registration was completed smoothly. Great experience working with camphorMinds.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "Partnership Registration"
  }
]

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What Our Clients Say - Real testimonials from satisfied clients who trust our professional CA services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 hover:rotate-1">
                {/* 3D Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl transform -rotate-1 group-hover:rotate-1 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Service Badge */}
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    {testimonial.service}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">7+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}