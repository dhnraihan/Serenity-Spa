import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import heroBg from '../assets/images/hero-bg.jpg';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setSubmitError('');
      
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        setSubmitSuccess(true);
        formik.resetForm();
      } catch (error) {
        setSubmitError('There was a problem sending your message. Please try again or contact us directly.');
        console.error('Contact form error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div 
        className="py-28 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})` }}
      >
        <div className="container text-center text-white">
          <h1 className="text-5xl font-serif mb-6 tracking-wide">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Have questions or need assistance? We're here to help. Reach out to our team using the contact information below.
          </p>
        </div>
      </div>

      <section className="section py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-xl mb-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-serif mb-8 text-primary border-b border-gray-100 pb-4">Contact Information</h2>
                <ul className="space-y-8">
                  <li className="flex items-start">
                    <div className="mr-5 mt-1 p-3 rounded-full bg-secondary/30">
                      {FiIcons.FiMapPin({className: "text-primary text-xl"})}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        123 Relaxation Blvd<br />
                        Wellness City, WC 12345
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-5 mt-1 p-3 rounded-full bg-secondary/30">
                      {FiIcons.FiPhone({className: "text-primary text-xl"})}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Phone</h3>
                      <p className="text-gray-600 text-lg">(123) 456-7890</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-5 mt-1 p-3 rounded-full bg-secondary/30">
                      {FiIcons.FiMail({className: "text-primary text-xl"})}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Email</h3>
                      <p className="text-gray-600 text-lg">info@serenityspa.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-5 mt-1 p-3 rounded-full bg-secondary/30">
                      {FiIcons.FiClock({className: "text-primary text-xl"})}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Hours</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Monday - Friday: <span className="font-medium">9:00 AM - 8:00 PM</span><br />
                        Saturday: <span className="font-medium">9:00 AM - 6:00 PM</span><br />
                        Sunday: <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-serif mb-6 text-primary">Follow Us</h2>
                <div className="flex space-x-5">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/30 text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                  >
                    {FiIcons.FiFacebook({size: 22})}
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/30 text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                  >
                    {FiIcons.FiInstagram({size: 22})}
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/30 text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                  >
                    {FiIcons.FiTwitter({size: 22})}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-100 border border-green-300 text-green-800 p-8 rounded-lg shadow-xl"
                >
                  <h2 className="text-3xl font-serif mb-4">Message Sent!</h2>
                  <p className="mb-6 text-lg">
                    Thank you for contacting Serenity Spa & Wellness. We have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn btn-primary px-8 py-3 hover:shadow-lg transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-lg shadow-xl border border-gray-100"
                >
                  <h2 className="text-3xl font-serif mb-8 text-primary border-b border-gray-200 pb-4">Send Us a Message</h2>
                  <form onSubmit={formik.handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block mb-3 font-medium text-gray-700">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-300">
                          <div className="p-3.5 border-r border-gray-300 bg-gray-50">
                            {FiIcons.FiUser({className: "text-gray-400", size: 20})}
                          </div>
                          <input
                            id="name"
                            type="text"
                            className="w-full p-3.5 focus:outline-none text-gray-700"
                            placeholder="Your name"
                            {...formik.getFieldProps('name')}
                          />
                        </div>
                        {formik.touched.name && formik.errors.name && (
                          <div className="text-red-500 mt-2 text-sm">{formik.errors.name}</div>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block mb-3 font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-300">
                          <div className="p-3.5 border-r border-gray-300 bg-gray-50">
                            {FiIcons.FiMail({className: "text-gray-400", size: 20})}
                          </div>
                          <input
                            id="email"
                            type="email"
                            className="w-full p-3.5 focus:outline-none text-gray-700"
                            placeholder="Your email"
                            {...formik.getFieldProps('email')}
                          />
                        </div>
                        {formik.touched.email && formik.errors.email && (
                          <div className="text-red-500 mt-2 text-sm">{formik.errors.email}</div>
                        )}
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block mb-3 font-medium text-gray-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-300">
                        <div className="p-3.5 border-r border-gray-300 bg-gray-50">
                          {FiIcons.FiMessageSquare({className: "text-gray-400", size: 20})}
                        </div>
                        <input
                          id="subject"
                          type="text"
                          className="w-full p-3.5 focus:outline-none text-gray-700"
                          placeholder="Message subject"
                          {...formik.getFieldProps('subject')}
                        />
                      </div>
                      {formik.touched.subject && formik.errors.subject && (
                        <div className="text-red-500 mt-2 text-sm">{formik.errors.subject}</div>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block mb-3 font-medium text-gray-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                        placeholder="Your message"
                        {...formik.getFieldProps('message')}
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <div className="text-red-500 mt-2 text-sm">{formik.errors.message}</div>
                      )}
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <div className="text-red-500 bg-red-50 p-4 rounded-md border border-red-200">
                        {submitError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn btn-primary px-8 py-3 text-lg hover:shadow-lg transition-all duration-300 ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xb9f650070063b8d0!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1627309371339!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Serenity Spa Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 