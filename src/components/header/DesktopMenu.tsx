
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

interface DesktopMenuProps {
  navLinks: NavLink[];
  serviceLinks: ServiceLink[];
  onGetStarted: () => void;
}

const DesktopMenu = ({ navLinks, serviceLinks, onGetStarted }: DesktopMenuProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="text-custom-dark hover:text-custom-red dark:text-gray-200 dark:hover:text-custom-red font-medium transition-colors hover:scale-105 duration-300"
        >
          {link.name}
        </Link>
      ))}
      
      <ServicesMenu serviceLinks={serviceLinks} />
      
      <Button 
        className="bg-custom-red hover:bg-custom-purple-light text-white hover:scale-105 transition-all duration-300"
        onClick={onGetStarted}
      >
        Get Started
      </Button>
    </nav>
  );
};

export default DesktopMenu;
