import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-serif mb-4">Serenity Spa</h3>
            <p className="mb-6 text-gray-300">
              Experience the ultimate in relaxation and rejuvenation at our luxurious spa retreat.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">
                {FiIcons.FiFacebook({ className: "w-5 h-5" })}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">
                {FiIcons.FiInstagram({ className: "w-5 h-5" })}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">
                {FiIcons.FiTwitter({ className: "w-5 h-5" })}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-secondary">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                {FiIcons.FiMapPin({ className: "mt-1 text-secondary" })}
                <span className="text-gray-300">123 Relaxation Blvd, Wellness City, WC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                {FiIcons.FiPhone({ className: "text-secondary" })}
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                {FiIcons.FiMail({ className: "text-secondary" })}
                <span className="text-gray-300">info@serenityspa.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-serif mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-300">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Sunday</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
            </ul>
            <Link to="/booking" className="btn btn-primary mt-4 inline-block">
              Book Now
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>© {currentYear} Serenity Spa & Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 