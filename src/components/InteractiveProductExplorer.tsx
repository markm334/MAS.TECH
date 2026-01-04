import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Cog, Leaf, Smartphone, Heart, Info, X, ChevronRight, Microchip, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import masProductMain from "@/assets/BETTY BG MAS.png";

const features = [
  {
    id: "safety",
    icon: Shield,
    title: "Safe Automated Transfers",
    description: "Controlled mechanical system assists users in transferring between bed, wheelchair, and seated positions without manual lifting.",
    x: "35%",
    y: "45%",
    color: "bg-primary"
  },
  {
    id: "sensors",
    icon: Zap,
    title: "Smart Sensor Technology",
    description: "Integrated pressure, motion, and load sensors ensure safe operation with real-time monitoring and emergency stop.",
    x: "65%",
    y: "35%",
    color: "bg-secondary"
  },
  {
    id: "modular",
    icon: Cog,
    title: "Modular Design",
    description: "Interchangeable components adapt to home, hospital, and care facility environments. One system, endless configurations.",
    x: "45%",
    y: "75%",
    color: "bg-accent"
  },
  {
    id: "eco",
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Constructed from sustainable materials including bamboo frames and recycled components aligned with UN SDGs.",
    x: "25%",
    y: "65%",
    color: "bg-green-500"
  },
  {
    id: "controls",
    icon: Smartphone,
    title: "Simple Controls",
    description: "Visual, tactile, and voice-guided interaction makes operation accessible regardless of technical ability.",
    x: "75%",
    y: "45%",
    color: "bg-blue-500"
  },
  {
    id: "dignity",
    icon: Heart,
    title: "Dignity-First Design",
    description: "Every element preserves user autonomy, privacy, and self-respect throughout the transfer process.",
    x: "55%",
    y: "55%",
    color: "bg-red-500",
    details: [
      { icon: Microchip, label: "Embedded Logic", value: "Safety-first firmware" },
      { icon: Activity, label: "Load Balance", value: "Dynamic weight distribution" }
    ]
  },
];

const techSpecs = [
  { label: "Processor", value: "ARM Cortex-M7" },
  { label: "Sensors", value: "64-point Array" },
  { label: "Battery", value: "LiFePO4 48V" },
  { label: "Motors", value: "Dual 400W BLDC" },
];

const InteractiveProductExplorer = () => {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-card rounded-3xl overflow-hidden shadow-elevated border border-border">
      <div className="grid lg:grid-cols-3 gap-0">
        {/* Image Area */}
        <div className="lg:col-span-2 relative bg-gradient-to-br from-muted/50 to-background min-h-[400px] md:min-h-[500px] flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--secondary-rgb),0.15),transparent_70%)]" />
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={masProductMain}
            alt="MAS Device Explorer"
            className="relative z-10 max-w-full max-h-full object-contain drop-shadow-2xl"
          />
          
          {/* Hotspots */}
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              className={`absolute w-8 h-8 rounded-full ${feature.color} text-white flex items-center justify-center shadow-lg z-20`}
              style={{ left: feature.x, top: feature.y }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedFeature(feature)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              title={feature.title}
              aria-label={`Explore ${feature.title}`}
            >
              <feature.icon className="w-4 h-4" />
              <span className="absolute inset-0 rounded-full animate-ping bg-current opacity-40" />
            </motion.button>
          ))}

          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-2">
            <Info className="w-3.5 h-3.5" />
            Click the icons to explore features
          </div>
        </div>

        {/* Info Area */}
        <div className="p-8 lg:p-10 flex flex-col justify-center bg-card relative">
          <AnimatePresence mode="wait">
            {selectedFeature ? (
              <motion.div
                key={selectedFeature.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className={`w-16 h-16 rounded-2xl ${selectedFeature.color}/20 flex items-center justify-center mb-6`}>
                  <selectedFeature.icon className={`w-8 h-8 ${selectedFeature.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {selectedFeature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedFeature.description}
                </p>
                
                {/* Advanced Specs in Modal */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {selectedFeature.details?.map((detail, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-muted/50 border border-border">
                      <detail.icon className="w-4 h-4 text-primary mb-2" />
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{detail.label}</div>
                      <div className="text-xs font-semibold">{detail.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-6">
                  <Button 
                    variant="cta" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => document.getElementById('tech-specs-table')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Technical Specs
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSelectedFeature(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Cog className="w-10 h-10 text-primary animate-spin-slow" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Explore the Innovation
                </h3>
                <p className="text-muted-foreground">
                  The MAS platform is a masterpiece of engineering and empathy. 
                  Select any component on the left to learn how it transforms the caregiving experience.
                </p>
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {features.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFeature(f)}
                      className={`w-full aspect-square rounded-xl ${f.color}/10 flex items-center justify-center hover:bg-muted transition-colors`}
                      title={f.title}
                      aria-label={`View ${f.title}`}
                    >
                      <f.icon className={`w-6 h-6 ${f.color.replace('bg-', 'text-')}`} />
                    </button>
                  ))}
                </div>

                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    {techSpecs.map((spec, i) => (
                      <div key={i} className="text-left">
                        <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{spec.label}</div>
                        <div className="text-xs font-mono text-secondary">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProductExplorer;
