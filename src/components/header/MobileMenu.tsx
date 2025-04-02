
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServicesMenu from "./ServicesMenu";

interface NavLink {
  name: string;
  path: string;
}

interface ServiceLink {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  serviceLinks: ServiceLink[];
  onGetStarted: () => void;
  onLinkClick: () => void;
}

const MobileMenu = ({ isOpen, navLinks, serviceLinks, onGetStarted, onLinkClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-custom-dark shadow-lg animate-fade-in">
      <div className="px-4 pt-2 pb-4 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="block px-3 py-2 rounded-md text-base font-medium text-custom-dark hover:text-custom-red hover:bg-gray-50 dark:text-gray-200 dark:hover:text-custom-red dark:hover:bg-custom-purple-dark/30 transition-all duration-300"
            onClick={onLinkClick}
          >
            {link.name}
          </Link>
        ))}
        
        <ServicesMenu 
          serviceLinks={serviceLinks} 
          isMobile={true} 
          onMobileItemClick={onLinkClick}
        />
        
        <Button 
          className="w-full bg-custom-red hover:bg-custom-purple-light text-white mt-4 transition-all duration-300"
          onClick={() => {
            onLinkClick();
            onGetStarted();
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
