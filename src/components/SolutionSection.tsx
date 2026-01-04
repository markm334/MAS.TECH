import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { 
  Shield, 
  Zap, 
  Cog, 
  Leaf, 
  Smartphone, 
  Heart,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import masDevice from "@/assets/mas-device.jpg";
import africanDignity from "@/assets/african-dignity-hope.jpg";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const impactData = [
  { year: "Before", injuries: 60, independence: 20, satisfaction: 25 },
  { year: "Month 1", injuries: 40, independence: 45, satisfaction: 55 },
  { year: "Month 3", injuries: 20, independence: 65, satisfaction: 75 },
  { year: "Month 6", injuries: 10, independence: 80, satisfaction: 88 },
  { year: "Year 1", injuries: 5, independence: 90, satisfaction: 95 },
];

const features = [
  {
    icon: Shield,
    title: "Automated Safe Transfers",
    description: "Controlled mechanical system for injury-free movement between bed, wheelchair, and seated positions.",
  },
  {
    icon: Zap,
    title: "Smart Sensor Technology",
    description: "Pressure, motion, and load sensors ensure safe operation with emergency stop functionality.",
  },
  {
    icon: Cog,
    title: "Modular Design",
    description: "Adapts to home, hospital, and care facility environments with interchangeable components.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Constructed from bamboo, corn-based bioplastics, and recycled metals for sustainability.",
  },
  {
    icon: Smartphone,
    title: "Simple Controls",
    description: "Visual, tactile, and voice-guided interaction makes operation accessible to everyone.",
  },
  {
    icon: Heart,
    title: "Dignity-First Design",
    description: "Every element engineered to preserve user autonomy, privacy, and self-respect.",
  },
];

const benefits = [
  "Reduces transfer-related injuries by 90%",
  "One-person operation capability",
  "Adjustable height and positioning",
  "Energy-efficient long-lasting battery",
  "Designed with user feedback",
  "Affordable for developing markets",
];

const SolutionSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="solution" className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Innovation
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            The MAS Solution:{" "}
            <span className="text-gradient-primary">Technology with Heart</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A multifunctional assistive platform that enables safe, automated, and dignified 
            transfers through smart mechanics, sensors, and adaptive control systems.
          </p>
        </motion.div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated bg-card p-8">
              <img
                src={masDevice}
                alt="MAS Device"
                className="w-full h-auto rounded-2xl"
              />
              {/* Status Badge */}
              <div className="absolute top-12 right-12 bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Working Prototype
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-card rounded-2xl p-4 shadow-card border border-border"
            >
              <Shield className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-card border border-border"
            >
              <Leaf className="w-8 h-8 text-accent" />
            </motion.div>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Engineered for Real-World Impact
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              MAS combines cutting-edge technology with human-centered design to create 
              a solution that truly serves users, caregivers, and healthcare systems.
            </p>
            
            <div className="grid gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="cta-primary" size="lg" asChild>
              <a href="#invest">See How It Works</a>
            </Button>
          </motion.div>
        </div>

        {/* Impact Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card rounded-3xl p-6 md:p-8 shadow-elevated border border-border mb-16"
        >
          <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2 text-center">
            MAS Impact Over Time
          </h3>
          <p className="text-muted-foreground text-center mb-6 text-sm">
            Measurable improvements in user outcomes with MAS
          </p>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={impactData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorIndependence" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSatisfaction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `${value}%`} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                  formatter={(value: number) => [`${value}%`]}
                />
                <Area 
                  type="monotone" 
                  dataKey="independence" 
                  stroke="hsl(142, 76%, 36%)" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorIndependence)" 
                  name="Independence"
                />
                <Area 
                  type="monotone" 
                  dataKey="satisfaction" 
                  stroke="hsl(199, 89%, 48%)" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorSatisfaction)" 
                  name="Satisfaction"
                />
                <Line 
                  type="monotone" 
                  dataKey="injuries" 
                  stroke="hsl(0, 84%, 60%)" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="Injuries"
                  dot={{ fill: "hsl(0, 84%, 60%)", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-[hsl(142,76%,36%)] rounded" />
              <span className="text-sm text-muted-foreground">Independence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-[hsl(199,89%,48%)] rounded" />
              <span className="text-sm text-muted-foreground">Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-[hsl(0,84%,60%)] rounded border-dashed" style={{ borderTop: "2px dashed hsl(0, 84%, 60%)" }} />
              <span className="text-sm text-muted-foreground">Injuries (decreasing)</span>
            </div>
          </div>
        </motion.div>

        {/* African Dignity Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 relative rounded-3xl overflow-hidden shadow-elevated"
        >
          <img
            src={africanDignity}
            alt="African person regaining independence and dignity with assistive technology"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-8 md:p-12 max-w-lg">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Restoring Dignity & Hope
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                MAS brings independence back to those who need it most. No more waiting for help. 
                No more feeling like a burden. Just freedom and dignity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
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
  );
};

export default SolutionSection;
