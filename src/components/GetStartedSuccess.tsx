
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface GetStartedSuccessProps {
  onClose: () => void;
}

const GetStartedSuccess = ({ onClose }: GetStartedSuccessProps) => {
  return (
    <div className="flex flex-col items-center text-center py-8">
      <div className="rounded-full bg-custom-red/20 dark:bg-custom-red/30 p-3 mb-6">
        <CheckCircle className="h-12 w-12 text-custom-red dark:text-custom-red" />
      </div>
      <h3 className="text-2xl font-bold mb-3">Thanks for Reaching Out!</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
        Your information has been successfully submitted. Our team will review your request and contact you shortly to discuss how TyrianAI can help your business.
      </p>
      <Button onClick={onClose}>
        Close
      </Button>
    </div>
  );
};

export default GetStartedSuccess;
