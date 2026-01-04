import { motion } from "framer-motion";
import { 
  Building2, 
  Heart, 
  Microscope, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  Handshake,
  Users,
  Target,
  Lightbulb,
  Landmark,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";

const partnerTypes = [
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Impact investors and venture capital firms seeking meaningful returns alongside social impact.",
    benefits: [
      "Early-stage investment opportunity",
      "Regular impact reporting",
      "Advisory board positions",
      "Co-investment opportunities"
    ],
    color: "bg-primary/10",
    iconColor: "text-primary",
    link: "/partners/investors"
  },
  {
    icon: Building2,
    title: "Healthcare Partners",
    description: "Hospitals, clinics, and care homes looking to improve patient transfer safety and reduce staff injuries.",
    benefits: [
      "Early access to MAS technology",
      "Custom integration support",
      "Staff training programs",
      "Priority pricing for bulk orders"
    ],
    color: "bg-secondary/10",
    iconColor: "text-secondary",
    link: "/partners/healthcare"
  },
  {
    icon: Microscope,
    title: "Researchers",
    description: "Universities and research centers studying assistive technology, ergonomics, and healthcare innovation.",
    benefits: [
      "Research collaboration opportunities",
      "Access to user data and insights",
      "Co-authorship on publications",
      "Technology licensing options"
    ],
    color: "bg-accent/10",
    iconColor: "text-accent",
    link: "/partners/researchers"
  },
  {
    icon: Heart,
    title: "NGOs & Foundations",
    description: "Organizations focused on disability rights, healthcare access, and social impact in developing regions.",
    benefits: [
      "Joint grant applications",
      "Co-branded impact campaigns",
      "Field testing partnerships",
      "Impact measurement collaboration"
    ],
    color: "bg-destructive/10",
    iconColor: "text-destructive",
    link: "/partners/ngos"
  },
  {
    icon: Landmark,
    title: "Government Agencies",
    description: "Ministries of health and social services seeking to improve assistive technology access for citizens.",
    benefits: [
      "Policy development support",
      "Pilot program partnerships",
      "Scaled deployment planning",
      "Compliance and certification support"
    ],
    color: "bg-muted",
    iconColor: "text-muted-foreground",
    link: "/partners/government"
  },
];

const partnershipProcess = [
  { step: 1, title: "Initial Contact", description: "Reach out through our contact form or email" },
  { step: 2, title: "Discovery Call", description: "We learn about your needs and explore alignment" },
  { step: 3, title: "Proposal Development", description: "Custom partnership proposal tailored to your goals" },
  { step: 4, title: "Agreement & Launch", description: "Formalize partnership and begin collaboration" },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-soft relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Handshake className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Join Our Mission
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Partner With <span className="text-gradient-primary">MAS</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Together, we can bring dignity and independence to millions of people 
                with mobility challenges. Discover how your organization can be part of this movement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  Collaboration
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  Why Partner With Us?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  MAS is more than a product—it's a movement to transform assistive care globally. 
                  By partnering with us, you join a mission-driven team dedicated to making a 
                  measurable difference in people's lives.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Target, text: "Clear social impact with measurable outcomes" },
                    { icon: Lightbulb, text: "Innovative technology with proven validation" },
                    { icon: Users, text: "Strong community of supporters and advocates" },
                    { icon: Globe, text: "Global vision with local implementation" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "1B+", label: "People We Aim to Reach" },
                  { value: "17", label: "UN SDGs Aligned" },
                  { value: "70%", label: "Cost Reduction vs. Alternatives" },
                  { value: "24/7", label: "Partner Support" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-soft rounded-2xl p-6 text-center border border-border"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-muted-foreground">
                We welcome partnerships across sectors. Find your fit below.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {partnerTypes.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${partner.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <partner.icon className={`w-6 h-6 ${partner.iconColor}`} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {partner.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {partner.description}
                  </p>
                  <div className="space-y-1.5 mb-4">
                    {partner.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link to={partner.link}>
                      Explore Partnership
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                Our streamlined process makes it easy to get started.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                {partnershipProcess.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="text-center relative"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    
                    {index < partnershipProcess.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-border" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Partner?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Let's explore how we can work together to bring dignity and independence 
                to millions of people worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <InquiryModal 
                  initialReason="partnership"
                  trigger={
                    <Button variant="hero" size="xl">
                      Start a Conversation
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  }
                />
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/invest">
                    <Heart className="w-5 h-5" />
                    Support Our Mission
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

export default Partners;
