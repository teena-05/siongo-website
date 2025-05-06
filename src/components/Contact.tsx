// ... existing code ...
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Have questions or want to learn more about our services? 
            Reach out to us and our team will be happy to assist you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+255758090751" className="hover:underline">+255 758 090 751</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+255754558922" className="hover:underline">+255 754 558 922</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:siongomicrofinance@gmail.com" className="hover:underline">siongomicrofinance@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Main Branch: Mirongo, Nyamagana-Mwanza</p>
                  <p className="text-gray-600">P.O Box 10022, MWANZA-TANZANIA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-700 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>9:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;