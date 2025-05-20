import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Sample service categories and services data
const serviceCategories = [
  {
    id: 'massages',
    name: 'Massages',
    description: 'Our therapeutic massages are designed to relax, rejuvenate, and restore your body and mind.',
    services: [
      {
        id: 1,
        name: 'Swedish Massage',
        description: 'A gentle full-body massage designed to relax muscles, improve circulation, and reduce tension.',
        duration: '60 min',
        price: '$75',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        id: 2,
        name: 'Deep Tissue Massage',
        description: 'Targets the deeper layers of muscle and connective tissue to alleviate chronic muscle tension.',
        duration: '60 min',
        price: '$95',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80'
      },
      {
        id: 3,
        name: 'Aromatherapy Massage',
        description: 'Combines therapeutic massage with essential oils to enhance relaxation and wellbeing.',
        duration: '75 min',
        price: '$85',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        id: 4,
        name: 'Hot Stone Massage',
        description: 'Uses heated stones to loosen tight muscles and improve circulation.',
        duration: '90 min',
        price: '$110',
        image: 'https://images.unsplash.com/photo-1600334130076-77ce4f6c7818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      }
    ]
  },
  {
    id: 'facials',
    name: 'Facials',
    description: 'Our facial treatments use premium products to cleanse, exfoliate, and nourish your skin.',
    services: [
      {
        id: 5,
        name: 'Classic Facial',
        description: 'A thorough cleansing and moisturizing treatment customized for your skin type.',
        duration: '45 min',
        price: '$65',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        id: 6,
        name: 'Anti-Aging Facial',
        description: 'Targets fine lines and wrinkles using powerful antioxidants and peptides.',
        duration: '60 min',
        price: '$85',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        id: 7,
        name: 'Hydrating Facial',
        description: 'Replenishes moisture to dry and dehydrated skin for a radiant complexion.',
        duration: '60 min',
        price: '$75',
        image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80'
      }
    ]
  },
  {
    id: 'body',
    name: 'Body Treatments',
    description: 'Pamper your body with our luxurious scrubs, wraps, and specialized treatments.',
    services: [
      {
        id: 8,
        name: 'Body Scrub',
        description: 'Exfoliates dead skin cells for smoother, softer skin.',
        duration: '45 min',
        price: '$70',
        image: 'https://images.unsplash.com/photo-1600334089960-6dca8078157d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        id: 9,
        name: 'Detox Body Wrap',
        description: 'Helps eliminate toxins and reduce water retention using natural ingredients.',
        duration: '60 min',
        price: '$90',
        image: 'https://images.unsplash.com/photo-1611072172377-0cabc3addb25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        id: 10,
        name: 'Milk and Honey Body Wrap',
        description: 'Nourishes and hydrates skin with the healing properties of milk and honey.',
        duration: '75 min',
        price: '$95',
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      }
    ]
  },
  {
    id: 'packages',
    name: 'Spa Packages',
    description: 'Experience the ultimate in relaxation with our comprehensive spa packages.',
    services: [
      {
        id: 11,
        name: 'Serenity Signature Package',
        description: 'Includes a full-body massage, facial, and reflexology treatment.',
        duration: '3 hours',
        price: '$220',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        id: 12,
        name: 'Couples Retreat',
        description: 'Side-by-side massages followed by a private spa bath for two.',
        duration: '2 hours',
        price: '$250',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        id: 13,
        name: 'Ultimate Relaxation Day',
        description: 'A full day of pampering including massage, facial, body wrap, manicure, pedicure, and lunch.',
        duration: '6 hours',
        price: '$400',
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1745&q=80'
      }
    ]
  }
];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('massages');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <div className="bg-secondary/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-serif mb-4">Our Services</h1>
          <p className="text-lg max-w-3xl">
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