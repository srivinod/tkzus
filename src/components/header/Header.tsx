
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import HeaderLogo from "./HeaderLogo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import GetStartedDialog from "./GetStartedDialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reduced scroll threshold from 10 to 5 for more responsive header change
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    setFormDialogOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSuccess = () => {
    setFormSubmitted(true);
  };

  const handleDialogClose = () => {
    setFormDialogOpen(false);
    // Reset the form submission state after the dialog closes
    setTimeout(() => {
      setFormSubmitted(false);
    }, 300);
  };

  const serviceLinks = [
    { name: "Machine Learning", path: "/services/machine-learning" },
    { name: "Natural Language Processing", path: "/services/natural-language-processing" },
    { name: "Computer Vision", path: "/services/computer-vision" },
    { name: "Big Data Analytics", path: "/services/big-data-analytics" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-custom-dark/90 translate-y-0"
          : "bg-white backdrop-blur-md shadow-sm dark:bg-custom-dark/90 translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <HeaderLogo />

          {/* Desktop Navigation */}
          <DesktopMenu 
            navLinks={navLinks}
            serviceLinks={serviceLinks}
            onGetStarted={handleGetStarted}
          />

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="transition-transform active:scale-90"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu 
        isOpen={isOpen}
        navLinks={navLinks}
        serviceLinks={serviceLinks}
        onGetStarted={handleGetStarted}
        onLinkClick={() => setIsOpen(false)}
      />

      {/* Get Started Form Dialog */}
      <GetStartedDialog 
        open={formDialogOpen}
        formSubmitted={formSubmitted}
        onOpenChange={handleDialogClose}
        onSuccess={handleFormSuccess}
      />
    </header>
  );
};

export default Header;
