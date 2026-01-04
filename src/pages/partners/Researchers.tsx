import { motion } from "framer-motion";
import { 
  Microscope, 
  BookOpen,
  GraduationCap,
  Lightbulb,
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  FileText,
  Users,
  Globe,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";

const researchAreas = [
  {
    icon: Users,
    title: "Ergonomics & Human Factors",
    description: "Study the biomechanics of patient transfers and caregiver safety",
    opportunities: ["User interaction studies", "Motion analysis", "Fatigue measurement"],
  },
  {
    icon: Lightbulb,
    title: "Assistive Technology Innovation",
    description: "Explore new applications and configurations for MAS technology",
    opportunities: ["AI integration research", "Sensor development", "Smart home integration"],
  },
  {
    icon: Globe,
    title: "Global Health Impact",
    description: "Measure and optimize MAS deployment in diverse settings",
    opportunities: ["Field studies in LMICs", "Cost-effectiveness analysis", "Implementation science"],
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Develop optimal training methodologies for MAS users",
    opportunities: ["Learning curve studies", "Competency assessment", "Curriculum development"],
  },
];

const collaborationTypes = [
  {
    title: "Research Collaboration",
    features: ["Joint study design", "Data sharing agreements", "Co-authorship opportunities", "Access to prototype devices"],
    link: "/contact?reason=technical&tier=research"
  },
  {
    title: "Academic Partnership",
    features: ["Student internship programs", "Thesis project support", "Guest lectures", "Curriculum integration"],
    link: "/contact?reason=partnership&tier=academic"
  },
  {
    title: "Grant Partnerships",
    features: ["Joint grant applications", "Funding coordination", "Research infrastructure sharing", "Multi-site studies"],
    link: "/contact?reason=partnership&tier=grants"
  },
];

const publications = [
  { title: "Reducing Caregiver Injury Through Automated Transfer Systems", journal: "Journal of Rehabilitation Engineering", year: "2024" },
  { title: "User-Centered Design in Assistive Technology for LMICs", journal: "Disability and Rehabilitation: Assistive Technology", year: "2023" },
  { title: "Economic Analysis of Patient Handling Equipment in Healthcare", journal: "Health Economics Review", year: "2023" },
];

const Researchers = () => {
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
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                <Microscope className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Research Partnership</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Advance the Science of{" "}
                <span className="text-gradient-primary">Assistive Care</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Join our research network to study, improve, and validate assistive 
                technology solutions that transform lives worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Research Opportunities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multiple pathways for meaningful research collaboration
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-soft rounded-2xl p-6 border border-border hover:shadow-card transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <area.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-1">{area.title}</h3>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.opportunities.map((opp, i) => (
                      <span key={i} className="text-xs bg-card px-3 py-1 rounded-full text-foreground border border-border">
                        {opp}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Access */}
        <section className="py-16 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 mb-4">
                  <Database className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Data Partnership</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Access to Real-World Data
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Research partners gain access to anonymized user data, sensor readings, 
                  and outcome measurements collected through our pilot programs—all with 
                  appropriate ethical approvals and data governance.
                </p>
                <ul className="space-y-3">
                  {["Usage patterns and frequency", "Transfer success rates", "Safety incident data", "User satisfaction metrics", "Caregiver workload measurements"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="font-semibold text-foreground mb-4">Related Publications</h3>
                <div className="space-y-4">
                  {publications.map((pub, index) => (
                    <div key={index} className="p-4 bg-gradient-soft rounded-xl border border-border">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-foreground text-sm mb-1">{pub.title}</h4>
                          <p className="text-xs text-muted-foreground">{pub.journal} • {pub.year}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Collaboration Types */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Collaboration Models
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {collaborationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-soft rounded-2xl p-6 border border-border flex flex-col"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">{type.title}</h3>
                  <ul className="space-y-3 mb-8 flex-1">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <InquiryModal 
                    initialReason="technical"
                    initialMessage={`I am interested in the ${type.title} research collaboration model.`}
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
                Start a Research Partnership
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Contact our research team to explore collaboration opportunities.
              </p>
              <InquiryModal 
                initialReason="technical"
                initialMessage="I would like to contact the MAS research team regarding potential collaboration."
                trigger={
                  <Button variant="hero" size="xl">
                    Contact Research Team
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

export default Researchers;
