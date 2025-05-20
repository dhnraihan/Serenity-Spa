import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold text-primary">
          Serenity Spa
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'text-primary font-medium' : 'text-dark hover:text-primary'
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  isActive ? 'text-primary font-medium' : 'text-dark hover:text-primary'
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? 'text-primary font-medium' : 'text-dark hover:text-primary'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => 
                  isActive ? 'text-primary font-medium' : 'text-dark hover:text-primary'
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? 'text-primary font-medium' : 'text-dark hover:text-primary'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Link to="/booking" className="hidden md:block btn btn-primary">
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark hover:text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? FiIcons.FiX({ size: 24 }) : FiIcons.FiMenu({ size: 24 })}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <nav className="container py-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? 'text-primary font-medium block py-2' : 'text-dark hover:text-primary block py-2'
                  }
                  onClick={closeMenu}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    isActive ? 'text-primary font-medium block py-2' : 'text-dark hover:text-primary block py-2'
                  }
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? 'text-primary font-medium block py-2' : 'text-dark hover:text-primary block py-2'
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/gallery" 
                  className={({ isActive }) => 
                    isActive ? 'text-primary font-medium block py-2' : 'text-dark hover:text-primary block py-2'
                  }
                  onClick={closeMenu}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive ? 'text-primary font-medium block py-2' : 'text-dark hover:text-primary block py-2'
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <Link 
                  to="/booking" 
                  className="btn btn-primary inline-block mt-2"
                  onClick={closeMenu}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 