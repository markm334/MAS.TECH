import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import {
  Lightbulb,
  Settings,
  Shield,
  Rocket,
  Globe,
  CheckCircle2,
  ArrowRight,
  Heart,
  Target,
  Zap,
  TrendingUp,
  FlaskConical,
  Factory,
  Award,
  Calendar,
  Smartphone,
  Building2,
  ChevronRight,
  Info,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnicalDocsModal from "@/components/TechnicalDocsModal";
import InquiryModal from "@/components/InquiryModal";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import roadmapVisual from "@/assets/roadmap-visual.jpg";

const milestones = [
  {
    id: "dream",
    year: "2017",
    title: "The Spark",
    description: "Personal experience sparks the vision for MAS.",
    icon: Lightbulb,
    status: "completed",
    details: ["Founder's vision", "Initial sketches", "Concept validation"],
    color: "bg-amber-500"
  },
  {
    id: "research",
    year: "2020",
    title: "Deep R&D",
    description: "Extensive user research and technical drafting.",
    icon: FlaskConical,
    status: "completed",
    details: ["50+ Interviews", "Healthcare partnerships", "Tech specs"],
    color: "bg-blue-500"
  },
  {
    id: "prototype",
    year: "2023",
    title: "Prototype",
    description: "First functional unit tested with real users.",
    icon: Settings,
    status: "completed",
    details: ["Functional build", "User testing", "Design iteration"],
    color: "bg-primary"
  },
  {
    id: "validation",
    year: "2024",
    title: "Validation",
    description: "Pilot programs and safety certifications.",
    icon: Shield,
    status: "completed",
    details: ["3 Pilot sites", "Safety testing", "Regulatory planning"],
    color: "bg-secondary"
  },
  {
    id: "pilots",
    year: "2025",
    title: "Pilot Expansion",
    description: "Scaling pilot programs across multiple regions.",
    icon: Users,
    status: "completed",
    details: ["Regional testing", "Data collection", "User feedback"],
    color: "bg-orange-500"
  },
  {
    id: "launch",
    year: "2026",
    title: "Market Launch",
    description: "Manufacturing setup and first deployment.",
    icon: Rocket,
    status: "current",
    details: ["Certifications", "Factory setup", "500+ Units"],
    color: "bg-purple-500"
  },
  {
    id: "global",
    year: "2027+",
    title: "Global Scale",
    description: "AI integration and international expansion.",
    icon: Globe,
    status: "upcoming",
    details: ["AI Personalization", "10+ Countries", "1M+ Impact"],
    color: "bg-emerald-500"
  },
];

const activeTasks = [
  { title: "Safety Certifications", progress: 65, icon: Award },
  { title: "Manufacturing Optimization", progress: 45, icon: Factory },
  { title: "Pilot Expansion", progress: 70, icon: Users },
  { title: "Series A Funding", progress: 25, icon: TrendingUp },
];

const Roadmap = () => {
  const [selectedPhase, setSelectedPhase] = useState(milestones[3]);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const { ref, isInView } = useInView(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Compact Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-soft border-b border-border">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <Badge variant="secondary" className="px-3 py-1 text-xs uppercase tracking-wider">
                  Strategic Roadmap
                </Badge>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Engineering the <span className="text-gradient-primary">Future of Care</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl">
                  A transparent, data-driven journey from a personal dream to a global 
                  standard in assistive technology.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="cta" size="lg" asChild>
                    <Link to="/invest">Support Phase 2024</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div className="glass-premium rounded-3xl p-6 shadow-elevated border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                      <span className="text-sm font-bold">Active Phase: Market Launch</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Est. Completion: Q4 2026</span>
                  </div>
                  <div className="space-y-5">
                    {activeTasks.map((task, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="flex items-center gap-2">
                            <task.icon className="w-3.5 h-3.5 text-primary" />
                            {task.title}
                          </span>
                          <span className="text-secondary">{task.progress}%</span>
                        </div>
                        <Progress value={task.progress} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Phase Explorer - Compact Timeline */}
        <section className="py-16 bg-card" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold mb-2">The MAS Evolution</h2>
              <p className="text-muted-foreground">Select a phase to explore our progress and future goals.</p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Timeline Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {milestones.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedPhase(m)}
                    className={`px-6 py-3 rounded-2xl border transition-all flex flex-col items-center gap-1 min-w-[120px] ${
                      selectedPhase.id === m.id
                        ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                        : "bg-muted/50 text-muted-foreground border-border hover:bg-muted"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase opacity-70">{m.year}</span>
                    <span className="text-sm font-bold">{m.title}</span>
                  </button>
                ))}
              </div>

              {/* Phase Detail Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPhase.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-5 gap-8 items-center bg-gradient-soft rounded-3xl p-8 border border-border shadow-card"
                >
                  <div className="md:col-span-2 space-y-6">
                    <div className={`w-16 h-16 rounded-2xl ${selectedPhase.color} flex items-center justify-center text-white shadow-lg`}>
                      <selectedPhase.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={selectedPhase.status === 'completed' ? 'default' : selectedPhase.status === 'current' ? 'secondary' : 'outline'}>
                          {selectedPhase.status.toUpperCase()}
                        </Badge>
                        <span className="text-sm font-bold text-muted-foreground">{selectedPhase.year}</span>
                      </div>
                      <h3 className="font-serif text-3xl font-bold mb-4">{selectedPhase.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedPhase.description}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-3 grid sm:grid-cols-2 gap-4">
                    {selectedPhase.details.map((detail, i) => (
                      <div key={i} className="bg-card p-4 rounded-xl border border-border flex items-start gap-3 group hover:border-primary transition-colors">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${selectedPhase.status === 'completed' ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className="text-sm font-medium">{detail}</span>
                      </div>
                    ))}
                    <div 
                      onClick={() => setIsDocsOpen(true)}
                      className="sm:col-span-2 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-between group cursor-pointer hover:bg-primary/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Info className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold">View Technical Documentation</span>
                      </div>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Compact Future Readiness Grid */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Tech Evolution */}
              <Card className="bg-card border-border shadow-soft hover:shadow-card transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="font-serif text-xl font-bold">Tech Evolution</h4>
                  <ul className="space-y-3">
                    {["IoT Connectivity", "AI Personalization", "Smart Ecosystem"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Growth Strategy */}
              <Card className="bg-card border-border shadow-soft hover:shadow-card transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h4 className="font-serif text-xl font-bold">Global Growth</h4>
                  <ul className="space-y-3">
                    {["10+ Countries by 2026", "50+ Partner Facilities", "1M+ Lives Impacted"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Risk Mitigation */}
              <Card className="bg-card border-border shadow-soft hover:shadow-card transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="font-serif text-xl font-bold">Risk Mitigation</h4>
                  <ul className="space-y-3">
                    {["Regulatory Compliance", "Manufacturing Scale", "Market Access"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Vision CTA - Compact */}
        <section className="py-16 bg-foreground text-primary-foreground overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <Globe className="w-12 h-12 text-secondary mx-auto" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Our 2030 Vision</h2>
              <p className="text-primary-foreground/70 text-lg">
                By 2030, MAS will be the global standard for dignified assistive care, 
                bridging the gap between technology and human empathy.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/invest">
                    Join the Mission
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <InquiryModal 
                  initialReason="partnership"
                  trigger={
                    <Button variant="hero-outline" size="xl">Partner With Us</Button>
                  }
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <TechnicalDocsModal 
        isOpen={isDocsOpen} 
        onClose={() => setIsDocsOpen(false)} 
        phase={selectedPhase} 
      />
    </div>
  );
};

export default Roadmap;
