
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface ServiceLink {
  name: string;
  path: string;
}

interface ServicesMenuProps {
  serviceLinks: ServiceLink[];
  isMobile?: boolean;
  onMobileItemClick?: () => void;
}

const ServicesMenu = ({ serviceLinks, isMobile = false, onMobileItemClick }: ServicesMenuProps) => {
  if (isMobile) {
    return (
      <div className="block px-3 py-2 text-base font-medium text-custom-dark dark:text-gray-200">
        <span>Services</span>
        <div className="pl-4 mt-2 space-y-2 border-l border-gray-200 dark:border-custom-purple-dark">
          <Link
            to="/services"
            className="block py-1 text-gray-600 hover:text-custom-red dark:text-gray-300 dark:hover:text-custom-red transition-all duration-300"
            onClick={onMobileItemClick}
          >
            All Services
          </Link>
          {serviceLinks.map((service) => (
            <Link
              key={service.name}
              to={service.path}
              className="block py-1 text-gray-600 hover:text-custom-red dark:text-gray-300 dark:hover:text-custom-red transition-all duration-300"
              onClick={onMobileItemClick}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="text-custom-dark hover:text-custom-red dark:text-gray-200 dark:hover:text-custom-red font-medium transition-colors flex items-center gap-1 hover:scale-105 duration-300">
        Services <ChevronDown size={16} className="transition-transform group-hover:rotate-180 duration-300" />
      </button>
      <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
        <div className="py-2 bg-white dark:bg-custom-dark rounded-md shadow-xl border border-gray-200 dark:border-custom-purple-dark animate-fade-in">
          <Link 
            to="/services" 
            className="block px-4 py-2 text-sm text-custom-dark hover:text-custom-red hover:bg-gray-100 dark:text-gray-200 dark:hover:text-custom-red dark:hover:bg-custom-purple-dark/30"
          >
            All Services
          </Link>
          {serviceLinks.map((service) => (
            <Link
              key={service.name}
              to={service.path}
              className="block px-4 py-2 text-sm text-custom-dark hover:text-custom-red hover:bg-gray-100 dark:text-gray-200 dark:hover:text-custom-red dark:hover:bg-custom-purple-dark/30"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
