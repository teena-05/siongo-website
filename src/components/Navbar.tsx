import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/my-logo.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-green-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 bg-black rounded-lg p-1.5">
              <img 
                src={logo} 
                alt="SIONG'O Logo" 
                className="h-14 w-14 object-cover"
                style={{ 
                  filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.2))',
                  transform: 'scale(1.2)'
                }}
              />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">SIONG'O</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              Contact
            </button>
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
                onClick={() => scrollToSection('home')} 
                className="text-white hover:text-green-200 transition-colors text-left py-2 px-4 rounded hover:bg-green-700"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white hover:text-green-200 transition-colors text-left py-2 px-4 rounded hover:bg-green-700"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white hover:text-green-200 transition-colors text-left py-2 px-4 rounded hover:bg-green-700"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white hover:text-green-200 transition-colors text-left py-2 px-4 rounded hover:bg-green-700"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;