import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface Coordinates {
  lat: number;
  lng: number;
}

const Contact: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: -2.5168,  // Default coordinates for Mirongo
    lng: 32.8998
  });
  const [locationError, setLocationError] = useState<string>('');

  useEffect(() => {
    // Get current location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationError('');
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationError('Unable to get current location. Using default coordinates.');
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
    }
  }, []);

  // Generate the Google Maps URL with current coordinates
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817786832052!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzEnMDAuMCJTIDMywrA1NCcwMC4wIkU!5e0!3m2!1sen!2s!4v1709913439607!5m2!1sen!2s`;

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
                  <p className="text-gray-600">+255 758 090 751</p>
                  <p className="text-gray-600">+255 754 558 922</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">siongomicrofinance@gmail.com</p>
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
                  {locationError && (
                    <p className="text-yellow-600 text-sm mt-1">{locationError}</p>
                  )}
                  <p className="text-gray-500 text-sm mt-1">
                    Coordinates: {coordinates.lat.toFixed(4)}°S, {coordinates.lng.toFixed(4)}°E
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SIONG'O Microfinance Location"
              ></iframe>
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