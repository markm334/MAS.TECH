import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { 
  Phone, 
  MapPin, 
  Globe,
  Linkedin,
  Shield,
  Sparkles
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [initialReason, setInitialReason] = useState("general");
  const [initialMessage, setInitialMessage] = useState("");

  useEffect(() => {
    const reasonParam = searchParams.get("reason");
    const tierParam = searchParams.get("tier");
    
    if (reasonParam) {
      setInitialReason(reasonParam);
      if (reasonParam === "donation" && tierParam) {
        setInitialMessage(`I am interested in the ${tierParam} donation tier. `);
      } else if (reasonParam === "investment") {
        setInitialMessage("I would like to request investment materials and discuss potential opportunities. ");
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-white/90">
                  Global Support Network
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Let's Build the <span className="text-secondary">Future</span> Together
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Whether you're an investor, a healthcare provider, or a family caregiver, 
                your voice matters. Reach out to start a conversation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Connect With Us
                  </h2>
                  <p className="text-muted-foreground">
                    Our dedicated team is ready to assist you with any technical, 
                    investment, or partnership inquiries.
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.a
                    href="tel:+254794347868"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-5 rounded-2xl glass-premium border border-border hover:border-secondary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">Phone Support</h3>
                      <p className="text-muted-foreground text-xs">+254 794 347 868</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/mark-murangiri-5391b4228/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-5 rounded-2xl glass-premium border border-border hover:border-secondary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">LinkedIn</h3>
                      <p className="text-muted-foreground text-xs">Mark Murangiri</p>
                    </div>
                  </motion.a>

                  <div className="flex items-center gap-4 p-5 rounded-2xl glass-premium border border-border">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">Global HQ</h3>
                      <p className="text-muted-foreground text-xs">Sagana, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-gradient-hero text-white shadow-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-secondary" />
                    <h3 className="font-bold">Global Availability</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    MAS is scaling rapidly. We are currently accepting partnership 
                    applications for distribution in Europe and North America.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="glass-premium rounded-[2rem] p-8 md:p-10 border border-border shadow-premium relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                  
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                    Smart Inquiry Portal
                  </h2>

                  <InquiryForm 
                    key={`${initialReason}-${initialMessage}`}
                    initialReason={initialReason} 
                    initialMessage={initialMessage} 
                  />

                  <div className="flex items-center justify-center gap-2 mt-8 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    <Shield className="w-3 h-3 text-primary" />
                    <span>Encrypted & Secure Communication</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
