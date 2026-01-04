import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { 
  Lightbulb, 
  Users, 
  Settings, 
  Shield, 
  Rocket, 
  Globe,
  CheckCircle2,
  Circle,
  FlaskConical
} from "lucide-react";
import roadmapVisual from "@/assets/roadmap-visual.jpg";

// Milestone images
import milestoneDream from "@/assets/milestones/milestone-dream.jpg";
import milestoneResearch from "@/assets/milestones/milestone-research.jpg";
import milestonePrototype from "@/assets/milestones/milestone-prototype.jpg";
import milestoneValidation from "@/assets/milestones/milestone-validation.jpg";
import milestoneLaunch from "@/assets/milestones/milestone-launch.jpg";
import milestoneGlobal from "@/assets/milestones/milestone-global.jpg";

const milestones = [
  {
    year: "2017",
    title: "Dream Begins",
    description: "Personal experience with caregiver challenges sparks the vision for MAS",
    icon: Lightbulb,
    status: "completed",
    image: milestoneDream,
    details: [
      "Founder's mother diagnosed with cancer",
      "First-hand experience with care challenges",
      "Initial concept sketches created",
    ],
  },
  {
    year: "2020",
    title: "Research & Development",
    description: "Extensive user research and initial design concepts developed",
    icon: FlaskConical,
    status: "completed",
    image: milestoneResearch,
    details: [
      "50+ interviews with patients and caregivers",
      "Partnership with local healthcare facilities",
      "First technical specifications drafted",
    ],
  },
  {
    year: "2023",
    title: "Working Prototype",
    description: "First functional prototype completed and tested with real users",
    icon: Settings,
    status: "completed",
    image: milestonePrototype,
    details: [
      "Functional prototype built",
      "Initial user testing completed",
      "Design iterations based on feedback",
    ],
  },
  {
    year: "2024",
    title: "User Testing",
    description: "Pilot programs and safety validation with healthcare partners",
    icon: Shield,
    status: "current",
    image: milestoneValidation,
    details: [
      "Pilot programs in 3 healthcare facilities",
      "Safety testing and documentation",
      "Seeking funding for next phase",
    ],
  },
  {
    year: "2025",
    title: "Market Launch",
    description: "Safety certifications, manufacturing setup, and initial deployment",
    icon: Rocket,
    status: "upcoming",
    image: milestoneLaunch,
    details: [
      "Medical device certifications",
      "Manufacturing facility setup",
      "Initial deployment: 500+ units",
    ],
  },
  {
    year: "2026+",
    title: "Global Impact",
    description: "Scale globally with AI personalization and smart ecosystem integration",
    icon: Globe,
    status: "upcoming",
    image: milestoneGlobal,
    details: [
      "AI-powered personalization",
      "Expansion to 10+ countries",
      "1M+ lives impacted",
    ],
  },
];

const RoadmapSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="roadmap" className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            From Vision to{" "}
            <span className="text-gradient-warm">Global Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A clear roadmap showing how your support transforms into real-world change.
          </p>
        </motion.div>

        {/* Roadmap Visual Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative rounded-3xl overflow-hidden shadow-elevated"
        >
          <img
            src={roadmapVisual}
            alt="MAS development roadmap and future vision"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <p className="font-serif text-xl md:text-2xl font-bold text-primary-foreground">
              Building the Future of Assistive Care
            </p>
            <p className="text-primary-foreground/70 text-sm mt-2">
              Every milestone brings us closer to transforming millions of lives
            </p>
          </div>
        </motion.div>

        {/* Timeline with Images */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-card ${
                    milestone.status === "completed"
                      ? "bg-primary text-primary-foreground"
                      : milestone.status === "current"
                      ? "bg-secondary text-secondary-foreground animate-pulse"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <milestone.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content Card with Image */}
              <div
                className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300 group cursor-pointer">
                  {/* Milestone Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    
                    {/* Progress bar for current milestone */}
                    {milestone.status === "current" && (
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-muted/30">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "65%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-secondary rounded-r-full"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-sm font-bold px-3 py-1 rounded-full ${
                          milestone.status === "completed"
                            ? "bg-primary/10 text-primary"
                            : milestone.status === "current"
                            ? "bg-secondary/10 text-secondary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {milestone.year}
                      </span>
                      {milestone.status === "completed" && (
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      )}
                      {milestone.status === "current" && (
                        <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                      )}
                      {milestone.status === "upcoming" && (
                        <Circle className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {milestone.description}
                    </p>
                    
                    {/* Milestone Details - Visible on hover */}
                    <div className="space-y-2 pt-3 border-t border-border opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                      {milestone.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-semibold">Currently Seeking Funding</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            We're At a Critical Point
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            With our working prototype validated, we need <span className="text-foreground font-semibold">$2.5M</span> to 
            complete certifications, set up manufacturing, and launch pilot programs that will 
            bring MAS to thousands of people who desperately need it.
          </p>
          <p className="text-lg font-semibold text-secondary">
            Your investment today creates independence tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;