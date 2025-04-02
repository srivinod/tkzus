
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsApp = ({
  phoneNumber,
  message = "Hello! I'd like to know more about your services.",
}: FloatingWhatsAppProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-24 right-4 z-50 rounded-full p-3 bg-green-500 hover:bg-green-600 shadow-lg hover-scale"
      size="icon"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default FloatingWhatsApp;
