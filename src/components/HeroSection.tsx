import { motion } from "framer-motion";
import { ArrowDown, Play, Shield, Heart, Users, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCare from "@/assets/hero-care.jpg";
import TypewriterText from "./TypewriterText";
import GlowingOrb from "./GlowingOrb";

const heroWords = ["Independence", "Dignity", "Freedom", "Hope"];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCare}
          alt="Caregiver helping elderly person"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>

      {/* Animated Glowing Orbs */}
      <GlowingOrb 
        size="w-[600px] h-[600px]" 
        color="bg-secondary/10" 
        position={{ top: "-20%", right: "-10%" }} 
        delay={0}
      />
      <GlowingOrb 
        size="w-[400px] h-[400px]" 
        color="bg-primary/10" 
        position={{ bottom: "10%", left: "-5%" }} 
        delay={2}
      />

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] hidden lg:block"
      >
        <div className="w-20 h-20 rounded-2xl glass-premium flex items-center justify-center shimmer">
          <Heart className="w-8 h-8 text-secondary" />
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-[25%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-full glass-premium flex items-center justify-center">
          <Shield className="w-6 h-6 text-accent" />
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-[8%] hidden xl:block"
      >
        <div className="w-14 h-14 rounded-xl glass-premium flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 right-[35%] hidden lg:block"
      >
        <div className="w-12 h-12 rounded-lg glass-premium flex items-center justify-center">
          <Zap className="w-5 h-5 text-secondary" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 glass-premium rounded-full px-4 py-2 mb-6"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-secondary" 
            />
            <span className="text-sm font-medium text-primary-foreground/90">
              Transforming Lives Through Innovation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Restoring{" "}
            <span className="text-secondary">
              <TypewriterText words={heroWords} />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed"
          >
            The Multifunctional Assistive System (MAS) is an intelligent, modular platform 
            empowering individuals with mobility challenges through seamless, 
            dignified technology integration.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="hero" size="xl" asChild className="magnetic-hover pulse-glow">
              <a href="#invest">
                <Heart className="w-5 h-5" />
                Support Our Mission
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="magnetic-hover ripple">
              <a href="#solution">
                <Play className="w-5 h-5" />
                See It In Action
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { icon: Users, value: "1B+", label: "People Need Help" },
              { icon: Heart, value: "50+", label: "Lives Impacted" },
              { icon: Shield, value: "100%", label: "Dignified Care" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center glass-premium rounded-xl p-4"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-primary-foreground"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-primary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#problem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors group"
      >
        <span className="text-sm group-hover:text-secondary transition-colors">Discover More</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-2 rounded-full glass group-hover:bg-secondary/20 transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
