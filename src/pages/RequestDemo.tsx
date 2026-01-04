import { motion } from "framer-motion";
import { 
  Video, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Shield,
  Zap,
  Monitor,
  Clock,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";

const RequestDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-foreground text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Monitor className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-white/90">
                  Experience the Innovation
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
                See MAS in <span className="text-secondary">Action</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Schedule a personalized demonstration with our technical team to 
                explore how MAS can transform care in your specific environment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Demo Options & Form */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Demo Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                    What to Expect
                  </h2>
                  <p className="text-muted-foreground">
                    Our demos are tailored to your needs, whether you're a healthcare 
                    administrator, a researcher, or a family caregiver.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Live Technical Walkthrough",
                      desc: "A deep dive into the hardware mechanics and AI control systems.",
                      icon: Zap
                    },
                    {
                      title: "Use-Case Simulation",
                      desc: "See how MAS handles specific transfer scenarios (bed to chair, etc.).",
                      icon: Users
                    },
                    {
                      title: "Q&A with Engineering",
                      desc: "Direct access to our technical team for specific integration questions.",
                      icon: CheckCircle2
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-3xl bg-gradient-soft border border-border">
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    Demo Formats
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Video className="w-4 h-4" />
                      <span>Virtual Demo (Global)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>On-site Demo (East Africa)</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Request Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="glass-premium rounded-[2rem] p-8 md:p-10 border border-border shadow-premium relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                  
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                    Request Your Demo
                  </h2>

                  <InquiryForm 
                    initialReason="partnership" 
                    initialMessage="I would like to request a personalized demo of the MAS system. Please let me know your availability."
                  />

                  <div className="flex items-center justify-center gap-2 mt-8 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    <Shield className="w-3 h-3 text-primary" />
                    <span>Priority Scheduling for Partners</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Readiness */}
        <section className="py-24 bg-gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Technical Readiness</h2>
              <p className="text-muted-foreground mb-10">
                Before the demo, you may want to review our technical documentation 
                to prepare specific questions for our engineering team.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/explore-tech">
                  Review Technical Stack
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RequestDemo;
