import { motion } from "framer-motion";
import { 
  Users, 
  Heart, 
  Lightbulb, 
  Target,
  Linkedin,
  MessageSquare,
  ArrowRight,
  Award,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import markMurangiri from "@/assets/mar.png";

const teamMembers = [
  {
    name: "Mark Murangiri",
    role: "Founder & CEO",
    bio: "Inspired by personal experience caring for his mother, Mark founded MAS to ensure no one loses their dignity due to mobility challenges. He leads the vision and strategy.",
    expertise: ["Product Vision", "Business Strategy", "Social Impact"],
    image: markMurangiri,
    icon: Lightbulb
  },
];

const advisors = [
  {
    name: "Dr. Sarah Chen",
    title: "Healthcare Advisor",
    description: "Expertise in assistive technology and rehabilitation medicine",
    icon: Heart
  },
  {
    name: "Prof. James Wilson",
    title: "Engineering Advisor",
    description: "Mechanical and biomedical engineering expertise",
    icon: Award
  },
  {
    name: "Elena Rodriguez",
    title: "Business Advisor",
    description: "Social enterprise and impact investment experience",
    icon: Briefcase
  },
];

const values = [
  {
    icon: Heart,
    title: "Dignity First",
    description: "Every decision we make prioritizes the dignity and self-respect of the people we serve."
  },
  {
    icon: Users,
    title: "User-Centered",
    description: "Real feedback from patients and caregivers shapes everything we build."
  },
  {
    icon: Target,
    title: "Impact-Driven",
    description: "We measure success by the lives we improve, not just units we sell."
  },
  {
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description: "Technology should solve real problems, not create new ones."
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-soft relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">
                  The People Behind MAS
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Meet Our <span className="text-gradient-warm">Team</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Passionate individuals united by a common mission: to restore dignity 
                and enable independence for millions of people with mobility challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Built on personal experience and driven by deep purpose.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-soft rounded-3xl p-8 md:p-12 border border-border"
                >
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-secondary mx-auto mb-6 shadow-elevated">
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
                            <member.icon className="w-24 h-24 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                      <h3 className="font-serif text-3xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-secondary text-lg font-semibold mb-4">{member.role}</p>
                      <div className="flex justify-center gap-3">
                        <Button variant="outline" size="sm" asChild className="rounded-xl">
                          <Link to="/contact">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Send Inquiry
                          </Link>
                        </Button>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-primary" />
                        </a>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Advisory Board
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We're building an advisory network of experts in healthcare, engineering, and social enterprise.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center border border-border hover:shadow-card transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <advisor.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{advisor.name}</h3>
                  <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-3">{advisor.title}</p>
                  <p className="text-sm text-muted-foreground">{advisor.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-muted-foreground mb-4">
                Interested in joining our advisory board?
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <GraduationCap className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Join Our Mission
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                We're always looking for passionate individuals who want to make a difference. 
                Whether as an advisor, partner, or supporter, there's a place for you at MAS.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Get Involved
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
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

export default Team;
