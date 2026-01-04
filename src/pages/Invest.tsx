import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useInView } from "@/hooks/useAnimations";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Building2, 
  Heart,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  Shield,
  Gift,
  Briefcase,
  Star,
  Sparkles,
  Target,
  Award,
  Send,
  Building,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const fundingAllocation = [
  { label: "Product Refinement", percentage: 25, color: "bg-primary", icon: Target },
  { label: "Certifications & Compliance", percentage: 20, color: "bg-secondary", icon: Shield },
  { label: "Manufacturing Setup", percentage: 30, color: "bg-accent", icon: Building2 },
  { label: "Pilot Programs", percentage: 15, color: "bg-primary/70", icon: Users },
  { label: "Market Entry", percentage: 10, color: "bg-secondary/70", icon: TrendingUp },
];

const whyInvest = [
  { icon: TrendingUp, title: "Growing Market", description: "$30B+ assistive technology market with 7-8% annual growth rate", stat: "$30B+" },
  { icon: Heart, title: "Social + Financial Returns", description: "Create measurable impact while achieving strong investment returns", stat: "2x" },
  { icon: Users, title: "1B+ Target Users", description: "Massive global demand for dignified, affordable care solutions", stat: "1B+" },
  { icon: Building2, title: "Scalable Model", description: "Modular design enables regional manufacturing and rapid scaling", stat: "10x" },
];

const donationTiers = [
  { 
    amount: "$25", 
    title: "Supporter", 
    description: "Help fund user research and community outreach",
    perks: ["Digital thank you certificate", "Quarterly newsletter updates"],
    highlight: false,
    icon: Heart,
  },
  { 
    amount: "$100", 
    title: "Champion", 
    description: "Fund one user testing session with a real patient",
    perks: ["All Supporter perks", "Name on our digital wall of champions", "Exclusive behind-the-scenes updates"],
    highlight: false,
    icon: Star,
  },
  { 
    amount: "$500", 
    title: "Advocate", 
    description: "Cover materials for safety components for one unit",
    perks: ["All Champion perks", "Video call with the founder", "Early access to progress reports"],
    highlight: false,
    icon: Shield,
  },
  { 
    amount: "$1,000", 
    title: "Partner", 
    description: "Fund one complete prototype sensor system",
    perks: ["All Advocate perks", "Name engraved on prototype unit", "Invitation to virtual launch event"],
    highlight: true,
    icon: Sparkles,
  },
  { 
    amount: "$5,000", 
    title: "Benefactor", 
    description: "Sponsor a full pilot program week at a healthcare facility",
    perks: ["All Partner perks", "Personal facility visit (if possible)", "Quarterly impact call with team"],
    highlight: false,
    icon: Award,
  },
  { 
    amount: "$10,000+", 
    title: "Founding Donor", 
    description: "Major contribution toward market launch",
    perks: ["All Benefactor perks", "Advisory board invitation", "Recognition in all marketing materials", "Direct line to founder"],
    highlight: false,
    icon: Gift,
  },
];

const Invest = () => {
  const { ref, isInView } = useInView(0.1);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "investment",
    message: ""
  });

  useEffect(() => {
    if (selectedTier !== null) {
      setFormData(prev => ({
        ...prev,
        interest: "donation",
        message: `I am interested in the ${donationTiers[selectedTier].title} tier (${donationTiers[selectedTier].amount}). I would like to discuss how to proceed with this contribution.`
      }));
    }
  }, [selectedTier]);

  const handleDonateClick = (tierIndex: number) => {
    setSelectedTier(tierIndex);
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-email', {
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          reason: formData.interest,
          organization: formData.organization,
          message: formData.message
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (error) throw error;

      toast({
        title: "Inquiry Received",
        description: "Thank you for your interest in MAS. Our team will review your inquiry and respond within 24 hours.",
      });

      setFormData({ name: "", email: "", organization: "", interest: "investment", message: "" });
      setSelectedTier(null);
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to Send Inquiry",
        description: "There was an error sending your message. Please try again or contact us directly via phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <DollarSign className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-semibold">Funding Round Open</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Invest in <span className="text-secondary">Human Dignity</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Your support doesn't just fund innovation—it restores independence to 
                millions and brings hope to families worldwide.
              </p>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-md mx-auto mb-8">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2">
                  $2.5M
                </div>
                <p className="text-primary-foreground/70 mb-4">
                  Target funding to bring MAS to market
                </p>
                <div className="h-3 bg-primary-foreground/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "18%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-secondary rounded-full"
                  />
                </div>
                <p className="text-sm text-primary-foreground/60 mt-2">18% raised so far</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="xl" className="pulse-glow" asChild>
                  <a href="#donation-tiers">
                    <Heart className="w-5 h-5" />
                    Donate Now
                  </a>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <a href="#investor-section">
                    <Briefcase className="w-5 h-5" />
                    Become an Investor
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Support MAS */}
        <section className="py-24 bg-card" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Support MAS?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                MAS represents a unique opportunity to create both social impact and 
                financial returns in a rapidly growing market.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {whyInvest.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-soft rounded-2xl p-6 border border-border hover:shadow-card hover:border-secondary/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-secondary">{item.stat}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Tiers - Enhanced */}
        <section id="donation-tiers" className="py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <Gift className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Choose Your Impact Level
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every contribution matters. Select a donation tier that feels right for you, 
                and know that 100% of your support goes directly toward bringing MAS to life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {donationTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-card rounded-2xl p-6 shadow-card border-2 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                    tier.highlight 
                      ? "border-secondary ring-2 ring-secondary/20" 
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      tier.highlight ? "bg-secondary/20" : "bg-muted"
                    }`}>
                      <tier.icon className={`w-6 h-6 ${tier.highlight ? "text-secondary" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{tier.amount}</div>
                      <div className="text-sm text-muted-foreground">{tier.title}</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                  
                  <div className="border-t border-border pt-4 mb-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">What you get</p>
                    <ul className="space-y-2">
                      {tier.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant={tier.highlight ? "cta-primary" : "subtle"} 
                    className="w-full"
                    onClick={() => handleDonateClick(index)}
                  >
                    <Heart className="w-4 h-4" />
                    Select This Level
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-4">
                Want to give a custom amount? <a href="#contact-section" className="text-secondary hover:underline font-medium">Contact us</a> to discuss.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>All donations are secure and may be tax-deductible</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fund Allocation - Enhanced */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  How Your Funds Will Be Used
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We believe in complete transparency. Here's exactly how every dollar 
                  of your contribution will be allocated.
                </p>
                <div className="space-y-5">
                  {fundingAllocation.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center`}>
                            <item.icon className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <span className="text-foreground font-medium">{item.label}</span>
                        </div>
                        <span className="text-foreground font-bold">{item.percentage}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden ml-11">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-soft rounded-3xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Expected First-Year Outcomes
                  </h3>
                </div>
                <div className="space-y-6">
                  {[
                    { metric: "500+", description: "units deployed to healthcare facilities and homes" },
                    { metric: "3+", description: "pilot partnerships with major healthcare institutions" },
                    { metric: "90%", description: "reduction in transfer-related injuries (target)" },
                    { metric: "100%", description: "of certifications completed for market entry" },
                  ].map((outcome, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                    >
                      <div className="text-3xl font-bold text-secondary">{outcome.metric}</div>
                      <p className="text-muted-foreground pt-1">{outcome.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* For Investors */}
        <section id="investor-section" className="py-24 bg-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <Briefcase className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                For Impact Investors
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Looking for a larger investment opportunity with both social impact and 
                financial returns? MAS offers compelling investment potential.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { label: "Market Size", value: "$30B+", note: "and growing 7-8% annually" },
                  { label: "Target Raise", value: "$2.5M", note: "seed round" },
                  { label: "Exit Opportunities", value: "Multiple", note: "acquisition, partnership, IPO" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm border border-primary-foreground/10"
                  >
                    <div className="text-sm text-primary-foreground/60 mb-1">{item.label}</div>
                    <div className="text-4xl font-bold text-primary-foreground mb-1">{item.value}</div>
                    <div className="text-sm text-primary-foreground/60">{item.note}</div>
                  </motion.div>
                ))}
              </div>

              <Button variant="hero" size="xl" asChild>
                <a href="#contact-section">
                  Request Investment Materials
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <section id="contact-section" className="py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border">
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Strategic Partnership Inquiry
                  </h2>
                  <p className="text-muted-foreground max-w-lg mx-auto">
                    Join us in our mission to redefine assistive technology. Please provide your details below, and our team will contact you to discuss potential synergies.
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Users className="w-4 h-4 text-secondary" />
                        Full Name
                      </label>
                      <Input
                        required
                        placeholder="e.g. Dr. Sarah Chen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/50 border-border focus:border-secondary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-secondary" />
                        Email Address
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="sarah.chen@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background/50 border-border focus:border-secondary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Building className="w-4 h-4 text-secondary" />
                        Organization
                      </label>
                      <Input
                        placeholder="Company, Foundation, or Institution"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="bg-background/50 border-border focus:border-secondary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Target className="w-4 h-4 text-secondary" />
                        Primary Interest
                      </label>
                      <select
                        title="Primary Interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-border bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      >
                        <option value="investment">Equity Investment</option>
                        <option value="donation">Philanthropic Donation</option>
                        <option value="partnership">Strategic Partnership</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-secondary" />
                      Message / Proposal Summary
                    </label>
                    <Textarea
                      required
                      placeholder="Briefly describe your interest or proposal..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[150px] bg-background/50 border-border focus:border-secondary transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Submit Inquiry
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span>Secure & Confidential Communication</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="tel:+254794347868" className="hover:text-secondary transition-colors flex items-center gap-1">
                      <Phone className="w-3 h-3" /> +254 794 347 868
                    </a>
                    <span>Nairobi, Kenya</span>
                  </div>
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

export default Invest;
