import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/my-logo.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home first
      navigate('/');
      // Use setTimeout to ensure the navigation happens before scrolling
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-green-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex-shrink-0 bg-black rounded-lg p-1.5 h-14 w-14">
              <img 
                src={logo} 
                alt="SIONG'O Logo" 
                className="w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 0 1px rgba(8, 185, 76, 0.2))' }}
              />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">SIONG'O</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('home')} 
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('services')} 
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('contact')} 
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              Contact
            </button>
            <Link 
              to="/legal" 
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              Legal
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-green-200 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-green-800 rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('home')} 
                className="text-white hover:text-green-200 transition-colors text-left py-2 px-4 rounded hover:bg-green-700"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('about')} 
                className="text-white hover:text-green-200 transition-colors text-left py-2 px-4 rounded hover:bg-green-700"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('services')} 
                className="text-white hover:text-green-200 transition-colors text-left py-2 px-4 rounded hover:bg-green-700"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="text-white hover:text-green-200 transition-colors text-left py-2 px-4 rounded hover:bg-green-700"
              >
                Contact
              </button>
              <Link 
                to="/legal" 
                className="text-white hover:text-green-200 transition-colors text-left py-2 px-4 rounded hover:bg-green-700"
              >
                Legal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;