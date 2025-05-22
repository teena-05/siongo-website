import React from 'react';
import { CreditCard, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <CreditCard className="h-8 w-8 text-green-300 mr-2" />
              <span className="text-white font-bold text-xl">SIONG'O</span>
            </div>
            <p className="text-green-100 mb-6">
              Empowering communities through financial inclusion and sustainable solutionS.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/siongomicrofinancecompanyltd" target="_blank" rel="noopener noreferrer" className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition-colors">
                <Instagram className="h-5 w-5 text-green-200" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-green-100 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  Home Loans
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  Business Loans
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  Agricultural Financing
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  Financial Advisory
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-green-300 mr-3 mt-1" />
                <div>
                  <p className="text-green-100">+255 758 090 751</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-green-300 mr-3 mt-1" />
                <div>
                  <p className="text-green-100">siongomicrofinance@gmail.com</p>
                </div>
              </li>
              <li className="mt-4">
                <a 
                  href="#contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors inline-block"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-green-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SIONG'O Microfinance Company LTD. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/legal" 
              className="text-green-200 text-sm hover:text-white transition-colors"
            >
              Privacy Policy & Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;