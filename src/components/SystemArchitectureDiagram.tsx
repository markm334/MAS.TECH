import React from "react";
import { motion } from "framer-motion";
import { Cpu, Wifi, Shield, Smartphone, Database, Activity, Zap, Settings } from "lucide-react";

const components = [
  { id: "sensors", icon: Activity, label: "Sensor Array", desc: "Load, Pressure & Proximity", color: "text-blue-500", bg: "bg-blue-500/10", x: "10%", y: "20%" },
  { id: "core", icon: Cpu, label: "Edge AI Core", desc: "Real-time Processing", color: "text-primary", bg: "bg-primary/10", x: "50%", y: "50%" },
  { id: "safety", icon: Shield, label: "Safety Layer", desc: "Hardware Interlocks", color: "text-secondary", bg: "bg-secondary/10", x: "50%", y: "20%" },
  { id: "comm", icon: Wifi, label: "IoT Gateway", desc: "Encrypted Sync", color: "text-accent", bg: "bg-accent/10", x: "90%", y: "20%" },
  { id: "app", icon: Smartphone, label: "User Interface", desc: "Voice & App Control", color: "text-purple-500", bg: "bg-purple-500/10", x: "90%", y: "80%" },
  { id: "cloud", icon: Database, label: "Cloud Analytics", desc: "Outcome Optimization", color: "text-blue-600", bg: "bg-blue-600/10", x: "10%", y: "80%" },
  { id: "actuators", icon: Zap, label: "Smart Actuators", desc: "Precision Movement", color: "text-orange-500", bg: "bg-orange-500/10", x: "50%", y: "80%" },
];

const SystemArchitectureDiagram = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-card rounded-3xl overflow-hidden border border-border shadow-premium p-8">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
      
      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Central Hub Connections */}
        <line x1="50%" y1="50%" x2="10%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="50%" y1="50%" x2="90%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="50%" y1="50%" x2="90%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="50%" y1="50%" x2="10%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
      </svg>

      {/* Components */}
      {components.map((comp) => (
        <motion.div
          key={comp.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: comp.x, top: comp.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${comp.bg} border border-border flex items-center justify-center shadow-soft group cursor-help relative`}>
              <comp.icon className={`w-8 h-8 md:w-10 md:h-10 ${comp.color} transition-transform group-hover:rotate-12`} />
              
              {/* Pulse Effect for Core */}
              {comp.id === "core" && (
                <div className="absolute inset-0 rounded-2xl border-2 border-primary animate-ping opacity-20" />
              )}
            </div>
            <div className="text-center">
              <p className="text-xs md:text-sm font-bold text-foreground whitespace-nowrap">{comp.label}</p>
              <p className="text-[10px] text-muted-foreground hidden md:block">{comp.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Status Indicator */}
      <div className="absolute top-6 left-6 flex items-center gap-3 bg-background/80 backdrop-blur-md px-4 py-2 rounded-xl border border-border shadow-soft">
        <Settings className="w-4 h-4 text-primary animate-spin-slow" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">System Status</span>
          <span className="text-xs font-bold text-foreground">All Modules Operational</span>
        </div>
      </div>
    </div>
  );
};

export default SystemArchitectureDiagram;
