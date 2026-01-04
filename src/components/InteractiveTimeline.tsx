import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Target, Users, Lightbulb, Award, Calendar, ChevronRight, ChevronLeft } from "lucide-react";

const timeline = [
  {
    id: 1,
    year: "Early Years",
    title: "A Mother's Love",
    content: "My mother worked tirelessly to give me opportunities she never had. She was strong, independent, full of life—the kind of woman who could handle anything.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-500/10",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    year: "The Diagnosis",
    title: "When Everything Changed",
    content: "Cancer. One word that shattered our world. Slowly, ruthlessly, it stole her strength. The woman who carried me through life now struggled to lift herself.",
    icon: Target,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    year: "The Struggle",
    title: "Watching Dignity Slip Away",
    content: "She became bedridden. Every transfer from bed to wheelchair was a moment of vulnerability. I saw the light dim in her eyes each time she needed help with the simplest things.",
    icon: Users,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    year: "The Promise",
    title: "A Vow to Change Things",
    content: "In those difficult moments, I made her a promise: No one should ever feel this way. Her suffering would not be in vain—it would spark a revolution in care.",
    icon: Lightbulb,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    year: "Today",
    title: "MAS is Born",
    content: "From sleepless nights of research and frustration with inadequate solutions, MAS emerged. A working prototype that honors her memory and serves millions facing similar challenges.",
    icon: Award,
    color: "text-primary",
    bg: "bg-primary/10",
    image: "/placeholder.svg"
  },
];

const InteractiveTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % timeline.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + timeline.length) % timeline.length);

  const ActiveIcon = timeline[activeIndex].icon;

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Timeline Progress Bar */}
      <div className="hidden md:flex justify-between items-center mb-16 relative px-12">
        <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-border -translate-y-1/2 z-0" />
        <motion.div 
          className="absolute top-1/2 left-12 h-0.5 bg-primary -translate-y-1/2 z-0"
          initial={{ width: 0 }}
          animate={{ width: `${(activeIndex / (timeline.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
        
        {timeline.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className="relative z-10 flex flex-col items-center gap-2 group"
          >
            <motion.div
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
                backgroundColor: activeIndex === index ? "hsl(var(--primary))" : "hsl(var(--card))",
                borderColor: activeIndex === index ? "hsl(var(--primary))" : "hsl(var(--border))",
              }}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors shadow-soft`}
            >
              <item.icon className={`w-5 h-5 ${activeIndex === index ? "text-white" : "text-muted-foreground"}`} />
            </motion.div>
            <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${activeIndex === index ? "text-primary" : "text-muted-foreground"}`}>
              {item.year}
            </span>
          </button>
        ))}
      </div>

      {/* Active Content Card */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-[2.5rem] p-8 md:p-12 border border-border shadow-premium"
          >
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 ${timeline[activeIndex].bg} ${timeline[activeIndex].color} px-4 py-2 rounded-full`}>
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">{timeline[activeIndex].year}</span>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {timeline[activeIndex].title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {timeline[activeIndex].content}
              </p>

              <div className="flex items-center gap-4 pt-4">
                <button 
                  onClick={prev}
                  title="Previous Step"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={next}
                  title="Next Step"
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <span className="text-sm font-medium text-muted-foreground ml-2">
                  Step {activeIndex + 1} of {timeline.length}
                </span>
              </div>
            </div>

            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elevated">
              <div className={`absolute inset-0 ${timeline[activeIndex].bg} opacity-20`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <ActiveIcon className={`w-32 h-32 ${timeline[activeIndex].color} opacity-20`} />
              </div>
              {/* In a real app, we'd use actual images here */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveTimeline;
