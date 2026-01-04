import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: string;
  color?: string;
  position?: { top?: string; left?: string; right?: string; bottom?: string };
  delay?: number;
}

const GlowingOrb = ({ 
  size = "w-96 h-96", 
  color = "bg-secondary/10", 
  position = { top: "0", left: "0" },
  delay = 0 
}: GlowingOrbProps) => {
  return (
    <motion.div
      className={`absolute ${size} ${color} rounded-full blur-3xl pointer-events-none`}
      style={position}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

export default GlowingOrb;
