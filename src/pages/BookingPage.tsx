import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';

// Sample service data - would typically come from an API or database
const services = [
  { id: 'swedish', name: 'Swedish Massage' },
  { id: 'deep_tissue', name: 'Deep Tissue Massage' },
  { id: 'aromatherapy', name: 'Aromatherapy Massage' },
  { id: 'hot_stone', name: 'Hot Stone Massage' },
  { id: 'classic_facial', name: 'Classic Facial' },
  { id: 'anti_aging', name: 'Anti-Aging Facial' },
  { id: 'hydrating', name: 'Hydrating Facial' },
  { id: 'body_scrub', name: 'Body Scrub' },
  { id: 'detox_wrap', name: 'Detox Body Wrap' },
  { id: 'milk_honey', name: 'Milk and Honey Body Wrap' },
  { id: 'signature', name: 'Serenity Signature Package' },
  { id: 'couples', name: 'Couples Retreat' },
  { id: 'ultimate', name: 'Ultimate Relaxation Day' }
];

const BookingPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 19; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 19 && minute > 0) continue; // Last appointment at 7:00 PM
        
        const hourFormatted = hour % 12 || 12;
        const period = hour < 12 ? 'AM' : 'PM';
        const minuteFormatted = minute === 0 ? '00' : minute;
        
        slots.push(`${hourFormatted}:${minuteFormatted} ${period}`);
      }
    }
    return slots;
  };
  
  const timeSlots = generateTimeSlots();

  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    service: Yup.string().required('Please select a service'),
    date: Yup.date().required('Date is required').min(new Date(), 'Date cannot be in the past'),
    time: Yup.string().required('Please select a time'),
    notes: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setSubmitError('');
      
      try {
        // In a real application, you would replace these with your EmailJS credentials
        // await emailjs.send(
        //   'YOUR_SERVICE_ID',
        //   'YOUR_TEMPLATE_ID',
        //   values,
        //   'YOUR_USER_ID'
        // );
        
        // Simulating API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        setSubmitSuccess(true);
        formik.resetForm();
      } catch (error) {
        setSubmitError('There was a problem submitting your booking. Please try again or contact us directly.');
        console.error('Booking form error:', error);
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
          <h1 className="text-4xl font-serif mb-4">Book Your Appointment</h1>
          <p className="text-lg max-w-3xl">
            Schedule your spa experience online. Please fill out the form below and we will confirm your appointment.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-100 border border-green-300 text-green-800 p-6 rounded-lg shadow-md"
                >
                  <h2 className="text-2xl font-serif mb-3">Booking Request Received!</h2>
                  <p className="mb-4">
                    Thank you for booking with Serenity Spa & Wellness. We have received your request and will confirm your appointment shortly via email.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn btn-primary"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-serif mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border rounded-md overflow-hidden focus-within:border-primary">
                        <div className="p-3 border-r">
                          {FiIcons.FiUser({className: "text-gray-400"})}
                        </div>
                        <input
                          id="name"
                          type="text"
                          className="w-full p-3 focus:outline-none"
                          placeholder="John Doe"
                          {...formik.getFieldProps('name')}
                        />
                      </div>
                      {formik.touched.name && formik.errors.name && (
                        <div className="text-red-500 mt-1 text-sm">{formik.errors.name}</div>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border rounded-md overflow-hidden focus-within:border-primary">
                        <div className="p-3 border-r">
                          {FiIcons.FiPhone({className: "text-gray-400"})}
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          className="w-full p-3 focus:outline-none"
                          placeholder="(123) 456-7890"
                          {...formik.getFieldProps('phone')}
                        />
                      </div>
                      {formik.touched.phone && formik.errors.phone && (
                        <div className="text-red-500 mt-1 text-sm">{formik.errors.phone}</div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border rounded-md overflow-hidden focus-within:border-primary">
                        <div className="p-3 border-r">
                          {FiIcons.FiMail({className: "text-gray-400"})}
                        </div>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-3 focus:outline-none"
                          placeholder="email@example.com"
                          {...formik.getFieldProps('email')}
                        />
                      </div>
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 mt-1 text-sm">{formik.errors.email}</div>
                      )}
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block mb-2 font-medium">
                        Service <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border rounded-md overflow-hidden focus-within:border-primary">
                        <div className="p-3 border-r">
                          {FiIcons.FiMessageSquare({className: "text-gray-400"})}
                        </div>
                        <select
                          id="service"
                          className="w-full p-3 focus:outline-none"
                          {...formik.getFieldProps('service')}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {formik.touched.service && formik.errors.service && (
                        <div className="text-red-500 mt-1 text-sm">{formik.errors.service}</div>
                      )}
                    </div>

                    {/* Date Field */}
                    <div>
                      <label htmlFor="date" className="block mb-2 font-medium">
                        Date <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border rounded-md overflow-hidden focus-within:border-primary">
                        <div className="p-3 border-r">
                          {FiIcons.FiCalendar({className: "text-gray-400"})}
                        </div>
                        <input
                          id="date"
                          type="date"
                          className="w-full p-3 focus:outline-none"
                          {...formik.getFieldProps('date')}
                        />
                      </div>
                      {formik.touched.date && formik.errors.date && (
                        <div className="text-red-500 mt-1 text-sm">{formik.errors.date}</div>
                      )}
                    </div>

                    {/* Time Field */}
                    <div>
                      <label htmlFor="time" className="block mb-2 font-medium">
                        Time <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border rounded-md overflow-hidden focus-within:border-primary">
                        <div className="p-3 border-r">
                          {FiIcons.FiClock({className: "text-gray-400"})}
                        </div>
                        <select
                          id="time"
                          className="w-full p-3 focus:outline-none"
                          {...formik.getFieldProps('time')}
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((slot, index) => (
                            <option key={index} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                      {formik.touched.time && formik.errors.time && (
                        <div className="text-red-500 mt-1 text-sm">{formik.errors.time}</div>
                      )}
                    </div>
                  </div>

                  {/* Notes Field */}
                  <div>
                    <label htmlFor="notes" className="block mb-2 font-medium">
                      Special Requests or Notes
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      className="w-full p-3 border rounded-md focus:outline-none focus:border-primary"
                      placeholder="Any special requests or information we should know..."
                      {...formik.getFieldProps('notes')}
                    ></textarea>
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
                      className={`btn btn-primary w-full md:w-auto ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Processing...' : 'Book Appointment'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-secondary/20 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-serif mb-4">Booking Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Opening Hours</h4>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 8:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Contact</h4>
                    <p className="mt-2 text-gray-600">
                      If you prefer to book by phone or have questions, please call us at:
                    </p>
                    <p className="font-medium mt-1">(123) 456-7890</p>
                  </div>

                  <div>
                    <h4 className="font-medium">Cancellation Policy</h4>
                    <p className="mt-2 text-gray-600">
                      We require 24 hours notice for cancellations or rescheduling to avoid a 50% cancellation fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
