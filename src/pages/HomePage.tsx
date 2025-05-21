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
        className="relative h-[90vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">Your Journey to Relaxation Begins Here</h1>
            <p className="text-lg mb-8">Experience the ultimate in luxury spa treatments and wellness services tailored for your rejuvenation.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking" className="btn btn-primary">
                Book Now
              </Link>
              <Link to="/services" className="btn bg-white text-primary hover:bg-gray-100">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Signature Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-serif">{service.title}</h3>
                    <span className="text-primary font-medium">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={`/services#service-${service.id}`} 
                    className="flex items-center text-primary font-medium"
                  >
                    Learn More {FiIcons.FiChevronRight({ className: "ml-1" })}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Why Choose Serenity Spa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {FiIcons.FiUsers({ className: "text-primary text-2xl" })}
              </div>
              <h3 className="text-xl font-serif mb-3">Expert Therapists</h3>
              <p className="text-gray-600">
                Our licensed therapists have years of experience and are committed to providing exceptional service.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {FiIcons.FiAward({ className: "text-primary text-2xl" })}
              </div>
              <h3 className="text-xl font-serif mb-3">Premium Products</h3>
              <p className="text-gray-600">
                We use only the highest quality natural and organic products for all our treatments.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {FiIcons.FiSmile({ className: "text-primary text-2xl" })}
              </div>
              <h3 className="text-xl font-serif mb-3">Personalized Experience</h3>
              <p className="text-gray-600">
                Every treatment is customized to your specific needs for maximum benefit and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-secondary/30">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {FiIcons.FiStar({ 
                        className: `${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`
                      })}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <h4 className="font-medium">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn btn-primary">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Begin Your Wellness Journey Today</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Treat yourself to a day of relaxation and rejuvenation. Your well-being is our priority.
          </p>
          <Link to="/booking" className="btn bg-white text-primary hover:bg-gray-100">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
