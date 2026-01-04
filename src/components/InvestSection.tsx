import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Building2, 
  Heart,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fundingAllocation = [
  { label: "Product Refinement", percentage: 25, color: "bg-primary" },
  { label: "Certifications & Compliance", percentage: 20, color: "bg-secondary" },
  { label: "Manufacturing Setup", percentage: 30, color: "bg-accent" },
  { label: "Pilot Programs", percentage: 15, color: "bg-primary/70" },
  { label: "Market Entry", percentage: 10, color: "bg-secondary/70" },
];

const whyInvest = [
  { icon: TrendingUp, title: "Growing Market", description: "$30B+ assistive technology market with 7-8% CAGR" },
  { icon: Heart, title: "Social + Financial Returns", description: "Create real impact while achieving strong returns" },
  { icon: Users, title: "1B+ Target Users", description: "Massive global demand for dignified care solutions" },
  { icon: Building2, title: "Scalable Model", description: "Modular design enables regional manufacturing" },
];

const InvestSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="invest" className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-foreground to-transparent opacity-[0.03]" />
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
            Join Our Mission
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Invest in <span className="text-gradient-warm">Human Dignity</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your support doesn't just fund innovation—it restores independence to 
            millions and brings hope to families worldwide.
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-hero rounded-3xl p-8 md:p-12 lg:p-16 text-center mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground font-semibold">Funding Round Open</span>
            </div>
            
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              $2,500,000
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Target funding to complete development, certifications, and bring MAS to 
              market—changing thousands of lives in the first year alone.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="hero" size="xl" className="pulse-glow">
                <Heart className="w-5 h-5" />
                Donate Now
              </Button>
              <Button variant="hero-outline" size="xl">
                Become an Investor
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-primary-foreground/60 text-sm">
              All contributions are tax-deductible. Investors receive detailed impact reports.
            </p>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Why Invest */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Why Support MAS?
            </h3>
            <div className="space-y-6">
              {whyInvest.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fund Allocation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              How Funds Will Be Used
            </h3>
            <div className="space-y-4">
              {fundingAllocation.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{item.label}</span>
                    <span className="text-muted-foreground">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Expected Outcomes */}
            <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-4">Expected First-Year Outcomes</h4>
              <div className="space-y-3">
                {[
                  "500+ units deployed",
                  "Medical device certifications obtained",
                  "3+ pilot partnerships with healthcare institutions",
                  "Measurable reduction in transfer injuries",
                ].map((outcome, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-muted-foreground text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emotional Close */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-serif text-2xl md:text-3xl text-foreground max-w-3xl mx-auto leading-relaxed">
            "Every dollar you give restores someone's dignity. 
            <span className="text-secondary"> Every investment saves a caregiver from injury.</span> 
            Together, we can make independence possible for millions."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestSection;
