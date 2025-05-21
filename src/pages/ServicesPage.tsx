import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceCategories } from '../data/services';
import heroBg from '../assets/images/hero-bg.jpg';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('massages');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div 
        className="py-28 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})` }}
      >
        <div className="container text-center text-white">
          <h1 className="text-5xl font-serif mb-6 tracking-wide">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Discover our range of premium spa services designed to rejuvenate your body, mind, and spirit.
            Each treatment is performed by our expert therapists using the finest products.
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-20 bg-white z-10 shadow-md">
        <div className="container py-6">
          <div className="flex overflow-x-auto space-x-8 no-scrollbar justify-center">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`py-3 px-5 whitespace-nowrap font-medium text-lg transition-all ${
                  activeCategory === category.id
                    ? 'text-primary border-b-3 border-primary'
                    : 'text-dark hover:text-primary hover:border-b-3 hover:border-primary/30'
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services List */}
      <section className="section py-20">
        <div className="container">
          {serviceCategories.map((category) => (
            <div 
              key={category.id}
              id={category.id}
              className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
            >
              <div className="mb-16">
                <h2 className="text-4xl font-serif mb-5 text-center text-primary">{category.name}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center font-light leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-12">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-lg shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                    id={`service-${service.id}`}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="rounded-lg w-full h-64 object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex flex-wrap justify-between items-start mb-5">
                          <h3 className="text-2xl font-serif text-primary">{service.name}</h3>
                          <div className="text-right">
                            <span className="block text-primary font-medium text-2xl">{service.price}</span>
                            <span className="text-gray-500 text-base">{service.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        <Link to="/booking" className="inline-block btn btn-primary px-8 py-3 hover:shadow-lg transition-all duration-300">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary/20 py-24">
        <div className="container">
          <h2 className="text-4xl font-serif mb-16 text-center text-primary">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-serif mb-4 text-primary">What should I wear to my spa treatment?</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide luxurious robes and slippers for your comfort. You may undress to your level of comfort for treatments. Our therapists are professionally trained in proper draping techniques to ensure your privacy and comfort at all times.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-serif mb-4 text-primary">How early should I arrive for my appointment?</h3>
              <p className="text-gray-600 leading-relaxed">
                We recommend arriving 15-20 minutes before your scheduled appointment to complete any necessary forms, change into a robe, and begin to relax. This allows you to fully enjoy your spa experience without feeling rushed.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif mb-4 text-primary">Are gratuities included in the service price?</h3>
              <p className="text-gray-600 leading-relaxed">
                Gratuities are not included in the service price but are greatly appreciated. A typical gratuity is 15-20% of the service price. If you received exceptional service, please feel free to adjust accordingly.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-serif mb-4 text-primary">What is your cancellation policy?</h3>
              <p className="text-gray-600 leading-relaxed">
                We require 24 hours notice for cancellations or rescheduling to avoid a 50% cancellation fee. This policy allows us to accommodate other clients who may be waiting for an appointment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section 
        className="py-24 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `linear-gradient(rgba(25, 118, 116, 0.7), rgba(25, 118, 116, 0.8)), url(${heroBg})` }}
      >
        <div className="container text-center">
          <h2 className="text-4xl font-serif mb-8 text-white tracking-wide">Ready to experience ultimate relaxation?</h2>
          <Link to="/booking" className="btn bg-white text-primary hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-lg px-8 py-3">
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 