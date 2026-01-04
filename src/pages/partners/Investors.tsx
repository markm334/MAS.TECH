import { motion } from "framer-motion";
import { 
  TrendingUp, 
  DollarSign, 
  Globe, 
  Target, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  BarChart3,
  PieChart,
  Users,
  Zap,
  Shield,
  Briefcase,
  LineChart as LineChartIcon,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPie,
  Pie,
  Cell
} from "recharts";

const marketGrowthData = [
  { year: "2020", value: 18.5 },
  { year: "2021", value: 21.2 },
  { year: "2022", value: 24.8 },
  { year: "2023", value: 28.5 },
  { year: "2024", value: 33.2 },
  { year: "2025", value: 38.5 },
  { year: "2030", value: 72.4 },
];

const revenueProjection = [
  { year: "2025", revenue: 0.5, units: 500 },
  { year: "2026", revenue: 2.5, units: 2500 },
  { year: "2027", revenue: 8, units: 8000 },
  { year: "2028", revenue: 18, units: 15000 },
  { year: "2029", revenue: 35, units: 28000 },
  { year: "2030", revenue: 60, units: 45000 },
];

const fundAllocation = [
  { name: "R&D & Certification", value: 35, color: "hsl(var(--primary))" },
  { name: "Manufacturing", value: 25, color: "hsl(var(--secondary))" },
  { name: "Market Expansion", value: 20, color: "hsl(var(--accent))" },
  { name: "Team & Operations", value: 15, color: "hsl(var(--muted-foreground))" },
  { name: "Reserve", value: 5, color: "hsl(var(--border))" },
];

const investmentTiers = [
  {
    amount: "$10,000 - $50,000",
    title: "Angel Investor",
    equity: "0.1% - 0.5%",
    benefits: ["Quarterly updates", "Investor community access", "Product pre-order rights"],
    link: "/contact?reason=investment&tier=angel"
  },
  {
    amount: "$50,000 - $250,000",
    title: "Seed Investor",
    equity: "0.5% - 2.5%",
    benefits: ["Monthly updates", "Advisory board meetings", "Early pilot participation", "Product naming rights"],
    link: "/contact?reason=investment&tier=seed"
  },
  {
    amount: "$250,000+",
    title: "Lead Investor",
    equity: "2.5%+",
    benefits: ["Board observer seat", "Strategic input", "Co-branding opportunities", "Regional distribution rights"],
    link: "/contact?reason=investment&tier=lead"
  },
];

const whyInvest = [
  { icon: Globe, title: "$72B Market by 2030", description: "Assistive technology market growing at 7.5% CAGR" },
  { icon: Users, title: "2.5B People in Need", description: "WHO estimates 2.5 billion need assistive products by 2030" },
  { icon: Zap, title: "First-Mover Advantage", description: "No comparable affordable solution exists globally" },
  { icon: Shield, title: "Social Impact ROI", description: "Investors get returns plus measurable social impact" },
];

const Investors = () => {
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
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Investment Opportunity</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Invest in the Future of{" "}
                <span className="text-gradient-primary">Assistive Care</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Join a $72 billion market opportunity while making a measurable 
                impact on millions of lives worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Market Opportunity Chart */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                <Badge variant="outline" className="text-primary border-primary/30">Market Analysis</Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  A Massive, <br />Underserved Market
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The global assistive technology market is at an inflection point. 
                  With aging populations and increasing healthcare costs, the demand 
                  for affordable, high-tech mobility solutions has never been higher.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-sm font-bold text-foreground">7.5% Annual Growth Rate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-sm font-bold text-foreground">High Barrier to Entry</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-gradient-soft rounded-[2.5rem] p-8 border border-border shadow-premium">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-foreground flex items-center gap-2">
                      <LineChartIcon className="w-5 h-5 text-primary" />
                      Market Size Projection (USD Billions)
                    </h3>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Data Source: WHO/World Bank</span>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={marketGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}B`} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "12px",
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                        }}
                        formatter={(value: number) => [`$${value}B`, "Market Size"]}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="hsl(var(--primary))" 
                        fill="hsl(var(--primary))" 
                        fillOpacity={0.1}
                        strokeWidth={4}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Invest */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Invest in MAS?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {whyInvest.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-card transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Projection */}
        <section className="py-24 bg-gradient-soft relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 order-2 lg:order-1"
              >
                <div className="bg-card rounded-[2.5rem] p-8 border border-border shadow-premium">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-foreground flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      Revenue & Unit Forecast
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueProjection}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}M`} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "12px"
                        }}
                        formatter={(value: number, name: string) => [
                          name === "revenue" ? `$${value}M` : `${value.toLocaleString()} units`,
                          name === "revenue" ? "Revenue" : "Units Sold"
                        ]}
                      />
                      <Bar dataKey="revenue" fill="hsl(var(--secondary))" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 order-1 lg:order-2 space-y-6"
              >
                <Badge variant="outline" className="text-secondary border-secondary/30">Financial Outlook</Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Scalable <br />Revenue Model
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our business model combines direct hardware sales with recurring 
                  software-as-a-service (SaaS) revenue for facility management and 
                  predictive maintenance.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: "Direct Sales", value: "B2B & B2G" },
                    { label: "Subscription", value: "Fleet Management" },
                    { label: "Maintenance", value: "Service Contracts" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-card border border-border">
                      <span className="text-xs font-bold text-muted-foreground uppercase">{item.label}</span>
                      <span className="text-sm font-bold text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fund Allocation */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  How We'll Use Your Investment
                </h2>
                <div className="space-y-4">
                  {fundAllocation.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div 
                        className="w-4 h-4 rounded-full shrink-0" 
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-foreground">{item.name}</span>
                          <span className="text-muted-foreground">{item.value}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPie>
                    <Pie
                      data={fundAllocation}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${value}%`}
                    >
                      {fundAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPie>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment Tiers */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Investment Tiers
              </h2>
              <p className="text-muted-foreground">Choose the level that works for you</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {investmentTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl p-6 border flex flex-col ${
                    index === 1 
                      ? "bg-primary/5 border-primary shadow-card" 
                      : "bg-gradient-soft border-border"
                  }`}
                >
                  {index === 1 && (
                    <div className="text-center mb-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{tier.title}</h3>
                    <div className="text-2xl font-bold text-primary mb-1">{tier.amount}</div>
                    <div className="text-sm text-muted-foreground">Equity: {tier.equity}</div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <InquiryModal 
                    initialReason="investment"
                    initialMessage={`I am interested in the ${tier.title} investment tier.`}
                    trigger={
                      <Button variant={index === 1 ? "cta" : "outline"} className="w-full">Inquire Now</Button>
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
                Ready to Invest?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a call with our team to discuss investment opportunities and receive our full investor deck.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <InquiryModal 
                  initialReason="investment"
                  initialMessage="I would like to schedule a call to discuss investment opportunities."
                  trigger={
                    <Button variant="hero" size="xl">
                      Schedule a Call
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  }
                />
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/invest">
                    Make a Donation
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

export default Investors;
