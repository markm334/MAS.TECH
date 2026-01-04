import { motion } from "framer-motion";
import { 
  Cpu, 
  Zap, 
  Shield, 
  Smartphone, 
  Activity, 
  Database, 
  Cloud, 
  Lock,
  ArrowRight,
  CheckCircle2,
  Settings,
  Microchip,
  Wifi,
  Eye,
  Battery,
  Gauge
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import InteractiveProductExplorer from "@/components/InteractiveProductExplorer";
import TechBackground from "@/components/TechBackground";
import SystemArchitectureDiagram from "@/components/SystemArchitectureDiagram";
import TechNeuralNetwork from "@/components/TechNeuralNetwork";
import TechHeroAnimation from "@/components/TechHeroAnimation";
import TechDataFlow from "@/components/TechDataFlow";

// Import tech-focused images
import masDevice from "@/assets/mas-device.jpg";
import idea8 from "@/assets/idea 8.png";
import futureVision from "@/assets/idea 9.png";
import neuralLogo from "@/assets/logos/logo-25-neural.png";

const techSpecs = [
  {
    category: "Core Intelligence",
    icon: Cpu,
    features: [
      { title: "Real-time OS", description: "Low-latency embedded system for instantaneous safety response." },
      { title: "Edge AI", description: "On-device processing for movement pattern recognition without cloud dependency." },
      { title: "Adaptive Control", description: "Algorithms that learn and adjust to individual user weight and mobility levels." }
    ]
  },
  {
    category: "Sensor Fusion",
    icon: Activity,
    features: [
      { title: "Load Sensing", description: "High-precision strain gauges for balanced weight distribution monitoring." },
      { title: "Proximity Array", description: "360° ultrasonic sensors to prevent collisions during automated transfers." },
      { title: "Biometric Sync", description: "Optional integration with wearables to monitor heart rate during movement." }
    ]
  },
  {
    category: "Connectivity & Data",
    icon: Wifi,
    features: [
      { title: "IoT Gateway", description: "Secure encrypted bridge for remote diagnostics and maintenance alerts." },
      { title: "Caregiver App", description: "Real-time status monitoring and remote control via Bluetooth Low Energy." },
      { title: "Cloud Analytics", description: "Aggregated anonymized data to improve global mobility outcomes." }
    ]
  }
];

const ExploreTech = () => {
  const [telemetry, setTelemetry] = useState({
    battery: 85,
    load: 42,
    stability: 99,
    temp: 32
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        battery: Math.max(0, prev.battery - 0.01),
        load: 40 + Math.random() * 5,
        stability: 98 + Math.random() * 2,
        temp: 31 + Math.random() * 2
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-secondary selection:text-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-40 bg-foreground text-primary-foreground relative overflow-hidden">
          <TechHeroAnimation />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <Badge variant="secondary" className="mb-6 bg-secondary text-white border-none px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
                  Next-Gen Assistive Intelligence
                </Badge>
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Engineering the <br />
                  <span className="text-gradient-primary">Neural Future</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-xl">
                  MAS integrates advanced robotics, edge AI, and cyber-physical systems 
                  to create a seamless bridge between human intent and mechanical action.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="xl" onClick={() => document.getElementById('neural-processing')?.scrollIntoView({ behavior: 'smooth' })}>
                    Explore Architecture
                  </Button>
                  <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-white/60 uppercase tracking-widest">System Status: Optimal</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl group bg-slate-900 p-1">
                  {/* High-Clarity Product Showcase */}
                  <div className="relative bg-[#05070a] rounded-[2.9rem] overflow-hidden flex items-center justify-center min-h-[600px]">
                    {/* Studio Lighting - Top Down */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.07] to-transparent z-0" />
                    
                    {/* Smart Tech Accents */}
                    <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-secondary/60 rounded-tl-2xl z-20" />
                    <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-primary/60 rounded-br-2xl z-20" />
                    
                    <img 
                      src={idea8} 
                      alt="MAS Core v5.2 Drive System" 
                      className="w-[90%] h-auto object-contain relative z-10 transition-all duration-1000 group-hover:scale-105 filter brightness-110 contrast-105 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                    />
                    
                    {/* Smart Data Tags */}
                    <div className="absolute top-12 right-12 space-y-2 z-20">
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest">System_Online</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-12 left-12 z-20">
                      <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-1">Core_Architecture</div>
                      <div className="text-xs font-mono text-white/60">v5.2_BRUSHLESS_DRIVE</div>
                    </div>

                    {/* Subtle Scanning Effect */}
                    <motion.div 
                      animate={{ left: ["-100%", "200%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12 pointer-events-none"
                    />
                  </div>

                  {/* Floating Tech Label */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <Microchip className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">MAS Core v5.2</h4>
                        <p className="text-xs text-white/60">High-Torque Brushless Drive System</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Neural Processing Section */}
        <section id="neural-processing" className="py-24 bg-card relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Badge variant="outline" className="text-secondary border-secondary/30">Edge Computing</Badge>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
                  Neural-Link <br />
                  <span className="text-gradient-primary">Control Systems</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At the heart of MAS is a distributed neural network that processes 
                  thousands of data points per second. This allows for predictive 
                  stability control and intuitive user interaction that feels natural.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-gradient-soft border border-border">
                    <div className="text-2xl font-bold text-primary mb-1">0.5ms</div>
                    <div className="text-xs text-muted-foreground uppercase font-bold">Latency</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-soft border border-border">
                    <div className="text-2xl font-bold text-secondary mb-1">64-bit</div>
                    <div className="text-xs text-muted-foreground uppercase font-bold">Processing</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-[500px]"
              >
                <TechNeuralNetwork />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Data Flow Section */}
        <section className="py-24 bg-gradient-soft relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">System Intelligence</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Real-Time Data Pipeline</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visualizing the high-speed communication between physical sensors and the AI core.
              </p>
            </div>
            <TechDataFlow />
          </div>
        </section>

        {/* Interactive Explorer Integration */}
        <section className="py-24 bg-gradient-soft relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Cyber-Physical Integration</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The seamless fusion of high-performance hardware and intelligent software.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
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
          </div>
        </section>

        {/* AI Personalization Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative rounded-[3rem] overflow-hidden border border-border shadow-premium group">
                  <img 
                    src={futureVision} 
                    alt="AI Future Vision" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay" />
                  
                  {/* AI Visualization Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-64 h-64 rounded-full border-2 border-primary/30 flex items-center justify-center"
                    >
                      <img src={neuralLogo} alt="" className="w-32 h-32 opacity-40 grayscale invert" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 order-1 lg:order-2"
              >
                <div>
                  <Badge variant="outline" className="text-primary border-primary/30 mb-4">Machine Learning</Badge>
                  <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
                    AI-Driven <br />
                    <span className="text-gradient-secondary">Personalization</span>
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  MAS doesn't just move; it learns. Our proprietary ML models analyze 
                  user movement patterns to optimize assistance levels in real-time, 
                  reducing physical strain while maximizing independence.
                </p>
                <div className="space-y-4">
                  {[
                    "Predictive Path Optimization",
                    "Adaptive Load Balancing",
                    "Biometric Feedback Integration",
                    "Autonomous Safety Interventions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-bold text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Live Telemetry Simulation */}
        <section className="py-24 bg-gradient-soft relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-foreground rounded-[3rem] p-8 md:p-16 shadow-premium border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Activity className="w-64 h-64 text-white" />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                  <div>
                    <Badge variant="secondary" className="mb-4 bg-secondary text-white border-none px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Live System Telemetry</Badge>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">Real-Time Intelligence</h2>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white/80 font-mono text-sm tracking-widest">UNIT_MAS_042_ACTIVE</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { label: "Battery Level", value: `${telemetry.battery.toFixed(1)}%`, icon: Battery, color: "text-green-400" },
                    { label: "Current Load", value: `${telemetry.load.toFixed(1)}kg`, icon: Gauge, color: "text-blue-400" },
                    { label: "System Stability", value: `${telemetry.stability.toFixed(1)}%`, icon: Shield, color: "text-secondary" },
                    { label: "Core Temp", value: `${telemetry.temp.toFixed(1)}°C`, icon: Activity, color: "text-orange-400" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all duration-500 group">
                      <stat.icon className={`w-8 h-8 ${stat.color} mb-6 transition-transform duration-500 group-hover:scale-110`} />
                      <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                      <div className="text-white text-4xl font-mono font-bold tracking-tighter">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Component Breakdown Grid */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-secondary border-secondary/30">Hardware Architecture</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Precision Engineering</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every component is selected for maximum reliability and performance in safety-critical environments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "High-Torque Actuators",
                  desc: "Dual 400W brushless DC motors with integrated planetary gearboxes for smooth, silent operation.",
                  spec: "80Nm Peak Torque",
                  icon: Zap
                },
                {
                  title: "Multi-Modal Sensors",
                  desc: "64-point sensor array combining ultrasonic, infrared, and load-cell data for 360° awareness.",
                  spec: "100Hz Sampling Rate",
                  icon: Activity
                },
                {
                  title: "Energy Management",
                  desc: "LiFePO4 battery chemistry with a custom Smart BMS for 12+ hours of continuous operation.",
                  spec: "2000+ Cycle Life",
                  icon: Battery
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-[2.5rem] bg-gradient-soft border border-border hover:border-primary/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                  <div className="pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Performance</span>
                    <span className="text-xs font-mono font-bold text-secondary">{item.spec}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Tech Grid */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {techSpecs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-border shadow-soft hover:shadow-card transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <spec.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="font-serif text-2xl">{spec.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {spec.features.map((feature, j) => (
                        <div key={j} className="space-y-1">
                          <h5 className="font-bold text-sm flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-secondary" />
                            {feature.title}
                          </h5>
                          <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Hardware Data Table */}
            <motion.div
              id="tech-specs-table"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-card rounded-3xl border border-border overflow-hidden shadow-premium scroll-mt-24"
            >
              <div className="p-6 border-b border-border bg-muted/30">
                <h3 className="font-serif text-xl font-bold flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Hardware Specifications
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase tracking-widest text-muted-foreground bg-muted/20">
                    <tr>
                      <th className="px-6 py-4 font-bold">Component</th>
                      <th className="px-6 py-4 font-bold">Specification</th>
                      <th className="px-6 py-4 font-bold">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { comp: "Main Processor", spec: "ARM Cortex-M7 @ 480MHz", perf: "1027 CoreMark" },
                      { comp: "Motor Controllers", spec: "FOC Sinusoidal Drive", perf: "98% Efficiency" },
                      { comp: "Load Cells", spec: "24-bit Delta-Sigma ADC", perf: "±0.1kg Precision" },
                      { comp: "Chassis Material", spec: "Aerospace Grade 7075 Al", perf: "250kg SWL" },
                      { comp: "Wireless Link", spec: "BLE 5.2 + Wi-Fi 6", perf: "128-bit Encryption" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-muted/10 transition-colors">
                        <td className="px-6 py-4 font-bold text-foreground">{row.comp}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.spec}</td>
                        <td className="px-6 py-4 font-mono text-secondary text-xs">{row.perf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Developer / Technical Section */}
        <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
          <TechBackground />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <Badge variant="secondary" className="mb-4 bg-secondary text-white border-none">Technical Stack</Badge>
                  <h2 className="font-serif text-3xl md:text-5xl font-bold">Engineered for <br />Reliability</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Safety-Critical Firmware
                    </h4>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed">
                      Written in MISRA C compliant code, our firmware undergoes rigorous 
                      formal verification to ensure zero-fail operation in medical environments.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      Real-time Telemetry Pipeline
                    </h4>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed">
                      High-frequency data streaming via MQTT with end-to-end AES-256 
                      encryption, providing instant diagnostics and predictive maintenance.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="font-mono text-xs text-secondary/60 mb-4 uppercase tracking-widest">Control Logic Preview</div>
                  <div className="bg-black/40 rounded-xl p-6 border border-white/5 font-mono text-[10px] md:text-xs text-primary-foreground/80 overflow-x-auto">
                    <pre>
{`// MAS Stability Control Algorithm v5.2
void update_stability_matrix(SensorData *data) {
  float load_center = calculate_cog(data->load_cells);
  
  if (load_center > STABILITY_THRESHOLD) {
    apply_counter_torque(data->motors, load_center);
    trigger_safety_lock(LOCK_LEVEL_HIGH);
    log_event(EVENT_STABILITY_CORRECTION, load_center);
  }
  
  sync_neural_weights(&mas_core_ai);
}`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10" />
                  <div className="relative w-full h-full">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-secondary/30 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-8 border-2 border-dashed border-primary/30 rounded-full"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <Settings className="w-20 h-20 text-white animate-spin-slow mb-4" />
                      <div className="font-mono text-[10px] text-secondary animate-pulse">SYSTEM_OPTIMIZED</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Tech Specs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl border border-border shadow-elevated max-w-[180px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Battery className="w-4 h-4 text-green-500" />
                    <span className="text-[10px] font-bold text-foreground uppercase">Power Cell</span>
                  </div>
                  <div className="text-xs text-muted-foreground">LiFePO4 48V 20Ah with Smart BMS</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute -top-6 -right-6 bg-card p-4 rounded-2xl border border-border shadow-elevated max-w-[180px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold text-foreground uppercase">Actuators</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Dual 400W Brushless DC Motors</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Ready to see it in action?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/invest">Support Development</Link>
              </Button>
              <InquiryModal 
                initialReason="technical"
                initialMessage="I would like to request the full technical specifications for the MAS system."
                trigger={
                  <Button variant="outline" size="xl">Request Technical Specs</Button>
                }
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExploreTech;
