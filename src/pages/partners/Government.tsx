import { motion } from "framer-motion";
import { 
  Building,
  Scale,
  Globe,
  Shield,
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  FileText,
  Users,
  TrendingUp,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from "recharts";

const costSavingsData = [
  { year: "Year 1", traditional: 100, withMAS: 85 },
  { year: "Year 2", traditional: 105, withMAS: 70 },
  { year: "Year 3", traditional: 112, withMAS: 58 },
  { year: "Year 4", traditional: 120, withMAS: 48 },
  { year: "Year 5", traditional: 130, withMAS: 40 },
];

const policyAreas = [
  { icon: Shield, title: "Safety Standards", description: "Develop regulations for assistive device safety and certification" },
  { icon: Users, title: "Healthcare Worker Protection", description: "Reduce occupational injuries through technology adoption" },
  { icon: Globe, title: "Accessibility Mandates", description: "Expand assistive technology access in public institutions" },
  { icon: Scale, title: "Reimbursement Policies", description: "Create pathways for insurance and government coverage" },
];

const engagementOptions = [
  {
    title: "Policy Development",
    description: "Work with us to develop evidence-based assistive technology policies",
    features: ["Technical advisory support", "Best practice documentation", "Regulatory guidance", "Standards development"],
    link: "/contact?reason=partnership&tier=policy"
  },
  {
    title: "Pilot Programs",
    description: "Test MAS in public healthcare facilities before scaled deployment",
    features: ["Government facility pilots", "Data collection support", "Impact assessment", "Stakeholder engagement"],
    link: "/contact?reason=partnership&tier=gov-pilot"
  },
  {
    title: "National Deployment",
    description: "Partner for country-wide rollout with ongoing support",
    features: ["Bulk procurement pricing", "Training infrastructure", "Maintenance networks", "Continuous improvement"],
    link: "/contact?reason=partnership&tier=national"
  },
];

const successMetrics = [
  { metric: "40%", label: "Reduction in healthcare worker injuries" },
  { metric: "60%", label: "Cost savings over 5 years" },
  { metric: "85%", label: "Patient satisfaction improvement" },
  { metric: "3x", label: "Return on investment" },
];

const Government = () => {
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
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Building className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Government Partnership</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Transform Public Healthcare{" "}
                <span className="text-gradient-primary">Infrastructure</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Partner with MAS to improve citizen health outcomes, protect healthcare 
                workers, and build sustainable assistive technology infrastructure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {successMetrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.metric}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Savings Chart */}
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
                  Long-Term Cost Savings
                </h2>
                <p className="text-muted-foreground">Healthcare system costs (indexed, Year 1 = 100)</p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={costSavingsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="traditional" 
                      stackId="1"
                      stroke="hsl(var(--muted-foreground))" 
                      fill="hsl(var(--muted))" 
                      name="Traditional Approach"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="withMAS" 
                      stackId="2"
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary))" 
                      fillOpacity={0.3}
                      name="With MAS Implementation"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  <span className="text-primary font-semibold">60% lower costs</span> after 5 years of MAS implementation
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Policy Areas */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Policy Support Areas
              </h2>
              <p className="text-muted-foreground">How we can support your policy objectives</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {policyAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-soft rounded-2xl p-6 border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Options */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Engagement Options
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {engagementOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-shadow flex flex-col"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{option.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <InquiryModal 
                    initialReason="partnership"
                    initialMessage={`I am interested in the ${option.title} government partnership option.`}
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
                Ready to Discuss Partnership?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Contact our government relations team to explore how MAS can support your public health objectives.
              </p>
              <InquiryModal 
                initialReason="partnership"
                initialMessage="I would like to contact the MAS government relations team regarding potential partnership."
                trigger={
                  <Button variant="hero" size="xl">
                    Contact Government Relations
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

export default Government;
