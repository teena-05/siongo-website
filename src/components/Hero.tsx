import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-green-900 opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7947923/pexels-photo-7947923.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl">
          <p className="text-green-200 mb-3 text-xl md:text-2xl font-medium animate-fadeIn">Financial Solutions for Everyone</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slideUp">
            Empowering Communities Through <span className="text-green-300">Financial Inclusion</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fadeIn">
            SIONG'O Microfinance provides accessible and affordable financial services 
            to help individuals and small businesses thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-white text-green-800 px-6 py-3 rounded-full font-medium hover:bg-green-100 transition duration-300 flex items-center justify-center"
            >
              Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;