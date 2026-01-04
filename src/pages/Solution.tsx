import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { 
  Shield, 
  Zap, 
  Cog, 
  Leaf, 
  Smartphone, 
  Heart,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Battery,
  Settings,
  Volume2,
  Eye,
  Hand,
  Home,
  Building2,
  Dumbbell,
  Users,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveProductExplorer from "@/components/InteractiveProductExplorer";
import SystemArchitectureDiagram from "@/components/SystemArchitectureDiagram";
import masProductMain from "@/assets/BETTY BG MAS.png";
import solutionDignity from "@/assets/solution-dignity.jpg";

const coreFeatures = [
  {
    icon: Shield,
    title: "Safe Automated Transfers",
    description: "Controlled mechanical system assists users in transferring between bed, wheelchair, and seated positions without manual lifting.",
    highlight: "90% injury reduction"
  },
  {
    icon: Zap,
    title: "Smart Sensor Technology",
    description: "Integrated pressure, motion, and load sensors ensure safe operation with real-time monitoring and emergency stop.",
    highlight: "Real-time safety"
  },
  {
    icon: Cog,
    title: "Modular Design",
    description: "Interchangeable components adapt to home, hospital, and care facility environments. One system, endless configurations.",
    highlight: "Universal fit"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Constructed from sustainable materials including bamboo frames and recycled components aligned with UN SDGs.",
    highlight: "90% sustainable"
  },
  {
    icon: Smartphone,
    title: "Simple Controls",
    description: "Visual, tactile, and voice-guided interaction makes operation accessible regardless of technical ability.",
    highlight: "One-button use"
  },
  {
    icon: Heart,
    title: "Dignity-First Design",
    description: "Every element preserves user autonomy, privacy, and self-respect throughout the transfer process.",
    highlight: "User-controlled"
  },
];

const technicalSpecs = [
  { icon: Cpu, label: "Control System", value: "Real-time safety monitoring", detail: "Embedded microcontroller" },
  { icon: Battery, label: "Battery Life", value: "12+ hours", detail: "Quick-charge capable" },
  { icon: Settings, label: "Weight Capacity", value: "Up to 150kg", detail: "330 lbs maximum" },
  { icon: Volume2, label: "Noise Level", value: "Under 40dB", detail: "Whisper quiet operation" },
  { icon: Eye, label: "Visual Feedback", value: "LED indicators", detail: "Clear status display" },
  { icon: Hand, label: "Control Methods", value: "Multi-modal", detail: "Button, voice, or app" },
];

const useCases = [
  {
    title: "Home Care",
    description: "Enables aging-in-place by supporting independent living and reducing family caregiver workload.",
    icon: Home,
    color: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    title: "Hospitals",
    description: "Improves patient handling safety, reduces nurse injuries, and speeds up patient mobilization.",
    icon: Building2,
    color: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    title: "Rehabilitation",
    description: "Assists recovery and physical therapy with controlled, gradual mobility support.",
    icon: Dumbbell,
    color: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    title: "Elderly Care",
    description: "Enhances resident mobility and staff safety across care facilities.",
    icon: Users,
    color: "bg-muted",
    iconColor: "text-muted-foreground"
  },
];

const differentiators = [
  { label: "Cost", mas: "70% more affordable", others: "$5,000-$15,000" },
  { label: "Design Focus", mas: "Dignity-centered", others: "Function-only" },
  { label: "Materials", mas: "90% sustainable", others: "Standard metals/plastics" },
  { label: "Market", mas: "Global accessibility", others: "Developed markets only" },
  { label: "Control", mas: "Multi-modal (voice, button, app)", others: "Single method" },
];

const Solution = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-soft relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Working Prototype Validated</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                The MAS Solution:{" "}
                <span className="text-gradient-primary">Technology with Heart</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                An intelligent assistive platform that enables safe, automated, and dignified 
                transfers through smart mechanics and adaptive control systems—engineered for 
                real people, by people who understand the struggle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Showcase with Interactive Explorer */}
        <section className="py-20 bg-card" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Explore the MAS Platform
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Interact with our working prototype to see how each component is engineered 
                to provide safe, dignified, and intelligent assistance.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <SystemArchitectureDiagram />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <InteractiveProductExplorer />
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Engineered for Real-World Impact
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  MAS combines cutting-edge technology with human-centered design. Every feature 
                  was developed with input from real patients, caregivers, and healthcare professionals.
                </p>
                
                <div className="grid gap-3 mb-8">
                  {[
                    "Reduces transfer-related injuries by up to 90%",
                    "Single-person operation capability",
                    "Adjustable height and positioning",
                    "Energy-efficient 12+ hour battery life",
                    "Designed with user feedback from 50+ interviews",
                    "70% more affordable than existing solutions",
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="cta-primary" size="lg" asChild>
                    <Link to="/invest">
                      <Heart className="w-5 h-5" />
                      Support Development
                    </Link>
                  </Button>
                  <Button variant="subtle" size="lg" asChild>
                    <Link to="/roadmap">
                      View Roadmap
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Story / Outcome Image */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  The Outcome
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  Independence Restored, Dignity Preserved
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When people can move safely and independently, everything changes. They regain 
                  control over their daily lives. Caregivers are protected from injury. Families 
                  find relief from constant worry.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  MAS isn't just a device—it's a pathway to a more dignified life for millions 
                  of people who deserve better than what's currently available.
                </p>
                <Button variant="cta-primary" size="lg" asChild>
                  <Link to="/story">
                    Read Our Story
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <img
                  src={solutionDignity}
                  alt="Elderly person smiling with restored independence"
                  className="w-full rounded-2xl shadow-elevated"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Six Pillars of Innovation
              </h2>
              <p className="text-muted-foreground">
                Each feature represents countless hours of research, design iteration, 
                and feedback from the people who will use MAS every day.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-soft rounded-2xl p-6 border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Technical Specifications
              </h2>
              <p className="text-muted-foreground">
                Built to perform, designed to last. Every component meets rigorous quality and safety standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-card rounded-xl p-5 text-center border border-border hover:shadow-card transition-shadow"
                >
                  <spec.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                  <div className="font-semibold text-foreground mb-1">{spec.value}</div>
                  <div className="text-xs text-muted-foreground">{spec.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Where MAS Makes a Difference
              </h2>
              <p className="text-muted-foreground">
                One solution, multiple environments. MAS adapts to serve users wherever care is needed.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-soft rounded-2xl p-6 border border-border text-center"
                >
                  <div className={`w-14 h-14 rounded-xl ${useCase.color} flex items-center justify-center mx-auto mb-4`}>
                    <useCase.icon className={`w-7 h-7 ${useCase.iconColor}`} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why MAS is Different
                </h2>
                <p className="text-muted-foreground">
                  A clear comparison showing how MAS stands apart from existing solutions.
                </p>
              </div>

              <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
                <div className="grid grid-cols-3 bg-gradient-hero text-primary-foreground">
                  <div className="p-4 font-semibold text-center border-r border-primary-foreground/20">Feature</div>
                  <div className="p-4 font-semibold text-center border-r border-primary-foreground/20">MAS</div>
                  <div className="p-4 font-semibold text-center">Traditional Solutions</div>
                </div>
                {differentiators.map((item, index) => (
                  <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}>
                    <div className="p-4 text-sm font-medium text-foreground border-r border-border">{item.label}</div>
                    <div className="p-4 text-sm text-secondary font-semibold border-r border-border flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      {item.mas}
                    </div>
                    <div className="p-4 text-sm text-muted-foreground text-center">{item.others}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Make This a Reality?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                MAS is more than a concept—it's a working prototype ready for the next stage. 
                With your support, we can bring this life-changing technology to millions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/invest">
                    <Heart className="w-5 h-5" />
                    Support the Mission
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/story">
                    Read Our Story
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solution;
