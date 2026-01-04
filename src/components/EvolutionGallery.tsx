import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, History, Rocket, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Import images
import idea1 from "@/assets/idea1.jpg";
import idea2 from "@/assets/idea2.jpg";
import idea3 from "@/assets/idea 3.jpeg";
import idea4 from "@/assets/idea 4.jpeg";
import idea5 from "@/assets/idea 5.jpg";
import idea6 from "@/assets/idea 6.jpeg";
import idea7 from "@/assets/idea 7.jpg";
import idea8 from "@/assets/idea 8.png";
import idea9 from "@/assets/idea 9.png";

const journeySteps = [
  {
    id: 1,
    image: idea1,
    title: "The First Spark",
    description: "Initial conceptualization of a system that could restore dignity to those with limited mobility.",
    tag: "Concept",
    icon: Lightbulb
  },
  {
    id: 2,
    image: idea2,
    title: "Early Sketches",
    description: "Translating the vision into technical drawings and exploring the mechanics of assisted movement.",
    tag: "Design",
    icon: History
  },
  {
    id: 3,
    image: idea3,
    title: "Structural Foundation",
    description: "Defining the core frame and support systems required for safe and comfortable transfers.",
    tag: "Engineering",
    icon: History
  },
  {
    id: 4,
    image: idea4,
    title: "Refining the Form",
    description: "Iterating on the ergonomic design to ensure the system feels natural and non-intrusive.",
    tag: "Iteration",
    icon: History
  },
  {
    id: 5,
    image: idea5,
    title: "Technical Integration",
    description: "Developing the specialized components that allow for multifunctional use across different environments.",
    tag: "Development",
    icon: History
  },
  {
    id: 6,
    image: idea6,
    title: "Advanced Prototyping",
    description: "Building more sophisticated models to test durability and ease of use for both users and caregivers.",
    tag: "Prototype",
    icon: History
  },
  {
    id: 7,
    image: idea7,
    title: "User-Centric Refinement",
    description: "Incorporating feedback from early testing to perfect the interaction between human and machine.",
    tag: "Validation",
    icon: History
  },
  {
    id: 8,
    image: idea8,
    title: "The Modern MAS",
    description: "A near-final realization of the system, combining aesthetics with high-performance engineering.",
    tag: "Pre-Launch",
    icon: Sparkles
  },
  {
    id: 9,
    image: idea9,
    title: "The Future of Care",
    description: "The ultimate vision: A seamless, intelligent companion that empowers independence globally.",
    tag: "Vision 2026",
    icon: Rocket
  }
];

const EvolutionGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % journeySteps.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);

  return (
    <section id="evolution-gallery" className="py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4"
          >
            <History className="w-4 h-4" />
            <span>The MAS Evolution</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            From Humble Beginnings to the <span className="text-gradient-primary">Future of Care</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Explore the visual journey of MAS—a testament to persistent innovation, 
            driven by a promise to restore dignity to millions.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Image Display */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[4/3] md:aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border bg-muted">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={journeySteps[currentIndex].image}
                    alt={journeySteps[currentIndex].title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Navigation Overlay */}
                <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Step Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10">
                  {journeySteps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Display */}
            <div className="lg:col-span-5 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      {React.createElement(journeySteps[currentIndex].icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                        Step {currentIndex + 1} of {journeySteps.length}
                      </span>
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                        {journeySteps[currentIndex].tag}
                      </h3>
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    {journeySteps[currentIndex].title}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {journeySteps[currentIndex].description}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      onClick={prev}
                      className="px-6 py-3 rounded-xl border border-border hover:bg-muted transition-colors font-bold text-sm flex items-center gap-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>
                    <button
                      onClick={next}
                      className="px-6 py-3 rounded-xl bg-primary text-white hover:opacity-90 transition-opacity font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20"
                    >
                      Next Stage
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mini Timeline Preview */}
              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-9 gap-2">
                  {journeySteps.map((step, idx) => (
                    <button
                      key={step.id}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`View ${step.title}`}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentIndex ? "border-primary scale-110 z-10 shadow-lg" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img src={step.image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionGallery;
