import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { 
  AlertTriangle, 
  UserX, 
  Frown, 
  HeartCrack, 
  DollarSign,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Activity,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalCrisisMap from "@/components/GlobalCrisisMap";
import problemMobility from "@/assets/african-struggle-transfer.jpg";
import caregiverStrain from "@/assets/caregiver-strain.jpg";

const globalStats = [
  { 
    value: "1.3B", 
    label: "People with disabilities worldwide", 
    source: "World Health Organization, 2023",
    link: "https://www.who.int/news-room/fact-sheets/detail/disability-and-health"
  },
  { 
    value: "2.5B", 
    label: "People needing assistive products by 2030", 
    source: "WHO Global Report on Assistive Technology",
    link: "https://www.who.int/publications/i/item/9789240049451"
  },
  { 
    value: "90%", 
    label: "In low-income countries lack access to assistive technology", 
    source: "WHO Assistive Technology Report, 2022",
    link: "https://www.who.int/publications/i/item/9789240049451"
  },
  { 
    value: "35%", 
    label: "Of healthcare workers injured from patient handling", 
    source: "U.S. Bureau of Labor Statistics",
    link: "https://www.bls.gov/iif/"
  },
];

const painPoints = [
  {
    icon: AlertTriangle,
    title: "High Risk of Injury",
    description: "Manual patient transfers are one of the leading causes of musculoskeletal injuries in healthcare settings, affecting both patients and caregivers.",
    stat: "52%",
    statLabel: "of nurses report work-related back injuries",
    citation: "American Nurses Association, 2023",
    citationLink: "https://www.nursingworld.org/practice-policy/work-environment/health-safety/safe-patient-handling/",
    color: "bg-destructive/10",
    iconColor: "text-destructive"
  },
  {
    icon: UserX,
    title: "Complete Dependence",
    description: "Without proper assistive devices, individuals with mobility challenges become entirely reliant on others for basic daily activities like getting out of bed or using the bathroom.",
    stat: "24/7",
    statLabel: "constant care required for severe mobility limitations",
    citation: "National Institute on Aging",
    citationLink: "https://www.nia.nih.gov/health/caregiving",
    color: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Frown,
    title: "Loss of Dignity",
    description: "Being lifted and carried during personal care moments strips away self-respect and autonomy. Many patients report feeling infantilized and dehumanized.",
    stat: "78%",
    statLabel: "of patients feel loss of dignity during transfers",
    citation: "Journal of Clinical Nursing, 2021",
    citationLink: "https://onlinelibrary.wiley.com/journal/13652702",
    color: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: HeartCrack,
    title: "Caregiver Burnout",
    description: "Family caregivers and healthcare workers experience physical and emotional exhaustion. This leads to high turnover rates and compromised care quality.",
    stat: "40%",
    statLabel: "of caregivers experience high levels of stress",
    citation: "AARP Caregiving Report, 2023",
    citationLink: "https://www.aarp.org/caregiving/",
    color: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: DollarSign,
    title: "Prohibitive Costs",
    description: "Existing patient lift systems cost between $3,000 to $15,000, making them inaccessible for most families and healthcare facilities in developing regions.",
    stat: "$5K-15K",
    statLabel: "average cost of quality patient lifts",
    citation: "Medical Equipment Market Report, 2023",
    citationLink: "https://www.grandviewresearch.com/industry-analysis/patient-handling-equipment-market",
    color: "bg-muted",
    iconColor: "text-muted-foreground"
  },
];

const Problem = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section with Full-Width Image */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={problemMobility}
              alt="Elderly person in wheelchair facing mobility challenges"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
          </div>

          <div className="container mx-auto px-4 relative z-10 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 bg-destructive/20 backdrop-blur-sm border border-destructive/30 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-primary-foreground/90">
                  A Global Health Crisis
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Millions Struggle in <span className="text-secondary">Silence</span> Every Day
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
                Over <span className="text-primary-foreground font-semibold">1.3 billion people</span> worldwide 
                live with significant disabilities. Current assistive solutions fail them with unsafe transfers, 
                prohibitive costs, and designs that compromise their dignity.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/solution">
                    See Our Solution
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-5 h-5" />
                    WHO Report
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Global Statistics with Citations */}
        <section className="py-20 bg-card" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                The Data Speaks
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                A Problem Too Big to Ignore
              </h2>
              <p className="text-muted-foreground">
                These aren't just numbers—they represent real people, real families, real suffering.
              </p>
            </motion.div>

            {/* Global Crisis Map Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20"
            >
              <GlobalCrisisMap />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalStats.map((stat, index) => (
                <motion.a
                  key={index}
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-gradient-soft rounded-2xl p-6 text-center border border-border hover:border-secondary/50 hover:shadow-card transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{stat.label}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-secondary/80">
                    <ExternalLink className="w-3 h-3" />
                    <span className="truncate">{stat.source}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Problem - Caregiver Image Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={caregiverStrain}
                  alt="Healthcare worker experiencing back pain from patient lifting"
                  className="w-full rounded-2xl shadow-elevated"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "Patient handling is the leading cause of musculoskeletal disorders among healthcare workers"
                  </p>
                  <a 
                    href="https://www.osha.gov/ergonomics/healthcare" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-secondary hover:underline flex items-center gap-1 mt-2"
                  >
                    — OSHA Healthcare Ergonomics Guidelines
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The Hidden Cost of Caring
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <Activity className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Physical Toll</h3>
                      <p className="text-muted-foreground text-sm">
                        Nurses and caregivers face injury rates higher than construction workers, 
                        with back injuries being the most common cause of early career termination.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <HeartCrack className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Emotional Burden</h3>
                      <p className="text-muted-foreground text-sm">
                        Family caregivers report higher levels of depression and anxiety than the general population, 
                        with 40% experiencing high emotional stress.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Growing Demand</h3>
                      <p className="text-muted-foreground text-sm">
                        With aging populations worldwide, the demand for caregivers is projected to increase 
                        by 48% by 2030, while supply continues to decline.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Pain Points with Citations */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Five Critical Challenges
              </h2>
              <p className="text-muted-foreground">
                Each challenge represents real suffering backed by research. Understanding them is 
                the first step toward meaningful change.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-soft rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl ${point.color} flex items-center justify-center mb-4`}>
                    <point.icon className={`w-7 h-7 ${point.iconColor}`} />
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {point.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {point.description}
                  </p>
                  
                  <div className="bg-card rounded-xl p-4 mb-4">
                    <div className="text-3xl font-bold text-foreground mb-1">{point.stat}</div>
                    <div className="text-xs text-muted-foreground">{point.statLabel}</div>
                  </div>
                  
                  <a 
                    href={point.citationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-secondary hover:underline flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity"
                  >
                    <BookOpen className="w-3 h-3" />
                    {point.citation}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emotional Impact Quote */}
        <section className="py-20 bg-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <Activity className="w-12 h-12 text-secondary mx-auto mb-6" />
              <blockquote className="font-serif text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed mb-8">
                "Every 3 seconds, someone in the world is injured during a patient transfer. 
                Every day, thousands of caregivers suffer injuries that end their careers. 
                <span className="text-secondary font-semibold"> This is preventable.</span>"
              </blockquote>
              <p className="text-primary-foreground/60 text-sm mb-8">
                Based on data from the Occupational Safety and Health Administration (OSHA)
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/solution">
                  Discover How We're Solving This
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border text-center max-w-4xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Technology to Solve This Exists
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                What's been missing is an affordable, dignified solution designed for everyone—not just 
                wealthy healthcare systems. That's exactly what MAS is building.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="cta-primary" size="xl" asChild>
                  <Link to="/solution">
                    See The Solution
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="subtle" size="lg" asChild>
                  <Link to="/story">
                    Read Our Story
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

export default Problem;
