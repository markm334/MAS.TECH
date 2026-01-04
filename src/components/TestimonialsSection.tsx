import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { Star, Quote, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlowingOrb from "./GlowingOrb";

const testimonials = [
  {
    name: "Jane Mwangi",
    role: "Teacher & Pilot Participant",
    content: "I was fortunate to try the MAS prototype during the pilot program. The design feels promising, and I look forward to seeing how it will help more people once fully launched.",
    rating: 5,
    image: "JM",
  },
  {
    name: "Samuel Otieno",
    role: "Entrepreneur",
    content: "The MAS team listened to our feedback during the demo. I appreciate the focus on sustainability and accessibility. Excited to see the final product!",
    rating: 5,
    image: "SO",
  },
  {
    name: "Amina Yusuf",
    role: "Community Advocate",
    content: "MAS has great potential. The modular design and intuitive controls stood out during the pilot. I hope it will soon be available to more people in our community.",
    rating: 5,
    image: "AY",
  },
  {
    name: "Peter Njoroge",
    role: "Parent & Caregiver",
    content: "My family joined the MAS demonstration event. The support from the team was excellent, and we are eager to see how MAS will impact lives once it's fully released.",
    rating: 5,
    image: "PN",
  },
  {
    name: "Dr. Faith Wanjiku",
    role: "Rehabilitation Specialist",
    content: "As a healthcare professional, I see immense potential in MAS. The focus on user dignity and safety sets it apart from traditional assistive devices.",
    rating: 5,
    image: "FW",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Background Effects */}
      <GlowingOrb 
        size="w-[500px] h-[500px]" 
        color="bg-secondary/5" 
        position={{ top: "-10%", left: "-10%" }} 
      />
      <GlowingOrb 
        size="w-[400px] h-[400px]" 
        color="bg-accent/5" 
        position={{ bottom: "-10%", right: "-5%" }} 
        delay={3}
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Early Impressions
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            What People Are <span className="text-gradient-warm">Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hear from individuals and professionals who have experienced the MAS 
            prototype and participated in our pilot programs.
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="glass-premium rounded-3xl p-8 md:p-12 relative overflow-hidden spotlight">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-secondary/10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-serif italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground font-bold text-xl shadow-warm-glow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {testimonials[currentIndex].image}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-lg text-foreground">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full magnetic-hover"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full magnetic-hover"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "w-8 bg-secondary" 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              {/* Auto-play toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="rounded-full"
              >
                {isAutoPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => goTo(index)}
              className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-warm text-primary-foreground shadow-warm-glow scale-110"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {testimonial.image}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
