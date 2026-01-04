import { motion } from "framer-motion";
import { useInView, useCountUp } from "@/hooks/useAnimations";
import { 
  Users, 
  Leaf, 
  Globe, 
  Handshake, 
  Heart, 
  Target,
  ArrowRight,
  CheckCircle2,
  TreePine,
  Recycle,
  Droplets,
  Award,
  ShieldCheck,
  Quote,
  ExternalLink,
  MapPin,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdvancedImpactDashboard from "@/components/AdvancedImpactDashboard";
import communityImg from "@/assets/african-dignity-hope.jpg";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const stats = [
  { value: 50, suffix: "+", label: "Lives Already Impacted", icon: Users, color: "text-secondary" },
  { value: 90, suffix: "%", label: "Eco-Materials Used", icon: Leaf, color: "text-accent" },
  { value: 12, suffix: "", label: "Counties Reached", icon: Globe, color: "text-primary" },
  { value: 30, suffix: "+", label: "Community Partners", icon: Handshake, color: "text-secondary" },
];

const predictiveData = [
  { year: "2024", impact: 50, target: 50 },
  { year: "2025", impact: 500, target: 1000 },
  { year: "2026", impact: 2500, target: 5000 },
  { year: "2027", impact: 12000, target: 25000 },
  { year: "2028", impact: 50000, target: 100000 },
];

const sdgs = [
  { 
    number: 3, 
    title: "Good Health & Well-being", 
    color: "bg-[#4C9F38]",
    icon: Heart,
    description: "MAS directly improves health outcomes by reducing transfer-related injuries for both users and caregivers.",
    impact: "Target: 90% reduction in transfer injuries"
  },
  { 
    number: 10, 
    title: "Reduced Inequalities", 
    color: "bg-[#DD1367]",
    icon: Users,
    description: "Making assistive technology affordable and accessible bridges the gap between quality care access.",
    impact: "Making devices 70% more affordable"
  },
  { 
    number: 11, 
    title: "Sustainable Communities", 
    color: "bg-[#FD9D24]",
    icon: Globe,
    description: "MAS enables aging-in-place and community-based care for inclusive living environments.",
    impact: "Supporting 1M+ home-based care scenarios"
  },
];

const impactGoals = [
  { icon: Heart, title: "Restore Dignity", description: "Preserving autonomy and self-respect in daily life for every user", stat: "100%" },
  { icon: ShieldCheck, title: "Reduce Caregiver Injuries", description: "Protecting those who dedicate their lives to caring for others", stat: "90%" },
  { icon: Target, title: "Improve Quality of Life", description: "Enabling independent living, mobility, and meaningful participation", stat: "85%" },
];

const environmentalImpact = [
  { icon: TreePine, title: "Bamboo Frames", description: "Sustainable, rapidly renewable material replacing traditional metals", percentage: "40%" },
  { icon: Recycle, title: "Recycled Components", description: "Metal components sourced from recycled materials", percentage: "60%" },
  { icon: Leaf, title: "Bioplastics", description: "Corn-based bioplastics for non-structural components", percentage: "25%" },
  { icon: Droplets, title: "Low-Impact Assembly", description: "Designed for local assembly to minimize emissions", percentage: "50%" },
];

const testimonials = [
  {
    quote: "For the first time in years, I feel like I'm in control of my own body. MAS gave me back my independence.",
    name: "Grace W.",
    role: "MAS User",
    location: "Nairobi, Kenya",
    image: "GW"
  },
  {
    quote: "As a nurse, I've injured my back multiple times lifting patients. This technology is exactly what our hospitals need.",
    name: "James K.",
    role: "Healthcare Worker",
    location: "Mombasa, Kenya",
    image: "JK"
  },
  {
    quote: "We can now care for my father at home without constant fear of dropping him or hurting ourselves.",
    name: "Mary N.",
    role: "Family Caregiver",
    location: "Kisumu, Kenya",
    image: "MN"
  },
];

const researchCitations = [
  { 
    stat: "1 Billion+", 
    description: "People worldwide require assistive technology",
    source: "World Health Organization",
    year: "2022",
    link: "https://www.who.int/news-room/fact-sheets/detail/assistive-technology"
  },
  { 
    stat: "12,000", 
    description: "Overexertion injuries in US nursing homes annually",
    source: "OSHA",
    year: "2023",
    link: "https://www.osha.gov/ergonomics/healthcare"
  },
  { 
    stat: "53%", 
    description: "Of family caregivers experience depression",
    source: "AARP",
    year: "2020",
    link: "https://www.aarp.org/caregiving/"
  },
];

const Impact = () => {
  const { ref, isInView } = useInView(0.1);
  
  const stat0 = useCountUp({ end: stats[0].value, suffix: stats[0].suffix });
  const stat1 = useCountUp({ end: stats[1].value, suffix: stats[1].suffix });
  const stat2 = useCountUp({ end: stats[2].value, suffix: stats[2].suffix });
  const stat3 = useCountUp({ end: stats[3].value, suffix: stats[3].suffix });
  const statRefs = [stat0, stat1, stat2, stat3];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Our Social Impact
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                Creating Change That{" "}
                <span className="text-gradient-primary">Truly Matters</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                MAS is more than technology—it's a movement toward dignity, safety, and 
                independence for millions worldwide.
              </p>
            </motion.div>

            {/* Stats Grid - Enhanced */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-soft rounded-2xl p-6 text-center border border-border hover:shadow-card transition-shadow"
                  ref={statRefs[index].ref}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-card flex items-center justify-center mx-auto mb-4 shadow-soft`}>
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {statRefs[index].displayValue}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Calculator Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Advanced Impact Dashboard
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the multi-dimensional impact of MAS through our interactive 
                predictive modeling dashboard.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <AdvancedImpactDashboard />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-6 border border-border shadow-premium"
              >
                <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  Impact Trajectory
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Our data-driven approach ensures we stay on track to reach 1 million lives by 2030.
                </p>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={predictiveData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <XAxis dataKey="year" hide />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="impact" 
                        stroke="hsl(var(--secondary))" 
                        fill="hsl(var(--secondary))" 
                        fillOpacity={0.1} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="target" 
                        stroke="hsl(var(--primary))" 
                        fill="transparent" 
                        strokeDasharray="5 5" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      Actual Impact
                    </span>
                    <span className="font-bold">On Track</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full border border-primary border-dashed" />
                      2030 Target
                    </span>
                    <span className="font-bold">1M+ Lives</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Reach Map Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Current Reach
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  Grounded in <span className="text-gradient-primary">Community</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We are currently in the critical validation phase, focusing our efforts on 
                  rigorous field testing and local community integration before scaling globally.
                </p>
                
                <div className="space-y-4">
                  {[
                    { region: "South Africa", status: "Strategic Partner", partners: 1 },
                    { region: "India", status: "Healthcare Affiliate", partners: 1 },
                    { region: "South America", status: "Research Collaborator", partners: 1 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-secondary" />
                        <span className="font-semibold">{item.region}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-primary uppercase">{item.status}</div>
                        <div className="text-xs text-muted-foreground">{item.partners} Partners</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-video bg-foreground rounded-3xl overflow-hidden shadow-premium border border-white/10"
              >
                {/* Simulated Map Visualization */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulsing Hotspots */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-secondary rounded-full animate-ping" />
                      <div className="w-4 h-4 bg-secondary rounded-full absolute inset-0" />
                    </div>
                    <div className="absolute top-1/4 left-1/3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-ping" />
                      <div className="w-3 h-3 bg-primary rounded-full absolute inset-0" />
                    </div>
                    <div className="absolute bottom-1/3 right-1/4">
                      <div className="w-3 h-3 bg-accent rounded-full animate-ping" />
                      <div className="w-3 h-3 bg-accent rounded-full absolute inset-0" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-premium rounded-xl">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-white uppercase tracking-widest">Live Network Status</div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] text-white/80">All Systems Operational</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Research & Citations */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                The Need is Real
              </h2>
              <p className="text-muted-foreground">Backed by research from leading global organizations</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {researchCitations.map((citation, index) => (
                <motion.a
                  key={index}
                  href={citation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border hover:border-secondary hover:shadow-card transition-all group"
                >
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{citation.stat}</div>
                  <p className="text-muted-foreground text-sm mb-4">{citation.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground font-medium">{citation.source}, {citation.year}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Goals */}
        <section className="py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-elevated"
              >
                <img
                  src={communityImg}
                  alt="MAS community impact and outreach"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-primary-foreground font-serif text-xl md:text-2xl">
                    "Together, we're building a more inclusive world."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Our Impact Goals
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every aspect of MAS is designed to create measurable, meaningful change 
                  in the lives of users, caregivers, and communities.
                </p>
                {impactGoals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-card transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                      <goal.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-foreground">{goal.title}</h3>
                        <span className="text-secondary font-bold text-lg">{goal.stat}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* SDG Alignment - Enhanced */}
        <section className="py-24 bg-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-4">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground text-sm font-medium">UN Sustainable Development Goals</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Aligned with Global Sustainability Targets
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                MAS directly contributes to the UN's 2030 Agenda, ensuring 
                our innovation creates lasting positive change.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {sdgs.map((sdg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-primary-foreground/15 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 ${sdg.color} rounded-xl flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-lg`}>
                      {sdg.number}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                      <sdg.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <p className="text-xs text-primary-foreground/50 mb-1">SDG {sdg.number}</p>
                  <h3 className="font-semibold text-primary-foreground text-lg mb-3">{sdg.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                    {sdg.description}
                  </p>
                  <div className="pt-4 border-t border-primary-foreground/10">
                    <p className="text-secondary text-sm font-medium">{sdg.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-primary-foreground/50 text-sm mt-8"
            >
              Learn more at{" "}
              <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                UN Sustainable Development Goals
              </a>
            </motion.p>
          </div>
        </section>

        {/* Environmental Sustainability - Enhanced */}
        <section className="py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Environmental Commitment
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Sustainability by Design
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe that caring for people and caring for the planet go hand in hand. 
                MAS is engineered with environmental responsibility at its core.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {environmentalImpact.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border text-center group hover:border-accent transition-colors"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{item.percentage}</div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Enhanced */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <Quote className="w-12 h-12 text-secondary/30 mx-auto mb-4" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Voices from Our Community
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Real stories from real people whose lives have been touched by MAS.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-soft rounded-2xl p-8 border border-border relative"
                >
                  <Quote className="w-8 h-8 text-secondary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-secondary text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-8 text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-semibold">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-secondary">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Measurable Outcomes */}
        <section className="py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border"
              >
                <div className="text-center mb-8">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                    Our Commitment to Measurable Impact
                  </h2>
                  <p className="text-muted-foreground">Transparency and accountability in everything we do</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Track and report transfer-related injuries before and after MAS implementation",
                    "Measure user satisfaction and quality of life improvements",
                    "Document caregiver burnout reduction through regular surveys",
                    "Calculate environmental savings from sustainable materials",
                    "Publish annual impact reports with transparent metrics",
                    "Partner with research institutions for independent validation",
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-soft transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Be Part of This Impact
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Your support directly translates to lives changed, dignity restored, 
                and a more sustainable future for assistive care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="cta-primary" size="xl" asChild>
                  <Link to="/invest">
                    <Heart className="w-5 h-5" />
                    Support Our Mission
                  </Link>
                </Button>
                <Button variant="subtle" size="lg" asChild>
                  <Link to="/roadmap">
                    View Our Roadmap
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

export default Impact;
