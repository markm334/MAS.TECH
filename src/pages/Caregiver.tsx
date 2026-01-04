import { motion } from "framer-motion";
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Activity,
  Zap,
  Smile
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";

// Import relevant images
import caregiverStrain from "@/assets/caregiver-strain.jpg";
import dignityHope from "@/assets/african-dignity-hope.jpg";

const Caregiver = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-none px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
                  For the Unsung Heroes
                </Badge>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Restoring Ease to <br />
                  <span className="text-gradient-primary">Compassionate Care</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  We understand the physical and emotional toll of caregiving. MAS is 
                  engineered to protect your health while preserving the dignity of 
                  those you love.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="cta" size="xl" asChild>
                    <Link to="/solution">See How It Works</Link>
                  </Button>
                  <InquiryModal 
                    initialReason="general"
                    initialMessage="I am a caregiver and would like to learn more about how MAS can help me."
                    trigger={
                      <Button variant="outline" size="xl">Talk to an Expert</Button>
                    }
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-elevated border border-border">
                  <img 
                    src={caregiverStrain} 
                    alt="Caregiver Support" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </div>
                
                {/* Floating Stat Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-premium border border-border max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-xs font-bold">Safety First</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    Reduces spinal loading by up to 85% during transfers.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points & Solutions */}
        <section className="py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Designed for Your Daily Reality
              </h2>
              <p className="text-muted-foreground">
                Caregiving is a labor of love, but it shouldn't be a labor of injury. 
                MAS addresses the most critical challenges caregivers face every day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Prevent Back Injuries",
                  desc: "Manual lifting is the #1 cause of caregiver burnout. MAS handles the heavy lifting, protecting your spine and joints.",
                  icon: Activity,
                  color: "text-blue-500",
                  bg: "bg-blue-500/10"
                },
                {
                  title: "Single-Person Operation",
                  desc: "No more waiting for help. MAS allows a single caregiver to perform safe transfers with confidence and ease.",
                  icon: Zap,
                  color: "text-primary",
                  bg: "bg-primary/10"
                },
                {
                  title: "Emotional Peace of Mind",
                  desc: "Reduce the stress of potential falls. Focus on the human connection rather than the physical struggle.",
                  icon: Smile,
                  color: "text-secondary",
                  bg: "bg-secondary/10"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card p-8 rounded-[2.5rem] border border-border shadow-soft hover:shadow-card transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dignity Focus */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-premium border border-border">
                  <img 
                    src={dignityHope} 
                    alt="Dignified Care" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <span className="text-secondary font-bold text-sm uppercase tracking-widest">The Human Element</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
                    More Than a Machine, <br />A Partner in Dignity
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  When a loved one loses mobility, they often feel like a burden. 
                  MAS changes that dynamic. By making transfers smooth and effortless, 
                  we restore a sense of autonomy and respect to the process.
                </p>
                <ul className="space-y-4">
                  {[
                    "Gentle, controlled movements",
                    "Preserves eye contact during transfers",
                    "Reduces physical contact strain",
                    "Empowers user participation"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      <span className="font-medium text-foreground">{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial/Quote */}
        <section className="py-24 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Heart className="w-12 h-12 text-secondary mx-auto mb-8" />
              <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed mb-8">
                "MAS didn't just help me lift my father; it helped me be his daughter again. 
                The fear of hurting him or myself is gone, and we can focus on the time we have together."
              </blockquote>
              <div className="text-secondary font-bold uppercase tracking-widest text-sm">
                — Sarah M., Family Caregiver
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Ready to Transform Your Caregiving Experience?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/request-demo">Request a Personal Demo</Link>
              </Button>
              <InquiryModal 
                initialReason="general"
                initialMessage="I am a caregiver and would like to discuss pricing and availability."
                trigger={
                  <Button variant="outline" size="xl">Inquire About Pricing</Button>
                }
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default Caregiver;
