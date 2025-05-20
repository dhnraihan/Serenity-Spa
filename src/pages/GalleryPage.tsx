import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';

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
    src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Spa reception area',
    category: 'interior'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Massage treatment',
    category: 'treatment'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80',
    alt: 'Spa products',
    category: 'products'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Facial treatment',
    category: 'treatment'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1631193571017-58e28dcffa71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    alt: 'Relaxation area',
    category: 'interior'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Spa amenities',
    category: 'products'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Outdoor relaxation area',
    category: 'interior'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
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
    <div className="pt-24">
      {/* Hero Banner */}
      <div className="bg-secondary/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-serif mb-4">Gallery & Testimonials</h1>
          <p className="text-lg max-w-3xl">
            Explore our spa environment and read what our clients have to say about their experiences.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-light p-6 rounded-lg shadow-md"
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
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Spa Gallery</h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center mb-8 space-x-4 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('interior')}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'interior'
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setFilter('treatment')}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'treatment'
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
            >
              Treatments
            </button>
            <button
              onClick={() => setFilter('products')}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'products'
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
            >
              Products
            </button>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => openLightbox(image.src, image.alt)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-all hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={closeLightbox}
          >
            {FiIcons.FiX({size: 30})}
          </button>
          <div
            className="max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage; 