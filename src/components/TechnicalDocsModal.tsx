import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Cpu, Shield, Zap, Download, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TechnicalDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  phase: {
    title: string;
    year: string;
    details: string[];
  };
}

const TechnicalDocsModal = ({ isOpen, onClose, phase }: TechnicalDocsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-card rounded-3xl shadow-premium border border-border overflow-hidden"
          >
            <div className="bg-gradient-hero p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Technical Archive</div>
                  <h2 className="text-2xl font-serif font-bold">{phase.title} Documentation</h2>
                </div>
              </div>
              <p className="text-white/70 text-sm max-w-md">
                Accessing technical schematics, validation reports, and engineering 
                specifications for the {phase.year} development cycle.
              </p>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "System Architecture", size: "2.4 MB", icon: Cpu },
                  { title: "Safety Validation Report", size: "1.8 MB", icon: Shield },
                  { title: "Mechanical Schematics", size: "5.1 MB", icon: Zap },
                  { title: "User Research Data", size: "0.9 MB", icon: BookOpen },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/50 border border-border hover:border-primary/30 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center border border-border">
                        <doc.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">{doc.title}</div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">{doc.size} • PDF</div>
                      </div>
                    </div>
                    <button 
                      className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-primary"
                      aria-label={`Download ${doc.title}`}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-secondary" />
                  Engineering Summary
                </h3>
                <ul className="space-y-2">
                  {phase.details.map((detail, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-secondary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 bg-muted/30 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <Shield className="w-3 h-3 text-primary" />
                Confidential Engineering Data
              </div>
              <Button variant="cta" size="sm" className="text-xs" asChild>
                <Link to={`/request-access?phase=${encodeURIComponent(phase.title)}`}>
                  Request Full Access
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TechnicalDocsModal;
