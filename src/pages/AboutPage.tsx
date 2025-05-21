import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import heroBg from '../assets/images/hero-bg.jpg';
import spaInterior from '../assets/images/spa-interior.jpg';
import team1Img from '../assets/images/team1.jpg';
import team2Img from '../assets/images/team2.jpg';
import team3Img from '../assets/images/team3.jpg';
import team4Img from '../assets/images/team4.jpg';
import wellnessStone from '../assets/images/wellness-stone.jpg';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Founder & Lead Therapist',
    bio: 'Emily has over 15 years of experience in the spa industry. She founded Serenity Spa with a vision to create a sanctuary of wellness and relaxation.',
    specialties: ['Deep Tissue Massage', 'Aromatherapy', 'Reflexology'],
    image: team1Img
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Senior Massage Therapist',
    bio: 'Michael specializes in therapeutic massage techniques that alleviate chronic pain and improve mobility. His dedicated approach has helped countless clients.',
    specialties: ['Sports Massage', 'Swedish Massage', 'Hot Stone Therapy'],
    image: team2Img
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'Skincare Specialist',
    bio: 'With a background in dermatology, Sophia brings scientific expertise to our facial treatments. She is passionate about helping clients achieve their healthiest skin.',
    specialties: ['Anti-Aging Facials', 'Acne Treatment', 'Chemical Peels'],
    image: team3Img
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Wellness Coordinator',
    bio: "David ensures that every client's experience is seamless and personalized. He oversees our service menu and wellness programs to deliver exceptional experiences.",
    specialties: ['Client Relations', 'Treatment Planning', 'Wellness Education'],
    image: team4Img
  }
];

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div 
        className="py-20 bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})` }}
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl font-serif mb-4">About Serenity Spa & Wellness</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Discover our journey, values, and the passionate team behind our exceptional spa experiences.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  Serenity Spa & Wellness was founded in 2010 with a simple yet profound mission: to create a sanctuary where clients could escape the stresses of everyday life and find true relaxation and renewal.
                </p>
                <p>
                  What began as a small studio with just three treatment rooms has grown into a comprehensive wellness center, offering a wide range of services designed to nurture the body, mind, and spirit.
                </p>
                <p>
                  Throughout our journey, we have remained committed to our core values: excellence in service, use of premium natural products, continuous education, and a personalized approach to wellness.
                </p>
                <p>
                  Today, we are proud to be recognized as one of the leading wellness destinations in the area, serving clients from all walks of life who seek a higher standard of self-care.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-ratio-1/1 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={spaInterior}
                  alt="Spa interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-serif">12+ Years</p>
                <p>of excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <span className="text-2xl font-serif text-primary">1</span>
              </div>
              <h3 className="text-xl font-serif mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every service, treatment, and interaction with our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <span className="text-2xl font-serif text-primary">2</span>
              </div>
              <h3 className="text-xl font-serif mb-3">Personalization</h3>
              <p className="text-gray-600">
                We believe in customizing experiences to meet the unique needs of each client.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <span className="text-2xl font-serif text-primary">3</span>
              </div>
              <h3 className="text-xl font-serif mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and the highest ethical standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <span className="text-2xl font-serif text-primary">4</span>
              </div>
              <h3 className="text-xl font-serif mb-3">Continuous Growth</h3>
              <p className="text-gray-600">
                We continually educate ourselves and improve our offerings to better serve our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-gray-600">
            Our team of licensed therapists and wellness specialists are dedicated to providing exceptional service and personalized care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member.id * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                    <a href="#" className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {FiIcons.FiInstagram({size: 24})}
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div>
                    <p className="font-medium mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="text-xs bg-secondary/30 text-primary px-2 py-1 rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section 
        className="py-16 bg-primary text-white bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(25, 118, 116, 0.8), rgba(25, 118, 116, 0.9)), url(${wellnessStone})` }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to experience the Serenity difference?</h2>
          <Link to="/booking" className="btn bg-white text-primary hover:bg-gray-100">
            Book Your First Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 