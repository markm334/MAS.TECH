import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { 
  Shield, 
  Lock, 
  FileText, 
  Send, 
  CheckCircle2, 
  ArrowLeft,
  Info,
  Cpu,
  Zap,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RequestAccess = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const phase = searchParams.get("phase") || "General";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    purpose: "",
    specificInterests: [] as string[],
    message: ""
  });

  const interestOptions = [
    "Mechanical Schematics",
    "Software Architecture",
    "Safety Validation Data",
    "Clinical Trial Results",
    "Manufacturing Process",
    "Regulatory Compliance"
  ];

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      specificInterests: prev.specificInterests.includes(interest)
        ? prev.specificInterests.filter(i => i !== interest)
        : [...prev.specificInterests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-email', {
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          reason: "Technical Access Request",
          message: `
            Organization: ${formData.organization}
            Phase Requested: ${phase}
            Purpose: ${formData.purpose}
            Interests: ${formData.specificInterests.join(", ")}
            Additional Message: ${formData.message}
          `
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (error) throw error;

      toast({
        title: "Request Submitted",
        description: "Your application for technical access has been received. Our security team will review it shortly.",
      });

      navigate("/roadmap");
    } catch (error) {
      console.error('Request failed:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error processing your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)} 
            className="mb-8 hover:bg-secondary/10 text-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roadmap
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Info Sidebar */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
                    Technical Access Application
                  </h1>
                  <p className="text-muted-foreground leading-relaxed">
                    To maintain the integrity of our intellectual property and safety standards, 
                    full technical documentation is restricted to verified partners and researchers.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Shield, title: "Secure Review", desc: "All requests are manually vetted by our engineering board." },
                    { icon: FileText, title: "NDA Required", desc: "Access may require a signed Non-Disclosure Agreement." },
                    { icon: CheckCircle2, title: "Full Schematics", desc: "Gain access to detailed CAD files and source code." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-card border border-border shadow-soft">
                      <item.icon className="w-5 h-5 text-secondary shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-gradient-hero text-white shadow-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Info className="w-5 h-5 text-secondary" />
                    <h3 className="font-bold text-sm">Requesting for:</h3>
                  </div>
                  <div className="text-2xl font-serif font-bold text-secondary">{phase} Phase</div>
                </div>
              </motion.div>

              {/* Form Area */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-3"
              >
                <div className="glass-premium rounded-[2.5rem] p-8 md:p-10 border border-border shadow-premium">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                        <Input 
                          required 
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          placeholder="Dr. Jane Smith" 
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Professional Email</label>
                        <Input 
                          required 
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          placeholder="jane@university.edu" 
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Organization / Institution</label>
                      <Input 
                        required 
                        value={formData.organization}
                        onChange={e => setFormData({...formData, organization: e.target.value})}
                        placeholder="Global Health Institute" 
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Specific Areas of Interest</label>
                      <div className="grid grid-cols-2 gap-2">
                        {interestOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleInterest(option)}
                            className={`text-left px-3 py-2 rounded-lg border text-[10px] font-bold transition-all ${
                              formData.specificInterests.includes(option)
                                ? "bg-primary text-white border-primary shadow-md"
                                : "bg-background border-border hover:border-primary/30"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="purpose" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Purpose of Request</label>
                      <select 
                        id="purpose"
                        required
                        value={formData.purpose}
                        onChange={e => setFormData({...formData, purpose: e.target.value})}
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select purpose...</option>
                        <option value="Academic Research">Academic Research</option>
                        <option value="Clinical Partnership">Clinical Partnership</option>
                        <option value="Investment Due Diligence">Investment Due Diligence</option>
                        <option value="Manufacturing Collaboration">Manufacturing Collaboration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Additional Context</label>
                      <Textarea 
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        placeholder="Please provide any additional details about your request..."
                        rows={3}
                        className="rounded-xl resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="xl" 
                      className="w-full shadow-premium group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestAccess;
