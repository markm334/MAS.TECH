import { motion } from "framer-motion";
import { 
  Heart, 
  Globe,
  Users,
  Target,
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  Handshake,
  Award,
  TrendingUp,
  MapPin
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
  ResponsiveContainer
} from "recharts";

const impactData = [
  { region: "East Africa", beneficiaries: 15000, partners: 12 },
  { region: "West Africa", beneficiaries: 8000, partners: 8 },
  { region: "Southern Africa", beneficiaries: 12000, partners: 10 },
  { region: "South Asia", beneficiaries: 20000, partners: 15 },
  { region: "Southeast Asia", beneficiaries: 10000, partners: 9 },
];

const partnerBenefits = [
  { icon: Target, title: "Joint Grant Applications", description: "Partner on funding proposals to major donors and foundations" },
  { icon: Users, title: "Co-Branded Campaigns", description: "Amplify impact through coordinated awareness initiatives" },
  { icon: Globe, title: "Field Testing", description: "Deploy MAS in your program areas with dedicated support" },
  { icon: TrendingUp, title: "Impact Measurement", description: "Rigorous M&E frameworks to demonstrate program outcomes" },
];

const sdgAlignment = [
  { number: 3, title: "Good Health & Well-Being" },
  { number: 8, title: "Decent Work & Economic Growth" },
  { number: 9, title: "Industry, Innovation & Infrastructure" },
  { number: 10, title: "Reduced Inequalities" },
  { number: 11, title: "Sustainable Cities & Communities" },
];

const partnershipModels = [
  {
    title: "Program Partner",
    description: "Integrate MAS into your existing disability or healthcare programs",
    features: ["Discounted device access", "Training support", "Joint monitoring", "Co-branding options"],
    link: "/contact?reason=partnership&tier=program"
  },
  {
    title: "Advocacy Partner",
    description: "Collaborate on policy change and awareness campaigns",
    features: ["Joint advocacy initiatives", "Policy brief co-development", "Media partnerships", "Event collaboration"],
    link: "/contact?reason=partnership&tier=advocacy"
  },
  {
    title: "Funding Partner",
    description: "Co-develop proposals and share funding opportunities",
    features: ["Grant writing support", "Consortium building", "Donor introductions", "Budget coordination"],
    link: "/contact?reason=partnership&tier=funding"
  },
];

const NGOs = () => {
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
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">NGO & Foundation Partnership</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Amplify Your Impact with{" "}
                <span className="text-gradient-warm">MAS Technology</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Partner with us to bring dignified assistive care to underserved 
                communities worldwide through proven technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {partnerBenefits.map((benefit, index) => (
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

        {/* Impact by Region Chart */}
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
                  Projected Impact by Region
                </h2>
                <p className="text-muted-foreground">5-year beneficiary targets with NGO partnerships</p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={impactData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                    <YAxis dataKey="region" type="category" stroke="hsl(var(--muted-foreground))" width={120} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                      formatter={(value: number, name: string) => [
                        name === "beneficiaries" ? value.toLocaleString() : value,
                        name === "beneficiaries" ? "Beneficiaries" : "Partners"
                      ]}
                    />
                    <Bar dataKey="beneficiaries" fill="hsl(var(--secondary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SDG Alignment */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Aligned with UN SDGs
              </h2>
              <p className="text-muted-foreground">Our work directly contributes to global sustainability goals</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {sdgAlignment.map((sdg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-gradient-soft rounded-full px-5 py-3 border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {sdg.number}
                  </div>
                  <span className="text-sm font-medium text-foreground">{sdg.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partnership Models
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {partnershipModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-shadow flex flex-col"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{model.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{model.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <InquiryModal 
                    initialReason="partnership"
                    initialMessage={`I am interested in the ${model.title} partnership model for NGOs.`}
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
                Let's Create Impact Together
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Reach out to explore how we can partner to bring dignified care to the communities you serve.
              </p>
              <InquiryModal 
                initialReason="partnership"
                initialMessage="I would like to start a partnership discussion regarding MAS and our NGO/Foundation."
                trigger={
                  <Button variant="hero" size="xl">
                    Start Partnership Discussion
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

export default NGOs;
