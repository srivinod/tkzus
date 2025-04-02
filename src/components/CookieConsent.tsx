import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookieConsent", "necessary");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-up">
      <div className="bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 p-4 md:p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1 pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">We value your privacy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                <a href="/cookies" className="text-tyrian-600 dark:text-tyrian-400 hover:underline ml-1">
                  Read our Cookie Policy
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
              <Button
                variant="outline"
                className="border-custom-red text-custom-red hover:bg-custom-red/10"
                onClick={acceptNecessary}
              >
                Necessary Only
              </Button>
              <Button 
                onClick={acceptAll}
              >
                Accept All
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={acceptNecessary}
                aria-label="Close"
              >
                <X size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
