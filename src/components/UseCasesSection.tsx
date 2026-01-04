import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { 
  Home, 
  Building2, 
  HeartPulse, 
  Users2
} from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Home Care",
    description: "Supports independent living and reduces caregiver workload in residential settings, enabling aging-in-place.",
    color: "bg-primary",
  },
  {
    icon: Building2,
    title: "Hospitals",
    description: "Improves patient handling safety and operational efficiency in clinical environments.",
    color: "bg-secondary",
  },
  {
    icon: HeartPulse,
    title: "Rehabilitation Centers",
    description: "Assists recovery and physical therapy processes with controlled, safe movement support.",
    color: "bg-accent",
  },
  {
    icon: Users2,
    title: "Elderly Care Facilities",
    description: "Enhances resident mobility while reducing staff injury rates and burnout.",
    color: "bg-primary",
  },
];

const UseCasesSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Where MAS Makes a Difference
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Designed for{" "}
            <span className="text-gradient-primary">Every Environment</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MAS adapts seamlessly to diverse settings, bringing dignified care 
            wherever it's needed most.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-muted/30 rounded-2xl p-6 text-center h-full hover:bg-muted/50 transition-all duration-300 border border-border hover:shadow-card">
                <div className={`w-16 h-16 ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
