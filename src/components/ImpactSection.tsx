import { motion } from "framer-motion";
import { useInView, useCountUp } from "@/hooks/useAnimations";
import { Users, Leaf, Globe, Handshake, Heart, Target, TrendingUp } from "lucide-react";
import communityImg from "@/assets/community.jpg";
import GlowingOrb from "./GlowingOrb";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const stats = [
  { value: 50, suffix: "+", label: "Lives Impacted", icon: Users },
  { value: 90, suffix: "%", label: "Eco-Materials Used", icon: Leaf },
  { value: 12, suffix: "", label: "Counties Reached", icon: Globe },
  { value: 30, suffix: "+", label: "Community Partners", icon: Handshake },
];

const sdgs = [
  { number: 3, title: "Good Health & Well-being", color: "bg-[#4C9F38]" },
  { number: 10, title: "Reduced Inequalities", color: "bg-[#DD1367]" },
  { number: 11, title: "Sustainable Communities", color: "bg-[#FD9D24]" },
];

const impactGoals = [
  { icon: Heart, title: "Restore Dignity", description: "Preserving autonomy and self-respect in daily life" },
  { icon: Users, title: "Reduce Caregiver Injuries", description: "Protecting those who care for our loved ones" },
  { icon: Target, title: "Improve Quality of Life", description: "Enabling independent living and mobility" },
];

const impactDistribution = [
  { name: "Direct Users", value: 35, color: "hsl(185, 65%, 35%)" },
  { name: "Caregivers", value: 25, color: "hsl(15, 85%, 60%)" },
  { name: "Healthcare Facilities", value: 20, color: "hsl(38, 90%, 55%)" },
  { name: "Communities", value: 20, color: "hsl(142, 76%, 36%)" },
];

const ImpactSection = () => {
  const { ref, isInView } = useInView(0.1);
  
  const stat0 = useCountUp({ end: stats[0].value, suffix: stats[0].suffix });
  const stat1 = useCountUp({ end: stats[1].value, suffix: stats[1].suffix });
  const stat2 = useCountUp({ end: stats[2].value, suffix: stats[2].suffix });
  const stat3 = useCountUp({ end: stats[3].value, suffix: stats[3].suffix });
  const statRefs = [stat0, stat1, stat2, stat3];

  return (
    <section id="impact" className="py-24 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <GlowingOrb 
        size="w-[500px] h-[500px]" 
        color="bg-primary/5" 
        position={{ top: "20%", right: "-10%" }} 
      />
      <GlowingOrb 
        size="w-[400px] h-[400px]" 
        color="bg-secondary/5" 
        position={{ bottom: "10%", left: "-5%" }} 
        delay={2}
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <TrendingUp className="w-4 h-4" />
            Our Social Impact
          </motion.span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Creating Change That{" "}
            <span className="text-gradient-primary">Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MAS is more than technology—it's a movement toward dignity, safety, and 
            independence for millions worldwide.
          </p>
        </motion.div>

        {/* Stats Grid with enhanced animations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-premium rounded-2xl p-6 text-center magnetic-hover group"
              ref={statRefs[index].ref}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:text-accent transition-colors" />
              </motion.div>
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-foreground mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {statRefs[index].displayValue}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Impact Distribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-premium rounded-3xl p-6 md:p-8 mb-16"
        >
          <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
            Impact Distribution
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={impactDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {impactDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                    formatter={(value: number) => [`${value}%`, "Share"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {impactDistribution.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="flex-1 text-foreground">{item.name}</span>
                  <span className="font-bold text-foreground">{item.value}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Community Image & Impact Goals */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-elevated group"
          >
            <img
              src={communityImg}
              alt="MAS community impact"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <motion.div 
              className="absolute bottom-6 left-6 right-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p className="text-primary-foreground font-serif text-xl md:text-2xl">
                "Together, we're building a more inclusive world."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Our Impact Goals
            </h3>
            {impactGoals.map((goal, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-4 p-4 glass-premium rounded-xl magnetic-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <goal.icon className="w-6 h-6 text-secondary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SDG Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-foreground rounded-3xl p-8 md:p-12 relative overflow-hidden spotlight"
        >
          <div className="text-center mb-8 relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Aligned with UN Sustainable Development Goals
            </h3>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              MAS directly contributes to global sustainability targets, ensuring 
              our innovation creates lasting positive change.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {sdgs.map((sdg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10"
              >
                <motion.div 
                  className={`w-14 h-14 ${sdg.color} rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {sdg.number}
                </motion.div>
                <div>
                  <p className="text-sm text-primary-foreground/60">SDG {sdg.number}</p>
                  <p className="font-semibold text-primary-foreground">{sdg.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
