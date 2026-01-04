import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Activity, Shield, Database, Wifi } from "lucide-react";

const TechDataFlow = () => {
  const nodes = [
    { id: "sensors", icon: Activity, label: "Sensor Array", x: 10, y: 50, color: "text-blue-400" },
    { id: "ai", icon: Cpu, label: "MAS Core AI", x: 50, y: 50, color: "text-primary" },
    { id: "actuators", icon: Zap, label: "Actuators", x: 90, y: 50, color: "text-secondary" },
  ];

  return (
    <div className="relative w-full h-[300px] bg-card rounded-3xl border border-border overflow-hidden p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
      
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <motion.path
          d="M 15% 50% L 45% 50%"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M 55% 50% L 85% 50%"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-secondary/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        
        {/* Data Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={`p1-${i}`}
            r="3"
            className="fill-primary"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4
            }}
            style={{ offsetPath: "path('M 150 150 L 450 150')" }}
          />
        ))}
      </svg>

      <div className="relative z-10 flex justify-between items-center h-full px-4 md:px-12">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-premium backdrop-blur-sm relative group`}>
              <node.icon className={`w-8 h-8 md:w-10 md:h-10 ${node.color}`} />
              <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Technical Callouts */}
      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[9px] font-mono text-primary uppercase tracking-tighter">Data_Stream: Active</span>
      </div>
    </div>
  );
};

export default TechDataFlow;
