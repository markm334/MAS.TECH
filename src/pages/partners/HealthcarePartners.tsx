import { motion } from "framer-motion";
import { 
  Building2, 
  Shield, 
  Users, 
  Award,
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  HeartPulse,
  Activity,
  TrendingDown,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

const injuryReductionData = [
  { category: "Before MAS", injuries: 45, time: 25 },
  { category: "After MAS", injuries: 8, time: 8 },
];

const efficiencyData = [
  { month: "Month 1", traditional: 100, withMAS: 100 },
  { month: "Month 3", traditional: 95, withMAS: 120 },
  { month: "Month 6", traditional: 88, withMAS: 145 },
  { month: "Month 12", traditional: 80, withMAS: 180 },
];

const benefits = [
  { icon: TrendingDown, title: "90% Injury Reduction", description: "Dramatically reduce staff injuries from patient handling" },
  { icon: Clock, title: "70% Faster Transfers", description: "Single-person operation reduces time per transfer" },
  { icon: Users, title: "Staff Retention", description: "Healthier staff means lower turnover and training costs" },
  { icon: Award, title: "Compliance Ready", description: "Designed to meet healthcare safety regulations" },
];

const partnershipTiers = [
  {
    title: "Pilot Partner",
    description: "Test MAS in your facility with dedicated support",
    features: ["5 units for 6-month trial", "Training for all staff", "Data collection support", "Priority pricing post-pilot"],
    link: "/contact?reason=partnership&tier=pilot"
  },
  {
    title: "Implementation Partner",
    description: "Full deployment with comprehensive support",
    features: ["Volume-based pricing", "Ongoing training", "Maintenance support", "Custom configurations"],
    link: "/contact?reason=partnership&tier=implementation"
  },
  {
    title: "Strategic Partner",
    description: "Long-term collaboration for innovation",
    features: ["Product co-development", "Research collaboration", "Joint grant applications", "Exclusive regional rights"],
    link: "/contact?reason=partnership&tier=strategic"
  },
];

const HealthcarePartners = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <main className="pt-24">
        {/* Return Button */}
        <div className="container mx-auto px-4 mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/partners">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Partners
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-soft relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Healthcare Partnership</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Transform Patient Care in{" "}
                <span className="text-gradient-warm">Your Facility</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Partner with MAS to protect your staff, improve patient outcomes, 
                and lead the way in compassionate, technology-enhanced care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-soft rounded-2xl p-6 border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Injury Reduction Chart */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  The MAS Difference
                </h2>
                <p className="text-muted-foreground">Comparing injury rates and transfer times</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4 text-center">Staff Injuries per 1000 Transfers</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={injuryReductionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                      />
                      <Bar dataKey="injuries" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    <span className="text-secondary font-semibold">82% reduction</span> in staff injuries
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4 text-center">Average Transfer Time (minutes)</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={injuryReductionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                      />
                      <Bar dataKey="time" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    <span className="text-secondary font-semibold">68% faster</span> patient transfers
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Efficiency Over Time */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Staff Efficiency Over Time
                </h2>
                <p className="text-muted-foreground">Comparing traditional methods vs MAS implementation</p>
              </div>

              <div className="bg-gradient-soft rounded-2xl p-6 border border-border">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={efficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Efficiency Index', angle: -90, position: 'insideLeft' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Line type="monotone" dataKey="traditional" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Traditional" />
                    <Line type="monotone" dataKey="withMAS" stroke="hsl(var(--secondary))" strokeWidth={3} name="With MAS" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partnership Options
              </h2>
              <p className="text-muted-foreground">Find the right fit for your organization</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {partnershipTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-shadow flex flex-col"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{tier.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <InquiryModal 
                    initialReason="partnership"
                    initialMessage={`I am interested in the ${tier.title} partnership tier for healthcare.`}
                    trigger={
                      <Button variant="outline" className="w-full">Inquire Now</Button>
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Facility?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how MAS can improve safety and efficiency in your healthcare environment.
              </p>
              <InquiryModal 
                initialReason="partnership"
                initialMessage="I would like to schedule a demo of the MAS system for our healthcare facility."
                trigger={
                  <Button variant="hero" size="xl">
                    Schedule a Demo
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                }
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HealthcarePartners;
