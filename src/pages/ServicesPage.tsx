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
        className="py-[70px] bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})` }}
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl font-serif mb-4">Our Services</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Discover our range of premium spa services designed to rejuvenate your body, mind, and spirit.
            Each treatment is performed by our expert therapists using the finest products.
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-20 bg-white z-10 shadow-sm">
        <div className="container py-4">
          <div className="flex overflow-x-auto space-x-6 no-scrollbar">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`py-2 px-4 whitespace-nowrap font-medium transition-all ${
                  activeCategory === category.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-dark hover:text-primary'
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
      <section className="section">
        <div className="container">
          {serviceCategories.map((category) => (
            <div 
              key={category.id}
              id={category.id}
              className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
            >
              <div className="mb-12">
                <h2 className="text-3xl font-serif mb-3">{category.name}</h2>
                <p className="text-lg text-gray-600 max-w-3xl">
                  {category.description}
                </p>
              </div>

              <div className="space-y-8">
                {category.services.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-md overflow-hidden"
                    id={`service-${service.id}`}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="rounded-lg w-full h-48 object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex flex-wrap justify-between items-start mb-3">
                          <h3 className="text-xl font-serif">{service.name}</h3>
                          <div className="text-right">
                            <span className="block text-primary font-medium text-xl">{service.price}</span>
                            <span className="text-gray-500 text-sm">{service.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <Link to="/booking" className="inline-block btn btn-primary">
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
      <section className="section bg-secondary/20">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-serif mb-2">What should I wear to my spa treatment?</h3>
              <p className="text-gray-600">
                We provide robes and slippers for your convenience. You may undress to your comfort level for treatments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">How early should I arrive for my appointment?</h3>
              <p className="text-gray-600">
                We recommend arriving 15 minutes before your scheduled appointment to complete any necessary forms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Are gratuities included in the service price?</h3>
              <p className="text-gray-600">
                Gratuities are not included in the service price but are greatly appreciated. A typical gratuity is 15-20%.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                We require 24 hours notice for cancellations to avoid a 50% cancellation fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to experience ultimate relaxation?</h2>
          <Link to="/booking" className="btn bg-white text-primary hover:bg-gray-100">
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 