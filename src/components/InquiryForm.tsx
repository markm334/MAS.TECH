import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Send, 
  MessageSquare,
  Heart,
  TrendingUp,
  Zap,
  Shield,
  Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const inquiryTypes = [
  { id: "general", label: "General Inquiry", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-500/10" },
  { id: "partnership", label: "Partnership", icon: Handshake, color: "text-primary", bg: "bg-primary/10" },
  { id: "donation", label: "Donation Support", icon: Heart, color: "text-secondary", bg: "bg-secondary/10" },
  { id: "investment", label: "Investment", icon: TrendingUp, color: "text-accent", bg: "bg-accent/10" },
  { id: "technical", label: "Technical Support", icon: Zap, color: "text-purple-500", bg: "bg-purple-500/10" },
];

interface InquiryFormProps {
  initialReason?: string;
  initialMessage?: string;
  onSuccess?: () => void;
}

const InquiryForm = ({ initialReason = "general", initialMessage = "", onSuccess }: InquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: initialReason,
    message: initialMessage
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-email', {
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          reason: formData.reason,
          message: formData.message
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (error) throw error;

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.",
      });

      setFormData({ name: "", email: "", reason: "general", message: "" });
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact us directly via phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Full Name
            </label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="bg-background/50 border-border focus:border-primary h-10 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Email Address
            </label>
            <Input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@company.com"
              className="bg-background/50 border-border focus:border-primary h-10 rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Inquiry Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {inquiryTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setFormData({ ...formData, reason: type.id })}
                className={`flex items-center gap-2 p-2 rounded-xl border transition-all text-left ${
                  formData.reason === type.id
                    ? "bg-white shadow-sm border-primary ring-1 ring-primary/10"
                    : "bg-background/50 border-border hover:border-primary/30"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg ${type.bg} flex items-center justify-center shrink-0`}>
                  <type.icon className={`w-4 h-4 ${type.color}`} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-tight leading-tight">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Message
          </label>
          <Textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="How can we help you?"
            rows={4}
            className="bg-background/50 border-border focus:border-primary rounded-xl resize-none"
          />
        </div>

        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full shadow-md group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Send Inquiry
            </>
          )}
        </Button>
      </form>

      <div className="flex items-center justify-center gap-2 text-[9px] text-muted-foreground font-bold uppercase tracking-widest">
        <Shield className="w-3 h-3 text-primary" />
        <span>Secure Communication</span>
      </div>
    </div>
  );
};

export default InquiryForm;
