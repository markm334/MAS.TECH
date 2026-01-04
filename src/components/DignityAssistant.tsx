import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, User, Heart, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InquiryModal from "./InquiryModal";

const DignityAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const options = [
    { label: "I'm a Caregiver", icon: Heart, link: "/caregiver" },
    { label: "I'm an Investor", icon: Shield, link: "/partners/investors" },
    { label: "I'm a Researcher", icon: Zap, link: "/explore-tech" },
    { label: "Our Story", icon: Sparkles, link: "/story" },
  ];

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[320px] glass-premium rounded-3xl shadow-premium border border-white/20 overflow-hidden"
          >
            <div className="bg-gradient-hero p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="font-bold text-sm">Dignity Assistant</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="hover:rotate-90 transition-transform"
                  aria-label="Close Assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Welcome to MAS. How can I help you transform the future of mobility today?
              </p>
            </div>

            <div className="p-6 space-y-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Quick Navigation</div>
              {options.map((option, i) => (
                <Link
                  key={i}
                  to={option.link}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border hover:bg-secondary/10 hover:border-secondary/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <option.icon className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium">{option.label}</span>
                  </div>
                  <Send className="w-3 h-3 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>

            <div className="p-4 bg-muted/30 border-t border-border">
              <Button variant="cta" size="sm" className="w-full text-xs" asChild>
                <Link to="/request-demo" onClick={() => setIsOpen(false)}>Request a Demo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Dignity Assistant" : "Open Dignity Assistant"}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-premium transition-all duration-500 ${
          isOpen ? "bg-destructive rotate-90" : "bg-secondary"
        }`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};

export default DignityAssistant;
