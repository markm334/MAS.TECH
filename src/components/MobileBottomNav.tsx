import { motion } from "framer-motion";
import { Home, Lightbulb, Heart, Users, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const mainNavItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Lightbulb, label: "Solution", path: "/solution" },
  { icon: Heart, label: "Invest", path: "/invest" },
  { icon: Users, label: "Partners", path: "/partners" },
];

const moreNavItems = [
  { label: "Problem", path: "/problem" },
  { label: "Our Story", path: "/story" },
  { label: "Impact", path: "/impact" },
  { label: "Roadmap", path: "/roadmap" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const MobileBottomNav = () => {
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* More Menu Overlay */}
      {showMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setShowMore(false)}
        />
      )}

      {/* More Menu Panel */}
      {showMore && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-20 left-4 right-4 bg-card rounded-2xl border border-border shadow-elevated z-50 md:hidden overflow-hidden"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">More Pages</h3>
              <button
                onClick={() => setShowMore(false)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {moreNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMore(false)}
                  className={`p-3 rounded-xl text-center transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 text-foreground hover:bg-muted"
                  }`}
                >
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border z-40 md:hidden safe-area-pb">
        <div className="flex items-center justify-around py-2 px-4">
          {mainNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isActive ? "bg-primary/10" : ""
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
                </motion.div>
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
          
          {/* More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-colors ${
              showMore
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                showMore ? "bg-primary/10" : ""
              }`}
            >
              <Menu className="w-5 h-5" />
            </motion.div>
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;
