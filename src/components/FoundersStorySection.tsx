import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { Quote, Heart } from "lucide-react";
import foundersStory from "@/assets/founders-story.jpg";
import markMurangiri from "@/assets/mar.png";

const FoundersStorySection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="story" className="py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={foundersStory}
                alt="Founder with mother"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:right-6 bg-card rounded-2xl p-6 shadow-elevated border border-border max-w-xs"
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

          {/* Story Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              The Heart Behind MAS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-8">
              When Cancer Changed{" "}
              <span className="text-gradient-warm">Everything</span>
            </h2>

            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-secondary/20" />
              
              <div className="space-y-6 text-muted-foreground leading-relaxed pl-6 border-l-2 border-secondary/30">
                <p className="text-lg">
                  <span className="text-foreground font-semibold">My mother was my world.</span>{" "}
                  She raised me with unwavering love, working tirelessly to give me opportunities 
                  she never had. She was strong, independent, full of life.
                </p>
                
                <p>
                  Then cancer came. Slowly, ruthlessly, it stole her strength. I watched her 
                  become bedridden—the woman who carried me now unable to lift herself from bed 
                  to wheelchair.
                </p>
                
                <p>
                  <span className="text-foreground font-semibold">The worst part wasn't the illness.</span>{" "}
                  It was watching her dignity slip away. Every time she needed help with the 
                  simplest transfer, I saw the light dim in her eyes. She felt like a burden. 
                  She felt ashamed.
                </p>
                
                <p className="text-foreground font-semibold text-lg">
                  I made her a promise: No one should ever feel this way.
                </p>
                
                <p>
                  MAS was born from that promise. From those sleepless nights researching 
                  solutions that didn't exist. From the frustration of seeing families like 
                  mine struggle with inadequate, expensive equipment.
                </p>
                
                <p className="text-lg">
                  <span className="text-secondary font-bold">
                    This isn't just a product. It's a mission to restore dignity to millions.
                  </span>{" "}
                  Every feature, every design choice, honors her memory and serves every mother, 
                  father, and loved one facing similar challenges.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary shadow-elevated mb-4">
                <img 
                  src={markMurangiri} 
                  alt="Mark Murangiri" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-foreground">Mark Murangiri</p>
                <p className="text-secondary font-medium">Founder, MAS</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundersStorySection;
