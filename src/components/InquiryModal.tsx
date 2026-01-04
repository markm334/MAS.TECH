import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InquiryForm from "./InquiryForm";
import { ReactNode, useState } from "react";

interface InquiryModalProps {
  trigger?: ReactNode;
  initialReason?: string;
  initialMessage?: string;
  title?: string;
  description?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const InquiryModal = ({ 
  trigger, 
  initialReason, 
  initialMessage,
  title = "Start a Conversation",
  description = "Fill out the form below and our team will get back to you shortly.",
  isOpen: controlledOpen,
  onOpenChange: setControlledOpen
}: InquiryModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const onOpenChange = setControlledOpen !== undefined ? setControlledOpen : setInternalOpen;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <div className="bg-card border border-border rounded-[2rem] overflow-hidden shadow-premium relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
          
          <div className="p-8 md:p-10">
            <DialogHeader className="mb-8">
              <DialogTitle className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                {title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {description}
              </DialogDescription>
            </DialogHeader>

            <InquiryForm 
              initialReason={initialReason} 
              initialMessage={initialMessage} 
              onSuccess={() => onOpenChange(false)}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;
