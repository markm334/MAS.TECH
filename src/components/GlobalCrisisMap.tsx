import React from "react";
import { motion } from "framer-motion";
import { Globe, AlertTriangle, Users, HeartCrack } from "lucide-react";

const hotspots = [
  { id: 1, x: "20%", y: "40%", label: "North America", value: "15M+", status: "High Demand" },
  { id: 2, x: "50%", y: "35%", label: "Europe", value: "20M+", status: "Aging Population" },
  { id: 3, x: "55%", y: "65%", label: "Africa", value: "80M+", status: "Critical Access Gap" },
  { id: 4, x: "75%", y: "45%", label: "Asia", value: "150M+", status: "Rapid Growth" },
  { id: 5, x: "30%", y: "70%", label: "South America", value: "25M+", status: "Rising Need" },
];

const GlobalCrisisMap = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-foreground rounded-3xl overflow-hidden border border-white/10 shadow-premium">
      {/* Map Background (Simplified SVG or Image) */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />

      {/* Hotspots */}
      {hotspots.map((spot) => (
        <motion.div
          key={spot.id}
          className="absolute"
          style={{ left: spot.x, top: spot.y }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: spot.id * 0.2, type: "spring" }}
        >
          <div className="relative group">
            {/* Pulsing Ring */}
            <div className="absolute -inset-4 bg-destructive/30 rounded-full animate-ping" />
            <div className="relative w-4 h-4 bg-destructive rounded-full border-2 border-white cursor-pointer" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-3 bg-card border border-border rounded-xl shadow-elevated opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{spot.label}</p>
              <p className="text-lg font-bold text-foreground">{spot.value}</p>
              <p className="text-[10px] text-muted-foreground">{spot.status}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Legend/Stats Overlay */}
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-premium p-4 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-secondary" />
            <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Global Need</span>
          </div>
          <p className="text-2xl font-bold text-white">1.3 Billion</p>
          <p className="text-[10px] text-white/50">People living with disabilities</p>
        </div>
        
        <div className="glass-premium p-4 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Access Gap</span>
          </div>
          <p className="text-2xl font-bold text-white">90%</p>
          <p className="text-[10px] text-white/50">Lack access in low-income regions</p>
        </div>

        <div className="glass-premium p-4 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <HeartCrack className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Caregiver Strain</span>
          </div>
          <p className="text-2xl font-bold text-white">40%</p>
          <p className="text-[10px] text-white/50">Experience high emotional stress</p>
        </div>
      </div>

      {/* Live Indicator */}
      <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Crisis Data Visualization</span>
      </div>
    </div>
  );
};

export default GlobalCrisisMap;
