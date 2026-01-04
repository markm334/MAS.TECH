import React from "react";
import { motion } from "framer-motion";

const TechHeroAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Data Streams */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full"
            style={{ top: `${i * 10}%` }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Floating Tech Nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {[...Array(15)].map((_, i) => {
          const x = Math.random() * 1000;
          const y = Math.random() * 600;
          return (
            <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
              <motion.circle
                cx={x}
                cy={y}
                r="2"
                className="fill-secondary"
                filter="url(#glow)"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {i > 0 && (
                <motion.line
                  x1={x}
                  y1={y}
                  x2={Math.random() * 1000}
                  y2={Math.random() * 600}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/20"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.1 }}
                />
              )}
            </motion.g>
          );
        })}
      </svg>

      {/* Central Pulsing Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
        <motion.div
          className="absolute inset-0 border border-primary/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-10 border border-secondary/20 rounded-full"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Scanning Line */}
      <motion.div
        className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-10"
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default TechHeroAnimation;
