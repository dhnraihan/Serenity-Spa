import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import heroBg from '../assets/images/hero-bg.jpg';
import spaInterior from '../assets/images/spa-interior.jpg';
import swedishMassage from '../assets/images/swedish-massage.jpg';
import deepTissueMassage from '../assets/images/deep-tissue-massage.jpg';
import aromatherapyMassage from '../assets/images/aromatherapy-massage.jpg';
import hotStoneMassage from '../assets/images/hot-stone-massage.jpg';
import classicFacial from '../assets/images/classic-facial.jpg';
import antiAgingFacial from '../assets/images/anti-aging-facial.jpg';
import hydratingFacial from '../assets/images/hydrating-facial.jpg';
import bodyScrub from '../assets/images/body-scrub.jpg';
import { Link } from 'react-router-dom';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    comment: 'The aromatherapy massage was exactly what I needed. The atmosphere was so peaceful, and the staff was incredibly professional.',
    rating: 5,
    date: 'May 15, 2023',
    service: 'Aromatherapy Massage'
  },
  {
    id: 2,
    name: 'Michael Brown',
    comment: 'I\'ve been to many spas, but Serenity Spa is by far the best. The deep tissue massage resolved my back pain issues that I\'ve been struggling with for months.',
    rating: 5,
    date: 'April 28, 2023',
    service: 'Deep Tissue Massage'
  },
  {
    id: 3,
    name: 'Jennifer Lee',
    comment: 'The facial treatment left my skin glowing for days! I highly recommend their skincare services.',
    rating: 4,
    date: 'June 3, 2023',
    service: 'Anti-Aging Facial'
  },
  {
    id: 4,
    name: 'David Wilson',
    comment: 'My wife and I enjoyed the couples retreat package. It was the perfect way to celebrate our anniversary. The private spa bath was incredible!',
    rating: 5,
    date: 'May 22, 2023',
    service: 'Couples Retreat'
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    comment: 'The hot stone massage was amazing! I felt all the tension melt away. Will definitely be back soon.',
    rating: 5,
    date: 'June 10, 2023',
    service: 'Hot Stone Massage'
  },
  {
    id: 6,
    name: 'Robert Thompson',
    comment: 'The detox body wrap was a unique experience. I felt refreshed and energized afterward. The staff was knowledgeable and attentive.',
    rating: 4,
    date: 'April 15, 2023',
    service: 'Detox Body Wrap'
  }
];

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: spaInterior,
    alt: 'Spa reception area',
    category: 'interior'
  },
  {
    id: 2,
    src: deepTissueMassage,
    alt: 'Massage treatment',
    category: 'treatment'
  },
  {
    id: 3,
    src: bodyScrub,
    alt: 'Spa products',
    category: 'products'
  },
  {
    id: 4,
    src: classicFacial,
    alt: 'Facial treatment',
    category: 'treatment'
  },
  {
    id: 5,
    src: heroBg,
    alt: 'Relaxation area',
    category: 'interior'
  },
  {
    id: 6,
    src: antiAgingFacial,
    alt: 'Spa amenities',
    category: 'products'
  },
  {
    id: 7,
    src: swedishMassage,
    alt: 'Outdoor relaxation area',
    category: 'interior'
  },
  {
    id: 8,
    src: hotStoneMassage,
    alt: 'Spa bath',
    category: 'treatment'
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div 
        className="py-28 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})` }}
      >
        <div className="container text-center text-white">
          <h1 className="text-5xl font-serif mb-6 tracking-wide">Gallery & Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Explore our spa environment and read what our clients have to say about their experiences.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="section bg-white py-24">
        <div className="container">
          <h2 className="text-4xl font-serif mb-16 text-center text-primary">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
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
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-medium text-lg">{testimonial.name}</h4>
                    <p className="text-primary">{testimonial.service}</p>
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-light py-24">
        <div className="container">
          <h2 className="text-4xl font-serif mb-16 text-center text-primary">Spa Gallery</h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center mb-12 space-x-6 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-md transition-all text-lg font-medium shadow ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('interior')}
              className={`px-6 py-3 rounded-md transition-all text-lg font-medium shadow ${
                filter === 'interior'
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setFilter('treatment')}
              className={`px-6 py-3 rounded-md transition-all text-lg font-medium shadow ${
                filter === 'treatment'
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
            >
              Treatments
            </button>
            <button
              onClick={() => setFilter('products')}
              className={`px-6 py-3 rounded-md transition-all text-lg font-medium shadow ${
                filter === 'products'
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
            >
              Products
            </button>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg shadow-xl cursor-pointer group"
                onClick={() => openLightbox(image.src, image.alt)}
              >
                <div className="relative aspect-square">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/70 rounded-full p-3">
                      {FiIcons.FiZoomIn({ size: 24 })}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
          >
            {FiIcons.FiX({ size: 32 })}
          </button>
          <div 
            className="max-w-6xl max-h-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            />
            <p className="text-white text-center mt-4 text-lg font-light">{selectedImage.alt}</p>
          </div>
        </motion.div>
      )}

      {/* Call to action */}
      <section 
        className="py-24 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `linear-gradient(rgba(25, 118, 116, 0.7), rgba(25, 118, 116, 0.8)), url(${heroBg})` }}
      >
        <div className="container text-center">
          <h2 className="text-4xl font-serif mb-8 text-white tracking-wide">Experience the Serenity Difference</h2>
          <Link to="/booking" className="btn bg-white text-primary hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-lg px-8 py-3">
            Book Your Visit Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage; 