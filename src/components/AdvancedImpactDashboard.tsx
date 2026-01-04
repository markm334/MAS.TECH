import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Legend, AreaChart, Area,
  PieChart, Pie, Cell
} from "recharts";
import { 
  Calculator, Users, Clock, Shield, TrendingUp, Info, 
  ArrowUpRight, Zap, Leaf, DollarSign, Activity
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";

const AdvancedImpactDashboard = () => {
  const [units, setUnits] = useState([25]);
  const [years, setYears] = useState([5]);

  // Data Generation for Charts
  const cumulativeData = useMemo(() => {
    const data = [];
    let totalHours = 0;
    let totalLives = 0;
    
    for (let i = 1; i <= years[0]; i++) {
      const annualHours = units[0] * 3 * 365;
      const annualLives = units[0] * 5;
      totalHours += annualHours;
      totalLives += annualLives;
      
      data.push({
        year: `Year ${i}`,
        hours: totalHours,
        lives: totalLives,
        savings: units[0] * 1250 * i
      });
    }
    return data;
  }, [units, years]);

  const comparisonData = [
    { method: "Manual Lifting", time: 15, risk: 85, cost: 100 },
    { method: "Ceiling Hoist", time: 12, risk: 40, cost: 150 },
    { method: "MAS Platform", time: 4, risk: 5, cost: 60 },
  ];

  const environmentalData = [
    { name: "Sustainable Bamboo", value: 45, color: "#4C9F38" },
    { name: "Recycled Metal", value: 35, color: "#E97451" },
    { name: "Bio-plastics", value: 20, color: "#FD9D24" },
  ];

  const chartConfig = {
    hours: { label: "Hours Saved", color: "hsl(var(--primary))" },
    lives: { label: "Lives Impacted", color: "hsl(var(--secondary))" },
    savings: { label: "Social ROI ($)", color: "hsl(var(--accent))" },
    time: { label: "Transfer Time (min)", color: "hsl(var(--primary))" },
    risk: { label: "Injury Risk (%)", color: "hsl(var(--secondary))" },
  };

  return (
    <div className="space-y-8 w-full max-w-6xl mx-auto">
      {/* Controls Card */}
      <Card className="bg-card border-border shadow-elevated">
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Scale of Implementation (Units)
                </label>
                <span className="text-2xl font-bold text-primary">{units[0]}</span>
              </div>
              <Slider
                value={units}
                onValueChange={setUnits}
                max={1000}
                min={1}
                step={1}
                className="py-4"
              />
              <p className="text-xs text-muted-foreground">
                Adjust the number of MAS units to see the projected impact across your facility or region.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  Projection Period (Years)
                </label>
                <span className="text-2xl font-bold text-secondary">{years[0]}</span>
              </div>
              <Slider
                value={years}
                onValueChange={setYears}
                max={10}
                min={1}
                step={1}
                className="py-4"
              />
              <p className="text-xs text-muted-foreground">
                See how the benefits of MAS compound over time as the technology integrates.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="social" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="social" className="text-sm md:text-base">Social Impact</TabsTrigger>
          <TabsTrigger value="efficiency" className="text-sm md:text-base">Efficiency ROI</TabsTrigger>
          <TabsTrigger value="environmental" className="text-sm md:text-base">Sustainability</TabsTrigger>
        </TabsList>

        <TabsContent value="social" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Key Metrics */}
            <Card className="lg:col-span-1 bg-gradient-soft border-border">
              <CardHeader>
                <CardTitle className="text-lg font-serif">Impact Summary</CardTitle>
                <CardDescription>Projected totals over {years[0]} years</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-card rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Total Lives Impacted</p>
                  <h4 className="text-3xl font-bold text-primary">
                    {(units[0] * 5 * years[0]).toLocaleString()}+
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>Direct & Indirect</span>
                  </div>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Caregiver Hours Saved</p>
                  <h4 className="text-3xl font-bold text-secondary">
                    {(units[0] * 3 * 365 * years[0]).toLocaleString()}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>Burnout Reduction</span>
                  </div>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Social Value Created</p>
                  <h4 className="text-3xl font-bold text-accent">
                    ${(units[0] * 1250 * years[0]).toLocaleString()}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>Healthcare Savings</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth Chart */}
            <Card className="lg:col-span-2 border-border">
              <CardHeader>
                <CardTitle className="text-lg font-serif">Cumulative Impact Growth</CardTitle>
                <CardDescription>Visualizing the compounding benefits of MAS deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <AreaChart data={cumulativeData}>
                    <defs>
                      <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-hours)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--color-hours)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="year" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      tickFormatter={(value) => `${value >= 1000 ? (value/1000).toFixed(1) + 'k' : value}`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="hours" 
                      stroke="var(--color-hours)" 
                      fillOpacity={1} 
                      fill="url(#colorHours)" 
                      strokeWidth={3}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="lives" 
                      stroke="var(--color-lives)" 
                      fill="transparent" 
                      strokeWidth={3}
                      strokeDasharray="5 5"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="efficiency" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-serif">Transfer Time Comparison</CardTitle>
                <CardDescription>Average minutes per transfer cycle</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <BarChart data={comparisonData} layout="vertical" margin={{ left: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="method" 
                      type="category" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--foreground))', fontSize: 12, fontWeight: 500 }}
                      width={100}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar 
                      dataKey="time" 
                      fill="var(--color-time)" 
                      radius={[0, 4, 4, 0]}
                      barSize={32}
                    />
                  </BarChart>
                </ChartContainer>
                <div className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/10 flex gap-3">
                  <Zap className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    MAS reduces transfer time by up to <strong>73%</strong> compared to manual lifting, 
                    allowing caregivers to focus on high-value interaction.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-serif">Injury Risk Profile</CardTitle>
                <CardDescription>Relative risk of musculoskeletal injury (%)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <BarChart data={comparisonData} layout="vertical" margin={{ left: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="method" 
                      type="category" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--foreground))', fontSize: 12, fontWeight: 500 }}
                      width={100}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar 
                      dataKey="risk" 
                      fill="var(--color-secondary)" 
                      radius={[0, 4, 4, 0]}
                      barSize={32}
                    />
                  </BarChart>
                </ChartContainer>
                <div className="mt-4 p-4 bg-secondary/5 rounded-xl border border-secondary/10 flex gap-3">
                  <Shield className="w-5 h-5 text-secondary shrink-0" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    By automating the lift, MAS virtually eliminates the primary cause of 
                    caregiver back injuries and patient falls.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="environmental" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 border-border">
              <CardHeader>
                <CardTitle className="text-lg font-serif">Material Composition</CardTitle>
                <CardDescription>Sustainable sourcing and lifecycle analysis</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-center justify-around py-8">
                <div className="h-[250px] w-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={environmentalData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {environmentalData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4 mt-6 md:mt-0">
                  {environmentalData.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                      <span className="text-sm text-muted-foreground">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-1 bg-green-50/50 dark:bg-green-950/10 border-green-100 dark:border-green-900">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-green-800 dark:text-green-400">Eco-Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-green-900 dark:text-green-300">Carbon Offset</h5>
                    <p className="text-xs text-green-700/70 dark:text-green-400/60">
                      Bamboo frames sequester 4x more CO2 than traditional steel.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-green-900 dark:text-green-300">Local Assembly</h5>
                    <p className="text-xs text-green-700/70 dark:text-green-400/60">
                      Distributed manufacturing reduces shipping emissions by 60%.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-green-200 dark:border-green-800">
                  <p className="text-xs italic text-green-800/60 dark:text-green-400/40">
                    "Engineering for the next generation means protecting the world they will inherit."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer Info */}
      <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
        <Info className="w-5 h-5 text-primary shrink-0" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          This dashboard uses predictive modeling based on our 2024 pilot data and 
          standardized healthcare ROI frameworks. Actual results may vary based on 
          facility type and staff training levels.
        </p>
      </div>
    </div>
  );
};

export default AdvancedImpactDashboard;
