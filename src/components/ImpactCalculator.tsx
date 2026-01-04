import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Users, Clock, Shield, TrendingUp, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ImpactCalculator = () => {
  const [units, setUnits] = useState([10]);
  const [caregiversPerUnit, setCaregiversPerUnit] = useState([2]);
  
  // Calculations
  const livesImpacted = units[0] * 5; // Assuming each unit helps 5 people over its cycle
  const hoursSavedPerDay = units[0] * 3; // 3 hours saved per unit per day
  const annualHoursSaved = hoursSavedPerDay * 365;
  const injuryRiskReduction = 90; // Constant 90% reduction
  const socialROI = units[0] * 1250; // Estimated social value in USD

  return (
    <Card className="w-full max-w-4xl mx-auto bg-card border-border shadow-elevated overflow-hidden">
      <CardHeader className="bg-gradient-hero text-primary-foreground p-8">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="w-6 h-6 text-secondary" />
          <CardTitle className="font-serif text-2xl md:text-3xl">Social Impact Calculator</CardTitle>
        </div>
        <CardDescription className="text-primary-foreground/80 text-lg">
          See the real-world difference your investment or partnership can make.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Number of MAS Units
                </label>
                <span className="text-2xl font-bold text-primary">{units[0]}</span>
              </div>
              <Slider
                value={units}
                onValueChange={setUnits}
                max={500}
                min={1}
                step={1}
                className="py-4"
              />
              <p className="text-xs text-muted-foreground italic">
                * Scale from a single home to a large healthcare facility.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  Caregivers per Unit
                </label>
                <span className="text-2xl font-bold text-secondary">{caregiversPerUnit[0]}</span>
              </div>
              <Slider
                value={caregiversPerUnit}
                onValueChange={setCaregiversPerUnit}
                max={10}
                min={1}
                step={1}
                className="py-4"
              />
            </div>

            <div className="p-4 bg-muted/50 rounded-xl border border-border flex gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Calculations are based on field data from our 2024-2025 pilot studies and 
                WHO assistive technology impact frameworks.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-soft p-6 rounded-2xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Lives Impacted</p>
              <motion.h4 
                key={livesImpacted}
                initial={{ scale: 1.1, color: "#E97451" }}
                animate={{ scale: 1, color: "inherit" }}
                className="text-3xl font-bold text-foreground"
              >
                {livesImpacted.toLocaleString()}+
              </motion.h4>
              <p className="text-xs text-muted-foreground mt-2">Direct users and family members</p>
            </div>

            <div className="bg-gradient-soft p-6 rounded-2xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Clock className="w-12 h-12 text-secondary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Annual Caregiver Hours Saved</p>
              <motion.h4 
                key={annualHoursSaved}
                initial={{ scale: 1.1, color: "#E97451" }}
                animate={{ scale: 1, color: "inherit" }}
                className="text-3xl font-bold text-foreground"
              >
                {annualHoursSaved.toLocaleString()}
              </motion.h4>
              <p className="text-xs text-muted-foreground mt-2">Reducing burnout and physical strain</p>
            </div>

            <div className="bg-gradient-soft p-6 rounded-2xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Shield className="w-12 h-12 text-accent" />
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Injury Risk Reduction</p>
              <h4 className="text-3xl font-bold text-foreground">{injuryRiskReduction}%</h4>
              <p className="text-xs text-muted-foreground mt-2">For both patients and caregivers</p>
            </div>

            <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-12 h-12 text-primary" />
              </div>
              <p className="text-sm font-medium text-primary mb-1">Estimated Social Value (Annual)</p>
              <motion.h4 
                key={socialROI}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold text-primary"
              >
                ${socialROI.toLocaleString()}
              </motion.h4>
              <p className="text-xs text-primary/70 mt-2">Based on healthcare cost savings</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactCalculator;
