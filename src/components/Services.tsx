import React from 'react';
import { Home, Briefcase, Landmark, UserCheck } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:border-green-200 group">
      <div className="bg-green-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We offer a range of financial solutions designed to meet your needs, 
            whether you're an individual, small business, or growing enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard 
            icon={<Home className="h-8 w-8 text-green-600" />} 
            title="Home Loans" 
            description="Affordable housing loans with flexible terms to help you achieve your dream of home ownership with manageable repayment plans."
          />
          
          <ServiceCard 
            icon={<Briefcase className="h-8 w-8 text-green-600" />} 
            title="Business Loans" 
            description="Customized financing solutions for small and medium-sized businesses to fuel growth, expansion, and operational needs."
          />
          
          <ServiceCard 
            icon={<Landmark className="h-8 w-8 text-green-600" />} 
            title="Agricultural Financing" 
            description="Specialized loans and financial services for farmers and agricultural businesses, designed to support seasonal needs."
          />
          
          <ServiceCard 
            icon={<UserCheck className="h-8 w-8 text-green-600" />} 
            title="Financial Advisory" 
            description="Expert financial guidance and educational resources to help you make informed decisions about your finances and future plans."
          />
        </div>

        <div className="mt-16 bg-green-800 rounded-lg p-8 text-center max-w-4xl mx-auto shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Our financial experts are ready to help you choose the right services for your needs. 
              Visit one of our branches or contact us today.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-green-800 px-6 py-3 rounded-full font-medium hover:bg-green-100 transition duration-300"
            >
              Contact Us Today
            </a>
          </div>
          <div className="absolute inset-0 bg-green-700 opacity-50"></div>
          <div className="absolute -right-16 -bottom-16 h-64 w-64 bg-green-600 rounded-full opacity-30"></div>
          <div className="absolute -left-16 -top-16 h-64 w-64 bg-green-600 rounded-full opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;