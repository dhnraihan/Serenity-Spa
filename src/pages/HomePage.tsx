import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { heroImage } from '../data/services';

// Featured services from our data
const featuredServices = [
  {
    id: 1,
    title: "Aromatherapy Massage",
    description: "Relax with our signature aromatherapy massage using essential oils.",
    image: require('../assets/images/aromatherapy-massage.jpg'),
    price: "$85"
  },
  {
    id: 2,
    title: "Deep Tissue Massage",
    description: "Alleviate muscle pain and tension with our therapeutic deep tissue massage.",
    image: require('../assets/images/deep-tissue-massage.jpg'),
    price: "$95"
  },
  {
    id: 3,
    title: "Revitalizing Facial",
    description: "Rejuvenate your skin with our customized facial treatment.",
    image: require('../assets/images/classic-facial.jpg'),
    price: "$75"
  }
];

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment: "The aromatherapy massage was exactly what I needed. The atmosphere was so peaceful, and the staff was incredibly professional.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Brown",
    comment: "I've been to many spas, but Serenity Spa is by far the best. The deep tissue massage resolved my back pain issues.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Lee",
    comment: "The facial treatment left my skin glowing for days! I highly recommend their skincare services.",
    rating: 4
  }
];

const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] flex items-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-white"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-wide leading-tight">Your Journey to Relaxation Begins Here</h1>
            <p className="text-xl mb-10 font-light leading-relaxed">Experience the ultimate in luxury spa treatments and wellness services tailored for your rejuvenation.</p>
            <div className="flex flex-wrap gap-5">
              <Link to="/booking" className="btn btn-primary text-lg px-8 py-3 hover:shadow-xl transition-all duration-300">
                Book Now
              </Link>
              <Link to="/services" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 hover:shadow-xl transition-all duration-300">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section bg-light py-24">
        <div className="container">
          <h2 className="text-4xl font-serif mb-16 text-center text-primary">Our Signature Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-72 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-serif text-primary">{service.title}</h3>
                    <span className="text-primary font-medium text-xl">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link 
                    to={`/services#service-${service.id}`} 
                    className="flex items-center text-primary font-medium text-lg transition-all hover:translate-x-1 duration-300"
                  >
                    Learn More {FiIcons.FiChevronRight({ className: "ml-2" })}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/services" className="btn btn-primary text-lg px-8 py-3 hover:shadow-xl transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white py-24">
        <div className="container">
          <h2 className="text-4xl font-serif mb-16 text-center text-primary">Why Choose Serenity Spa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div 
              className="text-center p-8 bg-light rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto bg-secondary w-20 h-20 rounded-full flex items-center justify-center mb-6">
                {FiIcons.FiUsers({ className: "text-primary text-3xl" })}
              </div>
              <h3 className="text-2xl font-serif mb-4">Expert Therapists</h3>
              <p className="text-gray-600 leading-relaxed">
                Our licensed therapists have years of experience and are committed to providing exceptional service tailored to your unique needs.
              </p>
            </motion.div>
            <motion.div 
              className="text-center p-8 bg-light rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mx-auto bg-secondary w-20 h-20 rounded-full flex items-center justify-center mb-6">
                {FiIcons.FiAward({ className: "text-primary text-3xl" })}
              </div>
              <h3 className="text-2xl font-serif mb-4">Premium Products</h3>
              <p className="text-gray-600 leading-relaxed">
                We use only the highest quality natural and organic products for all our treatments, ensuring the best results for your skin and body.
              </p>
            </motion.div>
            <motion.div 
              className="text-center p-8 bg-light rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mx-auto bg-secondary w-20 h-20 rounded-full flex items-center justify-center mb-6">
                {FiIcons.FiSmile({ className: "text-primary text-3xl" })}
              </div>
              <h3 className="text-2xl font-serif mb-4">Personalized Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Every treatment is customized to your specific needs for maximum benefit and comfort, ensuring a truly personalized wellness journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-secondary/20 py-24">
        <div className="container">
          <h2 className="text-4xl font-serif mb-16 text-center text-primary">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="mr-1">
                      {FiIcons.FiStar({ 
                        size: 20,
                        className: `${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`
                      })}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.comment}"</p>
                <h4 className="font-medium text-lg">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/gallery" className="btn btn-primary text-lg px-8 py-3 hover:shadow-xl transition-all duration-300">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 bg-cover bg-center bg-fixed" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(25, 118, 116, 0.7), rgba(25, 118, 116, 0.8)), url(${heroImage})` 
        }}
      >
        <div className="container text-center">
          <h2 className="text-4xl font-serif mb-8 text-white tracking-wide">Begin Your Wellness Journey Today</h2>
          <p className="max-w-2xl mx-auto text-xl mb-10 font-light text-white leading-relaxed">
            Treat yourself to a day of relaxation and rejuvenation. Your well-being is our priority.
          </p>
          <Link to="/booking" className="btn bg-white text-primary hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-lg px-8 py-3">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
