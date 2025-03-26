import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail } from 'lucide-react';

export const TopBar = () => {
  return (
    <div className="bg-[#003049] text-white py-1">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+918881110735" className="flex items-center text-sm hover:text-gray-200">
              <Phone className="w-4 h-4 mr-1" />
              +91 8881110735
            </a>
            <a href="mailto:info@sdacademy.com" className="flex items-center text-sm hover:text-gray-200">
              <Mail className="w-4 h-4 mr-1" />
              info@sdacademy.com
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
              <Link to="/gallery" className="hover:text-gray-200">Gallery</Link>
              <a href="https://sdacademy.com/login" target="_blank" rel="noopener noreferrer" 
                className="relative inline-flex items-center px-4 py-1 bg-white text-[#003049] font-medium rounded 
                  hover:bg-gray-100 transition-colors group overflow-hidden">
                <span className="relative z-10">Online Registration</span>
                <div className="absolute inset-0 bg-yellow-300 opacity-30 animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
