
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-tyrian-800 dark:text-tyrian-400 mb-4">
              TkzUS
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
            Pioneering IT Solutions & Exceptional Customer Experience
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-tyrian-600 dark:hover:text-tyrian-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-tyrian-600 dark:hover:text-tyrian-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-tyrian-600 dark:hover:text-tyrian-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-tyrian-600 dark:hover:text-tyrian-400 transition-colors">
                <Linkedin size={20} />
              </a> 
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 transition-colors">
                  AI Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 transition-colors">
                  Machine Learning Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 transition-colors">
                  Natural Language Processing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 transition-colors">
                  Computer Vision
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 transition-colors">
                  Big Data Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-tyrian-600 dark:text-tyrian-400 shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 AI Street, Tech Valley, CA 94043, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-tyrian-600 dark:text-tyrian-400" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-tyrian-600 dark:text-tyrian-400" />
                <a href="mailto:info@TkzUS.com" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400">
                  info@TkzUS.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {year} TkzUS. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-600 hover:text-tyrian-600 dark:text-gray-400 dark:hover:text-tyrian-400 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
