import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';

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
    <div className="pt-24">
      {/* Hero Banner */}
      <div className="bg-secondary/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-serif mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl">
            Have questions or need assistance? We're here to help. Reach out to our team using the contact information below.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      {FiIcons.FiMapPin({className: "text-primary text-xl"})}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Relaxation Blvd<br />
                        Wellness City, WC 12345
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      {FiIcons.FiPhone({className: "text-primary text-xl"})}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      {FiIcons.FiMail({className: "text-primary text-xl"})}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-600">info@serenityspa.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      {FiIcons.FiClock({className: "text-primary text-xl"})}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 8:00 PM<br />
                        Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/30 text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    {FiIcons.FiFacebook({})}
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/30 text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    {FiIcons.FiInstagram({})}
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/30 text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    {FiIcons.FiTwitter({})}
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
                  className="bg-green-100 border border-green-300 text-green-800 p-6 rounded-lg shadow-md"
                >
                  <h2 className="text-2xl font-serif mb-3">Message Sent!</h2>
                  <p className="mb-4">
                    Thank you for contacting Serenity Spa & Wellness. We have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-serif mb-6">Send Us a Message</h2>
                  <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block mb-2 font-medium">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full p-3 border rounded-md focus:outline-none focus:border-primary"
                          placeholder="Your name"
                          {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name && (
                          <div className="text-red-500 mt-1 text-sm">{formik.errors.name}</div>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-3 border rounded-md focus:outline-none focus:border-primary"
                          placeholder="Your email"
                          {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <div className="text-red-500 mt-1 text-sm">{formik.errors.email}</div>
                        )}
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-medium">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full p-3 border rounded-md focus:outline-none focus:border-primary"
                        placeholder="Message subject"
                        {...formik.getFieldProps('subject')}
                      />
                      {formik.touched.subject && formik.errors.subject && (
                        <div className="text-red-500 mt-1 text-sm">{formik.errors.subject}</div>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full p-3 border rounded-md focus:outline-none focus:border-primary"
                        placeholder="Your message"
                        {...formik.getFieldProps('message')}
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <div className="text-red-500 mt-1 text-sm">{formik.errors.message}</div>
                      )}
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <div className="text-red-500 bg-red-50 p-3 rounded-md border border-red-200">
                        {submitError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn btn-primary ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="mt-12">
        <div className="container mb-8">
          <h2 className="text-2xl font-serif mb-6">Find Us</h2>
        </div>
        <div className="h-[400px] w-full bg-gray-200">
          {/* In a real application, you would replace this with an actual Google Map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619756483453!5m2!1sen!2sca" 
            className="w-full h-full border-0"
            title="Serenity Spa & Wellness Location"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 