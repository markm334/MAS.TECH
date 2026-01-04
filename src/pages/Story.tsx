import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { Quote, Heart, ArrowRight, Star, Calendar, MapPin, Lightbulb, Target, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import EvolutionGallery from "@/components/EvolutionGallery";
import foundersStory from "@/assets/founders-story.jpg";
import markMurangiri from "@/assets/mar.png";

const timeline = [
  {
    year: "Early Years",
    title: "A Mother's Love",
    content: "My mother worked tirelessly to give me opportunities she never had. She was strong, independent, full of life—the kind of woman who could handle anything.",
    icon: Heart,
  },
  {
    year: "The Diagnosis",
    title: "When Everything Changed",
    content: "Cancer. One word that shattered our world. Slowly, ruthlessly, it stole her strength. The woman who carried me through life now struggled to lift herself.",
    icon: Target,
  },
  {
    year: "The Struggle",
    title: "Watching Dignity Slip Away",
    content: "She became bedridden. Every transfer from bed to wheelchair was a moment of vulnerability. I saw the light dim in her eyes each time she needed help with the simplest things.",
    icon: Users,
  },
  {
    year: "The Promise",
    title: "A Vow to Change Things",
    content: "In those difficult moments, I made her a promise: No one should ever feel this way. Her suffering would not be in vain—it would spark a revolution in care.",
    icon: Lightbulb,
  },
  {
    year: "Today",
    title: "MAS is Born",
    content: "From sleepless nights of research and frustration with inadequate solutions, MAS emerged. A working prototype that honors her memory and serves millions facing similar challenges.",
    icon: Award,
  },
];

const values = [
  {
    title: "Dignity Above All",
    description: "Every design decision starts with one question: Does this preserve the user's dignity?",
    icon: Heart,
  },
  {
    title: "Accessibility for Everyone",
    description: "We refuse to create a solution only the wealthy can afford. MAS serves those who need it most.",
    icon: Users,
  },
  {
    title: "Community-Centered",
    description: "We design with, not for. Real users and caregivers guide every iteration.",
    icon: Target,
  },
  {
    title: "Sustainable Impact",
    description: "True change is lasting change. We build for the long term, with the planet in mind.",
    icon: Lightbulb,
  },
];

const Story = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src={foundersStory}
                    alt="Founder Mark Murangiri - the story behind MAS"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </div>
                
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-6 -right-6 md:right-6 bg-card rounded-2xl p-5 shadow-elevated border border-border max-w-xs"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-secondary animate-heartbeat" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Born from Love</p>
                      <p className="text-xs text-muted-foreground">A son's promise</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "She taught me everything. Now it's my turn to give back."
                  </p>
                </motion.div>
              </motion.div>

              {/* Story Introduction */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  The Heart Behind MAS
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-8">
                  When Cancer Changed{" "}
                  <span className="text-gradient-warm">Everything</span>
                </h1>

                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-10 h-10 text-secondary/20" />
                  
                  <div className="space-y-5 text-muted-foreground leading-relaxed pl-6 border-l-2 border-secondary/30">
                    <p className="text-lg">
                      <span className="text-foreground font-semibold">My mother was my world.</span>{" "}
                      She raised me with unwavering love, working tirelessly to give me opportunities 
                      she never had.
                    </p>
                    
                    <p>
                      Then cancer came. I watched her become bedridden—the woman who carried me 
                      now unable to lift herself from bed to wheelchair.
                    </p>

                    <p>
                      The worst part wasn't the illness. It was watching her dignity slip away 
                      with every assisted transfer.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Full Story Timeline */}
        <section className="py-20 bg-gradient-soft" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Journey That Led to MAS
              </h2>
              <p className="text-muted-foreground">
                Every innovation has a story. Ours begins with love, continues through pain, 
                and is driven by an unwavering commitment to change.
              </p>
            </motion.div>

            <InteractiveTimeline />
          </div>
        </section>

        {/* Evolution Gallery Section */}
        <EvolutionGallery />

        {/* The Emotional Core - Quote */}
        <section className="py-20 bg-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <Quote className="w-12 h-12 text-secondary/40 mx-auto mb-6" />
              <blockquote className="font-serif text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed mb-6">
                "The worst part wasn't the illness. It was watching her dignity slip away. 
                Every time she needed help with the simplest transfer, I saw the light dim 
                in her eyes. <span className="text-secondary font-semibold">She felt like a burden.</span>"
              </blockquote>
              <p className="text-primary-foreground/60 mb-2">
                "I made her a promise that day: <em>No one should ever feel this way.</em>"
              </p>
              <div className="flex flex-col items-center mt-10">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary shadow-elevated mb-4">
                  <img 
                    src={markMurangiri} 
                    alt="Mark Murangiri" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-serif text-xl font-bold text-primary-foreground">Mark Murangiri</p>
                  <p className="text-secondary font-medium">Founder, MAS</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border">
                <div className="text-center mb-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    This Isn't Just a Product
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    MAS was born from that promise—from sleepless nights researching solutions 
                    that didn't exist, from the frustration of seeing families struggle with 
                    inadequate equipment.
                  </p>
                </div>

                <div className="bg-secondary/10 rounded-2xl p-6 md:p-8 mb-10 text-center">
                  <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
                    <span className="text-secondary font-bold">
                      This is a mission to restore dignity to millions.
                    </span>{" "}
                    Every feature honors her memory and serves every loved one facing similar challenges.
                  </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gradient-soft rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                        <value.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder Bio */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8 items-center"
              >
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-secondary mx-auto mb-6 shadow-elevated">
                    <img 
                      src={markMurangiri} 
                      alt="Mark Murangiri" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-1">Mark Murangiri</h3>
                  <p className="text-secondary font-semibold mb-2">Founder & CEO</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Sagana, Kenya</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Mark Murangiri is an innovator and social entrepreneur driven by a deeply 
                    personal mission. After watching his mother's struggle with mobility during 
                    her battle with cancer, he dedicated himself to creating technology that 
                    preserves human dignity.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With a background in engineering and a heart for social impact, Mark has 
                    spent years developing the Multifunctional Assistive System—combining his 
                    technical skills with insights from caregivers and healthcare professionals.
                  </p>
                  <p className="text-foreground font-semibold italic">
                    "Everyone—regardless of their physical abilities or economic status—deserves 
                    to live with dignity. MAS is my answer to that belief."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join Our Story
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                This story doesn't end here—it continues with every life MAS touches. 
                Be part of this journey and help us write the next chapter.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="cta-primary" size="xl" asChild>
                  <Link to="/invest">
                    <Heart className="w-5 h-5" />
                    Support Our Mission
                  </Link>
                </Button>
                <Button 
                  variant="subtle" 
                  size="lg" 
                  onClick={() => document.getElementById('evolution-gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Our Journey
                  <ArrowRight className="w-5 h-5" />
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

export default Story;
