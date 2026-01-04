import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Eye, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import InquiryModal from "./InquiryModal";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/problem", label: "The Problem" },
  { href: "/solution", label: "Solution" },
  { 
    href: "/story", 
    label: "About",
    submenu: [
      { href: "/story", label: "Our Story" },
      { href: "/team", label: "Team" },
      { href: "/partners", label: "Partners" },
    ]
  },
  { href: "/impact", label: "Impact" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/explore-tech", label: "Technology" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(1); // 1 = normal, 1.2 = large, 1.4 = extra large

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize * 100}%`;
  }, [fontSize]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        isScrolled
          ? "glass-premium shadow-premium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group hover:opacity-90 transition-opacity">
          <Logo className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1 border border-white/10">
          {navLinks.map((link) => (
            <div 
              key={link.href} 
              className="relative"
              onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 link-underline ${
                  isActiveLink(link.href)
                    ? "text-secondary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {link.submenu && (
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === link.label ? "rotate-180" : ""}`} />
                )}
              </Link>
              
              {/* Submenu */}
              <AnimatePresence>
                {link.submenu && activeSubmenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-card rounded-xl shadow-elevated border border-border p-2 min-w-[160px]">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          to={sublink.href}
                          className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                            location.pathname === sublink.href
                              ? "bg-secondary/10 text-secondary"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA Buttons & Accessibility */}
        <div className="hidden lg:flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" title="Accessibility Options">
                <Eye className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Dignity First Accessibility</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsHighContrast(!isHighContrast)}>
                <Eye className="w-4 h-4 mr-2" />
                {isHighContrast ? "Disable High Contrast" : "Enable High Contrast"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFontSize(f => f === 1.4 ? 1 : f + 0.2)}>
                <Type className="w-4 h-4 mr-2" />
                Increase Font Size ({Math.round(fontSize * 100)}%)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <InquiryModal 
            trigger={
              <Button variant="outline" size="default">
                Contact
              </Button>
            }
          />
          <Button variant="cta" size="default" asChild>
            <Link to="/invest">Donate Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                      isActiveLink(link.href)
                        ? "bg-secondary/10 text-secondary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {link.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          to={sublink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                            location.pathname === sublink.href
                              ? "bg-secondary/10 text-secondary"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <InquiryModal 
                  trigger={
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  }
                  onOpenChange={(open) => !open && setIsMobileMenuOpen(false)}
                />
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/invest" onClick={() => setIsMobileMenuOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
