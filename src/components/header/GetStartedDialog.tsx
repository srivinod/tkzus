
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import GetStartedForm from "../GetStartedForm";
import GetStartedSuccess from "../GetStartedSuccess";

interface GetStartedDialogProps {
  open: boolean;
  formSubmitted: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const GetStartedDialog = ({ 
  open, 
  formSubmitted, 
  onOpenChange, 
  onSuccess 
}: GetStartedDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            {formSubmitted ? "Request Submitted" : "Get Started with TyrianAI"}
          </DialogTitle>
        </DialogHeader>
        {formSubmitted ? (
          <GetStartedSuccess onClose={() => onOpenChange(false)} />
        ) : (
          <GetStartedForm onSuccess={onSuccess} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedDialog;
