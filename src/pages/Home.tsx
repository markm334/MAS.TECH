import { motion } from "framer-motion";
import { ArrowDown, Play, Shield, Heart, Users, ArrowRight, CheckCircle2, AlertTriangle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroCare from "@/assets/african-caregiver-strain.jpg";

const stats = [
  { icon: Users, value: "1B+", label: "People Need Help" },
  { icon: Heart, value: "50+", label: "Lives Impacted" },
  { icon: Shield, value: "100%", label: "Dignified Care" },
];

const quickFeatures = [
  "Safe automated transfers",
  "Preserves dignity",
  "Reduces caregiver burden",
  "Affordable & accessible",
];

const journeySteps = [
  {
    title: "The Struggle",
    description: "Manual lifting causes injury and strips away independence.",
    icon: AlertTriangle,
    color: "text-destructive",
    bg: "bg-destructive/10"
  },
  {
    title: "The Innovation",
    description: "MAS introduces smart, automated mobility assistance.",
    icon: Zap,
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    title: "The Transformation",
    description: "Dignity is restored, and independence becomes a reality.",
    icon: Heart,
    color: "text-primary",
    bg: "bg-primary/10"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={heroCare}
              alt="Caregiver helping elderly person with dignity and compassion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-[15%] hidden lg:block"
          >
            <div className="w-20 h-20 rounded-2xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 right-[25%] hidden lg:block"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 pt-24">
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
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
                Restoring Dignity.{" "}
                <span className="text-secondary">Enabling Independence.</span>
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

              {/* Quick Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 gap-3 mb-8 max-w-lg"
              >
                {quickFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Button variant="hero" size="xl" asChild>
                  <Link to="/invest">
                    <Heart className="w-5 h-5" />
                    Support Our Mission
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/solution">
                    <Play className="w-5 h-5" />
                    See The Solution
                  </Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-6 max-w-lg"
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    whileHover={{ y: -5 }}
                  >
                    <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-primary-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-primary-foreground/60">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </section>

        {/* Path to Independence Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                The Journey
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                The Path to <span className="text-gradient-primary">Independence</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We're not just building a device; we're redefining the human experience of mobility.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />
              
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative z-10 bg-card p-8 rounded-3xl border border-border shadow-soft hover:shadow-premium transition-all group"
                >
                  <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Overview Section */}
        <section className="py-24 bg-gradient-soft relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Explore MAS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                A Crisis That <span className="text-gradient-warm">Needs Solving</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over 1 billion people worldwide live with disabilities. Current assistive 
                solutions fail them—causing injuries, stripping dignity, and overburdening 
                caregivers. MAS is the answer.
              </p>
            </motion.div>

            {/* Navigation Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "The Problem", 
                  description: "Understand the crisis millions face daily with current assistive solutions.", 
                  link: "/problem",
                  color: "bg-destructive/10 hover:bg-destructive/20",
                  iconColor: "text-destructive"
                },
                { 
                  title: "Our Solution", 
                  description: "Discover how MAS technology restores dignity and enables independence.", 
                  link: "/solution",
                  color: "bg-primary/10 hover:bg-primary/20",
                  iconColor: "text-primary"
                },
                { 
                  title: "Our Story", 
                  description: "A personal journey of love, loss, and the promise to make a difference.", 
                  link: "/story",
                  color: "bg-secondary/10 hover:bg-secondary/20",
                  iconColor: "text-secondary"
                },
                { 
                  title: "Our Impact", 
                  description: "See the real-world change MAS is creating in communities.", 
                  link: "/impact",
                  color: "bg-accent/10 hover:bg-accent/20",
                  iconColor: "text-accent"
                },
                { 
                  title: "Technology", 
                  description: "Explore the advanced engineering and AI behind MAS.", 
                  link: "/explore-tech",
                  color: "bg-primary/10 hover:bg-primary/20",
                  iconColor: "text-primary"
                },
                { 
                  title: "Roadmap", 
                  description: "Follow our journey from vision to global impact.", 
                  link: "/roadmap",
                  color: "bg-secondary/10 hover:bg-secondary/20",
                  iconColor: "text-secondary"
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={card.link}
                    className={`block p-6 rounded-2xl border border-border ${card.color} transition-all duration-300 group hover:-translate-y-1 hover:shadow-elevated`}
                  >
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 flex items-center justify-between">
                      {card.title}
                      <ArrowRight className={`w-5 h-5 ${card.iconColor} group-hover:translate-x-1 transition-transform`} />
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emotional Hook Section */}
        <section className="py-24 bg-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-foreground/90 leading-relaxed mb-8">
                "Imagine watching your mother—the woman who raised you with boundless love—lose 
                her independence. Imagine her feeling like a burden. 
                <span className="text-secondary font-semibold"> That's why MAS exists.</span>"
              </p>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/story">
                  Read the Full Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-hero rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
              <div className="relative z-10">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                  Be Part of the Solution
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                  Every donation, every investment, every share brings us closer to a world 
                  where dignity is not a luxury—it's a right.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/invest">
                      <Heart className="w-5 h-5" />
                      Donate Now
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <Link to="/solution">
                      Learn About MAS
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
