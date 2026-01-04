import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { AlertTriangle, UserX, Frown, HeartCrack, DollarSign } from "lucide-react";
import africanStruggle from "@/assets/african-struggle-transfer.jpg";
import africanCaregiver from "@/assets/african-caregiver-strain.jpg";
import GlobalCrisisMap from "@/components/GlobalCrisisMap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const chartData = [
  { name: "Injuries", value: 60, label: "Caregiver Injuries" },
  { name: "Burnout", value: 40, label: "Leave Profession" },
  { name: "Dignity", value: 78, label: "Feel Dehumanized" },
  { name: "Falls", value: 55, label: "Fall During Transfer" },
  { name: "Cost Barrier", value: 85, label: "Can't Afford Care" },
];

const COLORS = ["hsl(0, 84%, 60%)", "hsl(20, 84%, 55%)", "hsl(35, 90%, 50%)", "hsl(10, 80%, 58%)", "hsl(0, 70%, 50%)"];

const painPoints = [
  {
    icon: AlertTriangle,
    title: "High Risk of Injury",
    description: "Manual transfers cause falls, sprains, and life-threatening accidents for both patients and caregivers.",
    stat: "60%",
    statLabel: "of caregivers report injuries",
  },
  {
    icon: UserX,
    title: "Complete Dependence",
    description: "People lose their ability to move independently, waiting hours for help with basic needs.",
    stat: "24/7",
    statLabel: "constant care required",
  },
  {
    icon: Frown,
    title: "Loss of Dignity",
    description: "Being lifted and carried strips away self-respect and human dignity at the most vulnerable moments.",
    stat: "78%",
    statLabel: "report feeling dehumanized",
  },
  {
    icon: HeartCrack,
    title: "Caregiver Burnout",
    description: "Family members and healthcare workers suffer physical and emotional exhaustion.",
    stat: "40%",
    statLabel: "leave care profession",
  },
  {
    icon: DollarSign,
    title: "Prohibitive Costs",
    description: "Existing solutions cost $10,000-$50,000, placing them out of reach for most families.",
    stat: "$15K+",
    statLabel: "average device cost",
  },
];

const ProblemSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="problem" className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            The Crisis We Face
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Millions Struggle in Silence Every Day
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Over <span className="text-foreground font-semibold">1 billion people</span> worldwide 
            live with disabilities. Current assistive solutions fail them with unsafe transfers, 
            sky-high costs, and designs that strip away their humanity.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {point.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-destructive">{point.stat}</span>
                    <span className="text-xs text-muted-foreground">{point.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Crisis Map Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <GlobalCrisisMap />
        </motion.div>

        {/* Statistics Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-card rounded-3xl p-6 md:p-8 shadow-elevated border border-border mb-16"
        >
          <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
            The Crisis in Numbers
          </h3>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="label" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={80}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                  formatter={(value: number) => [`${value}%`, "Affected"]}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* African Reality Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-elevated group"
          >
            <img
              src={africanStruggle}
              alt="African family struggling with patient transfer"
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-primary-foreground font-semibold text-lg">The Daily Struggle</p>
              <p className="text-primary-foreground/70 text-sm">Families face dangerous transfers without proper equipment</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-elevated group"
          >
            <img
              src={africanCaregiver}
              alt="African caregiver experiencing physical strain"
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-primary-foreground font-semibold text-lg">Caregiver Burnout</p>
              <p className="text-primary-foreground/70 text-sm">Physical and emotional exhaustion takes its toll</p>
            </div>
          </motion.div>
        </div>

        {/* Emotional Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-foreground rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 via-transparent to-secondary/20 opacity-50" />
          <div className="relative z-10">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto">
              "Every 10 seconds, someone falls during a transfer. 
              Every minute, a caregiver is injured. 
              <span className="text-secondary font-semibold"> Every day, millions lose their dignity.</span>"
            </p>
            <p className="text-primary-foreground/60 mt-6 text-sm">
              — The reality we are committed to changing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
